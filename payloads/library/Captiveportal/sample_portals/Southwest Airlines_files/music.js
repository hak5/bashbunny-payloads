/* Music player interface scripts */

var beats = {};

// Note: These constant values are also defined in beats.py, so if any of them
//       are changed, change them in beats.py as well.
beats.STOPPED  = 0;
beats.PLAYING  = 1;
beats.PAUSED   = 2;
beats.SENTENCE = false;

beats.BEATS_RESULT_NO_SONGS_LEFT = 50;
beats.BEATS_RESULT_NO_PLAYLIST   = 60;

beats.BEATS_AVAILABILITY_OK                      = 0;
beats.BEATS_AVAILABILITY_INTL_ASCENDING          = 100;
beats.BEATS_AVAILABILITY_INTL_DESCENDING_WARNING = 110;
beats.BEATS_AVAILABILITY_INTL_DESCENDING         = 120;

beats.currentPlaylist = '';
beats.currentTrack    = '';
beats.currentState    = beats.STOPPED;
beats.lastPlaylist    = '';
beats.lastTrack       = '';

beats.playlist        = '';
beats.trackindex      = 0;
beats.currentImage    = '';
beats.currentTitle    = '';
beats.currentAlbum    = '';
beats.currentArtists  = '';
beats.currentUrl      = '';

beats.dec = function() {
    return (typeof beats.songs_left !== 'undefined') ? --beats.songs_left : 0;
}

jQuery(document).ready(function() {
    jQuery('.dropdown-player .half-top').hide();

    jQuery('body').on('click', '#music-nav-btn', function(e) {
        updateDropdownWarning();
        if (beats.intl != beats.BEATS_AVAILABILITY_INTL_DESCENDING_WARNING && beats.currentState != beats.STOPPED) {
            jQuery('#header-nav-music-item').toggleClass('active');
        }
    });

    // Disable external links in the Beats Terms of Use and Privacy Policy popups.
    jQuery('body').on('click', '.beats-agreement-popup .container a', function(e) {
        // Disable link if not staying on the page.
        if (jQuery(this).attr('href').charAt(0) != '#') {
            return false;
        }
        return true;
    });

    jQuery('body').on('click', '#music-option', function(e) {
        if (jQuery(this).attr('target') == 'r44music') {
            try {
                if (window.opener && ! window.opener.closed && window.opener.name == 'r44music') {
                    window.opener.focus();
                    //window.open('', 'r44music');
                    return false;
                }
            }
            catch (err) {
            }
        }

        return true;
    });

    if (typeof beats.myCirclePlayer === 'undefined') {
        initNonMusicPage();
    }
    else {
        initMusicPage();
    }
});

