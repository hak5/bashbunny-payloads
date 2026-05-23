import os
rng_module = None

# if secrets is not installed, uses linux urandom
try:
    from secrets import token_bytes, randbelow
    rng_module = "secrets"
except ImportError:
    from os import urandom
    from random import SystemRandom
    # using linux urandom
    rng_module = "urandom"


# small helper function turns hex objects to strings.
def hex2str(hex_):
    """Hex to string"""
    return str(hex_)


# gets random bytes from rng module(s) returning hex object
def get_rand_bytes(size_in_bytes):
    """Generates random bytes of a given length"""
    if rng_module == "secrets":
        return token_bytes(size_in_bytes).hex()
    else:
        return urandom(size_in_bytes).hex()


# unifying function which returns random number within a range
# regardless of the selected random number generator library
def get_rand_int(int_max_range):
    """RNG ambiguous random int generator"""
    if rng_module == "secrets":
        return randbelow(int_max_range - 1)
    else:
        rng = SystemRandom()
        return rng.randint(1, int_max_range)


# generating random serial number between 1 and 10000
def generate_random_serial_number():
    """Generates random serial number between 1 and 1000000"""
    if rng_module == "secrets":
        return str(randbelow(999999999))
    else:
        rng = SystemRandom()
        return rng.randint(1, 999999999)


def generate_mac_dev_id(full_mac=False):
    """Generates Last Three Octets of Mac Address"""
    if not full_mac:
        # not generating entire mac address
        mac_str = hex2str(get_rand_bytes(1))
        for i in range(0, 2):
            mac_str += ":"+hex2str(get_rand_bytes(1))
        return str.upper(mac_str)
    else:
        # generating entire mac address
        # first octet
        mac_str = hex2str(get_rand_bytes(1))
        for i in range(0, 5):
            mac_str += ":"+hex2str(get_rand_bytes(1))
        return str.upper(mac_str)


