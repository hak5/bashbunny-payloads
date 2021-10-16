#!/bin/python2
from __future__ import absolute_import
import sys
import datetime
import base64
import binascii
import struct
import time 
from io import open
try:
    try:
	    LogFile = open(u"./UIBEX_ExtractionLog.txt", u"x")
    except FileExistsError:
	    LogFile = open(u"./UIBEX_ExtractionLog.txt", u"a")
except NameError:
    try:
	    LogFile = open(u"./UIBEX_ExtractionLog.txt", u"a")
    except OSError:
	    LogFile = open(u"./UIBEX_ExtractionLog.txt", u"w")


if len(sys.argv) != 2:
    sys.stdout.write(u"Usage: {a} <Ubootimage/Block device containing image>\n".format(a=sys.argv[0]))
    sys.exit(1)


LogFile.write(u"[{a}]: Opening file {b} for reading...\n".format(a=datetime.datetime.utcnow(),b=sys.argv[1]))
try:
    InFileHan = open(sys.argv[1],u"rb")
except OSError as E:
    LogFile.write(u"[{a}]: Error. {E}\n".format(a=datetime.datetime.utcnow(),E=str(E)))
    sys.exit(1)
LogFile.write(u"[{a}]: File open. Loading header....\n".format(a=datetime.datetime.utcnow()))
InHeader = InFileHan.read(64)
LogFile.write(u"[{a}]: Header loaded. Checking Magic.\n".format(a=datetime.datetime.utcnow()))
try:
    assert InHeader[0:4:] == "'\x05\x19V"
except AssertionError:
    LogFile.write(u"[{a}]: Assertion failed, magic is not correct.\n".format(a=datetime.datetime.utcnow()))
    sys.exit(1)
LogFile.write(u"[{a}]: Magic verified.\n".format(a=datetime.datetime.utcnow()))
InHedC = InHeader + "1"
InHedC = InHedC[0:64:]
# Blanking CRC.
InHedC = InHedC[0:4:] + "\x00\x00\x00\x00" + InHedC[8::]
# Verify CRC.
HeaderCRC = struct.pack(">i",binascii.crc32(InHedC))
try:
    assert HeaderCRC == InHeader[4:8:]
except AssertionError:
    LogFile.write(u"[{a}]: Assertion failed, CRC fail to verify. Calculated CRC: {b} Stored CRC: {c}\n".format(a=datetime.datetime.utcnow(),b=base64.b16encode(HeaderCRC),c=base64.b16encode(InHeader[4:8:])))
    sys.exit(1)
LogFile.write(u"[{a}]: Header CRC: {b}\n".format(a=datetime.datetime.utcnow(),b=base64.b16encode(HeaderCRC)))
LogFile.write(u"[{a}]: Searching for uImage data.\n".format(a=datetime.datetime.utcnow()))
# Grab length and verify data.
ImageLength = struct.unpack(">i",InHeader[12:16])[0]
ImageData = InFileHan.read(ImageLength)
LogFile.write(u"[{a}]: uImage data loaded.\n".format(a=datetime.datetime.utcnow()))
# Verify CRC. 
DataCRC = struct.pack(">i",binascii.crc32(ImageData))
try:
    assert DataCRC == InHeader[24:28:]
except AssertionError:
    LogFile.write(u"[{a}]: Assertion failed, CRC fail to verify. Calculated CRC: {b} Stored CRC: {c}\n".format(a=datetime.datetime.utcnow(),b=base64.b16encode(DataCRC),c=base64.b16encode(InHeader[24:28:])))
    sys.exit(1)
LogFile.write(u"[{a}]: Data CRC: {b}\n".format(a=datetime.datetime.utcnow(),b=base64.b16encode(DataCRC)))
LogFile.write(u"[{a}]: Both CRC's have been verified. Extraction complete.\n".format(a=datetime.datetime.utcnow()))
LogFile.write(u"[{a}]: Here is header information:\n".format(a=datetime.datetime.utcnow()))
HeaderDataT = [
    (u"Image Header Magic Number",base64.b16encode(InHeader[0:4]).decode()),
    (u"Image Header CRC Checksum",base64.b16encode(InHeader[4:8]).decode()),
    (u"Image Creation Timestamp",base64.b16encode(InHeader[8:12]).decode()),
    (u"Image Data Size",base64.b16encode(InHeader[12:16]).decode()),
    (u"Data Load Address",base64.b16encode(InHeader[16:20]).decode()),
    (u"Entry Point Address",base64.b16encode(InHeader[20:24]).decode()),
    (u"Image Data CRC Checksum",base64.b16encode(InHeader[24:28]).decode()),
    (u"Operating System",ord(InHeader[28])),
    (u"CPU architecture",ord(InHeader[29])),
    (u"Image Type",ord(InHeader[30])),
    (u"Compression Type",ord(InHeader[31])),
    (u"Image Name",InHeader[32::].split("\x00")[0].decode())
]
for x in HeaderDataT:
    LogFile.write(u"{x0}: {x1}\n".format(x0=x[0],x1=x[1]))
OutFileName = "./uImage-{a}.img".format(a=int(time.time()//1))
LogFile.write(u"[{a}]: Writing image to {OutFileName}\n".format(a=datetime.datetime.utcnow(),OutFileName=OutFileName))
OutFileHan = open(OutFileName,u"wb")
OutBytes = OutFileHan.write(InHeader + ImageData)
LogFile.write(u"[{a}]: Written {OutBytes} bytes.\n".format(a=datetime.datetime.utcnow(),OutBytes=OutBytes))
LogFile.write(u"[{a}]: -------------------------------------------------------\n".format(a=datetime.datetime.utcnow()))
LogFile.close()
sys.exit(0)
