# ViperBunny 
## Overview
* ViperBunny is a script to install and launch Viper malware analysis framework. 
* ViperBunny was developed using firmware 1.5 (payload uses AUTO_ETHERNET).
* Payload runs with CUCUMBER ENABLE as the resource usage is low.
* All tools are installed into /tools/ directory.

## Getting Started
1. Get Bunny to access the Internet
2. Run install.sh on Bunny to install all of components
3. Boot Bunny in Arming mode and upload payload.txt
4. Boot Bunny to run the payload.txt
5. Access Viper at http://<bunny.ip>:8080/

## Software Installed
1. viper v1.2 - https://github.com/viper-framework/viper/releases
2. ssdeep v2.14.1 - https://github.com/ssdeep-project/ssdeep/releases
3. yara v3.7.0 - https://github.com/VirusTotal/yara/releases
