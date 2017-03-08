window.cloud9 = window.cloud9 || {};

(function(c9){
    if(typeof btoa=='undefined'){function btoa(str){var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';var encoded=[];var c=0;while(c<str.length){var b0=str.charCodeAt(c++);var b1=str.charCodeAt(c++);var b2=str.charCodeAt(c++);var buf=(b0<<16)+((b1||0)<<8)+(b2||0);var i0=(buf&(63<<18))>>18;var i1=(buf&(63<<12))>>12;var i2=isNaN(b1)?64:(buf&(63<<6))>>6;var i3=isNaN(b2)?64:(buf&63);encoded[encoded.length]=chars.charAt(i0);encoded[encoded.length]=chars.charAt(i1);encoded[encoded.length]=chars.charAt(i2);encoded[encoded.length]=chars.charAt(i3);}
    return encoded.join('');}}
    if(typeof atob=='undefined'){function atob(str){var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';var invalid={strlen:(str.length%4!=0),chars:new RegExp('[^'+chars+']').test(str),equals:(/=/.test(str)&&(/=[^=]/.test(str)||/={3}/.test(str)))};if(invalid.strlen||invalid.chars||invalid.equals)
    throw new Error('Invalid base64 data');var decoded=[];var c=0;while(c<str.length){var i0=chars.indexOf(str.charAt(c++));var i1=chars.indexOf(str.charAt(c++));var i2=chars.indexOf(str.charAt(c++));var i3=chars.indexOf(str.charAt(c++));var buf=(i0<<18)+(i1<<12)+((i2&63)<<6)+(i3&63);var b0=(buf&(255<<16))>>16;var b1=(i2==64)?-1:(buf&(255<<8))>>8;var b2=(i3==64)?-1:(buf&255);decoded[decoded.length]=String.fromCharCode(b0);if(b1>=0)decoded[decoded.length]=String.fromCharCode(b1);if(b2>=0)decoded[decoded.length]=String.fromCharCode(b2);}
    return decoded.join('');}}
    
    var JSON=function(){function f(n){return n<10?'0'+n:n;}
    var m={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};function stringify(value,whitelist){var a,i,k,l,r=/["\\\x00-\x1f\x7f-\x9f]/g,v;switch(typeof value){case'string':return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];if(c){return c;}
    c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+
    (c%16).toString(16);})+'"':'"'+value+'"';case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
    if(typeof value.toJSON==='function'){return stringify(value.toJSON());}
    a=[];if(typeof value.length==='number'&&!(value.propertyIsEnumerable('length'))){l=value.length;for(i=0;i<l;i+=1){a.push(stringify(value[i],whitelist)||'null');}
    return'['+a.join(',')+']';}
    if(whitelist){l=whitelist.length;for(i=0;i<l;i+=1){k=whitelist[i];if(typeof k==='string'){v=stringify(value[k],whitelist);if(v){a.push(stringify(k)+':'+v);}}}}else{for(k in value){if(typeof k==='string'){v=stringify(value[k],whitelist);if(v){a.push(stringify(k)+':'+v);}}}}
    return'{'+a.join(',')+'}';}}
    return{stringify:stringify,parse:function(text,filter){var j;function walk(k,v){var i,n;if(v&&typeof v==='object'){for(i in v){if(Object.prototype.hasOwnProperty.apply(v,[i])){n=walk(i,v[i]);if(n!==undefined){v[i]=n;}}}}
    return filter(k,v);}
    if(/^[\],:{}\s]*$/.test(text.replace(/\\./g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof filter==='function'?walk('',j):j;}
    throw new SyntaxError('parseJSON');}};}();
    // '


    if (!Date.prototype.toISOString) {
        (function () {

            function pad(number) {
                if (number < 10) {
                    return '0' + number;
                }
                return number;
            }

            Date.prototype.toISOString = function () {
                return this.getUTCFullYear() +
                    '-' + pad(this.getUTCMonth() + 1) +
                    '-' + pad(this.getUTCDate()) +
                    'T' + pad(this.getUTCHours()) +
                    ':' + pad(this.getUTCMinutes()) +
                    ':' + pad(this.getUTCSeconds()) +
                    '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
                    'Z';
            };

        }());
    }

    c9.JSON = JSON;
    
    var noop = function(){};
    window.console || (window.console = {
        log: noop,
        info: noop,
        error: noop,
        warn: noop
      });

    c9.host = /^[\w]+\.c9w\.net$/.test(window.location.host) ? window.location.host : 'nimbus.c9w.net';

    c9.encodeObjJSONB64 = function(obj) {
        return btoa(JSON.stringify(obj)).replace(/\+/g, '-').replace(/\//g, '_');
    };

    c9.extend = function() {
        /* borrowed from jQuery */

        // copy reference to target object
        var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options, name, src, copy;

        // extend itself if only one argument is passed
        if ( length === i ) {
            target = this;
            --i;
        }

        for ( ; i < length; i++ ) {
            // Only deal with non-null/undefined values
            if ( (options = arguments[ i ]) != null ) {
                // Extend the base object
                for ( name in options ) {
                    src = target[ name ];
                    copy = options[ name ];
                    // Prevent never-ending loop
                    if ( target === copy ) {
                        continue;
                    }
                    if ( copy !== undefined ) {
                        target[ name ] = copy;
                    }
                }
            }
        }
        
        // Return the modified object
        return target;
    };

    c9.getParam = function(name, loc) {
        loc = typeof loc == 'undefined' ? window.location.href : loc;
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)", regex = new RegExp( regexS ), results = regex.exec(loc);
        if( results == null ) { return ""; }
        else {
            return decodeURIComponent(results[1]);
        }
    };

    c9.asSafeUrl = function(url) {
        if(!url || !(/^(https?:\/\/|\/)/).test(url)) {
            throw "Unsafe url: " + url;
        }
        return url;
    };

    c9.buildUrl = function(baseUrl, getParams) {
        var sep = baseUrl.indexOf('?') === -1 ? '?' : '&';
        var params = [];
        for(var k in getParams) {
            if(!getParams.hasOwnProperty(k) || getParams[k] === null) {
                continue;
            }
            params.push(encodeURIComponent(k) + '=' + encodeURIComponent(getParams[k]));
        }
        return baseUrl + sep + params.join('&');
    };

    c9.kvStringify = function(obj, kvSep, itemSep) {
        var res = [];
        if(obj) {
            for (var k in obj) {
                if(!obj.hasOwnProperty(k)) {
                    continue;
                }
                winParams.push(k + kvSep + obj[k]);
            }
        }
        res = res.join(itemSep);
        return res;
    };

    c9.size = function(obj) {
        var size=0, key;
        for(key in obj) {
            if(obj.hasOwnProperty(key)) {
                size++;
            }
        }
        return size;
    };

    c9.nlog = function(cat, msg) {
        var img = new Image();
        var bUrl = window.location.protocol + '//' + window.location.host + '/wifi/lg.gif'
        msg = msg || '';
        try {
            msg = '' + msg;
        } catch(err) {}
        
        img.src = c9.buildUrl(bUrl, {
            cat: cat,
            msg: msg,
            r: Math.floor(Math.random()*1E8)
        });
    };

    c9.countDown = function(countDwnSecs, tickFn, blastOffFn) {
        var intId;
        var res;
        tickFn(countDwnSecs);
        intId = window.setInterval(function(){
            countDwnSecs--;
            if(countDwnSecs >= 0) {
                res = tickFn(countDwnSecs);
                if(res === false) {
                    window.clearInterval(intId);
                } else if(res === true) {
                    if (blastOffFn) { blastOffFn(); }
                    window.clearInterval(intId);
                }
            }

            if(countDwnSecs <= 0) {
                if (blastOffFn) { blastOffFn(); }
                window.clearInterval(intId);
            }
        }, 1000)
    };

    c9.Timer = function(){
        /* Simplifies recording of time intervals */
        this.clear();
    };
    
    c9.Timer.prototype = {
        start:function() {
            if(this._i !== null) { throw "Timer already started."; }
            this._i = new Date().getTime();
        },
        stop:function() {
            if(this._i === null) { throw "Timer already stopped."; }
            this._elapsed = this.read();
            this._i = null;
            return this._elapsed;
        },
        clear:function() {
            this._elapsed = 0;
            this._i = null;
        },
        read:function() {
            var delta = this._i == null ? 0 : new Date().getTime() - this._i; 
            return this._elapsed + delta;
        }
    };

    c9.createCORSRequest = function(method, url){
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            xhr.open(method, url, true);
        } 
        else if (typeof XDomainRequest != "undefined") {
            xhr = new XDomainRequest();
            xhr.open(method, url);
        } 
        else {
              xhr = null;
        }
        return xhr;
    };

    c9.checkIsOnline = function(callback, timeout) {
        var pingInt, callbackFired = false;
        var fireCallback = function(res) {
            if(callbackFired) {
                return;
            }
            
            if(typeof pingInt != 'undefined') { window.clearInterval(pingInt); }
            c9._isOnline = res.online;
            callbackFired = true;
            callback(res);
        };

        if(window.location.protocol === "http:"){
            var ping = function(){
                if(c9._isOnline) {
                    fireCallback({online: true});
                    return;
                }
                
                var img = new Image();
                img.onerror = function(evt) { };
                img.onload = function(evt) {
                    fireCallback({online: true});
                };
                img.src = 'http://branch.c9wireless.com/pong.gif?rnd=' + Math.floor(Math.random() * 1E9);
            };
        }
        else{
            var ping = function(){            
                if(c9._isOnline) {
                    fireCallback({online: true});
                    return;
                }
    
                var url = 'https://alive.boingohotspot.net/cgi-bin/alive?' + Math.floor(Math.random() * 1E9)
                var method = 'GET';
                var xhr = c9.createCORSRequest(method, url);
                if (!xhr) {
                    console.log('CORS not supported');
                    return;
                }
                xhr.onload = function() {
                    var c_type = xhr.getResponseHeader('content-type') || ''
                    if (c_type === '' || c_type.indexOf('html') > -1) {
                        console.log('not online'); 
                    }
                    else{
                        console.log('successfully online');         
                        fireCallback({online: true});
                    }
                };
                xhr.onerror = function() {
                    console.log('not online'); 
                };
                xhr.send();
            }
        }

        ping();
        pingInt = window.setInterval(ping, 500);
        if(timeout) {
            window.setTimeout(function(){
                fireCallback({online: false});
            }, timeout * 1000);
        }
    };

    c9.promos = c9.promos || {};

    c9.promos.BRANCH_BASE = '/wifi/branch/';

    c9.promos._responseData = {};
    
    c9.promos.responseData = function() {
        var data = c9.promos._responseData;
        
        if(arguments.length === 0) {
            // Return the entire data object.
            return data;
        } else if(arguments.length === 1 && arguments[0] === null) {
            // Calling responseData(null) clears the data object.
            c9.promos._responseData = {};
            return;
        } else if(arguments.length === 1
                 && Object.prototype.toString.call(arguments[0]) === '[object String]') {
            // Calling responseData(string key) returns the value in the
            // data object associated with the `key`.
            return data[arguments[0]];
        } else if(arguments.length === 1
                 && Object.prototype.toString.call(arguments[0]) === '[object Object]') {
            // Calling responseData(object o) sets the data object to `o`.
            c9.promos._responseData = o;
            return;
        } else if(arguments.length === 2
                 && Object.prototype.toString.call(arguments[0]) === '[object String]') {
            // Calling responseData(string k, object v) sets
            // the value `v` into they key `k`.
            var k = arguments[0];
            var v = arguments[1];
            data[k] = v;
            return;
        } else {
            throw "Invalid argument.";
        }
    };

    c9.promos.hasFeature = function(f) {
        var features = (c9.venue && c9.venue.wifi_config && c9.venue.wifi_config.features) || [];
        for(var i=0; i<features.length; i++) {
            if(features[i] === f) { return true; }
        }
        return false;
    };

    c9.promos.hasEvent = function(target, resp) {
        var evtsArr = resp.split('+');
        for(var i=0; i<evtsArr.length; i++) {
            if(evtsArr[i] === target) {
                return true;
            }
        }
        return false;
    };

    c9.promos.getAutoResponseMode = function(resp) {
        var acceptIsh = c9.promos.hasEvent('accept', resp);

        if(acceptIsh && c9.promos.hasFeature('/standards/postauth/redirect')) {
            return 'redirect';
        } else if(acceptIsh && c9.promos.responseIsPoppable()) {
            var venueType = (c9 && c9.venue && c9.venue.venue_type) || "";
            if(venueType == 'Airport' || venueType =='Metro'
               || c9.promos.hasFeature('/standards/postauth/popover')) {
                return 'popover';
            } else {
                return 'popunder';
            }
        } else {
            return 'redirect';
        }
    };
    
    c9.promos.responseIsPoppable = function () {
        return !navigator.userAgent.match(/(palm os|palm|hiptop|avantgo|plucker|xiino|blazer|elaine|blackberry|android|ipod|iphone|ipad|windows ce; ppc;|windows ce; smartphone;|windows ce;|windows phone|mmp|symbian|smartphone|midp|wap|vodafone|pocket|kindle|silk-accelerated|mobile|psp|treo|webos|hpwos|nook)/i)
    };

    c9.promos.branch = function(url, _opts) {
        var opts = {
            failsafe: null,
            timeout: 0,
            target: 'self',
            postauth: 0,
            loginUrl: false,
            pt: 1,
            show_loading: '1'
        };
        opts = c9.extend(opts, _opts);
        
        var getParams = {
                to: opts.timeout,
                fs: opts.failsafe,
                pt: opts.pt,
                shld: opts.show_loading
        };
        
        if(url !== null) {
            getParams['target'] = c9.asSafeUrl(url);
        }

        if(opts.loginUrl) {
            getParams['login_url'] = c9.asSafeUrl(c9.promos.loginUrl);
        }
        
        url = c9.buildUrl(c9.promos.BRANCH_BASE, getParams);
        
        if(opts.target === 'self') {
            top.location.href = url;
        } else if(opts.target === 'blank') {
            window.open(url);
        }
    };
    
    c9.promos.response = function(resp, mode, opts) {
        opts = c9.extend({}, opts);
        
        mode = mode || 'auto';
        
        if(mode === 'auto') {
            mode = c9.promos.getAutoResponseMode(resp);
        }

        opts.origSuccessUrl = opts.successUrl;
        
        if(c9.promos.hasEvent('accept', resp)) {
            opts.successUrl = opts.successUrl || c9.promos.successUrl;
        }

        if(opts.postauth_cta && c9.promos.hasEvent('reject', resp)){
            opts.successUrl = opts.successUrl || c9.promos.promo_reject_url;
        }
           
        if((mode === 'popover' && c9.promos.responseIsPoppable())
           || mode === 'popover-force') {
            
            c9.promos.responsePopOver(resp, opts.successUrl, opts);
        } else if((mode === 'popunder' && c9.promos.responseIsPoppable())
           || mode === 'popunder-force') {
            c9.promos.responsePopUnder(resp, opts.successUrl, opts);
        } else {
            c9.promos.submitResponse(resp, opts);
        }
    };

    c9.promos.submitResponse = function(resp, opts) {
        var respUrl = c9.asSafeUrl(c9.promos.getRespondUrl(resp));
        opts = c9.extend({
            'successUrl': null,
            'delay': 0
        }, opts);

        var url_opts = {};
        var keys = [
            //params that are passed to promo action url
            "pTimeout", "pRetake", "mGroup", "mShowRedirect",
            "mobile_app_store", "postauth_cta",
            'idle_timeout', 'download_speed',
            'upload_speed', 'burst_speed', 
            'burst_duration'
        ];
        var c = 0;
        for(var k in keys){
            k = keys[k];
            if(opts[k] !== undefined){
                url_opts[k] = opts[k];
                c++;
            }
        } 
        if(c !== 0){
            respUrl = c9.buildUrl(respUrl, url_opts);
        }

        if(opts.successUrl === 'pass') {
            respUrl = c9.buildUrl(respUrl, {
                'pass': '1'
            });
        } else if(opts.successUrl == 'disable') {
            respUrl = c9.buildUrl(respUrl, {
                'disable': '1'
            });
        } else if(opts.successUrl) {
            o = {
                'dest_url': c9.promos.renderUrl(opts.successUrl)
            };
            if(opts.build_response_url_args){
                o = opts['build_response_url_args'](opts,o);
            }
            respUrl = c9.buildUrl(respUrl, o);
        }

        if(opts.loginEventOverride){
            var next_url = c9.getParam('next_url', respUrl);
            if (next_url && next_url.match(/wifi\/\w+\/login\//g)){
                respUrl = c9.promos.rmGetParam(respUrl, 'next_url');
                var delim = next_url.indexOf('?') != -1 ? '&': '?';
                next_url += delim + 'loginEventOverride=' + opts.loginEventOverride;
                var paramRegexExp = /[\\?&]([^&#]+)=([^&#]+)/g;
                var baseUrlRegexExp = /([^\\?&]+)/g;
                var params = {}, baseUrl;
                try{
                    baseUrl = baseUrlRegexExp.exec(next_url)[1];        
                } catch(err){
                    baseUrl = "";
                }
                var newNextUrl = baseUrl;
                while (m=paramRegexExp.exec(next_url)){
                    params[m[1]] = m[2]; 
                }
                var first = true;
                for(var k in params){
                    if (first){
                        newNextUrl += encodeURIComponent("?") + encodeURIComponent(k+"="+params[k]);
                        first = false;
                        continue;
                    }
                    newNextUrl += encodeURIComponent("&") + encodeURIComponent(k+"="+params[k]);
                }
                delim = respUrl.indexOf('?') != -1 ? '&': '?';
                respUrl += delim + 'next_url=' + newNextUrl;
            }
        }

        var responseData = c9.promos.responseData();
        
        var _doSubmit = function() {
            if(c9.size(responseData)) {
                var respForm;
                if(jQuery) {
                    (function($) {
                        var oForm = $('<form>')
                        oForm.attr({
                            'method': "post",
                            'action': respUrl
                        }).css({
                            'overflow': "hidden",
                            'width': "0",
                            'height': "0"
                        });
                        
                        var oRespDataInput = $('<input>');
                        oRespDataInput.attr({
                            'name': "resp_data",
                            'type': "hidden"
                        }).val(c9.encodeObjJSONB64(responseData));

                        oForm.append(oRespDataInput);
                        $('body').append(oForm);
                        respForm = oForm.get(0);
                    })(jQuery);
                } else {
                    respForm = document.createElement("form");
                    respForm.setAttribute('method', "post");
                    respForm.setAttribute('action', respUrl);
                    respForm.style.width = "0";
                    respForm.style.height = "0";
                    respForm.style.overflow = "hidden";

                    var respDataInput = document.createElement("input");
                    respDataInput.setAttribute('type', "hidden");
                    respDataInput.name = "resp_data";
                    respDataInput.value = c9.encodeObjJSONB64(responseData);
                    respForm.appendChild(respDataInput);
                    document.body.appendChild(respForm);
                }
                respForm.submit();
            } else {
                top.location.href = respUrl;
            }
            
        };

        if(opts.delay) {
            window.setTimeout(_doSubmit, opts.delay);
        } else {
            _doSubmit();
        }
    };

    c9.promos.responsePopOver = function(resp, branchUrl, _opts) {
        var opts = {
            delay: 0,
            redirectDelay: 0 // 'redirectDelay' is deprecated, use 'delay'
        };
        var o;
        opts = c9.extend(opts, _opts);
        if(opts.postauth_cta){
            if(c9.promos.hasEvent('accept', resp) && c9.promos.successUrl){
                branchUrl = c9.promos.successUrl; 
            }
            if(c9.promos.hasEvent('reject', resp) && c9.promos.promo_reject_url){
                branchUrl = c9.promos.promo_reject_url;
            }
        }
        if(branchUrl) {
            branchUrl = c9.asSafeUrl(branchUrl);
            o = {target: 'blank', timeout: 30};
            if(opts.show_loading && opts.show_loading === '0'){
                o = c9.extend(o, {'show_loading':'0'});
            }
            c9.promos.branch(branchUrl, o);
        }
        o = {
                'successUrl': 'pass',
                'delay': opts.delay || opts.redirectDelay
            };
        if(opts.postauth_cta && opts.origSuccessUrl){
            o = c9.extend(o, {'successUrl':opts.origSuccessUrl});
        }

        var url_opts = {};
        var keys = [
            //params that are passed to promo action url
            "mGroup", 'idle_timeout', 'download_speed',
            'upload_speed', 'burst_speed', 'burst_duration'
        ];
        var c = 0;
        for(var k in keys){
            k = keys[k];
            if(opts[k] !== undefined){
                url_opts[k] = opts[k];
                c++;
            }
        } 
        if(c !== 0){
            o = c9.extend(o, url_opts);
        }

        if(opts.mobile_app_store){
            o = c9.extend(o, {'mobile_app_store':opts.mobile_app_store});
        }
        if(opts.hasOwnProperty('postauth_cta')){
            o = c9.extend(o, {'postauth_cta':opts.postauth_cta});
        }
        c9.promos.submitResponse(resp, o);
    };
    
    c9.promos.responsePopUnder = function(resp, successUrl, _opts) {
        var opts = {
            winParams: null,
            timeout: 30,
            target: 'blank',
            pt: 0,
            delay: 0,
            redirectDelay: 0 // 'redirectDelay' is deprecated, use 'delay'
        };
        opts = c9.extend(opts, _opts);

        if(opts.postauth_cta && opts.origSuccessUrl){
            successUrl = opts.origSuccessUrl;
        }
        if(successUrl) {
            // branching window will atempt to read from cookies
            // what the default landing page should be. If it is blocked,
            // users will still be able to connect. The promo url (successUrl)
            // appears in the inactive tab/window.
            //
            // if postauth_cta is set, then we want to bypass login which means
            // we have to set dest_url in wifi_dest.html by ourself
            // In this case, promo.success_url or promo.reject_url (if click reject)
            // appears in the inactive tab/window, and successUrl (accept_url or 
            // reject_url) appears in the active tab/window
            b_url = opts.postauth_cta ? successUrl : null;
            c9.promos.branch(b_url, opts);
        }

        var o = {
            'successUrl': successUrl,
            'delay': opts.delay || opts.redirectDelay
        };

        if(opts.hasOwnProperty('postauth_cta')){
            o = c9.extend(o, {'postauth_cta':opts.postauth_cta});
            if(c9.promos.hasEvent('accept', resp) && c9.promos.successUrl){
                o = c9.extend(o, {'successUrl': c9.promos.successUrl}); 
            }
            if(c9.promos.hasEvent('reject', resp) && c9.promos.promo_reject_url){
                o = c9.extend(o, {'successUrl': c9.promos.promo_reject_url});
            }
        }

        var url_opts = {};
        var keys = [
            //params that are passed to promo action url
            "mGroup", 'idle_timeout', 'download_speed',
            'upload_speed', 'burst_speed', 'burst_duration'
        ];
        var c = 0;
        for(var k in keys){
            k = keys[k];
            if(opts[k] !== undefined){
                url_opts[k] = opts[k];
                c++;
            }
        } 
        if(c !== 0){
            o = c9.extend(o, url_opts);
        }
        
        if(opts.mobile_app_store){
            o = c9.extend(o, {'mobile_app_store':opts.mobile_app_store});
        }
        c9.promos.submitResponse(resp, o);
    };

    c9.promos.responseRedirect = function(resp, successUrl, delay, loginEventOverride) {
        c9.promos.submitResponse(resp, {
            'successUrl': successUrl,
            'delay': delay,
	    'loginEventOverride': loginEventOverride
        });
    };
    
    c9.promos.acceptPopOver = function(_opts) {
        // DEPRECATED: use responsePopOver()
        c9.promos.responsePopOver('accept', c9.promos.successUrl, _opts);
    };
    
    c9.promos.acceptPopUnder = function(_opts) {
        // DEPRECATED: use responsePopUnder()
        c9.promos.responsePopUnder('accept', c9.promos.successUrl, _opts);
    };

    c9.promos.rejectPopUnder = function(_opts) {
        // DEPRECATED: use responsePopUnder()
        c9.promos.responsePopUnder('reject', c9.promos.successUrl, _opts);
    };

    c9.promos.rejectRedirect = function() {
        // DEPRECATED: use response()
        c9.promos.response('reject', 'redirect');
    };

    c9.promos.acceptRedirect = function() {
        // DEPRECATED: use response()
        c9.promos.response('accept', 'redirect');
    };

    c9.promos.failRedirect = function() {
        c9.promos.response('fail', 'redirect');
    };

    c9.promos.disableFlow = function() {
        var disableUrl = c9.promos.disableUrl || '/wifi/disable/';
        top.location.href = c9.asSafeUrl(disableUrl);
    };

    c9.promos.failAndDisableFlow = function() {
        c9.promos.response('fail', 'redirect', {
            'successUrl': 'disable'
        });
    };

    c9.promos.useSecureHTTP = function(url){
        var n, reg_http;
        reg_http = new RegExp("^\s*http:");
        n = reg_http.exec(url);
        if ((window.location.protocol === "https:") && (n != null)) {
          return url.replace(reg_http, 'https:');
        }
        return url;
    };

    c9.promos.tryFlow = function(uuid, userOptions) {
        var options = {
            mode: 'auto'
        };
        options = c9.extend(options, userOptions);
        
        var doTryFlow = function(online) {
            var edgeDestUrl;
            var enc = window.encodeURIComponent;
            var url = c9.promos.useSecureHTTP('http://' + c9.host + '/wifi/' + enc(c9.venue.uuid));
            url += '/splash/?__tfid=' + enc(uuid);
            if(online) {
                var domain_parts = location.hostname.split('.');
                var subdomain = domain_parts.shift();
                var domain = domain_parts.join('.');
                edgeDestUrl = c9.promos.getEdgeDestUrl();
                edgeDestUrl = edgeDestUrl ? ('http://edge.' + domain + '/wifi_dest.html?dest_url=' + enc(edgeDestUrl)) : 'http://edge.' + domain + '/wifi_dest.html?pd=1';
                edgeDestUrl = c9.promos.useSecureHTTP(edgeDestUrl);
                url += '&login_url=' + enc(edgeDestUrl);
            } else {
                url += '&login_url=' + enc(c9.promos.loginUrl);
            }
            top.location.href = url;
        };
        
        if(options.mode == 'auto') {
            c9.checkIsOnline(function(res){
                doTryFlow(res.online);
            }, 1500);
        } else if(options.mode == 'postauth') {
            doTryFlow(true);
        } else {
            doTryFlow(false);
        }
    };

    c9.promos.renderUrl = function(url, macros) {
        var domain_parts = location.hostname.split('.');
        var subdomain = domain_parts.shift();
        var domain = domain_parts.join('.');
        macros = c9.extend({
            VENUE: cloud9.venue.uuid,
            EDGE_DEST_URL: cloud9.promos.getEdgeDestUrl() || c9.promos.useSecureHTTP('http://edge.' + domain + '/wifi_dest.html?pd=1'),
            MAC_ALPHA_MD5: cloud9.uid.split("_")[1] || "",
            UID: cloud9.uid,
            ADGROUP: cloud9.promos.adgroup || "NA",
            PROMO: cloud9.promos.promo || "NA",
            ADGROUP_PROMO: (cloud9.promos.adgroup || "NA") + "_" + (cloud9.promos.promo || "NA"),
            DATE: (new Date()).toISOString().slice(0,10).replace(/-/g,"")
        }, macros);

        url = url.replace(/\$([0-9A-Z_]+)\$/g, function(_, key) {
            return macros[key] || '';
        });
        return url;
    };

    c9.promos.credform = function(f, options) {
        /*
          @f the form element.
          @options:
          - valid: a callback if credentials were valid
          - invalid: a callback that accepts a validation message.
          - error: a fatal error occurred.
          - complete: a callback that is fired regardless of credential validity.
         */
        options = $.extend({
            valid: function() {}, 
            invalid: function(msg) {
                alert(msg);
            },
            error: function(){
                c9.promos.disableFlow();
            },
            complete: function(){},
            autoclear: true
        }, options);
        
        $(f).submit(function(){
            var $form = $(this);
            var action = $form.attr('action');
            var finalize = function (){
                $form.removeClass('cred-loading');
                options.complete.call($form.get(0));
            };
            var accept; 
            $form.addClass('cred-loading');

            accept = $form.find('input[name="accept"][type="checkbox"]');
            if(accept.length && !accept.is(":checked")) {
                options.invalid.call(
                    $form.get(0), "Please accept the terms & conditions");
                finalize();
            }
            
            $.ajax({
                url: action,
                type: 'POST',
                data: $form.serialize(),
                dataType: 'json',
                complete: function(jqXHR, textStatus) {
                    finalize();
                },
                success: function(r) {
                    if(r['response']) {
                        options.valid.call($form.get(0));
                    } else {
                        if(options.autoclear) {
                            $form.find('input[type="password"]').each(function(){
                                $(this).val('');
                            });
                        }
                        msg = r['message'] || "Could not authenticate.";
                        options.invalid.call($form.get(0), msg);
                    }
                },
                error: function() {
                    options.error.call($form.get(0));
                    finalize();
                }
            });
            return false;
        });
    };
    
    c9.promos.buildTrackUrl = function(evt, data) {
        var urlParts, value, t, px;
	    if(c9.promos.trackUrl === null){
	        console.warn("trackUrl is not defined");
	        return false;
	    }
	    if(!evt.match(/^[a-z][0-9a-z_+-]*$/)){
	        console.warn("tracking evt is invalid");
	        return false;
	    }	

	    urlParts = [c9.promos.trackUrl, "__e="+window.encodeURIComponent(evt), "__ord="+Math.floor(Math.random()*1E8)];
	    if(data !== undefined){
	        for(var prop in data){
		        if(data.hasOwnProperty(prop)){
		            // Check for invalid key
		            if(!prop.match(/^[a-z][0-9a-z_-]*$/)){
			            console.warn("tracking data key is invalid");
			            return false;
		            }
		            value = data[prop];
		            /* Convert basic types to json */
		            t = typeof(value);
		            if(t == "object"){
			            console.warn("tracking data values must be primitive types, not objects");
			            return false;
		            } else if(t == "string"){
			            value = '"' + value + '"';
		            } else {
			            value = String(value)
		            }
		            urlParts.push(prop + "=" + window.encodeURIComponent(value));
		        }
	        }
	    }
        return urlParts.join("&");
    };

    c9.promos.track = function(evt, data){
        px = new Image();
        px.src = c9.promos.buildTrackUrl(evt, data);
    };

    c9.promos.trackRedirect = function(url, evt, data) {
        top.location.href = c9.promos.buildTrackUrl(evt, data) + '&__next=' + window.encodeURIComponent(c9.asSafeUrl(url));
    };    
    
    c9.promos.rmGetParam = function(url, parameter) {
        var urlparts= url.split('?');   
        if (urlparts.length>=2) {
            var prefix= encodeURIComponent(parameter)+'=';
            var pars= urlparts[1].split(/[&;]/g);
            for (var i= pars.length; i-->0;)               
                if (pars[i].lastIndexOf(prefix, 0)!==-1)   
                    pars.splice(i, 1);
            url= urlparts[0]+'?'+pars.join('&');
        }
        return url;
    };

    c9.promos.backgroundLogin = function(callback, loginTimeout, loginEventOverride) {
        var loginFrame, url,
        _this = this;
        if (callback == null) callback = (function() {});
        url = c9.promos.getRespondUrl('force_login', c9.promos.useSecureHTTP('http://nimbus.c9w.net/static/splashes/branded1b/landing.html')) + '&__r=' + Math.random();
        if (typeof loginEventOverride !== 'undefined'){
            var next_url = c9.getParam('next_url', url);
            if (next_url){
                url = c9.promos.rmGetParam(url, 'next_url');
                var delim = next_url.indexOf('?') != -1 ? '&': '?';
                next_url += delim + 'loginEventOverride=' + loginEventOverride;
                var paramRegexExp = /[\\?&]([^&#]+)=([^&#]+)/g;
                var baseUrlRegexExp = /([^\\?&]+)/g;
                var params = {}, baseUrl;
                try{
                    baseUrl = baseUrlRegexExp.exec(next_url)[1];        
                } catch(err){
                    baseUrl = "";
                }
                var newNextUrl = baseUrl;
                while (m=paramRegexExp.exec(next_url)){
                    params[m[1]] = m[2]; 
                }
                var first = true;
                for(var k in params){
                    if (first){
                        newNextUrl += encodeURIComponent("?") + encodeURIComponent(k+"="+params[k]);
                        first = false;
                        continue;
                    }
                    newNextUrl += encodeURIComponent("&") + encodeURIComponent(k+"="+params[k]);
                }
                delim = url.indexOf('?') != -1 ? '&': '?';
                url += delim + 'next_url=' + newNextUrl;
            }
        }
        loginFrame = $('<iframe></iframe>')
            .css({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '1px',
                height: '1px',
                border: 'none',
                overflow: 'hidden',
                opacity: 0,
                'z-index': '-1'
            })
            .attr('src', url)
            .attr('frameborder', '0')
            .attr('marginwidth', '0')
            .attr('marginheight', '0')
            .attr('align', 'top')
            .attr('scrolling', 'no')

        window.setTimeout(function() {
            return c9.checkIsOnline(callback, loginTimeout);
        }, 0);
        $(function(){
            $(document.body).append(loginFrame);
        });
    };

    c9.promos.templateName = null;
    c9.promos.venueId = null;
    c9.promos.loginUrl = null;
    c9.promos.acceptUrl = null;
    c9.promos.rejectUrl = null;
    c9.promos.failUrl = null;
    c9.promos.nextUrl = null;
    c9.promos.disableUrl = null;
    c9.promos.successUrl = null;
    c9.promos.promo_reject_url = null;
    c9.promos.trackUrl = null;
    c9.promos.validateUrl = null;
    c9.promos.branchUrl = '/wifi/branch/';
    c9.promos.staticBaseUrl = null;
    
    c9.promos.staticUrl = function(url) {
        if(c9.promos.staticBaseUrl && url && /^\//.test(url)) {
            return c9.promos.staticBaseUrl + url
        }
        return url;
    };

    c9.promos.getRespondUrl = function(resp, successUrl) {
        var delim, respUrl;
        try {
            respUrl = c9.promos.respUrl.replace('__C9W__RESPONSE__C9W__', resp);
            if(successUrl) {
                successUrl = c9.asSafeUrl(successUrl);
                delim = respUrl.indexOf('?') != -1 ? '&': '?';
                respUrl += delim + 'dest_url=' + window.encodeURIComponent(successUrl);
            }
            return respUrl;
        } catch(err) {
            
        }
    };

    c9.promos.getEdgeDestUrl = function() {
        var cookie_name = 'edge_dest_url';
        var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
        if (results) {
            return decodeURIComponent(eval(results[2]));
        } else {
            return null;
        }
    };

    c9.promos.init = function() {
        c9.promos.acceptUrl = c9.promos.getRespondUrl('accept');
        c9.promos.rejectUrl = c9.promos.getRespondUrl('reject');
        c9.promos.failUrl = c9.promos.getRespondUrl('fail');
        c9._initTimer = new c9.Timer();
    };

})(cloud9);