function initMusicPage() {
    // Set up the myCirclePlayer controls.  Note that the node (inv_container) must match 
    // the node used to setup the JW Player in music.pt.
    beats.myCirclePlayer = new CirclePlayer("inv_container", circleCallbacks);

    beats.currentGenre = 'genre-all';
    beats.allPlaylistsLoaded = false;

    if (beats.showBeatsUnb) {
        // Display the music section in the header.
        jQuery('#header-nav-music-item').show();
    }

    updateDropdownWarning();

    jQuery('.music_exit_popup').click(function(e) {
        if (beats.currentState == beats.STOPPED) {
            return true;
        }

        var currentTarget = jQuery(e.currentTarget);
        currentTarget.attr('target', 'r44portal');

        if (beats.seenExitModal) {
            // Only show the modal once.
            return true;
        }

        // Launch fancybox modal if not initiated.
        if (jQuery(currentTarget).hasClass('lightbox') == false) {
            jQuery.fancybox({
                'width': 440,
                'padding': 20,
                'height': 'auto',
                'autoDimensions': false,
                'href': '#leaving-page-modal',
                'modal': true 
            });
        }

        jQuery('#leaving-page-link').attr('href', currentTarget.attr('href'));
        jQuery('#leaving-page-link').attr('target', 'r44portal');

        beats.seenExitModal = true;

        // Let server know the exit modal has been displayed (so that
        // it will not be displayed again in the future).
        jQuery.ajax({
            url: '/beats_song_op.json?op=seenexitmodal',
            dataType: 'json',
            headers : { "cache-control": "no-cache" },
            timeout: 2000,
            success: function(data, textStatus, request) {
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
            }
        });

        return false;
    });

    // --- remove preventdefault set by fancybox
    jQuery('#leaving-page-link').unbind('click');
    jQuery('#leaving-page-link').click(function(e) {
        jQuery.fancybox.close();
    });

    jQuery('body').on('focus', '.popup-beats-registration-form .emailInput', function(e) {
        jQuery(this).css('color', '#6a6a6a');
        jQuery(this).val('');
    });


    updateSongsLeftCircle(beats.songs_left, beats.songs_max);

	jQuery('body').on('click', '.playlist-thumb', function(e){
        var pInfo = jQuery(e.currentTarget).nextAll('.playlist-info');
        var trackNodes = pInfo.find('.track-title-and-artists');
        if (trackNodes.length > 0) {
            trackNodes[0].click();
        }
	});

	jQuery('body').on('click', '.playlist-item-play', function(e){
            // Start playing the first track.
            var playlistNode = jQuery(e.currentTarget).closest('.playlist-info.active');
            if (playlistNode) {
                trackNodes = jQuery(playlistNode).find('.track-title-and-artists');
                if (trackNodes.length > 0) {
                    trackNodes[0].click();
                    return true;
                }
            }

            var featuredNode = jQuery(e.currentTarget).closest('.playlist-featured');
            if (featuredNode) {
                trackNodes = jQuery(featuredNode).find('.track-title-and-artists');
                if (trackNodes.length > 0) {
                    trackNodes[0].click();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    return true;
                }
            }

            return false;
    });

	jQuery('body').on('click', '.playlist-item-play-pause', function(e){
        var currentTarget = jQuery(e.currentTarget);
        var pInfo = currentTarget.nextAll('.playlist-info');
        togglePlaylistInfoPopup(pInfo, true);
        var listItem = currentTarget.closest('li.playlist');
        if (pInfo.hasClass('active') && listItem.data('plid') != beats.currentPlaylist) {
            // Start playing the first track.
            var trackNodes = pInfo.find('.track-title-and-artists');
            if (trackNodes.length > 0) {
                trackNodes[0].click();
            }
        }
	});
	jQuery('body').on('click', '.playlist-info .playlist-dropdown-click-area', function(e){
        closePlaylistInfoPopup(jQuery('.playlist-featured'));
		var pInfo = jQuery(e.currentTarget).closest('.playlist-info');
        togglePlaylistInfoPopup(pInfo, false);
	});
	jQuery('body').on('click', '.playlist-info .close-playlists-dropdown', function(e){
		var pInfo = jQuery(e.currentTarget).closest('.playlist-info');
        closePlaylistInfoPopup(pInfo);
	});

	jQuery('body').on('click', '.playlist-featured', function(e){
		var pInfo = jQuery(e.currentTarget);
        togglePlaylistInfoPopup(pInfo, false);
	});
	jQuery('body').on('click', '.playlist-featured .playlist-dropdown', function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
	});
	jQuery('body').on('click', '.playlist-featured .playlist-dropdown .close-playlists-dropdown', function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        closePlaylistInfoPopup(jQuery('.playlist-featured'));
	});

	jQuery('body').on('click', '.dropdown-player .next-song-btn', beatsNextBtnClicked);

    jQuery('#beats-ldp-tab4').on('click', 'ul.playlist-tracklist li.playlist-track .track-title-and-artists', beatsPlayTrackClicked);
    jQuery('#beats-ldp-tab4').on('click', 'ul.playlist-tracklist li.playlist-track .track-duration', beatsPlayTrackClicked);
    jQuery('#beats-ldp-tab4').on('click', 'ul.playlist-tracklist li.playlist-track .number', beatsPlayTrackClicked);

    jQuery('#popup-registration-user .sign_up_form, #popup-registration-forced .sign_up_form').submit(function(e) {
        e.preventDefault();

        var topObj = jQuery(e.target).closest('.popup-registration-top');
        var emailObj = jQuery('#' + topObj.attr('id') + ' #' + e.target.id + ' .emailInput');

        var email = emailObj.val().trim();
        var isEmailValid = validateEmail(email);

        var phone = '';
        var isPhoneValid = true;

        if (! isEmailValid) {
            emailObj.css('color', 'red');
            emailObj.val('Invalid email address, please enter again.');
        }

        if (isEmailValid && isPhoneValid) {
            beatsSignupNotify(email, phone);
        }
    });

    jQuery('#popup-registration-login .sign_up_form').submit(function(e) {
        e.preventDefault();

        var topObj = jQuery(e.target).closest('.popup-registration-top');

        var username = jQuery('#' + topObj.attr('id') + ' #' + e.target.id + ' #username').val().trim();

        var password = jQuery('#' + topObj.attr('id') + ' #' + e.target.id + ' #password').val().trim();

        if (username && password) {
            beatsLoginNotify(username, password);
        }
        else {
            jQuery('#popup-registration-login #errorMsgExc1, #popup-registration-login #errorMsgExc2').hide();
            jQuery('#popup-registration-login #errorMsgMisc span').text('Please enter a username and password.');
            jQuery('#popup-registration-login #errorMsgMisc').show();
        }
    });

    // As soon as the page is loaded, send a request to load the first
    // group of playlists.  Note that event handlers are set in the
    // load complete function since the needed nodes do not exist in
    // the DOM until the playlists have finished loading.
    jQuery("#beats-ldp-tab4").load("/playlists_load.jq", function() {
        jcf.customForms.replaceAll();

        jQuery('.genre-all').show();

        jQuery('#musicGenreSelect').change(function() {
            genreChanged(this);
        });

        jQuery('.show-more-playlists a').on('click', function(e) {
            jQuery('#track-cp-container').hide();
            jQuery('#track-cp-container').detach().appendTo(jQuery("#wrapper"));
            jQuery('#playlist-cp-container').hide();
            jQuery('#playlist-cp-container').detach().appendTo(jQuery("#wrapper"));
            jQuery('#playlist-image-container').detach().appendTo(jQuery("#wrapper"));
            jQuery("#beats-ldp-tab4").load("/playlists_load.jq?p=all", playlistsAllLoad);

            e.preventDefault();
        });

        //jQuery('#beats-ldp-tab4 ul.playlist-tracklist li.playlist-track').on('click', beatsPlayTrackClicked);
        jQuery('#beats-ldp-tab4').on('click', 'ul.playlist-tracklist li.playlist-track .track-title-and-artists', beatsPlayTrackClicked);
        jQuery('#beats-ldp-tab4').on('click', 'ul.playlist-tracklist li.playlist-track .track-duration', beatsPlayTrackClicked);
        jQuery('#beats-ldp-tab4').on('click', 'ul.playlist-tracklist li.playlist-track .number', beatsPlayTrackClicked);

        // If a playlist was specified, "click" the link that causes its dropdown to display.
        if (beats.first_pid) {
            jQuery('.' + beats.first_pid + ' .playlist-dropdown-click-area').click();
            beats.first_pid = '';
        }
    });

    // If the Browse tab should be displayed first, "click" the link that causes it to display.
    if (beats.first_tab == 'browse') {
        jQuery('.beats-tab #bp-link').click();
    }
}

