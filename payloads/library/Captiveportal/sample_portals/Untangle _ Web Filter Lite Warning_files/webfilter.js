// Copyright (c) 2003-2007 Untangle, Inc.
// All rights reserved.

function unblockSite(global)
{
    var e = document.getElementById("unblockNowButton");
    if (e) {
        e.disabled = true;
    }

    e = document.getElementById("unblockGlobalButton");
    if (e) {
        e.disabled = true;
    }

    var req = false;

    if (window.XMLHttpRequest) {
        req = new XMLHttpRequest();
        if (req.overrideMimeType) {
            req.overrideMimeType('text/xml');
        }
    } else if (window.ActiveXObject) {
        try {
            req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (exn) {
            try {
                req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (exn_1) {
            }
        }
    }

    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            window.location.href = url;
        }
    };

    var hostname = window.location.hostname;
    req.open('POST', "unblock", true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send("nonce=" + nonce + "&tid=" + tid + "&global=" + global);
}
