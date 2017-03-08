/// <reference path="~/Assets/shared/js/base.js" />

function isCookiesEnabled() {
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) {
        document.cookie = "testcookie";
        cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
    }
    return (cookieEnabled);
}

// page-specific js
$(document).ready(function () {

    //Call Selecter Function on Select Iputs with class="selecter"	
    $(".selecter").selecter({
        defaultLabel: "Roaming Log In"
    });

    // Scroll page past URL bar on mobile/tablet devices
    $.breakpoint({
        condition: function () {
            return window.matchMedia('only screen and (max-width:768px)').matches;
        },
        enter: function () {
            $('body').delay('100').animate({ scrollTop: '0px' }, 'slow');
        }

    });


    // Prevent Off-Canvas Mobile Menu from remaining open on window resize
    $.breakpoint({
        condition: function () {
            return window.matchMedia('only screen and (min-width:768px)').matches;
        },
        enter: function () {
            $('#topMenu').hide();
        }

    });

    // Disable STA Get Online Button if Terms is unchecked

 
    $(".sta a.get-online-now").on("click", staCheckTermsOfUseChecked);
    function staCheckTermsOfUseChecked() {
        var proceedGetOnline = true;

        proceedGetOnline = $("#TermsCB").prop('checked');
        if (!proceedGetOnline) {
            alert("Please click on the checkbox to acknowledge that you have read and agree to the Terms of Use.");
        }

        return proceedGetOnline;
    }

    // show message if cookies are not enabled
    if (!isCookiesEnabled()) {
        toggleTopPageMessage('Hey world traveler! To use Boingo you must enable cookies. <a href="/global/privacy#privacy_cookies" target="_blank">Learn more</a>');
    }
});

// Load HTML5 Placeholder Attribute Form Support
$('input, textarea').placeholder();