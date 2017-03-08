var CirclePlayer = function(jPlayerSelector, callbacksFunc) {
    var self = this,

    cssSelector = {
        bufferHolder: ".cp-buffer-holder",
        progressHolder: ".cp-progress-holder",
        progress1: ".cp-progress-1",
        progress2: ".cp-progress-2",
        circleControl: ".cp-circle-control",
        play: ".cp-play",
        pause: ".cp-pause"
    };

    this.cssClass = {
        gt50: "cp-gt50",
    };

    var _use_html5_audio = false;
    if (navigator.userAgent.match(/iphone/i) != null) {
        //window.console && console.log(" iphone/ipad ");
        _use_html5_audio = true;
    }
    if (navigator.userAgent.match(/ipad/i) != null) {
        //window.console && console.log(" ipad ");
        _use_html5_audio = true;
    }
    if (navigator.userAgent.match(/android/i) != null) {
        //window.console && console.log(" android  ");
        _use_html5_audio = true;
    }

    window.console && console.log("CirclePlayer created: _use_html5_audio = " + _use_html5_audio);

    this.player = jwplayer(jPlayerSelector);

	if (_use_html5_audio == true) { 
        this.player = document.createElement('audio');
        this.player.setAttribute('src', jw_setup.file);
        this.player.onTime = function(f) { this.addEventListener("timeupdate", f); }
        this.player.onComplete = function(f) { this.addEventListener("ended", f); }
        this.player.onError = function(f) { this.addEventListener("error", f); }
        this.player.onSetupError = function(f) { this.addEventListener("error", f); }
        this.player.onPause = function(f) { this.addEventListener("pause", f); }
        this.player.onPlay = function(f) { this.addEventListener("play", f); }
        this.player.getPosition = function() { return this.currentTime; }
        this.player.getDuration = function() { return this.duration; }
        this.player.setTitle = function(f) { this.title = f; }
        this.player.loadFile = function(f) { this.setAttribute('src', f); this.load(); 
            window.console && console.log("loadFile:"+f);
         }
        this.player.stop = function() { 
            window.console && console.log("player.stop()");
            this.pause(); try { this.currentTime=0; } catch(e) { } }
    }
    else {
        this.player.setTitle = function(f) {};
        this.player.loadFile = function(f) {
            window.console && console.log("this.player.loadFile:"+f);
            this.load([{file: f}]); 
        }
    }

    this.audio = {};
    this.position = 0;
    this.duration = 1;
    this.complete = false;
    this.counted = false;
    this.secondsUntilCounted = 90;
    this.callbacksFunc = callbacksFunc;

    this.jq = {};
    jQuery.each(cssSelector, function(entity, cssSel) {
        self.jq[entity] = $(cssSel);
    });

    this._initSolution();
    this._initPlayer();
};

