$(document).ready(function() {

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
                var attack_mode = '<div id="attack-mode-switcher"></div><br />';
                $('#readme-target').html(btn+attack_mode+(response.readme.length ? response.readme : '<strong>Missing Read-Me file</strong>'));

                $.ajax({
                    url: 'inc/actions.php',
                    type: 'POST',
                    data: {
                        'action':'get_attackmode',
                        'payload':id
                    },
                    success: function(get_response) { 
                        get_response = JSON.parse(get_response);
                        var attack_modes = get_response.attackmodes.split(/,/);
                        console.log(attack_modes);
                        for(var am in attack_modes) {
                            var is_active = (attack_modes[am].match(/^#/) ? false : true);
                            var name = attack_modes[am].replace(/^#/, '').replace(/\ /g, '-');
                            $('#attack-mode-switcher').append('<div id="'+name+'" class="attack-mode is_active_'+(is_active ? 'true' : 'false')+'">'+attack_modes[am]+'</div>');
                        }
                    }
                });
            }
        });
    });
    $(document).on('click', '.attack-mode', function() {
        var active = ($(this).attr('class').match(/is_active_true/) ? true : false);
        if(active) {
            //Turn it off
            $(this).removeClass('is_active_true').addClass('is_active_false');
            $(this).html('#'+$(this).html());
        } else { 
            //Turn it on
            $(this).removeClass('is_active_false').addClass('is_active_true');
            $(this).html($(this).html().replace(/^#/, ''));
        }
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
        var attack_modes = {};
        $('.attack-mode').each(function(i, that) {
            var this_attack_mode = $(that).attr('id').replace(/-/g, ' ');
            var this_is_active   = ($(that).attr('class').match(/is_active_true/) ? true : false);
            // console.log('attack-mode: '+this_attack_mode+':'+this_is_active);
            attack_modes[this_attack_mode] = this_is_active;
        });
        // console.log('attack_modes: ',attack_modes);
        $.ajax({
            url: 'inc/actions.php',
            type: 'POST',
            data: {
                'action':'move_payload',
                'attack_modes': JSON.stringify(attack_modes),
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