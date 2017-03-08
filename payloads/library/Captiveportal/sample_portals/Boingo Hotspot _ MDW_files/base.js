/// <reference path="~/Assets/shared/js/libs/jquery-1.10.0-vsdoc.js" />

// shared js
$(document).ready(function() {

    // Hides and show content base on locality relative to .toggle_content
    // To use add the following classes: 
    // 1. __toggle_complex to trigger
    // 2. __toggle_container to block off region for script to activate in (locality)
    // 3. __toggle_content to specify the content to hide/show
    // 4. __toggle_marker to specify marker update
    $('.__toggle_complex').on('click', function() {
        // check max-width condition
        var $maxWidth = $(this).data('toggle_max_width');
        if ($maxWidth && !window.matchMedia('only screen and (max-width:'+$maxWidth+')').matches) {
            return;
        }

        var $toggleParent = $(this).parents('.__toggle_container');

        var $forElement = $(this).data('toggle_for');
        var $toggleContent = $forElement ? $($forElement) : $toggleParent.find('.__toggle_content');

        if ($toggleContent.is(':hidden')) {
            $toggleContent.slideDown('normal');
            $toggleParent.find('.__toggle_marker').html('&#9650;');
        }
        else {
            $toggleContent.slideUp('normal');
            $toggleParent.find('.__toggle_marker').html('&#9660;');
        }
    });	 

    // Hides and show content base on adjacency or based on data-toggle_for attribute
    // To use add the following classes/data attribute: 
    // 1. __toggle_simple to trigger
    // 2. __toggle_marker to specify marker update
    // 3. __toggle_for (optional) to specify the content to hide/show based on data-toggle_for attribute
    //    NOTE: if this is omitted then the next adjacent element will be used for content

    $('.__toggle_simple').on('click', function () {
        // check max-width condition
        var $maxWidth = $(this).data('toggle_max_width');
        if ($maxWidth && !window.matchMedia('only screen and (max-width:' + $maxWidth + ')').matches) {
            return;
        }

        var $forElement = $(this).data('toggle_for');
        var $toggleContent = $forElement ? $($forElement) : $(this).next();

        if ($toggleContent.is(':hidden')) {
            $toggleContent.slideDown('normal');
            $(this).find('i').html('&#9650;');
        }
        else {
            $toggleContent.slideUp('normal');
            $(this).find('i').html('&#9660;');
        }
    });
    

    $('body').append('<img src="https://d3t5gpcm1l1agl.cloudfront.net/web/shadow/page_load_tracker.gif?currentpage=' + encodeURIComponent(window.location.pathname) + "&mac=" + getCookieByName("stickyMacAddress") + '"/>');

    //Error Page
    var openElement = $('.toggler').next();
    if (openElement.is(':visible')) {
        openElement.slideUp(200);
    }

    $('.toggler').on('click', function() {
        if( $(this).next().is(':visible')){
            $(this).parent().removeClass('open');
            $(this).next().slideUp(200);
            $(this).prev().html('+');
        }
        else{
            $(this).parent().addClass('open');
            $(this).next().slideDown(200);
            $(this).prev().html('-');
        }
    });

});

function toggleTopPageMessage(message) {
    $('.top_page_message').toggleClass('show_warning').html(message);
    $('.inner_content').toggleClass('show_warning');
}

function getCookieByName(name) {
    var nameEq = name + "=";
    var cookieArray = document.cookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
        if (cookie.indexOf(nameEq) == 0) return cookie.substring(nameEq.length, cookie.length);
    }

    return "";
}