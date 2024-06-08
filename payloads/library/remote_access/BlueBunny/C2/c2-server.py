from flask import Flask, request, render_template, jsonify
import urllib.parse
import threading
import BunnyLE

app = Flask(__name__)

bb = None
connection = 0
con_fail_count = 0

def connect_bunny():
    global bb
    global connection
    global con_fail_count

    BunnyLE.init()
    current_try = BunnyLE.connect()

    if not current_try == False:
        bb = current_try
        connection = 1
    else:
        con_fail_count += 1
        connection = 2

@app.route("/", methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        global bb
        query = request.form.get('query')
        mode = request.form.get('mode')

        BunnyLE.send(bb, query, mode)

    return render_template("index.html")

@app.route("/connect", methods=['GET'])
def connect():
    connect_thread = threading.Thread(target=connect_bunny)
    connect_thread.start()

    return render_template("connecting.html")

@app.route("/con-check", methods=['GET'])
def connectCheck():
    global con_fail_count

    if connection == 0:
        return jsonify(connected=0)
    elif connection == 1:
        return jsonify(connected=1)
    elif connection == 2:
        if con_fail_count < 5:
            connect_bunny()
            return jsonify(connected=0)
        else:
            return jsonify(connected=2)

if __name__ == '__main__':
    app.run(host="localhost", port=1472, debug=True)
