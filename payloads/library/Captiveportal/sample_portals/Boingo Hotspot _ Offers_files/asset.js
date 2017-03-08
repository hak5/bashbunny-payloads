/** Nimbus Redirect Widget
    Version: 1.2
    Date: 08/26/13
**/

var theSplashHost = 'nimbus.c9w.net';

window.cloud9 = window.cloud9 || {};
window._c9 = window.cloud9; // `_c9` namespace is deprecated.

(function(c9){
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
    
    c9.safeUrl = function(url) {
        return (/^https?\:\/\//).test(url);
    };
    
    c9.GET = function(name, loc) {
        loc = typeof loc == 'undefined' ? window.location.href : loc;
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)", regex = new RegExp( regexS ), results = regex.exec(loc);
        if( results == null ) { return ""; }
        else {
            return decodeURIComponent(results[1]);
        }
    };

    c9.rmGetParam = function(url, parameter) {
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

    c9.RedirectWidget = function(userOptions) {
        var options = {
            authParam:"__c9auth",
            disableParam:"__c9dis",
            interParam:"__c9inter",
            promoParam:"__c9p",
            promoCoverParam:"__c9pc",
            rewardParam:"__c9ru",
            decisionMode:"redirect",
            authOnHardDisable: false,
            form:"weblogin",
            formIndex:0,
            authmethod:"form",
            providerProfile:null,
            submitfn:null,
            venueId:"cloud9_test",
            subVenueId:null,
            splashHost:theSplashHost,
            preauthenticate:null,
            target:"self",
            transformSplashUrl:null,
            transformInterUrl:null,
            mac:null,
            lang:null,
            customParams:null,
            waitForInter: function(cb) {
                var form, osub;
                if(this.options.authmethod !== 'form') {
                    return;
                }
                
                form = document[this.options.form] ?
                    document[this.options.form] :
                    document.forms[this.options.formIndex];
                if(!form) {
                    return;
                }

                osub = form.onsubmit;
                form.onsubmit = function() {
                    cb();
                    return false;
                };
            }
        };
        c9.extend(options, userOptions);
        this.options = options;
        this.decisionUrl = c9.GET('__c9auth') ? window.location.href : null;
    };

    c9.RedirectWidget.prototype = {
        pageLoad:function() {
            var widget = this;
            widget.decide();
            c9.pageLoaded = true;
        },
        

        /** Decision types: Disable, Takeover, Interstitial, Authenticate ========= **/
        
        isDisabled: function() {
            return ((this.decisionUrl && !!c9.GET(this.options.disableParam, this.decisionUrl))
                || window.location.href.indexOf('www.uniguest.com') != -1
                || /nook/i.test(navigator.userAgent))
        },
        disable:function() {
            if(this.options.authOnHardDisable && !!c9.GET(this.options.disableParam)) {
                this.authenticate();
                return;
            }
            c9.domready(function(){
                if(window.c9killLoader) {
                    window.c9killLoader();
                }
            });
        },

        isAuth: function() {
            return !!c9.GET(this.options.authParam, this.decisionUrl);
        },
        authenticate: function() {
            var widget = this;
            c9.domready(function(){
                try {
                    var authmethod = widget.options.authmethod;
                    var form = document[widget.options.form] ? document[widget.options.form] : document.forms[widget.options.formIndex];
                    if(widget.options.preauthenticate && !widget.options.preauthenticate(form)) {
                        widget.disable();
                        return false;
                    }

                    if(authmethod == 'form' && form) {
                        document.body.style.display = 'none';
                        form.submit();
                    } else if(authmethod == 'function' && widget.options.submitfn) {
                        document.body.style.display = 'none';
                        widget.options.submitfn(widget);
                    }
                } catch(err) {
                    widget.disable();
                }
                
            });
        },

        isInter: function() {
            return !!c9.GET(this.options.interParam, this.decisionUrl) &&
                c9.GET(this.options.interParam, this.decisionUrl).substring(0, 1) === '/' &&
                this.options.waitForInter;
        },
        interstitialize: function() {
            var widget = this;
            var waitForInter = widget.options.waitForInter;
            widget.disable();
            c9.domready(function() {
                waitForInter.call(widget, function(){
                    widget.redirectToInter();
                });
            });
        },

        isTakeover: function() {
            // HACK: This is returned by a server if and only if we want
            // to redirect users there immediately and the ad code is
            // operating in jsonp mode.
            return this.decisionUrl[0] == "/";
        },
        takeover: function() {
            // The `decisionUrl` is root relative to the `splashHost`.
            // Redirect to the absolute URL.
            this._redirect("http://"+this.options.splashHost+this.decisionUrl);
        },
        

        /** Decision fetching and handling ========= **/

        _doDecision: function() {
            var widget = this;

            adgroup_id = c9.GET('__c9adg', widget.decisionUrl)
            if (window.c9SyncReadyQ){
                c9SyncReadyQ = window.c9SyncReadyQ
                for (i=0; i < c9SyncReadyQ.length; i++){
                    c9SyncReadyQ[i](adgroup_id);
                }
            }else{
                function c9SyncReadyQObj(){} 
                c9SyncReadyQObj.prototype.push = function(fn){
                    return fn(adgroup_id);
                };
                window.c9SyncReadyQ = new c9SyncReadyQObj()
                c9SyncReadyQ = window.c9SyncReadyQ
            }

            if(widget.isDisabled()) {
                widget.disable();
            } else if(widget.isTakeover()) {
                widget.takeover();
            } else if(widget.isInter()) {
                widget.interstitialize();
            } else if(widget.isAuth()) {
                widget.authenticate();
            } 
        },
        hasDecision: function() {
            return this.decisionUrl || this.isDisabled();
        },

        decide: function() {
            var widget = this;
            if(widget.hasDecision()) {
                widget._doDecision();
            } else if(widget.options.decisionMode === "jsonp") {
                widget.jsonpToSplash();
            } else if(widget.options.decisionMode === "redirect") {
                widget.redirectToSplash();
            }
        },
        jsonpToSplash: function() {
            widget = this;
            window._c9_jsonpCb = function(res) {
                widget.decisionUrl = res.url;
                widget._doDecision();
            };
            var scriptTag = document.createElement('script');
            scriptTag.async = true;
            scriptTag.src = widget.getSplashUrl() + "&jsonpVer=1.0&jsonpCb=_c9_jsonpCb";
            document.getElementsByTagName('head')[0].appendChild(scriptTag);
        },
        redirectToSplash:function() {
            var splashUrl = this.getSplashUrl();
            if(splashUrl === null) { return; }
            this._redirect(splashUrl);
            c9.domready(function(){
                try {
                    document.body.style.display = 'none';
                } catch(err) {
                    
                }
            });
        },


        /** Helper Methods ========= **/

        _redirect: function(url) {
            if(this.options.target == "top") {
                top.location.href = url;
            } else {
                window.location.href = url;
            }
        },
        getCleanWindowUrl: function() {
            var res = window.location.href;
            res = c9.rmGetParam(res, this.options.authParam);
            res = c9.rmGetParam(res, this.options.disableParam);
            res = c9.rmGetParam(res, this.options.interParam);
            res = c9.rmGetParam(res, this.options.promoParam);
            res = c9.rmGetParam(res, this.options.promoCoverParam);
            res = c9.rmGetParam(res, this.options.rewardParam);
            
            if(res && res.substring(res.length - 1) === '?') {
                res = res.substring(0, res.length - 1);
            }
            return res;
        },

        getSplashUrl:function() {
            var loginUrl = encodeURIComponent(window.location.href + (window.location.search ? "&" : "?") + this.options.authParam + "=1"),
                splashUrl = "http://" + this.options.splashHost + "/wifi/" + this.options.venueId + '/splash/?login_url=' + loginUrl,
                eCustomParams = [];
            
            splashUrl = this.options.providerProfile ? splashUrl += '&__pvdrcnf=' + this.options.providerProfile : splashUrl;

            if(this.options.subVenueId !== null) {
                splashUrl += "&__sv_id=" + window.encodeURIComponent(this.options.subVenueId);
            }

            if(this.options.mac !== null) {
                splashUrl += '&mac=' + window.encodeURIComponent(this.options.mac);
            }

            if(this.options.lang !== null) {
                splashUrl += '&lang=' + window.encodeURIComponent(this.options.lang);
            }

            if(this.options.customParams !== null) {
                for(k in this.options.customParams) {
                    if(!this.options.customParams.hasOwnProperty(k)) {
                        continue;
                    }
                    eCustomParams.push(window.encodeURIComponent(k) + "=" + window.encodeURIComponent(this.options.customParams[k]));
                }
                if(eCustomParams.length) {
                    splashUrl += '&cp=' + window.encodeURIComponent(eCustomParams.join("&"));
                }
            }

            if(document.referrer && !(/^https?\:\/\/[a-z]+\.c9w\.net\//).test(document.referrer)) {
                splashUrl += '&rf=' + window.encodeURIComponent(document.referrer);
            }
            
            if(this.options.transformSplashUrl) {
                splashUrl = this.options.transformSplashUrl(splashUrl);
            }
            
            return splashUrl;
        },
        getInterUrl:function() {
            var interPath = c9.GET(this.options.interParam, this.decisionUrl),
                loginUrl = this.getCleanWindowUrl(),
                interUrl;
            loginUrl += (loginUrl.indexOf('?') === -1 ? '?__c9auth=1' : '&__c9auth=1')
            loginUrl = (interPath.indexOf('?') === -1 ? '?' : '&') +
                'login_url=' + window.encodeURIComponent(loginUrl);
            interUrl = "http://" + this.options.splashHost + interPath + loginUrl;
            if(this.options.transformInterUrl) {
                interUrl = this.options.transformInterUrl(interUrl);
            }
            return interUrl;
        },
        redirectToInter:function() {
            var interUrl = this.getInterUrl();
            if(interUrl === null) { return; }
            this._redirect(interUrl);
        }
    };


    /*!
     * domready (c) Dustin Diaz 2012 - License MIT
     */
    !function (name, definition) {
        if(!c9[name]) { c9[name] = definition(); }
    }('domready', function (ready) {

        var fns = [], fn, f = false
        , doc = document
        , testEl = doc.documentElement
        , hack = testEl.doScroll
        , domContentLoaded = 'DOMContentLoaded'
        , addEventListener = 'addEventListener'
        , onreadystatechange = 'onreadystatechange'
        , readyState = 'readyState'
        , loaded = /^loade|c/.test(doc[readyState])

        function flush(f) {
            loaded = 1
            while (f = fns.shift()) f()
        }

        doc[addEventListener] && doc[addEventListener](domContentLoaded, fn = function () {
            doc.removeEventListener(domContentLoaded, fn, f)
            flush()
        }, f)


        hack && doc.attachEvent(onreadystatechange, fn = function () {
            if (/^c/.test(doc[readyState])) {
                doc.detachEvent(onreadystatechange, fn)
                flush()
            }
        })

        return (ready = hack ?
                function (fn) {
                    self != top ?
                        loaded ? fn() : fns.push(fn) :
                    function () {
                        try {
                            testEl.doScroll('left')
                        } catch (e) {
                            return setTimeout(function() { ready(fn) }, 50)
                        }
                        fn()
                    }()
                } :
                function (fn) {
                    loaded ? fn() : fns.push(fn)
                })
    });
    

    if(window.c9init) { window.c9init(c9); }
})(cloud9);