class RandCreds:
    """RandCreds Vid/Pid/Man Selector Class

        Attributes
        ----------
        config : json
            config file json object
        specs : json
            specs json object
        absolute_path : str
            absolute path of script of local directory
        vid : str
            vid number, two bytes represented as a string ("0000")
        pid : str
            pid number, two bytes ("0000")
        serial_number : str
            serial number, ~ 1-10000 always randomly selected
        device_name : str
            Device Name string.
        manufacturer : str
            manufacturer string (ignored as of now, to be implemented later)
        mac_address : str
            colon-formatted Mac Address. Left None if not selected.
        legit_random_dev_info : str[]
            formatted device list of strings containing the legit list of values
            selected by the select_legit_random function.


        Methods
        -------
        select_legit_random
            iterates over database file compiling vid/pid combo.

        generate_vid(self)
            generates random vid number, if legitRamdom is selected, uses
            data from legit_random_dev_info.

        generate_pid(self)
            generates random pid number, if legitRamdom is selected, uses
            data from legit_random_dev_info.

        generate_manufacturer(self)
            generates manufacturer.

        generate_drive_label()
            returns control boolean to change drive label or not

        generate_all(self)
            generates all fields that are selected, assigning new variables
            to class attributes.

        generate_mac_address(self)
            returns control variable that dictates wether or not to generate a
            mac address.

        generate_mac(self)
            generates a desired Mac Address based on config. If it is configured
            to be generated at random, it is. If it is to be generated at legit
            random, then it is. It returns the desired mac address in full, and
            sets the class field to the value returned.

        compile_attackmode(self)
            returns string attackmode parameters by iterating over a dictionary
            of the different attributes that can be entered. If an attribute is
            not null, then the contents of the parameter are printed to the

        print_device_info(self)
            debugging function to print selected device info.
    """

    def __init__(self, configs, specs, abs_path):
        """RandCreds Constructor

        Parameters
        ----------
        configs : json
            config json object.
        specs : json
            json object selected from paranoia_table.
        abs_path : str
            str path of the absolute path of the script executing.
            This is needed for the selection of the database file
            containing all vid/pid combos.
        """

        self.config = configs
        self.specs = specs
        self.absolute_path = abs_path
        self.config_driven = False

        self.vid = None
        self.pid = None
        self.serial_number = None
        self.device_name = None
        self.drive_label = None
        self.manufacturer = None
        self.mac_address = None
        # self.generate_all()

        # legit random device generation
        # for external reference: [vid, pid, dev_name, man_name, mac]
        self.legit_random_dev_info = [
            None,  # vid
            None,  # pid
            None,  # dev name
            None,  # manufacturer
            None   # mac
        ]
        self.select_legit_random()

    def select_legit_random(self):
        """Selects Legit Vid/Pid combos random from database file."""
        if self.generate_drive_label():
            file_ = open(self.absolute_path+'/'+self.config["database_file"]["usb_storage_csv"], "r", encoding="utf-8")
            file_maximum = self.config["database_file"]["num_storage_entries"]
        else:
            file_ = open(self.absolute_path+'/'+self.config["database_file"]["vid_pid_csv"], "r", encoding="utf-8")
            file_maximum = self.config["database_file"]["num_vendor_entries"]

        # Line key = [vid, pid, dev_name, man_name, mac_addr]
        stop = get_rand_int(file_maximum-1)
        counter = 0

        for line in file_.readlines():
            line = line.strip('\n')
            if counter == stop:
                str_ = line.split(',')
                self.legit_random_dev_info = [
                    str_[0],  # vid
                    str_[1],  # pid
                    str_[2],  # prod
                    "".join(str_[3:]).strip("\""),  # manufacturer
                    self.generate_mac()  # mac
                ]
                break
            else:
                counter += 1

        if self.generate_drive_label():
            self.drive_label = self.legit_random_dev_info[2]
            # self.echo_drive_label()
        # print(self.legit_random_dev_info)

    def generate_vid(self):
        """Selects Vid Number"""
        for key in self.specs:
            if key == "VID" and self.specs[key]:
                if self.specs[key].lower() == "legitrandom":
                    self.vid = hex2str(self.legit_random_dev_info[0]).upper()
                    break
                elif self.specs[key].lower() == "random":
                    self.vid = hex2str(get_rand_bytes(2)).upper()
                    break
                elif self.specs[key].lower() == "config":
                    self.vid = self.config["default_vid"]
                    break
            else:
                self.vid = self.config["default_vid"]

    def generate_pid(self):
        """Selects Pid Number"""
        for key in self.specs:
            if key == "PID" and self.specs[key]:
                if self.specs[key].lower() == "legitrandom":
                    self.pid = hex2str(self.legit_random_dev_info[1]).upper()
                    break
                elif self.specs[key].lower() == "random":
                    self.pid = hex2str(get_rand_bytes(2)).upper()
                    break
                elif self.specs[key].lower() == "config":
                    self.pid = self.config["default_pid"]
                    break
            else:
                self.pid = self.config["default_vid"]

    def generate_manufacturer(self):
        """Selects Manufacturer"""
        for key in self.specs:
            if key == "MAN" and self.specs[key]:
                if self.specs[key].lower() == "legitrandom":
                    # self.legit_random_dev_info[2] is skipped, it's the device name.
                    self.manufacturer = self.legit_random_dev_info[3]
                    break
                elif self.specs[key].lower() == "config":
                    self.manufacturer = self.config["default_manufacturer"]
                    break
                else:
                    self.manufacturer = self.config["default_manufacturer"]
                    break
            else:
                self.manufacturer = self.config["default_manufacturer"]

    def generate_product(self):
        """Selects Product Name"""
        for key in self.specs:
            if key == "PRO" and self.specs[key]:
                if self.specs[key].lower() == "legitrandom":
                    self.device_name = self.legit_random_dev_info[2]
                    break
                elif self.specs[key].lower() == "config":
                    self.device_name = self.config["default_product_name"]
                    break
                else:
                    self.device_name = self.config["default_product_name"]
                    break
            else:
                self.device_name = self.config["default_product_name"]

    def generate_drive_label(self):
        """Returns boolean to select MSD drive label"""
        # MSD spoofing is NOT supported. If you change the drive label
        # using the native bash bunny you will kill it.
        '''
        for key in self.specs:
            if key == "MSD" and self.specs[key] == "legitRandom":
                return True
        '''
        return False

    def generate_serial_number(self):
        """Returns a serial retireved from config or randomly generated."""
        for key in self.specs:
            if key == "SN" and self.specs[key]:
                if self.specs[key].lower() == "config":
                    self.serial_number = self.config["default_serial_number"]
                    break
                else:
                    self.serial_number = generate_random_serial_number()
                    break
            else:
                self.serial_number = generate_random_serial_number()

    def generate_mac_address(self):
        """Returns Control Boolean to Generate Legitimate MAC address"""
        for key in self.specs:
            if key == "MAC" and self.specs[key]:
                return True

    def generate_mac(self):
        """Returns complete MAC address"""
        file_ = open(
            self.absolute_path+'/'+self.config["database_file"]["mac_vendors_csv"],
            "r",
            encoding="utf-8"
        )

        file_maximum = self.config["database_file"]["num_mac_entries"]

        if self.generate_mac_address():

            for key in self.specs:
                if key == "MAC" and self.specs[key].lower() == "legitrandom":
                    last_three_octets = generate_mac_dev_id()
                    stop = get_rand_int(file_maximum-1)
                    counter = 0
                    for line in file_.readlines():
                        line = line.strip('\n')
                        if counter == stop:
                            str_ = line.split(',')
                            # first 3 mac address octets held here
                            self.mac_address = (str_[0].upper()+":"+last_three_octets).replace(':', '')
                            return self.mac_address
                        else:
                            counter += 1
                elif key == "MAC" and self.specs[key].lower() == "random":
                    mac = generate_mac_dev_id(full_mac=True)
                    self.mac_address = mac.replace(':', '')
                    return self.mac_address
                elif key == "MAC" and self.specs[key].lower() == 'config':
                    return self.config["default_mac"]
        else:
            return '00:00:00:00:00:00'

    def generate_all(self):
        """Selects All fields"""
        self.generate_pid()
        self.generate_vid()
        self.generate_serial_number()
        self.generate_manufacturer()
        self.generate_product()
        self.generate_mac()

    def load_from_configs(self):
        """Loads values from config.json"""
        self.vid = self.config['default_vid']
        self.pid = self.config['default_pid']
        self.manufacturer = self.config['default_manufacturer']
        self.device_name = self.config['default_product_name']
        self.serial_number = self.config['default_serial_number']
        self.mac_address = self.config['default_mac']

    def compile_attackmode(self):
        """Dynamic Attackmode Parameter Compiler

        Regardless of the selected attackmode, it returns a string of all the
        required parameters in correct order.

        """
        self.generate_all()

        parameter_string = ''

        parameter_dict = {
            "vid": self.vid,
            "pid": self.pid,
            "drl": self.drive_label,  # ignored by ATTACKMODE parameters by default
            "man": self.manufacturer,
            "pro": self.device_name,
            "sn": self.serial_number,
            "mac": self.mac_address,
        }

        # syntactically correct parameter order
        replace_terms = [
            "<vid>",
            "<pid>",
            "<man>",
            "<pro>",
            "<sn>",
            "<mac>"
        ]

        # populates with keys to replace later with values
        # this move ensures in-place parameter concatenation.
        for elem in replace_terms:
            parameter_string += elem+" "

        # iterates through dictionary
        for attr, elem in parameter_dict.items():
            if elem:
                # neglects drive label, as it is already selected and assigned.
                if attr == "vid":
                    # parameter_string += 'VID_'+self.vid+' 's
                    parameter_string = parameter_string.replace("<vid>", 'VID_0X'+self.vid+' ')
                elif attr == "pid":
                    # parameter_string += "PID_"+self.pid+' '
                    parameter_string = parameter_string.replace("<pid>", 'PID_0X'+self.pid+' ')
                elif attr == "sn":
                    # the sn operator appears to be causing problems...
                    # parameter_string += "SN_"+str(self.serial_number)+' '
                    rep_str = 'SN_'+str(self.serial_number)+' '
                    parameter_string = parameter_string.replace("<sn>", rep_str)
                elif attr == "man":
                    # replace spaces with underlines and quotes with nothing
                    # escape spaces
                    self.manufacturer = self.manufacturer.replace(" ", "\\ ")
                    self.manufacturer = self.manufacturer.replace('"', "")
                    self.manufacturer = self.manufacturer.replace('.', "")
                    self.manufacturer = self.manufacturer.replace(',', "")
                    self.manufacturer = self.manufacturer.replace('/', "")
                    parameter_string = parameter_string.replace("<man>", 'MAN_'+str(self.manufacturer)+' ')
                elif attr == "pro":
                    # replace device_name spaces with underlines and quotes with null
                    # escape spaces
                    self.device_name = self.device_name.replace(" ", "\\ ")
                    self.device_name = self.device_name.replace('"', "")
                    self.device_name = self.device_name.replace(".", "")
                    self.device_name = self.device_name.replace(",", "")
                    self.device_name = self.device_name.replace("/", "")
                    parameter_string = parameter_string.replace("<pro>", 'PROD_'+str(self.device_name)+' ')
                elif attr == "mac":
                    # parameter_string += "MAC_"+self.mac_address+' '
                    parameter_string = parameter_string.replace("<mac>", 'MAC_'+self.mac_address+' ')

        # nulls the unset parameters
        for elem in replace_terms:
            parameter_string = parameter_string.replace(elem, "")

        return parameter_string

    def print_device_info(self):
        """Prints device info (debugging)"""
        print(
            "PID: ", self.pid, "\n",
            "VID: ", self.vid, "\n",
            "MAN: ", self.manufacturer, "\n",
            "DVN: ", self.device_name, "\n",
            "SN: ", self.serial_number, "\n"
        )
