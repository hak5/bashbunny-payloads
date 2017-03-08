
/*
 * TLG - Added July 29, 2013
 *
 * This function is called when the user switches tabs on the TV page.
 * It sets the destination of the top "Buy Now" button based on which
 * tab is being selected so that if user clicks the button, the correct
 * parameter is passed to the purchase page.
 */
function tabset1TVTabChange(tabRef, evt) {
    if (tabRef.attr('href') == '#tab2_2') {
        jQuery('#topbuynow').attr('href', '/purchase?pkg=TV&tab=vodtv');
    }
    else {
        jQuery('#topbuynow').attr('href', '/purchase?pkg=TV&tab=iptv');
    }
    return true;
}

function tabset2EPGTabChange(tabRef, evt) {
    jQuery('#playerHolder').css('width', '0px').css('height', '0px');
    jQuery('#playerHolder').detach().appendTo('#wrapper');
    jQuery('#vrControlBar').detach().appendTo('#wrapper');
    jQuery('#another_vdrm').detach().appendTo('#wrapper');

    // Remove the current video player.
    jQuery('#' + currentId + '_video').empty();

    if (tabRef.attr('href') == '#vodtv_tab') {
        if (nonrz_to_sponsor) {
            // Manually load sponsor page.
            window.location.assign('/sponsor?tab=vodtv');
            return false;
        }

        // Display the series splash page.
        jQuery("#" + curVodtvId + "_nonvideo").show();

        currentId = curVodtvId;

        // For sponsor page.
        try {
            if (! has_vr) {
                jQuery("#noshow-verimatrix").hide();
                jQuery("#show-verimatrix").show();
            }
        }
        catch(ex) { }
    }
    else {    // #iptv_tab
        // Load the video player.
        jQuery("#" + curIptvId + "_video").load("/video_load.jq?cid=" + curIptvId + " .videoload", function() {
            if (!isAndroid && !isIOS) {
                get_channel(curIptvId);
            }
        });

        currentId = curIptvId;

        // For sponsor page.
        try {
            if (! has_vr) {
                jQuery("#show-verimatrix").hide();
                jQuery("#noshow-verimatrix").show();
            }
        }
        catch(ex) { }
    }
    return true;
}

function get_channel(n) {
        window.console && console.log('change iptv channel: '+n);
        var hlsReplace = jQuery('#' + n + '_video #container');
        window.console && console.log ("hlsReplace '#" + n + '_video #container ' + hlsReplace.length);
        if (hlsReplace.length) {
            videoUrl = hlsReplace.data('url');
window.console && console.log("   videoUrl = " + videoUrl);
            imgUrl = hlsReplace.data('img');
            if (isAndroid) {
                if (/_master/.test(videoUrl)) {
                    videoUrl = videoUrl.replace('_master', '_slide');
                } else {
                    videoUrl = videoUrl.replace('-master', '');
                }
                m_jwp_setup.androidhls=true;
            }
            m_jwp_setup.file=videoUrl;
            m_jwp_setup.image=imgUrl;
            m_jwp_setup.analytics={ enabled: false, cookies: false };
            if (!isAndroid && !isiPad) {
                m_jwp_setup.autostart=true;
            }
window.console && console.log(m_jwp_setup);
            jwplayer("container").setup(m_jwp_setup);
        }
}

function tabset3EPGTabChange(tabRef, evt) {
    // Remove the current video player.
    jQuery('#' + currentId + '_video').empty();

    var cid = tabRef.attr('href').substring(1);
    //alert('tabset3EPGTabChange click ' + cid + ' target ' + jQuery(evt.target).attr('class'));

    if (cid != '20115107' && nonrz_to_sponsor) {
        // Manually load sponsor page.
        window.location.assign('/sponsor?tab=iptv&id=' + cid);
        return false;
    }
    else if (jQuery('div.sponsor').length > 0) {
        if (jQuery(evt.target).attr('class') == 'btn-buy') {
            // Manually load page btn-buy being linked to.
            window.location.assign(jQuery(evt.target).attr('href'));
        }
        else {
            // Manually load epg page.
            window.location.assign('/epg?tab=iptv&id=' + cid);
        }
        return false;
    }

    // Move ads to the appropriate ad placeholder.
    jQuery('#ad_big').appendTo('#' + cid + '_ad_spot');
    jQuery('#ad_dish').appendTo('#' + cid + '_ad_spot');

    // Load the video player.
    jQuery("#" + cid + "_video").load("/video_load.jq?cid=" + cid + " .videoload", function() {
        if (!isAndroid && !isIOS) {
            get_channel(curIptvId);
        }
    });

    currentId = cid;
    curIptvId = cid;
    return true;
}

function tabset4EPGTabChange(tabRef, evt) {
    jQuery('#playerHolder').css('width', '0px').css('height', '0px');
    jQuery('#playerHolder').detach().appendTo('#wrapper');
    jQuery('#vrControlBar').detach().appendTo('#wrapper');
    jQuery('#another_vdrm').detach().appendTo('#wrapper');

    // Remove the current video player.
    // Remove the current video player.
    jQuery('#' + currentId + '_video').empty();

    var cid = tabRef.attr('href').substring(1);

    jQuery(".tabset4 .epg_icon_bkgd").each(function(idx1) {
        // Remove class for background icon.
        var obj = jQuery(this);
        var prefix = obj.data('prefix');
        obj.removeClass(prefix + '1 ' + prefix + '2');

        // Add appropriate class for background icon based on whether
        // this is the selected slide or not.
        obj.parents("li.slide").each(function(idx2) {
            if (jQuery(this).hasClass('active')) {
                obj.addClass(prefix + '1');
            }
            else {
                obj.addClass(prefix + '2');
            }
        });
    });

    // Display the series splash page.
    jQuery("#" + cid + "_nonvideo").show();

    currentId = cid;
    curVodtvId = cid;
    return true;
}

