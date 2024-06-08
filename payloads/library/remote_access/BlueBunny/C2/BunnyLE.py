import pygatt
import base64

adapter = pygatt.GATTToolBackend()
char_uuid = '0000fff2-0000-1000-8000-00805f9b34fb'

def init():
	adapter.start()
	return True

def connect():
	device_name = 'BlueBunny'

	devices = adapter.scan(run_as_root=True)
	device = next((d for d in devices if d['name'] == device_name), None)

	if device:
		device_address = device['address']
		bunny = adapter.connect(device_address)

		return bunny
	else:
		return False

def send(bunny, data: str, d_type: str):
	if d_type == "cmd":
		flag = "<CMD>"
	else:
		flag = "<PAYLOAD>"
	data = flag + data + flag
	data = base64.b64encode(data.encode("utf-8")).decode("utf-8")

	if not len(data) <= 15:
		data_pieces = []

		for i in range(0, len(data), 15):
			data_pieces.append(data[i:i + 15])

		for i, piece in enumerate(data_pieces):
			if i == (len(data_pieces) - 1):
				bunny.char_write(char_uuid, (piece + "\n").encode("utf-8"))
			else:
				bunny.char_write(char_uuid, piece.encode("utf-8"))

	else:
		bunny.char_write(char_uuid, (data + "\n").encode("utf-8"))