var autosubmitflag = 0;
var weather_postal = [20001,20166];

$(document).ready(function(){
    // Setup console
    setup_console();

    // These links open in window named 'pop', so there can only be one
    $('.pop').click(function() {
        var url = $(this).attr('href');
        window.open(url,'pop');
        return false;
    });

    // Validate and submit login form
    $('#btn_submit').click(function() {
        if (!$('#promoterms').is(':checked'))
        {
            alert('You must accept the Terms and Conditions in order to login.');
            return false;
        }

        // Submit form
        $('#loginform').submit();
    });

    $.each(weather_postal, function(idx, postal) {
        $.post(
            basepath + 'ajax/getweather',
            {
                'postal': postal,
            },
            function(data) {
                var json_data = jQuery.parseJSON(data);
                if (json_data.weather_data)
                {
                    var weather = json_data.weather_data;

                    $('#weather_high_'+postal).html(weather.high);
                    $('#weather_low_'+postal).html(weather.low);
                    $('#weather_url_'+postal).attr('src', weather.url);
                }
            }
        );
    });

    autosubmit();
});

var setup_console = function()
{
    if (!window.console)
        window.console = {};

    if (!window.console.log)
        window.console.log = function () { };
}

// Set autosubmit flag, or go back if already set
var autosubmit = function()
{
    if (autosubmitflag == 1)
    {
        if (getCookie('disableAutoSubmit') != '1')
        {
            setCookie('disableAutoSubmit','1');
            document.loginform.submit();
            return
        }

        // Go back
        history.go(-1);
    }
}

// Turn on autosubmit
var autosubmiton = function()
{
    autosubmitflag = 1;
}

// Pop-up logout window
var logoutwindow = function()
{
    var logouturl = basepath + 'logoutwindow';
    if (!window.open(logouturl, 'logout','toolbar=0,location=0,directories=0,status=0,scrollbars=auto,resizable=1,copyhistory=0,width=360,height=215,top=100,left=100'))
    {
        alert('The Logout Window was unable to open because of a Pop-Up Blocker.  Please disable your Pop-Up Blocker for this site.  When you are ready to logout turn off your wireless radio or shutdown your computer for 15 minutes.');
    }
}
