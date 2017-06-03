
/* 
 * set the flight runner position
 * the range goes from 0 to 180px
 */   
function set_runner(val) {  
    min_pixel_pos=0;
    max_pixel_pos=180;
    var runner = jQuery('.tracker-box .runner');
    if(!runner.length) return;
    val = ( val < min_pixel_pos ) ? min_pixel_pos : val;
    val = ( val > max_pixel_pos ) ? max_pixel_pos : val;
    runner.css({left: val});
}                   

var ft_callback=function current_callback(response) {
	//window.console && console.log('jquery.util.js: ft_callback called');
    if (response.pcent_flt_complete) {
        dist_ratio = (response.pcent_flt_complete*180/70|0);
        set_runner(dist_ratio);
    }
    var c_ttgc = jQuery('#c_ttgc');
    if (c_ttgc.length) { c_ttgc.text(response.ttgc) }

    // Update Beats music display.
    if (response.beats_unlocked) {
        jQuery('.song-left-count').hide();
    }
    else {
        if (response.beats_songs_left > 0) {
            jQuery('.song-left-count').text(response.beats_songs_left);
        }
        else {
            jQuery('.song-left-count').text('!');
        }
    }

    if (typeof ft_callback_ext == 'function') {
	    //window.console && console.log('jquery.util.js: calling ft_callback_ext');
        ft_callback_ext(response);
    }
}

function current_call() {
    var theUrl = location.protocol + '//' + location.host + '/current.json';
    jQuery.getJSON(theUrl, ft_callback);
}

/*
// add
function autoright() { if (jQuery(window).width()<1003) { jQuery("#header").css({"right":0});} else { jQuery("#header").css({"right":""});}}
jQuery(window).resize(autoright);
*/

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

jQuery(document).ready(function() {
    // --- update flight info every 1 minute --- //
	//window.console && console.log('jquery.util.js: Setting recurring call to current_call()');
    current_call();setInterval(function() { current_call(); }, 60000);
});

