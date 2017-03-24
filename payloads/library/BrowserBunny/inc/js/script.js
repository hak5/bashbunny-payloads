$(document).ready(function() {
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
                console.log(response);
                var btn = '<button class="btn btn-success btn-group-justified move-payload" id="move-'+response.payload+'">Activate this payload!</button><br />';
                $('#readme-target').html(btn+(response.readme.length ? response.readme : '<strong>Missing Read-Me file</strong>'));
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
                console.log(response);
                $('#readme-target').html((response.readme.length ? response.readme : '<strong>Missing Read-Me file</strong>'));
            }
        });
    });
    $(document).on('click', '.move-payload', function() {
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
                console.log(response);
                $('.target-switch').click();
                // $('#readme-target').html((response.readme.length ? response.readme : '<strong>Missing Read-Me file</strong>'));
            }
        });
    });



    $('.target-switch').click();
});