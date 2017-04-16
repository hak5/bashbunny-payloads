**Undercover Bunny for the Hak5 Bash Bunny** 
This payload uses CMD to create a hotspot piggybacking off the victims internet connection. 

**Options** 

You may customize the follwing options in lines 18-32 in payload.txt: 

# Bash Bunny name
bbname=BashBunny                                                                           
                                     
# Access point name                                  
apname=yummy_bunny
                                     
# Access point password                                                      
password=hak5bunny
 
# Millaseconds to clean up (and stop) script after "Start network" is executed (+0.250 seconds)
xeject=120000
