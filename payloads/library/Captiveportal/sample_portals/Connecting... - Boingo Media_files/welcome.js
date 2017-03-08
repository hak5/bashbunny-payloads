$(document).ready(function(){

    $('.learn_more').on('click', function() {
        $('.learn_hide').toggle();
    });

    $('.disclaimer').on('click', function () {
        window.open('', 'eula', 'toolbar=0, scrollbars=1, location=0, statusbar=0, menubar=0, resizable=1, width=600, height=400');
    })

    var ua = navigator.userAgent.toLowerCase();
    
    if (ua.indexOf("android") > -1) {
        $('.download_app').attr("href", "https://play.google.com/store/apps/details?id=com.boingo.boingowifi");
    }

    else if (ua.indexOf("mac os x") > -1) {
        $('.download_app').attr("href", "https://itunes.apple.com/us/app/boingo-wi-finder/id297596317");
    }

    else if (ua.indexOf("win") !=-1) {
        $('.download_app').attr("href", "http://static-assets.boingo.com/apps/pcwupg003/wifinder-win7.exe");
    }


});

