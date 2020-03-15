# BashBunny Manager

* Author: David Haintz
* Version: 1.0
* Target: Any



## Description

BashBunny Manager is a python-based web interface to quickly switch between payloads and languages. Additionally new payloads/languages can be added or old ones removed.

The payload starts a web server on the BashBunny and opens the URL over the HID interface.
Please change the payload.txt file according to your OS!

Default login: admin:admin


### Payloads

Payloads are categorized into the corresponding folder names. To see the payloads in a category, just click a category. This will open a list with the related payloads.
In this list you can delete payloads by clicking the button with the trash icon.
You can also arm a payload by clicking "Arm". This will copy the whole payload folder onto switch 1.

To import new payloads, use the button named "Import" at the upper right corner. Then select a ZIP archive with following folder structure:

/payload_category/payload_name/payload.txt

Be careful, existing payloads will be overwritten!


### Languages

By using the button with the trash icon, you can delete a selected language.
To set a language use the button named "Set language".
To import new payloads, use the button named "Import" at the upper right corner and select a fitting json file.

Be careful, existing languages will be overwritten!


### Shutdown

On the upper right corner you can click "Shutdown". This will end the web interface with the underlying server and shutdown the Bash Bunny. As soon as the LED turns off, you can safely remove it.


### Users

To delete a user, just use the button with the trash icon in the user list. Deleting a user will automatically log the user out.
To add a new user, enter the credentials into the form on the upper right corner and press "add".
If an already existing user is added, the password for the user will be updated.

Be careful, if all users are deleted you can't access the web interface anymore. Restoring the original /panel/credentials file will add the initial user again.



## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Magenta			 | Setup								        |
| Green              | Web interface started                        |
