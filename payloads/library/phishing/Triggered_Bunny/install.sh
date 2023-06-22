#!/bin/bash
apt update
apt install nginx php5 php5-fpm php5-cgi -y
rm /etc/nginx/nginx.conf /etc/nginx/sites-enabled/default /etc/nginx/sites-available/default
cp nginx/default /etc/nginx/sites-available/ && cp nginx/enabled-default /etc/nginx/sites-enabled/default && cp nginx/nginx.conf /etc/nginx/ && cp -rv sites/ /var/www/html/
udisk mount
read -p "Select switch to copy payload in [1|2]: " choice
if [ "$choice" = 1 ]; then
	cp payload.txt /root/udisk/payloads/switch1
elif [ "$choice" = 2 ]; then
	cp payload.txt /root/udisk/payloads/switch2
else
	echo -e "Invalid input $choice ."
	exit 1
fi
udisk umount
chown -R www-data:www-data /var/www/html/sites
echo -e "\nInstallation completed successfully."
