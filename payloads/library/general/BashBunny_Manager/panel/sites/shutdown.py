import os, os.path, subprocess

class shutdown:    

    def POST(self, data, handler):
        handler.send_response(200)
        handler.send_header('Content-type', 'text/html')
        handler.end_headers()
        handler.wfile.write('Shutting down...')
        os.unlink('run.lock')
        subprocess.call(['./shutdown.sh'])
        return None
