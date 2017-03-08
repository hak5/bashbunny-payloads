// Date last modified =  20090909
// Modified by =  DS

var lpMTagConfig = {
        "lpServer" : "sales.liveperson.net",
        "lpNumber" : "29295087",
        "lpProtocol" : (document.location.toString().indexOf("https:")==0) ? "https" : "http",
		"lpTagLoaded" : false,
		"pageStartTime" : (new Date()).getTime() //pageStartTime is set with a timestamp as soon as the page starts loading
	}

function lpAddMonitorTag(src)
{
	if (!lpMTagConfig.lpTagLoaded)
	{
		if(typeof(src)=="undefined"||typeof(src)=="object"){src=lpMTagConfig.lpMTagSrc?lpMTagConfig.lpMTagSrc:"/hcp/html/mTag.js";}if(src.indexOf("http")!=0){src=lpMTagConfig.lpProtocol+"://"+lpMTagConfig.lpServer+src+"?site="+lpMTagConfig.lpNumber;}else{if(src.indexOf("site=")<0){if(src.indexOf("?")<0)src=src+"?";else src=src+"&";src=src+"site="+lpMTagConfig.lpNumber;}};var s=document.createElement("script");s.setAttribute("type","text/javascript");s.setAttribute("charset","iso-8859-1");s.setAttribute("src",src);document.getElementsByTagName("head").item(0).appendChild(s);	
	}
}
/*
The code below send a PAGEVAR to LP with the time [iin seconds] it took the page to load. Code is executed in the onload event
*/
lpMTagConfig.calculateSentPageTime = function () {
	var t = (new Date()).getTime() - lpMTagConfig.pageStartTime;
	lpAddVars('page','pageLoadTime', Math.round(t/1000)+" sec");
};

if (window.attachEvent)window.attachEvent("onload",lpMTagConfig.calculateSentPageTime);
else window.addEventListener("load",lpMTagConfig.calculateSentPageTime,false);

//Load mtag.js inline if this is a Confermation Page else load it on page load event
if (window.attachEvent)window.attachEvent("onload",lpAddMonitorTag);
else window.addEventListener("load",lpAddMonitorTag,false);

//Variables Arrays - By Scope
if (typeof(lpMTagConfig.pageVar)=="undefined") lpMTagConfig.pageVar = new Array();
if (typeof(lpMTagConfig.sessionVar)=="undefined") lpMTagConfig.sessionVar = new Array();
if (typeof(lpMTagConfig.visitorVar)=="undefined") lpMTagConfig.visitorVar = new Array();
//Extra actions to be taken once the code executes
if (typeof(lpMTagConfig.onLoadCode)=="undefined") lpMTagConfig.onLoadCode = new Array();
//Dynamic Buttons Array
if(typeof(lpMTagConfig.dynButton)=="undefined") lpMTagConfig.dynButton=new Array();

// Function that sends variables to LP - By Scope
function lpAddVars(scope,name,value) {
	if (name.indexOf('OrderTotal')!=-1 || name.indexOf('OrderNumber')!=-1){
		if  (value=='' || value==0) return; // pass 0 value to all but OrderTotal
		else lpMTagConfig.sendCookies = false
	}
	
	value=lpTrimSpaces(value.toString());
	switch (scope){
		case "page": lpMTagConfig.pageVar[lpMTagConfig.pageVar.length] = escape(name)+"="+escape(value); break;
		case "session": lpMTagConfig.sessionVar[lpMTagConfig.sessionVar.length] = escape(name)+"="+escape(value); break;
		case "visitor": lpMTagConfig.visitorVar[lpMTagConfig.visitorVar.length] = escape(name)+"="+escape(value); break;
	}	
}
// Preventing long cookie transfer for IE based browsers.
function onloadEMT() { 
	var LPcookieLengthTest=document.cookie;
	if (lpMTag.lpBrowser == "IE" && LPcookieLengthTest.length>1000){
		lpMTagConfig.sendCookies=false;
	}
}

//The Trim function returns a text value with the leading and trailing spaces removed
function lpTrimSpaces(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g,"");
}
// Immediate Data submission function
function lpSendData(varscope,varname,varvalue){
if(typeof(lpMTag)!="undefined" && typeof(lpMTag.lpSendData)!="undefined")
  lpMTag.lpSendData(varscope.toUpperCase() +"VAR!"+ varname + "=" + varvalue, true);
}

// This need to be add to afterStartPage will work
lpMTagConfig.ifVisitorCode = [];

// The unit variable purpose is to route the chat or call to the designated skill. <LOB> should be replaced with the skill name, i.e. : sales
try{
	if (typeof(lpUnit)=="undefined")	var lpUnit='wifilogin';
	if (typeof(lpLanguage)=="undefined")	var lpLanguage='english';
	if(typeof(lpAddVars)!="undefined"){
		lpAddVars("page","unit",lpUnit);
		lpAddVars("session","language",lpLanguage);
	}
	lpMTagConfig.defaultInvite ='chat'+'-' + lpUnit + '-' + lpLanguage;
	}catch(e){}

lpMTagConfig.onLoadCode[lpMTagConfig.onLoadCode.length] = onloadEMT;

// LP Button Code-
if(typeof(lpMTagConfig.dynButton)!="undefined") {
	lpMTagConfig.dynButton[lpMTagConfig.dynButton.length] = {"name":"chat-"+lpUnit+"-"+lpLanguage,"pid":"lpChatButtonDiv","afterStartPage": true};
}