import os
import sys
import json
from randcreds import RandCreds
"""

"""



class LevelSelect:
    """

    This class uses a Dynamic table for selecting how deep you want to go.

    The Specs attribute of the `levels` json object to tell the 
    bash bunny what to spoof. `None` being native, `Random` being random bytes, and `legitRandom` being
    randomly Selected from a list of legitimate USB devices.

    Currently, Levels 0 and 1 do the same thing.

    Attributes
    ----------
    levels : list of json objects
        list of json config objects. See above.

    configs : json
        json object formulated from config.json file read by constructor

    absolute_path : str
        string representation of the absolute file path.

    paranoia_level : int
        integer value pulled from config.json which represents the configured
        paranoia level.

    rand_creds : RandCreds
        credential generator takes specs json object.

    manual_override : bool
        Tells get_paranoia_parameters() function to override config file selected by cli
        argument.

    manual_override_level : int
        Tells get_paranoia_parameters() function what OPSEC level to override to.

    Methods
    -------
    get_paranoia_parameters(self, override=False)
        selects paranoia level desired by config.json, returns specs json
        object.

    compile_attackmode(self)
        generates attackmode parameters based on config or override. returns
        string containing bunny script syntactically correct command parameters.

    """
    levels = [
        {
            "lvl": 0,
            "comment": "Using config file",
            "info": "returns nothing to Attackmode, uses configured vid/pid numbers.",
            "specs": {
                "lvl": 0,
                "VID": "config",
                "PID": "config",
                "MAN": "config",
                "PRO": "config",
                "SN": "config",
                "MSD": "config",
                "MAC": "config"
            }
        },
        {
            "lvl": 1,
            "comment": "Random VID/PID from Legit Vendors and Devices",
            "info": "For best results use exclusively HID attackmode.",
            "specs": {
                "lvl": 1,
                "VID": "legitRandom",
                "PID": "legitRandom",
                "MAN": "legitRandom",
                "PRO": "legitRandom",
                "SN": "random",
                "MSD": None,
                "MAC": None
            }
        },
        {
            "lvl": 2,
            "Comment": "Random (and legitimate) Vid/Pid and random OUI Mac Address",
            "info": "For best results, use with HID ETHERNET",
            "specs": {
                "lvl": 2,
                "VID": "legitRandom",
                "PID": "legitRandom",
                "MAN": "legitRandom",
                "PRO": "legitRandom",
                "SN": "random",
                "MSD": None,
                "MAC": "random"
            }
        },
        {
            "lvl": 3,
            "Comment": "Random (and legitimate) Vid/Pid, and a legit OUI MAC Address Which may NOT be related to the selected USB device.",
            "info": "For best results, use with HID ETHERNET",
            "specs": {
                "lvl": 3,
                "VID": "legitRandom",
                "PID": "legitRandom",
                "MAN": "legitRandom",
                "PRO": "legitRandom",
                "SN": "random",
                "MSD": None,
                "MAC": "legitRandom"
            }
        }
    ]

    # default constructor, accepts config file and absolute path
    def __init__(self, config_file, abs_path, manual_override=False, manual_override_level=2):
        """

        Parameters
        ----------
        config_file : str
            config file name (config.json)
        abs_path : str
            config file file path (/root/udisk/payloads/switch1/counterForensics/)

        Optional Parameters
        -------------------
        manual_override : bool
            alerts selector class to/not to override config file. Default
            override is false.
        manual_override_level : int
            level to override to.

        """
        self.configs = json.load(open(config_file, encoding="utf-8"))
        self.absolute_path = abs_path
        self.level = self.configs["default_level"]
        self.manual_override = manual_override
        self.manual_override_level = manual_override_level

        if manual_override_level >= len(self.levels):
            # manual override value is invalid, setting to false.
            self.manual_override = False

        self.rand_creds = RandCreds(
            self.configs,
            self.get_parameters(override=self.manual_override),
            abs_path
        )

    # iterates over hardcoded parameter list then returns the specs used by the
    # randCreds Class
    def get_parameters(self, override=False):
        """Selects security level desired by config.json or manually using optional parameter"""
        if override:
            # if paranoia level is set to override, passes cli arg 1 as the paranoia
            # level.
            self.level = self.manual_override_level
            return self.levels[self.level].get('specs')
        else:
            for x in range(len(self.levels)):
                if self.levels[x].get('lvl') == self.level:
                    return self.levels[x].get('specs')


    # I've done my best to support manufacturers and products with spaces,
    # I have made the script remove funny chars, but spaces are preserved
    # for realism, hopefully the escaped spaces do not freak out the ATTACKMODE command.
    def compile_attackmode(self):
        """Generates Random Credentials and returns string object"""
        return self.rand_creds.compile_attackmode()


if __name__ == '__main__':
    """Driver for VID/PID Obfuscation Class"""
    abs_path = os.path.dirname(os.path.abspath(__file__))
    config_file=f"{abs_path}/config.json"

    # if first cli argument is not null, passes it to the Obfuscator Class
    # configured to override security level to the selected one at runtime.

    try:
        if sys.argv[1]:
            operational_security = LevelSelect(
                config_file,
                abs_path,
                manual_override=True,
                manual_override_level=int(sys.argv[1], base=10)
            )
            print(operational_security.compile_attackmode())
    except IndexError:
        # uses config file when $1 is null
        operational_security = LevelSelect(config_file, abs_path)
        print(operational_security.compile_attackmode())
