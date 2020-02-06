from BaseHTTPServer import BaseHTTPRequestHandler,HTTPServer
import sys, os.path, cgi, base64, hashlib



DEBUG = True


class FileNotFoundError(Exception):
    pass
class MethodNotAllowedError(Exception):
    pass

class web_server(BaseHTTPRequestHandler):

    def process(self, method='GET'):
        self.server_version = 'Bashbunny-Manager'
        self.sys_version = '0.1' if DEBUG else ''
        self.path = self.path.replace('..', '')
        py_path = os.path.join('sites', '{0}.py'.format(self.path[1:]))
        content_type = 'text/html'
        body = None


        # Authentication
        authenticated = False
        if self.headers.getheader('Authorization') != None and self.headers.getheader('Authorization').startswith('Basic'):
            login = base64.b64decode(self.headers.getheader('Authorization')[5:])
            username = login.split(':')[0]
            sha512 = hashlib.sha512()
            sha512.update(login)
            login_hash = sha512.hexdigest().lower()
            credentials_path = os.path.join('credentials')
            for credential in open(credentials_path, 'r+').readlines():
                credentials = credential.split(':')
                if credentials[0] == username and credentials[1].strip() == login_hash:
                    authenticated = True
                    break

        # Logout
        if self.path[1:] == 'logout' and authenticated:
            authenticated = False

        if not authenticated:
            self.send_response(401)
            self.send_header('WWW-Authenticate', 'Basic realm=\"Authentication\"')
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write('<!DOCTYPE html><html><head><meta http-equiv = "refresh" content = "0; url=/" /></head></html>')
            return


        try:
            if not os.path.isfile(py_path):
                # static files
                if method != 'GET':
                    raise MethodNotAllowedError
                file_path = 'assets{0}'.format(self.path)
                if not os.path.isfile(file_path):
                    raise FileNotFoundError
                body = open(file_path).read()
                if file_path.endswith('.js'):
                    content_type = 'application/javascript'
                elif file_path.endswith('.css'):
                    content_type = 'text/css'
            else:
                # dynamic code
                try:
                    module = __import__('sites.{0}'.format(self.path[1:]))
                    site = getattr(getattr(module, self.path[1:]), self.path[1:])
                except:
                    raise FileNotFoundError
                
                inst = site()
                if not hasattr(inst, method):
                    raise MethodNotAllowedError
                func = getattr(inst, method)
                if method == 'POST':
                    ctype, pdict = cgi.parse_header(self.headers.getheader('content-type'))
                    if ctype == 'multipart/form-data':
                        postvars = cgi.parse_multipart(self.rfile, pdict)
                    elif ctype == 'application/x-www-form-urlencoded':
                        length = int(self.headers.getheader('content-length'))
                        postvars = cgi.parse_qs(self.rfile.read(length), keep_blank_values=1)
                    else:
                        postvars = {}
                    body = func(postvars, self)
                else:
                    body = func(self)

            if body == None:
                return
            self.send_response(200)
        except FileNotFoundError:
            body = "File not found"
            self.send_response(404)
        except MethodNotAllowedError:
            body = "Method not allowed"
            self.send_response(405)
        except Exception as e:
            body = "Unknown error"
            if DEBUG:
                body = str(e)
            self.send_response(502)
        
        self.send_header('Content-type', content_type)
        self.end_headers()
        self.wfile.write(body)
 
    def do_GET(self):
        if self.path == '/':
            self.path = '/index'
        self.process()
 
    def do_POST(self):
        if self.path == '/':
            self.path = '/index'
    
        self.process('POST')
        


PORT = int(sys.argv[1]) if len(sys.argv) >= 2 else 8337

try:
    server = HTTPServer(('', PORT), web_server)
    open('run.lock', 'w+').write('run')
    while os.path.isfile('run.lock'):
        server.handle_request()
except KeyboardInterrupt:
	server.socket.close()