function initNonMusicPage() {
    if (beats.showBeatsUnb) {
        // Display the music section in the header.
        jQuery('#header-nav-music-item').show();
    }
}

function togglePlaylistInfoPopup(pInfo, forcePopup) {
    var tabHeight = jQuery('#beats-ldp-tab4 .white-tab-content').height();

    pInfo.addClass('pressed');

    if (forcePopup) {
        if (! pInfo.hasClass('active')) {
            pInfo.addClass('active');
            tabHeight += 1500;
        }
    }
    else {
        if (pInfo.hasClass('active')) {
            pInfo.removeClass('active');
            tabHeight -= 1500;
        }
        else {
            pInfo.addClass('active');
            tabHeight += 1500;
        }
    }

	jQuery('.playlist-info:not(.pressed)').each(function(idx) {
        if (jQuery(this).hasClass('active')) {
            jQuery(this).removeClass('active');
            tabHeight -= 1500;
        }
    });

    pInfo.removeClass('pressed');

    jQuery('#beats-ldp-tab4 .white-tab-content').height(tabHeight);
}
function closePlaylistInfoPopup(pInfo) {
    if (pInfo.hasClass('active')) {
        var tabHeight = jQuery('#beats-ldp-tab4 .white-tab-content').height();
        pInfo.removeClass('active');
        tabHeight -= 1500;
        jQuery('#beats-ldp-tab4 .white-tab-content').height(tabHeight);
    }
}


/* **************************************** */

var regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//var regPhone = /^[0-9]+$/;
var regPhone = /^([0-9\s\-\)\(])+$/;
function validateEmail(email) {
	var valid = regEmail.test(email);
	return valid;
}
function validatePhone(phone) {
	var valid = regPhone.test(phone);
	return valid;
}

/* **************************************** */

function beatsSignupCallback(response) {
    jQuery('.song-left-display').hide();
    jQuery.fancybox.close();

    beats.unlocked = true;
    updateInternational(false);

    if (beats.intl == beats.BEATS_AVAILABILITY_OK || beats.intl == beats.BEATS_AVAILABILITY_INTL_DESCENDING_WARNING && beats.currentState == beats.STOPPED) {
        play_track(false);

    }
}

function beatsSignupNotify(email, phone) {
    var params = '?e=' + email;
    if (phone) {
        params = params + '&p=' + phone;
    }
    if (beats.lastTrack) {
        params = params + '&lt=' + beats.lastTrack;
    }
    if (beats.lastPlaylist) {
        params = params + '&lp=' + beats.lastPlaylist;
    }

    jQuery.ajax({
        url: '/beats_signup.json' + params,
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'beatsSignupCallback',
        headers : { "cache-control": "no-cache" },
        timeout: 10000,
        success: function(data, textStatus, request){
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            jQuery('.song-left-display').hide();
            jQuery.fancybox.close();
        }
    });
}

