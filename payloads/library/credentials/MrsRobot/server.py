import os
from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer


IS_RUNNING = True
abspath = os.path.abspath(__file__)
CURR_DIR = os.path.dirname(abspath)
os.chdir(CURR_DIR)

class RequestServer(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200, "ok")
        self.send_header('Content-type', 'text/plain')
        self.protocol_version = 'HTTP/1.1'

    def do_GET(self):
        self.send_response(200, "ok")
        self.send_header("Content-type", "text/plain")
        self.end_headers()
        try:
            with open(CURR_DIR + self.path, 'r+') as f:
                data = f.read()
            self.wfile.write(data)
        except IOError:
            self.send_response(404)
            self.wfile.write(CURR_DIR)
            return

    def do_POST(self):
        global IS_RUNNING

        self.send_response(200)
        self.send_header("Content-type", "text/plain")
        self.end_headers()
        content_length = int(self.headers['Content-Length'])
        filename = self.path[1:]

        if filename == 'EOF':
            data = self.rfile.read(content_length)
            with open(CURR_DIR + "/loot/{}".format(filename), "w+") as f:
                f.write(data)
                f.close()
                self.end_headers()
                IS_RUNNING = False
        else:
            data = self.rfile.read(content_length)
            with open(CURR_DIR + "/loot/{}.txt".format(filename), "w+") as f:
                f.write(data)
                f.close()
        self._set_headers()

def run(server_class=HTTPServer, handler_class=RequestServer, port=80):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)

    while IS_RUNNING:
        httpd.handle_request()

if __name__ == '__main__':
    run()