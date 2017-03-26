$(document).ready(function() {

    var git_repo = 'https://github.com/hak5/bashbunny-payloads.git';
    var git_log = '/var/log/git.log';
    var quick_commands = [
        {
            name:"Clone git repository",
            command:'if [ ! -d /root/udisk/.git ]; then '  
                        +'cd /root/udisk; '
                        +'echo ""; '
                        +'pwd; '
                        +'mv /root/udisk/payloads /root/udisk/orig-payloads; '
                        +'echo "Clone Git Repo..."; '
                        +'git init; '
                        +'echo "payloads/switch*" >> .gitignore; '
                        +'git remote add origin '+git_repo+';  '
                        +'echo "Git repository selected: '+git_repo+';"; '
                        +'git config core.sparsecheckout true; '
                        +'echo "Git configuration change: sparse-checkout=true."; '
                        +'echo "payloads" >> /root/udisk/.git/info/sparse-checkout; '
                        +'echo "Sparse checkout: payloads directory selected"; '
                        +'git pull origin master; '
                        +'echo "Git repository cloned."; '
                        +'cp -fr /root/udisk/orig-payloads/switch* /root/udisk/payloads/.; '
                    +'else '
                        +'echo "Repository already exists..."; '
                    +'fi',
        },{
            name:"Update git repository",
            command:'if [ -d /root/udisk/.git ]; '
                        +'then cd /root/udisk/payloads/; '
                        +'echo ""; '
                        +'pwd; '
                        +'echo "Update Git Repo..."; '
                        +'git pull origin master; '
                    +'else '
                        +'echo "Repository does not exist..."; '
                    +'fi'
        },{
            name:"Tools Installer",
            command:'if [ -d /root/udisk/payloads/library/tools_installer ]; then '
                    +'if [ -d /pentest ]; then '
                        +'echo "/pentest already exists..."; '
                    +'else '
                        +'mkdir -r /pentest; '
                        +'cp -r /root/udisk/payloads/library/tools_installer/tools_to_install/* /pentest/.; '
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
        }
    ];

    for(var id in quick_commands) { 
        $('#qc-container').html($('#qc-container').html()
            +'<button class="btn btn-default quick-command" id="qc-'+id+'">'+quick_commands[id].name+'</button>'
        );
    }

    $(document).on('click', '.nav-btn', function() {
        var page = $(this).attr("id").replace(/nb-/, '');
        var pageuc = "&nbsp;| "+page.charAt(0).toUpperCase() + page.slice(1);
        // console.log("Target: "+page);
        $('.page').hide();
        $('#page-'+page).show();
        $("#page-id").html(pageuc);
    });
    $(document).on('click', '.payload', function() {
        var id = $(this).attr("id");
        $.ajax({
            url: 'inc/actions.php',
            type: 'POST',
            data: {
                'action':'get_payload',
                'payload':id
            },
            success: function(res) {
                var response = JSON.parse(res);
                // console.log(response);
                var btn = '<button class="btn btn-success btn-group-justified move-payload" id="move-'+response.payload+'">Activate this payload!</button><br />';
                $('#readme-target').html(btn+(response.readme.length ? response.readme : '<strong>Missing Read-Me file</strong>'));

                $.ajax({
                    url: 'inc/actions.php',
                    type: 'POST',
                    data: {
                        'action':'get_attackmode',
                        'payload':id
                    },
                    success: function(res1) { 
                        console.log(res1);
                    }
                });
            }
        });
    });
    $(document).on('click', '.target-switch', function() {
        var id = $(this).attr("id");
        $.ajax({
            url: 'inc/actions.php',
            type: 'POST',
            data: {
                'action':'get_existing'
            },
            success: function(res) {
                var response = JSON.parse(res);
                // console.log(response);
                var btn = '<button class="btn btn-info btn-group-justified" disabled>Active Payload</button><br />';
                $('#readme-target').html(btn+(response.readme.length ? response.readme : '<strong>Missing Read-Me file</strong>'));
            }
        });
    });
    $(document).on('click', '.move-payload', function() {
        $(this).prop("disabled", true);
        var id = $(this).attr("id").replace(/move-/, '');
        $.ajax({
            url: 'inc/actions.php',
            type: 'POST',
            data: {
                'action':'move_payload',
                'payload':id
            },
            success: function(res) {
                var response = JSON.parse(res);
                // console.log(response);
                $('#active-payload').click();
                $(this).prop("disabled", false);
                // $('#readme-target').html((response.readme.length ? response.readme : '<strong>Missing Read-Me file</strong>'));
            }
        });
    });


    $(document).on('click', '.quick-command', function() {
        var id = $(this).attr("id").replace(/qc-/, '');
        console.log(quick_commands[id]);
        $('#console-input').val(quick_commands[id].command);
    });

    $(document).on('click', '#console-execute', function() {
        var cmd = $('#console-input').val();
        $.ajax({
            url: 'inc/actions.php',
            type: 'POST',
            data: {
                'action':'console',
                'cmd':cmd
            },
            success: function(out) { 
                var res = JSON.parse(out);
                // console.log(res);
                $('#console-output').html(
                    "\$ "+cmd+"<br />\n"
                    +res.output.replace(/\n/g, '<br />')+"<br />\n"
                    +$('#console-output').html()
                );
            }
        });
    });

    $(document).on('keyup', '#console-input', function(e) {
        var code = e.which;
        e.preventDefault();
        if(code==13){
            $('#console-execute').click();
        }

    });

    $(document).on('click', '#console-clear', function() {
         $('#console-output').html("");
    });


    $('.target-switch,#nb-payloads').click();
});