/* **************************************** */

function beatsLoginCallback(response) {

    jQuery('.beats-exit-modal .submit-button').removeClass('disabled');
    if (response.result == 'ok') {
        jQuery('.song-left-display').hide();
        jQuery('#popup-registration-login #errorMsgExc1, #popup-registration-login #errorMsgExc2, #popup-registration-login #errorMsgMisc').hide();
        jQuery.fancybox.close();

        beats.unlocked = true;
        updateInternational(false);

        if (beats.intl == beats.BEATS_AVAILABILITY_OK || beats.intl == beats.BEATS_AVAILABILITY_INTL_DESCENDING_WARNING && beats.currentState == beats.STOPPED) {
            play_track(false);

        }
    }
    else if (response.result == 'exc') {
        jQuery('#popup-registration-login #errorMsgMisc').hide();
        jQuery('#popup-registration-login #errorMsgExc1, #popup-registration-login #errorMsgExc2').show();
    }
    else {
        // Login failed.
        jQuery('#popup-registration-login #errorMsgExc1, #popup-registration-login #errorMsgExc2').hide();
        jQuery('#popup-registration-login #errorMsgMisc span').text(response.result);
        jQuery('#popup-registration-login #errorMsgMisc').show();
    }
}

function beatsLoginNotify(username, password) {
    // Ignore button click if already in the middle of processing.
    if (jQuery('.beats-exit-modal .submit-button').hasClass('disabled') == true) {
        return;
    }
    jQuery('.beats-exit-modal .submit-button').addClass('disabled');

    jQuery('#popup-registration-login #errorMsgExc1, #popup-registration-login #errorMsgExc2, #popup-registration-login #errorMsgMisc').hide();

    var cur_tid = beats.currentTrack;
    var cur_pid = beats.currentPlaylist;
    var cur_pos = 0;
    if (beats.currentState == beats.PLAYING || beats.currentState == beats.PAUSED) {
        var cur_pos = Math.round(beats.myCirclePlayer.player.getPosition());
        var dur = Math.round(beats.myCirclePlayer.player.getDuration());
        if (cur_pos > dur) {
            cur_pos = dur;
        }
    }

    params = '&cur_tid=' + cur_tid + '&cur_pid=' + cur_pid + '&cur_pos=' + cur_pos;

    var url = 'https://' + window.location.host + '/beats_login.json?u=' + username + '&p=' + password + params;

    jQuery.ajax({
        url: url,
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'beatsLoginCallback',
        headers : { "cache-control": "no-cache" },
        timeout: 60000,
        success: function(data, textStatus, request){
        },
        /*error: function(results){*/
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            jQuery('.beats-exit-modal .submit-button').removeClass('disabled');
            jQuery('#popup-registration-login #errorMsgMisc').hide();
            jQuery('#popup-registration-login #errorMsgExc1, #popup-registration-login #errorMsgExc2').show();
        }
    });
}

function update_playlist_area() {
    jQuery('#display-playlist-area .song-title').html(beats.currentTitle);
    jQuery('#display-playlist-area .album').html(beats.currentAlbum);
    jQuery('#display-playlist-area .artists').html(beats.currentArtists);
}

function update_dropdown_player() {
    jQuery('.dropdown-player .song-title').html(beats.currentTitle);
    jQuery('.dropdown-player .album').html(beats.currentAlbum);
    jQuery('.dropdown-player .artists').html(beats.currentArtists);
    jQuery('.dropdown-player .song-thumbnail').css('background-image', 'url(' + beats.currentImage + ')');
    jQuery('.dropdown-player .half-top').show();
}

function play_track(next_track) {
    if (next_track) {
        if (! set_next_track()) {
            return false;
        }
    }
    else {
        set_track_data(beats.playlist.tracks[beats.trackindex]);
    }

    update_playlist_area();
    update_dropdown_player(); 

    attachPlaylistContainer();

    beats.myCirclePlayer.player.loadFile(beats.currentUrl);
    beats.myCirclePlayer.player.setTitle(beats.currentTitle);
    beats.myCirclePlayer.player.play();

    return true;
}

function set_next_track() {
    try {
        beats.trackindex++;
        if (beats.trackindex >= beats.playlist.tracks.length) {
            beats.trackindex=0;
        }
        set_track_data(beats.playlist.tracks[beats.trackindex]);

        return true;
    }
    catch (err) {
        return false;
    }
}

