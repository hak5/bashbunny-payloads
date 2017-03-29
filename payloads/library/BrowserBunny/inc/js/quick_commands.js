var git_repo = 'https://github.com/hak5/bashbunny-payloads.git';
var git_log = '/var/log/git.log';
var bunny_root = '/root/udisk';
var quick_commands = [
    {
        name:"Update apt-get",
        command:'apt-get-update && apt-get upgrade && apt-get autoremove'
    },{
        name:"Clone git repository",
        command:'if [ ! -d '+bunny_root+'/.git ]; then '  
                    +'cd '+bunny_root+'; '
                    +'echo ""; '
                    +'pwd; '
                    +'mv '+bunny_root+'/payloads '+bunny_root+'/orig-payloads; '
                    +'echo "Clone Git Repo..."; '
                    +'git init; '
                    +'echo "payloads/switch*" >> .gitignore; '
                    +'git remote add origin '+git_repo+';  '
                    +'echo "Git repository selected: '+git_repo+';"; '
                    +'git config core.sparsecheckout true; '
                    +'echo "Git configuration change: sparse-checkout=true."; '
                    +'echo "payloads" >> '+bunny_root+'/.git/info/sparse-checkout; '
                    +'echo "Sparse checkout: payloads directory selected"; '
                    +'git pull origin master; '
                    +'echo "Git repository cloned."; '
                    +'cp -fr '+bunny_root+'/orig-payloads/switch* '+bunny_root+'/payloads/.; '
                +'else '
                    +'echo "Repository already exists..."; '
                +'fi',
    },{
        name:"Update git repository",
        command:'if [ -d '+bunny_root+'/.git ]; '
                    +'then cd '+bunny_root+'/payloads/; '
                    +'echo ""; '
                    +'pwd; '
                    +'echo "Update Git Repo..."; '
                    +'git pull origin master; '
                +'else '
                    +'echo "Repository does not exist..."; '
                +'fi'
    },{
        name:"Tools Installer",
        command:'if [ -d '+bunny_root+'/payloads/library/tools_installer ]; then '
                +'if [ -d /pentest ]; then '
                    +'echo "/pentest already exists..."; '
                +'else '
                    +'mkdir -r /pentest; '
                    +'cp -r '+bunny_root+'/payloads/library/tools_installer/tools_to_install/* /pentest/.; '
                    +'if [ -d /pentest/impacket ]; then '
                        +'cd /pentest/impacket; '
                        +'python ./setup.py install; '
                    +'else '
                        +'echo "Missing /pentest/impacket folder."; '
                    +'fi '
                +'fi '
            +'else '
                +'echo "Cannot run tools installer: Missing git repository"; '
            +'fi '
    },{
        name:"cat switch1/payload.txt",
        command:'cat /root/udisk/payloads/switch1/payload.txt'
    },{
        name:"cat switch2/payload.txt",
        command:'cat /root/udisk/payloads/switch2/payload.txt'
    }
];