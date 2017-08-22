function OSX() {
     case $1 in
          "TERMINAL")
               case $2 in
                    "OPEN")
                         Q CTRL SPACE
                         Q STRING terminal
                         Q ENTER
                    ;;
                    "INIT")
                         Q STRING "export PS1='\e[0;31mbashbunny>\e[m '"
                         Q ENTER
                         Q STRING "clear"
                         Q ENTER
			           ;;
		              "MINIMIZE")
                         Q STRING 'printf \\e[2t'
                         Q ENTER
			           ;;
		              "MAXIMIZE")
                         Q STRING 'printf \\e[1t'
                         Q ENTER
			           ;;
		              "HIDE")
                         Q STRING 'printf \\e[6t'
                         Q ENTER
			           ;;
		              "SHOW")
                         Q STRING 'printf \\e[5t'
                         Q ENTER
			           ;;         
		              "ZOOM")
                         Q STRING 'printf \\[9;1t'
                         Q ENTER
			           ;;
		              "RESIZE")
                         Q STRING "printf '\e[8;'$3';'$2't'"
                         Q ENTER
			           ;;
 		              "CLEAR")
                         Q STRING "clear"
                         Q ENTER       
			           ;;  
 		              "CLOSE")
                         Q STRING "killall Terminal"
                         Q ENTER    
			           ;;                    
               esac         
          ;;
     esac
}

export -f OSX