function set_track_data(trackdata) {
    beats.currentTrack = trackdata.trid;
    beats.lastTrack = trackdata.trid;
    beats.currentImage = trackdata.trimage;
    beats.currentTitle = trackdata.trtitle;
    beats.currentAlbum = trackdata.tralbum;
    beats.currentArtists = trackdata.trartists;
    beats.currentUrl = trackdata.trurl;
}

function set_playlist_data(response) {
    beats.trackindex = 0;
    var trackdata = response;
    trackdata = response.tracks[beats.trackindex];
    beats.playlist = response;
    beats.currentPlaylist = response.plid;
    beats.lastPlaylist = response.plid;
    set_track_data(trackdata);
}

function no_songs_left() {
    beats.myCirclePlayer.player.stop();
    //beats.currentPlaylist = '';
    beats.currentTrack = '';
    beats.currentUrl = '';
    beats.currentState = beats.STOPPED;
    jQuery('#header-nav-music-item').toggleClass('active', false);
    jQuery('.dropdown-player .half-top').hide();
    jQuery('#display-playlist-area').hide();
    jQuery('#edit-playlist-area').show();
    jQuery('#force-reg-link').click();
}

function is_allowed() {
    return (beats.songs_left > 0 || beats.unlocked) ? true : false;
}

/* **************************************** */

function beatsNoopCallback(response) {
}

function beatsTrackCallback(response) {
    if (response.result == 'ok') {
        if (beats.currentPlaylist != response.plid || beats.currentTrack != response.trid) {
            set_playlist_data(response); 


            beats.myCirclePlayer.player.loadFile(beats.currentUrl);
            beats.myCirclePlayer.player.setTitle(beats.currentTitle);
            beats.myCirclePlayer.player.play();

            update_playlist_area();
            update_dropdown_player(); 
            attachPlaylistContainer();

            // Display the music section in the header.
            jQuery('#header-nav-music-item').show();
        }
        else {

            beats.myCirclePlayer.player.pause();
        }
    }
    else if (response.result_code == beats.BEATS_RESULT_NO_SONGS_LEFT) {
        set_playlist_data(response); 
        no_songs_left(); 
    }
    else if (response.result_code == beats.BEATS_AVAILABILITY_INTL_ASCENDING || response.result_code == beats.BEATS_AVAILABILITY_INTL_DESCENDING) { 
        beats.intl = response.result_code;
    }
    else {
    }
}

function beatsDecrementCallback(response) {
}

function update_song_count() {
    var v = (is_allowed()) ? beats.dec() : 0;
    v = (v <= 0) ? 0 : v;
    if (typeof beats !== 'undefined') { updateSongsLeftCircle(v, beats.songs_max); }
    jQuery('.song-left-count').html((v > 0) ? v : '!');
}


function beatsPauseBtnClicked(e) {
    e.preventDefault();
    beats.myCirclePlayer.player.pause();
}

function beatsPlayTrackClicked(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    if (beats.intl == beats.BEATS_AVAILABILITY_INTL_DESCENDING || beats.intl == beats.BEATS_AVAILABILITY_INTL_ASCENDING) {
    }
    else {
        var isFeatured = false;
        var listItem = jQuery(e.target).closest('li.playlist');
        var currentTarget = listItem.children('.playlist-item-play-pause');
        var currentItemPlay = listItem.children('.playlist-item-play');

        if (listItem.data('plid') != beats.currentPlaylist) {
            jQuery('.playlist-item-play').show();
            jQuery('.playlist-item-play-pause').removeClass('active');
            currentTarget.addClass('active');
    
            currentItemPlay.show();

            if (listItem.length == 0) {
                currentTarget = jQuery(e.target).closest('.playlist-featured').children('.featured-cp-container');
                isFeatured = true;

                beatsSongOperation('track', e);
                return;
            }

            if (currentTarget.length > 0) {
                jQuery('#playlist-cp-container').detach().appendTo(currentTarget);
                jQuery('#playlist-cp-container').show();
                if (isFeatured) {
                    jQuery('.playlist-featured .playlist-item-play').hide();
                }
                else {
                    jQuery('.playlist-featured .playlist-item-play').show();
                }
            }
            else {
                jQuery('#playlist-cp-container').hide();
                jQuery('#playlist-cp-container').detach().appendTo(jQuery("#wrapper"));
                jQuery('.playlist-featured .playlist-item-play').show();
            }
        }

        beatsSongOperation('track', e);
    }
}

function beatsNextBtnClicked(e) {
    e.preventDefault();

    if (beats.intl == beats.BEATS_AVAILABILITY_INTL_DESCENDING || beats.intl == beats.BEATS_AVAILABILITY_INTL_ASCENDING) {
    }
    else {
        beatsSongOperation('skip', e);
    }
}

