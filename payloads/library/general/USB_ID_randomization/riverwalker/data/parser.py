import os

# simple helper function adds double quotes to a string
def scan_entry(original):
    return '\"'+original+'\"'


class Parser:
    """Database file Parser Class

        Used to generate CSV file from linux foundation's collection
        of Vid/Pid combinations.

        Note: This class is only meant to be ran when the source file
        has been updated.
    """
    header = [
        "vid",
        "pid",
        "dev_name",
        "man_name"
    ]

    def __init__(self):
        self.file = open('usb_vid_pid.txt', 'r', encoding="utf-16")
        self.output = open('usb_vid_pid.csv', 'a+')

    def write_list(self, list_):
        write_str = ""
        for x in range(len(list_)):
            if x == len(list_)-1:
                write_str += list_[x]
            else:
                write_str += list_[x] + ','

        self.output.write(write_str + "\n")

    def init_file(self):
        self.write_list(self.header)

    def parse_file(self):
        last_manufacturer_name = ""
        last_manufacturer_vid = ""
        for line in self.file.readlines():
            line = line.strip('\n')
            split_line = line.split('  ')
            if not line.startswith("#") and not line.startswith("\n") and len(split_line) > 1:
                if not line.startswith("\t"):
                    last_manufacturer_vid = split_line[0]
                    last_manufacturer_name = split_line[1]
                else:
                    vid = last_manufacturer_vid
                    pid = split_line[0][1:]
                    dev_name = "".join(split_line[1])
                    man_name = last_manufacturer_name
                    info = [
                        vid,
                        pid,
                        scan_entry(dev_name),
                        scan_entry(man_name)
                    ]
                    self.write_list(info)

    def parse_file_storage(self):
        # header_key = ["vid", "pid", "dev_name", "man_name"]
        output_file = open('usb_storage_vid_pid.csv', 'a+')
        for line in open('usb_vid_pid.csv', 'r'):
            line = line.strip('\n')
            line_list = line.split(',')
            dev_name = str.lower(line_list[2])
            if dev_name.__contains__('mass') or dev_name.__contains__('storage'):
                output_file.write(line+'\n')

    def parse_file_macv(self):
        self.header = ["octets", "man_name"]
        input_file = open('OUI.list', 'r')
        out_file = open('mac_vendors.csv', 'w+')
        out_file.write(self.header[0]+','+self.header[1]+'\n')
        for line in input_file.readlines():
            line = line.strip()
            line_list = line.split(' ', maxsplit=3)
            out_file.write(
                line_list[0]+':'+line_list[1]+':'+line_list[2]+','
                '"'+"".join(line_list[3].replace('"', ''))+'"'+'\n'
            )


if __name__ == '__main__':
    parse = Parser()
    # parse.init_file()
    # parse.parse_file()
    # parse.parse_file_storage()
    # parse.parse_file_macv()
