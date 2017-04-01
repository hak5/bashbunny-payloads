<#
.SYNOPSIS
   Get-ComputerInfo
.DESCRIPTION
   Get Some Information from a Computer 
.PARAMETER <paramName>
   none
.EXAMPLE
   Get-ComputerInfo
#>

function Get WinKey() {
    $map="BCDFGHJKMPQRTVWXY2346789"
    $value = (get-itemproperty "HKLM:\\SOFTWARE\Microsoft\Windows NT\CurrentVersion").digitalproductid[0x34..0x42]
    $ProductKey = ""
    for ($i = 24; $i -ge 0; $i--) {
        $r = 0
        for ($j = 14; $j -ge 0; $j--) {
            $r = ($r * 256) -bxor $value[$j]
            $value[$j] = [math]::Floor([double]($r/24))
            $r = $r % 24
        }
        $ProductKey = $map[$r] + $ProductKey
        if (($i % 5) -eq 0 -and $i -ne 0) {
            $ProductKey = "-" + $ProductKey
        }
    }
echo "Product Key  :" $ProductKey
}


echo "##ComputerInformation"
echo "============================================================"
Echo ""

# Vendor and Model
echo "#Vendor and Model"
(Get-WmiObject -Class Win32_ComputerSystem |Out-String).Trim()
echo ""

echo "#BIOS Information"
(Get-WmiObject -Class Win32_BIOS -ComputerName . |Out-String).Trim()
echo ""

echo "#OS Information"
    powershell -WindowStyle Hidden -Exec Bypass $SHARE\PS\GetWinKey.ps1
echo ""

echo "#Hotfixes"
(Get-WmiObject -Class Win32_QuickFixEngineering -ComputerName . |Select-Object Description, HotFixID, InstalledOn |out-string).Trim()