function beatsSongOperation(op, e) {
    var params = '';
    var callback = '';

    if (beats.intl == beats.BEATS_AVAILABILITY_INTL_DESCENDING || beats.intl == beats.BEATS_AVAILABILITY_INTL_ASCENDING) {
        return;
    }

    if (op == 'sentence') {
        server_op = 'sentenceplaylist';
        params = '?op=' + server_op + '&where=' + whereText + '&mood=' + moodText + '&with=' + withText + '&tag=' + musictagText;
    }
    else if (op == 'track') {
        callback = 'beatsTrackCallback';

        beats.SENTENCE = false;
        var plid = jQuery(e.currentTarget).closest('.playlist-tracklist').data('plid');
        var trackTarget = jQuery(e.currentTarget).closest('.playlist-track');
        var trnum = trackTarget.data('trnum');
        var trid = trackTarget.data('trid');
        if (plid == beats.currentPlaylist && trid == beats.currentTrack) {
            beats.myCirclePlayer.player.pause();

            return false;
        }

        server_op = 'trackplaylist';

        params = '?op=' + server_op + '&plid=' + plid + '&idx=' + trnum;
        beats.myCirclePlayer.player.stop();
    }
    else if (op == 'skip' || op == 'done') {
        callback = 'beatsNoopCallback';

        params = '?op=' + op;
    }
    else if (op == 'dec') {
        update_song_count();
        callback = 'beatsDecrementCallback';

        params = '?op=dec';
    }

    if (beats.currentState == beats.PLAYING || beats.currentState == beats.PAUSED) {
        var cur_tid = beats.currentTrack;
        var cur_pid = beats.currentPlaylist;
        var cur_pos = Math.round(beats.myCirclePlayer.player.getPosition());
        var dur = Math.round(beats.myCirclePlayer.player.getDuration());
        if (op == 'done' || cur_pos > dur) {
            cur_pos = dur;
        }

        params = params + '&cur_tid=' + cur_tid + '&cur_pid=' + cur_pid + '&cur_pos=' + cur_pos;

        if (op != 'dec') {
            beats.myCirclePlayer.player.stop();
            beats.myCirclePlayer._timeupdate(0); 
            beats.currentTrack = '';
            beats.currentState = beats.STOPPED;
        }
    }

    if (op == 'skip' || op == 'done') {
       var c = (is_allowed()) ? false : (set_next_track(), no_songs_left(), true);
        if (c || beats.intl == beats.BEATS_AVAILABILITY_INTL_ASCENDING || beats.intl == beats.BEATS_AVAILABILITY_INTL_DESCENDING) { 
            return;
        }
        else {
            play_track(true);
        }
    }

    jQuery.ajax({
        url: '/beats_song_op.json' + params,
        dataType: 'jsonp',
        jsonp: 'callback',
        headers : { "cache-control": "no-cache" },
        jsonpCallback: callback,
        timeout: 10000,
        success: function(data, textStatus, request) {
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
    });
}

function attachPlaylistContainer() {
    var trackNode = jQuery('.' + beats.currentPlaylist + ' .' + beats.currentTrack + ' .track-nr');
    if (trackNode.length > 0) {
        trackNode.addClass('pressed').addClass('active');
        jQuery('.track-nr:not(.pressed)').removeClass('active');
        trackNode.removeClass('pressed');

        jQuery('#track-cp-container').detach().appendTo(trackNode);
        jQuery('#track-cp-container').show();

        //var currentTarget = jQuery('li.' + beats.currentPlaylist + ' .playlist-item-play-pause');
        var currentTarget = jQuery('.' + beats.currentPlaylist + ' .playlist-item-play-pause');
        jQuery('.playlist-item-play-pause').removeClass('active');

        var isFeatured = false;
        if (! currentTarget || currentTarget.length == 0) {
            currentTarget = jQuery('.playlist-featured').children('.featured-cp-container');
            isFeatured = true;
        }

        currentTarget.addClass('active');

        if (currentTarget.length > 0) {
            jQuery('#playlist-cp-container').detach().appendTo(currentTarget);
            jQuery('#playlist-cp-container').show();
            if (isFeatured) {
                jQuery('.playlist-featured .playlist-item-play').hide();
            }
            else {
                jQuery('.playlist-featured .playlist-item-play').show();
            }
        }
        else {
            jQuery('#playlist-cp-container').hide();
            jQuery('#playlist-cp-container').detach().appendTo(jQuery("#wrapper"));
            jQuery('.playlist-featured .playlist-item-play').show();
        }

        //var currentCoverTarget = jQuery('li.' + beats.currentPlaylist + ' .playlist-image');
        var currentCoverTarget = jQuery('.' + beats.currentPlaylist + ' .playlist-image');
        if (currentCoverTarget.length > 0) {
            jQuery('#playlist-image-container').detach().appendTo(currentCoverTarget);
            jQuery('#playlist-image-container').show();
        }

        //var currentItemPlay = jQuery('li.' + beats.currentPlaylist + ' .playlist-item-play');
        var currentItemPlay = jQuery('.' + beats.currentPlaylist + ' .playlist-item-play');
        currentItemPlay.hide();
    }
    else {
        jQuery('#track-cp-container').hide();
        jQuery('#track-cp-container').detach().appendTo(jQuery("#wrapper"));

        jQuery('#playlist-cp-container').hide();
        jQuery('#playlist-cp-container').detach().appendTo(jQuery("#wrapper"));

        jQuery('#playlist-image-container').hide();
        jQuery('#playlist-image-container').detach().appendTo(jQuery("#wrapper"));
    }
}

/* **************************************** */

function circleCallbacks(eventName) {

    if (eventName == 'play') {
        beats.currentState = beats.PLAYING;
    }
    else if (eventName == 'pause') {
        beats.currentState = beats.PAUSED;
    }
    else if (eventName == 'complete') {
        // Start the next track.
        beatsSongOperation('done', null);
    }
    else if (eventName == 'counted') {
        // Decrement the available songs count.
        beatsSongOperation('dec', null);
    }
}

/* **************************************** */

function updateSongsLeftCircle(songs_left, songs_max) {
    var degrees = Math.round(songs_left * 1.0 / songs_max * 360);
    var progress_holder = jQuery('#main-songs-left')
    var progress_p1 = jQuery('#main-songs-left .first-half')
    var progress_p2 = jQuery('#main-songs-left .second-half')

    if (degrees > 180) {
        progress_holder.addClass('over-half');
        progress_p1.css({
                    '-ms-transform': 'rotate(180deg)',
                    '-webkit-transform': 'rotate(180deg)',
                    'transform': 'rotate(180deg)'
        });
        progress_p2.css({
                    '-ms-transform': 'rotate(' + degrees + 'deg)',
                    '-webkit-transform': 'rotate(' + degrees + 'deg)',
                    'transform': 'rotate(' + degrees + 'deg)'
        });
        progress_p1.show();
        progress_p2.show();
    }
    else if (degrees > 0) {
        progress_holder.removeClass('over-half');
        progress_p1.css({
                    '-ms-transform': 'rotate(' + degrees + 'deg)',
                    '-webkit-transform': 'rotate(' + degrees + 'deg)',
                    'transform': 'rotate(' + degrees + 'deg)'
        });
        progress_p1.show();
        progress_p2.hide();
    }
    else {
        progress_p1.hide();
        progress_p2.hide();
    }
}

/* **************************************** */

function playlistsAllLoad() {
    jQuery('#musicGenreSelect').val(beats.currentGenre).prop('selected', true);
    jcf.customForms.replaceAll();

    beats.allPlaylistsLoaded = true;

    jQuery('.' + beats.currentGenre).show();
    if (beats.currentGenre != 'genre-all') {
        jQuery('.show-more-playlists').hide();
        jQuery('.show-less-playlists').hide();
    }

    var txt = jQuery("#musicGenreSelect option:selected").text();
    if (txt == 'All') txt = 'All Playlists';
    jQuery('#music-genre-title .name').html(txt);
    var selNodes = jQuery('.' + beats.currentGenre);
    jQuery('#music-genre-title .count').html('(' + selNodes.length + ')');

    jQuery('#musicGenreSelect').change(function() {
        genreChanged(this);
    });

    jQuery('#beats-ldp-tab4').on('click', 'ul.playlist-tracklist li.playlist-track .track-title-and-artists', beatsPlayTrackClicked);
    jQuery('#beats-ldp-tab4').on('click', 'ul.playlist-tracklist li.playlist-track .track-duration', beatsPlayTrackClicked);
    jQuery('#beats-ldp-tab4').on('click', 'ul.playlist-tracklist li.playlist-track .number', beatsPlayTrackClicked);

    jQuery('.show-more-playlists a').on('click', function(e) {
        jQuery('.show-more-playlists').hide();
        jQuery('.show-less-playlists').show();
        jQuery('.more-playlist').show();

        e.preventDefault();
    });

    jQuery('body').on('click', '.show-less-playlists a', function(e) {
        jQuery('.show-more-playlists').show();
        jQuery('.show-less-playlists').hide();
        jQuery('.more-playlist').hide();

        e.preventDefault();
    });

    if (beats.currentState == beats.PLAYING || beats.currentState == beats.PAUSED) {
        attachPlaylistContainer();
    }
}

function genreChanged(node) {
    if (node.value != beats.currentGenre) {
        beats.currentGenre = node.value;

        if (! beats.allPlaylistsLoaded) {
            jQuery('#track-cp-container').hide();
            jQuery('#track-cp-container').detach().appendTo(jQuery("#wrapper"));
            jQuery('#playlist-cp-container').hide();
            jQuery('#playlist-cp-container').detach().appendTo(jQuery("#wrapper"));
            jQuery('#playlist-image-container').detach().appendTo(jQuery("#wrapper"));
            jQuery("#beats-ldp-tab4").load("/playlists_load.jq?p=all", playlistsAllLoad);
            return;
        }

        var selNodes = jQuery('.' + node.value);
        if (node.value == 'genre-all') {
            jQuery('.genre-all').show();
            jQuery('.show-more-playlists').show();
            jQuery('.show-less-playlists').hide();
            jQuery('.more-playlist').hide();
        }
        else {
            jQuery('.genre-all').hide();
            selNodes.show();
            jQuery('.show-more-playlists').hide();
            jQuery('.show-less-playlists').hide();
        }

        var txt = jQuery("#musicGenreSelect option:selected").text();
        if (txt == 'All') txt = 'All Playlists';
        jQuery('#music-genre-title .name').html(txt);
        jQuery('#music-genre-title .count').html('(' + selNodes.length + ')');
    }
}

function updateDropdownWarning() {
    var hdr = jQuery('#header-nav-music-item');
    if (beats.intl == beats.BEATS_AVAILABILITY_INTL_DESCENDING_WARNING) {
		hdr.show();
        hdr.addClass('warning');
        hdr.removeClass('active');
    }
    else {
	    hdr.removeClass('warning');
    }
}

function updateInternational(showForcePlay) {

    if (beats.intl == beats.BEATS_AVAILABILITY_OK || beats.intl == beats.BEATS_AVAILABILITY_INTL_DESCENDING_WARNING) {
        jQuery('.a_maintext').show();
        if (beats.unlocked) {
            jQuery('.a_unlocked').show();
            jQuery('.a_locked').hide();
        }
        else {
            jQuery('.a_unlocked').hide();
            jQuery('.a_locked').show();
        }
        jQuery('#b_maintext').show();
        if (jQuery('.playlist-starter').is(':visible') || showForcePlay) {
            jQuery('#ps-starter-ok').show();
        }

        jQuery('.a_intl_desc').hide();
        jQuery('.a_intl_asc').hide();
        jQuery('#b_intl_desc').hide();
        jQuery('#b_intl_asc').hide();
        jQuery('#ps-starter-under10k').hide();
    }
    else if (beats.intl == beats.BEATS_AVAILABILITY_INTL_DESCENDING) {
        jQuery('.a_maintext').hide();
        jQuery('#b_maintext').hide();
        jQuery('#ps-starter-ok').hide();

        jQuery('.a_intl_desc').show();
        jQuery('.a_intl_asc').hide();
        jQuery('#b_intl_desc').show();
        jQuery('#b_intl_asc').hide();
        if (jQuery('.playlist-starter').is(':visible')) {
            jQuery('#ps-starter-under10k').show();
        }
    }
    else if (beats.intl == beats.BEATS_AVAILABILITY_INTL_ASCENDING) {
        jQuery('.a_maintext').hide();
        jQuery('#b_maintext').hide();
        jQuery('#ps-starter-ok').hide();

        jQuery('.a_intl_desc').hide();
        jQuery('.a_intl_asc').show();
        jQuery('#b_intl_desc').hide();
        jQuery('#b_intl_asc').show();
        if (jQuery('.playlist-starter').is(':visible')) {
            jQuery('#ps-starter-under10k').show();
        }
    }

    updateDropdownWarning();
}

function loadNewPlaylist(newPlaylist, track_index){
	var newPlaylist = newPlaylist || currentPlaylist; // if no playlist is given use the current one
	var track_index = track_index || 0; // defaults to zero if not given as a parameter

	// if the new playlist is the same as the current one:
	if (newPlaylist.playlist_id == currentPlaylist.playlist_id) {
		
		var currentIndex = beats.myCirclePlayer.player.getPlaylistIndex() || false;
		
		// if the current song is the requested song:
		if (currentIndex != track_index) {
			// plays the requested track index
			beats.myCirclePlayer.player.playlistItem(track_index);
		}
	} else {
		
		// updates currentPlaylist variable:
		currentPlaylist = newPlaylist;
		
		// loads the new playlist into the player
		jwplayer("musicPlayer").load(newPlaylist.tracks);

		// starts the playlist at the requested index
		beats.myCirclePlayer.player.playlistItem(track_index);
		
	}

}

