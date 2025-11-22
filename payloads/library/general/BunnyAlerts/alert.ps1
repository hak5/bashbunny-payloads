# Title:         Bunny Alerts
# Description:   Sends a message to Slack channel using incoming Webhook
# Author:        Jesse Allen
# Version:       1.0
# Category:      General
# Target:        Windows

<#
.DESCRIPTION 
	This program will send a message to slack
#>

# options
$msg = "Hostname: ${env:computername}, Username: ${env:username} left their computer unlocked!"
$uriSlack = "<Your Slack Webhook Url>"
$body = ConvertTo-Json @{
    text = $msg
}
Invoke-RestMethod -uri $uriSlack -Method Post -body $body -ContentType 'application/json' | Out-Null
