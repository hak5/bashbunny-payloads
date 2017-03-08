/* tsedge_instr-min.js - Minified version - v0.9.5 */
if(typeof tsedge == "undefined"){
	var tsedge = {};
	tsedge.instr = {
		PL_GO_IMG: "/!crd_prm!.!cm",	// name for PRM GO file name
		onLoadEventAttached: false,
		prmSent: false,				// has the PageRenderMarker been sent ?
		random: Math.floor(Math.random() * 1000000),
		pagestart_ts : new Date().getTime(),
		pageend_ts: 0,
		counter: 0.00,
		url: null,
		version: '0.9.5',


		bind: function(fct, context){ //allow execution of a function controlling it's context
			if (arguments.length < 2 && Object.isUndefined(arguments[0])) return this;
			return function() {
			  return fct.apply(context);
			}
		},
		getCounter: function(){
			return (this.counter.toString().indexOf(".") >= 0) ? this.counter.toString() : this.counter.toString() + '.00';
		},
		getHost: function(markerName){
			var host = "";
			var rxp = new RegExp("http[s]?://([^/]*)/(.*)");
			if(rxp.exec(markerName)){ //The PL_GO_IMG is already a full path, use it directly
				host = markerName;
			}else{
				var pageLoc = rxp.exec(window.location);
				var fsPos = markerName.indexOf("/");
				//build the protocol + domain
				host = location.protocol + "//" + location.hostname;
				if(fsPos == 0){ //leading /
					//If GO is relative to the domain, just add the GO
					host = host + markerName;
				}else { //no leading /
					//If GO is relative to the actual page, build the path and add the GO
					host = host + location.pathname.substring(0, location.pathname.lastIndexOf('/')+1) + markerName;
				}
			}
			return host;
		},
		sendPageRenderMarker: function(){
			if(!this.prmSent){
				this.pageend_ts = new Date().getTime();
				this.counter += 0.01;

				this.host = tsedge.instr.getHost(this.PL_GO_IMG);

				var markerURL = [];
				markerURL.push(this.host);
				markerURL.push("?crd_ver=");markerURL.push(this.version); //random unique page id
				markerURL.push("&crd_rnd=");markerURL.push(this.random); //random unique page id
				markerURL.push("&crd_cnt=");markerURL.push(this.getCounter()); //counter
				if(this.pageend_ts > 0) {
					markerURL.push("&crd_tpb=");markerURL.push(this.pagestart_ts); //page start timestamp
					markerURL.push("&crd_olt=");markerURL.push(this.pageend_ts - this.pagestart_ts); //page load time
				}
				this.url = markerURL.join("");

				var markerImg = new Image();
				markerImg.src = this.url;
				this.prmSent = true;
			}
		},

		attachOnLoadPageRenderMarker: function(){
			if(this.onLoadEventAttached) { return; } //attach only once
			try{
				this._sendPageRenderMarker = tsedge.instr.bind(tsedge.instr.sendPageRenderMarker, this);
				if(window.attachEvent){ //IE
					window.attachEvent("onload", this._sendPageRenderMarker );
				}else
				if( window.addEventListener){ //FF, Opera, Safari...
					window.addEventListener("load", this._sendPageRenderMarker , false);
				}else
				if( document.addEventListener){ //FF, Opera, Safari... when window is not set
					document.addEventListener("load", this._sendPageRenderMarker , false);
				}
				this.onLoadEventAttached = true;
			}catch(e){ /* */ }
		}
	};
	tsedge.instr.attachOnLoadPageRenderMarker();
}
