# ==============================
# Bash Bunny payload updater for Windows
# Author: Sami Gonzalez Kamel (samilososami)
# https://samilososami.com
# ==============================

$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"

$ROOT = Get-Location
if (!(Test-Path "$ROOT\payloads")) {
    Write-Host "[!] Run this script from Bunny root" -ForegroundColor Red
    exit 1
}

$TEMP    = Join-Path $env:TEMP "bunny_update"
$ZIP     = Join-Path $TEMP "repo.zip"
$EXTRACT = Join-Path $TEMP "repo"

$REPO_ZIP = "https://github.com/hak5/bashbunny-payloads/archive/refs/heads/master.zip"

function Line($text) { Write-Host "`r$text" -NoNewline -ForegroundColor White }
function NL { Write-Host "" }
function Log($text) { Write-Host "[*] $text" -ForegroundColor White }
function OK($text) { Write-Host "[OK] $text" -ForegroundColor Green }

Write-Host "[*] Bash Bunny updater starting..." -ForegroundColor White
Log "Preparing temporal workspace..."

Remove-Item $TEMP -Recurse -Force -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Path $TEMP -Force | Out-Null

# -------------------------------------------------
# Delete current payload directory (if any)
# -------------------------------------------------
function Remove-WithPercent {
    param($Path, $Label)

    if (!(Test-Path $Path)) { return }

    $files = Get-ChildItem $Path -Recurse -Force -File
    $total = $files.Count
    if ($total -eq 0) {
        Remove-Item $Path -Recurse -Force
        return
    }

    $i = 0
    foreach ($f in $files) {
        Remove-Item $f.FullName -Force -ErrorAction SilentlyContinue
        $i++
        if (($i % 25) -eq 0 -or $i -eq $total) {
            $pct = [math]::Floor(($i / $total) * 100)
            Line "[*] $Label... $pct% ($i/$total)"
        }
    }
    NL

    Get-ChildItem $Path -Recurse -Directory |
        Sort-Object FullName -Descending |
        ForEach-Object { Remove-Item $_.FullName -Force -ErrorAction SilentlyContinue }

    Remove-Item $Path -Force -ErrorAction SilentlyContinue
}

Log "Removing payloads\library..."
Remove-WithPercent "$ROOT\payloads\library" "Deleting library"

Log "Removing payloads\extensions..."
Remove-WithPercent "$ROOT\payloads\extensions" "Deleting extensions"

# -------------------------------------------------
# Download payloads from Hak5 github repository
# -------------------------------------------------
function Get-ContentLength($Url) {
    try {
        $req = [System.Net.HttpWebRequest]::Create($Url)
        $req.Method = "HEAD"
        $res = $req.GetResponse()
        $len = $res.ContentLength
        $res.Close()
        if ($len -gt 0) { return $len }
    } catch {}
    return 0
}

Log "Downloading payloads repository..."
$totalBytes = Get-ContentLength $REPO_ZIP

$curlArgs = @("-L","--fail","--silent",$REPO_ZIP,"-o",$ZIP)
$proc = Start-Process curl.exe `
    -ArgumentList $curlArgs `
    -NoNewWindow `
    -RedirectStandardError "$TEMP\curl.err" `
    -PassThru

while (-not $proc.HasExited) {
    Start-Sleep -Milliseconds 150
    if ((Test-Path $ZIP) -and ($totalBytes -gt 0)) {
        try {
            $current = (Get-Item $ZIP).Length
            if ($current -gt 0) {
                $pct = [math]::Min(100, [math]::Floor(($current / $totalBytes) * 100))
                Line "[*] Downloading... $pct%"
            }
        } catch {}
    }
}
NL
OK "Download complete"

# -------------------------------------------------
# Extract the downloaded zip file
# -------------------------------------------------
Log "Extracting zip archive..."

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

Remove-Item $EXTRACT -Recurse -Force -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Path $EXTRACT -Force | Out-Null

$zip = [System.IO.Compression.ZipFile]::OpenRead($ZIP)
$total = $zip.Entries.Count
$i = 0

foreach ($entry in $zip.Entries) {
    $dest = Join-Path $EXTRACT $entry.FullName
    if ([string]::IsNullOrEmpty($entry.Name)) {
        New-Item -ItemType Directory -Path $dest -Force | Out-Null
    } else {
        $dir = Split-Path $dest
        if (!(Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
        [System.IO.Compression.ZipFileExtensions]::ExtractToFile($entry, $dest, $true)
    }
    $i++
    if (($i % 100) -eq 0 -or $i -eq $total) {
        $pct = [math]::Floor(($i / $total) * 100)
        Line "[*] Extracting... $pct%"
    }
}
$zip.Dispose()
OK "Extraction complete"

# -------------------------------------------------
# Copy the files into the payloads/ folder
# -------------------------------------------------
function Copy-WithPercent($Source, $Dest, $Label) {
    $files = Get-ChildItem $Source -Recurse -File
    $total = $files.Count
    $i = 0

    foreach ($f in $files) {
        $rel = $f.FullName.Substring($Source.Length).TrimStart('\')
        $out = Join-Path $Dest $rel
        $dir = Split-Path $out
        if (!(Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
        Copy-Item $f.FullName $out -Force

        $i++
        if (($i % 25) -eq 0 -or $i -eq $total) {
            $pct = [math]::Floor(($i / $total) * 100)
            Line "[*] $Label... $pct%"
        }
    }
    OK "$Label complete"
}

$SRC = "$EXTRACT\bashbunny-payloads-master\payloads"

Log "Copying payloads\library..."
Copy-WithPercent "$SRC\library" "$ROOT\payloads\library" "Copying library"

Log "Copying payloads\extensions..."
Copy-WithPercent "$SRC\extensions" "$ROOT\payloads\extensions" "Copying extensions"

Remove-Item $TEMP -Recurse -Force -ErrorAction SilentlyContinue

Write-Host ""
OK "Bash Bunny payloads successfully updated"
