$(document).ready(function() {
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


    $('.target-switch,#nb-payloads').click();
});