CirclePlayer.prototype = {
    _initPlayer: function() {
        var self = this;
        self._initCircleControl();
        self._progress(100);

        this.player.onTime( function(event) {
            var pos = Math.round(self.player.getPosition());
            if (pos != self.position) {
                self.position = pos;
                self.duration = self.player.getDuration();
                var p = Math.round(100 * self.position / self.duration);
                self._timeupdate(p);

                try {
/*
                    if (self.position < self.secondsUntilCounted) {
                        self.counted = false;
                    }
                    else if (self.position >= self.secondsUntilCounted && ! self.counted) {
*/
                    if (self.position >= self.secondsUntilCounted && ! self.counted) {
                        window.console && console.log('self.secondsUntilCounted = ' + self.secondsUntilCounted + ', position = ' + self.position);
                        self.counted = true;
                        self._counted();
                    }
                }
                catch(err) {
                    window.console && console.log('CirclePlayer.OnTime Error: ' + err);
                }
            }
        });
        this.player.onComplete(function(event){
            self._complete();
        });
        this.player.onPlay(function(event){
            window.console && console.log('on play event ');
            self.counted = false;
            self._play();
        });
        this.player.onPause(function(event){
            self._pause();
        });
        this.player.onError( function(event){
            window.console && console.log('Beats onError: message = ' + event.message);
        });
        this.player.onSetupError( function(event){
            window.console && console.log('Beats onSetupError: message = ' + event.message);
        });
    },
    _initSolution: function() {
        this.jq.progressHolder.show();
        this.jq.bufferHolder.show();
        this._resetSolution();
    },
    _resetSolution: function() {
        this.jq.progressHolder.removeClass(this.cssClass.gt50);
        this.jq.progress1.css({
            '-ms-transform': 'rotate(0deg)',
            '-webkit-transform': 'rotate(0deg)',
            'transform': 'rotate(0deg)'});
        this.jq.progress2.css({
            '-ms-transform': 'rotate(0deg)',
            '-webkit-transform': 'rotate(0deg)',
            'transform': 'rotate(0deg)'
                }).hide();
    },

    _play: function() {
        window.console && console.log('Beats onPlay event');
        this.jq.play.hide();
        this.jq.pause.show();
        this.complete = false;
        if (this.callbacksFunc) {
            this.callbacksFunc('play');
        }
    },
    _pause: function() {
        window.console && console.log('Beats onPause event');
        this.jq.play.show();
        this.jq.pause.hide();
        if (this.callbacksFunc) {
            this.callbacksFunc('pause');
        }
    },
    _complete: function() {
        window.console && console.log('Beats onComplete event');
        this.complete = true;
        this._resetSolution();
        if (this.callbacksFunc) {
            this.callbacksFunc('complete');
        }
    },
    _counted: function() {
        window.console && console.log('Beats onCounted event');
        if (this.callbacksFunc) {
            this.callbacksFunc('counted');
        }
    },

    _initCircleControl: function() {
        var self = this;
        this.jq.play.click(function(){
                self.player.play();
                return false; // To prevent event propagation
        });
        this.jq.pause.click(function(){
                self.player.pause();
                return false; // To prevent event propagation
        });
    },
    _timeupdate: function(percent) {
        if (percent%10==0 && percent != 0 || percent == 100) {
            window.console && console.log('Beats _timeupdate event: ' + percent + '%');
        }
        if (this.complete) { return; }

        var degs = percent * 3.6+"deg";

        if (percent <= 50) {
            this.jq.progressHolder.removeClass(this.cssClass.gt50);
            this.jq.progress1.css({
                    '-ms-transform': 'rotate(' + degs + ')',
                    '-webkit-transform': 'rotate(' + degs + ')',
                    'transform': 'rotate(' + degs + ')'});
            this.jq.progress2.hide();
        }
        else if (percent <= 100) {
            this.jq.progressHolder.addClass(this.cssClass.gt50);
            this.jq.progress1.css({
                    '-ms-transform': 'rotate(180deg)',
                    '-webkit-transform': 'rotate(180deg)',
                    'transform': 'rotate(180deg)'});
            this.jq.progress2.css({
                    '-ms-transform': 'rotate(' + degs + ')',
                    '-webkit-transform': 'rotate(' + degs + ')',
                    'transform': 'rotate(' + degs + ')'});
            this.jq.progress2.show();
        }
    },
    _progress: function(percent) {
        window.console && console.log('Beats _progress event: ' + percent);

/*
        var degs = percent * 3.6+"deg";

        if (percent <= 50) {
            this.jq.bufferHolder.removeClass(this.cssClass.gt50);
            this.jq.buffer1.css({
                    '-ms-transform': 'rotate(' + degs + ')',
                    '-webkit-transform': 'rotate(' + degs + ')',
                    'transform': 'rotate(' + degs + ')'});
            this.jq.buffer2.hide();
        }
        else if (percent <= 100) {
            this.jq.bufferHolder.addClass(this.cssClass.gt50);
            this.jq.buffer1.css({
                    '-ms-transform': 'rotate(180deg)',
                    '-webkit-transform': 'rotate(180deg)',
                    'transform': 'rotate(180deg)'});
            this.jq.buffer2.show();
            this.jq.buffer2.css({
                    '-ms-transform': 'rotate(' + degs + ')',
                    '-webkit-transform': 'rotate(' + degs + ')',
                    'transform': 'rotate(' + degs + ')'});
        }
*/
    },
    _getArcPercent: function(pageX, pageY) {
        var offset = this.jq.circleControl.offset(),
            x      = pageX - offset.left - this.jq.circleControl.width()/2,
            y      = pageY - offset.top - this.jq.circleControl.height()/2,
            theta  = Math.atan2(y,x);

        if (theta > -1 * Math.PI && theta < -0.5 * Math.PI) {
            theta = 2 * Math.PI + theta;
        }

        return (theta + Math.PI / 2) / 2 * Math.PI * 10;
    }
};

