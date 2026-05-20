#!/usr/bin/python
from BaseHTTPServer import BaseHTTPRequestHandler,HTTPServer
from os import curdir, sep
PORT_NUMBER = 8080
class myHandler(BaseHTTPRequestHandler):
	def do_GET(self):
		if self.path=="/":
			self.path="/"
		try:
			sendReply = False
			if self.path.endswith(".sh"):
				mimetype='text/plain'
				sendReply = True
			if sendReply == True:
				f = open(curdir + sep + self.path) 
				self.send_response(200)
				self.send_header('Content-type',mimetype)
				self.end_headers()
				self.wfile.write(f.read())
				f.close()
			return
		except IOError:
			self.send_error(404,'File Not Found: %s' % self.path)
try:
	server = HTTPServer(('0.0.0.0', PORT_NUMBER), myHandler)
	server.serve_forever()
except KeyboardInterrupt:
	server.socket.close()
