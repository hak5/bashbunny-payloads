import sys, binascii, string

ansiDict = {}

def getDict(SWITCH_POSITION):
	#read ansiDict.txt file to get the bytes for the widows altcodes (ascii 128-255)
	altcode = 0
	with open('/root/udisk/payloads/'+SWITCH_POSITION+'/ansiDict.txt', 'rb') as f:
		for line in f:
			line = str(binascii.hexlify(line))
			while line.endswith('0a') or line.endswith('0d'):
				line = ''.join(line.split('0a')[:-1])
				line = ''.join(line.split('0d')[:-1])
			line = binascii.unhexlify(line)
			if len(line) > 0:
				ansiDict[str(binascii.hexlify(line))] = str(altcode)
			altcode += 1

def main(SWITCH_POSITION):
	localDir = '/root/udisk/payloads/' + SWITCH_POSITION + '/'
	lineCount = 0
	with open(localDir + 'payload.txt', 'a+') as payload:
		with open(localDir + 'img.txt', 'rb') as img:
			for line in img:
				lineCount += 1
				index = 0
				while index < len(line)-1:
					c = line[index]
					if c in string.printable:
						#normal character
						payload.write('QUACK STRING'+c+'\n')
						index += 1
					else:
						#altcode
						key = binascii.hexlify(line[index:index+3])
						payload.write('QUACK ALTCODE '+ansiDict[key]+'\n')
						index += 3
				payload.write('QUACK ENTER\n')
		payload.write('LED FINISH')
	print lineCount, 'lines processed'

if __name__ == '__main__':
	getDict(sys.argv[1])
	main(sys.argv[1])