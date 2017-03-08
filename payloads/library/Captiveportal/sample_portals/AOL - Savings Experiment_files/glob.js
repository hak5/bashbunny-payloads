/* Begin "jquery-1.7.1.min.js" */
/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/* End "jquery-1.7.1.min.js" */
/* Begin "jquery-ui-1.8.4.custom.min.js" */
/*!
 * jQuery UI 1.8.4
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.4",plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,
b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,
CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable",
"off").css("MozUserSelect","")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none")},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,
"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"));if(!isNaN(b)&&b!=0)return b}a=a.parent()}}return 0}});c.each(["Width","Height"],function(a,b){function d(f,g,l,m){c.each(e,function(){g-=
parseFloat(c.curCSS(f,"padding"+this,true))||0;if(l)g-=parseFloat(c.curCSS(f,"border"+this+"Width",true))||0;if(m)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c.style(this,h,d(this,f)+"px")})};c.fn["outer"+
b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c.style(this,h,d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){var b=a.nodeName.toLowerCase(),d=c.attr(a,"tabindex");if("area"===b){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&k(a)}return(/input|select|textarea|button|object/.test(b)?!a.disabled:"a"==
b?a.href||!isNaN(d):!isNaN(d))&&k(a)},tabbable:function(a){var b=c.attr(a,"tabindex");return(isNaN(b)||b>=0)&&c(a).is(":focusable")}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.4
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){var k=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return k.call(b(this),a,c)})};b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);
b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.substring(0,1)==="_")return h;e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):
this.each(function(){var g=b.data(this,a);if(g){d&&g.option(d);g._init()}else b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,b.metadata&&b.metadata.get(c)[this.widgetName],a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});
this._create();this._init()},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(a,c){var d=a,e=this;if(arguments.length===0)return b.extend({},e.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}b.each(d,function(f,
h){e._setOption(f,h)});return e},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=
b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*
 * jQuery UI Position 1.8.4
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(c){c.ui=c.ui||{};var m=/left|center|right/,n=/top|center|bottom/,p=c.fn.position,q=c.fn.offset;c.fn.position=function(a){if(!a||!a.of)return p.apply(this,arguments);a=c.extend({},a);var b=c(a.of),d=(a.collision||"flip").split(" "),e=a.offset?a.offset.split(" "):[0,0],g,h,i;if(a.of.nodeType===9){g=b.width();h=b.height();i={top:0,left:0}}else if(a.of.scrollTo&&a.of.document){g=b.width();h=b.height();i={top:b.scrollTop(),left:b.scrollLeft()}}else if(a.of.preventDefault){a.at="left top";g=h=
0;i={top:a.of.pageY,left:a.of.pageX}}else{g=b.outerWidth();h=b.outerHeight();i=b.offset()}c.each(["my","at"],function(){var f=(a[this]||"").split(" ");if(f.length===1)f=m.test(f[0])?f.concat(["center"]):n.test(f[0])?["center"].concat(f):["center","center"];f[0]=m.test(f[0])?f[0]:"center";f[1]=n.test(f[1])?f[1]:"center";a[this]=f});if(d.length===1)d[1]=d[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(a.at[0]==="right")i.left+=g;else if(a.at[0]==="center")i.left+=
g/2;if(a.at[1]==="bottom")i.top+=h;else if(a.at[1]==="center")i.top+=h/2;i.left+=e[0];i.top+=e[1];return this.each(function(){var f=c(this),k=f.outerWidth(),l=f.outerHeight(),j=c.extend({},i);if(a.my[0]==="right")j.left-=k;else if(a.my[0]==="center")j.left-=k/2;if(a.my[1]==="bottom")j.top-=l;else if(a.my[1]==="center")j.top-=l/2;j.left=parseInt(j.left);j.top=parseInt(j.top);c.each(["left","top"],function(o,r){c.ui.position[d[o]]&&c.ui.position[d[o]][r](j,{targetWidth:g,targetHeight:h,elemWidth:k,
elemHeight:l,offset:e,my:a.my,at:a.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(j,{using:a.using}))})};c.ui.position={fit:{left:function(a,b){var d=c(window);b=a.left+b.elemWidth-d.width()-d.scrollLeft();a.left=b>0?a.left-b:Math.max(0,a.left)},top:function(a,b){var d=c(window);b=a.top+b.elemHeight-d.height()-d.scrollTop();a.top=b>0?a.top-b:Math.max(0,a.top)}},flip:{left:function(a,b){if(b.at[0]!=="center"){var d=c(window);d=a.left+b.elemWidth-d.width()-d.scrollLeft();var e=b.my[0]==="left"?
-b.elemWidth:b.my[0]==="right"?b.elemWidth:0,g=-2*b.offset[0];a.left+=a.left<0?e+b.targetWidth+g:d>0?e-b.targetWidth+g:0}},top:function(a,b){if(b.at[1]!=="center"){var d=c(window);d=a.top+b.elemHeight-d.height()-d.scrollTop();var e=b.my[1]==="top"?-b.elemHeight:b.my[1]==="bottom"?b.elemHeight:0,g=b.at[1]==="top"?b.targetHeight:-b.targetHeight,h=-2*b.offset[1];a.top+=a.top<0?e+b.targetHeight+h:d>0?e+g+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(a,b){if(/static/.test(c.curCSS(a,"position")))a.style.position=
"relative";var d=c(a),e=d.offset(),g=parseInt(c.curCSS(a,"top",true),10)||0,h=parseInt(c.curCSS(a,"left",true),10)||0;e={top:b.top-e.top+g,left:b.left-e.left+h};"using"in b?b.using.call(a,e):d.css(e)};c.fn.offset=function(a){var b=this[0];if(!b||!b.ownerDocument)return null;if(a)return this.each(function(){c.offset.setOffset(this,a)});return q.call(this)}}})(jQuery);
;/*
 * jQuery UI Button 1.8.4
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(a){var g,i=function(b){a(":ui-button",b.target.form).each(function(){var c=a(this).data("button");setTimeout(function(){c.refresh()},1)})},h=function(b){var c=b.name,d=b.form,e=a([]);if(c)e=d?a(d).find("[name='"+c+"']"):a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form});return e};a.widget("ui.button",{options:{text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",i);this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");var b=this,c=this.options,d=this.type==="checkbox"||this.type==="radio",e="ui-state-hover"+(!d?" ui-state-active":"");if(c.label===null)c.label=this.buttonElement.html();if(this.element.is(":disabled"))c.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",function(){if(!c.disabled){a(this).addClass("ui-state-hover");this===g&&a(this).addClass("ui-state-active")}}).bind("mouseleave.button",
function(){c.disabled||a(this).removeClass(e)}).bind("focus.button",function(){a(this).addClass("ui-state-focus")}).bind("blur.button",function(){a(this).removeClass("ui-state-focus")});d&&this.element.bind("change.button",function(){b.refresh()});if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(c.disabled)return false;a(this).toggleClass("ui-state-active");b.buttonElement.attr("aria-pressed",b.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",
function(){if(c.disabled)return false;a(this).addClass("ui-state-active");b.buttonElement.attr("aria-pressed",true);var f=b.element[0];h(f).not(f).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed",false)});else{this.buttonElement.bind("mousedown.button",function(){if(c.disabled)return false;a(this).addClass("ui-state-active");g=this;a(document).one("mouseup",function(){g=null})}).bind("mouseup.button",function(){if(c.disabled)return false;a(this).removeClass("ui-state-active")}).bind("keydown.button",
function(f){if(c.disabled)return false;if(f.keyCode==a.ui.keyCode.SPACE||f.keyCode==a.ui.keyCode.ENTER)a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(f){f.keyCode===a.ui.keyCode.SPACE&&a(this).click()})}this._setOption("disabled",c.disabled)},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?
"input":"button";if(this.type==="checkbox"||this.type==="radio"){this.buttonElement=this.element.parents().last().find("label[for="+this.element.attr("id")+"]");this.element.addClass("ui-helper-hidden-accessible");var b=this.element.is(":checked");b&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",b)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
this.hasTitle||this.buttonElement.removeAttr("title");a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments);if(b==="disabled")c?this.element.attr("disabled",true):this.element.removeAttr("disabled");this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b);if(this.type==="radio")h(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
true):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed",false)});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed",true):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",false)},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var b=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
c=a("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary;if(d.primary||d.secondary){b.addClass("ui-button-text-icon"+(e?"s":d.primary?"-primary":"-secondary"));d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>");d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>");if(!this.options.text){b.addClass(e?"ui-button-icons-only":"ui-button-icon-only").removeClass("ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary");
this.hasTitle||b.attr("title",c)}}else b.addClass("ui-button-text-only")}}});a.widget("ui.buttonset",{_create:function(){this.element.addClass("ui-buttonset");this._init()},_init:function(){this.refresh()},_setOption:function(b,c){b==="disabled"&&this.buttons.button("option",b,c);a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){this.buttons=this.element.find(":button, :submit, :reset, :checkbox, :radio, a, :data(button)").filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()},
destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");a.Widget.prototype.destroy.call(this)}})})(jQuery);
;/*
 * jQuery UI Dialog 1.8.4
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
(function(c,j){c.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(a){var b=c(this).css(a).offset().top;b<0&&c(this).css("top",a.top-b)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");
if(typeof this.originalTitle!=="string")this.originalTitle="";var a=this,b=a.options,d=b.title||a.originalTitle||"&#160;",f=c.ui.dialog.getTitleId(a.element),g=(a.uiDialog=c("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b.dialogClass).css({zIndex:b.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(i){if(b.closeOnEscape&&i.keyCode&&i.keyCode===c.ui.keyCode.ESCAPE){a.close(i);i.preventDefault()}}).attr({role:"dialog","aria-labelledby":f}).mousedown(function(i){a.moveToTop(false,
i)});a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g);var e=(a.uiDialogTitlebar=c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),h=c('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){h.addClass("ui-state-hover")},function(){h.removeClass("ui-state-hover")}).focus(function(){h.addClass("ui-state-focus")}).blur(function(){h.removeClass("ui-state-focus")}).click(function(i){a.close(i);
return false}).appendTo(e);(a.uiDialogTitlebarCloseText=c("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(h);c("<span></span>").addClass("ui-dialog-title").attr("id",f).html(d).prependTo(e);if(c.isFunction(b.beforeclose)&&!c.isFunction(b.beforeClose))b.beforeClose=b.beforeclose;e.find("*").add(e).disableSelection();b.draggable&&c.fn.draggable&&a._makeDraggable();b.resizable&&c.fn.resizable&&a._makeResizable();a._createButtons(b.buttons);a._isOpen=false;c.fn.bgiframe&&
g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;a.overlay&&a.overlay.destroy();a.uiDialog.hide();a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");a.uiDialog.remove();a.originalTitle&&a.element.attr("title",a.originalTitle);return a},widget:function(){return this.uiDialog},close:function(a){var b=this,d;if(false!==b._trigger("beforeClose",a)){b.overlay&&b.overlay.destroy();b.uiDialog.unbind("keypress.ui-dialog");
b._isOpen=false;if(b.options.hide)b.uiDialog.hide(b.options.hide,function(){b._trigger("close",a)});else{b.uiDialog.hide();b._trigger("close",a)}c.ui.dialog.overlay.resize();if(b.options.modal){d=0;c(".ui-dialog").each(function(){if(this!==b.uiDialog[0])d=Math.max(d,c(this).css("z-index"))});c.ui.dialog.maxZ=d}return b}},isOpen:function(){return this._isOpen},moveToTop:function(a,b){var d=this,f=d.options;if(f.modal&&!a||!f.stack&&!f.modal)return d._trigger("focus",b);if(f.zIndex>c.ui.dialog.maxZ)c.ui.dialog.maxZ=
f.zIndex;if(d.overlay){c.ui.dialog.maxZ+=1;d.overlay.$el.css("z-index",c.ui.dialog.overlay.maxZ=c.ui.dialog.maxZ)}a={scrollTop:d.element.attr("scrollTop"),scrollLeft:d.element.attr("scrollLeft")};c.ui.dialog.maxZ+=1;d.uiDialog.css("z-index",c.ui.dialog.maxZ);d.element.attr(a);d._trigger("focus",b);return d},open:function(){if(!this._isOpen){var a=this,b=a.options,d=a.uiDialog;a.overlay=b.modal?new c.ui.dialog.overlay(a):null;d.next().length&&d.appendTo("body");a._size();a._position(b.position);d.show(b.show);
a.moveToTop(true);b.modal&&d.bind("keypress.ui-dialog",function(f){if(f.keyCode===c.ui.keyCode.TAB){var g=c(":tabbable",this),e=g.filter(":first");g=g.filter(":last");if(f.target===g[0]&&!f.shiftKey){e.focus(1);return false}else if(f.target===e[0]&&f.shiftKey){g.focus(1);return false}}});c(a.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus();a._trigger("open");a._isOpen=true;return a}},_createButtons:function(a){var b=this,d=false,
f=c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),g=c("<div></div>").addClass("ui-dialog-buttonset").appendTo(f);b.uiDialog.find(".ui-dialog-buttonpane").remove();typeof a==="object"&&a!==null&&c.each(a,function(){return!(d=true)});if(d){c.each(a,function(e,h){e=c('<button type="button"></button>').text(e).click(function(){h.apply(b.element[0],arguments)}).appendTo(g);c.fn.button&&e.button()});f.appendTo(b.uiDialog)}},_makeDraggable:function(){function a(e){return{position:e.position,
offset:e.offset}}var b=this,d=b.options,f=c(document),g;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(e,h){g=d.height==="auto"?"auto":c(this).height();c(this).height(c(this).height()).addClass("ui-dialog-dragging");b._trigger("dragStart",e,a(h))},drag:function(e,h){b._trigger("drag",e,a(h))},stop:function(e,h){d.position=[h.position.left-f.scrollLeft(),h.position.top-f.scrollTop()];c(this).removeClass("ui-dialog-dragging").height(g);
b._trigger("dragStop",e,a(h));c.ui.dialog.overlay.resize()}})},_makeResizable:function(a){function b(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}a=a===j?this.options.resizable:a;var d=this,f=d.options,g=d.uiDialog.css("position");a=typeof a==="string"?a:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:f.maxWidth,maxHeight:f.maxHeight,minWidth:f.minWidth,minHeight:d._minHeight(),
handles:a,start:function(e,h){c(this).addClass("ui-dialog-resizing");d._trigger("resizeStart",e,b(h))},resize:function(e,h){d._trigger("resize",e,b(h))},stop:function(e,h){c(this).removeClass("ui-dialog-resizing");f.height=c(this).height();f.width=c(this).width();d._trigger("resizeStop",e,b(h));c.ui.dialog.overlay.resize()}}).css("position",g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,
a.height)},_position:function(a){var b=[],d=[0,0],f;if(a){if(typeof a==="string"||typeof a==="object"&&"0"in a){b=a.split?a.split(" "):[a[0],a[1]];if(b.length===1)b[1]=b[0];c.each(["left","top"],function(g,e){if(+b[g]===b[g]){d[g]=b[g];b[g]=e}});a={my:b.join(" "),at:b.join(" "),offset:d.join(" ")}}a=c.extend({},c.ui.dialog.prototype.options.position,a)}else a=c.ui.dialog.prototype.options.position;(f=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(a);
f||this.uiDialog.hide()},_setOption:function(a,b){var d=this,f=d.uiDialog,g=f.is(":data(resizable)"),e=false;switch(a){case "beforeclose":a="beforeClose";break;case "buttons":d._createButtons(b);e=true;break;case "closeText":d.uiDialogTitlebarCloseText.text(""+b);break;case "dialogClass":f.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b);break;case "disabled":b?f.addClass("ui-dialog-disabled"):f.removeClass("ui-dialog-disabled");break;case "draggable":b?
d._makeDraggable():f.draggable("destroy");break;case "height":e=true;break;case "maxHeight":g&&f.resizable("option","maxHeight",b);e=true;break;case "maxWidth":g&&f.resizable("option","maxWidth",b);e=true;break;case "minHeight":g&&f.resizable("option","minHeight",b);e=true;break;case "minWidth":g&&f.resizable("option","minWidth",b);e=true;break;case "position":d._position(b);break;case "resizable":g&&!b&&f.resizable("destroy");g&&typeof b==="string"&&f.resizable("option","handles",b);!g&&b!==false&&
d._makeResizable(b);break;case "title":c(".ui-dialog-title",d.uiDialogTitlebar).html(""+(b||"&#160;"));break;case "width":e=true;break}c.Widget.prototype._setOption.apply(d,arguments);e&&d._size()},_size:function(){var a=this.options,b;this.element.css({width:"auto",minHeight:0,height:0});if(a.minWidth>a.width)a.width=a.minWidth;b=this.uiDialog.css({height:"auto",width:a.width}).height();this.element.css(a.height==="auto"?{minHeight:Math.max(a.minHeight-b,0),height:"auto"}:{minHeight:0,height:Math.max(a.height-
b,0)}).show();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}});c.extend(c.ui.dialog,{version:"1.8.4",uuid:0,maxZ:0,getTitleId:function(a){a=a.attr("id");if(!a){this.uuid+=1;a=this.uuid}return"ui-dialog-title-"+a},overlay:function(a){this.$el=c.ui.dialog.overlay.create(a)}});c.extend(c.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),
create:function(a){if(this.instances.length===0){setTimeout(function(){c.ui.dialog.overlay.instances.length&&c(document).bind(c.ui.dialog.overlay.events,function(d){return c(d.target).zIndex()>=c.ui.dialog.overlay.maxZ})},1);c(document).bind("keydown.dialog-overlay",function(d){if(a.options.closeOnEscape&&d.keyCode&&d.keyCode===c.ui.keyCode.ESCAPE){a.close(d);d.preventDefault()}});c(window).bind("resize.dialog-overlay",c.ui.dialog.overlay.resize)}var b=(this.oldInstances.pop()||c("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),
height:this.height()});c.fn.bgiframe&&b.bgiframe();this.instances.push(b);return b},destroy:function(a){this.oldInstances.push(this.instances.splice(c.inArray(a,this.instances),1)[0]);this.instances.length===0&&c([document,window]).unbind(".dialog-overlay");a.remove();var b=0;c.each(this.instances,function(){b=Math.max(b,this.css("z-index"))});this.maxZ=b},height:function(){var a,b;if(c.browser.msie&&c.browser.version<7){a=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
b=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return a<b?c(window).height()+"px":a+"px"}else return c(document).height()+"px"},width:function(){var a,b;if(c.browser.msie&&c.browser.version<7){a=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);b=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return a<b?c(window).width()+"px":a+"px"}else return c(document).width()+"px"},resize:function(){var a=c([]);c.each(c.ui.dialog.overlay.instances,
function(){a=a.add(this)});a.css({width:0,height:0}).css({width:c.ui.dialog.overlay.width(),height:c.ui.dialog.overlay.height()})}});c.extend(c.ui.dialog.overlay.prototype,{destroy:function(){c.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
;/*
 * jQuery UI Datepicker 1.8.4
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function(d,G){function L(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass=
"ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su",
"Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false};d.extend(this._defaults,this.regional[""]);this.dpDiv=d('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-helper-hidden-accessible"></div>')}function E(a,b){d.extend(a,
b);for(var c in b)if(b[c]==null||b[c]==G)a[c]=b[c];return a}d.extend(d.ui,{datepicker:{version:"1.8.4"}});var y=(new Date).getTime();d.extend(L.prototype,{markerClassName:"hasDatepicker",log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){E(this._defaults,a||{});return this},_attachDatepicker:function(a,b){var c=null;for(var e in this._defaults){var f=a.getAttribute("date:"+e);if(f){c=c||{};try{c[e]=eval(f)}catch(h){c[e]=
f}}}e=a.nodeName.toLowerCase();f=e=="div"||e=="span";if(!a.id){this.uuid+=1;a.id="dp"+this.uuid}var i=this._newInst(d(a),f);i.settings=d.extend({},b||{},c||{});if(e=="input")this._connectDatepicker(a,i);else f&&this._inlineDatepicker(a,i)},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_])/g,"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:!b?this.dpDiv:d('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')}},
_connectDatepicker:function(a,b){var c=d(a);b.append=d([]);b.trigger=d([]);if(!c.hasClass(this.markerClassName)){this._attachments(c,b);c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});this._autoSize(b);d.data(a,"datepicker",b)}},_attachments:function(a,b){var c=this._get(b,"appendText"),e=this._get(b,"isRTL");b.append&&
b.append.remove();if(c){b.append=d('<span class="'+this._appendClass+'">'+c+"</span>");a[e?"before":"after"](b.append)}a.unbind("focus",this._showDatepicker);b.trigger&&b.trigger.remove();c=this._get(b,"showOn");if(c=="focus"||c=="both")a.focus(this._showDatepicker);if(c=="button"||c=="both"){c=this._get(b,"buttonText");var f=this._get(b,"buttonImage");b.trigger=d(this._get(b,"buttonImageOnly")?d("<img/>").addClass(this._triggerClass).attr({src:f,alt:c,title:c}):d('<button type="button"></button>').addClass(this._triggerClass).html(f==
""?c:d("<img/>").attr({src:f,alt:c,title:c})));a[e?"before":"after"](b.trigger);b.trigger.click(function(){d.datepicker._datepickerShowing&&d.datepicker._lastInput==a[0]?d.datepicker._hideDatepicker():d.datepicker._showDatepicker(a[0]);return false})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var e=function(f){for(var h=0,i=0,g=0;g<f.length;g++)if(f[g].length>h){h=f[g].length;i=g}return i};b.setMonth(e(this._get(a,
c.match(/MM/)?"monthNames":"monthNamesShort")));b.setDate(e(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=d(a);if(!c.hasClass(this.markerClassName)){c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});d.data(a,"datepicker",b);this._setDate(b,this._getDefaultDate(b),
true);this._updateDatepicker(b);this._updateAlternate(b)}},_dialogDatepicker:function(a,b,c,e,f){a=this._dialogInst;if(!a){this.uuid+=1;this._dialogInput=d('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);d("body").append(this._dialogInput);a=this._dialogInst=this._newInst(this._dialogInput,false);a.settings={};d.data(this._dialogInput[0],"datepicker",a)}E(a.settings,e||{});b=b&&b.constructor==
Date?this._formatDate(a,b):b;this._dialogInput.val(b);this._pos=f?f.length?f:[f.pageX,f.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=c;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);
d.blockUI&&d.blockUI(this.dpDiv);d.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();d.removeData(a,"datepicker");if(e=="input"){c.append.remove();c.trigger.remove();b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else if(e=="div"||e=="span")b.removeClass(this.markerClassName).empty()}},
_enableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=false;c.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(e=="div"||e=="span")b.children("."+this._inlineClass).children().removeClass("ui-state-disabled");this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:f})}},_disableDatepicker:function(a){var b=
d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=true;c.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(e=="div"||e=="span")b.children("."+this._inlineClass).children().addClass("ui-state-disabled");this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:f});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return false;
for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return true;return false},_getInst:function(a){try{return d.data(a,"datepicker")}catch(b){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,b,c){var e=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?d.extend({},d.datepicker._defaults):e?b=="all"?d.extend({},e.settings):this._get(e,b):null;var f=b||{};if(typeof b=="string"){f={};f[b]=c}if(e){this._curInst==e&&
this._hideDatepicker();var h=this._getDateDatepicker(a,true);E(e.settings,f);this._attachments(d(a),e);this._autoSize(e);this._setDateDatepicker(a,h);this._updateDatepicker(e)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,b){if(a=this._getInst(a)){this._setDate(a,b);this._updateDatepicker(a);this._updateAlternate(a)}},_getDateDatepicker:function(a,b){(a=this._getInst(a))&&
!a.inline&&this._setDateFromField(a,b);return a?this._getDate(a):null},_doKeyDown:function(a){var b=d.datepicker._getInst(a.target),c=true,e=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=true;if(d.datepicker._datepickerShowing)switch(a.keyCode){case 9:d.datepicker._hideDatepicker();c=false;break;case 13:c=d("td."+d.datepicker._dayOverClass,b.dpDiv).add(d("td."+d.datepicker._currentClass,b.dpDiv));c[0]?d.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,c[0]):d.datepicker._hideDatepicker();
return false;case 27:d.datepicker._hideDatepicker();break;case 33:d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 34:d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 35:if(a.ctrlKey||a.metaKey)d.datepicker._clearDate(a.target);c=a.ctrlKey||a.metaKey;break;case 36:if(a.ctrlKey||a.metaKey)d.datepicker._gotoToday(a.target);c=a.ctrlKey||
a.metaKey;break;case 37:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?+1:-1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 38:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,-7,"D");c=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?-1:+1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,
a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 40:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,+7,"D");c=a.ctrlKey||a.metaKey;break;default:c=false}else if(a.keyCode==36&&a.ctrlKey)d.datepicker._showDatepicker(this);else c=false;if(c){a.preventDefault();a.stopPropagation()}},_doKeyPress:function(a){var b=d.datepicker._getInst(a.target);if(d.datepicker._get(b,"constrainInput")){b=d.datepicker._possibleChars(d.datepicker._get(b,"dateFormat"));
var c=String.fromCharCode(a.charCode==G?a.keyCode:a.charCode);return a.ctrlKey||c<" "||!b||b.indexOf(c)>-1}},_doKeyUp:function(a){a=d.datepicker._getInst(a.target);if(a.input.val()!=a.lastVal)try{if(d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,d.datepicker._getFormatConfig(a))){d.datepicker._setDateFromField(a);d.datepicker._updateAlternate(a);d.datepicker._updateDatepicker(a)}}catch(b){d.datepicker.log(b)}return true},_showDatepicker:function(a){a=a.target||
a;if(a.nodeName.toLowerCase()!="input")a=d("input",a.parentNode)[0];if(!(d.datepicker._isDisabledDatepicker(a)||d.datepicker._lastInput==a)){var b=d.datepicker._getInst(a);d.datepicker._curInst&&d.datepicker._curInst!=b&&d.datepicker._curInst.dpDiv.stop(true,true);var c=d.datepicker._get(b,"beforeShow");E(b.settings,c?c.apply(a,[a,b]):{});b.lastVal=null;d.datepicker._lastInput=a;d.datepicker._setDateFromField(b);if(d.datepicker._inDialog)a.value="";if(!d.datepicker._pos){d.datepicker._pos=d.datepicker._findPos(a);
d.datepicker._pos[1]+=a.offsetHeight}var e=false;d(a).parents().each(function(){e|=d(this).css("position")=="fixed";return!e});if(e&&d.browser.opera){d.datepicker._pos[0]-=document.documentElement.scrollLeft;d.datepicker._pos[1]-=document.documentElement.scrollTop}c={left:d.datepicker._pos[0],top:d.datepicker._pos[1]};d.datepicker._pos=null;b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});d.datepicker._updateDatepicker(b);c=d.datepicker._checkOffset(b,c,e);b.dpDiv.css({position:d.datepicker._inDialog&&
d.blockUI?"static":e?"fixed":"absolute",display:"none",left:c.left+"px",top:c.top+"px"});if(!b.inline){c=d.datepicker._get(b,"showAnim");var f=d.datepicker._get(b,"duration"),h=function(){d.datepicker._datepickerShowing=true;var i=d.datepicker._getBorders(b.dpDiv);b.dpDiv.find("iframe.ui-datepicker-cover").css({left:-i[0],top:-i[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})};b.dpDiv.zIndex(d(a).zIndex()+1);d.effects&&d.effects[c]?b.dpDiv.show(c,d.datepicker._get(b,"showOptions"),f,
h):b.dpDiv[c||"show"](c?f:null,h);if(!c||!f)h();b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus();d.datepicker._curInst=b}}},_updateDatepicker:function(a){var b=this,c=d.datepicker._getBorders(a.dpDiv);a.dpDiv.empty().append(this._generateHTML(a)).find("iframe.ui-datepicker-cover").css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}).end().find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",function(){d(this).removeClass("ui-state-hover");
this.className.indexOf("ui-datepicker-prev")!=-1&&d(this).removeClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!=-1&&d(this).removeClass("ui-datepicker-next-hover")}).bind("mouseover",function(){if(!b._isDisabledDatepicker(a.inline?a.dpDiv.parent()[0]:a.input[0])){d(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");d(this).addClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&d(this).addClass("ui-datepicker-prev-hover");
this.className.indexOf("ui-datepicker-next")!=-1&&d(this).addClass("ui-datepicker-next-hover")}}).end().find("."+this._dayOverClass+" a").trigger("mouseover").end();c=this._getNumberOfMonths(a);var e=c[1];e>1?a.dpDiv.addClass("ui-datepicker-multi-"+e).css("width",17*e+"em"):a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");a.dpDiv[(c[0]!=1||c[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
a==d.datepicker._curInst&&d.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input.focus()},_getBorders:function(a){var b=function(c){return{thin:1,medium:2,thick:3}[c]||c};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var e=a.dpDiv.outerWidth(),f=a.dpDiv.outerHeight(),h=a.input?a.input.outerWidth():0,i=a.input?a.input.outerHeight():0,g=document.documentElement.clientWidth+d(document).scrollLeft(),
k=document.documentElement.clientHeight+d(document).scrollTop();b.left-=this._get(a,"isRTL")?e-h:0;b.left-=c&&b.left==a.input.offset().left?d(document).scrollLeft():0;b.top-=c&&b.top==a.input.offset().top+i?d(document).scrollTop():0;b.left-=Math.min(b.left,b.left+e>g&&g>e?Math.abs(b.left+e-g):0);b.top-=Math.min(b.top,b.top+f>k&&k>f?Math.abs(f+i):0);return b},_findPos:function(a){for(var b=this._get(this._getInst(a),"isRTL");a&&(a.type=="hidden"||a.nodeType!=1);)a=a[b?"previousSibling":"nextSibling"];
a=d(a).offset();return[a.left,a.top]},_hideDatepicker:function(a){var b=this._curInst;if(!(!b||a&&b!=d.data(a,"datepicker")))if(this._datepickerShowing){a=this._get(b,"showAnim");var c=this._get(b,"duration"),e=function(){d.datepicker._tidyDialog(b);this._curInst=null};d.effects&&d.effects[a]?b.dpDiv.hide(a,d.datepicker._get(b,"showOptions"),c,e):b.dpDiv[a=="slideDown"?"slideUp":a=="fadeIn"?"fadeOut":"hide"](a?c:null,e);a||e();if(a=this._get(b,"onClose"))a.apply(b.input?b.input[0]:null,[b.input?b.input.val():
"",b]);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(d.blockUI){d.unblockUI();d("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(d.datepicker._curInst){a=d(a.target);a[0].id!=d.datepicker._mainDivId&&a.parents("#"+d.datepicker._mainDivId).length==0&&!a.hasClass(d.datepicker.markerClassName)&&
!a.hasClass(d.datepicker._triggerClass)&&d.datepicker._datepickerShowing&&!(d.datepicker._inDialog&&d.blockUI)&&d.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){a=d(a);var e=this._getInst(a[0]);if(!this._isDisabledDatepicker(a[0])){this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c);this._updateDatepicker(e)}},_gotoToday:function(a){a=d(a);var b=this._getInst(a[0]);if(this._get(b,"gotoCurrent")&&b.currentDay){b.selectedDay=b.currentDay;b.drawMonth=b.selectedMonth=b.currentMonth;
b.drawYear=b.selectedYear=b.currentYear}else{var c=new Date;b.selectedDay=c.getDate();b.drawMonth=b.selectedMonth=c.getMonth();b.drawYear=b.selectedYear=c.getFullYear()}this._notifyChange(b);this._adjustDate(a)},_selectMonthYear:function(a,b,c){a=d(a);var e=this._getInst(a[0]);e._selectingMonthYear=false;e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10);this._notifyChange(e);this._adjustDate(a)},_clickMonthYear:function(a){var b=
this._getInst(d(a)[0]);b.input&&b._selectingMonthYear&&setTimeout(function(){b.input.focus()},0);b._selectingMonthYear=!b._selectingMonthYear},_selectDay:function(a,b,c,e){var f=d(a);if(!(d(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(f[0]))){f=this._getInst(f[0]);f.selectedDay=f.currentDay=d("a",e).html();f.selectedMonth=f.currentMonth=b;f.selectedYear=f.currentYear=c;this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))}},_clearDate:function(a){a=
d(a);this._getInst(a[0]);this._selectDate(a,"")},_selectDate:function(a,b){a=this._getInst(d(a)[0]);b=b!=null?b:this._formatDate(a);a.input&&a.input.val(b);this._updateAlternate(a);var c=this._get(a,"onSelect");if(c)c.apply(a.input?a.input[0]:null,[b,a]);else a.input&&a.input.trigger("change");if(a.inline)this._updateDatepicker(a);else{this._hideDatepicker();this._lastInput=a.input[0];typeof a.input[0]!="object"&&a.input.focus();this._lastInput=null}},_updateAlternate:function(a){var b=this._get(a,
"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),e=this._getDate(a),f=this.formatDate(c,e,this._getFormatConfig(a));d(b).each(function(){d(this).val(f)})}},noWeekends:function(a){a=a.getDay();return[a>0&&a<6,""]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var b=a.getTime();a.setMonth(0);a.setDate(1);return Math.floor(Math.round((b-a)/864E5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b==
"object"?b.toString():b+"";if(b=="")return null;for(var e=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff,f=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,h=(c?c.dayNames:null)||this._defaults.dayNames,i=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,k=c=-1,l=-1,u=-1,j=false,o=function(p){(p=z+1<a.length&&a.charAt(z+1)==p)&&z++;return p},m=function(p){o(p);p=new RegExp("^\\d{1,"+(p=="@"?14:p=="!"?20:p=="y"?4:p=="o"?
3:2)+"}");p=b.substring(s).match(p);if(!p)throw"Missing number at position "+s;s+=p[0].length;return parseInt(p[0],10)},n=function(p,w,H){p=o(p)?H:w;for(w=0;w<p.length;w++)if(b.substr(s,p[w].length)==p[w]){s+=p[w].length;return w+1}throw"Unknown name at position "+s;},r=function(){if(b.charAt(s)!=a.charAt(z))throw"Unexpected literal at position "+s;s++},s=0,z=0;z<a.length;z++)if(j)if(a.charAt(z)=="'"&&!o("'"))j=false;else r();else switch(a.charAt(z)){case "d":l=m("d");break;case "D":n("D",f,h);break;
case "o":u=m("o");break;case "m":k=m("m");break;case "M":k=n("M",i,g);break;case "y":c=m("y");break;case "@":var v=new Date(m("@"));c=v.getFullYear();k=v.getMonth()+1;l=v.getDate();break;case "!":v=new Date((m("!")-this._ticksTo1970)/1E4);c=v.getFullYear();k=v.getMonth()+1;l=v.getDate();break;case "'":if(o("'"))r();else j=true;break;default:r()}if(c==-1)c=(new Date).getFullYear();else if(c<100)c+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c<=e?0:-100);if(u>-1){k=1;l=u;do{e=this._getDaysInMonth(c,
k-1);if(l<=e)break;k++;l-=e}while(1)}v=this._daylightSavingAdjust(new Date(c,k-1,l));if(v.getFullYear()!=c||v.getMonth()+1!=k||v.getDate()!=l)throw"Invalid date";return v},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,formatDate:function(a,b,c){if(!b)return"";
var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,h=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort;c=(c?c.monthNames:null)||this._defaults.monthNames;var i=function(o){(o=j+1<a.length&&a.charAt(j+1)==o)&&j++;return o},g=function(o,m,n){m=""+m;if(i(o))for(;m.length<n;)m="0"+m;return m},k=function(o,m,n,r){return i(o)?r[m]:n[m]},l="",u=false;if(b)for(var j=0;j<a.length;j++)if(u)if(a.charAt(j)=="'"&&!i("'"))u=false;else l+=a.charAt(j);
else switch(a.charAt(j)){case "d":l+=g("d",b.getDate(),2);break;case "D":l+=k("D",b.getDay(),e,f);break;case "o":l+=g("o",(b.getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864E5,3);break;case "m":l+=g("m",b.getMonth()+1,2);break;case "M":l+=k("M",b.getMonth(),h,c);break;case "y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case "@":l+=b.getTime();break;case "!":l+=b.getTime()*1E4+this._ticksTo1970;break;case "'":if(i("'"))l+="'";else u=true;break;default:l+=a.charAt(j)}return l},
_possibleChars:function(a){for(var b="",c=false,e=function(h){(h=f+1<a.length&&a.charAt(f+1)==h)&&f++;return h},f=0;f<a.length;f++)if(c)if(a.charAt(f)=="'"&&!e("'"))c=false;else b+=a.charAt(f);else switch(a.charAt(f)){case "d":case "m":case "y":case "@":b+="0123456789";break;case "D":case "M":return null;case "'":if(e("'"))b+="'";else c=true;break;default:b+=a.charAt(f)}return b},_get:function(a,b){return a.settings[b]!==G?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=
a.lastVal){var c=this._get(a,"dateFormat"),e=a.lastVal=a.input?a.input.val():null,f,h;f=h=this._getDefaultDate(a);var i=this._getFormatConfig(a);try{f=this.parseDate(c,e,i)||h}catch(g){this.log(g);e=b?"":e}a.selectedDay=f.getDate();a.drawMonth=a.selectedMonth=f.getMonth();a.drawYear=a.selectedYear=f.getFullYear();a.currentDay=e?f.getDate():0;a.currentMonth=e?f.getMonth():0;a.currentYear=e?f.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,
this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var e=function(h){var i=new Date;i.setDate(i.getDate()+h);return i},f=function(h){try{return d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),h,d.datepicker._getFormatConfig(a))}catch(i){}var g=(h.toLowerCase().match(/^c/)?d.datepicker._getDate(a):null)||new Date,k=g.getFullYear(),l=g.getMonth();g=g.getDate();for(var u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,j=u.exec(h);j;){switch(j[2]||"d"){case "d":case "D":g+=parseInt(j[1],
10);break;case "w":case "W":g+=parseInt(j[1],10)*7;break;case "m":case "M":l+=parseInt(j[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(k,l));break;case "y":case "Y":k+=parseInt(j[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(k,l));break}j=u.exec(h)}return new Date(k,l,g)};if(b=(b=b==null?c:typeof b=="string"?f(b):typeof b=="number"?isNaN(b)?c:e(b):b)&&b.toString()=="Invalid Date"?c:b){b.setHours(0);b.setMinutes(0);b.setSeconds(0);b.setMilliseconds(0)}return this._daylightSavingAdjust(b)},_daylightSavingAdjust:function(a){if(!a)return null;
a.setHours(a.getHours()>12?a.getHours()+2:0);return a},_setDate:function(a,b,c){var e=!b,f=a.selectedMonth,h=a.selectedYear;b=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=b.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth();a.drawYear=a.selectedYear=a.currentYear=b.getFullYear();if((f!=a.selectedMonth||h!=a.selectedYear)&&!c)this._notifyChange(a);this._adjustInstDate(a);if(a.input)a.input.val(e?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||
a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),e=this._get(a,"showButtonPanel"),f=this._get(a,"hideIfNoPrevNext"),h=this._get(a,"navigationAsDateFormat"),i=this._getNumberOfMonths(a),g=this._get(a,"showCurrentAtPos"),k=this._get(a,"stepMonths"),l=i[0]!=1||i[1]!=1,u=this._daylightSavingAdjust(!a.currentDay?
new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),j=this._getMinMaxDate(a,"min"),o=this._getMinMaxDate(a,"max");g=a.drawMonth-g;var m=a.drawYear;if(g<0){g+=12;m--}if(o){var n=this._daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth()-i[0]*i[1]+1,o.getDate()));for(n=j&&n<j?j:n;this._daylightSavingAdjust(new Date(m,g,1))>n;){g--;if(g<0){g=11;m--}}}a.drawMonth=g;a.drawYear=m;n=this._get(a,"prevText");n=!h?n:this.formatDate(n,this._daylightSavingAdjust(new Date(m,g-k,1)),this._getFormatConfig(a));
n=this._canAdjustMonth(a,-1,m,g)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._adjustDate('#"+a.id+"', -"+k+", 'M');\" title=\""+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>":f?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>";var r=this._get(a,"nextText");r=!h?r:this.formatDate(r,this._daylightSavingAdjust(new Date(m,
g+k,1)),this._getFormatConfig(a));f=this._canAdjustMonth(a,+1,m,g)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._adjustDate('#"+a.id+"', +"+k+", 'M');\" title=\""+r+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+r+"</span></a>":f?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+r+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+r+"</span></a>";k=this._get(a,"currentText");r=this._get(a,"gotoCurrent")&&
a.currentDay?u:b;k=!h?k:this.formatDate(k,r,this._getFormatConfig(a));h=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+y+'.datepicker._hideDatepicker();">'+this._get(a,"closeText")+"</button>":"";e=e?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?h:"")+(this._isInRange(a,r)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+
y+".datepicker._gotoToday('#"+a.id+"');\">"+k+"</button>":"")+(c?"":h)+"</div>":"";h=parseInt(this._get(a,"firstDay"),10);h=isNaN(h)?0:h;k=this._get(a,"showWeek");r=this._get(a,"dayNames");this._get(a,"dayNamesShort");var s=this._get(a,"dayNamesMin"),z=this._get(a,"monthNames"),v=this._get(a,"monthNamesShort"),p=this._get(a,"beforeShowDay"),w=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var M=this._getDefaultDate(a),I="",C=0;C<i[0];C++){for(var N=
"",D=0;D<i[1];D++){var J=this._daylightSavingAdjust(new Date(m,g,a.selectedDay)),t=" ui-corner-all",x="";if(l){x+='<div class="ui-datepicker-group';if(i[1]>1)switch(D){case 0:x+=" ui-datepicker-group-first";t=" ui-corner-"+(c?"right":"left");break;case i[1]-1:x+=" ui-datepicker-group-last";t=" ui-corner-"+(c?"left":"right");break;default:x+=" ui-datepicker-group-middle";t="";break}x+='">'}x+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+t+'">'+(/all|left/.test(t)&&C==0?c?
f:n:"")+(/all|right/.test(t)&&C==0?c?n:f:"")+this._generateMonthYearHeader(a,g,m,j,o,C>0||D>0,z,v)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var A=k?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(t=0;t<7;t++){var q=(t+h)%7;A+="<th"+((t+h+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+r[q]+'">'+s[q]+"</span></th>"}x+=A+"</tr></thead><tbody>";A=this._getDaysInMonth(m,g);if(m==a.selectedYear&&g==a.selectedMonth)a.selectedDay=Math.min(a.selectedDay,
A);t=(this._getFirstDayOfMonth(m,g)-h+7)%7;A=l?6:Math.ceil((t+A)/7);q=this._daylightSavingAdjust(new Date(m,g,1-t));for(var O=0;O<A;O++){x+="<tr>";var P=!k?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(q)+"</td>";for(t=0;t<7;t++){var F=p?p.apply(a.input?a.input[0]:null,[q]):[true,""],B=q.getMonth()!=g,K=B&&!H||!F[0]||j&&q<j||o&&q>o;P+='<td class="'+((t+h+6)%7>=5?" ui-datepicker-week-end":"")+(B?" ui-datepicker-other-month":"")+(q.getTime()==J.getTime()&&g==a.selectedMonth&&
a._keyEvent||M.getTime()==q.getTime()&&M.getTime()==J.getTime()?" "+this._dayOverClass:"")+(K?" "+this._unselectableClass+" ui-state-disabled":"")+(B&&!w?"":" "+F[1]+(q.getTime()==u.getTime()?" "+this._currentClass:"")+(q.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!B||w)&&F[2]?' title="'+F[2]+'"':"")+(K?"":' onclick="DP_jQuery_'+y+".datepicker._selectDay('#"+a.id+"',"+q.getMonth()+","+q.getFullYear()+', this);return false;"')+">"+(B&&!w?"&#xa0;":K?'<span class="ui-state-default">'+q.getDate()+
"</span>":'<a class="ui-state-default'+(q.getTime()==b.getTime()?" ui-state-highlight":"")+(q.getTime()==J.getTime()?" ui-state-active":"")+(B?" ui-priority-secondary":"")+'" href="#">'+q.getDate()+"</a>")+"</td>";q.setDate(q.getDate()+1);q=this._daylightSavingAdjust(q)}x+=P+"</tr>"}g++;if(g>11){g=0;m++}x+="</tbody></table>"+(l?"</div>"+(i[0]>0&&D==i[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");N+=x}I+=N}I+=e+(d.browser.msie&&parseInt(d.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':
"");a._keyEvent=false;return I},_generateMonthYearHeader:function(a,b,c,e,f,h,i,g){var k=this._get(a,"changeMonth"),l=this._get(a,"changeYear"),u=this._get(a,"showMonthAfterYear"),j='<div class="ui-datepicker-title">',o="";if(h||!k)o+='<span class="ui-datepicker-month">'+i[b]+"</span>";else{i=e&&e.getFullYear()==c;var m=f&&f.getFullYear()==c;o+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+y+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" onclick=\"DP_jQuery_"+y+".datepicker._clickMonthYear('#"+
a.id+"');\">";for(var n=0;n<12;n++)if((!i||n>=e.getMonth())&&(!m||n<=f.getMonth()))o+='<option value="'+n+'"'+(n==b?' selected="selected"':"")+">"+g[n]+"</option>";o+="</select>"}u||(j+=o+(h||!(k&&l)?"&#xa0;":""));if(h||!l)j+='<span class="ui-datepicker-year">'+c+"</span>";else{g=this._get(a,"yearRange").split(":");var r=(new Date).getFullYear();i=function(s){s=s.match(/c[+-].*/)?c+parseInt(s.substring(1),10):s.match(/[+-].*/)?r+parseInt(s,10):parseInt(s,10);return isNaN(s)?r:s};b=i(g[0]);g=Math.max(b,
i(g[1]||""));b=e?Math.max(b,e.getFullYear()):b;g=f?Math.min(g,f.getFullYear()):g;for(j+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+y+".datepicker._selectMonthYear('#"+a.id+"', this, 'Y');\" onclick=\"DP_jQuery_"+y+".datepicker._clickMonthYear('#"+a.id+"');\">";b<=g;b++)j+='<option value="'+b+'"'+(b==c?' selected="selected"':"")+">"+b+"</option>";j+="</select>"}j+=this._get(a,"yearSuffix");if(u)j+=(h||!(k&&l)?"&#xa0;":"")+o;j+="</div>";return j},_adjustInstDate:function(a,b,c){var e=
a.drawYear+(c=="Y"?b:0),f=a.drawMonth+(c=="M"?b:0);b=Math.min(a.selectedDay,this._getDaysInMonth(e,f))+(c=="D"?b:0);e=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(e,f,b)));a.selectedDay=e.getDate();a.drawMonth=a.selectedMonth=e.getMonth();a.drawYear=a.selectedYear=e.getFullYear();if(c=="M"||c=="Y")this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");b=c&&b<c?c:b;return b=a&&b>a?a:b},_notifyChange:function(a){var b=this._get(a,
"onChangeMonthYear");if(b)b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,"numberOfMonths");return a==null?[1,1]:typeof a=="number"?[1,a]:a},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,e){var f=this._getNumberOfMonths(a);
c=this._daylightSavingAdjust(new Date(c,e+(b<0?b:f[0]*f[1]),1));b<0&&c.setDate(this._getDaysInMonth(c.getFullYear(),c.getMonth()));return this._isInRange(a,c)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!a||b.getTime()<=a.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,
"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,e){if(!b){a.currentDay=a.selectedDay;a.currentMonth=a.selectedMonth;a.currentYear=a.selectedYear}b=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(e,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),b,this._getFormatConfig(a))}});d.fn.datepicker=
function(a){if(!d.datepicker.initialized){d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv);d.datepicker.initialized=true}var b=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b));
return this.each(function(){typeof a=="string"?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this].concat(b)):d.datepicker._attachDatepicker(this,a)})};d.datepicker=new L;d.datepicker.initialized=false;d.datepicker.uuid=(new Date).getTime();d.datepicker.version="1.8.4";window["DP_jQuery_"+y]=d})(jQuery);
;/*
 * jQuery UI Effects 1.8.4
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||function(f,j){function l(c){var a;if(c&&c.constructor==Array&&c.length==3)return c;if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return[parseInt(a[1],
16),parseInt(a[2],16),parseInt(a[3],16)];if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(c))return m.transparent;return m[f.trim(c).toLowerCase()]}function r(c,a){var b;do{b=f.curCSS(c,a);if(b!=""&&b!="transparent"||f.nodeName(c,"body"))break;a="backgroundColor"}while(c=c.parentNode);return l(b)}function n(){var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
a={},b,d;if(c&&c.length&&c[0]&&c[c[0]])for(var e=c.length;e--;){b=c[e];if(typeof c[b]=="string"){d=b.replace(/\-(\w)/g,function(g,h){return h.toUpperCase()});a[d]=c[b]}}else for(b in c)if(typeof c[b]==="string")a[b]=c[b];return a}function o(c){var a,b;for(a in c){b=c[a];if(b==null||f.isFunction(b)||a in s||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b)))delete c[a]}return c}function t(c,a){var b={_:0},d;for(d in a)if(c[d]!=a[d])b[d]=a[d];return b}function k(c,a,b,d){if(typeof c=="object"){d=
a;b=null;a=c;c=a.effect}if(f.isFunction(a)){d=a;b=null;a={}}if(typeof a=="number"||f.fx.speeds[a]){d=b;b=a;a={}}if(f.isFunction(b)){d=b;b=null}a=a||{};b=b||a.duration;b=f.fx.off?0:typeof b=="number"?b:f.fx.speeds[b]||f.fx.speeds._default;d=d||a.complete;return[c,a,b,d]}f.effects={};f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(c,a){f.fx.step[a]=function(b){if(!b.colorInit){b.start=r(b.elem,a);b.end=l(b.end);b.colorInit=
true}b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"}});var m={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,
183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,
165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},p=["add","remove","toggle"],s={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};f.effects.animateClass=function(c,a,b,d){if(f.isFunction(b)){d=b;b=null}return this.each(function(){var e=f(this),g=e.attr("style")||" ",h=o(n.call(this)),q,u=e.attr("className");f.each(p,function(v,
i){c[i]&&e[i+"Class"](c[i])});q=o(n.call(this));e.attr("className",u);e.animate(t(h,q),a,b,function(){f.each(p,function(v,i){c[i]&&e[i+"Class"](c[i])});if(typeof e.attr("style")=="object"){e.attr("style").cssText="";e.attr("style").cssText=g}else e.attr("style",g);d&&d.apply(this,arguments)})})};f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{add:c},a,b,d]):this._addClass(c)},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){return a?
f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c)},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){return typeof a=="boolean"||a===j?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},b,d,e]):this._toggleClass(c,a):f.effects.animateClass.apply(this,[{toggle:c},a,b,d])},switchClass:function(c,a,b,d,e){return f.effects.animateClass.apply(this,[{add:a,remove:c},b,d,e])}});f.extend(f.effects,{version:"1.8.4",save:function(c,a){for(var b=0;b<a.length;b++)a[b]!==
null&&c.data("ec.storage."+a[b],c[0].style[a[b]])},restore:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.css(a[b],c.data("ec.storage."+a[b]))},setMode:function(c,a){if(a=="toggle")a=c.is(":hidden")?"show":"hide";return a},getBaseline:function(c,a){var b;switch(c[0]){case "top":b=0;break;case "middle":b=0.5;break;case "bottom":b=1;break;default:b=c[0]/a.height}switch(c[1]){case "left":c=0;break;case "center":c=0.5;break;case "right":c=1;break;default:c=c[1]/a.width}return{x:c,y:b}},createWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent();
var a={width:c.outerWidth(true),height:c.outerHeight(true),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});c.wrap(b);b=c.parent();if(c.css("position")=="static"){b.css({position:"relative"});c.css({position:"relative"})}else{f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")});f.each(["top","left","bottom","right"],function(d,e){a[e]=c.css(e);if(isNaN(parseInt(a[e],10)))a[e]="auto"});
c.css({position:"relative",top:0,left:0})}return b.css(a).show()},removeWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent().replaceWith(c);return c},setTransition:function(c,a,b,d){d=d||{};f.each(a,function(e,g){unit=c.cssUnit(g);if(unit[0]>0)d[g]=unit[0]*b+unit[1]});return d}});f.fn.extend({effect:function(c){var a=k.apply(this,arguments);a={options:a[1],duration:a[2],callback:a[3]};var b=f.effects[c];return b&&!f.fx.off?b.call(this,a):this},_show:f.fn.show,show:function(c){if(!c||
typeof c=="number"||f.fx.speeds[c])return this._show.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="show";return this.effect.apply(this,a)}},_hide:f.fn.hide,hide:function(c){if(!c||typeof c=="number"||f.fx.speeds[c])return this._hide.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)}},__toggle:f.fn.toggle,toggle:function(c){if(!c||typeof c=="number"||f.fx.speeds[c]||typeof c=="boolean"||f.isFunction(c))return this.__toggle.apply(this,
arguments);else{var a=k.apply(this,arguments);a[1].mode="toggle";return this.effect.apply(this,a)}},cssUnit:function(c){var a=this.css(c),b=[];f.each(["em","px","%","pt"],function(d,e){if(a.indexOf(e)>0)b=[parseFloat(a),e]});return b}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return f.easing[f.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,
a,b,d,e){if((a/=e/2)<1)return d/2*a*a+b;return-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,a,b,d,e){return d*((a=a/e-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a+b;return d/2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a+b;return-d/2*((a-=2)*a*a*a-2)+
b},easeInQuint:function(c,a,b,d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a*a+b;return d/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return a==0?b:d*Math.pow(2,
10*(a/e-1))+b},easeOutExpo:function(c,a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){if(a==0)return b;if(a==e)return b+d;if((a/=e/2)<1)return d/2*Math.pow(2,10*(a-1))+b;return d/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){if((a/=e/2)<1)return-d/2*(Math.sqrt(1-a*a)-1)+b;return d/2*(Math.sqrt(1-(a-=2)*
a)+1)+b},easeInElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+b},easeOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+d+b},easeInOutElastic:function(c,
a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e/2)==2)return b+d;g||(g=e*0.3*1.5);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);if(a<1)return-0.5*h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+b;return h*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+d+b},easeInBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*(a/=e)*a*((g+1)*a-g)+b},easeOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*((a=a/e-1)*a*((g+1)*a+g)+1)+b},easeInOutBack:function(c,
a,b,d,e,g){if(g==j)g=1.70158;if((a/=e/2)<1)return d/2*a*a*(((g*=1.525)+1)*a-g)+b;return d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+b},easeInBounce:function(c,a,b,d,e){return d-f.easing.easeOutBounce(c,e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){if(a<e/2)return f.easing.easeInBounce(c,a*2,0,d,e)*0.5+
b;return f.easing.easeOutBounce(c,a*2-e,0,d,e)*0.5+d*0.5+b}})}(jQuery);
;
/* End "jquery-ui-1.8.4.custom.min.js" */
/* Begin "jquery.imagesloaded.js" */
/*!
 * jQuery imagesLoaded plugin v1.2.1
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */

(function($, undefined) {

// $('#my-container').imagesLoaded(myFunction)
// or
// $('img').imagesLoaded(myFunction)

// execute a callback when all images have loaded.
// needed because .load() doesn't work on cached images

// callback is executed when all images has fineshed loading
// callback function arguments: $all_images, $proper_images, $broken_images
// `this` is the jQuery wrapped container

// returns previous jQuery wrapped container extended with deferred object
// done method arguments: .done( function( $all_images ){ ... } )
// fail method arguments: .fail( function( $all_images, $proper_images, $broken_images ){ ... } )
// progress method arguments: .progress( function( images_count, loaded_count, proper_count, broken_count )

$.fn.imagesLoaded = function( callback ) {
	var $this = this,
		deferred = $.Deferred(),
		$images = $this.find('img').add( $this.filter('img') ),
		len = $images.length,
		blank = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',
		loaded = [],
		proper = [],
		broken = [];

	function doneLoading() {
		var $proper = $(proper),
			$broken = $(broken);

		if ( broken.length ) {
			deferred.reject( $images, $proper, $broken );
		} else {
			deferred.resolve( $images );
		}

		callback.call( $this, $images, $proper, $broken );
	}

	function imgLoaded( event ) {
		// dont proceed if img src is blank or if img is already loaded
		if ( event.target.src === blank || $.inArray( this, loaded ) !== -1 ) {
			return;
		}

		loaded.push( this );
		// keep track of broken and properly loaded images
		if ( event.type === 'error' ) {
			broken.push( this );
		} else {
			proper.push( this );
		}

		deferred.notify( $images.length, loaded.length, proper.length, broken.length );

		if ( --len <= 0 ){
			setTimeout( doneLoading );
			$images.unbind( '.imagesLoaded', imgLoaded );
		}
	}

	// if no images, trigger immediately
	if ( !len ) {
		doneLoading();
	}

	$images.bind( 'load.imagesLoaded error.imagesLoaded', imgLoaded ).each( function() {
		// cached images don't fire load sometimes, so we reset src.
		var src = this.src;
		// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
		// data uri bypasses webkit log warning (thx doug jones)
		this.src = blank;
		this.src = src;
	});

	return deferred.promise( $this );
};

})(jQuery);

/* End "jquery.imagesloaded.js" */
/* Begin "underscore-1.2.1.min.js" */
// Underscore.js 1.2.1
// (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function u(a,c,d){if(a===c)return a!==0||1/a==1/c;if(a==null||c==null)return a===c;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(b.isFunction(a.isEqual))return a.isEqual(c);if(b.isFunction(c.isEqual))return c.isEqual(a);var e=typeof a;if(e!=typeof c)return false;if(!a!=!c)return false;if(b.isNaN(a))return b.isNaN(c);var g=b.isString(a),f=b.isString(c);if(g||f)return g&&f&&String(a)==String(c);g=b.isNumber(a);f=b.isNumber(c);if(g||f)return g&&f&&+a==+c;g=b.isBoolean(a);f=b.isBoolean(c);
if(g||f)return g&&f&&+a==+c;g=b.isDate(a);f=b.isDate(c);if(g||f)return g&&f&&a.getTime()==c.getTime();g=b.isRegExp(a);f=b.isRegExp(c);if(g||f)return g&&f&&a.source==c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase;if(e!="object")return false;if(a.length!==c.length)return false;if(a.constructor!==c.constructor)return false;for(e=d.length;e--;)if(d[e]==a)return true;d.push(a);var e=0,g=true,h;for(h in a)if(m.call(a,h)&&(e++,!(g=m.call(c,h)&&u(a[h],c[h],d))))break;if(g){for(h in c)if(m.call(c,
h)&&!e--)break;g=!e}d.pop();return g}var r=this,F=r._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,G=k.unshift,l=p.toString,m=p.hasOwnProperty,v=k.forEach,w=k.map,x=k.reduce,y=k.reduceRight,z=k.filter,A=k.every,B=k.some,q=k.indexOf,C=k.lastIndexOf,p=Array.isArray,H=Object.keys,s=Function.prototype.bind,b=function(a){return new n(a)};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports)exports=module.exports=b;exports._=b}else typeof define==="function"&&define.amd?
define("underscore",function(){return b}):r._=b;b.VERSION="1.2.1";var j=b.each=b.forEach=function(a,c,b){if(a!=null)if(v&&a.forEach===v)a.forEach(c,b);else if(a.length===+a.length)for(var e=0,g=a.length;e<g;e++){if(e in a&&c.call(b,a[e],e,a)===o)break}else for(e in a)if(m.call(a,e)&&c.call(b,a[e],e,a)===o)break};b.map=function(a,c,b){var e=[];if(a==null)return e;if(w&&a.map===w)return a.map(c,b);j(a,function(a,f,h){e[e.length]=c.call(b,a,f,h)});return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var g=
d!==void 0;a==null&&(a=[]);if(x&&a.reduce===x)return e&&(c=b.bind(c,e)),g?a.reduce(c,d):a.reduce(c);j(a,function(a,b,i){g?d=c.call(e,d,a,b,i):(d=a,g=true)});if(!g)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){a==null&&(a=[]);if(y&&a.reduceRight===y)return e&&(c=b.bind(c,e)),d!==void 0?a.reduceRight(c,d):a.reduceRight(c);a=(b.isArray(a)?a.slice():b.toArray(a)).reverse();return b.reduce(a,c,d,e)};b.find=b.detect=function(a,c,b){var e;
D(a,function(a,f,h){if(c.call(b,a,f,h))return e=a,true});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.filter===z)return a.filter(c,b);j(a,function(a,f,h){c.call(b,a,f,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,f,h){c.call(b,a,f,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(A&&a.every===A)return a.every(c,b);j(a,function(a,f,h){if(!(e=e&&c.call(b,a,f,h)))return o});
return e};var D=b.some=b.any=function(a,c,d){var c=c||b.identity,e=false;if(a==null)return e;if(B&&a.some===B)return a.some(c,d);j(a,function(a,b,h){if(e|=c.call(d,a,b,h))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;return q&&a.indexOf===q?a.indexOf(c)!=-1:b=D(a,function(a){if(a===c)return true})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(c.call?c||a:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};
b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var b=[],d;
j(a,function(a,g){g==0?b[0]=a:(d=Math.floor(Math.random()*(g+1)),b[g]=b[d],b[d]=a)});return b};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,f){return{value:a,criteria:c.call(d,a,b,f)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,g=a.length;e<
g;){var f=e+g>>1;d(a[f])<d(c)?e=f+1:g=f}return e};b.toArray=function(a){return!a?[]:a.toArray?a.toArray():b.isArray(a)?i.call(a):b.isArguments(a)?i.call(a):b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,a.length-b):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=
function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,e=[];b.reduce(d,function(d,f,h){if(0==h||(c===true?b.last(d)!=f:!b.include(d,f)))d[d.length]=f,e[e.length]=a[h];return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};
b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a,c){return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(q&&a.indexOf===q)return a.indexOf(c);
for(d=0,e=a.length;d<e;d++)if(a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(C&&a.lastIndexOf===C)return a.lastIndexOf(b);for(var d=a.length;d--;)if(a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),g=0,f=Array(e);g<e;)f[g++]=a,a+=d;return f};var E=function(){};b.bind=function(a,c){var d,e;if(a.bind===s&&s)return s.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;
e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));E.prototype=a.prototype;var b=new E,f=a.apply(b,e.concat(i.call(arguments)));return Object(f)===f?f:b}};b.bindAll=function(a){var c=i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var b=c.apply(this,arguments);return m.call(d,b)?d[b]:d[b]=a.apply(this,arguments)}};b.delay=
function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,g,f,h;h=b.debounce(function(){f=false},c);return function(){e=this;g=arguments;var b;d||(d=setTimeout(function(){d=null;a.apply(e,g);h()},c));f||a.apply(e,g);h&&h();f=true}};b.debounce=function(a,b){var d;return function(){var e=this,g=arguments;clearTimeout(d);d=setTimeout(function(){d=null;a.apply(e,
g)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments));return b.apply(this,d)}};b.compose=function(){var a=i.call(arguments);return function(){for(var b=i.call(arguments),d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return function(){if(--a<1)return b.apply(this,arguments)}};b.keys=H||function(a){if(a!==Object(a))throw new TypeError("Invalid object");
var b=[],d;for(d in a)m.call(a,d)&&(b[b.length]=d);return b};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)b[d]!==void 0&&(a[d]=b[d])});return a};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},
a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return u(a,b,[])};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(m.call(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=l.call(arguments)=="[object Arguments]"?function(a){return l.call(a)=="[object Arguments]"}:function(a){return!(!a||!m.call(a,
"callee"))};b.isFunction=function(a){return l.call(a)=="[object Function]"};b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===
void 0};b.noConflict=function(){r._=F;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.mixin=function(a){j(b.functions(a),function(c){I(c,b[c]=a[c])})};var J=0;b.uniqueId=function(a){var b=J++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,
interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};b.template=function(a,c){var d=b.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.escape,function(a,b){return"',_.escape("+b.replace(/\\'/g,"'")+"),'"}).replace(d.interpolate,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(d.evaluate||null,function(a,b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,
"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",d=new Function("obj",d);return c?d(c):d};var n=function(a){this._wrapped=a};b.prototype=n.prototype;var t=function(a,c){return c?b(a).chain():a},I=function(a,c){n.prototype[a]=function(){var a=i.call(arguments);G.call(a,this._wrapped);return t(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];n.prototype[a]=function(){b.apply(this._wrapped,arguments);return t(this._wrapped,
this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];n.prototype[a]=function(){return t(b.apply(this._wrapped,arguments),this._chain)}});n.prototype.chain=function(){this._chain=true;return this};n.prototype.value=function(){return this._wrapped}})();

/* End "underscore-1.2.1.min.js" */
/* Begin "jwplayer-5.10/swfobject.js" */
/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;
/* End "jwplayer-5.10/swfobject.js" */
/* Begin "jwplayer-5.10/jwplayer-c9mod.min.js" */
/*
	Modifications have been made to this file from the original 5.10 jwplayer release
	For bug fixes:
	-	http://developer.longtailvideo.com/trac/ticket/1674
*/
if (typeof jwplayer == "undefined") {
	var jwplayer = function(a) {
		if (jwplayer.api) {
			return jwplayer.api.selectPlayer(a)
		}
	};
	var $jw = jwplayer;
	jwplayer.version = "5.10.2295 (Licensed version)";
	jwplayer.vid = document.createElement("video");
	jwplayer.audio = document.createElement("audio");
	jwplayer.source = document.createElement("source");
	(function(b) {
		b.utils = function() {};
		b.utils.typeOf = function(d) {
			var c = typeof d;
			if (c === "object") {
				if (d) {
					if (d instanceof Array) {
						c = "array"
					}
				} else {
					c = "null"
				}
			}
			return c
		};
		b.utils.extend = function() {
			var c = b.utils.extend["arguments"];
			if (c.length > 1) {
				for (var e = 1; e < c.length; e++) {
					for (var d in c[e]) {
						c[0][d] = c[e][d]
					}
				}
				return c[0]
			}
			return null
		};
		b.utils.clone = function(f) {
			var c;
			var d = b.utils.clone["arguments"];
			if (d.length == 1) {
				switch (b.utils.typeOf(d[0])) {
					case "object":
						c = {};
						for (var e in d[0]) {
							c[e] = b.utils.clone(d[0][e])
						}
						break;
					case "array":
						c = [];
						for (var e in d[0]) {
							c[e] = b.utils.clone(d[0][e])
						}
						break;
					default:
						return d[0];
						break
				}
			}
			return c
		};
		b.utils.extension = function(c) {
			if (!c) {
				return ""
			}
			c = c.substring(c.lastIndexOf("/") + 1, c.length);
			c = c.split("?")[0];
			if (c.lastIndexOf(".") > -1) {
				return c.substr(c.lastIndexOf(".") + 1, c.length).toLowerCase()
			}
			return
		};
		b.utils.html = function(c, d) {
			c.innerHTML = d
		};
		b.utils.wrap = function(c, d) {
			if (c.parentNode) {
				c.parentNode.replaceChild(d, c)
			}
			d.appendChild(c)
		};
		b.utils.ajax = function(g, f, c) {
			var e;
			if (window.XMLHttpRequest) {
				e = new XMLHttpRequest()
			} else {
				e = new ActiveXObject("Microsoft.XMLHTTP")
			}
			e.onreadystatechange = function() {
				if (e.readyState === 4) {
					if (e.status === 200) {
						if (f) {
							if (!b.utils.exists(e.responseXML)) {
								try {
									if (window.DOMParser) {
										var h = (new DOMParser()).parseFromString(e.responseText, "text/xml");
										if (h) {
											e = b.utils.extend({}, e, {
												responseXML: h
											})
										}
									} else {
										h = new ActiveXObject("Microsoft.XMLDOM");
										h.async = "false";
										h.loadXML(e.responseText);
										e = b.utils.extend({}, e, {
											responseXML: h
										})
									}
								} catch (j) {
									if (c) {
										c(g)
									}
								}
							}
							f(e)
						}
					} else {
						if (c) {
							c(g)
						}
					}
				}
			};
			try {
				e.open("GET", g, true);
				e.send(null)
			} catch (d) {
				if (c) {
					c(g)
				}
			}
			return e
		};
		b.utils.load = function(d, e, c) {
			d.onreadystatechange = function() {
				if (d.readyState === 4) {
					if (d.status === 200) {
						if (e) {
							e()
						}
					} else {
						if (c) {
							c()
						}
					}
				}
			}
		};
		b.utils.find = function(d, c) {
			return d.getElementsByTagName(c)
		};
		b.utils.append = function(c, d) {
			c.appendChild(d)
		};
		b.utils.isIE = function() {
			return ((!+"\v1") || (typeof window.ActiveXObject != "undefined"))
		};
		b.utils.userAgentMatch = function(d) {
			var c = navigator.userAgent.toLowerCase();
			return (c.match(d) !== null)
		};
		b.utils.isIOS = function() {
			return b.utils.userAgentMatch(/iP(hone|ad|od)/i)
		};
		b.utils.isIPad = function() {
			return b.utils.userAgentMatch(/iPad/i)
		};
		b.utils.isIPod = function() {
			return b.utils.userAgentMatch(/iP(hone|od)/i)
		};
		b.utils.isAndroid = function() {
			return b.utils.userAgentMatch(/android/i)
		};
		b.utils.isLegacyAndroid = function() {
			return b.utils.userAgentMatch(/android 2.[012]/i)
		};
		b.utils.isBlackberry = function() {
			return b.utils.userAgentMatch(/blackberry/i)
		};
		b.utils.isMobile = function() {
			return b.utils.userAgentMatch(/(iP(hone|ad|od))|android/i)
		};
		b.utils.getFirstPlaylistItemFromConfig = function(c) {
			var d = {};
			var e;
			if (c.playlist && c.playlist.length) {
				e = c.playlist[0]
			} else {
				e = c
			}
			d.file = e.file;
			d.levels = e.levels;
			d.streamer = e.streamer;
			d.playlistfile = e.playlistfile;
			d.provider = e.provider;
			if (!d.provider) {
				if (d.file && (d.file.toLowerCase().indexOf("youtube.com") > -1 || d.file.toLowerCase().indexOf("youtu.be") > -1)) {
					d.provider = "youtube"
				}
				if (d.streamer && d.streamer.toLowerCase().indexOf("rtmp://") == 0) {
					d.provider = "rtmp"
				}
				if (e.type) {
					d.provider = e.type.toLowerCase()
				}
			}
			if (d.provider == "audio") {
				d.provider = "sound"
			}
			return d
		};
		b.utils.getOuterHTML = function(c) {
			if (c.outerHTML) {
				return c.outerHTML
			} else {
				try {
					return new XMLSerializer().serializeToString(c)
				} catch (d) {
					return ""
				}
			}
		};
		b.utils.setOuterHTML = function(f, e) {
			if (f.outerHTML) {
				f.outerHTML = e
			} else {
				var g = document.createElement("div");
				g.innerHTML = e;
				var c = document.createRange();
				c.selectNodeContents(g);
				var d = c.extractContents();
				f.parentNode.insertBefore(d, f);
				f.parentNode.removeChild(f)
			}
		};
		b.utils.hasFlash = function() {
			if (typeof navigator.plugins != "undefined" && typeof navigator.plugins["Shockwave Flash"] != "undefined") {
				return true
			}
			if (typeof window.ActiveXObject != "undefined") {
				try {
					new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
					return true
				} catch (c) {}
			}
			return false
		};
		b.utils.getPluginName = function(c) {
			if (c.lastIndexOf("/") >= 0) {
				c = c.substring(c.lastIndexOf("/") + 1, c.length)
			}
			if (c.lastIndexOf("-") >= 0) {
				c = c.substring(0, c.lastIndexOf("-"))
			}
			if (c.lastIndexOf(".swf") >= 0) {
				c = c.substring(0, c.lastIndexOf(".swf"))
			}
			if (c.lastIndexOf(".js") >= 0) {
				c = c.substring(0, c.lastIndexOf(".js"))
			}
			return c
		};
		b.utils.getPluginVersion = function(c) {
			if (c.lastIndexOf("-") >= 0) {
				if (c.lastIndexOf(".js") >= 0) {
					return c.substring(c.lastIndexOf("-") + 1, c.lastIndexOf(".js"))
				} else {
					if (c.lastIndexOf(".swf") >= 0) {
						return c.substring(c.lastIndexOf("-") + 1, c.lastIndexOf(".swf"))
					} else {
						return c.substring(c.lastIndexOf("-") + 1)
					}
				}
			}
			return ""
		};
		b.utils.getAbsolutePath = function(j, h) {
			if (!b.utils.exists(h)) {
				h = document.location.href
			}
			if (!b.utils.exists(j)) {
				return undefined
			}
			if (a(j)) {
				return j
			}
			var k = h.substring(0, h.indexOf("://") + 3);
			var g = h.substring(k.length, h.indexOf("/", k.length + 1));
			var d;
			if (j.indexOf("/") === 0) {
				d = j.split("/")
			} else {
				var e = h.split("?")[0];
				e = e.substring(k.length + g.length + 1, e.lastIndexOf("/"));
				d = e.split("/").concat(j.split("/"))
			}
			var c = [];
			for (var f = 0; f < d.length; f++) {
				if (!d[f] || !b.utils.exists(d[f]) || d[f] == ".") {
					continue
				} else {
					if (d[f] == "..") {
						c.pop()
					} else {
						c.push(d[f])
					}
				}
			}
			return k + g + "/" + c.join("/")
		};

		function a(d) {
			if (!b.utils.exists(d)) {
				return
			}
			var e = d.indexOf("://");
			var c = d.indexOf("?");
			return (e > 0 && (c < 0 || (c > e)))
		}
		b.utils.pluginPathType = {
			ABSOLUTE: "ABSOLUTE",
			RELATIVE: "RELATIVE",
			CDN: "CDN"
		};
		b.utils.getPluginPathType = function(d) {
			if (typeof d != "string") {
				return
			}
			d = d.split("?")[0];
			var e = d.indexOf("://");
			if (e > 0) {
				return b.utils.pluginPathType.ABSOLUTE
			}
			var c = d.indexOf("/");
			var f = b.utils.extension(d);
			if (e < 0 && c < 0 && (!f || !isNaN(f))) {
				return b.utils.pluginPathType.CDN
			}
			return b.utils.pluginPathType.RELATIVE
		};
		b.utils.mapEmpty = function(c) {
			for (var d in c) {
				return false
			}
			return true
		};
		b.utils.mapLength = function(d) {
			var c = 0;
			for (var e in d) {
				c++
			}
			return c
		};
		b.utils.log = function(d, c) {
			if (typeof console != "undefined" && typeof console.log != "undefined") {
				if (c) {
					console.log(d, c)
				} else {
					console.log(d)
				}
			}
		};
		b.utils.css = function(d, g, c) {
			if (b.utils.exists(d)) {
				for (var e in g) {
					try {
						if (typeof g[e] === "undefined") {
							continue
						} else {
							if (typeof g[e] == "number" && !(e == "zIndex" || e == "opacity")) {
								if (isNaN(g[e])) {
									continue
								}
								if (e.match(/color/i)) {
									g[e] = "#" + b.utils.strings.pad(g[e].toString(16), 6)
								} else {
									g[e] = Math.ceil(g[e]) + "px"
								}
							}
						}
						d.style[e] = g[e]
					} catch (f) {}
				}
			}
		};
		b.utils.isYouTube = function(c) {
			return (c.indexOf("youtube.com") > -1 || c.indexOf("youtu.be") > -1)
		};
		b.utils.transform = function(e, d, c, g, h) {
			if (!b.utils.exists(d)) {
				d = 1
			}
			if (!b.utils.exists(c)) {
				c = 1
			}
			if (!b.utils.exists(g)) {
				g = 0
			}
			if (!b.utils.exists(h)) {
				h = 0
			}
			if (d == 1 && c == 1 && g == 0 && h == 0) {
				e.style.webkitTransform = "";
				e.style.MozTransform = "";
				e.style.OTransform = ""
			} else {
				var f = "scale(" + d + "," + c + ") translate(" + g + "px," + h + "px)";
				e.style.webkitTransform = f;
				e.style.MozTransform = f;
				e.style.OTransform = f
			}
		};
		b.utils.stretch = function(k, q, p, g, n, h) {
			if (typeof p == "undefined" || typeof g == "undefined" || typeof n == "undefined" || typeof h == "undefined") {
				return
			}
			var d = p / n;
			var f = g / h;
			var m = 0;
			var l = 0;
			var e = false;
			var c = {};
			if (q.parentElement) {
				q.parentElement.style.overflow = "hidden"
			}
			b.utils.transform(q);
			switch (k.toUpperCase()) {
				case b.utils.stretching.NONE:
					c.width = n;
					c.height = h;
					c.top = (g - c.height) / 2;
					c.left = (p - c.width) / 2;
					break;
				case b.utils.stretching.UNIFORM:
					if (d > f) {
						c.width = n * f;
						c.height = h * f;
						if (c.width / p > 0.95) {
							e = true;
							d = Math.ceil(100 * p / c.width) / 100;
							f = 1;
							c.width = p
						}
					} else {
						c.width = n * d;
						c.height = h * d;
						if (c.height / g > 0.95) {
							e = true;
							d = 1;
							f = Math.ceil(100 * g / c.height) / 100;
							c.height = g
						}
					}
					c.top = (g - c.height) / 2;
					c.left = (p - c.width) / 2;
					break;
				case b.utils.stretching.FILL:
					if (d > f) {
						c.width = n * d;
						c.height = h * d
					} else {
						c.width = n * f;
						c.height = h * f
					}
					c.top = (g - c.height) / 2;
					c.left = (p - c.width) / 2;
					break;
				case b.utils.stretching.EXACTFIT:
					c.width = n;
					c.height = h;
					var o = Math.round((n / 2) * (1 - 1 / d));
					var j = Math.round((h / 2) * (1 - 1 / f));
					e = true;
					c.top = c.left = 0;
					break;
				default:
					break
			}
			if (e) {
				b.utils.transform(q, d, f, o, j)
			}
			b.utils.css(q, c)
		};
		b.utils.stretching = {
			NONE: "NONE",
			FILL: "FILL",
			UNIFORM: "UNIFORM",
			EXACTFIT: "EXACTFIT"
		};
		b.utils.deepReplaceKeyName = function(k, e, c) {
			switch (b.utils.typeOf(k)) {
				case "array":
					for (var g = 0; g < k.length; g++) {
						k[g] = b.utils.deepReplaceKeyName(k[g], e, c)
					}
					break;
				case "object":
					for (var f in k) {
						var j, h;
						if (e instanceof Array && c instanceof Array) {
							if (e.length != c.length) {
								continue
							} else {
								j = e;
								h = c
							}
						} else {
							j = [e];
							h = [c]
						}
						var d = f;
						for (var g = 0; g < j.length; g++) {
							d = d.replace(new RegExp(e[g], "g"), c[g])
						}
						k[d] = b.utils.deepReplaceKeyName(k[f], e, c);
						if (f != d) {
							delete k[f]
						}
					}
					break
			}
			return k
		};
		b.utils.isInArray = function(e, d) {
			if (!(e) || !(e instanceof Array)) {
				return false
			}
			for (var c = 0; c < e.length; c++) {
				if (d === e[c]) {
					return true
				}
			}
			return false
		};
		b.utils.exists = function(c) {
			switch (typeof(c)) {
				case "string":
					return (c.length > 0);
					break;
				case "object":
					return (c !== null);
				case "undefined":
					return false
			}
			return true
		};
		b.utils.empty = function(c) {
			if (typeof c.hasChildNodes == "function") {
				while (c.hasChildNodes()) {
					c.removeChild(c.firstChild)
				}
			}
		};
		b.utils.parseDimension = function(c) {
			if (typeof c == "string") {
				if (c === "") {
					return 0
				} else {
					if (c.lastIndexOf("%") > -1) {
						return c
					} else {
						return parseInt(c.replace("px", ""), 10)
					}
				}
			}
			return c
		};
		b.utils.getDimensions = function(c) {
			if (c && c.style) {
				return {
					x: b.utils.parseDimension(c.style.left),
					y: b.utils.parseDimension(c.style.top),
					width: b.utils.parseDimension(c.style.width),
					height: b.utils.parseDimension(c.style.height)
				}
			} else {
				return {}
			}
		};
		b.utils.getElementWidth = function(c) {
			if (!c) {
				return null
			} else {
				if (c == document.body) {
					return b.utils.parentNode(c).clientWidth
				} else {
					if (c.clientWidth > 0) {
						return c.clientWidth
					} else {
						if (c.style) {
							return b.utils.parseDimension(c.style.width)
						} else {
							return null
						}
					}
				}
			}
		};
		b.utils.getElementHeight = function(c) {
			if (!c) {
				return null
			} else {
				if (c == document.body) {
					return b.utils.parentNode(c).clientHeight
				} else {
					if (c.clientHeight > 0) {
						return c.clientHeight
					} else {
						if (c.style) {
							return b.utils.parseDimension(c.style.height)
						} else {
							return null
						}
					}
				}
			}
		};
		b.utils.timeFormat = function(c) {
			str = "00:00";
			if (c > 0) {
				str = Math.floor(c / 60) < 10 ? "0" + Math.floor(c / 60) + ":" : Math.floor(c / 60) + ":";
				str += Math.floor(c % 60) < 10 ? "0" + Math.floor(c % 60) : Math.floor(c % 60)
			}
			return str
		};
		b.utils.useNativeFullscreen = function() {
			return (navigator && navigator.vendor && navigator.vendor.indexOf("Apple") == 0)
		};
		b.utils.parentNode = function(c) {
			if (!c) {
				return document.body
			} else {
				if (c.parentNode) {
					return c.parentNode
				} else {
					if (c.parentElement) {
						return c.parentElement
					} else {
						return c
					}
				}
			}
		};
		b.utils.getBoundingClientRect = function(c) {
			if (typeof c.getBoundingClientRect == "function") {
				return c.getBoundingClientRect()
			} else {
				return {
					left: c.offsetLeft + document.body.scrollLeft,
					top: c.offsetTop + document.body.scrollTop,
					width: c.offsetWidth,
					height: c.offsetHeight
				}
			}
		};
		b.utils.translateEventResponse = function(e, c) {
			var g = b.utils.extend({}, c);
			if (e == b.api.events.JWPLAYER_FULLSCREEN && !g.fullscreen) {
				g.fullscreen = g.message == "true" ? true : false;
				delete g.message
			} else {
				if (typeof g.data == "object") {
					g = b.utils.extend(g, g.data);
					delete g.data
				} else {
					if (typeof g.metadata == "object") {
						b.utils.deepReplaceKeyName(g.metadata, ["__dot__", "__spc__", "__dsh__"], [".", " ", "-"])
					}
				}
			}
			var d = ["position", "duration", "offset"];
			for (var f in d) {
				if (g[d[f]]) {
					g[d[f]] = Math.round(g[d[f]] * 1000) / 1000
				}
			}
			return g
		};
		b.utils.saveCookie = function(c, d) {
			document.cookie = "jwplayer." + c + "=" + d + "; path=/"
		};
		b.utils.getCookies = function() {
			var f = {};
			var e = document.cookie.split("; ");
			for (var d = 0; d < e.length; d++) {
				var c = e[d].split("=");
				if (c[0].indexOf("jwplayer.") == 0) {
					f[c[0].substring(9, c[0].length)] = c[1]
				}
			}
			return f
		};
		b.utils.readCookie = function(c) {
			return b.utils.getCookies()[c]
		}
	})(jwplayer);
	(function(a) {
		a.events = function() {};
		a.events.COMPLETE = "COMPLETE";
		a.events.ERROR = "ERROR"
	})(jwplayer);
	(function(jwplayer) {
		jwplayer.events.eventdispatcher = function(debug) {
			var _debug = debug;
			var _listeners;
			var _globallisteners;
			this.resetEventListeners = function() {
				_listeners = {};
				_globallisteners = []
			};
			this.resetEventListeners();
			this.addEventListener = function(type, listener, count) {
				try {
					if (!jwplayer.utils.exists(_listeners[type])) {
						_listeners[type] = []
					}
					if (typeof(listener) == "string") {
						eval("listener = " + listener)
					}
					_listeners[type].push({
						listener: listener,
						count: count
					})
				} catch (err) {
					jwplayer.utils.log("error", err)
				}
				return false
			};
			this.removeEventListener = function(type, listener) {
				if (!_listeners[type]) {
					return
				}
				try {
					for (var listenerIndex = 0; listenerIndex < _listeners[type].length; listenerIndex++) {
						if (_listeners[type][listenerIndex].listener.toString() == listener.toString()) {
							_listeners[type].splice(listenerIndex, 1);
							break
						}
					}
				} catch (err) {
					jwplayer.utils.log("error", err)
				}
				return false
			};
			this.addGlobalListener = function(listener, count) {
				try {
					if (typeof(listener) == "string") {
						eval("listener = " + listener)
					}
					_globallisteners.push({
						listener: listener,
						count: count
					})
				} catch (err) {
					jwplayer.utils.log("error", err)
				}
				return false
			};
			this.removeGlobalListener = function(listener) {
				if (!listener) {
					return
				}
				try {
					for (var globalListenerIndex = 0; globalListenerIndex < _globallisteners.length; globalListenerIndex++) {
						if (_globallisteners[globalListenerIndex].listener.toString() == listener.toString()) {
							_globallisteners.splice(globalListenerIndex, 1);
							break
						}
					}
				} catch (err) {
					jwplayer.utils.log("error", err)
				}
				return false
			};
			this.sendEvent = function(type, data) {
				if (!jwplayer.utils.exists(data)) {
					data = {}
				}
				if (_debug) {
					jwplayer.utils.log(type, data)
				}
				if (typeof _listeners[type] != "undefined") {
					for (var listenerIndex = 0; listenerIndex < _listeners[type].length; listenerIndex++) {
						try {
							_listeners[type][listenerIndex].listener(data)
						} catch (err) {
							jwplayer.utils.log("There was an error while handling a listener: " + err.toString(), _listeners[type][listenerIndex].listener)
						}
						if (_listeners[type][listenerIndex]) {
							if (_listeners[type][listenerIndex].count === 1) {
								delete _listeners[type][listenerIndex]
							} else {
								if (_listeners[type][listenerIndex].count > 0) {
									_listeners[type][listenerIndex].count = _listeners[type][listenerIndex].count - 1
								}
							}
						}
					}
				}
				for (var globalListenerIndex = 0; globalListenerIndex < _globallisteners.length; globalListenerIndex++) {
					try {
						_globallisteners[globalListenerIndex].listener(data)
					} catch (err) {
						jwplayer.utils.log("There was an error while handling a listener: " + err.toString(), _globallisteners[globalListenerIndex].listener)
					}
					if (_globallisteners[globalListenerIndex]) {
						if (_globallisteners[globalListenerIndex].count === 1) {
							delete _globallisteners[globalListenerIndex]
						} else {
							if (_globallisteners[globalListenerIndex].count > 0) {
								_globallisteners[globalListenerIndex].count = _globallisteners[globalListenerIndex].count - 1
							}
						}
					}
				}
			}
		}
	})(jwplayer);
	(function(a) {
		var b = {};
		a.utils.animations = function() {};
		a.utils.animations.transform = function(c, d) {
			c.style.webkitTransform = d;
			c.style.MozTransform = d;
			c.style.OTransform = d;
			c.style.msTransform = d
		};
		a.utils.animations.transformOrigin = function(c, d) {
			c.style.webkitTransformOrigin = d;
			c.style.MozTransformOrigin = d;
			c.style.OTransformOrigin = d;
			c.style.msTransformOrigin = d
		};
		a.utils.animations.rotate = function(c, d) {
			a.utils.animations.transform(c, ["rotate(", d, "deg)"].join(""))
		};
		a.utils.cancelAnimation = function(c) {
			delete b[c.id]
		};
		a.utils.fadeTo = function(m, f, e, j, h, d) {
			if (b[m.id] != d && a.utils.exists(d)) {
				return
			}
			if (m.style.opacity == f) {
				return
			}
			var c = new Date().getTime();
			if (d > c) {
				setTimeout(function() {
					a.utils.fadeTo(m, f, e, j, 0, d)
				}, d - c)
			}
			if (m.style.display == "none") {
				m.style.display = "block"
			}
			if (!a.utils.exists(j)) {
				j = m.style.opacity === "" ? 1 : m.style.opacity
			}
			if (m.style.opacity == f && m.style.opacity !== "" && a.utils.exists(d)) {
				if (f === 0) {
					m.style.display = "none"
				}
				return
			}
			if (!a.utils.exists(d)) {
				d = c;
				b[m.id] = d
			}
			if (!a.utils.exists(h)) {
				h = 0
			}
			var k = (e > 0) ? ((c - d) / (e * 1000)) : 0;
			k = k > 1 ? 1 : k;
			var l = f - j;
			var g = j + (k * l);
			if (g > 1) {
				g = 1
			} else {
				if (g < 0) {
					g = 0
				}
			}
			m.style.opacity = g;
			if (h > 0) {
				b[m.id] = d + h * 1000;
				a.utils.fadeTo(m, f, e, j, 0, b[m.id]);
				return
			}
			setTimeout(function() {
				a.utils.fadeTo(m, f, e, j, 0, d)
			}, 10)
		}
	})(jwplayer);
	(function(a) {
		a.utils.arrays = function() {};
		a.utils.arrays.indexOf = function(c, d) {
			for (var b = 0; b < c.length; b++) {
				if (c[b] == d) {
					return b
				}
			}
			return -1
		};
		a.utils.arrays.remove = function(c, d) {
			var b = a.utils.arrays.indexOf(c, d);
			if (b > -1) {
				c.splice(b, 1)
			}
		}
	})(jwplayer);
	(function(a) {
		a.utils.extensionmap = {
			"3gp": {
				html5: "video/3gpp",
				flash: "video"
			},
			"3gpp": {
				html5: "video/3gpp"
			},
			"3g2": {
				html5: "video/3gpp2",
				flash: "video"
			},
			"3gpp2": {
				html5: "video/3gpp2"
			},
			flv: {
				flash: "video"
			},
			f4a: {
				html5: "audio/mp4"
			},
			f4b: {
				html5: "audio/mp4",
				flash: "video"
			},
			f4v: {
				html5: "video/mp4",
				flash: "video"
			},
			mov: {
				html5: "video/quicktime",
				flash: "video"
			},
			m4a: {
				html5: "audio/mp4",
				flash: "video"
			},
			m4b: {
				html5: "audio/mp4"
			},
			m4p: {
				html5: "audio/mp4"
			},
			m4v: {
				html5: "video/mp4",
				flash: "video"
			},
			mp4: {
				html5: "video/mp4",
				flash: "video"
			},
			rbs: {
				flash: "sound"
			},
			aac: {
				html5: "audio/aac",
				flash: "video"
			},
			mp3: {
				html5: "audio/mp3",
				flash: "sound"
			},
			ogg: {
				html5: "audio/ogg"
			},
			oga: {
				html5: "audio/ogg"
			},
			ogv: {
				html5: "video/ogg"
			},
			webm: {
				html5: "video/webm"
			},
			m3u8: {
				html5: "audio/x-mpegurl"
			},
			gif: {
				flash: "image"
			},
			jpeg: {
				flash: "image"
			},
			jpg: {
				flash: "image"
			},
			swf: {
				flash: "image"
			},
			png: {
				flash: "image"
			},
			wav: {
				html5: "audio/x-wav"
			}
		}
	})(jwplayer);
	(function(e) {
		e.utils.mediaparser = function() {};
		var g = {
			element: {
				width: "width",
				height: "height",
				id: "id",
				"class": "className",
				name: "name"
			},
			media: {
				src: "file",
				preload: "preload",
				autoplay: "autostart",
				loop: "repeat",
				controls: "controls"
			},
			source: {
				src: "file",
				type: "type",
				media: "media",
				"data-jw-width": "width",
				"data-jw-bitrate": "bitrate"
			},
			video: {
				poster: "image"
			}
		};
		var f = {};
		e.utils.mediaparser.parseMedia = function(j) {
			return d(j)
		};

		function c(k, j) {
			if (!e.utils.exists(j)) {
				j = g[k]
			} else {
				e.utils.extend(j, g[k])
			}
			return j
		}
		function d(n, j) {
			if (f[n.tagName.toLowerCase()] && !e.utils.exists(j)) {
				return f[n.tagName.toLowerCase()](n)
			} else {
				j = c("element", j);
				var o = {};
				for (var k in j) {
					if (k != "length") {
						var m = n.getAttribute(k);
						if (e.utils.exists(m)) {
							o[j[k]] = m
						}
					}
				}
				var l = n.style["#background-color"];
				if (l && !(l == "transparent" || l == "rgba(0, 0, 0, 0)")) {
					o.screencolor = l
				}
				return o
			}
		}
		function h(n, k) {
			k = c("media", k);
			var l = [];
			var j = e.utils.selectors("source", n);
			for (var m in j) {
				if (!isNaN(m)) {
					l.push(a(j[m]))
				}
			}
			var o = d(n, k);
			if (e.utils.exists(o.file)) {
				l[0] = {
					file: o.file
				}
			}
			o.levels = l;
			return o
		}
		function a(l, k) {
			k = c("source", k);
			var j = d(l, k);
			j.width = j.width ? j.width : 0;
			j.bitrate = j.bitrate ? j.bitrate : 0;
			return j
		}
		function b(l, k) {
			k = c("video", k);
			var j = h(l, k);
			return j
		}
		f.media = h;
		f.audio = h;
		f.source = a;
		f.video = b
	})(jwplayer);
	(function(a) {
		a.utils.loaderstatus = {
			NEW: "NEW",
			LOADING: "LOADING",
			ERROR: "ERROR",
			COMPLETE: "COMPLETE"
		};
		a.utils.scriptloader = function(c) {
			var d = a.utils.loaderstatus.NEW;
			var b = new a.events.eventdispatcher();
			a.utils.extend(this, b);
			this.load = function() {
				if (d == a.utils.loaderstatus.NEW) {
					d = a.utils.loaderstatus.LOADING;
					var e = document.createElement("script");
					e.onload = function(f) {
						d = a.utils.loaderstatus.COMPLETE;
						b.sendEvent(a.events.COMPLETE)
					};
					e.onerror = function(f) {
						d = a.utils.loaderstatus.ERROR;
						b.sendEvent(a.events.ERROR)
					};
					e.onreadystatechange = function() {
						if (e.readyState == "loaded" || e.readyState == "complete") {
							d = a.utils.loaderstatus.COMPLETE;
							b.sendEvent(a.events.COMPLETE)
						}
					};
					document.getElementsByTagName("head")[0].appendChild(e);
					e.src = c
				}
			};
			this.getStatus = function() {
				return d
			}
		}
	})(jwplayer);
	(function(a) {
		a.utils.selectors = function(b, e) {
			if (!a.utils.exists(e)) {
				e = document
			}
			b = a.utils.strings.trim(b);
			var c = b.charAt(0);
			if (c == "#") {
				return e.getElementById(b.substr(1))
			} else {
				if (c == ".") {
					if (e.getElementsByClassName) {
						return e.getElementsByClassName(b.substr(1))
					} else {
						return a.utils.selectors.getElementsByTagAndClass("*", b.substr(1))
					}
				} else {
					if (b.indexOf(".") > 0) {
						var d = b.split(".");
						return a.utils.selectors.getElementsByTagAndClass(d[0], d[1])
					} else {
						return e.getElementsByTagName(b)
					}
				}
			}
			return null
		};
		a.utils.selectors.getElementsByTagAndClass = function(e, h, g) {
			var j = [];
			if (!a.utils.exists(g)) {
				g = document
			}
			var f = g.getElementsByTagName(e);
			for (var d = 0; d < f.length; d++) {
				if (a.utils.exists(f[d].className)) {
					var c = f[d].className.split(" ");
					for (var b = 0; b < c.length; b++) {
						if (c[b] == h) {
							j.push(f[d])
						}
					}
				}
			}
			return j
		}
	})(jwplayer);
	(function(a) {
		a.utils.strings = function() {};
		a.utils.strings.trim = function(b) {
			return b.replace(/^\s*/, "").replace(/\s*$/, "")
		};
		a.utils.strings.pad = function(c, d, b) {
			if (!b) {
				b = "0"
			}
			while (c.length < d) {
				c = b + c
			}
			return c
		};
		a.utils.strings.serialize = function(b) {
			if (b == null) {
				return null
			} else {
				if (b == "true") {
					return true
				} else {
					if (b == "false") {
						return false
					} else {
						if (isNaN(Number(b)) || b.length > 5 || b.length == 0) {
							return b
						} else {
							return Number(b)
						}
					}
				}
			}
		};
		a.utils.strings.seconds = function(d) {
			d = d.replace(",", ".");
			var b = d.split(":");
			var c = 0;
			if (d.substr(-1) == "s") {
				c = Number(d.substr(0, d.length - 1))
			} else {
				if (d.substr(-1) == "m") {
					c = Number(d.substr(0, d.length - 1)) * 60
				} else {
					if (d.substr(-1) == "h") {
						c = Number(d.substr(0, d.length - 1)) * 3600
					} else {
						if (b.length > 1) {
							c = Number(b[b.length - 1]);
							c += Number(b[b.length - 2]) * 60;
							if (b.length == 3) {
								c += Number(b[b.length - 3]) * 3600
							}
						} else {
							c = Number(d)
						}
					}
				}
			}
			return c
		};
		a.utils.strings.xmlAttribute = function(b, c) {
			for (var d = 0; d < b.attributes.length; d++) {
				if (b.attributes[d].name && b.attributes[d].name.toLowerCase() == c.toLowerCase()) {
					return b.attributes[d].value.toString()
				}
			}
			return ""
		};
		a.utils.strings.jsonToString = function(f) {
			var h = h || {};
			if (h && h.stringify) {
				return h.stringify(f)
			}
			var c = typeof(f);
			if (c != "object" || f === null) {
				if (c == "string") {
					f = '"' + f.replace(/"/g, '\\"') + '"'
				} else {
					return String(f)
				}
			} else {
				var g = [],
					b = (f && f.constructor == Array);
				for (var d in f) {
					var e = f[d];
					switch (typeof(e)) {
						case "string":
							e = '"' + e.replace(/"/g, '\\"') + '"';
							break;
						case "object":
							if (a.utils.exists(e)) {
								e = a.utils.strings.jsonToString(e)
							}
							break
					}
					if (b) {
						if (typeof(e) != "function") {
							g.push(String(e))
						}
					} else {
						if (typeof(e) != "function") {
							g.push('"' + d + '":' + String(e))
						}
					}
				}
				if (b) {
					return "[" + String(g) + "]"
				} else {
					return "{" + String(g) + "}"
				}
			}
		}
	})(jwplayer);
	(function(c) {
		var d = new RegExp(/^(#|0x)[0-9a-fA-F]{3,6}/);
		c.utils.typechecker = function(g, f) {
			f = !c.utils.exists(f) ? b(g) : f;
			return e(g, f)
		};

		function b(f) {
			var g = ["true", "false", "t", "f"];
			if (g.toString().indexOf(f.toLowerCase().replace(" ", "")) >= 0) {
				return "boolean"
			} else {
				if (d.test(f)) {
					return "color"
				} else {
					if (!isNaN(parseInt(f, 10)) && parseInt(f, 10).toString().length == f.length) {
						return "integer"
					} else {
						if (!isNaN(parseFloat(f)) && parseFloat(f).toString().length == f.length) {
							return "float"
						}
					}
				}
			}
			return "string"
		}
		function e(g, f) {
			if (!c.utils.exists(f)) {
				return g
			}
			switch (f) {
				case "color":
					if (g.length > 0) {
						return a(g)
					}
					return null;
				case "integer":
					return parseInt(g, 10);
				case "float":
					return parseFloat(g);
				case "boolean":
					if (g.toLowerCase() == "true") {
						return true
					} else {
						if (g == "1") {
							return true
						}
					}
					return false
			}
			return g
		}
		function a(f) {
			switch (f.toLowerCase()) {
				case "blue":
					return parseInt("0000FF", 16);
				case "green":
					return parseInt("00FF00", 16);
				case "red":
					return parseInt("FF0000", 16);
				case "cyan":
					return parseInt("00FFFF", 16);
				case "magenta":
					return parseInt("FF00FF", 16);
				case "yellow":
					return parseInt("FFFF00", 16);
				case "black":
					return parseInt("000000", 16);
				case "white":
					return parseInt("FFFFFF", 16);
				default:
					f = f.replace(/(#|0x)?([0-9A-F]{3,6})$/gi, "$2");
					if (f.length == 3) {
						f = f.charAt(0) + f.charAt(0) + f.charAt(1) + f.charAt(1) + f.charAt(2) + f.charAt(2)
					}
					return parseInt(f, 16)
			}
			return parseInt("000000", 16)
		}
	})(jwplayer);
	(function(a) {
		a.utils.parsers = function() {};
		a.utils.parsers.localName = function(b) {
			if (!b) {
				return ""
			} else {
				if (b.localName) {
					return b.localName
				} else {
					if (b.baseName) {
						return b.baseName
					} else {
						return ""
					}
				}
			}
		};
		a.utils.parsers.textContent = function(b) {
			if (!b) {
				return ""
			} else {
				if (b.textContent) {
					return b.textContent
				} else {
					if (b.text) {
						return b.text
					} else {
						return ""
					}
				}
			}
		}
	})(jwplayer);
	(function(a) {
		a.utils.parsers.jwparser = function() {};
		a.utils.parsers.jwparser.PREFIX = "jwplayer";
		a.utils.parsers.jwparser.parseEntry = function(c, d) {
			for (var b = 0; b < c.childNodes.length; b++) {
				if (c.childNodes[b].prefix == a.utils.parsers.jwparser.PREFIX) {
					d[a.utils.parsers.localName(c.childNodes[b])] = a.utils.strings.serialize(a.utils.parsers.textContent(c.childNodes[b]));
					if (a.utils.parsers.localName(c.childNodes[b]) == "file" && d.levels) {
						delete d.levels
					}
				}
				if (!d.file && String(d.link).toLowerCase().indexOf("youtube") > -1) {
					d.file = d.link
				}
			}
			return d
		};
		a.utils.parsers.jwparser.getProvider = function(c) {
			if (c.type) {
				return c.type
			} else {
				if (c.file.indexOf("youtube.com/w") > -1 || c.file.indexOf("youtube.com/v") > -1 || c.file.indexOf("youtu.be/") > -1) {
					return "youtube"
				} else {
					if (c.streamer && c.streamer.indexOf("rtmp") == 0) {
						return "rtmp"
					} else {
						if (c.streamer && c.streamer.indexOf("http") == 0) {
							return "http"
						} else {
							var b = a.utils.strings.extension(c.file);
							if (extensions.hasOwnProperty(b)) {
								return extensions[b]
							}
						}
					}
				}
			}
			return ""
		}
	})(jwplayer);
	(function(a) {
		a.utils.parsers.mediaparser = function() {};
		a.utils.parsers.mediaparser.PREFIX = "media";
		a.utils.parsers.mediaparser.parseGroup = function(d, f) {
			var e = false;
			for (var c = 0; c < d.childNodes.length; c++) {
				if (d.childNodes[c].prefix == a.utils.parsers.mediaparser.PREFIX) {
					if (!a.utils.parsers.localName(d.childNodes[c])) {
						continue
					}
					switch (a.utils.parsers.localName(d.childNodes[c]).toLowerCase()) {
						case "content":
							if (!e) {
								f.file = a.utils.strings.xmlAttribute(d.childNodes[c], "url")
							}
							if (a.utils.strings.xmlAttribute(d.childNodes[c], "duration")) {
								f.duration = a.utils.strings.seconds(a.utils.strings.xmlAttribute(d.childNodes[c], "duration"))
							}
							if (a.utils.strings.xmlAttribute(d.childNodes[c], "start")) {
								f.start = a.utils.strings.seconds(a.utils.strings.xmlAttribute(d.childNodes[c], "start"))
							}
							if (d.childNodes[c].childNodes && d.childNodes[c].childNodes.length > 0) {
								f = a.utils.parsers.mediaparser.parseGroup(d.childNodes[c], f)
							}
							if (a.utils.strings.xmlAttribute(d.childNodes[c], "width") || a.utils.strings.xmlAttribute(d.childNodes[c], "bitrate") || a.utils.strings.xmlAttribute(d.childNodes[c], "url")) {
								if (!f.levels) {
									f.levels = []
								}
								f.levels.push({
									width: a.utils.strings.xmlAttribute(d.childNodes[c], "width"),
									bitrate: a.utils.strings.xmlAttribute(d.childNodes[c], "bitrate"),
									file: a.utils.strings.xmlAttribute(d.childNodes[c], "url")
								})
							}
							break;
						case "title":
							f.title = a.utils.parsers.textContent(d.childNodes[c]);
							break;
						case "description":
							f.description = a.utils.parsers.textContent(d.childNodes[c]);
							break;
						case "keywords":
							f.tags = a.utils.parsers.textContent(d.childNodes[c]);
							break;
						case "thumbnail":
							f.image = a.utils.strings.xmlAttribute(d.childNodes[c], "url");
							break;
						case "credit":
							f.author = a.utils.parsers.textContent(d.childNodes[c]);
							break;
						case "player":
							var b = d.childNodes[c].url;
							if (b.indexOf("youtube.com") >= 0 || b.indexOf("youtu.be") >= 0) {
								e = true;
								f.file = a.utils.strings.xmlAttribute(d.childNodes[c], "url")
							}
							break;
						case "group":
							a.utils.parsers.mediaparser.parseGroup(d.childNodes[c], f);
							break
					}
				}
			}
			return f
		}
	})(jwplayer);
	(function(b) {
		b.utils.parsers.rssparser = function() {};
		b.utils.parsers.rssparser.parse = function(f) {
			var c = [];
			for (var e = 0; e < f.childNodes.length; e++) {
				if (b.utils.parsers.localName(f.childNodes[e]).toLowerCase() == "channel") {
					for (var d = 0; d < f.childNodes[e].childNodes.length; d++) {
						if (b.utils.parsers.localName(f.childNodes[e].childNodes[d]).toLowerCase() == "item") {
							c.push(a(f.childNodes[e].childNodes[d]))
						}
					}
				}
			}
			return c
		};

		function a(d) {
			var e = {};
			for (var c = 0; c < d.childNodes.length; c++) {
				if (!b.utils.parsers.localName(d.childNodes[c])) {
					continue
				}
				switch (b.utils.parsers.localName(d.childNodes[c]).toLowerCase()) {
					case "enclosure":
						e.file = b.utils.strings.xmlAttribute(d.childNodes[c], "url");
						break;
					case "title":
						e.title = b.utils.parsers.textContent(d.childNodes[c]);
						break;
					case "pubdate":
						e.date = b.utils.parsers.textContent(d.childNodes[c]);
						break;
					case "description":
						e.description = b.utils.parsers.textContent(d.childNodes[c]);
						break;
					case "link":
						e.link = b.utils.parsers.textContent(d.childNodes[c]);
						break;
					case "category":
						if (e.tags) {
							e.tags += b.utils.parsers.textContent(d.childNodes[c])
						} else {
							e.tags = b.utils.parsers.textContent(d.childNodes[c])
						}
						break
				}
			}
			e = b.utils.parsers.mediaparser.parseGroup(d, e);
			e = b.utils.parsers.jwparser.parseEntry(d, e);
			return new b.html5.playlistitem(e)
		}
	})(jwplayer);
	(function(a) {
		var c = {};
		var b = {};
		a.plugins = function() {};
		a.plugins.loadPlugins = function(e, d) {
			b[e] = new a.plugins.pluginloader(new a.plugins.model(c), d);
			return b[e]
		};
		a.plugins.registerPlugin = function(h, f, e) {
			var d = a.utils.getPluginName(h);
			if (c[d]) {
				c[d].registerPlugin(h, f, e)
			} else {
				a.utils.log("A plugin (" + h + ") was registered with the player that was not loaded. Please check your configuration.");
				for (var g in b) {
					b[g].pluginFailed()
				}
			}
		}
	})(jwplayer);
	(function(a) {
		a.plugins.model = function(b) {
			this.addPlugin = function(c) {
				var d = a.utils.getPluginName(c);
				if (!b[d]) {
					b[d] = new a.plugins.plugin(c)
				}
				return b[d]
			}
		}
	})(jwplayer);
	(function(a) {
		a.plugins.pluginmodes = {
			FLASH: "FLASH",
			JAVASCRIPT: "JAVASCRIPT",
			HYBRID: "HYBRID"
		};
		a.plugins.plugin = function(b) {
			var d = "http://lp.longtailvideo.com";
			var j = a.utils.loaderstatus.NEW;
			var k;
			var h;
			var l;
			var c = new a.events.eventdispatcher();
			a.utils.extend(this, c);

			function e() {
				switch (a.utils.getPluginPathType(b)) {
					case a.utils.pluginPathType.ABSOLUTE:
						return b;
					case a.utils.pluginPathType.RELATIVE:
						return a.utils.getAbsolutePath(b, window.location.href);
					case a.utils.pluginPathType.CDN:
						var o = a.utils.getPluginName(b);
						var n = a.utils.getPluginVersion(b);
						var m = (window.location.href.indexOf("https://") == 0) ? d.replace("http://", "https://secure") : d;
						return m + "/" + a.version.split(".")[0] + "/" + o + "/" + o + (n !== "" ? ("-" + n) : "") + ".js"
				}
			}
			function g(m) {
				l = setTimeout(function() {
					j = a.utils.loaderstatus.COMPLETE;
					c.sendEvent(a.events.COMPLETE)
				}, 1000)
			}
			function f(m) {
				j = a.utils.loaderstatus.ERROR;
				c.sendEvent(a.events.ERROR)
			}
			this.load = function() {
				if (j == a.utils.loaderstatus.NEW) {
					if (b.lastIndexOf(".swf") > 0) {
						k = b;
						j = a.utils.loaderstatus.COMPLETE;
						c.sendEvent(a.events.COMPLETE);
						return
					}
					j = a.utils.loaderstatus.LOADING;
					var m = new a.utils.scriptloader(e());
					m.addEventListener(a.events.COMPLETE, g);
					m.addEventListener(a.events.ERROR, f);
					m.load()
				}
			};
			this.registerPlugin = function(o, n, m) {
				if (l) {
					clearTimeout(l);
					l = undefined
				}
				if (n && m) {
					k = m;
					h = n
				} else {
					if (typeof n == "string") {
						k = n
					} else {
						if (typeof n == "function") {
							h = n
						} else {
							if (!n && !m) {
								k = o
							}
						}
					}
				}
				j = a.utils.loaderstatus.COMPLETE;
				c.sendEvent(a.events.COMPLETE)
			};
			this.getStatus = function() {
				return j
			};
			this.getPluginName = function() {
				return a.utils.getPluginName(b)
			};
			this.getFlashPath = function() {
				if (k) {
					switch (a.utils.getPluginPathType(k)) {
						case a.utils.pluginPathType.ABSOLUTE:
							return k;
						case a.utils.pluginPathType.RELATIVE:
							if (b.lastIndexOf(".swf") > 0) {
								return a.utils.getAbsolutePath(k, window.location.href)
							}
							return a.utils.getAbsolutePath(k, e());
						case a.utils.pluginPathType.CDN:
							if (k.indexOf("-") > -1) {
								return k + "h"
							}
							return k + "-h"
					}
				}
				return null
			};
			this.getJS = function() {
				return h
			};
			this.getPluginmode = function() {
				if (typeof k != "undefined" && typeof h != "undefined") {
					return a.plugins.pluginmodes.HYBRID
				} else {
					if (typeof k != "undefined") {
						return a.plugins.pluginmodes.FLASH
					} else {
						if (typeof h != "undefined") {
							return a.plugins.pluginmodes.JAVASCRIPT
						}
					}
				}
			};
			this.getNewInstance = function(n, m, o) {
				return new h(n, m, o)
			};
			this.getURL = function() {
				return b
			}
		}
	})(jwplayer);
	(function(a) {
		a.plugins.pluginloader = function(h, e) {
			var g = {};
			var k = a.utils.loaderstatus.NEW;
			var d = false;
			var b = false;
			var c = new a.events.eventdispatcher();
			a.utils.extend(this, c);

			function f() {
				if (!b) {
					b = true;
					k = a.utils.loaderstatus.COMPLETE;
					c.sendEvent(a.events.COMPLETE)
				}
			}
			function j() {
				if (!b) {
					var m = 0;
					for (plugin in g) {
						var l = g[plugin].getStatus();
						if (l == a.utils.loaderstatus.LOADING || l == a.utils.loaderstatus.NEW) {
							m++
						}
					}
					if (m == 0) {
						f()
					}
				}
			}
			this.setupPlugins = function(n, l, s) {
				var m = {
					length: 0,
					plugins: {}
				};
				var p = {
					length: 0,
					plugins: {}
				};
				for (var o in g) {
					var q = g[o].getPluginName();
					if (g[o].getFlashPath()) {
						m.plugins[g[o].getFlashPath()] = l.plugins[o];
						m.plugins[g[o].getFlashPath()].pluginmode = g[o].getPluginmode();
						m.length++
					}
					if (g[o].getJS()) {
						var r = document.createElement("div");
						r.id = n.id + "_" + q;
						r.style.position = "absolute";
						r.style.zIndex = p.length + 10;
						p.plugins[q] = g[o].getNewInstance(n, l.plugins[o], r);
						p.length++;
						if (typeof p.plugins[q].resize != "undefined") {
							n.onReady(s(p.plugins[q], r, true));
							n.onResize(s(p.plugins[q], r))
						}
					}
				}
				n.plugins = p.plugins;
				return m
			};
			this.load = function() {
				k = a.utils.loaderstatus.LOADING;
				d = true;
				for (var l in e) {
					if (a.utils.exists(l)) {
						g[l] = h.addPlugin(l);
						g[l].addEventListener(a.events.COMPLETE, j);
						g[l].addEventListener(a.events.ERROR, j)
					}
				}
				for (l in g) {
					g[l].load()
				}
				d = false;
				j()
			};
			this.pluginFailed = function() {
				f()
			};
			this.getStatus = function() {
				return k
			}
		}
	})(jwplayer);
	(function(b) {
		var a = [];
		b.api = function(d) {
			this.container = d;
			this.id = d.id;
			var m = {};
			var t = {};
			var p = {};
			var c = [];
			var g = undefined;
			var k = false;
			var h = [];
			var r = undefined;
			var o = b.utils.getOuterHTML(d);
			var s = {};
			var j = {};
			this.getBuffer = function() {
				return this.callInternal("jwGetBuffer")
			};
			this.getContainer = function() {
				return this.container
			};

			function e(v, u) {
				return function(A, w, x, y) {
					if (v.renderingMode == "flash" || v.renderingMode == "html5") {
						var z;
						if (w) {
							j[A] = w;
							z = "jwplayer('" + v.id + "').callback('" + A + "')"
						} else {
							if (!w && j[A]) {
								delete j[A]
							}
						}
						g.jwDockSetButton(A, z, x, y)
					}
					return u
				}
			}
			this.getPlugin = function(u) {
				var w = this;
				var v = {};
				if (u == "dock") {
					return b.utils.extend(v, {
						setButton: e(w, v),
						show: function() {
							w.callInternal("jwDockShow");
							return v
						},
						hide: function() {
							w.callInternal("jwDockHide");
							return v
						},
						onShow: function(x) {
							w.componentListener("dock", b.api.events.JWPLAYER_COMPONENT_SHOW, x);
							return v
						},
						onHide: function(x) {
							w.componentListener("dock", b.api.events.JWPLAYER_COMPONENT_HIDE, x);
							return v
						}
					})
				} else {
					if (u == "controlbar") {
						return b.utils.extend(v, {
							show: function() {
								w.callInternal("jwControlbarShow");
								return v
							},
							hide: function() {
								w.callInternal("jwControlbarHide");
								return v
							},
							onShow: function(x) {
								w.componentListener("controlbar", b.api.events.JWPLAYER_COMPONENT_SHOW, x);
								return v
							},
							onHide: function(x) {
								w.componentListener("controlbar", b.api.events.JWPLAYER_COMPONENT_HIDE, x);
								return v
							}
						})
					} else {
						if (u == "display") {
							return b.utils.extend(v, {
								show: function() {
									w.callInternal("jwDisplayShow");
									return v
								},
								hide: function() {
									w.callInternal("jwDisplayHide");
									return v
								},
								onShow: function(x) {
									w.componentListener("display", b.api.events.JWPLAYER_COMPONENT_SHOW, x);
									return v
								},
								onHide: function(x) {
									w.componentListener("display", b.api.events.JWPLAYER_COMPONENT_HIDE, x);
									return v
								}
							})
						} else {
							return this.plugins[u]
						}
					}
				}
			};
			this.callback = function(u) {
				if (j[u]) {
					return j[u]()
				}
			};
			this.getDuration = function() {
				return this.callInternal("jwGetDuration")
			};
			this.getFullscreen = function() {
				return this.callInternal("jwGetFullscreen")
			};
			this.getHeight = function() {
				return this.callInternal("jwGetHeight")
			};
			this.getLockState = function() {
				return this.callInternal("jwGetLockState")
			};
			this.getMeta = function() {
				return this.getItemMeta()
			};
			this.getMute = function() {
				return this.callInternal("jwGetMute")
			};
			this.getPlaylist = function() {
				var v = this.callInternal("jwGetPlaylist");
				if (this.renderingMode == "flash") {
					b.utils.deepReplaceKeyName(v, ["__dot__", "__spc__", "__dsh__"], [".", " ", "-"])
				}
				for (var u = 0; u < v.length; u++) {
					if (!b.utils.exists(v[u].index)) {
						v[u].index = u
					}
				}
				return v
			};
			this.getPlaylistItem = function(u) {
				if (!b.utils.exists(u)) {
					u = this.getCurrentItem()
				}
				return this.getPlaylist()[u]
			};
			this.getPosition = function() {
				return this.callInternal("jwGetPosition")
			};
			this.getRenderingMode = function() {
				return this.renderingMode
			};
			this.getState = function() {
				return this.callInternal("jwGetState")
			};
			this.getVolume = function() {
				return this.callInternal("jwGetVolume")
			};
			this.getWidth = function() {
				return this.callInternal("jwGetWidth")
			};
			this.setFullscreen = function(u) {
				if (!b.utils.exists(u)) {
					this.callInternal("jwSetFullscreen", !this.callInternal("jwGetFullscreen"))
				} else {
					this.callInternal("jwSetFullscreen", u)
				}
				return this
			};
			this.setMute = function(u) {
				if (!b.utils.exists(u)) {
					this.callInternal("jwSetMute", !this.callInternal("jwGetMute"))
				} else {
					this.callInternal("jwSetMute", u)
				}
				return this
			};
			this.lock = function() {
				return this
			};
			this.unlock = function() {
				return this
			};
			this.load = function(u) {
				this.callInternal("jwLoad", u);
				return this
			};
			this.playlistItem = function(u) {
				this.callInternal("jwPlaylistItem", u);
				return this
			};
			this.playlistPrev = function() {
				this.callInternal("jwPlaylistPrev");
				return this
			};
			this.playlistNext = function() {
				this.callInternal("jwPlaylistNext");
				return this
			};
			this.resize = function(v, u) {
				if (this.renderingMode == "html5") {
					g.jwResize(v, u)
				} else {
					this.container.width = v;
					this.container.height = u;
					var w = document.getElementById(this.id + "_wrapper");
					if (w) {
						w.style.width = v + "px";
						w.style.height = u + "px"
					}
				}
				return this
			};
			this.play = function(u) {
				if (typeof u == "undefined") {
					u = this.getState();
					if (u == b.api.events.state.PLAYING || u == b.api.events.state.BUFFERING) {
						this.callInternal("jwPause")
					} else {
						this.callInternal("jwPlay")
					}
				} else {
					this.callInternal("jwPlay", u)
				}
				return this
			};
			this.pause = function(u) {
				if (typeof u == "undefined") {
					u = this.getState();
					if (u == b.api.events.state.PLAYING || u == b.api.events.state.BUFFERING) {
						this.callInternal("jwPause")
					} else {
						this.callInternal("jwPlay")
					}
				} else {
					this.callInternal("jwPause", u)
				}
				return this
			};
			this.stop = function() {
				this.callInternal("jwStop");
				return this
			};
			this.seek = function(u) {
				this.callInternal("jwSeek", u);
				return this
			};
			this.setVolume = function(u) {
				this.callInternal("jwSetVolume", u);
				return this
			};
			this.loadInstream = function(v, u) {
				r = new b.api.instream(this, g, v, u);
				return r
			};
			this.onBufferChange = function(u) {
				return this.eventListener(b.api.events.JWPLAYER_MEDIA_BUFFER, u)
			};
			this.onBufferFull = function(u) {
				return this.eventListener(b.api.events.JWPLAYER_MEDIA_BUFFER_FULL, u)
			};
			this.onError = function(u) {
				return this.eventListener(b.api.events.JWPLAYER_ERROR, u)
			};
			this.onFullscreen = function(u) {
				return this.eventListener(b.api.events.JWPLAYER_FULLSCREEN, u)
			};
			this.onMeta = function(u) {
				return this.eventListener(b.api.events.JWPLAYER_MEDIA_META, u)
			};
			this.onMute = function(u) {
				return this.eventListener(b.api.events.JWPLAYER_MEDIA_MUTE, u)
			};
			this.onPlaylist = function(u) {
				return this.eventListener(b.api.events.JWPLAYER_PLAYLIST_LOADED, u)
			};
			this.onPlaylistItem = function(u) {
				return this.eventListener(b.api.events.JWPLAYER_PLAYLIST_ITEM, u)
			};
			this.onReady = function(u) {
				return this.eventListener(b.api.events.API_READY, u)
			};
			this.onResize = function(u) {
				return this.eventListener(b.api.events.JWPLAYER_RESIZE, u)
			};
			this.onComplete = function(u) {
				return this.eventListener(b.api.events.JWPLAYER_MEDIA_COMPLETE, u)
			};
			this.onSeek = function(u) {
				return this.eventListener(b.api.events.JWPLAYER_MEDIA_SEEK, u)
			};
			this.onTime = function(u) {
				return this.eventListener(b.api.events.JWPLAYER_MEDIA_TIME, u)
			};
			this.onVolume = function(u) {
				return this.eventListener(b.api.events.JWPLAYER_MEDIA_VOLUME, u)
			};
			this.onBeforePlay = function(u) {
				return this.eventListener(b.api.events.JWPLAYER_MEDIA_BEFOREPLAY, u)
			};
			this.onBeforeComplete = function(u) {
				return this.eventListener(b.api.events.JWPLAYER_MEDIA_BEFORECOMPLETE, u)
			};
			this.onBuffer = function(u) {
				return this.stateListener(b.api.events.state.BUFFERING, u)
			};
			this.onPause = function(u) {
				return this.stateListener(b.api.events.state.PAUSED, u)
			};
			this.onPlay = function(u) {
				return this.stateListener(b.api.events.state.PLAYING, u)
			};
			this.onIdle = function(u) {
				return this.stateListener(b.api.events.state.IDLE, u)
			};
			this.remove = function() {
				if (!k) {
					throw "Cannot call remove() before player is ready";
					return
				}
				q(this)
			};

			function q(u) {
				h = [];
				if (b.utils.getOuterHTML(u.container) != o) {
					b.api.destroyPlayer(u.id, o)
				}
			}
			this.setup = function(v) {
				if (b.embed) {
					var u = this.id;
					q(this);
					var w = b(u);
					w.config = v;
					return new b.embed(w)
				}
				return this
			};
			this.registerPlugin = function(w, v, u) {
				b.plugins.registerPlugin(w, v, u)
			};
			this.setPlayer = function(u, v) {
				g = u;
				this.renderingMode = v
			};
			this.stateListener = function(u, v) {
				if (!t[u]) {
					t[u] = [];
					this.eventListener(b.api.events.JWPLAYER_PLAYER_STATE, f(u))
				}
				t[u].push(v);
				return this
			};
			this.detachMedia = function() {
				if (this.renderingMode == "html5") {
					return this.callInternal("jwDetachMedia")
				}
			};
			this.attachMedia = function() {
				if (this.renderingMode == "html5") {
					return this.callInternal("jwAttachMedia")
				}
			};

			function f(u) {
				return function(w) {
					var v = w.newstate,
						y = w.oldstate;
					if (v == u) {
						var x = t[v];
						if (x) {
							for (var z = 0; z < x.length; z++) {
								if (typeof x[z] == "function") {
									x[z].call(this, {
										oldstate: y,
										newstate: v
									})
								}
							}
						}
					}
				}
			}
			this.componentListener = function(u, v, w) {
				if (!p[u]) {
					p[u] = {}
				}
				if (!p[u][v]) {
					p[u][v] = [];
					this.eventListener(v, l(u, v))
				}
				p[u][v].push(w);
				return this
			};

			function l(u, v) {
				return function(x) {
					if (u == x.component) {
						var w = p[u][v];
						if (w) {
							for (var y = 0; y < w.length; y++) {
								if (typeof w[y] == "function") {
									w[y].call(this, x)
								}
							}
						}
					}
				}
			}
			this.addInternalListener = function(u, v) {
				try {
					u.jwAddEventListener(v, 'function(dat) { jwplayer("' + this.id + '").dispatchEvent("' + v + '", dat); }')
				} catch (w) {
					b.utils.log("Could not add internal listener")
				}
			};
			this.eventListener = function(u, v) {
				if (!m[u]) {
					m[u] = [];
					if (g && k) {
						this.addInternalListener(g, u)
					}
				}
				m[u].push(v);
				return this
			};
			this.dispatchEvent = function(w) {
				if (m[w]) {
					var v = _utils.translateEventResponse(w, arguments[1]);
					for (var u = 0; u < m[w].length; u++) {
						if (typeof m[w][u] == "function") {
							m[w][u].call(this, v)
						}
					}
				}
			};
			this.dispatchInstreamEvent = function(u) {
				if (r) {
					r.dispatchEvent(u, arguments)
				}
			};
			this.callInternal = function() {
				if (k) {
					var w = arguments[0],
						u = [];
					for (var v = 1; v < arguments.length; v++) {
						u.push(arguments[v])
					}
					if (typeof g != "undefined" && typeof g[w] == "function") {
						if (u.length == 2) {
							return (g[w])(u[0], u[1])
						} else {
							if (u.length == 1) {
								return (g[w])(u[0])
							} else {
								return (g[w])()
							}
						}
					}
					return null
				} else {
					h.push(arguments)
				}
			};
			this.playerReady = function(v) {
				k = true;
				if (!g) {
					this.setPlayer(document.getElementById(v.id))
				}
				this.container = document.getElementById(this.id);
				for (var u in m) {
					this.addInternalListener(g, u)
				}
				this.eventListener(b.api.events.JWPLAYER_PLAYLIST_ITEM, function(w) {
					s = {}
				});
				this.eventListener(b.api.events.JWPLAYER_MEDIA_META, function(w) {
					b.utils.extend(s, w.metadata)
				});
				this.dispatchEvent(b.api.events.API_READY);
				while (h.length > 0) {
					this.callInternal.apply(this, h.shift())
				}
			};
			this.getItemMeta = function() {
				return s
			};
			this.getCurrentItem = function() {
				return this.callInternal("jwGetPlaylistIndex")
			};

			function n(w, y, x) {
				var u = [];
				if (!y) {
					y = 0
				}
				if (!x) {
					x = w.length - 1
				}
				for (var v = y; v <= x; v++) {
					u.push(w[v])
				}
				return u
			}
			return this
		};
		b.api.selectPlayer = function(d) {
			var c;
			if (!b.utils.exists(d)) {
				d = 0
			}
			if (d.nodeType) {
				c = d
			} else {
				if (typeof d == "string") {
					c = document.getElementById(d)
				}
			}
			if (c) {
				var e = b.api.playerById(c.id);
				if (e) {
					return e
				} else {
					return b.api.addPlayer(new b.api(c))
				}
			} else {
				if (typeof d == "number") {
					return b.getPlayers()[d]
				}
			}
			return null
		};
		b.api.events = {
			API_READY: "jwplayerAPIReady",
			JWPLAYER_READY: "jwplayerReady",
			JWPLAYER_FULLSCREEN: "jwplayerFullscreen",
			JWPLAYER_RESIZE: "jwplayerResize",
			JWPLAYER_ERROR: "jwplayerError",
			JWPLAYER_MEDIA_BEFOREPLAY: "jwplayerMediaBeforePlay",
			JWPLAYER_MEDIA_BEFORECOMPLETE: "jwplayerMediaBeforeComplete",
			JWPLAYER_COMPONENT_SHOW: "jwplayerComponentShow",
			JWPLAYER_COMPONENT_HIDE: "jwplayerComponentHide",
			JWPLAYER_MEDIA_BUFFER: "jwplayerMediaBuffer",
			JWPLAYER_MEDIA_BUFFER_FULL: "jwplayerMediaBufferFull",
			JWPLAYER_MEDIA_ERROR: "jwplayerMediaError",
			JWPLAYER_MEDIA_LOADED: "jwplayerMediaLoaded",
			JWPLAYER_MEDIA_COMPLETE: "jwplayerMediaComplete",
			JWPLAYER_MEDIA_SEEK: "jwplayerMediaSeek",
			JWPLAYER_MEDIA_TIME: "jwplayerMediaTime",
			JWPLAYER_MEDIA_VOLUME: "jwplayerMediaVolume",
			JWPLAYER_MEDIA_META: "jwplayerMediaMeta",
			JWPLAYER_MEDIA_MUTE: "jwplayerMediaMute",
			JWPLAYER_PLAYER_STATE: "jwplayerPlayerState",
			JWPLAYER_PLAYLIST_LOADED: "jwplayerPlaylistLoaded",
			JWPLAYER_PLAYLIST_ITEM: "jwplayerPlaylistItem",
			JWPLAYER_INSTREAM_CLICK: "jwplayerInstreamClicked",
			JWPLAYER_INSTREAM_DESTROYED: "jwplayerInstreamDestroyed"
		};
		b.api.events.state = {
			BUFFERING: "BUFFERING",
			IDLE: "IDLE",
			PAUSED: "PAUSED",
			PLAYING: "PLAYING"
		};
		b.api.playerById = function(d) {
			for (var c = 0; c < a.length; c++) {
				if (a[c].id == d) {
					return a[c]
				}
			}
			return null
		};
		b.api.addPlayer = function(c) {
			for (var d = 0; d < a.length; d++) {
				if (a[d] == c) {
					return c
				}
			}
			a.push(c);
			return c
		};
		b.api.destroyPlayer = function(h, d) {
			var g = -1;
			for (var l = 0; l < a.length; l++) {
				if (a[l].id == h) {
					g = l;
					continue
				}
			}
			if (g >= 0) {
				try {
					a[g].callInternal("jwDestroy")
				} catch (k) {}
				var c = document.getElementById(a[g].id);
				if (document.getElementById(a[g].id + "_wrapper")) {
					c = document.getElementById(a[g].id + "_wrapper")
				}
				if (c) {
					if (d) {
						b.utils.setOuterHTML(c, d)
					} else {
						var j = document.createElement("div");
						var f = c.id;
						if (c.id.indexOf("_wrapper") == c.id.length - 8) {
							newID = c.id.substring(0, c.id.length - 8)
						}
						j.setAttribute("id", f);
						c.parentNode.replaceChild(j, c)
					}
				}
				a.splice(g, 1)
			}
			return null
		};
		b.getPlayers = function() {
			return a.slice(0)
		}
	})(jwplayer);
	var _userPlayerReady = (typeof playerReady == "function") ? playerReady : undefined;
	playerReady = function(b) {
		var a = jwplayer.api.playerById(b.id);
		if (a) {
			a.playerReady(b)
		} else {
			jwplayer.api.selectPlayer(b.id).playerReady(b)
		}
		if (_userPlayerReady) {
			_userPlayerReady.call(this, b)
		}
	};
	(function(a) {
		a.api.instream = function(c, j, n, q) {
			var h = c;
			var b = j;
			var g = n;
			var k = q;
			var e = {};
			var p = {};

			function f() {
				h.callInternal("jwLoadInstream", n, q)
			}
			function m(r, s) {
				b.jwInstreamAddEventListener(s, 'function(dat) { jwplayer("' + h.id + '").dispatchInstreamEvent("' + s + '", dat); }')
			}
			function d(r, s) {
				if (!e[r]) {
					e[r] = [];
					m(b, r)
				}
				e[r].push(s);
				return this
			}
			function o(r, s) {
				if (!p[r]) {
					p[r] = [];
					d(a.api.events.JWPLAYER_PLAYER_STATE, l(r))
				}
				p[r].push(s);
				return this
			}
			function l(r) {
				return function(t) {
					var s = t.newstate,
						v = t.oldstate;
					if (s == r) {
						var u = p[s];
						if (u) {
							for (var w = 0; w < u.length; w++) {
								if (typeof u[w] == "function") {
									u[w].call(this, {
										oldstate: v,
										newstate: s,
										type: t.type
									})
								}
							}
						}
					}
				}
			}
			this.dispatchEvent = function(u, t) {
				if (e[u]) {
					var s = _utils.translateEventResponse(u, t[1]);
					for (var r = 0; r < e[u].length; r++) {
						if (typeof e[u][r] == "function") {
							e[u][r].call(this, s)
						}
					}
				}
			};
			this.onError = function(r) {
				return d(a.api.events.JWPLAYER_ERROR, r)
			};
			this.onFullscreen = function(r) {
				return d(a.api.events.JWPLAYER_FULLSCREEN, r)
			};
			this.onMeta = function(r) {
				return d(a.api.events.JWPLAYER_MEDIA_META, r)
			};
			this.onMute = function(r) {
				return d(a.api.events.JWPLAYER_MEDIA_MUTE, r)
			};
			this.onComplete = function(r) {
				return d(a.api.events.JWPLAYER_MEDIA_COMPLETE, r)
			};
			this.onSeek = function(r) {
				return d(a.api.events.JWPLAYER_MEDIA_SEEK, r)
			};
			this.onTime = function(r) {
				return d(a.api.events.JWPLAYER_MEDIA_TIME, r)
			};
			this.onVolume = function(r) {
				return d(a.api.events.JWPLAYER_MEDIA_VOLUME, r)
			};
			this.onBuffer = function(r) {
				return o(a.api.events.state.BUFFERING, r)
			};
			this.onPause = function(r) {
				return o(a.api.events.state.PAUSED, r)
			};
			this.onPlay = function(r) {
				return o(a.api.events.state.PLAYING, r)
			};
			this.onIdle = function(r) {
				return o(a.api.events.state.IDLE, r)
			};
			this.onInstreamClick = function(r) {
				return d(a.api.events.JWPLAYER_INSTREAM_CLICK, r)
			};
			this.onInstreamDestroyed = function(r) {
				return d(a.api.events.JWPLAYER_INSTREAM_DESTROYED, r)
			};
			this.play = function(r) {
				b.jwInstreamPlay(r)
			};
			this.pause = function(r) {
				b.jwInstreamPause(r)
			};
			this.seek = function(r) {
				b.jwInstreamSeek(r)
			};
			this.destroy = function() {
				b.jwInstreamDestroy()
			};
			this.getState = function() {
				return b.jwInstreamGetState()
			};
			this.getDuration = function() {
				return b.jwInstreamGetDuration()
			};
			this.getPosition = function() {
				return b.jwInstreamGetPosition()
			};
			f()
		}
	})(jwplayer);
	(function(a) {
		var c = a.utils;
		a.embed = function(h) {
			var k = {
				width: 400,
				height: 300,
				components: {
					controlbar: {
						position: "over"
					}
				}
			};
			var g = c.mediaparser.parseMedia(h.container);
			var f = new a.embed.config(c.extend(k, g, h.config), this);
			var j = a.plugins.loadPlugins(h.id, f.plugins);

			function d(n, m) {
				for (var l in m) {
					if (typeof n[l] == "function") {
						(n[l]).call(n, m[l])
					}
				}
			}
			function e() {
				if (j.getStatus() == c.loaderstatus.COMPLETE) {
					for (var n = 0; n < f.modes.length; n++) {
						if (f.modes[n].type && a.embed[f.modes[n].type]) {
							var p = f.modes[n].config;
							var t = f;
							if (p) {
								t = c.extend(c.clone(f), p);
								var s = ["file", "levels", "playlist"];
								for (var m = 0; m < s.length; m++) {
									var q = s[m];
									if (c.exists(p[q])) {
										for (var l = 0; l < s.length; l++) {
											if (l != m) {
												var o = s[l];
												if (c.exists(t[o]) && !c.exists(p[o])) {
													delete t[o]
												}
											}
										}
									}
								}
							}
							var r = new a.embed[f.modes[n].type](document.getElementById(h.id), f.modes[n], t, j, h);
							if (r.supportsConfig()) {
								r.embed();
								d(h, f.events);
								return h
							}
						}
					}
					c.log("No suitable players found");
					new a.embed.logo(c.extend({
						hide: true
					}, f.components.logo), "none", h.id)
				}
			}
			j.addEventListener(a.events.COMPLETE, e);
			j.addEventListener(a.events.ERROR, e);
			j.load();
			return h
		};

		function b() {
			if (!document.body) {
				return setTimeout(b, 15)
			}
			var d = c.selectors.getElementsByTagAndClass("video", "jwplayer");
			for (var e = 0; e < d.length; e++) {
				var f = d[e];
				if (f.id == "") {
					f.id = "jwplayer_" + Math.round(Math.random() * 100000)
				}
				a(f.id).setup({})
			}
		}
		b()
	})(jwplayer);
	(function(e) {
		var k = e.utils;

		function h(m) {
			var l = [{
				type: "flash",
				src: m ? m : "/jwplayer/player.swf"
			}, {
				type: "html5"
			}, {
				type: "download"
			}];
			if (k.isAndroid()) {
				l[0] = l.splice(1, 1, l[0])[0]
			}
			return l
		}
		var a = {
			players: "modes",
			autoplay: "autostart"
		};

		function b(o) {
			var n = o.toLowerCase();
			var m = ["left", "right", "top", "bottom"];
			for (var l = 0; l < m.length; l++) {
				if (n == m[l]) {
					return true
				}
			}
			return false
		}
		function c(m) {
			var l = false;
			l = (m instanceof Array) || (typeof m == "object" && !m.position && !m.size);
			return l
		}
		function j(l) {
			if (typeof l == "string") {
				if (parseInt(l).toString() == l || l.toLowerCase().indexOf("px") > -1) {
					return parseInt(l)
				}
			}
			return l
		}
		var g = ["playlist", "dock", "controlbar", "logo", "display"];

		function f(l) {
			var o = {};
			switch (k.typeOf(l.plugins)) {
				case "object":
					for (var n in l.plugins) {
						o[k.getPluginName(n)] = n
					}
					break;
				case "string":
					var p = l.plugins.split(",");
					for (var m = 0; m < p.length; m++) {
						o[k.getPluginName(p[m])] = p[m]
					}
					break
			}
			return o
		}
		function d(p, o, n, l) {
			if (k.typeOf(p[o]) != "object") {
				p[o] = {}
			}
			var m = p[o][n];
			if (k.typeOf(m) != "object") {
				p[o][n] = m = {}
			}
			if (l) {
				if (o == "plugins") {
					var q = k.getPluginName(n);
					m[l] = p[q + "." + l];
					delete p[q + "." + l]
				} else {
					m[l] = p[n + "." + l];
					delete p[n + "." + l]
				}
			}
		}
		e.embed.deserialize = function(m) {
			var n = f(m);
			for (var l in n) {
				d(m, "plugins", n[l])
			}
			for (var q in m) {
				if (q.indexOf(".") > -1) {
					var p = q.split(".");
					var o = p[0];
					var q = p[1];
					if (k.isInArray(g, o)) {
						d(m, "components", o, q)
					} else {
						if (n[o]) {
							d(m, "plugins", n[o], q)
						}
					}
				}
			}
			return m
		};
		e.embed.config = function(l, v) {
			var u = k.extend({}, l);
			var s;
			if (c(u.playlist)) {
				s = u.playlist;
				delete u.playlist
			}
			u = e.embed.deserialize(u);
			u.height = j(u.height);
			u.width = j(u.width);
			if (typeof u.plugins == "string") {
				var m = u.plugins.split(",");
				if (typeof u.plugins != "object") {
					u.plugins = {}
				}
				for (var q = 0; q < m.length; q++) {
					var r = k.getPluginName(m[q]);
					if (typeof u[r] == "object") {
						u.plugins[m[q]] = u[r];
						delete u[r]
					} else {
						u.plugins[m[q]] = {}
					}
				}
			}
			for (var t = 0; t < g.length; t++) {
				var p = g[t];
				if (k.exists(u[p])) {
					if (typeof u[p] != "object") {
						if (!u.components[p]) {
							u.components[p] = {}
						}
						if (p == "logo") {
							u.components[p].file = u[p]
						} else {
							u.components[p].position = u[p]
						}
						delete u[p]
					} else {
						if (!u.components[p]) {
							u.components[p] = {}
						}
						k.extend(u.components[p], u[p]);
						delete u[p]
					}
				}
				if (typeof u[p + "size"] != "undefined") {
					if (!u.components[p]) {
						u.components[p] = {}
					}
					u.components[p].size = u[p + "size"];
					delete u[p + "size"]
				}
			}
			if (typeof u.icons != "undefined") {
				if (!u.components.display) {
					u.components.display = {}
				}
				u.components.display.icons = u.icons;
				delete u.icons
			}
			for (var o in a) {
				if (u[o]) {
					if (!u[a[o]]) {
						u[a[o]] = u[o]
					}
					delete u[o]
				}
			}
			var n;
			if (u.flashplayer && !u.modes) {
				n = h(u.flashplayer);
				delete u.flashplayer
			} else {
				if (u.modes) {
					if (typeof u.modes == "string") {
						n = h(u.modes)
					} else {
						if (u.modes instanceof Array) {
							n = u.modes
						} else {
							if (typeof u.modes == "object" && u.modes.type) {
								n = [u.modes]
							}
						}
					}
					delete u.modes
				} else {
					n = h()
				}
			}
			u.modes = n;
			if (s) {
				u.playlist = s
			}
			return u
		}
	})(jwplayer);
	(function(a) {
		a.embed.download = function(c, g, b, d, f) {
			this.embed = function() {
				var k = a.utils.extend({}, b);
				var q = {};
				var j = b.width ? b.width : 480;
				if (typeof j != "number") {
					j = parseInt(j, 10)
				}
				var m = b.height ? b.height : 320;
				if (typeof m != "number") {
					m = parseInt(m, 10)
				}
				var u, o, n;
				var s = {};
				if (b.playlist && b.playlist.length) {
					s.file = b.playlist[0].file;
					o = b.playlist[0].image;
					s.levels = b.playlist[0].levels
				} else {
					s.file = b.file;
					o = b.image;
					s.levels = b.levels
				}
				if (s.file) {
					u = s.file
				} else {
					if (s.levels && s.levels.length) {
						u = s.levels[0].file
					}
				}
				n = u ? "pointer" : "auto";
				var l = {
					display: {
						style: {
							cursor: n,
							width: j,
							height: m,
							backgroundColor: "#000",
							position: "relative",
							textDecoration: "none",
							border: "none",
							display: "block"
						}
					},
					display_icon: {
						style: {
							cursor: n,
							position: "absolute",
							display: u ? "block" : "none",
							top: 0,
							left: 0,
							border: 0,
							margin: 0,
							padding: 0,
							zIndex: 3,
							width: 50,
							height: 50,
							backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALdJREFUeNrs18ENgjAYhmFouDOCcQJGcARHgE10BDcgTOIosAGwQOuPwaQeuFRi2p/3Sb6EC5L3QCxZBgAAAOCorLW1zMn65TrlkH4NcV7QNcUQt7Gn7KIhxA+qNIR81spOGkL8oFJDyLJRdosqKDDkK+iX5+d7huzwM40xptMQMkjIOeRGo+VkEVvIPfTGIpKASfYIfT9iCHkHrBEzf4gcUQ56aEzuGK/mw0rHpy4AAACAf3kJMACBxjAQNRckhwAAAABJRU5ErkJggg==)"
						}
					},
					display_iconBackground: {
						style: {
							cursor: n,
							position: "absolute",
							display: u ? "block" : "none",
							top: ((m - 50) / 2),
							left: ((j - 50) / 2),
							border: 0,
							width: 50,
							height: 50,
							margin: 0,
							padding: 0,
							zIndex: 2,
							backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNrszwENADAIA7DhX8ENoBMZ5KR10EryckCJiIiIiIiIiIiIiIiIiIiIiIh8GmkRERERERERERERERERERERERGRHSPAAPlXH1phYpYaAAAAAElFTkSuQmCC)"
						}
					},
					display_image: {
						style: {
							width: j,
							height: m,
							display: o ? "block" : "none",
							position: "absolute",
							cursor: n,
							left: 0,
							top: 0,
							margin: 0,
							padding: 0,
							textDecoration: "none",
							zIndex: 1,
							border: "none"
						}
					}
				};
				var h = function(v, x, y) {
					var w = document.createElement(v);
					if (y) {
						w.id = y
					} else {
						w.id = c.id + "_jwplayer_" + x
					}
					a.utils.css(w, l[x].style);
					return w
				};
				q.display = h("a", "display", c.id);
				if (u) {
					q.display.setAttribute("href", a.utils.getAbsolutePath(u))
				}
				q.display_image = h("img", "display_image");
				q.display_image.setAttribute("alt", "Click to download...");
				if (o) {
					q.display_image.setAttribute("src", a.utils.getAbsolutePath(o))
				}
				if (true) {
					q.display_icon = h("div", "display_icon");
					q.display_iconBackground = h("div", "display_iconBackground");
					q.display.appendChild(q.display_image);
					q.display_iconBackground.appendChild(q.display_icon);
					q.display.appendChild(q.display_iconBackground)
				}
				_css = a.utils.css;
				_hide = function(v) {
					_css(v, {
						display: "none"
					})
				};

				function r(v) {
					_imageWidth = q.display_image.naturalWidth;
					_imageHeight = q.display_image.naturalHeight;
					t()
				}
				function t() {
					a.utils.stretch(a.utils.stretching.UNIFORM, q.display_image, j, m, _imageWidth, _imageHeight)
				}
				q.display_image.onerror = function(v) {
					_hide(q.display_image)
				};
				q.display_image.onload = r;
				c.parentNode.replaceChild(q.display, c);
				var p = (b.plugins && b.plugins.logo) ? b.plugins.logo : {};
				q.display.appendChild(new a.embed.logo(b.components.logo, "download", c.id));
				f.container = document.getElementById(f.id);
				f.setPlayer(q.display, "download")
			};
			this.supportsConfig = function() {
				if (b) {
					var j = a.utils.getFirstPlaylistItemFromConfig(b);
					if (typeof j.file == "undefined" && typeof j.levels == "undefined") {
						return true
					} else {
						if (j.file) {
							return e(j.file, j.provider, j.playlistfile)
						} else {
							if (j.levels && j.levels.length) {
								for (var h = 0; h < j.levels.length; h++) {
									if (j.levels[h].file && e(j.levels[h].file, j.provider, j.playlistfile)) {
										return true
									}
								}
							}
						}
					}
				} else {
					return true
				}
			};

			function e(j, l, h) {
				if (h) {
					return false
				}
				var k = ["image", "sound", "youtube", "http"];
				if (l && (k.toString().indexOf(l) > -1)) {
					return true
				}
				if (!l || (l && l == "video")) {
					var m = a.utils.extension(j);
					if (m && a.utils.extensionmap[m]) {
						return true
					}
				}
				return false
			}
		}
	})(jwplayer);
	(function(a) {
		a.embed.flash = function(f, g, l, e, j) {
			function m(o, n, p) {
				var q = document.createElement("param");
				q.setAttribute("name", n);
				q.setAttribute("value", p);
				o.appendChild(q)
			}
			function k(o, p, n) {
				return function(q) {
					if (n) {
						document.getElementById(j.id + "_wrapper").appendChild(p)
					}
					var s = document.getElementById(j.id).getPluginConfig("display");
					o.resize(s.width, s.height);
					var r = {
						left: s.x,
						top: s.y
					};
					a.utils.css(p, r)
				}
			}
			function d(p) {
				if (!p) {
					return {}
				}
				var r = {};
				for (var o in p) {
					var n = p[o];
					for (var q in n) {
						r[o + "." + q] = n[q]
					}
				}
				return r
			}
			function h(q, p) {
				if (q[p]) {
					var s = q[p];
					for (var o in s) {
						var n = s[o];
						if (typeof n == "string") {
							if (!q[o]) {
								q[o] = n
							}
						} else {
							for (var r in n) {
								if (!q[o + "." + r]) {
									q[o + "." + r] = n[r]
								}
							}
						}
					}
					delete q[p]
				}
			}
			function b(q) {
				if (!q) {
					return {}
				}
				var t = {}, s = [];
				for (var n in q) {
					var p = a.utils.getPluginName(n);
					var o = q[n];
					s.push(n);
					for (var r in o) {
						t[p + "." + r] = o[r]
					}
				}
				t.plugins = s.join(",");
				return t
			}
			function c(p) {
				var n = p.netstreambasepath ? "" : "netstreambasepath=" + encodeURIComponent(window.location.href.split("#")[0]) + "&";
				for (var o in p) {
					if (typeof(p[o]) == "object") {
						n += o + "=" + encodeURIComponent("[[JSON]]" + a.utils.strings.jsonToString(p[o])) + "&"
					} else {
						n += o + "=" + encodeURIComponent(p[o]) + "&"
					}
				}
				return n.substring(0, n.length - 1)
			}
			this.embed = function() {
				l.id = j.id;
				var A;
				var r = a.utils.extend({}, l);
				var o = r.width;
				var y = r.height;
				if (f.id + "_wrapper" == f.parentNode.id) {
					A = document.getElementById(f.id + "_wrapper")
				} else {
					A = document.createElement("div");
					A.id = f.id + "_wrapper";
					a.utils.wrap(f, A);
					a.utils.css(A, {
						position: "relative",
						width: o,
						height: y
					})
				}
				var p = e.setupPlugins(j, r, k);
				if (p.length > 0) {
					a.utils.extend(r, b(p.plugins))
				} else {
					delete r.plugins
				}
				var s = ["height", "width", "modes", "events"];
				for (var v = 0; v < s.length; v++) {
					delete r[s[v]]
				}
				var q = "opaque";
				if (r.wmode) {
					q = r.wmode
				}
				h(r, "components");
				h(r, "providers");
				if (typeof r["dock.position"] != "undefined") {
					if (r["dock.position"].toString().toLowerCase() == "false") {
						r.dock = r["dock.position"];
						delete r["dock.position"]
					}
				}
				var x = a.utils.getCookies();
				for (var n in x) {
					if (typeof(r[n]) == "undefined") {
						r[n] = x[n]
					}
				}
				var z = "#000000";
				var u;
				if (a.utils.isIE()) {
					var w = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" bgcolor="' + z + '" width="100%" height="100%" id="' + f.id + '" name="' + f.id + '" tabindex=0"">';
					w += '<param name="movie" value="' + g.src + '">';
					w += '<param name="allowfullscreen" value="true">';
					w += '<param name="allowscriptaccess" value="always">';
					w += '<param name="seamlesstabbing" value="true">';
					w += '<param name="wmode" value="' + q + '">';
					w += '<param name="flashvars" value="' + c(r) + '">';
					w += "</object>";
					a.utils.setOuterHTML(f, w);
					u = document.getElementById(f.id)
				} else {
					var t = document.createElement("object");
					t.setAttribute("type", "application/x-shockwave-flash");
					t.setAttribute("data", g.src);
					t.setAttribute("width", "100%");
					t.setAttribute("height", "100%");
					t.setAttribute("bgcolor", "#000000");
					t.setAttribute("id", f.id);
					t.setAttribute("name", f.id);
					t.setAttribute("tabindex", 0);
					m(t, "allowfullscreen", "true");
					m(t, "allowscriptaccess", "always");
					m(t, "seamlesstabbing", "true");
					m(t, "wmode", q);
					m(t, "flashvars", c(r));
					f.parentNode.replaceChild(t, f);
					u = t
				}
				j.container = u;
				j.setPlayer(u, "flash")
			};
			this.supportsConfig = function() {
				if (a.utils.hasFlash()) {
					if (l) {
						var o = a.utils.getFirstPlaylistItemFromConfig(l);
						if (typeof o.file == "undefined" && typeof o.levels == "undefined") {
							return true
						} else {
							if (o.file) {
								return flashCanPlay(o.file, o.provider)
							} else {
								if (o.levels && o.levels.length) {
									for (var n = 0; n < o.levels.length; n++) {
										if (o.levels[n].file && flashCanPlay(o.levels[n].file, o.provider)) {
											return true
										}
									}
								}
							}
						}
					} else {
						return true
					}
				}
				return false
			};
			flashCanPlay = function(n, p) {
				var o = ["video", "http", "sound", "image"];
				if (p && (o.toString().indexOf(p) < 0)) {
					return true
				}
				var q = a.utils.extension(n);
				if (!q) {
					return true
				}
				if (a.utils.exists(a.utils.extensionmap[q]) && !a.utils.exists(a.utils.extensionmap[q].flash)) {
					return false
				}
				return true
			}
		}
	})(jwplayer);
	(function(a) {
		a.embed.html5 = function(c, g, b, d, f) {
			function e(j, k, h) {
				return function(l) {
					var m = document.getElementById(c.id + "_displayarea");
					if (h) {
						m.appendChild(k)
					}
					j.resize(m.clientWidth, m.clientHeight);
					k.left = m.style.left;
					k.top = m.style.top
				}
			}
			this.embed = function() {
				if (a.html5) {
					d.setupPlugins(f, b, e);
					c.innerHTML = "";
					var j = a.utils.extend({
						screencolor: "0x000000"
					}, b);
					var h = ["plugins", "modes", "events"];
					for (var k = 0; k < h.length; k++) {
						delete j[h[k]]
					}
					if (j.levels && !j.sources) {
						j.sources = b.levels
					}
					if (j.skin && j.skin.toLowerCase().indexOf(".zip") > 0) {
						j.skin = j.skin.replace(/\.zip/i, ".xml")
					}
					var l = new(a.html5(c)).setup(j);
					f.container = document.getElementById(f.id);
					f.setPlayer(l, "html5")
				} else {
					return null
				}
			};
			this.supportsConfig = function() {
				if ( !! a.vid.canPlayType) {
					if (b) {
						var j = a.utils.getFirstPlaylistItemFromConfig(b);
						if (typeof j.file == "undefined" && typeof j.levels == "undefined") {
							return true
						} else {
							if (j.file) {
								return html5CanPlay(a.vid, j.file, j.provider, j.playlistfile)
							} else {
								if (j.levels && j.levels.length) {
									for (var h = 0; h < j.levels.length; h++) {
										if (j.levels[h].file && html5CanPlay(a.vid, j.levels[h].file, j.provider, j.playlistfile)) {
											return true
										}
									}
								}
							}
						}
					} else {
						return true
					}
				}
				return false
			};
			html5CanPlay = function(k, j, l, h) {
				if (h) {
					return false
				}
				if (l && l == "youtube") {
					return true
				}
				if (l && l != "video" && l != "http" && l != "sound") {
					return false
				}
				if (navigator.userAgent.match(/BlackBerry/i) !== null) {
					return false
				}
				var m = a.utils.extension(j);
				if (!a.utils.exists(m) || !a.utils.exists(a.utils.extensionmap[m])) {
					return true
				}
				if (!a.utils.exists(a.utils.extensionmap[m].html5)) {
					return false
				}
				if (a.utils.isLegacyAndroid() && m.match(/m4v|mp4/)) {
					return true
				}
				return browserCanPlay(k, a.utils.extensionmap[m].html5)
			};
			browserCanPlay = function(j, h) {
				if (!h) {
					return true
				}
				if (j.canPlayType(h)) {
					return true
				} else {
					if (h == "audio/mp3" && navigator.userAgent.match(/safari/i)) {
						return j.canPlayType("audio/mpeg")
					} else {
						return false
					}
				}
			}
		}
	})(jwplayer);
	(function(a) {
		a.embed.logo = function(m, l, d) {
			var j = {
				prefix: "http://l.longtailvideo.com/" + l + "/",
				file: "",
				link: "",
				linktarget: "_top",
				margin: 8,
				out: 0.5,
				over: 1,
				timeout: 5,
				hide: false,
				position: "bottom-left"
			};
			_css = a.utils.css;
			var b;
			var h;
			k();

			function k() {
				o();
				c();
				f()
			}
			function o() {
				if (j.prefix) {
					var q = a.version.split(/\W/).splice(0, 2).join("/");
					if (j.prefix.indexOf(q) < 0) {
						j.prefix += q + "/"
					}
				}
				h = a.utils.extend({}, j, m)
			}
			function p() {
				var s = {
					border: "none",
					textDecoration: "none",
					position: "absolute",
					cursor: "pointer",
					zIndex: 10
				};
				s.display = h.hide ? "none" : "block";
				var r = h.position.toLowerCase().split("-");
				for (var q in r) {
					s[r[q]] = h.margin
				}
				return s
			}
			function c() {
				b = document.createElement("img");
				b.id = d + "_jwplayer_logo";
				b.style.display = "none";
				b.onload = function(q) {
					_css(b, p());
					e()
				};
				if (!h.file) {
					return
				}
				if (h.file.indexOf("http://") === 0) {
					b.src = h.file
				} else {
					b.src = h.prefix + h.file
				}
			}
			if (!h.file) {
				return
			}
			function f() {
				if (h.link) {
					b.onmouseover = g;
					b.onmouseout = e;
					b.onclick = n
				} else {
					this.mouseEnabled = false
				}
			}
			function n(q) {
				if (typeof q != "undefined") {
					q.preventDefault();
					q.stopPropagation()
				}
				if (h.link) {
					window.open(h.link, h.linktarget)
				}
				return
			}
			function e(q) {
				if (h.link) {
					b.style.opacity = h.out
				}
				return
			}
			function g(q) {
				if (h.hide) {
					b.style.opacity = h.over
				}
				return
			}
			return b
		}
	})(jwplayer);
	(function(a) {
		a.html5 = function(b) {
			var c = b;
			this.setup = function(d) {
				a.utils.extend(this, new a.html5.api(c, d));
				return this
			};
			return this
		}
	})(jwplayer);
	(function(a) {
		var d = a.utils;
		var b = d.css;
		var c = d.isIOS();
		a.html5.view = function(n, H, h) {
			var m = n;
			var y = H;
			var j = h;
			var R;
			var g;
			var t;
			var o;
			var F;
			var P;
			var O;
			var E = false;
			var x = false;
			var A, N;
			var f, S, u;

			function L() {
				R = document.createElement("div");
				R.id = y.id;
				R.className = y.className;
				_videowrapper = document.createElement("div");
				_videowrapper.id = R.id + "_video_wrapper";
				y.id = R.id + "_video";
				b(R, {
					position: "relative",
					height: j.height,
					width: j.width,
					padding: 0,
					backgroundColor: U(),
					zIndex: 0
				});

				function U() {
					if (m.skin.getComponentSettings("display") && m.skin.getComponentSettings("display").backgroundcolor) {
						return m.skin.getComponentSettings("display").backgroundcolor
					}
					return parseInt("000000", 16)
				}
				b(y, {
					width: "100%",
					height: "100%",
					top: 0,
					left: 0,
					zIndex: 1,
					margin: "auto",
					display: "block"
				});
				b(_videowrapper, {
					overflow: "hidden",
					position: "absolute",
					top: 0,
					left: 0,
					bottom: 0,
					right: 0
				});
				d.wrap(y, R);
				d.wrap(y, _videowrapper);
				o = document.createElement("div");
				o.id = R.id + "_displayarea";
				R.appendChild(o);
				_instreamArea = document.createElement("div");
				_instreamArea.id = R.id + "_instreamarea";
				b(_instreamArea, {
					overflow: "hidden",
					position: "absolute",
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					zIndex: 100,
					background: "000000",
					display: "none"
				});
				R.appendChild(_instreamArea)
			}
			function K() {
				for (var U = 0; U < j.plugins.order.length; U++) {
					var V = j.plugins.order[U];
					if (d.exists(j.plugins.object[V].getDisplayElement)) {
						j.plugins.object[V].height = d.parseDimension(j.plugins.object[V].getDisplayElement().style.height);
						j.plugins.object[V].width = d.parseDimension(j.plugins.object[V].getDisplayElement().style.width);
						j.plugins.config[V].currentPosition = j.plugins.config[V].position
					}
				}
				v()
			}
			function s(U) {
				x = j.fullscreen
			}
			function p(U) {
				if (S) {
					return
				}
				switch (U.newstate) {
					case a.api.events.state.PLAYING:
						if (j.getMedia() && j.getMedia().hasChrome()) {
							o.style.display = "none"
						}
						break;
					default:
						o.style.display = "block";
						break
				}
				l()
			}
			function v(V) {
				var X = j.getMedia() ? j.getMedia().getDisplayElement() : null;
				if (d.exists(X)) {
					if (O != X) {
						if (O && O.parentNode) {
							O.parentNode.replaceChild(X, O)
						}
						O = X
					}
					for (var U = 0; U < j.plugins.order.length; U++) {
						var W = j.plugins.order[U];
						if (d.exists(j.plugins.object[W].getDisplayElement)) {
							j.plugins.config[W].currentPosition = j.plugins.config[W].position
						}
					}
				}
				G(j.width, j.height)
			}
			this.setup = function() {
				if (j && j.getMedia()) {
					y = j.getMedia().getDisplayElement()
				}
				L();
				K();
				m.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE, p);
				m.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_LOADED, v);
				m.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_BEFOREPLAY, s);
				m.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_META, function(V) {
					l()
				});
				var U;
				if (d.exists(window.onresize)) {
					U = window.onresize
				}
				window.onresize = function(V) {
					if (d.exists(U)) {
						try {
							U(V)
						} catch (X) {}
					}
					if (m.jwGetFullscreen()) {
						if (!B()) {
							var W = d.getBoundingClientRect(document.body);
							j.width = Math.abs(W.left) + Math.abs(W.right);
							j.height = window.innerHeight;
							G(j.width, j.height)
						}
					} else {
						G(j.width, j.height)
					}
				}
			};

			function M(U) {
				switch (U.keyCode) {
					case 27:
						if (m.jwGetFullscreen()) {
							m.jwSetFullscreen(false)
						}
						break;
					case 32:
						if (m.jwGetState() != a.api.events.state.IDLE && m.jwGetState() != a.api.events.state.PAUSED) {
							m.jwPause()
						} else {
							m.jwPlay()
						}
						break
				}
			}
			function G(U, ad) {
				if (R.style.display == "none") {
					return
				}
				var X = [].concat(j.plugins.order);
				X.reverse();
				F = X.length + 2;
				if (x && B()) {
					try {
						if (j.fullscreen && !j.getMedia().getDisplayElement().webkitDisplayingFullscreen) {
							j.fullscreen = false
						}
					} catch (aa) {}
				}
				if (!j.fullscreen) {
					g = U;
					t = ad;
					if (typeof U == "string" && U.indexOf("%") > 0) {
						g = d.getElementWidth(d.parentNode(R)) * parseInt(U.replace("%"), "") / 100
					} else {
						g = U
					}
					if (typeof ad == "string" && ad.indexOf("%") > 0) {
						t = d.getElementHeight(d.parentNode(R)) * parseInt(ad.replace("%"), "") / 100
					} else {
						t = ad
					}
					var Y = {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: g,
						height: t,
						position: "absolute"
					};
					b(o, Y);
					var ae = {};
					var ab;
					try {
						ab = j.plugins.object.display.getDisplayElement()
					} catch (aa) {}
					if (ab) {
						ae.width = d.parseDimension(ab.style.width);
						ae.height = d.parseDimension(ab.style.height)
					}
					var ac = d.extend({}, Y, ae, {
						zIndex: _instreamArea.style.zIndex,
						display: _instreamArea.style.display
					});
					b(_instreamArea, ac);
					b(R, {
						height: t,
						width: g
					});
					var Z = w(I, X);
					if (Z.length > 0) {
						F += Z.length;
						var W = Z.indexOf("playlist"),
							V = Z.indexOf("controlbar");
						if (W >= 0 && V >= 0) {
							Z[W] = Z.splice(V, 1, Z[W])[0]
						}
						w(q, Z, true)
					}
					A = d.getElementWidth(o);
					N = d.getElementHeight(o)
				} else {
					if (!B() && !c) {
						w(e, X, true)
					}
				}
				l()
			}
			var r;

			function w(ab, X, Y) {
				r = 0;
				var Z = [];
				for (var W = 0; W < X.length; W++) {
					var aa = X[W];
					if (d.exists(j.plugins.object[aa].getDisplayElement)) {
						if (j.plugins.config[aa].currentPosition != a.html5.view.positions.NONE) {
							var U = ab(aa, F--);
							if (!U) {
								Z.push(aa)
							} else {
								var V = U.width;
								var ac = U.height;
								if (Y) {
									delete U.width;
									delete U.height
								}
								b(j.plugins.object[aa].getDisplayElement(), U);
								j.plugins.object[aa].resize(V, ac)
							}
						} else {
							b(j.plugins.object[aa].getDisplayElement(), {
								display: "none"
							})
						}
					}
				}
				return Z
			}
			function I(V, W) {
				if (d.exists(j.plugins.object[V].getDisplayElement)) {
					if (j.plugins.config[V].position && T(j.plugins.config[V].position)) {
						if (!d.exists(j.plugins.object[V].getDisplayElement().parentNode)) {
							R.appendChild(j.plugins.object[V].getDisplayElement())
						}
						var U = z(V);
						U.zIndex = W;
						return U
					}
				}
				return false
			}
			function q(U, V) {
				if (!d.exists(j.plugins.object[U].getDisplayElement().parentNode)) {
					o.appendChild(j.plugins.object[U].getDisplayElement())
				}
				return {
					position: "absolute",
					width: (d.getElementWidth(o) - d.parseDimension(o.style.right)),
					height: (d.getElementHeight(o) - d.parseDimension(o.style.bottom)),
					zIndex: V
				}
			}
			function e(U, V) {
				return {
					position: "fixed",
					width: j.width,
					height: j.height,
					zIndex: V
				}
			}
			var l = this.resizeMedia = function() {
				o.style.position = "absolute";
				var W = j.getMedia() ? j.getMedia().getDisplayElement() : u;
				if (!W) {
					return
				}
				if (W && W.tagName.toLowerCase() == "video") {
					if (!W.videoWidth || !W.videoHeight) {
						W.style.width = o.style.width;
						W.style.height = o.style.height;
						return
					}
					W.style.position = "absolute";
					d.fadeTo(W, 1, 0.25);
					if (W.parentNode) {
						W.parentNode.style.left = o.style.left;
						W.parentNode.style.top = o.style.top
					}
					if (j.fullscreen && m.jwGetStretching() == a.utils.stretching.EXACTFIT && !d.isMobile()) {
						var U = document.createElement("div");
						d.stretch(a.utils.stretching.UNIFORM, U, d.getElementWidth(o), d.getElementHeight(o), A, N);
						d.stretch(a.utils.stretching.EXACTFIT, W, d.parseDimension(U.style.width), d.parseDimension(U.style.height), W.videoWidth ? W.videoWidth : 400, W.videoHeight ? W.videoHeight : 300);
						b(W, {
							left: U.style.left,
							top: U.style.top
						})
					} else {
						if (!c) {
							d.stretch(m.jwGetStretching(), W, d.getElementWidth(o), d.getElementHeight(o), W.videoWidth ? W.videoWidth : 400, W.videoHeight ? W.videoHeight : 300)
						}
					}
				} else {
					var V = j.plugins.object.display.getDisplayElement();
					if (V) {
						j.getMedia().resize(d.parseDimension(V.style.width), d.parseDimension(V.style.height))
					} else {
						j.getMedia().resize(d.parseDimension(o.style.width), d.parseDimension(o.style.height))
					}
				}
			};
			var z = this.getComponentPosition = function(V) {
				var W = {
					position: "absolute",
					margin: 0,
					padding: 0,
					top: null
				};
				var U = j.plugins.config[V].currentPosition.toLowerCase();
				switch (U.toUpperCase()) {
					case a.html5.view.positions.TOP:
						W.top = d.parseDimension(o.style.top);
						W.left = d.parseDimension(o.style.left);
						W.width = d.getElementWidth(o) - d.parseDimension(o.style.left) - d.parseDimension(o.style.right);
						W.height = j.plugins.object[V].height;
						o.style[U] = d.parseDimension(o.style[U]) + j.plugins.object[V].height + "px";
						o.style.height = d.getElementHeight(o) - W.height + "px";
						break;
					case a.html5.view.positions.RIGHT:
						W.top = d.parseDimension(o.style.top);
						W.right = d.parseDimension(o.style.right);
						W.width = j.plugins.object[V].width;
						W.height = d.getElementHeight(o) - d.parseDimension(o.style.top) - d.parseDimension(o.style.bottom);
						o.style.width = d.getElementWidth(o) - W.width + "px";
						break;
					case a.html5.view.positions.BOTTOM:
						W.left = d.parseDimension(o.style.left);
						W.width = d.getElementWidth(o) - d.parseDimension(o.style.left) - d.parseDimension(o.style.right);
						W.height = j.plugins.object[V].height;
						W.bottom = d.parseDimension(o.style.bottom + r);
						r += W.height;
						o.style.height = d.getElementHeight(o) - W.height + "px";
						break;
					case a.html5.view.positions.LEFT:
						W.top = d.parseDimension(o.style.top);
						W.left = d.parseDimension(o.style.left);
						W.width = j.plugins.object[V].width;
						W.height = d.getElementHeight(o) - d.parseDimension(o.style.top) - d.parseDimension(o.style.bottom);
						o.style[U] = d.parseDimension(o.style[U]) + j.plugins.object[V].width + "px";
						o.style.width = d.getElementWidth(o) - W.width + "px";
						break;
					default:
						break
				}
				return W
			};
			this.resize = G;
			var J, k, Q;
			var C = this.fullscreen = function(W) {
				if (c) {
					return
				}
				var Y;
				try {
					Y = j.getMedia().getDisplayElement()
				} catch (X) {}
				if (W) {
					k = j.width;
					Q = j.height
				}
				var aa = {
					position: "fixed",
					width: "100%",
					height: "100%",
					top: 0,
					left: 0,
					zIndex: 2147483000
				}, Z = {
					position: "relative",
					height: k,
					width: Q,
					zIndex: 0
				};
				if (B() && Y && Y.webkitSupportsFullscreen) {
					if (W && !Y.webkitDisplayingFullscreen) {
						try {
							b(Y, aa);
							d.transform(Y);
							J = o.style.display;
							o.style.display = "none";
							Y.webkitEnterFullscreen()
						} catch (V) {}
					} else {
						if (!W) {
							b(Y, Z);
							l();
							if (Y.webkitDisplayingFullscreen) {
								try {
									Y.webkitExitFullscreen()
								} catch (V) {}
							}
							o.style.display = J
						}
					}
					E = false
				} else {
					if (W) {
						document.onkeydown = M;
						clearInterval(P);
						var U = d.getBoundingClientRect(document.body);
						j.width = Math.abs(U.left) + Math.abs(U.right);
						j.height = window.innerHeight;
						b(R, aa);
						aa.zIndex = 1;
						if (j.getMedia() && j.getMedia().getDisplayElement()) {
							b(j.getMedia().getDisplayElement(), aa)
						}
						aa.zIndex = 2;
						b(o, aa);
						E = true
					} else {
						document.onkeydown = "";
						j.width = g;
						j.height = t;
						b(R, Z);
						E = false
					}
					G(j.width, j.height)
				}
			};

			function T(U) {
				return ([a.html5.view.positions.TOP, a.html5.view.positions.RIGHT, a.html5.view.positions.BOTTOM, a.html5.view.positions.LEFT].toString().indexOf(U.toUpperCase()) > -1)
			}
			function B() {
				if (m.jwGetState() != a.api.events.state.IDLE && !E && (j.getMedia() && j.getMedia().getDisplayElement() && j.getMedia().getDisplayElement().webkitSupportsFullscreen) && d.useNativeFullscreen()) {
					return true
				}
				return false
			}
			this.setupInstream = function(U, V) {
				d.css(_instreamArea, {
					display: "block",
					position: "absolute"
				});
				o.style.display = "none";
				_instreamArea.appendChild(U);
				u = V;
				S = true
			};
			var D = this.destroyInstream = function() {
				_instreamArea.style.display = "none";
				_instreamArea.innerHTML = "";
				o.style.display = "block";
				u = null;
				S = false;
				G(j.width, j.height)
			}
		};
		a.html5.view.positions = {
			TOP: "TOP",
			RIGHT: "RIGHT",
			BOTTOM: "BOTTOM",
			LEFT: "LEFT",
			OVER: "OVER",
			NONE: "NONE"
		}
	})(jwplayer);
	(function(a) {
		var b = {
			backgroundcolor: "",
			margin: 10,
			font: "Arial,sans-serif",
			fontsize: 10,
			fontcolor: parseInt("000000", 16),
			fontstyle: "normal",
			fontweight: "bold",
			buttoncolor: parseInt("ffffff", 16),
			position: a.html5.view.positions.BOTTOM,
			idlehide: false,
			hideplaylistcontrols: false,
			forcenextprev: false,
			layout: {
				left: {
					position: "left",
					elements: [{
						name: "play",
						type: "button"
					}, {
						name: "divider",
						type: "divider"
					}, {
						name: "prev",
						type: "button"
					}, {
						name: "divider",
						type: "divider"
					}, {
						name: "next",
						type: "button"
					}, {
						name: "divider",
						type: "divider"
					}, {
						name: "elapsed",
						type: "text"
					}]
				},
				center: {
					position: "center",
					elements: [{
						name: "time",
						type: "slider"
					}]
				},
				right: {
					position: "right",
					elements: [{
						name: "duration",
						type: "text"
					}, {
						name: "blank",
						type: "button"
					}, {
						name: "divider",
						type: "divider"
					}, {
						name: "mute",
						type: "button"
					}, {
						name: "volume",
						type: "slider"
					}, {
						name: "divider",
						type: "divider"
					}, {
						name: "fullscreen",
						type: "button"
					}]
				}
			}
		};
		_utils = a.utils;
		_css = _utils.css;
		_hide = function(c) {
			_css(c, {
				display: "none"
			})
		};
		_show = function(c) {
			_css(c, {
				display: "block"
			})
		};
		a.html5.controlbar = function(m, Y) {
			window.controlbar = this;
			var l = m;
			var D = _utils.extend({}, b, l.skin.getComponentSettings("controlbar"), Y);
			if (D.position == a.html5.view.positions.NONE || typeof a.html5.view.positions[D.position] == "undefined") {
				return
			}
			if (_utils.mapLength(l.skin.getComponentLayout("controlbar")) > 0) {
				D.layout = l.skin.getComponentLayout("controlbar")
			}
			var ag;
			var R;
			var af;
			var E;
			var w = "none";
			var h;
			var k;
			var ah;
			var g;
			var f;
			var z;
			var S = {};
			var q = false;
			var c = {};
			var Q = -1;
			var ac;
			var j = false;
			var p;
			var d;
			var V = false;
			var G = false;
			var H;
			var aa = new a.html5.eventdispatcher();
			_utils.extend(this, aa);

			function K() {
				if (!ac) {
					ac = l.skin.getSkinElement("controlbar", "background");
					if (!ac) {
						ac = {
							width: 0,
							height: 0,
							src: null
						}
					}
				}
				return ac
			}
			function O() {
				af = 0;
				E = 0;
				R = 0;
				if (!q) {
					var ap = {
						height: K().height,
						backgroundColor: D.backgroundcolor
					};
					ag = document.createElement("div");
					ag.id = l.id + "_jwplayer_controlbar";
					_css(ag, ap)
				}
				var ao = (l.skin.getSkinElement("controlbar", "capLeft"));
				var an = (l.skin.getSkinElement("controlbar", "capRight"));
				if (ao) {
					y("capLeft", "left", false, ag)
				}
				ad("background", ag, {
					position: "absolute",
					height: K().height,
					left: (ao ? ao.width : 0),
					zIndex: 0
				}, "img");
				if (K().src) {
					S.background.src = K().src
				}
				ad("elements", ag, {
					position: "relative",
					height: K().height,
					zIndex: 1
				});
				if (an) {
					y("capRight", "right", false, ag)
				}
			}
			this.getDisplayElement = function() {
				return ag
			};
			this.resize = function(ap, an) {
				T();
				_utils.cancelAnimation(ag);
				f = ap;
				z = an;
				if (G != l.jwGetFullscreen()) {
					G = l.jwGetFullscreen();
					if (!G) {
						Z()
					}
					d = undefined
				}
				var ao = x();
				J({
					id: l.id,
					duration: ah,
					position: k
				});
				v({
					id: l.id,
					bufferPercent: g
				});
				return ao
			};
			this.show = function() {
				if (j) {
					j = false;
					_show(ag);
					W()
				}
			};
			this.hide = function() {
				if (!j) {
					j = true;
					_hide(ag);
					ae()
				}
			};

			function r() {
				var ao = ["timeSlider", "volumeSlider", "timeSliderRail", "volumeSliderRail"];
				for (var ap in ao) {
					var an = ao[ap];
					if (typeof S[an] != "undefined") {
						c[an] = _utils.getBoundingClientRect(S[an])
					}
				}
			}
			var e;

			function Z(an) {
				if (j) {
					return
				}
				clearTimeout(p);
				if (D.position == a.html5.view.positions.OVER || l.jwGetFullscreen()) {
					switch (l.jwGetState()) {
						case a.api.events.state.PAUSED:
						case a.api.events.state.IDLE:
							if (ag && ag.style.opacity < 1 && (!D.idlehide || _utils.exists(an))) {
								e = false;
								setTimeout(function() {
									if (!e) {
										X()
									}
								}, 100)
							}
							if (D.idlehide) {
								p = setTimeout(function() {
									A()
								}, 2000)
							}
							break;
						default:
							e = true;
							if (an) {
								X()
							}
							p = setTimeout(function() {
								A()
							}, 2000);
							break
					}
				} else {
					X()
				}
			}
			function A() {
				if (!j) {
					ae();
					if (ag.style.opacity == 1) {
						_utils.cancelAnimation(ag);
						_utils.fadeTo(ag, 0, 0.1, 1, 0)
					}
				}
			}
			function X() {
				if (!j) {
					W();
					if (ag.style.opacity == 0) {
						_utils.cancelAnimation(ag);
						_utils.fadeTo(ag, 1, 0.1, 0, 0)
					}
				}
			}
			function I(an) {
				return function() {
					if (V && d != an) {
						d = an;
						aa.sendEvent(an, {
							component: "controlbar",
							boundingRect: P()
						})
					}
				}
			}
			var W = I(a.api.events.JWPLAYER_COMPONENT_SHOW);
			var ae = I(a.api.events.JWPLAYER_COMPONENT_HIDE);

			function P() {
				if (D.position == a.html5.view.positions.OVER || l.jwGetFullscreen()) {
					return _utils.getDimensions(ag)
				} else {
					return {
						x: 0,
						y: 0,
						width: 0,
						height: 0
					}
				}
			}
			function ad(ar, aq, ap, an) {
				var ao;
				if (!q) {
					if (!an) {
						an = "div"
					}
					ao = document.createElement(an);
					S[ar] = ao;
					ao.id = ag.id + "_" + ar;
					aq.appendChild(ao)
				} else {
					ao = document.getElementById(ag.id + "_" + ar)
				}
				if (_utils.exists(ap)) {
					_css(ao, ap)
				}
				return ao
			}
			function N() {
				if (l.jwGetHeight() <= 40) {
					D.layout = _utils.clone(D.layout);
					for (var an = 0; an < D.layout.left.elements.length; an++) {
						if (D.layout.left.elements[an].name == "fullscreen") {
							D.layout.left.elements.splice(an, 1)
						}
					}
					for (an = 0; an < D.layout.right.elements.length; an++) {
						if (D.layout.right.elements[an].name == "fullscreen") {
							D.layout.right.elements.splice(an, 1)
						}
					}
					o()
				}
				am(D.layout.left);
				am(D.layout.center);
				am(D.layout.right)
			}
			function am(aq, an) {
				var ar = aq.position == "right" ? "right" : "left";
				var ap = _utils.extend([], aq.elements);
				if (_utils.exists(an)) {
					ap.reverse()
				}
				var aq = ad(aq.position + "Group", S.elements, {
					"float": "left",
					styleFloat: "left",
					cssFloat: "left",
					height: "100%"
				});
				for (var ao = 0; ao < ap.length; ao++) {
					C(ap[ao], ar, aq)
				}
			}
			function L() {
				return R++
			}
			function C(ar, au, aw) {
				var aq, ao, ap, an, ax;
				if (!aw) {
					aw = S.elements
				}
				if (ar.type == "divider") {
					y("divider" + L(), au, true, aw, undefined, ar.width, ar.element);
					return
				}
				switch (ar.name) {
					case "play":
						y("playButton", au, false, aw);
						y("pauseButton", au, true, aw);
						U("playButton", "jwPlay");
						U("pauseButton", "jwPause");
						break;
					case "prev":
						y("prevButton", au, true, aw);
						U("prevButton", "jwPlaylistPrev");
						break;
					case "stop":
						y("stopButton", au, true, aw);
						U("stopButton", "jwStop");
						break;
					case "next":
						y("nextButton", au, true, aw);
						U("nextButton", "jwPlaylistNext");
						break;
					case "elapsed":
						y("elapsedText", au, true, aw, null, null, l.skin.getSkinElement("controlbar", "elapsedBackground"));
						break;
					case "time":
						ao = !_utils.exists(l.skin.getSkinElement("controlbar", "timeSliderCapLeft")) ? 0 : l.skin.getSkinElement("controlbar", "timeSliderCapLeft").width;
						ap = !_utils.exists(l.skin.getSkinElement("controlbar", "timeSliderCapRight")) ? 0 : l.skin.getSkinElement("controlbar", "timeSliderCapRight").width;
						aq = au == "left" ? ao : ap;
						ax = {
							height: K().height,
							position: "relative",
							"float": "left",
							styleFloat: "left",
							cssFloat: "left"
						};
						var at = ad("timeSlider", aw, ax);
						y("timeSliderCapLeft", au, true, at, "relative");
						y("timeSliderRail", au, false, at, "relative");
						y("timeSliderBuffer", au, false, at, "absolute");
						y("timeSliderProgress", au, false, at, "absolute");
						y("timeSliderThumb", au, false, at, "absolute");
						y("timeSliderCapRight", au, true, at, "relative");
						ab("time");
						break;
					case "fullscreen":
						y("fullscreenButton", au, false, aw);
						y("normalscreenButton", au, true, aw);
						U("fullscreenButton", "jwSetFullscreen", true);
						U("normalscreenButton", "jwSetFullscreen", false);
						break;
					case "volume":
						ao = !_utils.exists(l.skin.getSkinElement("controlbar", "volumeSliderCapLeft")) ? 0 : l.skin.getSkinElement("controlbar", "volumeSliderCapLeft").width;
						ap = !_utils.exists(l.skin.getSkinElement("controlbar", "volumeSliderCapRight")) ? 0 : l.skin.getSkinElement("controlbar", "volumeSliderCapRight").width;
						aq = au == "left" ? ao : ap;
						an = l.skin.getSkinElement("controlbar", "volumeSliderRail").width + ao + ap;
						ax = {
							height: K().height,
							position: "relative",
							width: an,
							"float": "left",
							styleFloat: "left",
							cssFloat: "left"
						};
						var av = ad("volumeSlider", aw, ax);
						y("volumeSliderCapLeft", au, false, av, "relative");
						y("volumeSliderRail", au, false, av, "relative");
						y("volumeSliderProgress", au, false, av, "absolute");
						y("volumeSliderThumb", au, false, av, "absolute");
						y("volumeSliderCapRight", au, false, av, "relative");
						ab("volume");
						break;
					case "mute":
						y("muteButton", au, false, aw);
						y("unmuteButton", au, true, aw);
						U("muteButton", "jwSetMute", true);
						U("unmuteButton", "jwSetMute", false);
						break;
					case "duration":
						y("durationText", au, true, aw, null, null, l.skin.getSkinElement("controlbar", "durationBackground"));
						break
				}
			}
			function y(aq, au, ao, ax, ar, an, ap) {
				if (_utils.exists(l.skin.getSkinElement("controlbar", aq)) || aq.indexOf("Text") > 0 || aq.indexOf("divider") === 0) {
					var at = {
						height: "100%",
						position: ar ? ar : "relative",
						display: "block",
						"float": "left",
						styleFloat: "left",
						cssFloat: "left"
					};
					if ((aq.indexOf("next") === 0 || aq.indexOf("prev") === 0) && (l.jwGetPlaylist().length < 2 || D.hideplaylistcontrols.toString() == "true")) {
						if (D.forcenextprev.toString() != "true") {
							ao = false;
							at.display = "none"
						}
					}
					var ay;
					if (aq.indexOf("Text") > 0) {
						aq.innerhtml = "00:00";
						at.font = D.fontsize + "px/" + (K().height + 1) + "px " + D.font;
						at.color = D.fontcolor;
						at.textAlign = "center";
						at.fontWeight = D.fontweight;
						at.fontStyle = D.fontstyle;
						at.cursor = "default";
						if (ap) {
							at.background = "url(" + ap.src + ") no-repeat center";
							at.backgroundSize = "100% " + K().height + "px"
						}
						at.padding = "0 5px"
					} else {
						if (aq.indexOf("divider") === 0) {
							if (an) {
								if (!isNaN(parseInt(an))) {
									ay = parseInt(an)
								}
							} else {
								if (ap) {
									var av = l.skin.getSkinElement("controlbar", ap);
									if (av) {
										at.background = "url(" + av.src + ") repeat-x center left";
										ay = av.width
									}
								} else {
									at.background = "url(" + l.skin.getSkinElement("controlbar", "divider").src + ") repeat-x center left";
									ay = l.skin.getSkinElement("controlbar", "divider").width
								}
							}
						} else {
							at.background = "url(" + l.skin.getSkinElement("controlbar", aq).src + ") repeat-x center left";
							ay = l.skin.getSkinElement("controlbar", aq).width
						}
					}
					if (au == "left") {
						if (ao) {
							af += ay
						}
					} else {
						if (au == "right") {
							if (ao) {
								E += ay
							}
						}
					}
					if (_utils.typeOf(ax) == "undefined") {
						ax = S.elements
					}
					at.width = ay;
					if (q) {
						_css(S[aq], at)
					} else {
						var aw = ad(aq, ax, at);
						if (_utils.exists(l.skin.getSkinElement("controlbar", aq + "Over"))) {
							aw.onmouseover = function(az) {
								aw.style.backgroundImage = ["url(", l.skin.getSkinElement("controlbar", aq + "Over").src, ")"].join("")
							};
							aw.onmouseout = function(az) {
								aw.style.backgroundImage = ["url(", l.skin.getSkinElement("controlbar", aq).src, ")"].join("")
							}
						}
						if (aq.indexOf("divider") == 0) {
							aw.setAttribute("class", "divider")
						}
						aw.innerHTML = "&nbsp;"
					}
				}
			}
			function F() {
				l.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED, B);
				l.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM, t);
				l.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_BUFFER, v);
				l.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE, s);
				l.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_TIME, J);
				l.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_MUTE, al);
				l.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_VOLUME, n);
				l.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_COMPLETE, M)
			}
			function B() {
				if (!D.hideplaylistcontrols) {
					if (l.jwGetPlaylist().length > 1 || D.forcenextprev.toString() == "true") {
						_show(S.nextButton);
						_show(S.prevButton)
					} else {
						_hide(S.nextButton);
						_hide(S.prevButton)
					}
					x();
					ai()
				}
			}
			function t(an) {
				ah = l.jwGetPlaylist()[an.index].duration;
				Q = -1;
				J({
					id: l.id,
					duration: ah,
					position: 0
				});
				v({
					id: l.id,
					bufferProgress: 0
				})
			}
			function ai() {
				J({
					id: l.id,
					duration: l.jwGetDuration(),
					position: 0
				});
				v({
					id: l.id,
					bufferProgress: 0
				});
				al({
					id: l.id,
					mute: l.jwGetMute()
				});
				s({
					id: l.id,
					newstate: a.api.events.state.IDLE
				});
				n({
					id: l.id,
					volume: l.jwGetVolume()
				})
			}
			function U(ap, aq, ao) {
				if (q) {
					return
				}
				if (_utils.exists(l.skin.getSkinElement("controlbar", ap))) {
					var an = S[ap];
					if (_utils.exists(an)) {
						_css(an, {
							cursor: "pointer"
						});
						if (aq == "fullscreen") {
							an.onmouseup = function(ar) {
								ar.stopPropagation();
								l.jwSetFullscreen(!l.jwGetFullscreen())
							}
						} else {
							an.onmouseup = function(ar) {
								ar.stopPropagation();
								if (_utils.exists(ao)) {
									l[aq](ao)
								} else {
									l[aq]()
								}
							}
						}
					}
				}
			}
			function ab(an) {
				if (q) {
					return
				}
				var ao = S[an + "Slider"];
				_css(S.elements, {
					cursor: "pointer"
				});
				_css(ao, {
					cursor: "pointer"
				});
				ao.onmousedown = function(ap) {
					w = an
				};
				ao.onmouseup = function(ap) {
					ap.stopPropagation();
					ak(ap.pageX)
				};
				ao.onmousemove = function(ap) {
					if (w == "time") {
						h = true;
						var aq = ap.pageX - c[an + "Slider"].left - window.pageXOffset;
						_css(S[w + "SliderThumb"], {
							left: aq
						})
					}
				}
			}
			function ak(ao) {
				h = false;
				var an;
				if (w == "time") {
					an = ao - c.timeSliderRail.left + window.pageXOffset;
					var aq = an / c.timeSliderRail.width * ah;
					if (aq < 0) {
						aq = 0
					} else {
						if (aq > ah) {
							aq = ah - 3
						}
					}
					if (l.jwGetState() == a.api.events.state.PAUSED || l.jwGetState() == a.api.events.state.IDLE) {
						l.jwPlay()
					}
					l.jwSeek(aq)
				} else {
					if (w == "volume") {
						an = ao - c.volumeSliderRail.left - window.pageXOffset;
						var ap = Math.round(an / c.volumeSliderRail.width * 100);
						if (ap < 10) {
							ap = 0
						} else {
							if (ap > 100) {
								ap = 100
							}
						}
						if (l.jwGetMute()) {
							l.jwSetMute(false)
						}
						l.jwSetVolume(ap)
					}
				}
				w = "none"
			}
			function v(ao) {
				if (_utils.exists(ao.bufferPercent)) {
					g = ao.bufferPercent
				}
				if (c.timeSliderRail) {
					var aq = l.skin.getSkinElement("controlbar", "timeSliderCapLeft");
					var ap = c.timeSliderRail.width;
					var an = isNaN(Math.round(ap * g / 100)) ? 0 : Math.round(ap * g / 100);
					_css(S.timeSliderBuffer, {
						width: an,
						left: aq ? aq.width : 0
					})
				}
			}
			function al(an) {
				if (an.mute) {
					_hide(S.muteButton);
					_show(S.unmuteButton);
					_hide(S.volumeSliderProgress)
				} else {
					_show(S.muteButton);
					_hide(S.unmuteButton);
					_show(S.volumeSliderProgress)
				}
			}
			function s(an) {
				if (an.newstate == a.api.events.state.BUFFERING || an.newstate == a.api.events.state.PLAYING) {
					_show(S.pauseButton);
					_hide(S.playButton)
				} else {
					_hide(S.pauseButton);
					_show(S.playButton)
				}
				Z();
				if (an.newstate == a.api.events.state.IDLE) {
					_hide(S.timeSliderBuffer);
					_hide(S.timeSliderProgress);
					_hide(S.timeSliderThumb);
					J({
						id: l.id,
						duration: l.jwGetDuration(),
						position: 0
					})
				} else {
					_show(S.timeSliderBuffer);
					if (an.newstate != a.api.events.state.BUFFERING) {
						_show(S.timeSliderProgress);
						_show(S.timeSliderThumb)
					}
				}
			}
			function M(an) {
				v({
					bufferPercent: 0
				});
				J(_utils.extend(an, {
					position: 0,
					duration: ah
				}))
			}
			function J(at) {
				if (_utils.exists(at.position)) {
					k = at.position
				}
				var ao = false;
				if (_utils.exists(at.duration) && at.duration != ah) {
					ah = at.duration;
					ao = true
				}
				var aq = (k === ah === 0) ? 0 : k / ah;
				var av = c.timeSliderRail;
				if (av) {
					var ap = isNaN(Math.round(av.width * aq)) ? 0 : Math.round(av.width * aq);
					var au = l.skin.getSkinElement("controlbar", "timeSliderCapLeft");
					var ar = ap + (au ? au.width : 0);
					if (S.timeSliderProgress) {
						_css(S.timeSliderProgress, {
							width: ap,
							left: au ? au.width : 0
						});
						if (!h) {
							if (S.timeSliderThumb) {
								S.timeSliderThumb.style.left = ar + "px"
							}
						}
					}
				}
				if (S.durationText) {
					S.durationText.innerHTML = _utils.timeFormat(ah)
				}
				if (S.elapsedText) {
					var an = _utils.timeFormat(k);
					S.elapsedText.innerHTML = an;
					if (Q != an.length) {
						ao = true;
						Q = an.length
					}
				}
				if (ao) {
					x()
				}
			}
			function o() {
				var an = S.elements.childNodes;
				var at, aq;
				for (var ap = 0; ap < an.length; ap++) {
					var ar = an[ap].childNodes;
					for (var ao in ar) {
						if (isNaN(parseInt(ao, 10))) {
							continue
						}
						if (ar[ao].id.indexOf(ag.id + "_divider") === 0 && aq && aq.id.indexOf(ag.id + "_divider") === 0 && ar[ao].style.backgroundImage == aq.style.backgroundImage) {
							ar[ao].style.display = "none"
						} else {
							if (ar[ao].id.indexOf(ag.id + "_divider") === 0 && at && at.style.display != "none") {
								ar[ao].style.display = "block"
							}
						}
						if (ar[ao].style.display != "none") {
							aq = ar[ao]
						}
						at = ar[ao]
					}
				}
			}
			function aj() {
				if (l.jwGetFullscreen()) {
					_show(S.normalscreenButton);
					_hide(S.fullscreenButton)
				} else {
					_hide(S.normalscreenButton);
					_show(S.fullscreenButton)
				}
				if (l.jwGetState() == a.api.events.state.BUFFERING || l.jwGetState() == a.api.events.state.PLAYING) {
					_show(S.pauseButton);
					_hide(S.playButton)
				} else {
					_hide(S.pauseButton);
					_show(S.playButton)
				}
				if (l.jwGetMute() == true) {
					_hide(S.muteButton);
					_show(S.unmuteButton);
					_hide(S.volumeSliderProgress)
				} else {
					_show(S.muteButton);
					_hide(S.unmuteButton);
					_show(S.volumeSliderProgress)
				}
			}
			function x() {
				o();
				aj();
				var ap = {
					width: f
				};
				var ax = {
					"float": "left",
					styleFloat: "left",
					cssFloat: "left"
				};
				if (D.position == a.html5.view.positions.OVER || l.jwGetFullscreen()) {
					ap.left = D.margin;
					ap.width -= 2 * D.margin;
					ap.top = z - K().height - D.margin;
					ap.height = K().height
				}
				var ar = l.skin.getSkinElement("controlbar", "capLeft");
				var av = l.skin.getSkinElement("controlbar", "capRight");
				ax.width = ap.width - (ar ? ar.width : 0) - (av ? av.width : 0);
				var aq = _utils.getBoundingClientRect(S.leftGroup).width;
				var au = _utils.getBoundingClientRect(S.rightGroup).width;
				var at = ax.width - aq - au - 1;
				var ao = at;
				var an = l.skin.getSkinElement("controlbar", "timeSliderCapLeft");
				var aw = l.skin.getSkinElement("controlbar", "timeSliderCapRight");
				if (_utils.exists(an)) {
					ao -= an.width
				}
				if (_utils.exists(aw)) {
					ao -= aw.width
				}
				////////
				// Cloud9 modifications
				////////
				if (_utils.exists(S.timeSlider)){   //  Added IF statement
					S.timeSlider.style.width = at + "px";
					if (!window.showTimeSlider) {
						S.timeSlider.style.visibility = "hidden";
					}
				} 
				if (_utils.exists(S.timeSliderRail)){    // Added IF statement
					S.timeSliderRail.style.width = ao + "px";
					if (!window.showTimeSlider) {
						S.timeSliderRail.style.visibility = "hidden";
					}
				}
				////////
				// End Cloud9 modifications
				////////
				_css(ag, ap);
				_css(S.elements, ax);
				_css(S.background, ax);
				r();
				return ap
			}
			function n(at) {
				if (_utils.exists(S.volumeSliderRail)) {
					var ap = isNaN(at.volume / 100) ? 1 : at.volume / 100;
					var aq = _utils.parseDimension(S.volumeSliderRail.style.width);
					var an = isNaN(Math.round(aq * ap)) ? 0 : Math.round(aq * ap);
					var au = _utils.parseDimension(S.volumeSliderRail.style.right);
					var ao = (!_utils.exists(l.skin.getSkinElement("controlbar", "volumeSliderCapLeft"))) ? 0 : l.skin.getSkinElement("controlbar", "volumeSliderCapLeft").width;
					_css(S.volumeSliderProgress, {
						width: an,
						left: ao
					});
					if (S.volumeSliderThumb) {
						var ar = (an - Math.round(_utils.parseDimension(S.volumeSliderThumb.style.width) / 2));
						ar = Math.min(Math.max(ar, 0), aq - _utils.parseDimension(S.volumeSliderThumb.style.width));
						_css(S.volumeSliderThumb, {
							left: ar
						})
					}
					if (_utils.exists(S.volumeSliderCapLeft)) {
						_css(S.volumeSliderCapLeft, {
							left: 0
						})
					}
				}
			}
			function T() {
				try {
					var ao = (l.id.indexOf("_instream") > 0 ? l.id.replace("_instream", "") : l.id);
					H = document.getElementById(ao);
					H.addEventListener("mousemove", Z)
				} catch (an) {
					_utils.log("Could not add mouse listeners to controlbar: " + an)
				}
			}
			function u() {
				O();
				N();
				r();
				q = true;
				F();
				D.idlehide = (D.idlehide.toString().toLowerCase() == "true");
				if (D.position == a.html5.view.positions.OVER && D.idlehide) {
					ag.style.opacity = 0;
					V = true
				} else {
					ag.style.opacity = 1;
					setTimeout((function() {
						V = true;
						W()
					}), 1)
				}
				T();
				ai()
			}
			u();
			return this
		}
	})(jwplayer);
	(function(b) {
		var a = ["width", "height", "state", "playlist", "item", "position", "buffer", "duration", "volume", "mute", "fullscreen"];
		var c = b.utils;
		b.html5.controller = function(o, K, f, h) {
			var n = o,
				m = f,
				j = h,
				y = K,
				M = true,
				G = -1,
				A = false,
				d = false,
				P, C = [],
				q = false;
			var D = (c.exists(m.config.debug) && (m.config.debug.toString().toLowerCase() == "console")),
				N = new b.html5.eventdispatcher(y.id, D);
			c.extend(this, N);

			function L(T) {
				if (q) {
					N.sendEvent(T.type, T)
				} else {
					C.push(T)
				}
			}
			function s(T) {
				if (!q) {
					q = true;
					N.sendEvent(b.api.events.JWPLAYER_READY, T);
					if (b.utils.exists(window.playerReady)) {
						playerReady(T)
					}
					if (b.utils.exists(window[f.config.playerReady])) {
						window[f.config.playerReady](T)
					}
					while (C.length > 0) {
						var V = C.shift();
						N.sendEvent(V.type, V)
					}
					if (f.config.autostart && !b.utils.isIOS()) {
						O()
					}
					while (x.length > 0) {
						var U = x.shift();
						B(U.method, U.arguments)
					}
				}
			}
			m.addGlobalListener(L);
			m.addEventListener(b.api.events.JWPLAYER_MEDIA_BUFFER_FULL, function() {
				m.getMedia().play()
			});
			m.addEventListener(b.api.events.JWPLAYER_MEDIA_TIME, function(T) {
				if (T.position >= m.playlist[m.item].start && G >= 0) {
					m.playlist[m.item].start = G;
					G = -1
				}
			});
			m.addEventListener(b.api.events.JWPLAYER_MEDIA_COMPLETE, function(T) {
				setTimeout(E, 25)
			});
			m.addEventListener(b.api.events.JWPLAYER_PLAYLIST_LOADED, O);
			m.addEventListener(b.api.events.JWPLAYER_FULLSCREEN, p);

			function F() {
				try {
					P = F;
					if (!A) {
						A = true;
						N.sendEvent(b.api.events.JWPLAYER_MEDIA_BEFOREPLAY);
						A = false;
						if (d) {
							d = false;
							P = null;
							return
						}
					}
					v(m.item);
					if (m.playlist[m.item].levels[0].file.length > 0) {
						if (M || m.state == b.api.events.state.IDLE) {
							m.getMedia().load(m.playlist[m.item]);
							M = false
						} else {
							if (m.state == b.api.events.state.PAUSED) {
								m.getMedia().play()
							}
						}
					}
					return true
				} catch (T) {
					N.sendEvent(b.api.events.JWPLAYER_ERROR, T);
					P = null
				}
				return false
			}
			function e() {
				try {
					if (m.playlist[m.item].levels[0].file.length > 0) {
						switch (m.state) {
							case b.api.events.state.PLAYING:
							case b.api.events.state.BUFFERING:
								if (m.getMedia()) {
									m.getMedia().pause()
								}
								break;
							default:
								if (A) {
									d = true
								}
						}
					}
					return true
				} catch (T) {
					N.sendEvent(b.api.events.JWPLAYER_ERROR, T)
				}
				return false
			}
			function z(T) {
				try {
					if (m.playlist[m.item].levels[0].file.length > 0) {
						if (typeof T != "number") {
							T = parseFloat(T)
						}
						switch (m.state) {
							case b.api.events.state.IDLE:
								if (G < 0) {
									G = m.playlist[m.item].start;
									m.playlist[m.item].start = T
								}
								if (!A) {
									F()
								}
								break;
							case b.api.events.state.PLAYING:
							case b.api.events.state.PAUSED:
							case b.api.events.state.BUFFERING:
								m.seek(T);
								break
						}
					}
					return true
				} catch (U) {
					N.sendEvent(b.api.events.JWPLAYER_ERROR, U)
				}
				return false
			}
			function w(T) {
				P = null;
				if (!c.exists(T)) {
					T = true
				}
				try {
					if ((m.state != b.api.events.state.IDLE || T) && m.getMedia()) {
						m.getMedia().stop(T)
					}
					if (A) {
						d = true
					}
					return true
				} catch (U) {
					N.sendEvent(b.api.events.JWPLAYER_ERROR, U)
				}
				return false
			}
			function k() {
				try {
					if (m.playlist[m.item].levels[0].file.length > 0) {
						if (m.config.shuffle) {
							v(S())
						} else {
							if (m.item + 1 == m.playlist.length) {
								v(0)
							} else {
								v(m.item + 1)
							}
						}
					}
					if (m.state != b.api.events.state.IDLE) {
						var U = m.state;
						m.state = b.api.events.state.IDLE;
						N.sendEvent(b.api.events.JWPLAYER_PLAYER_STATE, {
							oldstate: U,
							newstate: b.api.events.state.IDLE
						})
					}
					F();
					return true
				} catch (T) {
					N.sendEvent(b.api.events.JWPLAYER_ERROR, T)
				}
				return false
			}
			function I() {
				try {
					if (m.playlist[m.item].levels[0].file.length > 0) {
						if (m.config.shuffle) {
							v(S())
						} else {
							if (m.item === 0) {
								v(m.playlist.length - 1)
							} else {
								v(m.item - 1)
							}
						}
					}
					if (m.state != b.api.events.state.IDLE) {
						var U = m.state;
						m.state = b.api.events.state.IDLE;
						N.sendEvent(b.api.events.JWPLAYER_PLAYER_STATE, {
							oldstate: U,
							newstate: b.api.events.state.IDLE
						})
					}
					F();
					return true
				} catch (T) {
					N.sendEvent(b.api.events.JWPLAYER_ERROR, T)
				}
				return false
			}
			function S() {
				var T = null;
				if (m.playlist.length > 1) {
					while (!c.exists(T)) {
						T = Math.floor(Math.random() * m.playlist.length);
						if (T == m.item) {
							T = null
						}
					}
				} else {
					T = 0
				}
				return T
			}
			function H(U) {
				if (!m.playlist || !m.playlist[U]) {
					return false
				}
				try {
					if (m.playlist[U].levels[0].file.length > 0) {
						var V = m.state;
						if (V !== b.api.events.state.IDLE) {
							if (m.playlist[m.item] && m.playlist[m.item].provider == m.playlist[U].provider) {
								w(false)
							} else {
								w()
							}
						}
						v(U);
						F()
					}
					return true
				} catch (T) {
					N.sendEvent(b.api.events.JWPLAYER_ERROR, T)
				}
				return false
			}
			function v(T) {
				if (!m.playlist[T]) {
					return
				}
				m.setActiveMediaProvider(m.playlist[T]);
				if (m.item != T) {
					m.item = T;
					M = true;
					N.sendEvent(b.api.events.JWPLAYER_PLAYLIST_ITEM, {
						index: T
					})
				}
			}
			function g(U) {
				try {
					v(m.item);
					var V = m.getMedia();
					switch (typeof(U)) {
						case "number":
							V.volume(U);
							break;
						case "string":
							V.volume(parseInt(U, 10));
							break
					}
					m.setVolume(U);
					return true
				} catch (T) {
					N.sendEvent(b.api.events.JWPLAYER_ERROR, T)
				}
				return false
			}
			function r(U) {
				try {
					v(m.item);
					var V = m.getMedia();
					if (typeof U == "undefined") {
						V.mute(!m.mute);
						m.setMute(!m.mute)
					} else {
						if (U.toString().toLowerCase() == "true") {
							V.mute(true);
							m.setMute(true)
						} else {
							V.mute(false);
							m.setMute(false)
						}
					}
					return true
				} catch (T) {
					N.sendEvent(b.api.events.JWPLAYER_ERROR, T)
				}
				return false
			}
			function J(U, T) {
				try {
					m.width = U;
					m.height = T;
					j.resize(U, T);
					N.sendEvent(b.api.events.JWPLAYER_RESIZE, {
						width: m.width,
						height: m.height
					});
					return true
				} catch (V) {
					N.sendEvent(b.api.events.JWPLAYER_ERROR, V)
				}
				return false
			}
			function u(U, V) {
				try {
					if (typeof U == "undefined") {
						U = !m.fullscreen
					}
					if (typeof V == "undefined") {
						V = true
					}
					if (U != m.fullscreen) {
						m.fullscreen = (U.toString().toLowerCase() == "true");
						j.fullscreen(m.fullscreen);
						if (V) {
							N.sendEvent(b.api.events.JWPLAYER_FULLSCREEN, {
								fullscreen: m.fullscreen
							})
						}
						N.sendEvent(b.api.events.JWPLAYER_RESIZE, {
							width: m.width,
							height: m.height
						})
					}
					return true
				} catch (T) {
					N.sendEvent(b.api.events.JWPLAYER_ERROR, T)
				}
				return false
			}
			function R(T) {
				try {
					w();
					if (A) {
						d = false
					}
					m.loadPlaylist(T);
					if (m.playlist[m.item].provider) {
						v(m.item);
						if (m.config.autostart.toString().toLowerCase() == "true" && !c.isIOS() && !A) {
							F()
						}
						return true
					} else {
						return false
					}
				} catch (U) {
					N.sendEvent(b.api.events.JWPLAYER_ERROR, U)
				}
				return false
			}
			function O(T) {
				if (!c.isIOS()) {
					v(m.item);
					if (m.config.autostart.toString().toLowerCase() == "true" && !c.isIOS()) {
						F()
					}
				}
			}
			function p(T) {
				u(T.fullscreen, false)
			}
			function t() {
				try {
					return m.getMedia().detachMedia()
				} catch (T) {
					return null
				}
			}
			function l() {
				try {
					var T = m.getMedia().attachMedia();
					if (typeof P == "function") {
						P()
					}
				} catch (U) {
					return null
				}
			}
			b.html5.controller.repeatoptions = {
				LIST: "LIST",
				ALWAYS: "ALWAYS",
				SINGLE: "SINGLE",
				NONE: "NONE"
			};

			function E() {
				if (m.state != b.api.events.state.IDLE) {
					return
				}
				P = E;
				switch (m.config.repeat.toUpperCase()) {
					case b.html5.controller.repeatoptions.SINGLE:
						F();
						break;
					case b.html5.controller.repeatoptions.ALWAYS:
						if (m.item == m.playlist.length - 1 && !m.config.shuffle) {
							H(0)
						} else {
							k()
						}
						break;
					case b.html5.controller.repeatoptions.LIST:
						if (m.item == m.playlist.length - 1 && !m.config.shuffle) {
							w();
							v(0)
						} else {
							k()
						}
						break;
					default:
						w();
						break
				}
			}
			var x = [];

			function Q(T) {
				return function() {
					if (q) {
						B(T, arguments)
					} else {
						x.push({
							method: T,
							arguments: arguments
						})
					}
				}
			}
			function B(V, U) {
				var T = [];
				for (i = 0; i < U.length; i++) {
					T.push(U[i])
				}
				V.apply(this, T)
			}
			this.play = Q(F);
			this.pause = Q(e);
			this.seek = Q(z);
			this.stop = Q(w);
			this.next = Q(k);
			this.prev = Q(I);
			this.item = Q(H);
			this.setVolume = Q(g);
			this.setMute = Q(r);
			this.resize = Q(J);
			this.setFullscreen = Q(u);
			this.load = Q(R);
			this.playerReady = s;
			this.detachMedia = t;
			this.attachMedia = l;
			this.beforePlay = function() {
				return A
			};
			this.destroy = function() {
				if (m.getMedia()) {
					m.getMedia().destroy()
				}
			}
		}
	})(jwplayer);
	(function(a) {
		a.html5.defaultSkin = function() {
			this.text = '<?xml version="1.0" ?><skin author="LongTail Video" name="Five" version="1.1"><components><component name="controlbar"><settings><setting name="margin" value="20"/><setting name="fontsize" value="11"/><setting name="fontcolor" value="0x000000"/></settings><layout><group position="left"><button name="play"/><divider name="divider"/><button name="prev"/><divider name="divider"/><button name="next"/><divider name="divider"/><text name="elapsed"/></group><group position="center"><slider name="time"/></group><group position="right"><text name="duration"/><divider name="divider"/><button name="blank"/><divider name="divider"/><button name="mute"/><slider name="volume"/><divider name="divider"/><button name="fullscreen"/></group></layout><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAElJREFUOI3t1LERACAMQlFgGvcfxNIhHMK4gsUvUviOmgtNsiAZkBSEKxKEnCYkkQrJn/YwbUNiSDDYRZaQRDaShv+oX9GBZEIuK+8hXVLs+/YAAAAASUVORK5CYII="/><element name="blankButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAYCAYAAAAyJzegAAAAFElEQVQYV2P8//8/AzpgHBUc7oIAGZdH0RjKN8EAAAAASUVORK5CYII="/><element name="capLeft" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAYAAAA7zJfaAAAAQElEQVQIWz3LsRGAMADDQJ0XB5bMINABZ9GENGrszxhjT2WLSqxEJG2JQrTMdV2q5LpOAvyRaVmsi7WdeZ/7+AAaOTq7BVrfOQAAAABJRU5ErkJggg=="/><element name="capRight" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAYAAAA7zJfaAAAAQElEQVQIWz3LsRGAMADDQJ0XB5bMINABZ9GENGrszxhjT2WLSqxEJG2JQrTMdV2q5LpOAvyRaVmsi7WdeZ/7+AAaOTq7BVrfOQAAAABJRU5ErkJggg=="/><element name="divider" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAIAAAC0rgCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADhJREFUCB0FwcENgEAAw7Aq+893g8APUILNOQcbFRktVGqUVFRkWNz3xTa2sUaLNUosKlRUvvf5AdbWOTtzmzyWAAAAAElFTkSuQmCC"/><element name="playButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAANUlEQVR42u2RsQkAAAjD/NTTPaW6dXLrINJA1kBpGPMAjDWmOgp1HFQXx+b1KOefO4oxY57R73YnVYCQUCQAAAAASUVORK5CYII="/><element name="pauseButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAIUlEQVQ4jWNgGAWjYOiD/0gYG3/U0FFDB4Oho2AUDAYAAEwiL9HrpdMVAAAAAElFTkSuQmCC"/><element name="prevButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAQklEQVQ4y2NgGAWjYOiD/1AMA/JAfB5NjCJD/YH4PRaLyDa0H4lNNUP/DxlD59PCUBCIp3ZEwYA+NZLUKBgFgwEAAN+HLX9sB8u8AAAAAElFTkSuQmCC"/><element name="nextButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAQElEQVQ4y2NgGAWjYOiD/0B8Hojl0cT+U2ooCL8HYn9qGwrD/bQw9P+QMXQ+tSMqnpoRBUpS+tRMUqNgFAwGAADxZy1/mHvFnAAAAABJRU5ErkJggg=="/><element name="timeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAOElEQVRIDe3BwQkAIRADwAhhw/nU/kWwUK+KPITMABFh19Y+F0acY8CJvX9wYpXgRElwolSIiMf9ZWEDhtwurFsAAAAASUVORK5CYII="/><element name="timeSliderBuffer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAN0lEQVRIDe3BwQkAMQwDMBcc55mRe9zi7RR+FCwBEWG39vcfGHFm4MTuhhMlwYlVBSdKhYh43AW/LQMKm1spzwAAAABJRU5ErkJggg=="/><element name="timeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAIElEQVRIiWNgGAWjYBTQBfynMR61YCRYMApGwSigMQAAiVWPcbq6UkIAAAAASUVORK5CYII="/><element name="timeSliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAYCAYAAAA/OUfnAAAAO0lEQVQYlWP4//8/Awwz0JgDBP/BeN6Cxf/hnI2btiI4u/fsQ3AOHjqK4Jw4eQbBOX/hEoKDYjSd/AMA4cS4mfLsorgAAAAASUVORK5CYII="/><element name="muteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAJklEQVQ4y2NgGAUjDcwH4v/kaPxPikZkxcNVI9mBQ5XoGAWDFwAAsKAXKQQmfbUAAAAASUVORK5CYII="/><element name="unmuteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAMklEQVQ4y2NgGAWDHPyntub5xBr6Hwv/Pzk2/yfVG/8psRFE25Oq8T+tQnsIaB4FVAcAi2YVysVY52AAAAAASUVORK5CYII="/><element name="volumeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAACVBMVEUAAACmpqampqbBXAu8AAAAAnRSTlMAgJsrThgAAAArSURBVAhbY2AgErBAyA4I2QEhOyBkB4TsYOhAoaCCUCUwDTDtMMNgRuMHAFB5FoGH5T0UAAAAAElFTkSuQmCC"/><element name="volumeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAACVBMVEUAAAAAAAAAAACDY+nAAAAAAnRSTlMAgJsrThgAAAArSURBVAhbY2AgErBAyA4I2QEhOyBkB4TsYOhAoaCCUCUwDTDtMMNgRuMHAFB5FoGH5T0UAAAAAElFTkSuQmCC"/><element name="volumeSliderCapRight" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAYCAYAAAAyJzegAAAAFElEQVQYV2P8//8/AzpgHBUc7oIAGZdH0RjKN8EAAAAASUVORK5CYII="/><element name="fullscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAQklEQVRIiWNgGAWjYMiD/0iYFDmSLbDHImdPLQtgBpEiR7Zl2NijAA5oEkT/0Whi5UiyAJ8BVMsHNMtoo2AUDAIAAGdcIN3IDNXoAAAAAElFTkSuQmCC"/><element name="normalscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAP0lEQVRIx2NgGAWjYMiD/1RSQ5QB/wmIUWzJfzx8qhj+n4DYCAY0DyJ7PBbYU8sHMEvwiZFtODXUjIJRMJgBACpWIN2ZxdPTAAAAAElFTkSuQmCC"/></elements></component><component name="display"><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlOZpuml+rYAAAASSURBVBhXY2AYJuA/GBwY6jQAyDyoK8QcL4QAAAAASUVORK5CYII="/><element name="playIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAiUlEQVR42u3XSw2AMBREURwgAQlIQAISKgUpSEFKJeCg5b0E0kWBTVcD9ySTsL0Jn9IBAAAA+K2UUrBlW/Rr5ZDoIeeuoFkxJD9ss03aIXXQqB9SttoG7ZA6qNcOKdttiwcJh9RB+iFl4SshkRBuLR72+9cvH0SOKI2HRo7x/Fi1/uoCAAAAwLsD8ki99IlO2dQAAAAASUVORK5CYII="/><element name="muteIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAVUlEQVR42u3WMQrAIAxAUW/g/SdvGmvpoOBeSHgPsjj5QTANAACARCJilIhYM0tEvJM+Ik3Id9E957kQIb+F3OdCPC0hPkQriqWx9hp/x/QGAABQyAPLB22VGrpLDgAAAABJRU5ErkJggg=="/><element name="errorIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAA/0lEQVR42u2U0QmEMBAF7cASLMESUoIlpARLSCkpwRJSgiWkhOvAXD4WsgRkyaG5DbyB+Yvg8KITAAAAAAAYk+u61mwk15EjPtlEfihmqIiZR1Qx80ghjgdUuiHXGHSVsoag0x6x8DUoyjD5KovmEJ9NTDMRPIT0mtdIUkjlonuNohO+Ha99DTmkuGgKCTcvebAzx82ZoCWC3/3aIMWSRucaxcjORSFY4xpFdjYJGp1rFGcyCYZ/RVh6AUnfcNZ2zih3/mGj1jVCdiNDwyrq1rA/xMdeEXvDVdnYc1vDc3uPkDObXrlaxbNHSOohQhr/WOeLEWfWTgAAAAAAADzNF9sHJ7PJ57MlAAAAAElFTkSuQmCC"/><element name="bufferIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACBklEQVR42u3Zv0sCYRzH8USTzOsHHEWGkC1HgaDgkktGDjUYtDQ01RDSljQ1BLU02+rk1NTm2NLq4Nx/0L/h9fnCd3j4cnZe1/U8xiO8h3uurufF0/3COd/3/0UWYiEWYiEWYiGJQ+J8xuPxKhXjEMZANinjIZhkGuVRNioE4wVURo4JkHm0xKWmhRAc1bh1EyCUw5BcBIjHiApKa4CErko6DEJwuRo6IRKzyJD8FJAyI3Zp2zRImiBcRhlfo5RtlxCcE3CcDNpGrhYIT2IhAJKilO0VRmzJ32fAMTpBTS0QMfGwlcuKMRftE0DJ0wCJdcOsCkBdXP3Mh9CEFUBTPS9mDZJBG6io4aqVzMdCokCw9H3kT6j/C/9iDdSeUMNC7DkyyxAs/Rk6Qss8FPWRZgdVtUH4DjxEn1zxh+/zj1wHlf4MQhNGrwqA6sY40U8JonRJwEQh+AO3AvCG6gHv4U7IY4krxkroWoAOkoQMGfCBrgIm+YBGqPENpIJ66CJg3x66Y0gnSUidAEEnNr9jjLiWMn5DiWP0OC/oAsCgkq43xBdGDMQr7YASP/vEkHvdl1+JOCcEV5sC4hGEOzTlPuKgd0b0xD4JkRcOgnRRTjdErkYhAsQVq6IdUuPJtmk7BCL3t/h88cx91pKQkI/pkDx6pmYTIjEoxiHsN1YWYiEWYiEWknhflZ5IErA5nr8AAAAASUVORK5CYII="/></elements></component><component name="dock"><settings><setting name="fontcolor" value="0xffffff"/></settings><elements><element name="button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlOZpuml+rYAAAASSURBVBhXY2AYJuA/GBwY6jQAyDyoK8QcL4QAAAAASUVORK5CYII="/></elements></component><component name="playlist"><settings><setting name="backgroundcolor" value="0xe8e8e8"/></settings><elements><element name="item" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHBJREFUaN7t2MENwCAMBEEe9N8wSKYC/D8YV7CyJoRkVtVImxkZPQInMxoP0XiIxkM0HsGbjjSNBx544IEHHnjggUe/6UQeey0PIh7XTftGxKPj4eXCtLsHHh+ZxkO0Iw8PR55Ni8ZD9Hu/EAoP0dc5RRg9qeRjVF8AAAAASUVORK5CYII="/><element name="sliderCapTop" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAHCAYAAADnCQYGAAAAFUlEQVQokWP8//8/A7UB46ihI9hQAKt6FPPXhVGHAAAAAElFTkSuQmCC"/><element name="sliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAKElEQVQ4y2P4//8/Az68bNmy/+iYkB6GUUNHDR01dNTQUUNHDaXcUABUDOKhcxnsSwAAAABJRU5ErkJggg=="/><element name="sliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAJUlEQVQ4T2P4//8/Ay4MBP9xYbz6Rg0dNXTU0FFDRw0dNZRyQwHH4NBa7GJsXAAAAABJRU5ErkJggg=="/><element name="sliderCapBottom" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAHCAYAAADnCQYGAAAAFUlEQVQokWP8//8/A7UB46ihI9hQAKt6FPPXhVGHAAAAAElFTkSuQmCC"/></elements></component></components></skin>';
			this.xml = null;
			if (window.DOMParser) {
				parser = new DOMParser();
				this.xml = parser.parseFromString(this.text, "text/xml")
			} else {
				this.xml = new ActiveXObject("Microsoft.XMLDOM");
				this.xml.async = "false";
				this.xml.loadXML(this.text)
			}
			return this
		}
	})(jwplayer);
	(function(a) {
		_utils = a.utils;
		_css = _utils.css;
		_hide = function(b) {
			_css(b, {
				display: "none"
			})
		};
		_show = function(b) {
			_css(b, {
				display: "block"
			})
		};
		a.html5.display = function(k, K) {
			var j = {
				icons: true,
				showmute: false
			};
			var X = _utils.extend({}, j, K);
			var h = k;
			var W = {};
			var e;
			var w;
			var z;
			var T;
			var u;
			var M;
			var E;
			var N = !_utils.exists(h.skin.getComponentSettings("display").bufferrotation) ? 15 : parseInt(h.skin.getComponentSettings("display").bufferrotation, 10);
			var s = !_utils.exists(h.skin.getComponentSettings("display").bufferinterval) ? 100 : parseInt(h.skin.getComponentSettings("display").bufferinterval, 10);
			var D = -1;
			var v = a.api.events.state.IDLE;
			var O = true;
			var d;
			var C = false,
				V = true;
			var p = "";
			var g = false;
			var o = false;
			var m;
			var y, R;
			var L = new a.html5.eventdispatcher();
			_utils.extend(this, L);
			var H = {
				display: {
					style: {
						cursor: "pointer",
						top: 0,
						left: 0,
						overflow: "hidden"
					},
					click: n
				},
				display_icon: {
					style: {
						cursor: "pointer",
						position: "absolute",
						top: ((h.skin.getSkinElement("display", "background").height - h.skin.getSkinElement("display", "playIcon").height) / 2),
						left: ((h.skin.getSkinElement("display", "background").width - h.skin.getSkinElement("display", "playIcon").width) / 2),
						border: 0,
						margin: 0,
						padding: 0,
						zIndex: 3,
						display: "none"
					}
				},
				display_iconBackground: {
					style: {
						cursor: "pointer",
						position: "absolute",
						top: ((w - h.skin.getSkinElement("display", "background").height) / 2),
						left: ((e - h.skin.getSkinElement("display", "background").width) / 2),
						border: 0,
						backgroundImage: (["url(", h.skin.getSkinElement("display", "background").src, ")"]).join(""),
						width: h.skin.getSkinElement("display", "background").width,
						height: h.skin.getSkinElement("display", "background").height,
						margin: 0,
						padding: 0,
						zIndex: 2,
						display: "none"
					}
				},
				display_image: {
					style: {
						display: "none",
						width: e,
						height: w,
						position: "absolute",
						cursor: "pointer",
						left: 0,
						top: 0,
						margin: 0,
						padding: 0,
						textDecoration: "none",
						zIndex: 1
					}
				},
				display_text: {
					style: {
						zIndex: 4,
						position: "relative",
						opacity: 0.8,
						backgroundColor: parseInt("000000", 16),
						color: parseInt("ffffff", 16),
						textAlign: "center",
						fontFamily: "Arial,sans-serif",
						padding: "0 5px",
						fontSize: 14
					}
				}
			};
			h.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE, q);
			h.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_MUTE, q);
			h.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED, P);
			h.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM, q);
			h.jwAddEventListener(a.api.events.JWPLAYER_ERROR, r);
			Q();

			function Q() {
				W.display = G("div", "display");
				W.display_text = G("div", "display_text");
				W.display.appendChild(W.display_text);
				W.display_image = G("img", "display_image");
				W.display_image.onerror = function(Y) {
					_hide(W.display_image)
				};
				W.display_image.onload = B;
				W.display_icon = G("div", "display_icon");
				W.display_iconBackground = G("div", "display_iconBackground");
				W.display.appendChild(W.display_image);
				W.display_iconBackground.appendChild(W.display_icon);
				W.display.appendChild(W.display_iconBackground);
				f();
				setTimeout((function() {
					o = true;
					if (X.icons.toString() == "true") {
						J()
					}
				}), 1)
			}
			this.getDisplayElement = function() {
				return W.display
			};
			this.resize = function(Z, Y) {
				if (h.jwGetFullscreen() && _utils.isMobile()) {
					return
				}
				_css(W.display, {
					width: Z,
					height: Y
				});
				_css(W.display_text, {
					width: (Z - 10),
					top: ((Y - _utils.getBoundingClientRect(W.display_text).height) / 2)
				});
				_css(W.display_iconBackground, {
					top: ((Y - h.skin.getSkinElement("display", "background").height) / 2),
					left: ((Z - h.skin.getSkinElement("display", "background").width) / 2)
				});
				if (e != Z || w != Y) {
					e = Z;
					w = Y;
					d = undefined;
					J()
				}
				if (!h.jwGetFullscreen()) {
					y = Z;
					R = Y
				}
				c();
				q({})
			};
			this.show = function() {
				if (g) {
					g = false;
					t(h.jwGetState())
				}
			};
			this.hide = function() {
				if (!g) {
					F();
					g = true
				}
			};

			function B(Y) {
				z = W.display_image.naturalWidth;
				T = W.display_image.naturalHeight;
				c();
				if (h.jwGetState() == a.api.events.state.IDLE || h.jwGetPlaylist()[h.jwGetPlaylistIndex()].provider == "sound") {
					_css(W.display_image, {
						display: "block",
						opacity: 0
					});
					_utils.fadeTo(W.display_image, 1, 0.1)
				}
				C = false
			}
			function c() {
				if (h.jwGetFullscreen() && h.jwGetStretching() == a.utils.stretching.EXACTFIT) {
					var Y = document.createElement("div");
					_utils.stretch(a.utils.stretching.UNIFORM, Y, e, w, y, R);
					_utils.stretch(a.utils.stretching.EXACTFIT, W.display_image, _utils.parseDimension(Y.style.width), _utils.parseDimension(Y.style.height), z, T);
					_css(W.display_image, {
						left: Y.style.left,
						top: Y.style.top
					})
				} else {
					_utils.stretch(h.jwGetStretching(), W.display_image, e, w, z, T)
				}
			}
			function G(Y, aa) {
				var Z = document.createElement(Y);
				Z.id = h.id + "_jwplayer_" + aa;
				_css(Z, H[aa].style);
				return Z
			}
			function f() {
				for (var Y in W) {
					if (_utils.exists(H[Y].click)) {
						W[Y].onclick = H[Y].click
					}
				}
			}
			function n(Y) {
				if (typeof Y.preventDefault != "undefined") {
					Y.preventDefault()
				} else {
					Y.returnValue = false
				}
				if (typeof m == "function") {
					m(Y);
					return
				} else {
					if (h.jwGetState() != a.api.events.state.PLAYING) {
						h.jwPlay()
					} else {
						h.jwPause()
					}
				}
			}
			function U(Y) {
				if (E) {
					F();
					return
				}
				W.display_icon.style.backgroundImage = (["url(", h.skin.getSkinElement("display", Y).src, ")"]).join("");
				_css(W.display_icon, {
					width: h.skin.getSkinElement("display", Y).width,
					height: h.skin.getSkinElement("display", Y).height,
					top: (h.skin.getSkinElement("display", "background").height - h.skin.getSkinElement("display", Y).height) / 2,
					left: (h.skin.getSkinElement("display", "background").width - h.skin.getSkinElement("display", Y).width) / 2
				});
				b();
				if (_utils.exists(h.skin.getSkinElement("display", Y + "Over"))) {
					W.display_icon.onmouseover = function(Z) {
						W.display_icon.style.backgroundImage = ["url(", h.skin.getSkinElement("display", Y + "Over").src, ")"].join("")
					};
					W.display_icon.onmouseout = function(Z) {
						W.display_icon.style.backgroundImage = ["url(", h.skin.getSkinElement("display", Y).src, ")"].join("")
					}
				} else {
					W.display_icon.onmouseover = null;
					W.display_icon.onmouseout = null
				}
			}
			function F() {
				if (X.icons.toString() == "true") {
					_hide(W.display_icon);
					_hide(W.display_iconBackground);
					S()
				}
			}
			function b() {
				if (!g && X.icons.toString() == "true") {
					_show(W.display_icon);
					_show(W.display_iconBackground);
					J()
				}
			}
			function r(Y) {
				E = true;
				F();
				W.display_text.innerHTML = Y.message;
				_show(W.display_text);
				W.display_text.style.top = ((w - _utils.getBoundingClientRect(W.display_text).height) / 2) + "px"
			}
			function I() {
				V = false;
				W.display_image.style.display = "none"
			}
			function P() {
				v = ""
			}
			function q(Y) {
				if ((Y.type == a.api.events.JWPLAYER_PLAYER_STATE || Y.type == a.api.events.JWPLAYER_PLAYLIST_ITEM) && E) {
					E = false;
					_hide(W.display_text)
				}
				var Z = h.jwGetState();
				if (Z == v) {
					return
				}
				v = Z;
				if (D >= 0) {
					clearTimeout(D)
				}
				if (O || h.jwGetState() == a.api.events.state.PLAYING || h.jwGetState() == a.api.events.state.PAUSED) {
					t(h.jwGetState())
				} else {
					D = setTimeout(l(h.jwGetState()), 500)
				}
			}
			function l(Y) {
				return (function() {
					t(Y)
				})
			}
			function t(Y) {
				if (_utils.exists(M)) {
					clearInterval(M);
					M = null;
					_utils.animations.rotate(W.display_icon, 0)
				}
				switch (Y) {
					case a.api.events.state.BUFFERING:
						if (_utils.isIPod()) {
							I();
							F()
						} else {
							if (h.jwGetPlaylist()[h.jwGetPlaylistIndex()].provider == "sound") {
								x()
							}
							u = 0;
							M = setInterval(function() {
								u += N;
								_utils.animations.rotate(W.display_icon, u % 360)
							}, s);
							U("bufferIcon");
							O = true
						}
						break;
					case a.api.events.state.PAUSED:
						if (!_utils.isIPod()) {
							if (h.jwGetPlaylist()[h.jwGetPlaylistIndex()].provider != "sound") {
								_css(W.display_image, {
									background: "transparent no-repeat center center"
								})
							}
							U("playIcon");
							O = true
						}
						break;
					case a.api.events.state.IDLE:
						if (h.jwGetPlaylist()[h.jwGetPlaylistIndex()] && h.jwGetPlaylist()[h.jwGetPlaylistIndex()].image) {
							x()
						} else {
							I()
						}
						U("playIcon");
						O = true;
						break;
					default:
						if (h.jwGetPlaylist()[h.jwGetPlaylistIndex()] && h.jwGetPlaylist()[h.jwGetPlaylistIndex()].provider == "sound") {
							if (_utils.isIPod()) {
								I();
								O = false
							} else {
								x()
							}
						} else {
							I();
							O = false
						}
						if (h.jwGetMute() && X.showmute) {
							U("muteIcon")
						} else {
							F()
						}
						break
				}
				D = -1
			}
			function x() {
				if (h.jwGetPlaylist()[h.jwGetPlaylistIndex()]) {
					var Y = h.jwGetPlaylist()[h.jwGetPlaylistIndex()].image;
					if (Y) {
						if (Y != p) {
							p = Y;
							C = true;
							W.display_image.src = _utils.getAbsolutePath(Y)
						} else {
							if (!(C || V)) {
								V = true;
								W.display_image.style.opacity = 0;
								W.display_image.style.display = "block";
								_utils.fadeTo(W.display_image, 1, 0.1)
							}
						}
					}
				}
			}
			function A(Y) {
				return function() {
					if (!o) {
						return
					}
					if (!g && d != Y) {
						d = Y;
						L.sendEvent(Y, {
							component: "display",
							boundingRect: _utils.getDimensions(W.display_iconBackground)
						})
					}
				}
			}
			var J = A(a.api.events.JWPLAYER_COMPONENT_SHOW);
			var S = A(a.api.events.JWPLAYER_COMPONENT_HIDE);
			this.setAlternateClickHandler = function(Y) {
				m = Y
			};
			this.revertAlternateClickHandler = function() {
				m = undefined
			};
			return this
		}
	})(jwplayer);
	(function(a) {
		var c = a.utils;
		var b = c.css;
		a.html5.dock = function(w, D) {
			function x() {
				return {
					align: a.html5.view.positions.RIGHT
				}
			}
			var n = c.extend({}, x(), D);
			if (n.align == "FALSE") {
				return
			}
			var j = {};
			var A = [];
			var k;
			var F;
			var f = false;
			var C = false;
			var g = {
				x: 0,
				y: 0,
				width: 0,
				height: 0
			};
			var z;
			var o;
			var y;
			var m = new a.html5.eventdispatcher();
			c.extend(this, m);
			var r = document.createElement("div");
			r.id = w.id + "_jwplayer_dock";
			r.style.opacity = 1;
			p();
			w.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE, q);
			this.getDisplayElement = function() {
				return r
			};
			this.setButton = function(K, H, I, J) {
				if (!H && j[K]) {
					c.arrays.remove(A, K);
					r.removeChild(j[K].div);
					delete j[K]
				} else {
					if (H) {
						if (!j[K]) {
							j[K] = {}
						}
						j[K].handler = H;
						j[K].outGraphic = I;
						j[K].overGraphic = J;
						if (!j[K].div) {
							A.push(K);
							j[K].div = document.createElement("div");
							j[K].div.style.position = "absolute";
							r.appendChild(j[K].div);
							j[K].div.appendChild(document.createElement("div"));
							j[K].div.childNodes[0].style.position = "relative";
							j[K].div.childNodes[0].style.width = "100%";
							j[K].div.childNodes[0].style.height = "100%";
							j[K].div.childNodes[0].style.zIndex = 10;
							j[K].div.childNodes[0].style.cursor = "pointer";
							j[K].div.appendChild(document.createElement("img"));
							j[K].div.childNodes[1].style.position = "absolute";
							j[K].div.childNodes[1].style.left = 0;
							j[K].div.childNodes[1].style.top = 0;
							if (w.skin.getSkinElement("dock", "button")) {
								j[K].div.childNodes[1].src = w.skin.getSkinElement("dock", "button").src
							}
							j[K].div.childNodes[1].style.zIndex = 9;
							j[K].div.childNodes[1].style.cursor = "pointer";
							j[K].div.onmouseover = function() {
								if (j[K].overGraphic) {
									j[K].div.childNodes[0].style.background = h(j[K].overGraphic)
								}
								if (w.skin.getSkinElement("dock", "buttonOver")) {
									j[K].div.childNodes[1].src = w.skin.getSkinElement("dock", "buttonOver").src
								}
							};
							j[K].div.onmouseout = function() {
								if (j[K].outGraphic) {
									j[K].div.childNodes[0].style.background = h(j[K].outGraphic)
								}
								if (w.skin.getSkinElement("dock", "button")) {
									j[K].div.childNodes[1].src = w.skin.getSkinElement("dock", "button").src
								}
							};
							if (w.skin.getSkinElement("dock", "button")) {
								j[K].div.childNodes[1].src = w.skin.getSkinElement("dock", "button").src
							}
						}
						if (j[K].outGraphic) {
							j[K].div.childNodes[0].style.background = h(j[K].outGraphic)
						} else {
							if (j[K].overGraphic) {
								j[K].div.childNodes[0].style.background = h(j[K].overGraphic)
							}
						}
						if (H) {
							j[K].div.onclick = function(L) {
								L.preventDefault();
								a(w.id).callback(K);
								if (j[K].overGraphic) {
									j[K].div.childNodes[0].style.background = h(j[K].overGraphic)
								}
								if (w.skin.getSkinElement("dock", "button")) {
									j[K].div.childNodes[1].src = w.skin.getSkinElement("dock", "button").src
								}
							}
						}
					}
				}
				l(k, F)
			};

			function h(H) {
				return "url(" + H + ") no-repeat center center"
			}
			function t(H) {}
			function l(H, T) {
				p();
				if (A.length > 0) {
					var I = 10;
					var S = I;
					var P = -1;
					var Q = w.skin.getSkinElement("dock", "button").height;
					var O = w.skin.getSkinElement("dock", "button").width;
					var M = H - O - I;
					var R, L;
					if (n.align == a.html5.view.positions.LEFT) {
						P = 1;
						M = I
					}
					for (var J = 0; J < A.length; J++) {
						var U = Math.floor(S / T);
						if ((S + Q + I) > ((U + 1) * T)) {
							S = ((U + 1) * T) + I;
							U = Math.floor(S / T)
						}
						var K = j[A[J]].div;
						K.style.top = (S % T) + "px";
						K.style.left = (M + (w.skin.getSkinElement("dock", "button").width + I) * U * P) + "px";
						var N = {
							x: c.parseDimension(K.style.left),
							y: c.parseDimension(K.style.top),
							width: O,
							height: Q
						};
						if (!R || (N.x <= R.x && N.y <= R.y)) {
							R = N
						}
						if (!L || (N.x >= L.x && N.y >= L.y)) {
							L = N
						}
						K.style.width = O + "px";
						K.style.height = Q + "px";
						S += w.skin.getSkinElement("dock", "button").height + I
					}
					g = {
						x: R.x,
						y: R.y,
						width: L.x - R.x + L.width,
						height: R.y - L.y + L.height
					}
				}
				if (C != w.jwGetFullscreen() || k != H || F != T) {
					k = H;
					F = T;
					C = w.jwGetFullscreen();
					z = undefined;
					setTimeout(s, 1)
				}
			}
			function d(H) {
				return function() {
					if (!f && z != H && A.length > 0) {
						z = H;
						m.sendEvent(H, {
							component: "dock",
							boundingRect: g
						})
					}
				}
			}
			function q(H) {
				if (c.isMobile()) {
					if (H.newstate == a.api.events.state.IDLE) {
						v()
					} else {
						e()
					}
				} else {
					B()
				}
			}
			function B(H) {
				if (f) {
					return
				}
				clearTimeout(y);
				if (D.position == a.html5.view.positions.OVER || w.jwGetFullscreen()) {
					switch (w.jwGetState()) {
						case a.api.events.state.PAUSED:
						case a.api.events.state.IDLE:
							if (r && r.style.opacity < 1 && (!D.idlehide || c.exists(H))) {
								E()
							}
							if (D.idlehide) {
								y = setTimeout(function() {
									u()
								}, 2000)
							}
							break;
						default:
							if (c.exists(H)) {
								E()
							}
							y = setTimeout(function() {
								u()
							}, 2000);
							break
					}
				} else {
					E()
				}
			}
			var s = d(a.api.events.JWPLAYER_COMPONENT_SHOW);
			var G = d(a.api.events.JWPLAYER_COMPONENT_HIDE);
			this.resize = l;
			var v = function() {
				b(r, {
					display: "block"
				});
				if (f) {
					f = false;
					s()
				}
			};
			var e = function() {
				b(r, {
					display: "none"
				});
				if (!f) {
					G();
					f = true
				}
			};

			function u() {
				if (!f) {
					G();
					if (r.style.opacity == 1) {
						c.cancelAnimation(r);
						c.fadeTo(r, 0, 0.1, 1, 0)
					}
				}
			}
			function E() {
				if (!f) {
					s();
					if (r.style.opacity == 0) {
						c.cancelAnimation(r);
						c.fadeTo(r, 1, 0.1, 0, 0)
					}
				}
			}
			function p() {
				try {
					o = document.getElementById(w.id);
					o.addEventListener("mousemove", B)
				} catch (H) {
					c.log("Could not add mouse listeners to dock: " + H)
				}
			}
			this.hide = e;
			this.show = v;
			return this
		}
	})(jwplayer);
	(function(a) {
		a.html5.eventdispatcher = function(d, b) {
			var c = new a.events.eventdispatcher(b);
			a.utils.extend(this, c);
			this.sendEvent = function(e, f) {
				if (!a.utils.exists(f)) {
					f = {}
				}
				a.utils.extend(f, {
					id: d,
					version: a.version,
					type: e
				});
				c.sendEvent(e, f)
			}
		}
	})(jwplayer);
	(function(a) {
		var b = a.utils;
		a.html5.instream = function(y, m, x, z) {
			var t = {
				controlbarseekable: "always",
				controlbarpausable: true,
				controlbarstoppable: true,
				playlistclickable: true
			};
			var v, A, C = y,
				E = m,
				j = x,
				w = z,
				r, H, o, G, e, f, g, l, q, h = false,
				k, d, n = this;
			this.load = function(M, K) {
				c();
				h = true;
				A = b.extend(t, K);
				v = a.html5.playlistitem(M);
				F();
				d = document.createElement("div");
				d.id = n.id + "_instream_container";
				w.detachMedia();
				r = g.getDisplayElement();
				f = E.playlist[E.item];
				e = C.jwGetState();
				if (e == a.api.events.state.BUFFERING || e == a.api.events.state.PLAYING) {
					r.pause()
				}
				H = r.src ? r.src : r.currentSrc;
				o = r.innerHTML;
				G = r.currentTime;
				q = new a.html5.display(n, b.extend({}, E.plugins.config.display));
				q.setAlternateClickHandler(function(N) {
					if (_fakemodel.state == a.api.events.state.PAUSED) {
						n.jwInstreamPlay()
					} else {
						D(a.api.events.JWPLAYER_INSTREAM_CLICK, N)
					}
				});
				d.appendChild(q.getDisplayElement());
				if (!b.isMobile()) {
					l = new a.html5.controlbar(n, b.extend({}, E.plugins.config.controlbar, {}));
					if (E.plugins.config.controlbar.position == a.html5.view.positions.OVER) {
						d.appendChild(l.getDisplayElement())
					} else {
						var L = E.plugins.object.controlbar.getDisplayElement().parentNode;
						L.appendChild(l.getDisplayElement())
					}
				}
				j.setupInstream(d, r);
				p();
				g.load(v)
			};
			this.jwInstreamDestroy = function(K) {
				if (!h) {
					return
				}
				h = false;
				if (e != a.api.events.state.IDLE) {
					g.load(f, false);
					g.stop(false)
				} else {
					g.stop(true)
				}
				g.detachMedia();
				j.destroyInstream();
				if (l) {
					try {
						l.getDisplayElement().parentNode.removeChild(l.getDisplayElement())
					} catch (L) {}
				}
				D(a.api.events.JWPLAYER_INSTREAM_DESTROYED, {
					reason: (K ? "complete" : "destroyed")
				}, true);
				w.attachMedia();
				if (e == a.api.events.state.BUFFERING || e == a.api.events.state.PLAYING) {
					r.play();
					if (E.playlist[E.item] == f) {
						E.getMedia().seek(G)
					}
				}
				return
			};
			this.jwInstreamAddEventListener = function(K, L) {
				k.addEventListener(K, L)
			};
			this.jwInstreamRemoveEventListener = function(K, L) {
				k.removeEventListener(K, L)
			};
			this.jwInstreamPlay = function() {
				if (!h) {
					return
				}
				g.play(true)
			};
			this.jwInstreamPause = function() {
				if (!h) {
					return
				}
				g.pause(true)
			};
			this.jwInstreamSeek = function(K) {
				if (!h) {
					return
				}
				g.seek(K)
			};
			this.jwInstreamGetState = function() {
				if (!h) {
					return undefined
				}
				return _fakemodel.state
			};
			this.jwInstreamGetPosition = function() {
				if (!h) {
					return undefined
				}
				return _fakemodel.position
			};
			this.jwInstreamGetDuration = function() {
				if (!h) {
					return undefined
				}
				return _fakemodel.duration
			};
			this.playlistClickable = function() {
				return (!h || A.playlistclickable.toString().toLowerCase() == "true")
			};

			function s() {
				_fakemodel = new a.html5.model(this, E.getMedia() ? E.getMedia().getDisplayElement() : E.container, E);
				k = new a.html5.eventdispatcher();
				C.jwAddEventListener(a.api.events.JWPLAYER_RESIZE, p);
				C.jwAddEventListener(a.api.events.JWPLAYER_FULLSCREEN, p)
			}
			function c() {
				_fakemodel.setMute(E.mute);
				_fakemodel.setVolume(E.volume)
			}
			function F() {
				if (!g) {
					g = new a.html5.mediavideo(_fakemodel, E.getMedia() ? E.getMedia().getDisplayElement() : E.container);
					g.addGlobalListener(I);
					g.addEventListener(a.api.events.JWPLAYER_MEDIA_META, J);
					g.addEventListener(a.api.events.JWPLAYER_MEDIA_COMPLETE, u);
					g.addEventListener(a.api.events.JWPLAYER_MEDIA_BUFFER_FULL, B)
				}
				g.attachMedia()
			}
			function I(K) {
				if (h) {
					D(K.type, K)
				}
			}
			function B(K) {
				if (h) {
					g.play()
				}
			}
			function u(K) {
				if (h) {
					setTimeout(function() {
						n.jwInstreamDestroy(true)
					}, 10)
				}
			}
			function J(K) {
				if (K.metadata.width && K.metadata.height) {
					j.resizeMedia()
				}
			}
			function D(K, L, M) {
				if (h || M) {
					k.sendEvent(K, L)
				}
			}
			function p() {
				var K = E.plugins.object.display.getDisplayElement().style;
				if (l) {
					var L = E.plugins.object.controlbar.getDisplayElement().style;
					l.resize(b.parseDimension(K.width), b.parseDimension(K.height));
					_css(l.getDisplayElement(), b.extend({}, L, {
						zIndex: 1001,
						opacity: 1
					}))
				}
				if (q) {
					q.resize(b.parseDimension(K.width), b.parseDimension(K.height));
					_css(q.getDisplayElement(), b.extend({}, K, {
						zIndex: 1000
					}))
				}
				if (j) {
					j.resizeMedia()
				}
			}
			this.jwPlay = function(K) {
				if (A.controlbarpausable.toString().toLowerCase() == "true") {
					this.jwInstreamPlay()
				}
			};
			this.jwPause = function(K) {
				if (A.controlbarpausable.toString().toLowerCase() == "true") {
					this.jwInstreamPause()
				}
			};
			this.jwStop = function() {
				if (A.controlbarstoppable.toString().toLowerCase() == "true") {
					this.jwInstreamDestroy();
					C.jwStop()
				}
			};
			this.jwSeek = function(K) {
				switch (A.controlbarseekable.toLowerCase()) {
					case "always":
						this.jwInstreamSeek(K);
						break;
					case "backwards":
						if (_fakemodel.position > K) {
							this.jwInstreamSeek(K)
						}
						break
				}
			};
			this.jwGetPosition = function() {};
			this.jwGetDuration = function() {};
			this.jwGetWidth = C.jwGetWidth;
			this.jwGetHeight = C.jwGetHeight;
			this.jwGetFullscreen = C.jwGetFullscreen;
			this.jwSetFullscreen = C.jwSetFullscreen;
			this.jwGetVolume = function() {
				return E.volume
			};
			this.jwSetVolume = function(K) {
				g.volume(K);
				C.jwSetVolume(K)
			};
			this.jwGetMute = function() {
				return E.mute
			};
			this.jwSetMute = function(K) {
				g.mute(K);
				C.jwSetMute(K)
			};
			this.jwGetState = function() {
				return _fakemodel.state
			};
			this.jwGetPlaylist = function() {
				return [v]
			};
			this.jwGetPlaylistIndex = function() {
				return 0
			};
			this.jwGetStretching = function() {
				return E.config.stretching
			};
			this.jwAddEventListener = function(L, K) {
				k.addEventListener(L, K)
			};
			this.jwRemoveEventListener = function(L, K) {
				k.removeEventListener(L, K)
			};
			this.skin = C.skin;
			this.id = C.id + "_instream";
			s();
			return this
		}
	})(jwplayer);
	(function(a) {
		var b = {
			prefix: "",
			file: "",
			link: "",
			linktarget: "_top",
			margin: 8,
			out: 0.5,
			over: 1,
			timeout: 5,
			hide: true,
			position: "bottom-left"
		};
		_css = a.utils.css;
		a.html5.logo = function(n, r) {
			var q = n;
			var u;
			var d;
			var t;
			var h = false;
			g();

			function g() {
				o();
				q.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE, j);
				c();
				l()
			}
			function o() {
				if (b.prefix) {
					var v = n.version.split(/\W/).splice(0, 2).join("/");
					if (b.prefix.indexOf(v) < 0) {
						b.prefix += v + "/"
					}
				}
				if (r.position == a.html5.view.positions.OVER) {
					r.position = b.position
				}
				try {
					if (window.location.href.indexOf("https") == 0) {
						b.prefix = b.prefix.replace("http://l.longtailvideo.com", "https://securel.longtailvideo.com")
					}
				} catch (w) {}
				d = a.utils.extend({}, b, r)
			}
			function c() {
				t = document.createElement("img");
				t.id = q.id + "_jwplayer_logo";
				t.style.display = "none";
				t.onload = function(v) {
					_css(t, k());
					p()
				};
				if (!d.file) {
					return
				}
				if (d.file.indexOf("/") >= 0) {
					t.src = d.file
				} else {
					t.src = d.prefix + d.file
				}
			}
			if (!d.file) {
				return
			}
			this.resize = function(w, v) {};
			this.getDisplayElement = function() {
				return t
			};

			function l() {
				if (d.link) {
					t.onmouseover = f;
					t.onmouseout = p;
					t.onclick = s
				} else {
					this.mouseEnabled = false
				}
			}
			function s(v) {
				if (typeof v != "undefined") {
					v.stopPropagation()
				}
				if (!h) {
					return
				}
				q.jwPause();
				q.jwSetFullscreen(false);
				if (d.link) {
					window.open(d.link, d.linktarget)
				}
				return
			}
			function p(v) {
				if (d.link && h) {
					t.style.opacity = d.out
				}
				return
			}
			function f(v) {
				if (h) {
					t.style.opacity = d.over
				}
				return
			}
			function k() {
				var x = {
					textDecoration: "none",
					position: "absolute",
					cursor: "pointer"
				};
				x.display = (d.hide.toString() == "true" && !h) ? "none" : "block";
				var w = d.position.toLowerCase().split("-");
				for (var v in w) {
					x[w[v]] = parseInt(d.margin)
				}
				return x
			}
			function m() {
				if (d.hide.toString() == "true") {
					t.style.display = "block";
					t.style.opacity = 0;
					a.utils.fadeTo(t, d.out, 0.1, parseFloat(t.style.opacity));
					u = setTimeout(function() {
						e()
					}, d.timeout * 1000)
				}
				h = true
			}
			function e() {
				h = false;
				if (d.hide.toString() == "true") {
					a.utils.fadeTo(t, 0, 0.1, parseFloat(t.style.opacity))
				}
			}
			function j(v) {
				if (v.newstate == a.api.events.state.BUFFERING) {
					clearTimeout(u);
					m()
				}
			}
			return this
		}
	})(jwplayer);
	(function(b) {
		var d = {
			ended: b.api.events.state.IDLE,
			playing: b.api.events.state.PLAYING,
			pause: b.api.events.state.PAUSED,
			buffering: b.api.events.state.BUFFERING
		};
		var f = b.utils;
		var a = f.isMobile();
		var g, e;
		var c = {};
		b.html5.mediavideo = function(k, I) {
			var M = {
				abort: A,
				canplay: r,
				canplaythrough: r,
				durationchange: w,
				emptied: A,
				ended: r,
				error: q,
				loadeddata: w,
				loadedmetadata: w,
				loadstart: r,
				pause: r,
				play: A,
				playing: r,
				progress: G,
				ratechange: A,
				seeked: r,
				seeking: r,
				stalled: r,
				suspend: r,
				timeupdate: Q,
				volumechange: n,
				waiting: r,
				canshowcurrentframe: A,
				dataunavailable: A,
				empty: A,
				load: j,
				loadedfirstframe: A,
				webkitfullscreenchange: m
			};
			var E = {};
			var N = new b.html5.eventdispatcher();
			f.extend(this, N);
			var l = k,
				D = I,
				o, h, F, W, H, P, O = false,
				v = false,
				z = false,
				L, J, T;
			U();
			this.load = function(Y, Z) {
				if (typeof Z == "undefined") {
					Z = true
				}
				if (!v) {
					return
				}
				W = Y;
				z = (W.duration > 0);
				l.duration = W.duration;
				f.empty(o);
				o.style.display = "block";
				o.style.opacity = 1;
				if (g && e) {
					o.style.width = g;
					o.style.height = e;
					g = _previousHieght = 0
				}
				T = 0;
				s(Y.levels);
				if (Y.levels && Y.levels.length > 0) {
					if (Y.levels.length == 1 || f.isIOS()) {
						o.src = Y.levels[0].file
					} else {
						if (o.src) {
							o.removeAttribute("src")
						}
						for (var X = 0; X < Y.levels.length; X++) {
							var aa = o.ownerDocument.createElement("source");
							aa.src = Y.levels[X].file;
							o.appendChild(aa);
							T++
						}
					}
				} else {
					o.src = Y.file
				}
				o.volume = l.volume / 100;
				o.muted = l.mute;
				if (a) {
					S()
				}
				L = J = F = false;
				l.buffer = 0;
				if (!f.exists(Y.start)) {
					Y.start = 0
				}
				P = (Y.start > 0) ? Y.start : -1;
				u(b.api.events.JWPLAYER_MEDIA_LOADED);
				if ((!a && Y.levels.length == 1) || !O) {
					o.load()
				}
				O = false;
				if (Z) {
					y(b.api.events.state.BUFFERING);
					u(b.api.events.JWPLAYER_MEDIA_BUFFER, {
						bufferPercent: 0
					});
					C()
				}
				if (o.videoWidth > 0 && o.videoHeight > 0) {
					w()
				}
			};
			this.play = function() {
				if (!v) {
					return
				}
				C();
				if (J) {
					y(b.api.events.state.PLAYING)
				} else {
					o.load();
					y(b.api.events.state.BUFFERING)
				}
				o.play()
			};
			this.pause = function() {
				if (!v) {
					return
				}
				o.pause();
				y(b.api.events.state.PAUSED)
			};
			this.seek = function(X) {
				if (!v) {
					return
				}
				if (!F && o.readyState > 0) {
					if (!(l.duration <= 0 || isNaN(l.duration)) && !(l.position <= 0 || isNaN(l.position))) {
						o.currentTime = X;
						o.play()
					}
				} else {
					P = X
				}
			};
			var B = this.stop = function(X) {
				if (!v) {
					return
				}
				if (!f.exists(X)) {
					X = true
				}
				t();
				if (X) {
					J = false;
					var Y = navigator.userAgent;
					if (o.webkitSupportsFullscreen) {
						try {
							o.webkitExitFullscreen()
						} catch (Z) {}
					}
					o.style.opacity = 0;
					x();
					if (f.isIE()) {
						o.src = ""
					} else {
						o.removeAttribute("src")
					}
					f.empty(o);
					o.load();
					O = true
				}
				if (f.isIPod()) {
					g = o.style.width;
					e = o.style.height;
					o.style.width = 0;
					o.style.height = 0
				} else {
					if (f.isIPad()) {
						o.style.display = "none";
						try {
							o.webkitExitFullscreen()
						} catch (aa) {}
					}
				}
				y(b.api.events.state.IDLE)
			};
			this.fullscreen = function(X) {
				if (X === true) {
					this.resize("100%", "100%")
				} else {
					this.resize(l.config.width, l.config.height)
				}
			};
			this.resize = function(Y, X) {};
			this.volume = function(X) {
				if (!a) {
					o.volume = X / 100;
					u(b.api.events.JWPLAYER_MEDIA_VOLUME, {
						volume: (X / 100)
					})
				}
			};
			this.mute = function(X) {
				if (!a) {
					o.muted = X;
					u(b.api.events.JWPLAYER_MEDIA_MUTE, {
						mute: X
					})
				}
			};
			this.getDisplayElement = function() {
				return o
			};
			this.hasChrome = function() {
				return a && (h == b.api.events.state.PLAYING)
			};
			this.detachMedia = function() {
				v = false;
				return this.getDisplayElement()
			};
			this.attachMedia = function() {
				v = true
			};
			this.destroy = function() {
				if (o && o.parentNode) {
					t();
					for (var X in M) {
						o.removeEventListener(X, K(X, M[X]), true)
					}
					f.empty(o);
					D = o.parentNode;
					o.parentNode.removeChild(o);
					delete c[l.id];
					o = null
				}
			};

			function K(Y, X) {
				if (E[Y]) {
					return E[Y]
				} else {
					E[Y] = function(Z) {
						if (f.exists(Z.target.parentNode)) {
							X(Z)
						}
					};
					return E[Y]
				}
			}
			function U() {
				h = b.api.events.state.IDLE;
				v = true;
				o = p();
				o.setAttribute("x-webkit-airplay", "allow");
				if (D.parentNode) {
					o.id = D.id;
					D.parentNode.replaceChild(o, D)
				}
			}
			function p() {
				var X = c[l.id];
				if (!X) {
					if (D.tagName.toLowerCase() == "video") {
						X = D
					} else {
						X = document.createElement("video")
					}
					c[l.id] = X;
					if (!X.id) {
						X.id = D.id
					}
				}
				for (var Y in M) {
					X.addEventListener(Y, K(Y, M[Y]), true)
				}
				return X
			}
			function y(X) {
				if (X == b.api.events.state.PAUSED && h == b.api.events.state.IDLE) {
					return
				}
				if (a) {
					switch (X) {
						case b.api.events.state.PLAYING:
							S();
							break;
						case b.api.events.state.BUFFERING:
						case b.api.events.state.PAUSED:
							x();
							break
					}
				}
				if (h != X) {
					var Y = h;
					l.state = h = X;
					u(b.api.events.JWPLAYER_PLAYER_STATE, {
						oldstate: Y,
						newstate: X
					})
				}
			}
			function A(X) {}
			function n(X) {
				var Y = Math.round(o.volume * 100);
				u(b.api.events.JWPLAYER_MEDIA_VOLUME, {
					volume: Y
				}, true);
				u(b.api.events.JWPLAYER_MEDIA_MUTE, {
					mute: o.muted
				}, true)
			}
			function G(Z) {
				if (!v) {
					return
				}
				var Y;
				if (f.exists(Z) && Z.lengthComputable && Z.total) {
					Y = Z.loaded / Z.total * 100
				} else {
					if (f.exists(o.buffered) && (o.buffered.length > 0)) {
						var X = o.buffered.length - 1;
						if (X >= 0) {
							Y = o.buffered.end(X) / o.duration * 100
						}
					}
				}
				if (f.useNativeFullscreen() && f.exists(o.webkitDisplayingFullscreen)) {
					if (l.fullscreen != o.webkitDisplayingFullscreen) {
						u(b.api.events.JWPLAYER_FULLSCREEN, {
							fullscreen: o.webkitDisplayingFullscreen
						}, true)
					}
				}
				if (J === false && h == b.api.events.state.BUFFERING) {
					u(b.api.events.JWPLAYER_MEDIA_BUFFER_FULL);
					J = true
				}
				if (!L) {
					if (Y == 100) {
						L = true
					}
					if (f.exists(Y) && (Y > l.buffer)) {
						l.buffer = Math.round(Y);
						u(b.api.events.JWPLAYER_MEDIA_BUFFER, {
							bufferPercent: Math.round(Y)
						})
					}
				}
			}
			function Q(Y) {
				if (!v) {
					return
				}
				if (f.exists(Y) && f.exists(Y.target)) {
					if (z > 0) {
						if (!isNaN(Y.target.duration) && (isNaN(l.duration) || l.duration < 1)) {
							if (Y.target.duration == Infinity) {
								l.duration = 0
							} else {
								l.duration = Math.round(Y.target.duration * 10) / 10
							}
						}
					}
					if (!F && o.readyState > 0) {
						y(b.api.events.state.PLAYING)
					}
					if (h == b.api.events.state.PLAYING) {
						if (o.readyState > 0 && (P > -1 || !F)) {
							F = true;
							try {
								if (o.currentTime != P && P > -1) {
									o.currentTime = P;
									P = -1
								}
							} catch (X) {}
							o.volume = l.volume / 100;
							o.muted = l.mute
						}
						l.position = l.duration > 0 ? (Math.round(Y.target.currentTime * 10) / 10) : 0;
						u(b.api.events.JWPLAYER_MEDIA_TIME, {
							position: l.position,
							duration: l.duration
						});
						if (l.position >= l.duration && (l.position > 0 || l.duration > 0)) {
							R();
							return
						}
					}
				}
				G(Y)
			}
			function j(X) {}
			function r(X) {
				if (!v) {
					return
				}
				if (g && e) {
					o.style.width = g;
					o.style.height = e;
					g = _previousHieght = 0
				}
				if (d[X.type]) {
					if (X.type == "ended") {
						R()
					} else {
						y(d[X.type])
					}
				}
			}
			function w(Y) {
				if (!v) {
					return
				}
				var X = Math.round(o.duration * 10) / 10;
				var Z = {
					height: o.videoHeight,
					width: o.videoWidth,
					duration: X
				};
				if (!z) {
					if ((l.duration < X || isNaN(l.duration)) && o.duration != Infinity) {
						l.duration = X
					}
				}
				u(b.api.events.JWPLAYER_MEDIA_META, {
					metadata: Z
				})
			}
			function q(Z) {
				if (!v) {
					return
				}
				if (h == b.api.events.state.IDLE) {
					return
				}
				var Y = "There was an error: ";
				if ((Z.target.error && Z.target.tagName.toLowerCase() == "video") || Z.target.parentNode.error && Z.target.parentNode.tagName.toLowerCase() == "video") {
					var X = !f.exists(Z.target.error) ? Z.target.parentNode.error : Z.target.error;
					switch (X.code) {
						case X.MEDIA_ERR_ABORTED:
							f.log("User aborted the video playback.");
							return;
						case X.MEDIA_ERR_NETWORK:
							Y = "A network error caused the video download to fail part-way: ";
							break;
						case X.MEDIA_ERR_DECODE:
							Y = "The video playback was aborted due to a corruption problem or because the video used features your browser did not support: ";
							break;
						case X.MEDIA_ERR_SRC_NOT_SUPPORTED:
							Y = "The video could not be loaded, either because the server or network failed or because the format is not supported: ";
							break;
						default:
							Y = "An unknown error occurred: ";
							break
					}
				} else {
					if (Z.target.tagName.toLowerCase() == "source") {
						T--;
						if (T > 0) {
							return
						}
						if (f.userAgentMatch(/firefox/i)) {
							f.log("The video could not be loaded, either because the server or network failed or because the format is not supported.");
							B(false);
							return
						} else {
							Y = "The video could not be loaded, either because the server or network failed or because the format is not supported: "
						}
					} else {
						f.log("An unknown error occurred.  Continuing...");
						return
					}
				}
				B(false);
				Y += V();
				_error = true;
				u(b.api.events.JWPLAYER_ERROR, {
					message: Y
				});
				return
			}
			function V() {
				var Z = "";
				for (var Y in W.levels) {
					var X = W.levels[Y];
					var aa = D.ownerDocument.createElement("source");
					Z += b.utils.getAbsolutePath(X.file);
					if (Y < (W.levels.length - 1)) {
						Z += ", "
					}
				}
				return Z
			}
			function C() {
				if (!f.exists(H)) {
					H = setInterval(function() {
						G()
					}, 100)
				}
			}
			function t() {
				clearInterval(H);
				H = null
			}
			function R() {
				if (h == b.api.events.state.PLAYING) {
					B(false);
					u(b.api.events.JWPLAYER_MEDIA_BEFORECOMPLETE);
					u(b.api.events.JWPLAYER_MEDIA_COMPLETE)
				}
			}
			function m(X) {
				if (f.exists(o.webkitDisplayingFullscreen)) {
					if (l.fullscreen && !o.webkitDisplayingFullscreen) {
						u(b.api.events.JWPLAYER_FULLSCREEN, {
							fullscreen: false
						}, true)
					}
				}
			}
			function s(Z) {
				if (Z.length > 0 && f.userAgentMatch(/Safari/i) && !f.userAgentMatch(/Chrome/i)) {
					var X = -1;
					for (var Y = 0; Y < Z.length; Y++) {
						switch (f.extension(Z[Y].file)) {
							case "mp4":
								if (X < 0) {
									X = Y
								}
								break;
							case "webm":
								Z.splice(Y, 1);
								break
						}
					}
					if (X > 0) {
						var aa = Z.splice(X, 1)[0];
						Z.unshift(aa)
					}
				}
			}
			function S() {
				setTimeout(function() {
					o.setAttribute("controls", "controls")
				}, 100)
			}
			function x() {
				setTimeout(function() {
					o.removeAttribute("controls")
				}, 250)
			}
			function u(X, Z, Y) {
				if (v || Y) {
					if (Z) {
						N.sendEvent(X, Z)
					} else {
						N.sendEvent(X)
					}
				}
			}
		}
	})(jwplayer);
	(function(a) {
		var c = {
			ended: a.api.events.state.IDLE,
			playing: a.api.events.state.PLAYING,
			pause: a.api.events.state.PAUSED,
			buffering: a.api.events.state.BUFFERING
		};
		var b = a.utils.css;
		a.html5.mediayoutube = function(j, e) {
			var f = new a.html5.eventdispatcher();
			a.utils.extend(this, f);
			var l = j;
			var h = document.getElementById(e.id);
			var g = a.api.events.state.IDLE;
			var n, m;

			function k(p) {
				if (g != p) {
					var q = g;
					l.state = p;
					g = p;
					f.sendEvent(a.api.events.JWPLAYER_PLAYER_STATE, {
						oldstate: q,
						newstate: p
					})
				}
			}
			this.getDisplayElement = this.detachMedia = function() {
				return h
			};
			this.attachMedia = function() {};
			this.play = function() {
				if (g == a.api.events.state.IDLE) {
					f.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER, {
						bufferPercent: 100
					});
					f.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER_FULL);
					k(a.api.events.state.PLAYING)
				} else {
					if (g == a.api.events.state.PAUSED) {
						k(a.api.events.state.PLAYING)
					}
				}
			};
			this.pause = function() {
				k(a.api.events.state.PAUSED)
			};
			this.seek = function(p) {};
			this.stop = function(p) {
				if (!_utils.exists(p)) {
					p = true
				}
				l.position = 0;
				k(a.api.events.state.IDLE);
				if (p) {
					b(h, {
						display: "none"
					})
				}
			};
			this.volume = function(p) {
				l.setVolume(p);
				f.sendEvent(a.api.events.JWPLAYER_MEDIA_VOLUME, {
					volume: Math.round(p)
				})
			};
			this.mute = function(p) {
				h.muted = p;
				f.sendEvent(a.api.events.JWPLAYER_MEDIA_MUTE, {
					mute: p
				})
			};
			this.resize = function(q, p) {
				if (q * p > 0 && n) {
					n.width = m.width = q;
					n.height = m.height = p
				}
			};
			this.fullscreen = function(p) {
				if (p === true) {
					this.resize("100%", "100%")
				} else {
					this.resize(l.config.width, l.config.height)
				}
			};
			this.load = function(p) {
				o(p);
				b(n, {
					display: "block"
				});
				k(a.api.events.state.BUFFERING);
				f.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER, {
					bufferPercent: 0
				});
				f.sendEvent(a.api.events.JWPLAYER_MEDIA_LOADED);
				this.play()
			};
			this.hasChrome = function() {
				return (g != a.api.events.state.IDLE)
			};

			function o(v) {
				var s = v.levels[0].file;
				s = ["http://www.youtube.com/v/", d(s), "&amp;hl=en_US&amp;fs=1&autoplay=1"].join("");
				n = document.createElement("object");
				n.id = h.id;
				n.style.position = "absolute";
				var u = {
					movie: s,
					allowfullscreen: "true",
					allowscriptaccess: "always"
				};
				for (var p in u) {
					var t = document.createElement("param");
					t.name = p;
					t.value = u[p];
					n.appendChild(t)
				}
				m = document.createElement("embed");
				n.appendChild(m);
				var q = {
					src: s,
					type: "application/x-shockwave-flash",
					allowfullscreen: "true",
					allowscriptaccess: "always",
					width: n.width,
					height: n.height
				};
				for (var r in q) {
					m.setAttribute(r, q[r])
				}
				n.appendChild(m);
				n.style.zIndex = 2147483000;
				if (h != n && h.parentNode) {
					h.parentNode.replaceChild(n, h)
				}
				h = n
			}
			function d(q) {
				var p = q.split(/\?|\#\!/);
				var s = "";
				for (var r = 0; r < p.length; r++) {
					if (p[r].substr(0, 2) == "v=") {
						s = p[r].substr(2)
					}
				}
				if (s == "") {
					if (q.indexOf("/v/") >= 0) {
						s = q.substr(q.indexOf("/v/") + 3)
					} else {
						if (q.indexOf("youtu.be") >= 0) {
							s = q.substr(q.indexOf("youtu.be/") + 9)
						} else {
							s = q
						}
					}
				}
				if (s.indexOf("?") > -1) {
					s = s.substr(0, s.indexOf("?"))
				}
				if (s.indexOf("&") > -1) {
					s = s.substr(0, s.indexOf("&"))
				}
				return s
			}
			this.embed = m;
			return this
		}
	})(jwplayer);
	(function(jwplayer) {
		var _configurableStateVariables = ["width", "height", "start", "duration", "volume", "mute", "fullscreen", "item", "plugins", "stretching"];
		var _utils = jwplayer.utils;
		jwplayer.html5.model = function(api, container, options) {
			var _api = api;
			var _container = container;
			var _cookies = _utils.getCookies();
			var _model = {
				id: _container.id,
				playlist: [],
				state: jwplayer.api.events.state.IDLE,
				position: 0,
				buffer: 0,
				container: _container,
				config: {
					width: 480,
					height: 320,
					item: -1,
					skin: undefined,
					file: undefined,
					image: undefined,
					start: 0,
					duration: 0,
					bufferlength: 5,
					volume: _cookies.volume ? _cookies.volume : 90,
					mute: _cookies.mute && _cookies.mute.toString().toLowerCase() == "true" ? true : false,
					fullscreen: false,
					repeat: "",
					stretching: jwplayer.utils.stretching.UNIFORM,
					autostart: false,
					debug: undefined,
					screencolor: undefined
				}
			};
			var _media;
			var _eventDispatcher = new jwplayer.html5.eventdispatcher();
			var _components = ["display", "logo", "controlbar", "playlist", "dock"];
			jwplayer.utils.extend(_model, _eventDispatcher);
			for (var option in options) {
				if (typeof options[option] == "string") {
					var type = /color$/.test(option) ? "color" : null;
					options[option] = jwplayer.utils.typechecker(options[option], type)
				}
				var config = _model.config;
				var path = option.split(".");
				for (var edge in path) {
					if (edge == path.length - 1) {
						config[path[edge]] = options[option]
					} else {
						if (!jwplayer.utils.exists(config[path[edge]])) {
							config[path[edge]] = {}
						}
						config = config[path[edge]]
					}
				}
			}
			for (var index in _configurableStateVariables) {
				var configurableStateVariable = _configurableStateVariables[index];
				_model[configurableStateVariable] = _model.config[configurableStateVariable]
			}
			var pluginorder = _components.concat([]);
			if (jwplayer.utils.exists(_model.plugins)) {
				if (typeof _model.plugins == "string") {
					var userplugins = _model.plugins.split(",");
					for (var userplugin in userplugins) {
						if (typeof userplugins[userplugin] == "string") {
							pluginorder.push(userplugins[userplugin].replace(/^\s+|\s+$/g, ""))
						}
					}
				}
			}
			if (jwplayer.utils.isMobile()) {
				pluginorder = ["display", "logo", "dock", "playlist"];
				if (!jwplayer.utils.exists(_model.config.repeat)) {
					_model.config.repeat = "list"
				}
			} else {
				if (_model.config.chromeless) {
					pluginorder = ["logo", "dock", "playlist"];
					if (!jwplayer.utils.exists(_model.config.repeat)) {
						_model.config.repeat = "list"
					}
				}
			}
			_model.plugins = {
				order: pluginorder,
				config: {},
				object: {}
			};
			if (typeof _model.config.components != "undefined") {
				for (var component in _model.config.components) {
					_model.plugins.config[component] = _model.config.components[component]
				}
			}
			var playlistVisible = false;
			for (var pluginIndex in _model.plugins.order) {
				var pluginName = _model.plugins.order[pluginIndex];
				var pluginConfig = !jwplayer.utils.exists(_model.plugins.config[pluginName]) ? {} : _model.plugins.config[pluginName];
				_model.plugins.config[pluginName] = !jwplayer.utils.exists(_model.plugins.config[pluginName]) ? pluginConfig : jwplayer.utils.extend(_model.plugins.config[pluginName], pluginConfig);
				if (!jwplayer.utils.exists(_model.plugins.config[pluginName].position)) {
					if (pluginName == "playlist") {
						_model.plugins.config[pluginName].position = jwplayer.html5.view.positions.NONE
					} else {
						_model.plugins.config[pluginName].position = jwplayer.html5.view.positions.OVER
					}
				} else {
					if (pluginName == "playlist") {
						playlistVisible = true
					}
					_model.plugins.config[pluginName].position = _model.plugins.config[pluginName].position.toString().toUpperCase()
				}
			}
			if (_model.plugins.config.controlbar && playlistVisible) {
				_model.plugins.config.controlbar.hideplaylistcontrols = true
			}
			if (typeof _model.plugins.config.dock != "undefined") {
				if (typeof _model.plugins.config.dock != "object") {
					var position = _model.plugins.config.dock.toString().toUpperCase();
					_model.plugins.config.dock = {
						position: position
					}
				}
				if (typeof _model.plugins.config.dock.position != "undefined") {
					_model.plugins.config.dock.align = _model.plugins.config.dock.position;
					_model.plugins.config.dock.position = jwplayer.html5.view.positions.OVER
				}
				if (typeof _model.plugins.config.dock.idlehide == "undefined") {
					try {
						_model.plugins.config.dock.idlehide = _model.plugins.config.controlbar.idlehide
					} catch (e) {}
				}
			}
			function _loadExternal(playlistfile) {
				var loader = new jwplayer.html5.playlistloader();
				loader.addEventListener(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED, function(evt) {
					_model.playlist = new jwplayer.html5.playlist(evt);
					_loadComplete(true)
				});
				loader.addEventListener(jwplayer.api.events.JWPLAYER_ERROR, function(evt) {
					_model.playlist = new jwplayer.html5.playlist({
						playlist: []
					});
					_loadComplete(false)
				});
				loader.load(playlistfile)
			}
			function _loadComplete() {
				if (_model.config.shuffle) {
					_model.item = _getShuffleItem()
				} else {
					if (_model.config.item >= _model.playlist.length) {
						_model.config.item = _model.playlist.length - 1
					} else {
						if (_model.config.item < 0) {
							_model.config.item = 0
						}
					}
					_model.item = _model.config.item
				}
				_model.position = 0;
				_model.duration = _model.playlist.length > 0 ? _model.playlist[_model.item].duration : 0;
				_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED, {
					playlist: _model.playlist
				});
				_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_ITEM, {
					index: _model.item
				})
			}
			_model.loadPlaylist = function(arg) {
				var input;
				if (typeof arg == "string") {
					if (arg.indexOf("[") == 0 || arg.indexOf("{") == "0") {
						try {
							input = eval(arg)
						} catch (err) {
							input = arg
						}
					} else {
						input = arg
					}
				} else {
					input = arg
				}
				var config;
				switch (jwplayer.utils.typeOf(input)) {
					case "object":
						config = input;
						break;
					case "array":
						config = {
							playlist: input
						};
						break;
					default:
						config = {
							file: input
						};
						break
				}
				_model.playlist = new jwplayer.html5.playlist(config);
				_model.item = _model.config.item >= 0 ? _model.config.item : 0;
				if (!_model.playlist[0].provider && _model.playlist[0].file) {
					_loadExternal(_model.playlist[0].file)
				} else {
					_loadComplete()
				}
			};

			function _getShuffleItem() {
				var result = null;
				if (_model.playlist.length > 1) {
					while (!jwplayer.utils.exists(result)) {
						result = Math.floor(Math.random() * _model.playlist.length);
						if (result == _model.item) {
							result = null
						}
					}
				} else {
					result = 0
				}
				return result
			}
			function forward(evt) {
				switch (evt.type) {
					case jwplayer.api.events.JWPLAYER_MEDIA_LOADED:
						_container = _media.getDisplayElement();
						break;
					case jwplayer.api.events.JWPLAYER_MEDIA_MUTE:
						this.mute = evt.mute;
						break;
					case jwplayer.api.events.JWPLAYER_MEDIA_VOLUME:
						this.volume = evt.volume;
						break
				}
				_eventDispatcher.sendEvent(evt.type, evt)
			}
			var _mediaProviders = {};
			_model.setActiveMediaProvider = function(playlistItem) {
				if (playlistItem.provider == "audio") {
					playlistItem.provider = "sound"
				}
				var provider = playlistItem.provider;
				var current = _media ? _media.getDisplayElement() : null;
				if (provider == "sound" || provider == "http" || provider == "") {
					provider = "video"
				}
				if (!jwplayer.utils.exists(_mediaProviders[provider])) {
					switch (provider) {
						case "video":
							_media = new jwplayer.html5.mediavideo(_model, current ? current : _container);
							break;
						case "youtube":
							_media = new jwplayer.html5.mediayoutube(_model, current ? current : _container);
							break
					}
					if (!jwplayer.utils.exists(_media)) {
						return false
					}
					_media.addGlobalListener(forward);
					_mediaProviders[provider] = _media
				} else {
					if (_media != _mediaProviders[provider]) {
						if (_media) {
							_media.stop()
						}
						_media = _mediaProviders[provider]
					}
				}
				return true
			};
			_model.getMedia = function() {
				return _media
			};
			_model.seek = function(pos) {
				_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_MEDIA_SEEK, {
					position: _model.position,
					offset: pos
				});
				return _media.seek(pos)
			};
			_model.setVolume = function(newVol) {
				_utils.saveCookie("volume", newVol);
				_model.volume = newVol
			};
			_model.setMute = function(state) {
				_utils.saveCookie("mute", state);
				_model.mute = state
			};
			_model.setupPlugins = function() {
				if (!jwplayer.utils.exists(_model.plugins) || !jwplayer.utils.exists(_model.plugins.order) || _model.plugins.order.length == 0) {
					jwplayer.utils.log("No plugins to set up");
					return _model
				}
				for (var i = 0; i < _model.plugins.order.length; i++) {
					try {
						var pluginName = _model.plugins.order[i];
						if (jwplayer.utils.exists(jwplayer.html5[pluginName])) {
							if (pluginName == "playlist") {
								_model.plugins.object[pluginName] = new jwplayer.html5.playlistcomponent(_api, _model.plugins.config[pluginName])
							} else {
								_model.plugins.object[pluginName] = new jwplayer.html5[pluginName](_api, _model.plugins.config[pluginName])
							}
						} else {
							_model.plugins.order.splice(plugin, plugin + 1)
						}
						if (typeof _model.plugins.object[pluginName].addGlobalListener == "function") {
							_model.plugins.object[pluginName].addGlobalListener(forward)
						}
					} catch (err) {
						jwplayer.utils.log("Could not setup " + pluginName)
					}
				}
			};
			return _model
		}
	})(jwplayer);
	(function(a) {
		a.html5.playlist = function(b) {
			var d = [];
			if (b.playlist && b.playlist instanceof Array && b.playlist.length > 0) {
				for (var c in b.playlist) {
					if (!isNaN(parseInt(c))) {
						d.push(new a.html5.playlistitem(b.playlist[c]))
					}
				}
			} else {
				d.push(new a.html5.playlistitem(b))
			}
			return d
		}
	})(jwplayer);
	(function(a) {
		var c = {
			size: 180,
			position: a.html5.view.positions.NONE,
			itemheight: 60,
			thumbs: true,
			fontcolor: "#000000",
			overcolor: "",
			activecolor: "",
			backgroundcolor: "#f8f8f8",
			font: "_sans",
			fontsize: "",
			fontstyle: "",
			fontweight: ""
		};
		var b = {
			_sans: "Arial, Helvetica, sans-serif",
			_serif: "Times, Times New Roman, serif",
			_typewriter: "Courier New, Courier, monospace"
		};
		_utils = a.utils;
		_css = _utils.css;
		_hide = function(d) {
			_css(d, {
				display: "none"
			})
		};
		_show = function(d) {
			_css(d, {
				display: "block"
			})
		};
		a.html5.playlistcomponent = function(r, C) {
			var x = r;
			var e = a.utils.extend({}, c, x.skin.getComponentSettings("playlist"), C);
			if (e.position == a.html5.view.positions.NONE || typeof a.html5.view.positions[e.position] == "undefined") {
				return
			}
			var y;
			var l;
			var D;
			var d;
			var g;
			var f;
			var k = -1;
			var h = {
				background: undefined,
				item: undefined,
				itemOver: undefined,
				itemImage: undefined,
				itemActive: undefined
			};
			this.getDisplayElement = function() {
				return y
			};
			this.resize = function(G, E) {
				l = G;
				D = E;
				if (x.jwGetFullscreen()) {
					_hide(y)
				} else {
					var F = {
						display: "block",
						width: l,
						height: D
					};
					_css(y, F)
				}
			};
			this.show = function() {
				_show(y)
			};
			this.hide = function() {
				_hide(y)
			};

			function j() {
				y = document.createElement("div");
				y.id = x.id + "_jwplayer_playlistcomponent";
				y.style.overflow = "hidden";
				switch (e.position) {
					case a.html5.view.positions.RIGHT:
					case a.html5.view.positions.LEFT:
						y.style.width = e.size + "px";
						break;
					case a.html5.view.positions.TOP:
					case a.html5.view.positions.BOTTOM:
						y.style.height = e.size + "px";
						break
				}
				B();
				if (h.item) {
					e.itemheight = h.item.height
				}
				y.style.backgroundColor = "#C6C6C6";
				x.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED, s);
				x.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM, v);
				x.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE, m)
			}
			function p() {
				var E = document.createElement("ul");
				_css(E, {
					width: y.style.width,
					minWidth: y.style.width,
					height: y.style.height,
					backgroundColor: e.backgroundcolor,
					backgroundImage: h.background ? "url(" + h.background.src + ")" : "",
					color: e.fontcolor,
					listStyle: "none",
					margin: 0,
					padding: 0,
					fontFamily: b[e.font] ? b[e.font] : b._sans,
					fontSize: (e.fontsize ? e.fontsize : 11) + "px",
					fontStyle: e.fontstyle,
					fontWeight: e.fontweight,
					overflowY: "auto"
				});
				return E
			}
			function z(E) {
				return function() {
					var F = f.getElementsByClassName("item")[E];
					var G = e.fontcolor;
					var H = h.item ? "url(" + h.item.src + ")" : "";
					if (E == x.jwGetPlaylistIndex()) {
						if (e.activecolor !== "") {
							G = e.activecolor
						}
						if (h.itemActive) {
							H = "url(" + h.itemActive.src + ")"
						}
					}
					_css(F, {
						color: e.overcolor !== "" ? e.overcolor : G,
						backgroundImage: h.itemOver ? "url(" + h.itemOver.src + ")" : H
					})
				}
			}
			function o(E) {
				return function() {
					var F = f.getElementsByClassName("item")[E];
					var G = e.fontcolor;
					var H = h.item ? "url(" + h.item.src + ")" : "";
					if (E == x.jwGetPlaylistIndex()) {
						if (e.activecolor !== "") {
							G = e.activecolor
						}
						if (h.itemActive) {
							H = "url(" + h.itemActive.src + ")"
						}
					}
					_css(F, {
						color: G,
						backgroundImage: H
					})
				}
			}
			function q(J) {
				var Q = d[J];
				var P = document.createElement("li");
				P.className = "item";
				_css(P, {
					height: e.itemheight,
					display: "block",
					cursor: "pointer",
					backgroundImage: h.item ? "url(" + h.item.src + ")" : "",
					backgroundSize: "100% " + e.itemheight + "px"
				});
				P.onmouseover = z(J);
				P.onmouseout = o(J);
				var K = document.createElement("div");
				var G = new Image();
				var L = 0;
				var M = 0;
				var N = 0;
				if (w() && (Q.image || Q["playlist.image"] || h.itemImage)) {
					G.className = "image";
					if (h.itemImage) {
						L = (e.itemheight - h.itemImage.height) / 2;
						M = h.itemImage.width;
						N = h.itemImage.height
					} else {
						M = e.itemheight * 4 / 3;
						N = e.itemheight
					}
					_css(K, {
						height: N,
						width: M,
						"float": "left",
						styleFloat: "left",
						cssFloat: "left",
						margin: "0 5px 0 0",
						background: "black",
						overflow: "hidden",
						margin: L + "px",
						position: "relative"
					});
					_css(G, {
						position: "relative"
					});
					K.appendChild(G);
					G.onload = function() {
						a.utils.stretch(a.utils.stretching.FILL, G, M, N, this.naturalWidth, this.naturalHeight)
					};
					if (Q["playlist.image"]) {
						G.src = Q["playlist.image"]
					} else {
						if (Q.image) {
							G.src = Q.image
						} else {
							if (h.itemImage) {
								G.src = h.itemImage.src
							}
						}
					}
					P.appendChild(K)
				}
				var F = l - M - L * 2;
				if (D < e.itemheight * d.length) {
					F -= 15
				}
				var E = document.createElement("div");
				_css(E, {
					position: "relative",
					height: "100%",
					overflow: "hidden"
				});
				var H = document.createElement("span");
				if (Q.duration > 0) {
					H.className = "duration";
					_css(H, {
						fontSize: (e.fontsize ? e.fontsize : 11) + "px",
						fontWeight: (e.fontweight ? e.fontweight : "bold"),
						width: "40px",
						height: e.fontsize ? e.fontsize + 10 : 20,
						lineHeight: 24,
						"float": "right",
						styleFloat: "right",
						cssFloat: "right"
					});
					H.innerHTML = _utils.timeFormat(Q.duration);
					E.appendChild(H)
				}
				var O = document.createElement("span");
				O.className = "title";
				_css(O, {
					padding: "5px 5px 0 " + (L ? 0 : "5px"),
					height: e.fontsize ? e.fontsize + 10 : 20,
					lineHeight: e.fontsize ? e.fontsize + 10 : 20,
					overflow: "hidden",
					"float": "left",
					styleFloat: "left",
					cssFloat: "left",
					width: ((Q.duration > 0) ? F - 50 : F) - 10 + "px",
					fontSize: (e.fontsize ? e.fontsize : 13) + "px",
					fontWeight: (e.fontweight ? e.fontweight : "bold")
				});
				O.innerHTML = Q ? Q.title : "";
				E.appendChild(O);
				if (Q.description) {
					var I = document.createElement("span");
					I.className = "description";
					_css(I, {
						display: "block",
						"float": "left",
						styleFloat: "left",
						cssFloat: "left",
						margin: 0,
						paddingLeft: O.style.paddingLeft,
						paddingRight: O.style.paddingRight,
						lineHeight: (e.fontsize ? e.fontsize + 4 : 16) + "px",
						overflow: "hidden",
						position: "relative"
					});
					I.innerHTML = Q.description;
					E.appendChild(I)
				}
				P.appendChild(E);
				return P
			}
			function s(F) {
				y.innerHTML = "";
				d = t();
				if (!d) {
					return
				}
				items = [];
				f = p();
				for (var G = 0; G < d.length; G++) {
					var E = q(G);
					E.onclick = A(G);
					f.appendChild(E);
					items.push(E)
				}
				k = x.jwGetPlaylistIndex();
				o(k)();
				y.appendChild(f);
				if (_utils.isIOS() && window.iScroll) {
					f.style.height = e.itemheight * d.length + "px";
					var H = new iScroll(y.id)
				}
			}
			function t() {
				var F = x.jwGetPlaylist();
				var G = [];
				for (var E = 0; E < F.length; E++) {
					if (!F[E]["ova.hidden"]) {
						G.push(F[E])
					}
				}
				return G
			}
			function A(E) {
				return function() {
					x.jwPlaylistItem(E);
					x.jwPlay(true)
				}
			}
			function n() {
				f.scrollTop = x.jwGetPlaylistIndex() * e.itemheight
			}
			function w() {
				return e.thumbs.toString().toLowerCase() == "true"
			}
			function v(E) {
				if (k >= 0) {
					o(k)();
					k = E.index
				}
				o(E.index)();
				n()
			}
			function m() {
				if (e.position == a.html5.view.positions.OVER) {
					switch (x.jwGetState()) {
						case a.api.events.state.IDLE:
							_show(y);
							break;
						default:
							_hide(y);
							break
					}
				}
			}
			function B() {
				for (var E in h) {
					h[E] = u(E)
				}
			}
			function u(E) {
				return x.skin.getSkinElement("playlist", E)
			}
			j();
			return this
		}
	})(jwplayer);
	(function(b) {
		b.html5.playlistitem = function(d) {
			var e = {
				author: "",
				date: "",
				description: "",
				image: "",
				link: "",
				mediaid: "",
				tags: "",
				title: "",
				provider: "",
				file: "",
				streamer: "",
				duration: -1,
				start: 0,
				currentLevel: -1,
				levels: []
			};
			var c = b.utils.extend({}, e, d);
			if (c.type) {
				c.provider = c.type;
				delete c.type
			}
			if (c.levels.length === 0) {
				c.levels[0] = new b.html5.playlistitemlevel(c)
			}
			if (!c.provider) {
				c.provider = a(c.levels[0])
			} else {
				c.provider = c.provider.toLowerCase()
			}
			return c
		};

		function a(e) {
			if (b.utils.isYouTube(e.file)) {
				return "youtube"
			} else {
				var f = b.utils.extension(e.file);
				var c;
				if (f && b.utils.extensionmap[f]) {
					if (f == "m3u8") {
						return "video"
					}
					c = b.utils.extensionmap[f].html5
				} else {
					if (e.type) {
						c = e.type
					}
				}
				if (c) {
					var d = c.split("/")[0];
					if (d == "audio") {
						return "sound"
					} else {
						if (d == "video") {
							return d
						}
					}
				}
			}
			return ""
		}
	})(jwplayer);
	(function(a) {
		a.html5.playlistitemlevel = function(b) {
			var d = {
				file: "",
				streamer: "",
				bitrate: 0,
				width: 0
			};
			for (var c in d) {
				if (a.utils.exists(b[c])) {
					d[c] = b[c]
				}
			}
			return d
		}
	})(jwplayer);
	(function(a) {
		a.html5.playlistloader = function() {
			var c = new a.html5.eventdispatcher();
			a.utils.extend(this, c);
			this.load = function(e) {
				a.utils.ajax(e, d, b)
			};

			function d(g) {
				var f = [];
				try {
					var f = a.utils.parsers.rssparser.parse(g.responseXML.firstChild);
					c.sendEvent(a.api.events.JWPLAYER_PLAYLIST_LOADED, {
						playlist: new a.html5.playlist({
							playlist: f
						})
					})
				} catch (h) {
					b("Could not parse the playlist")
				}
			}
			function b(e) {
				c.sendEvent(a.api.events.JWPLAYER_ERROR, {
					message: e ? e : "Could not load playlist an unknown reason."
				})
			}
		}
	})(jwplayer);
	(function(a) {
		a.html5.skin = function() {
			var b = {};
			var c = false;
			this.load = function(d, e) {
				new a.html5.skinloader(d, function(f) {
					c = true;
					b = f;
					e()
				}, function() {
					new a.html5.skinloader("", function(f) {
						c = true;
						b = f;
						e()
					})
				})
			};
			this.getSkinElement = function(d, e) {
				if (c) {
					try {
						return b[d].elements[e]
					} catch (f) {
						a.utils.log("No such skin component / element: ", [d, e])
					}
				}
				return null
			};
			this.getComponentSettings = function(d) {
				if (c && b && b[d]) {
					return b[d].settings
				}
				return null
			};
			this.getComponentLayout = function(d) {
				if (c) {
					return b[d].layout
				}
				return null
			}
		}
	})(jwplayer);
	(function(a) {
		a.html5.skinloader = function(f, p, k) {
			var o = {};
			var c = p;
			var l = k;
			var e = true;
			var j;
			var n = f;
			var s = false;

			function m() {
				if (typeof n != "string" || n === "") {
					d(a.html5.defaultSkin().xml)
				} else {
					a.utils.ajax(a.utils.getAbsolutePath(n), function(t) {
						try {
							if (a.utils.exists(t.responseXML)) {
								d(t.responseXML);
								return
							}
						} catch (u) {
							h()
						}
						d(a.html5.defaultSkin().xml)
					}, function(t) {
						d(a.html5.defaultSkin().xml)
					})
				}
			}
			function d(y) {
				var E = y.getElementsByTagName("component");
				if (E.length === 0) {
					return
				}
				for (var H = 0; H < E.length; H++) {
					var C = E[H].getAttribute("name");
					var B = {
						settings: {},
						elements: {},
						layout: {}
					};
					o[C] = B;
					var G = E[H].getElementsByTagName("elements")[0].getElementsByTagName("element");
					for (var F = 0; F < G.length; F++) {
						b(G[F], C)
					}
					var z = E[H].getElementsByTagName("settings")[0];
					if (z && z.childNodes.length > 0) {
						var K = z.getElementsByTagName("setting");
						for (var P = 0; P < K.length; P++) {
							var Q = K[P].getAttribute("name");
							var I = K[P].getAttribute("value");
							var x = /color$/.test(Q) ? "color" : null;
							o[C].settings[Q] = a.utils.typechecker(I, x)
						}
					}
					var L = E[H].getElementsByTagName("layout")[0];
					if (L && L.childNodes.length > 0) {
						var M = L.getElementsByTagName("group");
						for (var w = 0; w < M.length; w++) {
							var A = M[w];
							o[C].layout[A.getAttribute("position")] = {
								elements: []
							};
							for (var O = 0; O < A.attributes.length; O++) {
								var D = A.attributes[O];
								o[C].layout[A.getAttribute("position")][D.name] = D.value
							}
							var N = A.getElementsByTagName("*");
							for (var v = 0; v < N.length; v++) {
								var t = N[v];
								o[C].layout[A.getAttribute("position")].elements.push({
									type: t.tagName
								});
								for (var u = 0; u < t.attributes.length; u++) {
									var J = t.attributes[u];
									o[C].layout[A.getAttribute("position")].elements[v][J.name] = J.value
								}
								if (!a.utils.exists(o[C].layout[A.getAttribute("position")].elements[v].name)) {
									o[C].layout[A.getAttribute("position")].elements[v].name = t.tagName
								}
							}
						}
					}
					e = false;
					r()
				}
			}
			function r() {
				clearInterval(j);
				if (!s) {
					j = setInterval(function() {
						q()
					}, 100)
				}
			}
			function b(y, x) {
				var w = new Image();
				var t = y.getAttribute("name");
				var v = y.getAttribute("src");
				var A;
				if (v.indexOf("data:image/png;base64,") === 0) {
					A = v
				} else {
					var u = a.utils.getAbsolutePath(n);
					var z = u.substr(0, u.lastIndexOf("/"));
					A = [z, x, v].join("/")
				}
				o[x].elements[t] = {
					height: 0,
					width: 0,
					src: "",
					ready: false,
					image: w
				};
				w.onload = function(B) {
					g(w, t, x)
				};
				w.onerror = function(B) {
					s = true;
					r();
					l()
				};
				w.src = A
			}
			function h() {
				for (var u in o) {
					var w = o[u];
					for (var t in w.elements) {
						var x = w.elements[t];
						var v = x.image;
						v.onload = null;
						v.onerror = null;
						delete x.image;
						delete w.elements[t]
					}
					delete o[u]
				}
			}
			function q() {
				for (var t in o) {
					if (t != "properties") {
						for (var u in o[t].elements) {
							if (!o[t].elements[u].ready) {
								return
							}
						}
					}
				}
				if (e === false) {
					clearInterval(j);
					c(o)
				}
			}
			function g(t, v, u) {
				if (o[u] && o[u].elements[v]) {
					o[u].elements[v].height = t.height;
					o[u].elements[v].width = t.width;
					o[u].elements[v].src = t.src;
					o[u].elements[v].ready = true;
					r()
				} else {
					a.utils.log("Loaded an image for a missing element: " + u + "." + v)
				}
			}
			m()
		}
	})(jwplayer);
	(function(a) {
		a.html5.api = function(c, p) {
			var n = {};
			var g = document.createElement("div");
			c.parentNode.replaceChild(g, c);
			g.id = c.id;
			n.version = a.version;
			n.id = g.id;
			var m = new a.html5.model(n, g, p);
			var k = new a.html5.view(n, g, m);
			var l = new a.html5.controller(n, g, m, k);
			n.skin = new a.html5.skin();
			n.jwPlay = function(q) {
				if (typeof q == "undefined") {
					f()
				} else {
					if (q.toString().toLowerCase() == "true") {
						l.play()
					} else {
						l.pause()
					}
				}
			};
			n.jwPause = function(q) {
				if (typeof q == "undefined") {
					f()
				} else {
					if (q.toString().toLowerCase() == "true") {
						l.pause()
					} else {
						l.play()
					}
				}
			};

			function f() {
				if (m.state == a.api.events.state.PLAYING || m.state == a.api.events.state.BUFFERING) {
					l.pause()
				} else {
					l.play()
				}
			}
			n.jwStop = l.stop;
			n.jwSeek = l.seek;
			n.jwPlaylistItem = function(q) {
				if (d) {
					if (d.playlistClickable()) {
						d.jwInstreamDestroy();
						return l.item(q)
					}
				} else {
					return l.item(q)
				}
			};
			n.jwPlaylistNext = l.next;
			n.jwPlaylistPrev = l.prev;
			n.jwResize = l.resize;
			n.jwLoad = l.load;
			n.jwDetachMedia = l.detachMedia;
			n.jwAttachMedia = l.attachMedia;

			function j(q) {
				return function() {
					return m[q]
				}
			}
			function e(q, s, r) {
				return function() {
					var t = m.plugins.object[q];
					if (t && t[s] && typeof t[s] == "function") {
						t[s].apply(t, r)
					}
				}
			}
			n.jwGetPlaylistIndex = j("item");
			n.jwGetPosition = j("position");
			n.jwGetDuration = j("duration");
			n.jwGetBuffer = j("buffer");
			n.jwGetWidth = j("width");
			n.jwGetHeight = j("height");
			n.jwGetFullscreen = j("fullscreen");
			n.jwSetFullscreen = l.setFullscreen;
			n.jwGetVolume = j("volume");
			n.jwSetVolume = l.setVolume;
			n.jwGetMute = j("mute");
			n.jwSetMute = l.setMute;
			n.jwGetStretching = function() {
				return m.stretching.toUpperCase()
			};
			n.jwGetState = j("state");
			n.jwGetVersion = function() {
				return n.version
			};
			n.jwGetPlaylist = function() {
				return m.playlist
			};
			n.jwAddEventListener = l.addEventListener;
			n.jwRemoveEventListener = l.removeEventListener;
			n.jwSendEvent = l.sendEvent;
			n.jwDockSetButton = function(t, q, r, s) {
				if (m.plugins.object.dock && m.plugins.object.dock.setButton) {
					m.plugins.object.dock.setButton(t, q, r, s)
				}
			};
			n.jwControlbarShow = e("controlbar", "show");
			n.jwControlbarHide = e("controlbar", "hide");
			n.jwDockShow = e("dock", "show");
			n.jwDockHide = e("dock", "hide");
			n.jwDisplayShow = e("display", "show");
			n.jwDisplayHide = e("display", "hide");
			var d;
			n.jwLoadInstream = function(r, q) {
				if (!d) {
					d = new a.html5.instream(n, m, k, l)
				}
				setTimeout(function() {
					d.load(r, q)
				}, 10)
			};
			n.jwInstreamDestroy = function() {
				if (d) {
					d.jwInstreamDestroy()
				}
			};
			n.jwInstreamAddEventListener = o("jwInstreamAddEventListener");
			n.jwInstreamRemoveEventListener = o("jwInstreamRemoveEventListener");
			n.jwInstreamGetState = o("jwInstreamGetState");
			n.jwInstreamGetDuration = o("jwInstreamGetDuration");
			n.jwInstreamGetPosition = o("jwInstreamGetPosition");
			n.jwInstreamPlay = o("jwInstreamPlay");
			n.jwInstreamPause = o("jwInstreamPause");
			n.jwInstreamSeek = o("jwInstreamSeek");

			function o(q) {
				return function() {
					if (d && typeof d[q] == "function") {
						return d[q].apply(this, arguments)
					} else {
						_utils.log("Could not call instream method - instream API not initialized")
					}
				}
			}
			n.jwDestroy = function() {
				l.destroy()
			};
			n.jwGetLevel = function() {};
			n.jwGetBandwidth = function() {};
			n.jwGetLockState = function() {};
			n.jwLock = function() {};
			n.jwUnlock = function() {};

			function b() {
				if (m.config.playlistfile) {
					m.addEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED, h);
					m.loadPlaylist(m.config.playlistfile)
				} else {
					if (typeof m.config.playlist == "string") {
						m.addEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED, h);
						m.loadPlaylist(m.config.playlist)
					} else {
						m.loadPlaylist(m.config);
						setTimeout(h, 25)
					}
				}
			}
			function h(q) {
				m.removeEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED, h);
				m.setupPlugins();
				k.setup();
				var q = {
					id: n.id,
					version: n.version
				};
				l.playerReady(q)
			}
			if (m.config.chromeless && !a.utils.isIOS()) {
				b()
			} else {
				n.skin.load(m.config.skin, b)
			}
			return n
		}
	})(jwplayer)
};
/* End "jwplayer-5.10/jwplayer-c9mod.min.js" */
/* Begin "modules.js" */
// Generated by CoffeeScript 1.6.2
/*
 * NETEYE Activity Indicator jQuery Plugin
 *
 * Copyright (c) 2010 NETEYE GmbH
 * Licensed under the MIT license
 *
 * Author: Felix Gnass [fgnass at neteye dot de]
 * Version: 1.0.0
 */
(function($){$.fn.activity=function(opts){this.each(function(){var $this=$(this);var el=$this.data("activity");if(el){clearInterval(el.data("interval"));el.remove();$this.removeData("activity");}if(opts!==false){opts=$.extend({color:$this.css("color")},$.fn.activity.defaults,opts);el=render($this,opts).css("position","absolute").prependTo(opts.outside?"body":$this);var h=$this.outerHeight()-el.height();var w=$this.outerWidth()-el.width();var margin={top:opts.valign=="top"?opts.padding:opts.valign=="bottom"?h-opts.padding:Math.floor(h/2),left:opts.align=="left"?opts.padding:opts.align=="right"?w-opts.padding:Math.floor(w/2)};var offset=$this.offset();if(opts.outside){el.css({top:offset.top+"px",left:offset.left+"px"});}else{margin.top-=el.offset().top-offset.top;margin.left-=el.offset().left-offset.left;}el.css({marginTop:margin.top+"px",marginLeft:margin.left+"px"});animate(el,opts.segments,Math.round(10/opts.speed)/10);$this.data("activity",el);}});return this;};$.fn.activity.defaults={segments:12,space:3,length:7,width:4,speed:1.2,align:"center",valign:"center",padding:4};$.fn.activity.getOpacity=function(opts,i){var steps=opts.steps||opts.segments-1;var end=opts.opacity!==undefined?opts.opacity:1/steps;return 1-Math.min(i,steps)*(1-end)/steps;};var render=function(){return $("<div>").addClass("busy");};var animate=function(){};function svg(tag,attr){var el=document.createElementNS("http://www.w3.org/2000/svg",tag||"svg");if(attr){$.each(attr,function(k,v){el.setAttributeNS(null,k,v);});}return $(el);}if(document.createElementNS&&document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect){render=function(target,d){var innerRadius=d.width*2+d.space;var r=(innerRadius+d.length+Math.ceil(d.width/2)+1);var el=svg().width(r*2).height(r*2);var g=svg("g",{"stroke-width":d.width,"stroke-linecap":"round",stroke:d.color}).appendTo(svg("g",{transform:"translate("+r+","+r+")"}).appendTo(el));for(var i=0;i<d.segments;i++){g.append(svg("line",{x1:0,y1:innerRadius,x2:0,y2:innerRadius+d.length,transform:"rotate("+(360/d.segments*i)+", 0, 0)",opacity:$.fn.activity.getOpacity(d,i)}));}return $("<div>").append(el).width(2*r).height(2*r);};if(document.createElement("div").style.WebkitAnimationName!==undefined){var animations={};animate=function(el,steps,duration){if(!animations[steps]){var name="spin"+steps;var rule="@-webkit-keyframes "+name+" {";for(var i=0;i<steps;i++){var p1=Math.round(100000/steps*i)/1000;var p2=Math.round(100000/steps*(i+1)-1)/1000;var value="% { -webkit-transform:rotate("+Math.round(360/steps*i)+"deg); }\n";rule+=p1+value+p2+value;}rule+="100% { -webkit-transform:rotate(100deg); }\n}";document.styleSheets[0].insertRule(rule, 0);animations[steps]=name;}el.css("-webkit-animation",animations[steps]+" "+duration+"s linear infinite");};}else{animate=function(el,steps,duration){var rotation=0;var g=el.find("g g").get(0);el.data("interval",setInterval(function(){g.setAttributeNS(null,"transform","rotate("+(++rotation%steps*(360/steps))+")");},duration*1000/steps));};}}else{var s=$("<shape>").css("behavior","url(#default#VML)").appendTo("body");if(s.get(0).adj){var sheet=document.createStyleSheet();$.each(["group","shape","stroke"],function(){sheet.addRule(this,"behavior:url(#default#VML);");});render=function(target,d){var innerRadius=d.width*2+d.space;var r=(innerRadius+d.length+Math.ceil(d.width/2)+1);var s=r*2;var o=-Math.ceil(s/2);var el=$("<group>",{coordsize:s+" "+s,coordorigin:o+" "+o}).css({top:o,left:o,width:s,height:s});for(var i=0;i<d.segments;i++){el.append($("<shape>",{path:"m "+innerRadius+",0  l "+(innerRadius+d.length)+",0"}).css({width:s,height:s,rotation:(360/d.segments*i)+"deg"}).append($("<stroke>",{color:d.color,weight:d.width+"px",endcap:"round",opacity:$.fn.activity.getOpacity(d,i)})));}return $("<group>",{coordsize:s+" "+s}).css({width:s,height:s,overflow:"hidden"}).append(el);};animate=function(el,steps,duration){var rotation=0;var g=el.get(0);el.data("interval",setInterval(function(){g.style.rotation=++rotation%steps*(360/steps);},duration*1000/steps));};}$(s).remove();}})(jQuery);
;

/*
* Placeholder plugin for jQuery
* ---
* Copyright 2010, Daniel Stocks (http://webcloud.se)
* Released under the MIT, BSD, and GPL Licenses.
*/

(function(b){function d(a){this.input=a;a.attr("type")=="password"&&this.handlePassword();b(a[0].form).submit(function(){if(a.hasClass("placeholder")&&a[0].value==a.attr("placeholder"))a[0].value=""})}d.prototype={show:function(a){if(this.input[0].value===""||a&&this.valueIsPlaceholder()){if(this.isPassword)try{this.input[0].setAttribute("type","text")}catch(b){this.input.before(this.fakePassword.show()).hide()}this.input.addClass("placeholder");this.input[0].value=this.input.attr("placeholder")}},
hide:function(){if(this.valueIsPlaceholder()&&this.input.hasClass("placeholder")&&(this.input.removeClass("placeholder"),this.input[0].value="",this.isPassword)){try{this.input[0].setAttribute("type","password")}catch(a){}this.input.show();this.input[0].focus()}},valueIsPlaceholder:function(){return this.input[0].value==this.input.attr("placeholder")},handlePassword:function(){var a=this.input;a.attr("realType","password");this.isPassword=!0;if(b.browser.msie&&a[0].outerHTML){var c=b(a[0].outerHTML.replace(/type=(['"])?password\1/gi,
"type=$1text$1"));this.fakePassword=c.val(a.attr("placeholder")).addClass("placeholder").focus(function(){a.trigger("focus");b(this).hide()});b(a[0].form).submit(function(){c.remove();a.show()})}}};var e=!!("placeholder"in document.createElement("input"));b.fn.placeholder=function(){return e?this:this.each(function(){var a=b(this),c=new d(a);c.show(!0);a.focus(function(){c.hide()});a.blur(function(){c.show(!1)});b.browser.msie&&(b(window).load(function(){a.val()&&a.removeClass("placeholder");c.show(!0)}),
a.focus(function(){if(this.value==""){var a=this.createTextRange();a.collapse(!0);a.moveStart("character",0);a.select()}}))})}})(jQuery);
// '
;(function($) {
  var BaseModule;

  if (!window.cloud9) {
    throw "Missing `cloud9` module";
  }
  $.fn.serializeObject = function() {
    var arrayData, objectData;

    arrayData = this.serializeArray();
    objectData = {};
    $.each(arrayData, function() {
      var value;

      if (this.value != null) {
        value = this.value;
      } else {
        value = '';
      }
      if (objectData[this.name] != null) {
        if (!objectData[this.name].push) {
          objectData[this.name] = [objectData[this.name]];
        }
        return objectData[this.name].push(value);
      } else {
        return objectData[this.name] = value;
      }
    });
    return objectData;
  };
  BaseModule = (function() {
    function BaseModule(container, options) {
      this.$ = $(container);
      this.id = options.id;
      this.options = options;
      this.reflows = [];
    }

    BaseModule.prototype.initialize = function() {};

    BaseModule.prototype.enter = function() {};

    BaseModule.prototype.exit = function() {};

    BaseModule.prototype.bind = function() {
      return this.$.bind.apply(this.$, arguments);
    };

    BaseModule.prototype.trigger = function() {
      return this.$.trigger.apply(this.$, arguments);
    };

    BaseModule.prototype.unbind = function() {
      return this.$.unbind.apply(this.$, arguments);
    };

    BaseModule.prototype.registerForReflow = function(elems) {
      return $(elems).trigger('needsreflow');
    };

    BaseModule.prototype._responseDataKey = function() {
      return "module_data:" + this.id;
    };

    BaseModule.prototype.responseData = function() {
      var data;

      data = cloud9.promos.responseData(this._responseDataKey());
      if (data == null) {
        cloud9.promos.responseData(this._responseDataKey(), {});
        data = cloud9.promos.responseData(this._responseDataKey());
      }
      if (arguments.length === 0) {
        return data;
      } else if (arguments.length === 1 && arguments[0] === null) {
        return cloud9.promos.responseData(this._responseDataKey(), {});
      } else if (arguments.length === 1 && Object.prototype.toString.call(arguments[0]) === '[object String]') {
        return data[arguments[0]];
      } else if (arguments.length === 1 && $.isPlainObject(arguments[0])) {
        return cloud9.promos.responseData(this._responseDataKey(), arguments[0]);
      } else if (arguments.length === 2 && Object.prototype.toString.call(arguments[0]) === '[object String]') {
        data[arguments[0]] = arguments[1];
        return cloud9.promos.responseData(this._responseDataKey(), data);
      } else {
        throw "Invalid arguments.";
      }
    };

    return BaseModule;

  })();
  cloud9.modules = new (function() {
    var _deferredPromoBinds,
      _this = this;

    this.registry = {};
    _deferredPromoBinds = {};
    this.get = function(instanceKey) {
      if (_this.registry[instanceKey]) {
        return _this.registry[instanceKey];
      }
      return null;
    };
    this.register = function(instanceKey, module) {
      return _this.registry[instanceKey] = module;
    };
    return this;
  });
  cloud9.modules.BaseModule = BaseModule;
  return $(function() {
    $('input[placeholder], textarea[placeholder]').placeholder();
    return $('span.tab-parent').bind('keypress', function(e) {
      var code;

      code = e.keyCode || e.which;
      if (code === 13 && $(this).is(":focus")) {
        $(this).parent().click();
        return e.preventDefault();
      }
    });
  });
})(jQuery);

/* End "modules.js" */
/* Begin "ui.js" */
// Generated by CoffeeScript 1.7.1
var debounce;

debounce = function(func, threshold, execAsap) {
  var timeout;
  timeout = null;
  return function() {
    var args, delayed, obj;
    obj = this;
    args = arguments;
    delayed = function() {
      if (!execAsap) {
        func.apply(obj, args);
      }
      return timeout = null;
    };
    if (timeout) {
      clearTimeout(timeout);
    } else if (execAsap) {
      func.apply(obj, args);
    }
    return timeout = setTimeout(delayed, threshold || 100);
  };
};

cloud9.BgFader = function(bgelem) {
  var $bge;
  $bge = $(bgelem);
  $bge.css({
    visibility: 'hidden',
    display: 'block',
    opacity: 0.0
  });
  return $bge.imagesLoaded(function() {
    $bge.css({
      visibility: 'visible',
      display: 'block'
    });
    return $bge.animate({
      opacity: 1.0
    });
  });
};

cloud9.Moflo = function(container, options) {
  var $cont, _current, _locked, _needsReflows, _steps;
  $cont = $(container).css({
    overflow: 'hidden'
  });
  options = $.extend({
    peakSize: 25,
    opacity: 0.3,
    yOffset: 0,
    xOffset: 0,
    onReady: function() {},
    resizeContainer: false
  }, options);
  _steps = [];
  _current = NaN;
  _locked = false;
  _needsReflows = [];
  $cont.on('needsreflow', function(e) {
    return _needsReflows.push(e.target);
  });
  this.ready = (function(_this) {
    return function() {
      var s, _i, _len;
      for (_i = 0, _len = _steps.length; _i < _len; _i++) {
        s = _steps[_i];
        s.$elem.show();
      }
      _this.goto(0, false);
      _this.reflow();
      return options.onReady();
    };
  })(this);
  this.addModulePage = (function(_this) {
    return function(module, opts) {
      return _this.addPage(module.$, $.extend({}, {
        enter: function() {
          return module.enter.call(module);
        },
        exit: function() {
          return module.exit.call(module);
        }
      }, opts));
    };
  })(this);
  this.addPage = (function(_this) {
    return function(elem, opts, context) {
      var $elem;
      $elem = $(elem).css({
        position: 'absolute'
      });
      if (!(opts != null ? opts.ignoreComplete : void 0)) {
        $elem.bind('complete', _this.next);
      }
      _steps.push({
        $elem: $elem,
        enter: function() {
          return opts != null ? opts.enter.call(context || window) : void 0;
        },
        exit: function() {
          return opts != null ? opts.exit.call(context || window) : void 0;
        },
        enterAsap: (opts != null ? opts.enterAsap : void 0) || false
      });
      if (_steps.length === 1) {
        return $elem.imagesLoaded(_this.ready);
      }
    };
  })(this);
  this.goto = (function(_this) {
    return function(num, animate, callback) {
      var doGoto, page, pageEnterAsap;
      page = _this.getPage(num);
      pageEnterAsap = page.enterAsap;
      doGoto = function() {
        var completed, meth, pageEnter;
        if ((num === _current) || _locked) {
          return;
        }
        meth = animate === false ? 'css' : 'animate';
        pageEnter = page.enter;
        if (options.resizeContainer) {
          $cont.css({
            'min-width': page.$elem.width(),
            'min-height': page.$elem.height()
          });
        }
        completed = function() {
          page.$elem.addClass('active');
          _locked = false;
          if (!pageEnterAsap) {
            pageEnter();
          }
          _this.browserReflow();
          return _this.reflow(false);
        };
        if (_this.getPage(_current)) {
          _this.getPage(_current).$elem.removeClass('active');
          _this.getPage(_current).exit();
        }
        if (pageEnterAsap) {
          pageEnter();
        }
        _current = num;
        if (meth === 'animate') {
          _locked = true;
          return _this.reflow(true, completed);
        } else {
          _this.reflow();
          return completed();
        }
      };
      if (pageEnterAsap) {
        return doGoto();
      } else {
        return _.defer(doGoto);
      }
    };
  })(this);
  this.next = (function(_this) {
    return function() {
      return _this.goto(_current + 1);
    };
  })(this);
  this.getPage = (function(_this) {
    return function(i) {
      return _steps[i];
    };
  })(this);
  this.getElem = (function(_this) {
    return function(i) {
      var _ref;
      return ((_ref = _steps[i]) != null ? _ref.$elem : void 0) || void 0;
    };
  })(this);
  this.getNext = (function(_this) {
    return function() {
      return _this.getElem(_current + 1);
    };
  })(this);
  this.getPrev = (function(_this) {
    return function() {
      return _this.getElem(_current - 1);
    };
  })(this);
  this.getCurrent = (function(_this) {
    return function() {
      return _this.getElem(_current);
    };
  })(this);
  this.browserReflow = _.debounce(((function(_this) {
    return function() {
      var $fakeElem;
      $fakeElem = $('<div style="width:0;height:0;"></div>');
      return $(_needsReflows).each(function() {
        var $clone, blah;
        blah = this.offsetHeight;
        $clone = $fakeElem.clone(false);
        return $(this).append($clone);
      });
    };
  })(this)), 80);
  this.reflow = (function(_this) {
    return function(animate, animationCallback) {
      return _.defer(function() {
        var doResize, j, transition, _i, _ref, _results;
        animationCallback || (animationCallback = function() {});
        transition = function($e, obj) {
          if (animate === true) {
            return $e.animate(obj, function() {
              return animationCallback();
            });
          } else {
            return $e.css(obj);
          }
        };
        doResize = function(j, $e) {
          var leftVal, relativeIndex, topVal;
          if (options.resizeContainer && j === _current) {
            $cont.css({
              'min-width': $e.width(),
              'min-height': $e.height()
            });
          }
          relativeIndex = j - _current;
          topVal = $cont.height() / 2 - $e.height() / 2 + options.yOffset;
          leftVal = $cont.width() * relativeIndex + $cont.width() / 2 - $e.width() / 2;
          if (relativeIndex < -1) {
            leftVal = -$e.width();
          } else if (relativeIndex === -1) {
            leftVal = -$e.width() + options.peakSize;
          } else if (relativeIndex === 1) {
            leftVal = $cont.width() - options.peakSize;
          } else if (relativeIndex > 1) {
            leftVal = $cont.width();
          } else {
            leftVal = $cont.width() / 2 - $e.width() / 2;
          }
          if (relativeIndex === -1 || relativeIndex === 1) {
            return transition($e, {
              top: topVal,
              left: leftVal,
              opacity: options.opacity
            });
          } else if (relativeIndex === 0) {
            return transition($e, {
              top: topVal,
              left: leftVal,
              opacity: 1.0
            });
          } else {
            return transition($e, {
              top: topVal,
              left: leftVal
            });
          }
        };
        _results = [];
        for (j = _i = 0, _ref = _steps.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; j = 0 <= _ref ? ++_i : --_i) {
          _results.push(doResize(j, _steps[j].$elem));
        }
        return _results;
      });
    };
  })(this);
  this.throttledResize = debounce(this.reflow, 33);
  this.throttledOrientationChange = debounce(this.reflow, 100);
  window.setTimeout((function(_this) {
    return function() {
      $(window).on('resize', _this.throttledResize);
      $(window).bind('orientationchange', _this.throttledOrientationChange);
      return $cont.imagesLoaded(_this.ready);
    };
  })(this), 0);
  return this;
};

/* End "ui.js" */
/* Begin "videoapi.js" */
// Generated by CoffeeScript 1.6.2
/*
# Cloud Nine VideoApi
# (c) Cloud Nine 2012
*/

var GenericDeviceHandler, IEHandler, IPhoneHandler, VideoApi, c9log, getSupportedDeviceHandler, staticUrl, stringify, _ref,
  _this = this,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

staticUrl = cloud9.promos.staticUrl || function(url) {
  return url;
};

Boolean.prototype.toUpperCase = function() {
  return ("" + this).toUpperCase();
};

c9log = function(msg, lvl) {
  if (lvl <= logLevel) {
    if (window.console) {
      return console.log(msg);
    }
  }
};

stringify = function(obj) {
  var _ref;

  if ((_ref = window.JSON) != null ? _ref.stringify : void 0) {
    return window.JSON.stringify(obj);
  } else {
    return obj;
  }
};

getSupportedDeviceHandler = function() {
  var ua;

  ua = navigator.userAgent;
  if (ua.match(/iPhone/)) {
    return IPhoneHandler;
  }
  if (ua.match(/MSIE/)) {
    return IEHandler;
  } else {
    return GenericDeviceHandler;
  }
};

/* Event Handlers
*/


GenericDeviceHandler = (function() {
  GenericDeviceHandler.prototype.disabledModes = [];

  function GenericDeviceHandler(jwplayer, api) {
    this.trigger = __bind(this.trigger, this);
    var _this = this;

    this.jwplayer = jwplayer;
    this.api = api;
    this._events = [];
    this.everPlayed = false;
    this.everPaused = false;
    this.everFullscreened = false;
    this.completed = false;
    jwplayer.onError((function() {
      return _this.handleError.apply(_this, arguments);
    }));
    jwplayer.onPlay((function() {
      return _this.handlePlay.apply(_this, arguments);
    }));
    jwplayer.onPause((function() {
      return _this.handlePause.apply(_this, arguments);
    }));
    jwplayer.onBuffer((function() {
      return _this.handleBuffer.apply(_this, arguments);
    }));
    jwplayer.onSeek((function() {
      return _this.handleSeek.apply(_this, arguments);
    }));
    jwplayer.onIdle((function() {
      return _this.handleIdle.apply(_this, arguments);
    }));
    jwplayer.onFullscreen((function() {
      return _this.handleFullscreen.apply(_this, arguments);
    }));
  }

  GenericDeviceHandler.prototype.supportsThisUseragent = function() {
    return true;
  };

  GenericDeviceHandler.prototype.name = "generic-device-handler";

  GenericDeviceHandler.prototype.handleError = function(reason) {
    c9log("Jwplayer error: " + reason, 1);
    if (reason.type === 'jwplayerError') {
      if (reason.message.indexOf('404') > -1) {
        return this.trigger('fail', reason);
      }
    } else {
      return this.trigger('error', reason);
    }
  };

  GenericDeviceHandler.prototype.handlePause = function(obj) {
    this.jwplayer.play(true);
    c9log("handlePause: oldstate=" + obj.oldstate, 2);
    if (obj.oldstate === 'PLAYING') {
      return this.everPaused = true;
    }
  };

  GenericDeviceHandler.prototype.handlePlay = function(obj) {
    var _this = this;

    c9log("handlePlay: oldstate=" + obj.oldstate, 2);
    if (!this.everPlayed) {
      this.everPlayed = true;
      c9log("Started playing...", 1);
      this.jwplayer.onComplete((function() {
        return _this.handleComplete.apply(_this, arguments);
      }));
      return this.trigger("start");
    }
  };

  GenericDeviceHandler.prototype.handleBuffer = function(obj) {
    return c9log("handleBuffer: oldstate=" + obj.oldstate, 2);
  };

  GenericDeviceHandler.prototype.handleIdle = function() {
    return c9log("handleIdle", 2);
  };

  GenericDeviceHandler.prototype.handleFullscreen = function(obj) {
    c9log("handleFullscreen: " + obj.fullscreen, 2);
    if (obj.fullscreen) {
      return this.everFullscreened = true;
    }
  };

  GenericDeviceHandler.prototype.handleComplete = function(obj) {
    c9log("handleComplete", 2);
    this.completed = true;
    return this.trigger('complete');
  };

  GenericDeviceHandler.prototype.handleSeek = function(obj) {
    c9log("handleSeek: from=" + obj.position + " to=" + obj.offset, 2);
    return c9log("Reverting to pre-seek location", 1);
  };

  GenericDeviceHandler.prototype.bind = function(evt, fn) {
    if (typeof fn === 'undefined' || fn === null) {
      throw "Can't bind null or undefined function.";
    }
    if (this._events[evt]) {
      return this._events[evt].push(fn);
    } else {
      return this._events[evt] = [fn];
    }
  };

  GenericDeviceHandler.prototype.trigger = function() {
    var evt, fn, _i, _len, _ref, _results;

    evt = arguments[0];
    if (!this._events[evt]) {
      return;
    }
    c9log("Triggering " + this.name + " handler for `" + evt + "` (" + this._events[evt].length + " handlers)", 2);
    _ref = this._events[evt];
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      fn = _ref[_i];
      _results.push(fn.apply(this, Array.prototype.slice.call(arguments, 1)));
    }
    return _results;
  };

  return GenericDeviceHandler;

})();

IPhoneHandler = (function(_super) {
  __extends(IPhoneHandler, _super);

  IPhoneHandler.prototype.disabledModes = [];

  function IPhoneHandler(jwplayer, api) {
    var _this = this;

    IPhoneHandler.__super__.constructor.call(this, jwplayer, api);
    window.onorientationchange = (function() {
      return _this.handleOrientationChange();
    });
  }

  IPhoneHandler.prototype.handleOrientationChange = function() {
    switch (window.orientation) {
      case 0:
        return this.trigger("portrait");
      case 90:
      case -90:
        return this.trigger("landscape");
    }
  };

  IPhoneHandler.prototype.handleFullscreen = function(obj) {
    IPhoneHandler.__super__.handleFullscreen.call(this, obj);
    if (!obj.fullscreen && !this.completed) {
      return this.trigger("user:paused");
    }
  };

  IPhoneHandler.prototype.handlePlay = function(obj) {
    if (this.everPlayed) {
      this.trigger("user:unpaused");
    }
    return IPhoneHandler.__super__.handlePlay.call(this, obj);
  };

  return IPhoneHandler;

})(GenericDeviceHandler);

IEHandler = (function(_super) {
  __extends(IEHandler, _super);

  function IEHandler() {
    _ref = IEHandler.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  IEHandler.prototype.disabledModes = [];

  return IEHandler;

})(GenericDeviceHandler);

VideoApi = window.cloud9.VideoApi = function(elem, options) {
  var $elem, $im, basicDefaults, beginPolling, beginSkipCounter, callProgressHook, canPollPlayer, doProgressCheck, elapsedStartedPlay, elapsedTriedToStartPlay, endSkip, ensureFinalProgressCallback, ensurePolling, finish, getPlugins, getVideo, getVideoUrl, giveUp, isComplete, jwerror, maxPlaySkip, modeOpts, percentComplete, pollIntervalId, reportError, restartTimers, skinUrl, skipTick, start, startedPlay, stopTimers, triedToStartPlay, triggerErrorOnFailState, _calledProgressHooks, _defaultProgressHook, _everFullscreened, _everPolled, _evts, _gaveUp, _jwOptions, _lastError, _pollFailCount, _reportedComplete, _skipTimerRunning, _startedPlayTimer, _trackedFailOnce, _triedToStartPlayTimer,
    _this = this;

  $elem = $(elem);
  _skipTimerRunning = false;
  _reportedComplete = false;
  _gaveUp = false;
  _lastError = null;
  _everFullscreened = false;
  _everPolled = false;
  _trackedFailOnce = false;
  _defaultProgressHook = {
    url: '',
    data: '',
    type: 'GET',
    cache: false
  };
  _calledProgressHooks = {};
  _evts = {};
  _pollFailCount = 0;
  _startedPlayTimer = new cloud9.Timer();
  _triedToStartPlayTimer = new cloud9.Timer();
  pollIntervalId = null;
  /*
  
  Private utilities
  */

  elapsedTriedToStartPlay = function() {
    return _triedToStartPlayTimer.read();
  };
  triedToStartPlay = function() {
    return _triedToStartPlayTimer.read() > 0;
  };
  elapsedStartedPlay = function() {
    return _startedPlayTimer.read();
  };
  startedPlay = function() {
    return _startedPlayTimer.read() > 0;
  };
  stopTimers = function() {
    _startedPlayTimer.stop();
    _triedToStartPlayTimer.stop();
    return _skipTimerRunning = false;
  };
  restartTimers = function() {
    _startedPlayTimer.start();
    _triedToStartPlayTimer.start();
    return _skipTimerRunning = true;
  };
  getVideo = function() {
    return _this.options.video || _this.options.videos[0];
  };
  getVideoUrl = function() {
    return getVideo().src || getVideo();
  };
  getPlugins = function() {
    var plugs, _ref1;

    plugs = {};
    if ((_ref1 = getVideo()) != null ? _ref1.captions : void 0) {
      plugs[_this.options.jwRoot + "captions.swf"] = {
        file: getVideo().captions
      };
    }
    if (_this.options.qualityMonitor) {
      plugs["qualitymonitor-2"] = {};
    }
    return plugs;
  };
  percentComplete = function() {
    return _this.jwplayer.getPosition() * 100 / _this.jwplayer.getDuration();
  };
  isComplete = function() {
    var p;

    if (_reportedComplete) {
      return true;
    }
    p = percentComplete();
    if (p === NaN) {
      return void 0;
    }
    return p > 97;
  };
  canPollPlayer = function() {
    var badDur, badPos, canPoll, _ref1, _ref2;

    badDur = (_ref1 = _this.jwplayer.getDuration()) === null || _ref1 === (void 0) || _ref1 === 0 || _ref1 === 1 || _ref1 === (-1);
    badPos = (_ref2 = _this.jwplayer.getPosition()) === null || _ref2 === (void 0) || _ref2 === (-1);
    canPoll = !(badDur || badPos);
    if (canPoll) {
      _everPolled = true;
    }
    return canPoll;
  };
  callProgressHook = function(pct, hookOpts) {
    var opts;

    _calledProgressHooks[pct] = hookOpts;
    delete _this.options.progressHooks[pct];
    opts = $.extend({}, _defaultProgressHook, hookOpts);
    if (opts.pascalEvent) {
      c9log("At `" + pct + "`, tracking event `" + (stringify(opts.pascalEvent)) + "`", 2);
      cloud9.promos.track(hookOpts.pascalEvent);
    }
    if (opts.url) {
      c9log("At `" + pct + "`, pinging `" + opts.url + "`", 1);
      return $.ajax(opts);
    }
  };
  doProgressCheck = function() {
    var hookOpts, pct, pctComplete, pctFlt, _ref1, _results;

    pctComplete = parseFloat(percentComplete());
    _ref1 = _this.options.progressHooks;
    _results = [];
    for (pct in _ref1) {
      hookOpts = _ref1[pct];
      pctFlt = parseFloat(pct);
      if (pctFlt < pctComplete) {
        _results.push(callProgressHook(pct, hookOpts));
      } else if (pctFlt === 100.0 && pctComplete > _this.options.completeAtPercent) {
        _results.push(callProgressHook(pct, hookOpts));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };
  ensureFinalProgressCallback = function() {
    var hookOpts, pct, _ref1, _results;

    _ref1 = _this.options.progressHooks;
    _results = [];
    for (pct in _ref1) {
      hookOpts = _ref1[pct];
      if (parseFloat(pct) === 100.0) {
        if (parseFloat(percentComplete()) > _this.options.completeAtPercent) {
          callProgressHook(pct, _this.options.progressHooks[pct]);
        }
        break;
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };
  giveUp = function(panic) {
    _gaveUp = true;
    c9log("Gave up on playing video.", 0);
    if (panic) {
      c9log("Performing fail redirect...", 0);
      return cloud9.promos.failRedirect();
    } else {
      _this.trackFailStateOnce();
      return _this.trigger('onFail');
    }
  };
  triggerErrorOnFailState = function() {
    var buffer, playSkew, timedoutPlay, timedoutStart, _ref1, _ref2;

    if (!triedToStartPlay()) {
      return false;
    }
    if (!startedPlay()) {
      timedoutStart = elapsedTriedToStartPlay() > _this.options.startTimeout;
      if (timedoutStart) {
        buffer = (_ref1 = _this.jwplayer) != null ? _ref1.getBuffer() : void 0;
        if (buffer !== null && buffer > 0 && buffer < 20) {
          reportError({
            code: "START_TIMEOUT_BUFFER"
          });
          giveUp(true);
        } else {
          reportError({
            code: "START_TIMEOUT_UNKNOWN"
          });
          giveUp();
        }
      }
      return timedoutStart;
    }
    if (isComplete()) {
      return false;
    }
    playSkew = elapsedStartedPlay() - (_this.jwplayer.getPosition() * 1000);
    timedoutPlay = playSkew > _this.options.playTimeout;
    if (timedoutPlay) {
      buffer = (_ref2 = _this.jwplayer) != null ? _ref2.getBuffer() : void 0;
      if (buffer !== null && buffer < 100) {
        reportError({
          code: 'PLAY_TIMEOUT_BUFFER'
        });
      } else if (buffer === 100) {
        reportError({
          code: 'PLAY_TIMEOUT_USER'
        });
      } else {
        reportError({
          code: 'PLAY_TIMEOUT_UNKNOWN'
        });
      }
      giveUp();
    }
    return timedoutPlay;
  };
  skipTick = function() {
    var skipLeft;

    skipLeft = parseInt((_this.options.playSkip - elapsedStartedPlay()) / 1000);
    if (skipLeft <= 0) {
      return endSkip();
    } else {
      return _this.trigger('skipLeft', skipLeft);
    }
  };
  endSkip = function() {
    _this.trigger('skipLeft', 0);
    _this.trigger('skipOk');
    return _skipTimerRunning = false;
  };
  beginSkipCounter = function() {
    return _skipTimerRunning = true;
  };
  beginPolling = function() {
    var self;

    self = _this;
    return pollIntervalId = setInterval((function() {
      var _ref1, _ref10, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;

      c9log("duration=" + ((_ref1 = self.jwplayer) != null ? (_ref2 = _ref1.getDuration()) != null ? _ref2.toFixed(2) : void 0 : void 0) + ";          position=" + ((_ref3 = self.jwplayer) != null ? (_ref4 = _ref3.getPosition()) != null ? _ref4.toFixed(2) : void 0 : void 0) + ";          pct=" + ((_ref5 = percentComplete()) != null ? _ref5.toFixed(2) : void 0) + ";          buffer=" + ((_ref6 = self.jwplayer) != null ? (_ref7 = _ref6.getBuffer()) != null ? _ref7.toFixed(2) : void 0 : void 0) + ";", 1);
      if (self.jwplayer.getDuration() === -1) {
        self.jwplayer.load(getVideoUrl());
      }
      doProgressCheck();
      if (_gaveUp) {
        clearInterval(pollIntervalId);
        endSkip();
        return;
      }
      if (_skipTimerRunning) {
        skipTick();
      }
      if (isComplete()) {
        clearInterval(pollIntervalId);
        endSkip();
        return;
      } else {
        if (!canPollPlayer()) {
          self.jwplayer.play(true);
        } else if (percentComplete() === 0) {
          self.jwplayer.play(true);
        }
      }
      if (canPollPlayer()) {
        if (triggerErrorOnFailState()) {
          return (_ref8 = window.console) != null ? _ref8.log("Is in FAIL state!") : void 0;
        }
      } else {
        if ((_ref9 = window.console) != null) {
          _ref9.log("Unable to poll video");
        }
        if (!startedPlay() && elapsedTriedToStartPlay() > _this.options.startTimeout) {
          if ((_ref10 = window.console) != null) {
            _ref10.log("I dont think the video was able to be started.");
          }
          if (self.jwplayer.getState() === void 0) {
            reportError({
              code: "START_NO_LOAD_PLAYER"
            });
            return giveUp();
          } else {
            reportError({
              code: "START_TIMEOUT_NOPOLL"
            });
            return giveUp();
          }
        }
      }
    }), _this.options.pollInterval);
  };
  reportError = function(reason) {
    var k, trackObj, v, _ref1, _ref2, _ref3, _ref4;

    _this.errored = true;
    trackObj = {
      dur: ((_ref1 = _this.jwplayer) != null ? _ref1.getDuration() : void 0) || null,
      pos: ((_ref2 = _this.jwplayer) != null ? _ref2.getPosition() : void 0) || null,
      started: elapsedStartedPlay() || null,
      tried_start: elapsedTriedToStartPlay() || null,
      buffer: ((_ref3 = _this.jwplayer) != null ? _ref3.getBuffer() : void 0) || null,
      fullscreen: ((_ref4 = _this.jwplayer) != null ? _ref4.getFullscreen() : void 0) || null
    };
    for (k in trackObj) {
      v = trackObj[k];
      if (v === null) {
        delete trackObj[k];
      }
    }
    if (typeof reason === 'string') {
      trackObj['message'] = reason;
    } else {
      $.extend(trackObj, reason);
    }
    _lastError = trackObj;
    return c9log("Error: " + (stringify(reason)), 0);
  };
  finish = function() {
    var stateInfo;

    _this.fullscreen(false);
    $elem.hide();
    _this.trackFailStateOnce();
    stateInfo = $.extend({}, _this.getStateInfo());
    return c9log("Finished with state: " + (stringify(stateInfo)), 2);
  };
  ensurePolling = function() {
    if (_triedToStartPlayTimer.read() === 0) {
      _triedToStartPlayTimer.start();
    }
    if (!pollIntervalId) {
      return beginPolling();
    }
  };
  start = function() {
    ensurePolling();
    _this.fullscreen(_this.options.fullscreen);
    beginSkipCounter();
    return _startedPlayTimer.start();
  };
  jwerror = function() {
    reportError({
      message: reason.message,
      code: "NOT_FOUND"
    });
    return giveUp();
  };
  /*
  
  Videoapi Controls
  */

  this.initialize = function() {
    var DeviceHandler, enabledModes, mode, placeholderId, _i, _j, _len, _len1, _ref1, _ref2, _ref3;

    if (!getVideo()) {
      reportError({
        code: "BAD_CONFIG"
      });
      giveUp();
      return;
    }
    DeviceHandler = getSupportedDeviceHandler();
    enabledModes = [];
    if (_this.options.forceMode) {
      _ref1 = _jwOptions.modes;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        mode = _ref1[_i];
        if (mode.type === _this.options.forceMode) {
          enabledModes.push(mode);
        }
      }
    } else {
      _ref2 = _jwOptions.modes;
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        mode = _ref2[_j];
        if (_ref3 = mode.type, __indexOf.call(DeviceHandler.prototype.disabledModes, _ref3) >= 0) {
          continue;
        } else {
          enabledModes.push(mode);
        }
      }
    }
    _jwOptions.modes = enabledModes;
    _this.jwplayer = jwplayer($elem.get(0)).setup(_jwOptions);
    placeholderId = $elem.attr('id');
    _this.jwplayer.onReady(function() {
      var $placeHolder, _ref4;

      $placeHolder = $('#' + placeholderId);
      $placeHolder.css({
        'background-color': _this.options.videoBackgroundColor
      });
      if (((_ref4 = _this.options.defaultMode) != null ? _ref4.slice(0, 6) : void 0) === 'mobile') {
        return $placeHolder.addClass('mobile');
      }
    });
    _this.handler = new DeviceHandler(_this.jwplayer);
    _this.handler.bind("complete", finish);
    _this.handler.bind("complete", ensureFinalProgressCallback);
    _this.handler.bind("complete", (function() {
      return _this.trigger('onComplete');
    }));
    _this.handler.bind("start", start);
    _this.handler.bind("fail", function() {
      giveUp();
      return _this.trigger('onFail');
    });
    return _this.handler.bind("error", reportError);
  };
  this.isMostlyComplete = function() {
    return percentComplete() > _this.options.completeAtPercent;
  };
  this.bind = function(evt, fn) {
    if (typeof fn === 'undefined' || fn === null) {
      throw "Can't bind null or undefined function.";
    }
    if (_evts[evt]) {
      return _evts[evt].push(fn);
    } else {
      return _evts[evt] = [fn];
    }
  };
  this.trigger = function() {
    var evt, fn, _i, _len, _ref1, _results;

    evt = arguments[0];
    if (!_evts[evt]) {
      return;
    }
    c9log("Triggering api event: `" + evt + "` (" + _evts[evt].length + " functions)", 1);
    _ref1 = _evts[evt];
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      fn = _ref1[_i];
      _results.push(fn.apply(_this, Array.prototype.slice.call(arguments, 1)));
    }
    return _results;
  };
  this.fullscreen = function(fullscreen) {
    return _this.jwplayer.setFullscreen(fullscreen);
  };
  this.stop = function() {
    clearInterval(pollIntervalId);
    return _this.jwplayer.stop();
  };
  this.playNow = function() {
    var error;

    ensurePolling();
    try {
      return _this.jwplayer.play(true);
    } catch (_error) {
      error = _error;
      reportError({
        code: "PLAY_EXCEPTION"
      });
      return giveUp();
    }
  };
  this.play = function() {
    return _this.jwplayer.onReady(function() {
      return _this.playNow(true);
    });
  };
  this.getStateInfo = function() {
    var k, state, v, _ref1, _ref2, _ref3;

    state = {
      error_code: _lastError != null ? _lastError.code : void 0,
      error_message: _lastError != null ? _lastError.message : void 0,
      completed: parseFloat((percentComplete() || 0).toFixed(2)),
      duration: parseFloat((_ref1 = _this.jwplayer.getDuration()) != null ? _ref1.toFixed(2) : void 0),
      position: parseFloat((_ref2 = _this.jwplayer.getPosition()) != null ? _ref2.toFixed(2) : void 0),
      canpoll: _everPolled,
      elapsed_try: parseFloat((elapsedTriedToStartPlay() / 1000).toFixed(2)),
      elapsed_started: parseFloat((elapsedStartedPlay() / 1000).toFixed(2)),
      buffered: parseFloat((_ref3 = _this.jwplayer.getBuffer()) != null ? _ref3.toFixed(2) : void 0),
      did_fullscreen: _everFullscreened
    };
    for (k in state) {
      v = state[k];
      if (v === null || v === void 0) {
        delete state[k];
      }
    }
    return state;
  };
  this.trackFailStateOnce = function() {
    if (!_trackedFailOnce) {
      return _trackedFailOnce = _this.trackFailState();
    }
  };
  this.trackFailState = function() {
    var state;

    state = _this.getStateInfo();
    if (state.error_code) {
      c9log("Tracking fail state " + state.error_code, 1);
      switch (state.error_code) {
        case 'START_TIMEOUT_NOPOLL':
          cloud9.promos.track("vid_fail_start_nopoll");
          break;
        case 'START_TIMEOUT_BUFFER':
          cloud9.promos.track('vid_fail_start_buff');
          break;
        case 'START_TIMEOUT_UNKNOWN':
          cloud9.promos.track('vid_fail_start_unkn');
          break;
        case 'START_NO_LOAD_PLAYER':
          cloud9.promos.track('vid_fail_start_no_load');
          break;
        case 'PLAY_TIMEOUT_BUFFER':
          cloud9.promos.track('vid_fail_play_buff');
          break;
        case 'PLAY_TIMEOUT_UNKNOWN':
          cloud9.promos.track('vid_fail_play_unkn');
          break;
        case 'PLAY_TIMEOUT_USER':
          cloud9.promos.track('vid_fail_play_user');
          break;
        default:
          cloud9.promos.track('vid_fail');
      }
      return true;
    } else {
      return false;
    }
  };
  /*
  
  Event Handlers
  */

  /*
  
   Setup option defaults; Run initialization logic
  */

  basicDefaults = {
    pascalTracking: true,
    logLevel: 0,
    fullscreen: false,
    playSkip: 16000,
    playTimeout: 13000,
    startTimeout: 13000,
    completeAtPercent: 95,
    pollInterval: 1000,
    progressHooks: {
      "0": {},
      "25": {},
      "50": {},
      "75": {},
      "100": {
        pascalEvent: "vid_saw_100"
      }
    },
    jwOptions: {},
    jwRoot: 'jwplayer-5.10/',
    qualityMonitor: false
  };
  if (options.track_quartile) {
    basicDefaults.progressHooks = {
      "0": {
        pascalEvent: "vid_saw_0"
      },
      "25": {
        pascalEvent: "vid_saw_25"
      },
      "50": {
        pascalEvent: "vid_saw_50"
      },
      "75": {
        pascalEvent: "vid_saw_75"
      },
      "100": {
        pascalEvent: "vid_saw_100"
      }
    };
  }
  modeOpts = (function() {
    switch (options.defaultMode) {
      case "mobile":
      case "mobile-light":
        return {
          poster: staticUrl('/files/media/posters/generic-mobile-clear-white.png'),
          videoBackgroundColor: "#000",
          videoWidth: 320,
          videoHeight: 180,
          stretching: "fill"
        };
      case "mobile-dark":
        return {
          poster: staticUrl('/files/media/posters/generic-mobile-clear-black.png'),
          videoBackgroundColor: "#000",
          videoWidth: 320,
          videoHeight: 180,
          stretching: "none"
        };
      default:
        return {
          poster: staticUrl('/files/media/posters/generic-laptop-clear-white.png'),
          videoBackgroundColor: "#000",
          videoWidth: 640,
          videoHeight: 360,
          stretching: "fill"
        };
    }
  })();
  this.options = $.extend(true, {}, basicDefaults, modeOpts, options);
  window.logLevel = this.options.logLevel;
  maxPlaySkip = window.cloud9.venue.wifi_config.max_skip;
  if (maxPlaySkip >= 0 && this.options.playSkip > maxPlaySkip) {
    this.options.playSkip = maxPlaySkip;
  }
  $im = $('<img src="' + this.options.poster + '" />').css({
    position: 'absolute',
    width: 1,
    height: 1
  }).appendTo('body');
  if (/^https?:\/\//.test(this.options.jwRoot)) {
    skinUrl = "/" + (this.options.jwRoot + "skins/glow_black/glow_black.zip").split("/").slice(3).join("/");
  } else {
    skinUrl = this.options.jwRoot + "skins/glow_black/glow_black.zip";
  }
  _jwOptions = $.extend({
    modes: [
      {
        type: "html5",
        config: {
          file: getVideoUrl()
        }
      }, {
        type: "flash",
        src: this.options.jwRoot + "player.swf",
        config: {
          file: getVideoUrl()
        }
      }
    ],
    autostart: false,
    mute: false,
    skin: skinUrl,
    width: this.options.videoWidth,
    height: this.options.videoHeight,
    stretching: this.options.stretching,
    image: this.options.poster,
    repeat: false,
    volume: 100,
    controls: true,
    plugins: getPlugins()
  }, this.options.jwOptions);
  return this;
};

/* End "videoapi.js" */
/* Begin "swfobject.js" */
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
/* End "swfobject.js" */
/* Begin "modules/AcceptRejectModule/module.js" */
// Generated by CoffeeScript 1.8.0
(function() {
  var AcceptRejectModule, staticUrl,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  staticUrl = cloud9.promos.staticUrl;

  AcceptRejectModule = (function(_super) {
    __extends(AcceptRejectModule, _super);

    function AcceptRejectModule() {
      return AcceptRejectModule.__super__.constructor.apply(this, arguments);
    }

    AcceptRejectModule.prototype.poppable = function() {
      if (navigator.userAgent.match(/iPad/i) !== null) {
        return false;
      } else if (navigator.userAgent.match(/iPhone/i) !== null) {
        return false;
      } else if (navigator.userAgent.match(/Android/i) !== null) {
        return false;
      } else {
        return true;
      }
    };

    AcceptRejectModule.prototype.doResponse = function(e, opts) {
      var mode, self;
      if (opts == null) {
        opts = {};
      }
      self = this;
      mode = (self.options[e + '_mode'] || '').toLowerCase() || 'redirect';
      opts = this.$.extend(opts, {
        successUrl: self.options[e + '_url']
      });
      return cloud9.promos.response(e, mode, opts);
    };

    AcceptRejectModule.prototype.uxFeedback = function(which) {
      if (this.options['clickFeedback'] === 'greyout') {
        return this.$.find('.greyout').addClass('on');
      } else if (this.options["clickFeedback"] === 'replace') {
        this.$.find("." + which + "-container ." + which).hide();
        return this.$.find("." + which + "-container").css({
          "text-align": "center"
        }).append('<span>Connecting... ' + ("<img src=\"" + (staticUrl('/static/images/indicator.gif')) + "\" /></span>"));
      } else if (this.options["clickFeedback"] === 'prepend') {
        return this.$.find("." + which + "-container").css({
          "text-align": "center"
        }).prepend('<p>Connecting... ' + ("<img src=\"" + (staticUrl('/static/images/indicator.gif')) + "\" /></p><br>"));
      }
    };

    AcceptRejectModule.prototype.setupAccept = function() {
      var $accept, self;
      self = this;
      $accept = this.$.find('.accept');
      return $accept.click(function(e) {
        var link, onResponse;
        e.preventDefault();
        self.uxFeedback('accept');
        link = $(this).attr("href");
        if (link && link !== '#') {
          self.options['accept_url'] = link;
        }
        onResponse = function() {
          if (self.options.download_url) {
            window.location.href = self.options.download_url;
            return setTimeout((function() {
              return self.doResponse('accept');
            }), 2000);
          } else {
            return self.doResponse('accept');
          }
        };
        if (self.options.greedy_accept) {
          return onResponse();
        } else {
          self.trigger('response', onResponse);
          return self.trigger('complete');
        }
      });
    };

    AcceptRejectModule.prototype.setupReject = function() {
      var $reject, self;
      self = this;
      $reject = this.$.find('.reject');
      return $reject.click(function(e) {
        e.preventDefault();
        self.uxFeedback('reject');
        if (self.options.greedy_reject) {
          return self.doResponse('reject');
        } else {
          self.trigger('response', function() {
            return self.doResponse('reject');
          });
          return self.trigger('complete');
        }
      });
    };

    AcceptRejectModule.prototype.initialize = function() {
      this.registerForReflow(this.$.find('p'));
      if (this.options.mobile) {
        this.$.addClass('mobile');
      }
      this.setupAccept();
      this.setupReject();
      return this.$.find('.accept,.reject').css('visibility', 'hidden');
    };

    AcceptRejectModule.prototype.enter = function() {
      var old;
      this.$.find('.accept,.reject').css('visibility', 'visible');
      if (this.options.tags) {
        old = this.options.tags;
        return this.$.find('.px-container').html(old.replace(/\%\%ORD\%\%/g, Math.floor(Math.random() * 100000000)));
      }
    };

    return AcceptRejectModule;

  })(cloud9.modules.BaseModule);

  cloud9.modules.AcceptRejectModule = AcceptRejectModule;

}).call(this);

/* End "modules/AcceptRejectModule/module.js" */
/* Begin "modules/SurveyModule/module.js" */
// Generated by CoffeeScript 1.3.3
(function() {
  var SurveyModule,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  SurveyModule = (function(_super) {

    __extends(SurveyModule, _super);

    function SurveyModule() {
      return SurveyModule.__super__.constructor.apply(this, arguments);
    }

    SurveyModule.prototype.initialize = function() {
      var $form, form, self, _i, _len, _ref,
        _this = this;
      self = this;
      _ref = self.$.find("form.survey-form");
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        form = _ref[_i];
        $form = $(form);
        $form.submit(function(evt) {
          evt.preventDefault();
          if ($form.find("input:checked").length === 0) {
            alert("Please make a selection to continue.");
            return false;
          }
          _this.handleSurveyResponse();
          _this.trigger('response', function() {
            return _this.doResponse('accept');
          });
          _this.surveyCompleted();
          $form.find("button[type=submit], input[type=submit]").attr("disabled", "disabled");
          return false;
        });
      }
      return this.setupReject();
    };

    SurveyModule.prototype.surveyCompleted = function() {
      return this.trigger('complete');
    };

    SurveyModule.prototype.handleSurveyResponse = function() {
      var form, surveyResponses, _i, _len, _ref;
      surveyResponses = [];
      _ref = self.$.find("form.survey-form");
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        form = _ref[_i];
        surveyResponses.push($(form).serializeObject());
      }
      return this.responseData("survey_responses", surveyResponses);
    };

    SurveyModule.prototype.enter = function() {};

    SurveyModule.prototype.exit = function() {};

    return SurveyModule;

  })(cloud9.modules.AcceptRejectModule);

  cloud9.modules.SurveyModule = SurveyModule;

}).call(this);

/* End "modules/SurveyModule/module.js" */
/* Begin "modules/VideoModule/module.js" */
// Generated by CoffeeScript 1.6.2
var VideoModule, staticUrl, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

staticUrl = cloud9.promos.staticUrl;

VideoModule = (function(_super) {
  __extends(VideoModule, _super);

  function VideoModule() {
    _ref = VideoModule.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  VideoModule.prototype.initialize = function() {
    var $im, options, self;

    self = this;
    self.failState = false;
    self.hasEntered = false;
    self.skippable = true;
    options = self.options;
    if (options.superasset_base) {
      options['jwRoot'] = options.superasset_base + 'jwplayer-5.10/';
    } else {
      options['jwRoot'] = '/static/js/jwplayer-5.10/';
    }
    if (options.poster && $().imagesLoaded) {
      $im = $('<img src="' + staticUrl(options.poster) + '" />').css({
        position: 'absolute',
        width: 1,
        height: 1
      }).appendTo('body');
      if ($().imagesLoaded) {
        return $im.imagesLoaded(function() {
          return self.finishInit();
        });
      } else {
        return self.finishInit();
      }
    } else {
      return self.finishInit();
    }
  };

  VideoModule.prototype.finishInit = function() {
    var $inVideoSkipper, $placeholder, $skipCount, $skipper, options, self;

    self = this;
    options = self.options;
    $placeholder = self.$.find('.video-placeholder');
    $placeholder.attr('id', $placeholder.closest('.module-instance').attr('id') + '-video-placeholder');
    if (options.skipper) {
      $inVideoSkipper = self.$.find('.skip-container');
      $inVideoSkipper.show();
      $skipper = $inVideoSkipper.find('.skipper').click(function() {
        self.videoapi.stop();
        cloud9.promos.track('promo_skip');
        return self.trigger('complete');
      }).hide();
      $skipCount = $inVideoSkipper.find('.skip-count').hide();
    }
    self.videoapi = new cloud9.VideoApi($placeholder, options);
    self.videoapi.bind('onComplete', function() {
      return setTimeout(function(){
          self.trigger('complete')}, options.timeOutOnComplete ? options.timeOutOnComplete : 0);
    });
    self.videoapi.bind('onFail', function() {
      if (self.videoapi.isMostlyComplete()) {
        self.failState = false;
      } else {
        self.failState = true;
      }
      if (self.hasEntered) {
        return self.trigger('complete');
      }
    });
    self.videoapi.bind('skipLeft', function(secs) {
      if (options.skipper) {
        $inVideoSkipper.show();
        if (secs <= 0) {
          $skipCount.hide();
          return $skipper.show();
        } else {
          $skipCount.show();
          return $skipCount.find('.count').html("" + secs + " " + (Number(secs) === 1 ? "second" : "seconds"));
        }
      } else {
        return self.trigger('skipTime', [secs]);
      }
    });
    self.videoapi.initialize();
    return window.setTimeout(function() {
      var o;

      o = self.$.find('object');
      if (o.length) {
        return o.removeAttr('tabindex');
      }
    });
  };

  VideoModule.prototype.enter = function() {
    var self;

    self = this;
    self.hasEntered = true;
    if (this.failState) {
      setTimeout((function() {
        return self.trigger('complete');
      }), 1000);
      return;
    }
    if (this.options.autoplay) {
      return this.videoapi.playNow();
    }
  };

  VideoModule.prototype.exit = function() {
    return this.videoapi.stop();
  };

  return VideoModule;

})(cloud9.modules.BaseModule);

cloud9.modules.VideoModule = VideoModule;

/* End "modules/VideoModule/module.js" */
/* Begin "modules/VideoSurveyModule/module.js" */
// Generated by CoffeeScript 1.4.0
var VideoSurveyModule,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

VideoSurveyModule = (function(_super) {

  __extends(VideoSurveyModule, _super);

  function VideoSurveyModule() {
    return VideoSurveyModule.__super__.constructor.apply(this, arguments);
  }

  VideoSurveyModule.prototype.initialize = function() {
    var $placeholder,
      _this = this;
    this.videoDone = false;
    this.surveyDone = false;
    this.triggeredComplete = false;
    this.endPlaybackOnAnswer = this.options.endPlaybackOnAnswer;
    $placeholder = this.$.find(".survey-video-placeholder");
    this.videoModule = new cloud9.modules.VideoModule($placeholder, this.options);
    this.videoModule.initialize();
    this.videoModule.$.bind('complete', function(e) {
      _this.videoDone = true;
      if (_this.surveyDone && !_this.triggeredComplete) {
        return _this.triggeredComplete = true;
      } else {
        return e.stopPropagation();
      }
    });
    return VideoSurveyModule.__super__.initialize.call(this);
  };

  VideoSurveyModule.prototype.surveyCompleted = function() {
    this.surveyDone = true;
    if (this.endPlaybackOnAnswer) {
      this.videoModule.videoapi.stop();
      this.triggeredComplete = true;
      return this.trigger('complete');
    } else {
      if (this.videoDone && !this.triggeredComplete) {
        this.triggeredComplete = true;
        return this.trigger('complete');
      }
    }
  };

  VideoSurveyModule.prototype.enter = function() {
    this.videoModule.enter();
    return VideoSurveyModule.__super__.enter.call(this);
  };

  VideoSurveyModule.prototype.exit = function() {
    this.videoModule.exit();
    return VideoSurveyModule.__super__.exit.call(this);
  };

  return VideoSurveyModule;

})(cloud9.modules.SurveyModule);

cloud9.modules.VideoSurveyModule = VideoSurveyModule;

/* End "modules/VideoSurveyModule/module.js" */
/* Begin "modules/UserInputModule/module.js" */
// Generated by CoffeeScript 1.6.2
var UserInputModule, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

UserInputModule = (function(_super) {
  __extends(UserInputModule, _super);

  function UserInputModule() {
    _ref = UserInputModule.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  UserInputModule.prototype.validateGeo = function(userInput, okCb, badCb) {
    var query, trk;

    trk = function(state) {
      var trkObj;

      trkObj = {
        "input": userInput
      };
      if (state) {
        trkObj.state = state;
      }
      return cloud9.promos.track('validate_geo', trkObj);
    };
    query = 'select * from geo.places where text="' + userInput + '"';
    return $.ajax({
      timemout: 1500,
      url: "http://query.yahooapis.com.proxy.c9w.net/v1/public/yql",
      dataType: "jsonp",
      type: "GET",
      data: {
        format: "json",
        q: query
      },
      success: function(resp) {
        if (resp.error) {
          trk(resp.error);
          return setTimeout(okCb, 250);
        } else if (!resp.query.results) {
          trk("invalid");
          return setTimeout(badCb, 250);
        } else {
          trk("valid");
          return setTimeout(okCb, 250);
        }
      },
      error: function() {
        trk("unknown error");
        return setTimeout(okCb, 250);
      }
    });
  };

  UserInputModule.prototype.calcLevenshteine = function(a, b) {
    var c, cost, i, j, m, minimator, n, o, r;

    cost = void 0;
    m = a.length;
    n = b.length;
    minimator = function(x, y, z) {
      if (x < y && x < z) {
        return x;
      }
      if (y < x && y < z) {
        return y;
      }
      return z;
    };
    if (m < n) {
      c = a;
      a = b;
      b = c;
      o = m;
      m = n;
      n = o;
    }
    r = new Array();
    r[0] = new Array();
    c = 0;
    while (c < n + 1) {
      r[0][c] = c;
      c++;
    }
    i = 1;
    while (i < m + 1) {
      r[i] = new Array();
      r[i][0] = i;
      j = 1;
      while (j < n + 1) {
        cost = (a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1);
        r[i][j] = minimator(r[i - 1][j] + 1, r[i][j - 1] + 1, r[i - 1][j - 1] + cost);
        j++;
      }
      i++;
    }
    return r[m][n];
  };

  UserInputModule.prototype.placeholderWorks = function() {
    return __indexOf.call(document.createElement('input'), 'placeholder') >= 0;
  };

  UserInputModule.prototype.placeholderify = function() {
    var self;

    self = this;
    self.$.find("[placeholder]").each(function() {
      if ($(this).val() === "") {
        return $(this).val($(this).attr("placeholder"));
      }
    });
    self.$.find("[placeholder]").focus(function() {
      if ($(this).val() === $(this).attr("placeholder")) {
        $(this).val("");
        return $(this).removeClass("placeholder");
      }
    }).blur(function() {
      if ($(this).val() === "" || $(this).val() === $(this).attr("placeholder")) {
        $(this).val($(this).attr("placeholder"));
        return $(this).addClass("placeholder");
      }
    });
    return self.$.find("[placeholder]").closest("form").submit(function() {
      return $(this).find("[placeholder]").each(function() {
        if ($(this).val() === $(this).attr("placeholder")) {
          return $(this).val("");
        }
      });
    });
  };

  UserInputModule.prototype.buildUrlsFromTemplates = function(userInput) {
    /* 
    For all of the options of the format "xxx_url_template",
    replace a key found in `url_replacers` and present in that template string by
    the corresponding value found in `url_replacers`
    
    The key which corresponds to the `user_input_name` is automatically included
    and replaced with the users input
    
    e.g.,
      options = {
        ...
        "accept_url_template":"http://www.google.com/testing.html?myInput=7",
        "user_input_name":"myInput"
        ...
      }
      ...after this function is called with `buildUrlsFromTemplates("sandy")` the options dict would be
      options = {
        ...
        "accept_url_template":"http://www.google.com/testing.html?myInput=7",
        "user_input_name":"myInput"
        "accept_url":"http://www.google.com/testing.html?sandy=7"
        ...
      }
    */

    var defaultReplacers, i, optName, optVal, replacementKey, replacementVal, self, url, urlAttrName, urlReplacers, _ref1, _results;

    self = this;
    defaultReplacers = {};
    defaultReplacers[self.options.user_input_name] = encodeURIComponent(userInput);
    urlReplacers = $.extend(defaultReplacers, self.options.url_replacers);
    _ref1 = self.options;
    _results = [];
    for (optName in _ref1) {
      optVal = _ref1[optName];
      i = optName.indexOf("_");
      if (i === -1) {
        continue;
      }
      if (optName.slice(i) === "_url_template") {
        urlAttrName = optName.slice(0, optName.length - '_template'.length);
        _results.push((function() {
          var _results1;

          _results1 = [];
          for (replacementKey in urlReplacers) {
            replacementVal = urlReplacers[replacementKey];
            url = optVal.replace(replacementKey, replacementVal);
            _results1.push(self.options[urlAttrName] = url);
          }
          return _results1;
        })());
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  UserInputModule.prototype.handleInputOk = function(userInput) {
    var self;

    self = this;
    self.buildUrlsFromTemplates(userInput);
    self.trigger('response', function() {
      return self.doResponse(self.selectedResponse);
    });
    return self.trigger('complete');
  };

  UserInputModule.prototype.justContinue = function() {
    var link;

    link = $(this).attr("href");
    if (link && link !== '#') {
      self.options['accept_url'] = link;
    }
    self.trigger('response', function() {
      return self.doResponse(self.selectedResponse);
    });
    return self.trigger('complete');
  };

  UserInputModule.prototype.handleInputBad = function(msg) {
    if (!this.tryCount) {
      this.tryCount = 1;
    } else {
      this.tryCount += 1;
    }
    if (this.tryCount > 3) {
      return cloud9.promos.failRedirect();
    } else {
      return alert(msg);
    }
  };

  UserInputModule.prototype.enter = function() {
    UserInputModule.__super__.enter.call(this);
    if (cloud9.promos.responseIsPoppable()) {
      return this.$.find('.user-input').focus();
    }
  };

  UserInputModule.prototype.doValidation = function() {
    var allowedLevDist, data, emptyInputMessage, emptyInputOk, fuzzyMatch, invalidInputMessage, lev, resp, self, userInput, userInputName, valid, validateGeo, validationModifier, validationRegex, validationUrl;

    self = this;
    validationUrl = self.options.validation_url;
    validateGeo = self.options.validateGeo;
    userInputName = self.options.user_input_name;
    validationRegex = self.options.validation_regex;
    fuzzyMatch = self.options.fuzzy_match;
    allowedLevDist = self.options.fuzziness;
    if (!allowedLevDist) {
      allowedLevDist = fuzzyMatch.length / 5;
      allowedLevDist = allowedLevDist === 0 ? 1 : allowedLevDist;
    }
    if ((validationRegex != null ? validationRegex.constructor : void 0) === Array) {
      validationModifier = validationRegex[1];
      validationRegex = validationRegex[0];
    }
    emptyInputOk = self.options.empty_input_ok;
    emptyInputMessage = self.options.empty_input_message || "Please type in text to continue.";
    invalidInputMessage = self.options.invalid_input_message || "Please enter a valid response.";
    if (!self.placeholderWorks()) {
      self.placeholderify();
    }
    userInput = self.$.find('input.user-input').val();
    if (userInput === self.options.placeholder) {
      userInput = '';
    }
    if (userInput) {
      if (validationUrl) {
        data = {};
        data[validationParam] = userInput;
        resp = $.ajax(validationUrl, {
          type: "GET",
          data: data,
          dataType: 'json'
        });
        resp.complete(function(resp) {
          if (resp['status'] === 'OK') {
            return self.handleInputOk();
          } else {
            return self.handleInputBad(resp["message"]);
          }
        });
        return resp.error(function(resp) {
          return self.justContinue();
        });
      } else if (fuzzyMatch) {
        lev = self.calcLevenshteine(fuzzyMatch.toLowerCase(), userInput.toLowerCase());
        if (lev <= allowedLevDist) {
          return self.handleInputOk(userInput);
        } else {
          return self.handleInputBad(invalidInputMessage);
        }
      } else if (validationRegex) {
        valid = (new RegExp(validationRegex, validationModifier || "")).test(userInput);
        if (valid) {
          return self.handleInputOk(userInput);
        } else {
          return self.handleInputBad(invalidInputMessage);
        }
      } else if (validateGeo) {
        return self.validateGeo(userInput, (function() {
          return self.handleInputOk(userInput);
        }), (function() {
          return self.handleInputBad("Please enter a valid location");
        }));
      } else {
        return self.handleInputOk(userInput);
      }
    } else {
      if (emptyInputOk) {
        return self.justContinue();
      } else {
        return self.handleInputBad(emptyInputMessage);
      }
    }
  };

  UserInputModule.prototype.setupAccept = function() {
    var self;

    self = this;
    this.$.find('.input-form').submit(function(e) {
      e.preventDefault();
      self.selectedResponse = 'accept';
      return self.doValidation();
    });
    return this.$.find(".accept").click(function(e) {
      e.preventDefault();
      return self.$.find(".input-form").submit();
    });
  };

  UserInputModule.prototype.setupReject = function() {
    var self;

    self = this;
    if (!self.options.validate_reject) {
      return UserInputModule.__super__.setupReject.call(this);
    }
    return this.$.find('.reject').click(function(e) {
      e.preventDefault();
      self.selectedResponse = 'reject';
      return self.doValidation();
    });
  };

  return UserInputModule;

})(cloud9.modules.AcceptRejectModule);

cloud9.modules.UserInputModule = UserInputModule;

/* End "modules/UserInputModule/module.js" */
/* Begin "modules/AppStoreLargeModule/module.js" */
(function() {
  var AppStoreLargeModule;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  AppStoreLargeModule = (function() {
    __extends(AppStoreLargeModule, cloud9.modules.AcceptRejectModule);
    function AppStoreLargeModule() {
      AppStoreLargeModule.__super__.constructor.apply(this, arguments);
    }
    AppStoreLargeModule.prototype.initialize = function() {
      var $container, $viewport, startScroll, stopScroll, updateScroll, _scrollInt, _scrollSpeed;
      $viewport = this.$.find('.app-screenshot-viewport');
      $container = this.$.find('.app-screenshot-container');
      $(function() {
        return $container.imagesLoaded(function() {
          var totalWidth;
          totalWidth = 10;
          $container.find('.app-screenshot').each(function() {
            return totalWidth += parseInt($(this).width()) + 20;
          });
          return $container.css({
            width: totalWidth
          });
        });
      });
      /* Handle hover scrolling */
      _scrollInt = null;
      _scrollSpeed = 0;
      startScroll = function($elem) {
        return _scrollInt = setInterval((function() {
          return $elem.scrollLeft($elem.scrollLeft() + _scrollSpeed);
        }), 30);
      };
      stopScroll = function() {
        clearInterval(_scrollInt);
        return _scrollInt = null;
      };
      updateScroll = function(speed) {
        if (!_scrollInt && speed !== 0) {
          startScroll($viewport);
        } else if (speed === 0) {
          stopScroll();
        }
        return _scrollSpeed = speed;
      };
      $viewport.mousemove(_.throttle((function(e) {
        var relX, relY;
        relX = e.pageX - $viewport.offset().left;
        relY = e.pageY - $viewport.offset().top;
        if (relX < 150) {
          return updateScroll(-10);
        } else if (relX > $viewport.width() - 150) {
          return updateScroll(10);
        } else {
          return updateScroll(0);
        }
      }), 30));
      $viewport.mouseleave(function() {
        return updateScroll(0);
      });
      /* End Handle hover scrolling */
      return AppStoreLargeModule.__super__.initialize.call(this);
    };
    AppStoreLargeModule.prototype.enter = function() {
      /* Handle iOS scrolling */      this.$.find('.app-screenshot-container').touchScroll({
        hScroll: true
      });
      return AppStoreLargeModule.__super__.enter.call(this);
    };
    return AppStoreLargeModule;
  })();
  cloud9.modules.AppStoreLargeModule = AppStoreLargeModule;
}).call(this);

/* End "modules/AppStoreLargeModule/module.js" */
/* Begin "modules/AppStoreSmallModule/module.js" */
cloud9.modules.AppStoreSmallModule = cloud9.modules.AppStoreLargeModule;
/* End "modules/AppStoreSmallModule/module.js" */
/* Begin "modules/PromoDataModule/module.js" */
// Generated by CoffeeScript 1.6.2
var PromoDataModule, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

PromoDataModule = (function(_super) {
  __extends(PromoDataModule, _super);

  function PromoDataModule() {
    _ref = PromoDataModule.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  PromoDataModule.prototype.placeholderWorks = function() {
    return __indexOf.call(document.createElement('input'), 'placeholder') >= 0;
  };

  PromoDataModule.prototype.placeholderify = function() {
    var self;

    self = this;
    self.$.find("[placeholder]").each(function() {
      if ($(this).val() === "") {
        return $(this).val($(this).attr("placeholder"));
      }
    });
    self.$.find("[placeholder]").focus(function() {
      if ($(this).val() === $(this).attr("placeholder")) {
        $(this).val("");
        return $(this).removeClass("placeholder");
      }
    }).blur(function() {
      if ($(this).val() === "" || $(this).val() === $(this).attr("placeholder")) {
        $(this).val($(this).attr("placeholder"));
        return $(this).addClass("placeholder");
      }
    });
    return self.$.find("[placeholder]").closest("form").submit(function() {
      return $(this).find("[placeholder]").each(function() {
        if ($(this).val() === $(this).attr("placeholder")) {
          return $(this).val("");
        }
      });
    });
  };

  PromoDataModule.prototype.enter = function() {
    PromoDataModule.__super__.enter.call(this);
    if (cloud9.promos.responseIsPoppable()) {
      return this.$.find('.user-input').focus();
    }
  };

  PromoDataModule.prototype.setupAccept = function() {
    var self;

    self = this;
    if (!self.placeholderWorks()) {
      self.placeholderify();
    }
    this.$.find("input[type=image].accept").click(function(e) {
      e.preventDefault();
      return self.$.find(".input-form").submit();
    });
    return this.$.find('.input-form').submit(function(e) {
      var $inp, $inputs, finalUrl, inp, inpObj, inputsByName, name, re, val, _i, _j, _len, _len1, _ref1;

      e.preventDefault();
      finalUrl = null;
      $inputs = $(this).find('input.user-input, select.user-input');
      inputsByName = {};
      _ref1 = self.options.inputs;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        inpObj = _ref1[_i];
        inputsByName[inpObj.name] = inpObj;
      }
      for (_j = 0, _len1 = $inputs.length; _j < _len1; _j++) {
        inp = $inputs[_j];
        $inp = $(inp);
        name = $inp.attr('name');
        val = $inp.val();
        if (inputsByName[name].validateRegExp) {
          re = new RegExp(inputsByName[name].validateRegExp);
          if (re.test(val)) {
            self.responseData(name, val);
          } else {
            window.alert("Please enter a valid " + inputsByName[name].placeholder);
            return false;
          }
        } else {
          self.responseData(name, val);
        }
      }
      return self.doResponse('accept');
    });
  };

  return PromoDataModule;

})(cloud9.modules.AcceptRejectModule);

cloud9.modules.PromoDataModule = PromoDataModule;

/* End "modules/PromoDataModule/module.js" */
/* Begin "modules/AppDLv2Module/module.js" */
// Generated by CoffeeScript 1.8.0
(function() {
  var AppDLv2Module,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AppDLv2Module = (function(_super) {
    __extends(AppDLv2Module, _super);

    function AppDLv2Module() {
      this.startVerify = __bind(this.startVerify, this);
      this.doOpen = __bind(this.doOpen, this);
      this.onWhitelist = __bind(this.onWhitelist, this);
      this.onFingerprint = __bind(this.onFingerprint, this);
      this.whitelist = __bind(this.whitelist, this);
      this.login = __bind(this.login, this);
      return AppDLv2Module.__super__.constructor.apply(this, arguments);
    }

    AppDLv2Module.prototype.defaultOptions = {
      wl_timeout: 15000,
      fingerprint_url: '/streampass/app2/fp/',
      verify_url: '/streampass/app2/verify',
      whitelist_url: '/streampass/app2/wl/',
      open_delay: 500,
      verify_interval: 1000,
      verifying_status: 'Verifying',
      auto_login: true,
      login_delay: 0,
      login_msg: null,
      preinstalled_url: "nimbus://promos/?filter=exclude_promo&fallback=disable",
      reject_url: "nimbus://restart"
    };

    AppDLv2Module.prototype.isAndroidOS = function() {
      return navigator.userAgent.match(/Android/i);
    };

    AppDLv2Module.prototype.initialize = function() {
      this.options = $.extend({}, this.defaultOptions, this.options);
      this.status = this.$.find(".status");
      $('#valid-loader').activity({
        color: '#dddddd'
      });
      if (this.options.custom_verified) {
        $('.verified-loader').activity({
          color: '#dddddd'
        });
      }
      this.bindClicks();
      if (AppControl.hasVerifyCookie() || window.location.search.indexOf("debug=1") !== -1) {
        this._fingerprinted = true;
        this._whitelisted = true;
        return this.status.text("Loading...");
      } else {
        return this.whitelist();
      }
    };

    AppDLv2Module.prototype.bindClicks = function() {
      this.$.find('.start-btn').click((function(_this) {
        return function(e) {
          e.preventDefault();
          cloud9.promos.track("start_btn");
          return _this.start();
        };
      })(this));
      this.$.find(".help-btn").click((function(_this) {
        return function(e) {
          e.preventDefault();
          return _this.help();
        };
      })(this));
      this.$.find('.preinstalled-btn').click((function(_this) {
        return function(e) {
          e.preventDefault();
          return _this.rejectPreinstalled();
        };
      })(this));
      this.$.find('.reject-btn').click((function(_this) {
        return function(e) {
          e.preventDefault();
          cloud9.promos.track("no_thanks");
          return _this.reject();
        };
      })(this));
      this.$.find('.trouble-frame .try_again').click((function(_this) {
        return function(e) {
          e.preventDefault();
          return _this.tryAgain();
        };
      })(this));
      this.$.find('.trouble-frame .reject-offer').click((function(_this) {
        return function(e) {
          e.preventDefault();
          cloud9.promos.track("reject_offer");
          return _this.reject();
        };
      })(this));
      return this.$.find('.login-btn').click((function(_this) {
        return function(e) {
          return _this.login();
        };
      })(this));
    };

    AppDLv2Module.prototype.help = function() {
      cloud9.promos.track("help");
      return this.selectFrame('trouble-frame');
    };

    AppDLv2Module.prototype.addOverrideLoginEventToUrl = function(newEvent, url) {
      var opts;
      opts = {
        loginEventOverride: newEvent
      };
      return cloud9.buildUrl(url, opts);
    };

    AppDLv2Module.prototype.buildUrlWithVisitedPromos = function(url) {
      var curr_promo_uuid, opts, visited_gate_promo_uuid, visited_promo_uuids;
      visited_gate_promo_uuid = [cloud9.getParam('visited_gate_promos')] || [];
      try {
        curr_promo_uuid = [window.location.href.match('wifi/promos/([^\/]+)/')[1]];
      } catch (_error) {
        curr_promo_uuid = [];
      }
      visited_promo_uuids = (visited_gate_promo_uuid.concat(curr_promo_uuid)).join("__");
      opts = {
        'visited_gate_promos': visited_promo_uuids
      };
      return cloud9.buildUrl(url, opts);
    };

    AppDLv2Module.prototype.rejectPreinstalled = function() {
      var preinstalled_url;
      cloud9.promos.track("preinstalled");
      preinstalled_url = this.buildUrlWithVisitedPromos(this.options.preinstalled_url);
      preinstalled_url = this.addOverrideLoginEventToUrl("free_click", preinstalled_url);
      return cloud9.promos.responseRedirect("reject+verify_reject", preinstalled_url);
    };

    AppDLv2Module.prototype.reject = function() {
      var reject_url;
      reject_url = this.buildUrlWithVisitedPromos(this.options.reject_url);
      reject_url = this.addOverrideLoginEventToUrl("free_click", reject_url);
      return cloud9.promos.responseRedirect("reject+verify_reject", reject_url);
    };

    AppDLv2Module.prototype.tryAgain = function() {
      cloud9.promos.track("try_again");
      AppControl.eraseVerifyCookie();
      this.whitelist();
      return this.start();
    };

    AppDLv2Module.prototype.start = function() {
      var opened;
      this.selectFrame('verify-frame');
      cloud9.promos.track("verify");
      opened = false;
      this.whitelistReady(function() {
        cloud9.promos.track("whitelisted");
        this.status.text(this.options.opening_msg);
        opened = true;
        return setTimeout(this.doOpen, this.options.open_delay);
      });
      return setTimeout((function(_this) {
        return function() {
          if (!opened) {
            cloud9.promos.track("whitelist_timeout");
            _this.status.text("Error: WL Timeout. Try again later.");
            return _this.tryConnectOnError("WL Timeout");
          }
        };
      })(this), this.options.wl_timeout);
    };

    AppDLv2Module.prototype.verified = function() {
      this.selectFrame('verified-frame');
      console.info("Download verified");
      cloud9.promos.track("verified");
      if (this.options.auto_login) {
        return this.login();
      }
    };

    AppDLv2Module.prototype.verified_backdoor = function(delay) {
      if (delay === void 0) {
        delay = 0;
      }
      this.selectFrame('verified-frame');
      console.info("Download verified backdoor");
      cloud9.promos.track("backdoor-verified");
      cloud9.promos.track("verified");
      if (this.options.auto_login) {
        return setTimeout(this.login, delay);
      }
    };

    AppDLv2Module.prototype.login = function() {
      if (this.options.login_msg) {
        alert(this.options.login_msg);
      }
      return setTimeout(function() {
        return cloud9.promos.acceptRedirect();
      }, this.options.login_delay);
    };

    AppDLv2Module.prototype.selectFrame = function(frame) {
      return this.$.find('.app-window-frame').each(function() {
        if ($(this).hasClass(frame)) {
          return $(this).show();
        } else {
          return $(this).hide();
        }
      });
    };

    AppDLv2Module.prototype.enter = function() {
      var old;
      if (this.options.tags) {
        old = this.options.tags;
        this.$.find('.px-container').html(old.replace(/\%\%ORD\%\%/g, Math.floor(Math.random() * 100000000)));
      }
      if (AppControl.hasVerifyCookie()) {
        return this.start();
      } else {
        return this.selectFrame('instr-frame');
      }
    };

    AppDLv2Module.prototype.whitelist = function() {
      this._fingerprinted = false;
      this._whitelisted = false;
      this._verify_checks = 0;
      this._readyCbs = [];
      this.status.text("Loading...");
      return AppControl.fingerprint(this.options.fingerprint_url, (function(_this) {
        return function() {
          return _this.onFingerprint.apply(_this, arguments);
        };
      })(this));
    };

    AppDLv2Module.prototype.whitelistReady = function(cb) {
      if (this._whitelisted) {
        return cb.call(this);
      } else {
        return this._readyCbs.push(cb);
      }
    };

    AppDLv2Module.prototype.onFingerprint = function() {
      this._fingerprinted = true;
      console.info("Fingerprinted");
      this.status.append(".");
      return AppControl.whitelist("" + this.options.whitelist_url + "?net=" + this.options.sp_network, (function(_this) {
        return function() {
          return _this.onWhitelist.apply(_this, arguments);
        };
      })(this));
    };

    AppDLv2Module.prototype.onWhitelist = function(success) {
      var cb, _i, _len, _ref;
      if (success) {
        this._whitelisted = true;
        console.info("Whitelisted");
        _ref = this._readyCbs;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          cb = _ref[_i];
          cb.call(this);
        }
      } else {
        console.warn("Whitelisting failed");
        this.status.text("Error: WL Failure");
        this.tryConnectOnError("WL Failure");
      }
      return this._readyCbs = [];
    };

    AppDLv2Module.prototype.tryConnectOnError = function(code) {
      if (this.options.connect_on_error) {
        alert(code + ": Something went wrong. We're connecting you now.");
        return cloud9.promos.failRedirect();
      } else {
        return alert(code + ": Something went wrong. Try again later.");
      }
    };

    AppDLv2Module.prototype.doOpen = function() {
      var store;
      if (!this._fingerprinted) {
        this.tryConnectOnError("FP on Open Failure");
        return;
      }
      if (!this._whitelisted) {
        this.tryConnectOnError("WL on Open Failure");
        return;
      }
      console.info("Opening " + this.options.store + " app " + this.options.app_id);
      if (AppControl.hasVerifyCookie()) {
        console.info("Skipped opening store, already in verify mode");
      } else {
        if (this.options.alert_msg) {
          alert(this.options.alert_msg);
        }
        AppControl.setVerifyCookie();
        if (this.options.store_url) {
          store = cloud9.promos.renderUrl(this.options.store_url, {
            MAC_ALPHA_SHA1: this.options.mac_alpha_sha1 || '',
            MAC_ALPHA: this.options.mac_alpha || '',
            MAC_ALPHA_UPPER: this.options.mac_alpha_upper || '',
            MAC_RAW: this.options.mac_raw || '',
            CLICK_ID: this.options.click_id
          });
        } else {
          store = this.options.store;
        }
        if (AppControl.open(store, this.options.app_id)) {
          console.info("" + this.options.store + " opened");
        } else {
          console.warn("" + this.options.store + " open failed");
          this.status.text("Could not open the app store.");
          AppControl.eraseVerifyCookie();
          return;
        }
      }
      return setTimeout((function(_this) {
        return function() {
          _this.status.text(_this.options.verifying_status);
          return _this.startVerify();
        };
      })(this), 300);
    };

    AppDLv2Module.prototype.startVerify = function() {
      var intv, onVerify;
      intv = null;
      onVerify = (function(_this) {
        return function(success) {
          if (_this.options.skipVerify) {
            _this.verified_backdoor();
            return window.clearInterval(intv);
          }
          _this._verify_checks += 1;
          if (success) {
            _this.verified();
            return window.clearInterval(intv);
          } else {
            return console.info("Verification " + _this._verify_checks + " failed, trying again in " + _this.options.verify_interval + " ms");
          }
        };
      })(this);
      return intv = setInterval((function(_this) {
        return function() {
          return AppControl.verify("" + _this.options.verify_url + "/" + _this.options.store + "/" + _this.options.app_id + "/", onVerify, _this.options.skipVerify);
        };
      })(this), this.options.verify_interval);
    };

    AppDLv2Module.prototype.showHelp = function() {
      this.$.find(".action").hide();
      return this.$.find(".help_section").show();
    };

    AppDLv2Module.prototype.hideHelp = function() {
      this.$.find(".action").show();
      return this.$.find(".help_section").hide();
    };

    return AppDLv2Module;

  })(cloud9.modules.BaseModule);

  window.AppControl = {
    _fingerprintCallbacks: [],
    _cookieName: function() {
      return "C9_APPVER_" + cloud9.promos.promo;
    },
    fingerprint: function(fingerprintUrl, callback) {
      AppControl._fingerprintCallbacks.push(callback);
      return $("body").append($("<iframe />").attr("src", "" + fingerprintUrl + "?ord=" + (Math.random())).attr("width", 0).attr("height", 0).hide());
    },
    confirmFingerprint: function() {
      var cb, _i, _len, _ref;
      _ref = AppControl._fingerprintCallbacks;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cb = _ref[_i];
        cb();
      }
      return AppControl._fingerprintCallbacks = [];
    },
    whitelist: function(whitelistUrl, callback) {
      return $.ajax({
        url: "" + whitelistUrl + "&ord=" + (Math.random()),
        dataType: 'json',
        success: function(data) {
          console.info("WL Success", data.message);
          return callback(true);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.warn("WL Error", jqXHR);
          return callback(false);
        }
      });
    },
    open: function(store, appID) {
      var evt, ifr, storeUrl;
      if (store === "itunes") {
        window.location.href = "itms-apps://itunes.apple.com/app/id" + appID;
        return true;
      } else if (store === "googleplay" || /^market\:\/\//.test(store)) {
        if (/^market\:\/\//.test(store)) {
          storeUrl = store;
        } else {
          storeUrl = "market://details?id=" + appID + "&hl=en";
        }
        evt = document.createEvent("MouseEvents");
        evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        document.getElementById('dest_link').href = storeUrl;
        document.getElementById("dest_link").dispatchEvent(evt);
        return true;
      } else if (/^https?\:\/\//.test(store)) {
        window.location.href = store;
        return true;
      } else if (/^iframe\:https?\:\/\//.test(store)) {
        store = store.substring(7);
        ifr = document.createElement('iframe');
        ifr.width = 1;
        ifr.height = 1;
        ifr.frameBorder = 0;
        ifr.marginWidth = 0;
        ifr.marginHeight = 0;
        ifr.scrolling = 'no';
        ifr.src = store;
        document.body.appendChild(ifr);
        return true;
      } else {
        return false;
      }
    },
    verify: function(verifyUrl, callback, skipVerify) {
      if (skipVerify) {
        return setTimeout(function() {
          return callback(true);
        }, 3000);
      } else {
        return $.ajax({
          url: "" + verifyUrl + "?ord=" + (Math.random()),
          complete: function(jqXHR, textStatus) {
            if (textStatus === "success" && jqXHR.status === 200) {
              return callback(true);
            } else {
              return callback(false);
            }
          }
        });
      }
    },
    setVerifyCookie: function() {
      return document.cookie = this._cookieName() + "=1; expires=" + (new Date(Date.now() + 10 * 60000)).toGMTString() + "; path=/";
    },
    eraseVerifyCookie: function() {
      return document.cookie = this._cookieName() + "=; expires=" + (new Date(Date.now() - 1000)).toGMTString() + "; path=/";
    },
    hasVerifyCookie: function() {
      return document.cookie.indexOf(this._cookieName() + "=1") !== -1;
    }
  };

  cloud9.modules.AppDLv2Module = AppDLv2Module;

}).call(this);

/* End "modules/AppDLv2Module/module.js" */
/* Begin "modules/ImageModule/module.js" */
// Generated by CoffeeScript 1.3.3
(function() {
  var ImageModule,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ImageModule = (function(_super) {

    __extends(ImageModule, _super);

    function ImageModule() {
      return ImageModule.__super__.constructor.apply(this, arguments);
    }

    ImageModule.prototype.initialize = function() {};

    ImageModule.prototype.enter = function() {};

    ImageModule.prototype.exit = function() {};

    return ImageModule;

  })(cloud9.modules.BaseModule);

  cloud9.modules.ImageModule = ImageModule;

}).call(this);

/* End "modules/ImageModule/module.js" */
/* Begin "modules/SelectableModule/module.js" */
// Generated by CoffeeScript 1.7.1
var SelectableModule,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

SelectableModule = (function(_super) {
  __extends(SelectableModule, _super);

  function SelectableModule() {
    return SelectableModule.__super__.constructor.apply(this, arguments);
  }

  SelectableModule.prototype.enter = function() {
    var adsAvailable, checkForAds, checkedForAds, loadSmScript, scriptLoaded, selectableUrl, self, smCallback, smConfig, smScriptLoaded, startSelectableSession;
    self = this;
    scriptLoaded = false;
    adsAvailable = false;
    checkedForAds = false;
    selectableUrl = 'http://cdn.selectablemedia.com/tags/current/javascripts/sm_app_touch.js?ts=' + String(new Date().getTime());
    smCallback = function(event) {
      console.log('Event from Selectable Media: ' + event.type);
      if (event.type === 'adsAvailableResponse') {
        adsAvailable = event.adsAvailable;
        return startSelectableSession();
      } else if (event.type === 'vanguardClosed' || event.type === 'adCompleted') {
        self.trigger('response', function() {
          return cloud9.promos.response('accept', 'redirect');
        });
        return self.trigger('complete');
      } else if (event.type === 'error') {
        return self.trigger('complete');
      }
    };
    smConfig = {
      placement: self.options.placement,
      callback: smCallback,
      disableExternalWindow: 'true',
      enableExternalIframe: 'true',
      closeButton: 0
    };
    startSelectableSession = function() {
      if (scriptLoaded) {
        if (checkedForAds) {
          if (adsAvailable) {
            return SM_App.startPlayerSession(smConfig);
          } else {
            return self.trigger('complete');
          }
        } else {
          return checkForAds();
        }
      }
    };
    smScriptLoaded = function() {
      scriptLoaded = true;
      return checkForAds();
    };
    checkForAds = function() {
      checkedForAds = true;
      return SM_App.checkAdsAvailable(smConfig);
    };
    loadSmScript = function() {
      var smScript;
      smScript = document.createElement('script');
      smScript.setAttribute('type', 'text/javascript');
      if (smScript.readyState) {
        smScript.onreadystatechange = function() {
          if (smScript.readyState === 'loaded' || smsmScript_jq.readyState === 'complete') {
            return smScriptLoaded();
          }
        };
      } else {
        smScript.onload = function() {
          return smScriptLoaded();
        };
      }
      smScript.setAttribute('src', selectableUrl);
      return document.getElementsByTagName('head')[0].appendChild(smScript);
    };
    return loadSmScript();
  };

  return SelectableModule;

})(cloud9.modules.BaseModule);

cloud9.modules.SelectableModule = SelectableModule;

/* End "modules/SelectableModule/module.js" */
/* Begin "modules/SurveyBeVancouverModule/module.js" */
// Generated by CoffeeScript 1.7.1
var SurveyBeVancouverModule,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

SurveyBeVancouverModule = (function(_super) {
  __extends(SurveyBeVancouverModule, _super);

  function SurveyBeVancouverModule() {
    return SurveyBeVancouverModule.__super__.constructor.apply(this, arguments);
  }

  SurveyBeVancouverModule.prototype.initialize = function() {
    var $form, form, self, _i, _len, _ref, _results;
    this.setupAccept();
    this.setupReject();
    self = this;
    _ref = self.$.find("form.survey-form");
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      form = _ref[_i];
      $form = $(form);
      _results.push($form.submit((function(_this) {
        return function(evt) {
          var assignment_key, indexes, select, surveyResponses, survey_response, url_index, url_index_list, _j, _len1, _ref1;
          evt.preventDefault();
          surveyResponses = [];
          indexes = [];
          _ref1 = $('select', $form);
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            select = _ref1[_j];
            if (select.selectedIndex === 0) {
              alert('Please fill out the survey');
              return false;
            }
            survey_response = {
              prompt_uuid: select.name,
              chosen_uuid: select[select.selectedIndex].getAttribute('name')
            };
            surveyResponses.push(survey_response);
            indexes.push(select.selectedIndex);
          }
          _this.responseData("survey_responses", surveyResponses);
          _this.responseData("email", $('.email', $form).val());
          assignment_key = indexes.join("|");
          url_index_list = self.options.assignments[assignment_key];
          url_index = url_index_list[Math.floor(Math.random() * url_index_list.length)];
          _this.responseData("name", self.options.url_struct[url_index][0]);
          self.options['accept_url'] = self.options.url_struct[url_index][1];
          _this.trigger('response', function() {
            return _this.doResponse('accept');
          });
          _this.surveyCompleted();
          $form.find(".accept").attr("disabled", "disabled");
          return false;
        };
      })(this)));
    }
    return _results;
  };

  SurveyBeVancouverModule.prototype.surveyCompleted = function() {
    return this.trigger('complete');
  };

  SurveyBeVancouverModule.prototype.setupAccept = function() {
    var $accept;
    $accept = this.$.find('.accept');
    return $accept.click(function(e) {
      e.preventDefault();
      return $('form.survey-form').submit();
    });
  };

  return SurveyBeVancouverModule;

})(cloud9.modules.AcceptRejectModule);

cloud9.modules.SurveyBeVancouverModule = SurveyBeVancouverModule;

/* End "modules/SurveyBeVancouverModule/module.js" */
/* Begin "modules/EmailCollectionModule/module.js" */
// Generated by CoffeeScript 1.8.0
(function() {
  var EmailCollectionModule,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  EmailCollectionModule = (function(_super) {
    var numberOfInvalidLogins;

    __extends(EmailCollectionModule, _super);

    function EmailCollectionModule() {
      return EmailCollectionModule.__super__.constructor.apply(this, arguments);
    }

    EmailCollectionModule.prototype.defaultOptions = {
      validate: true
    };

    numberOfInvalidLogins = 0;

    EmailCollectionModule.prototype.initialize = function() {
      this.options = $.extend({}, this.defaultOptions, this.options);
      EmailCollectionModule.__super__.initialize.call(this);
      if (!String.prototype.format) {
        return String.prototype.format = function(obj) {
          return this.replace(/{([A-z]+)}/g, function(match, val) {
            return obj[val];
          });
        };
      }
    };

    EmailCollectionModule.prototype.recordData = function(url, data, callback) {
      var jqxhr, mydata;
      mydata = {
        "data": JSON.stringify(data)
      };
      jqxhr = $.ajax(url, {
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        type: "POST"
      });
      return jqxhr.success(function() {
        return console.log("successfully recorded data");
      }).fail(function() {
        return console.log("failure recording data!");
      }).always(function() {
        return callback();
      });
    };

    EmailCollectionModule.prototype.setupAccept = function() {
      var self;
      self = this;
      this.$.find('form').submit(function(e) {
        return self.onFormSubmit(e);
      });
      return this.$.find('.accept-link').click(function(e) {
        return self.onFormSubmit(e);
      });
    };

    EmailCollectionModule.prototype.isEmailValid = function(email, success, fail) {
      var apiUrl, finalize, isValid, options;
      finalize = function() {
        var params, _ref, _ref1;
        if (typeof ((_ref = self.options.dropdown) != null ? _ref.accept_url_format : void 0) === "string" && typeof ((_ref1 = self.options.dropdown) != null ? _ref1.name : void 0) === "string") {
          params = {};
          params[self.options.dropdown.name] = selectVal;
          self.options.accept_url = self.options.dropdown.accept_url_format.format(params);
        }
        self.trigger('response', function() {
          return self.doResponse('accept', name, email, selectVal, postal);
        });
        return self.trigger('complete');
      };
      isValid = false;
      apiUrl = "/wifi/fullcontact";
      options = {
        data: {
          email: email
        },
        async: true,
        complete: function(jqXHR, textStatus) {
          var data, e;
          try {
            data = JSON.parse(jqXHR.responseText);
            console.log(data);
            if (textStatus === "success" && data.status === 200) {
              return success(data);
            } else {
              return fail();
            }
          } catch (_error) {
            e = _error;
            return fail();
          }
        }
      };
      return jQuery.ajax(apiUrl, options);
    };

    EmailCollectionModule.prototype.onFormSubmit = function(e) {
      var $confirmPolicyCheckBox, email, finalize, name, postal, postalElem, selectElem, selectVal, self;
      e.preventDefault();
      self = this;
      email = self.$.find('form').find('input[type=text].email').val() || "";
      if (self.options.confirm_policy) {
        $confirmPolicyCheckBox = $(".confirm_policy");
        if ($confirmPolicyCheckBox) {
          if (!$confirmPolicyCheckBox.is(':checked')) {
            alert("Please check the box to confirm that you have read and agree with the terms and conditions before continuing.");
            return;
          }
        }
      }
      if (self.options.noemail) {
        email = "";
      }
      finalize = function() {
        var params, _ref, _ref1;
        if (typeof ((_ref = self.options.dropdown) != null ? _ref.accept_url_format : void 0) === "string" && typeof ((_ref1 = self.options.dropdown) != null ? _ref1.name : void 0) === "string") {
          params = {};
          params[self.options.dropdown.name] = selectVal;
          self.options.accept_url = self.options.dropdown.accept_url_format.format(params);
        }
        self.trigger('response', function() {
          return self.doResponse('accept', name, email, selectVal, postal);
        });
        return self.trigger('complete');
      };
      postalElem = self.$.find('form').find('input[type=text].postal');
      postal = postalElem.val() || "";
      name = "";
      if (self.options.name_field) {
        name = self.$.find('form').find('input[type=text].name').val();
      }
      if (self.options.dropdown) {
        selectElem = self.$.find('form').find('select');
        selectVal = selectElem.val();
      }
      if (self.options["validate"]) {
        if ((email.indexOf('@') === -1 || email.indexOf('.') === -1) && !self.options.noemail) {
          alert("Please enter a valid email address.");
          return;
        }
        if (postalElem.length > 0 && !postal.match(/^\d\d\d\d\d$/)) {
          alert("Please enter a valid 5-digit ZIP code.");
          return;
        }
        if (selectElem && selectElem.length > 0 && selectVal === self.options.dropdown.initial[0]) {
          alert("Please select a valid option.");
          return;
        }
        if (self.options["fullContactValidation"] && !self.options["noemail"]) {
          self.isEmailValid(email, function(data) {
            data["email"] = email;
            return self.recordData('/../../../email_data_api/', data, function() {
              return finalize();
            });
          }, function() {
            numberOfInvalidLogins++;
            if (self.options['invalidLogins'] < 0) {
              return alert("Sorry! That email address isn’t recognized, Please input another one.");
            } else if (numberOfInvalidLogins < self.options['invalidLogins']) {
              return alert("Sorry! That email address isn’t recognized, Please input another one.");
            } else {
              return finalize();
            }
          });
        } else {
          finalize();
          return;
        }
      } else {
        finalize();
      }
      return null;
    };

    EmailCollectionModule.prototype.doResponse = function(e, name, email, dropdown, postal) {
      var c9, self;
      self = this;
      c9 = window.cloud9;
      email = $.trim(email);
      name = $.trim(name);
      if (e === "accept" && name) {
        this.responseData('name', name);
      }
      if (e === "accept" && email) {
        this.responseData('email', email);
      }
      if (e === "accept" && dropdown) {
        this.responseData('dropdown', dropdown);
      }
      if (e === "accept" && postal) {
        this.responseData('postal', postal);
      }
      return EmailCollectionModule.__super__.doResponse.call(this, e);
    };

    return EmailCollectionModule;

  })(cloud9.modules.AcceptRejectModule);

  cloud9.modules.EmailCollectionModule = EmailCollectionModule;

}).call(this);

/* End "modules/EmailCollectionModule/module.js" */
/* Begin "modules/CalendarModule/module.js" */
// Generated by CoffeeScript 1.7.1
(function() {
  var CalendarModule,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  CalendarModule = (function(_super) {
    __extends(CalendarModule, _super);

    function CalendarModule() {
      return CalendarModule.__super__.constructor.apply(this, arguments);
    }

    CalendarModule.prototype.defaultOptions = {
      use_branding_logo: false,
      complete: null,
      loader_timeout: 0,
      loader_color: null
    };

    CalendarModule.prototype.initialize = function() {
      var brandingLogo, form, opts, self;
      this.options = $.extend({}, this.defaultOptions, this.options);
      if (/Android/.test(navigator.userAgent) && cloud9.promos.templateName === 'superpromo-laptop-assets') {
        $('#bg-resizable').hide();
      }
      if (this.options['use_branding_logo']) {
        if (cloud9.brandingObj.logo) {
          brandingLogo = $('<img />');
          brandingLogo.attr('src', cloud9.brandingObj.logo);
          brandingLogo.attr('alt', cloud9.brandingObj.name);
          this.$.find('.branding-logo').append(brandingLogo);
        } else {
          this.$.find('.branding-logo').text(cloud9.brandingObj.name);
        }
      }
      this.$.find('.terms-text').show();
      this.$.find('.connect-container').hide();
      self = this;
      opts = self.options;
      form = self.$.find('form.loginform');
      if (opts.login_mode === 'modal') {
        form.appendTo(self.$);
        form.addClass('modal');
      }
      form.submit(function(e) {
        var login_type, password, username, _ref;
        e.preventDefault();
        login_type = (_ref = opts.wifi_auth) != null ? _ref.login_type : void 0;
        if (login_type) {
          username = self.$.find('input[name=username]').val();
          password = self.$.find('input[name=password]').val();
          if (login_type === 'email' && (!username || !username.length || username.indexOf('@') === -1)) {
            alert('Invalid email');
            return false;
          }
          self.$.find('.connect-loader').show();
          self.$.find('.loginform, .connect').hide();
          return $.ajax({
            type: 'POST',
            url: opts.wifi_auth.verify_url,
            data: {
              m: 'ajax',
              username: username,
              password: password,
              venue_uuid: cloud9.venue.uuid
            },
            dataType: 'json',
            success: function(res) {
              if (res) {
                self.doComplete();
                return false;
              }
              self.$.find('.connect-loader').hide();
              self.$.find('.loginform, .connect').show();
              if (login_type === 'password') {
                return alert('Invalid password');
              } else if (login_typ === 'email') {
                return alert('Invalid email');
              } else {
                return alert('Invalid password');
              }
            }
          });
        } else {
          return self.doComplete();
        }
      });
      return self.$.find('.connect').click(function() {
        if (form.length) {
          form.submit();
        } else {
          self.doComplete();
        }
        return false;
      });
    };

    CalendarModule.prototype.isTrailingMode = function() {
      return this.options.force_trailing_mode || ($.inArray("/integration/dynamic", cloud9.venue.wifi_config.features) !== -1 || $.inArray("/integration/interstitial", cloud9.venue.wifi_config.features) !== -1);
    };

    CalendarModule.prototype.doComplete = function() {
      var resp, respUrl;
      if (this.options['complete']) {
        resp = this.options['complete'][0];
        respUrl = this.options['complete'][1] ? cloud9.promos.renderUrl(this.options['complete'][1]) : null;
        return cloud9.promos.responseRedirect(resp, respUrl);
      }
      return this.trigger('complete');
    };

    CalendarModule.prototype.showLoader = function() {
      var color, timeout;
      if (this.options["loader_timeout"] === 0) {
        return;
      }
      color = this.options["loader_color"];
      timeout = this.options["loader_timeout"];
      timeout = +timeout;
      this.$.find('.connect-container').hide();
      this._loader = this.$.find('.connect-loader').show().activity({
        color: color
      });
      return window.setTimeout((function(_this) {
        return function() {
          return _this.doComplete();
        };
      })(this), timeout * 1000);
    };

    CalendarModule.prototype.enter = function() {
      this.$.find('.connect-container').show();
      if (this.isTrailingMode()) {
        return this.showLoader();
      }
    };

    CalendarModule.prototype.exit = function() {
      var _ref;
      return (_ref = this._loader) != null ? _ref.activity(false) : void 0;
    };

    return CalendarModule;

  })(cloud9.modules.BaseModule);

  cloud9.modules.CalendarModule = CalendarModule;

}).call(this);

//# sourceMappingURL=module.map

/* End "modules/CalendarModule/module.js" */
/* Begin "modules/SelectableMediaModule/module.js" */
// Generated by CoffeeScript 1.6.1
(function() {
  var FlashDetect=new function(){var self=this;self.installed=false;self.raw="";self.major=-1;self.minor=-1;self.revision=-1;self.revisionStr="";var activeXDetectRules=[{"name":"ShockwaveFlash.ShockwaveFlash.7","version":function(obj){return getActiveXVersion(obj);}},{"name":"ShockwaveFlash.ShockwaveFlash.6","version":function(obj){var version="6,0,21";try{obj.AllowScriptAccess="always";version=getActiveXVersion(obj);}catch(err){}
return version;}},{"name":"ShockwaveFlash.ShockwaveFlash","version":function(obj){return getActiveXVersion(obj);}}];var getActiveXVersion=function(activeXObj){var version=-1;try{version=activeXObj.GetVariable("$version");}catch(err){}
return version;};var getActiveXObject=function(name){var obj=-1;try{obj=new ActiveXObject(name);}catch(err){obj={activeXError:true};}
return obj;};var parseActiveXVersion=function(str){var versionArray=str.split(",");return{"raw":str,"major":parseInt(versionArray[0].split(" ")[1],10),"minor":parseInt(versionArray[1],10),"revision":parseInt(versionArray[2],10),"revisionStr":versionArray[2]};};var parseStandardVersion=function(str){var descParts=str.split(/ +/);var majorMinor=descParts[2].split(/\./);var revisionStr=descParts[3];return{"raw":str,"major":parseInt(majorMinor[0],10),"minor":parseInt(majorMinor[1],10),"revisionStr":revisionStr,"revision":parseRevisionStrToInt(revisionStr)};};var parseRevisionStrToInt=function(str){return parseInt(str.replace(/[a-zA-Z]/g,""),10)||self.revision;};self.majorAtLeast=function(version){return self.major>=version;};self.minorAtLeast=function(version){return self.minor>=version;};self.revisionAtLeast=function(version){return self.revision>=version;};self.versionAtLeast=function(major){var properties=[self.major,self.minor,self.revision];var len=Math.min(properties.length,arguments.length);for(i=0;i<len;i++){if(properties[i]>=arguments[i]){if(i+1<len&&properties[i]==arguments[i]){continue;}else{return true;}}else{return false;}}};self.FlashDetect=function(){if(navigator.plugins&&navigator.plugins.length>0){var type='application/x-shockwave-flash';var mimeTypes=navigator.mimeTypes;if(mimeTypes&&mimeTypes[type]&&mimeTypes[type].enabledPlugin&&mimeTypes[type].enabledPlugin.description){var version=mimeTypes[type].enabledPlugin.description;var versionObj=parseStandardVersion(version);self.raw=versionObj.raw;self.major=versionObj.major;self.minor=versionObj.minor;self.revisionStr=versionObj.revisionStr;self.revision=versionObj.revision;self.installed=true;}}else if(navigator.appVersion.indexOf("Mac")==-1&&window.execScript){var version=-1;for(var i=0;i<activeXDetectRules.length&&version==-1;i++){var obj=getActiveXObject(activeXDetectRules[i].name);if(!obj.activeXError){self.installed=true;version=activeXDetectRules[i].version(obj);if(version!=-1){var versionObj=parseActiveXVersion(version);self.raw=versionObj.raw;self.major=versionObj.major;self.minor=versionObj.minor;self.revision=versionObj.revision;self.revisionStr=versionObj.revisionStr;}}}}}();};FlashDetect.JS_RELEASE="1.0.4";
  ;
  var SelectableMediaModule,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  SelectableMediaModule = (function(_super) {

    __extends(SelectableMediaModule, _super);

    function SelectableMediaModule() {
      return SelectableMediaModule.__super__.constructor.apply(this, arguments);
    }

    SelectableMediaModule.prototype._smState = "notReady";

    SelectableMediaModule.prototype._panicWhenEnterCode = null;

    SelectableMediaModule.prototype.smJsUrl = "https://cdn.selectablemedia.com/tags/current/javascripts/pub.js";

    SelectableMediaModule.prototype.defaultOptions = {
      ready_timeout: 10,
      ad_started_timeout: 20,
      login_timeout: 15,
      auto_login: true,
      debug: false
    };

    SelectableMediaModule.prototype.initialize = function() {
      var handleLogin,
        _this = this;
      this.postauth = false;
      this.adStarted = false;
      this.options = $.extend({}, this.defaultOptions, this.options);
      window._sm_plcmnt = "Boingo_5230_5125";
      window._sm_uid = cloud9.uid;
      window._sm_dv = "sm-player-wrap";
      window._sm_lghtbx = 0;
      window._sm_plyr_x = 0;
      window._sm_plyr_y = 0;
      window._sm_clsbttn = 0;
      window._c9_sm_callback = function() {
        return _this._smOnEvent.apply(_this, arguments);
      };
      window._sm_callback = '_c9_sm_callback';
      handleLogin = function(res) {
        if (res.online) {
          _this.postauth = true;
          _this.$.find('.connect-loader').hide();
          return $.getScript(_this.smJsUrl);
        } else {
          _this.alert("cannot background login");
          return _this._panicIfEntered("LOGIN");
        }
      };
      if (this.options.auto_login) {
        return cloud9.promos.backgroundLogin(handleLogin, this.options.login_timeout);
      } else {
        return handleLogin({
          online: true
        });
      }
    };

    SelectableMediaModule.prototype.alert = function(msg) {
      if (this.options.debug) {
        return alert(msg);
      }
    };

    SelectableMediaModule.prototype._smOnEvent = function(evt, val) {
      this._smState = evt;
      console.log("smOnEvent:", evt, val);
      switch (evt) {
        case "smReady":
          this._smState = "READY";
          cloud9.promos.track('vid_saw_0');
          return doNabbox();
        case "adStarted":
          cloud9.promos.track('vid_saw_100');
          return this.adStarted = true;
        case "adCompleted":
          cloud9.promos.track('video');
          this.alert("ad completed");
          return window.setTimeout(function() {
            return top.location.href = cloud9.promos.getEdgeDestUrl() || 'http://edge.c9w.net/wifi_dest.html';
          }, 1000);
        case "error":
          this.alert("ad error" + val);
          return this._smOnError(val);
      }
    };

    SelectableMediaModule.prototype._smOnError = function(err) {
      console.warn("smOnError:", err);
      return this._panicIfEntered(err);
    };

    SelectableMediaModule.prototype._panicIfEntered = function(code) {
      code || (code = this._panicWhenEnterCode);
      if (code == null) {
        return false;
      }
      if (!this._entered) {
        this._panicWhenEnterCode = code;
        return false;
      } else {
        this.panic(code);
        return true;
      }
    };

    SelectableMediaModule.prototype.panic = function(code) {
      this.alert("Paniced! " + this.postauth);
      if (this.postauth) {
        return top.location.href = cloud9.promos.getEdgeDestUrl() || 'http://edge.c9w.net/wifi_dest.html';
      } else {
        return cloud9.promos.failRedirect();
      }
    };

    SelectableMediaModule.prototype.enter = function() {
      var module;
      this._entered = true;
      if (this._panicIfEntered()) {
        return;
      }
      if (!FlashDetect.versionAtLeast(10)) {
        this.panic("FLASH");
        return;
      }
      module = this;
      return window.setTimeout(function() {
        if (module._smState === "notReady") {
          return module.panic("notReady");
        } else {
          return window.setTimeout(function() {
            if (!module.adStarted) {
              return module.panic("adNotStarted");
            }
          }, module.options.ad_started_timeout * 1000);
        }
      }, this.options.ready_timeout * 1000);
    };

    SelectableMediaModule.prototype.exit = function() {};

    return SelectableMediaModule;

  })(cloud9.modules.BaseModule);

  cloud9.modules.SelectableMediaModule = SelectableMediaModule;

}).call(this);

/* End "modules/SelectableMediaModule/module.js" */
/* Begin "modules/PostAuthIFrameModule/module.js" */
// Generated by CoffeeScript 1.6.2
var PostAuthIFrameModule, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

PostAuthIFrameModule = (function(_super) {
  __extends(PostAuthIFrameModule, _super);

  function PostAuthIFrameModule() {
    _ref = PostAuthIFrameModule.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  PostAuthIFrameModule.prototype.initialize = function() {
    var defaultOptions, rdirect,
      _this = this;

    defaultOptions = {
      login_timeout: 15,
      iframe_url: null
    };
    this.options = $.extend(defaultOptions, this.options);
    $(function() {
      if (/Android/.test(navigator.userAgent) && cloud9.promos.templateName === 'superpromo-laptop-assets') {
        return $('#bg-resizable').hide();
      }
    });
    rdirect = this.doRedirect();
    return window.postMsg = function(msg) {
      var nxt;

      if (msg === 'loaded') {

      } else if (msg === 'unloaded') {
        nxt = cloud9.promos.getEdgeDestUrl() || 'http://edge.c9w.net/wifi_dest.html';
        return rdirect(nxt);
      }
    };
  };

  PostAuthIFrameModule.prototype.doRedirect = function(url) {
    var executed;

    executed = false;
    return function(url) {
      if (!executed) {
        executed = true;
        return window.location.href = url;
      }
    };
  };

  PostAuthIFrameModule.prototype.postLogin = function(res) {
    var url;

    if (!res.online) {
      cloud9.promos.responseRedirect('fail');
      return;
    }
    url = this.getIframeUrl();
    this.$.find('.viewport').attr('src', url);
    return this.$.find('.loader-overlay').hide();
  };

  PostAuthIFrameModule.prototype.enter = function() {
    var res,
      _this = this;

    if (this.options.auto_login) {
      return cloud9.promos.backgroundLogin(function(res) {
        return _this.postLogin(res);
      }, this.options.login_timeout);
    } else {
      res = {
        online: true
      };
      return this.postLogin(res);
    }
  };

  PostAuthIFrameModule.prototype.getIframeUrl = function() {
    var res;

    res = this.options.iframe_url.replace(/\$VENUE\$/g, encodeURIComponent(cloud9.venue.uuid));
    res = res.replace(/\$PROMO\$/g, encodeURIComponent(cloud9.promos.promo));
    res = res.replace(/\$TRACK_URL\$/g, encodeURIComponent(cloud9.promos.trackUrl));
    return res = res.replace(/\$RAND\$/g, '' + Math.floor(Math.random() * 1e8));
  };

  return PostAuthIFrameModule;

})(cloud9.modules.BaseModule);

cloud9.modules.PostAuthIFrameModule = PostAuthIFrameModule;

/* End "modules/PostAuthIFrameModule/module.js" */
/* Begin "modules/AppVerifyModule/module.js" */
// Generated by CoffeeScript 1.6.2
var AppVerifyModule, _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

AppVerifyModule = (function(_super) {
  __extends(AppVerifyModule, _super);

  function AppVerifyModule() {
    this.startVerify = __bind(this.startVerify, this);
    this.doOpen = __bind(this.doOpen, this);
    this.onWhitelist = __bind(this.onWhitelist, this);
    this.onFingerprint = __bind(this.onFingerprint, this);
    this.fingerprint = __bind(this.fingerprint, this);    _ref = AppVerifyModule.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  AppVerifyModule.prototype.defaultOptions = {
    wl_timeout: 10
  };

  AppVerifyModule.prototype.initialize = function() {
    var _this = this;

    this.options = $.extend({}, this.defaultOptions, this.options);
    this._visible = false;
    this._verifyTimeout = null;
    this.status = this.$.find(".status");
    this.$.find(".help").click(function(e) {
      e.preventDefault();
      cloud9.promos.track("help");
      return _this.showHelp();
    });
    this.$.find(".accept").click(function(e) {
      e.preventDefault();
      return cloud9.promos.acceptRedirect();
    });
    this.$.find(".help_section .try_again").click(function(e) {
      e.preventDefault();
      cloud9.promos.track("try_again");
      window.AppControl.eraseVerifyCookie();
      _this.hideHelp();
      return _this.fingerprint();
    });
    this.$.find(".help_section .reject").click(function(e) {
      e.preventDefault();
      _this.$.find(".help_section").hide();
      _this.$.find('.reject_message').show();
      if (_this.options.disable_on_reject) {
        return cloud9.promos.trackRedirect(cloud9.promos.disableUrl, "reject+verify_reject");
      } else {
        return cloud9.promos.submitResponse("reject+verify_reject");
      }
    });
    return this.fingerprint();
  };

  AppVerifyModule.prototype.enter = function() {
    var _this = this;

    cloud9.promos.track("verify");
    if (this._whitelisted === true) {
      this.status.text(this.options.opening_status);
      setTimeout(this.doOpen, this.options.open_delay);
    } else {
      window.setTimeout(function() {
        if (!_this._whitelisted) {
          _this.status.text("Error: WL Timeout. Try again later.");
          return _this.tryConnectOnError("WL Timeout");
        }
      }, this.options.wl_timeout * 1000);
    }
    return this._visible = true;
  };

  AppVerifyModule.prototype.exit = function() {
    return this._visible = false;
  };

  AppVerifyModule.prototype.fingerprint = function() {
    var _this = this;

    this._fingerprinted = false;
    this._whitelisted = false;
    this._verify_checks = 0;
    this.status.text("Loading...");
    return window.AppControl.fingerprint(this.options.fingerprint_url, function() {
      return _this.onFingerprint.apply(_this, arguments);
    });
  };

  AppVerifyModule.prototype.onFingerprint = function() {
    var _this = this;

    this._fingerprinted = true;
    window.console.info("Fingerprinted");
    this.status.append(".");
    return window.AppControl.whitelist("" + this.options.whitelist_url + "?net=" + this.options.sp_network, function() {
      return _this.onWhitelist.apply(_this, arguments);
    });
  };

  AppVerifyModule.prototype.onWhitelist = function(success) {
    if (success) {
      this._whitelisted = true;
      window.console.info("Whitelisted");
      this.status.append(".");
      if (this._visible) {
        return this.doOpen();
      }
    } else {
      window.console.warn("Whitelisting failed");
      this.status.text("Error: WL Failure");
      return this.tryConnectOnError("WL Failure");
    }
  };

  AppVerifyModule.prototype.tryConnectOnError = function(code) {
    if (this.options.connect_on_error) {
      alert(code + ": Something went wrong. We're connecting you now.");
      return cloud9.promos.failRedirect();
    } else {
      return alert(code + ": Something went wrong. Try again later.");
    }
  };

  AppVerifyModule.prototype.doOpen = function() {
    var _this = this;

    if (!this._whitelisted) {
      this.tryConnectOnError("WL on Open Failure");
      return;
    }
    if (!this._fingerprinted) {
      this.tryConnectOnError("FP on Open Failure");
      return;
    }
    window.console.info("Opening " + this.options.store + " app " + this.options.app_id);
    if (window.AppControl.hasVerifyCookie()) {
      window.console.info("Skipped opening store, already in verify mode");
    } else {
      window.AppControl.setVerifyCookie();
      if (window.AppControl.open(this.options.store_url || this.options.store, this.options.app_id)) {
        window.console.info("" + this.options.store + " opened");
      } else {
        window.console.warn("" + this.options.store + " open failed");
        this.status.text("Could not open the app store.");
        window.AppControl.eraseVerifyCookie();
        return;
      }
    }
    return setTimeout(function() {
      _this.status.text(_this.options.verifying_status);
      return _this.startVerify();
    }, 300);
  };

  AppVerifyModule.prototype.startVerify = function() {
    var intv, onVerify,
      _this = this;

    intv = null;
    onVerify = function(success) {
      _this._verify_checks += 1;
      if (success) {
        window.console.info("Download verified");
        cloud9.promos.track("verified");
        _this.status.text(_this.options.verified_status);
        _this.$.find(".loader,.instruction,.status").hide();
        _this.$.find(".accept,.thanks").css("display", "block");
        return window.clearInterval(intv);
      } else {
        return window.console.info("Verification " + _this._verify_checks + " failed, trying again in " + _this.options.verify_interval + " ms");
      }
    };
    return intv = window.setInterval(function() {
      return window.AppControl.verify("" + _this.options.verify_url + "/" + _this.options.store + "/" + _this.options.app_id + "/", onVerify);
    }, this.options.verify_interval);
  };

  AppVerifyModule.prototype.showHelp = function() {
    if (this._verifyTimeout != null) {
      clearTimeout(this._verifyTimeout);
    }
    this.$.find(".action").hide();
    return this.$.find(".help_section").show();
  };

  AppVerifyModule.prototype.hideHelp = function() {
    this.$.find(".action").show();
    return this.$.find(".help_section").hide();
  };

  return AppVerifyModule;

})(cloud9.modules.BaseModule);

cloud9.modules.AppVerifyModule = AppVerifyModule;

/* End "modules/AppVerifyModule/module.js" */
/* Begin "modules/BannerAdModule/module.js" */
// Generated by CoffeeScript 1.4.0
var BannerAdModule,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

BannerAdModule = (function(_super) {

  __extends(BannerAdModule, _super);

  function BannerAdModule() {
    return BannerAdModule.__super__.constructor.apply(this, arguments);
  }

  return BannerAdModule;

})(cloud9.modules.BaseModule);

cloud9.modules.BannerAdModule = BannerAdModule;

/* End "modules/BannerAdModule/module.js" */
/* Begin "modules/SpotXChangeModule/module.js" */
// Generated by CoffeeScript 1.6.1
(function() {
  var SpotXChangeModule,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  SpotXChangeModule = (function(_super) {

    __extends(SpotXChangeModule, _super);

    function SpotXChangeModule() {
      return SpotXChangeModule.__super__.constructor.apply(this, arguments);
    }

    SpotXChangeModule.prototype.initialize = function() {
      if (!swfobject.hasFlashPlayerVersion("9.0.18")) {
        cloud9.promos.track('fail_init');
        return setTimeout(function() {
          return top.location.href = cloud9.promos.getEdgeDestUrl() || 'http://edge.c9w.net/wifi_dest.html';
        }, 300);
      }
    };

    SpotXChangeModule.prototype.enter = function() {};

    SpotXChangeModule.prototype.exit = function() {};

    return SpotXChangeModule;

  })(cloud9.modules.BaseModule);

  cloud9.modules.SpotXChangeModule = SpotXChangeModule;

}).call(this);

/* End "modules/SpotXChangeModule/module.js" */
/* Begin "modules/SocialVibeModule/module.js" */
// Generated by CoffeeScript 1.6.2
var SocialVibeModule, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

SocialVibeModule = (function(_super) {
  __extends(SocialVibeModule, _super);

  function SocialVibeModule() {
    _ref = SocialVibeModule.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  SocialVibeModule.prototype.initialize = function() {
    var socialvibe_ctx;

    _.bindAll(this, 'svCompleteCb');
    this.socialvibe_ctx = socialvibe_ctx = cloud9.promos.context['socialvibe'] || this.options.socialvibe_ctx;
    if ((socialvibe_ctx == null) || !swfobject.hasFlashPlayerVersion("9.0")) {
      cloud9.promos.disableFlow();
      return;
    }
    return SvNetwork.registerCompletionCallback(this.svCompleteCb);
  };

  SocialVibeModule.prototype.svCompleteCb = function() {
    return cloud9.promos.acceptRedirect();
  };

  SocialVibeModule.prototype.enter = function() {
    var activityUrl, cnt, socialvibe_ctx,
      _this = this;

    socialvibe_ctx = this.socialvibe_ctx;
    activityUrl = socialvibe_ctx["activity_window_url"];
    activityUrl += '&c9resp=' + window.encodeURIComponent(cloud9.promos.respUrl);
    activityUrl = activityUrl.replace('partners.socialvi.be', 'partners.socialvi.be.proxy.c9w.net');
    activityUrl = activityUrl.replace('$NETWORK_USER_ID$', Math.floor(Math.random() * 1e9));
    this.$.find('.activity-frame').attr('src', activityUrl).css({
      'width': socialvibe_ctx['activity_window_width'] + 'px',
      'height': socialvibe_ctx['activity_window_height'] + 'px'
    });
    cnt = 20;
    if (this.options.timeout != null) {
      cnt = this.options.timeout;
    }
    window.setInterval(function() {
      if (cnt-- <= 6) {
        return _this.trigger('skipTime', cnt);
      }
    }, 1000);
    window.setTimeout(function() {
      _this.$.find('h5').html('<img src="/static/images/icon-arrow-white-down.png" alt="" />&nbsp;Complete this activity to proceed to free WiFi.');
      return _this.$.find('.loader-msg').hide();
    }, 1500);
    this.unbind('complete');
    return this.bind('complete', cloud9.promos.rejectRedirect);
  };

  SocialVibeModule.prototype.exit = function() {};

  return SocialVibeModule;

})(cloud9.modules.BaseModule);

cloud9.modules.SocialVibeModule = SocialVibeModule;

/* End "modules/SocialVibeModule/module.js" */
/* Begin "modules/ImageMapAcceptRejectModule/module.js" */
// Generated by CoffeeScript 1.6.2
var ImageMapAcceptRejectModule, staticUrl, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

staticUrl = cloud9.promos.staticUrl;

ImageMapAcceptRejectModule = (function(_super) {
  __extends(ImageMapAcceptRejectModule, _super);

  function ImageMapAcceptRejectModule() {
    _ref = ImageMapAcceptRejectModule.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  return ImageMapAcceptRejectModule;

})(cloud9.modules.AcceptRejectModule);

cloud9.modules.ImageMapAcceptRejectModule = ImageMapAcceptRejectModule;

/* End "modules/ImageMapAcceptRejectModule/module.js" */
/* Begin "modules/YouTubeModule/module.js" */
// Generated by CoffeeScript 1.3.3
(function() {
    function VideoControlsWidget(options) {
      this.options = {
      };
      $.extend(this.options, options);
      this.$el = $(this.options.el);
      this.$elapsed = this.$('.progress-bar-elapsed');
      this.$muteBtn = this.$('.mute-btn');
      this.$rollLbl = this.$('.roll-label');
      this.events = this.options.events;
      this.playing = false;
      this.mute = false;
      this.duration = null;
      this.elapsed = 0;

      var _this = this;
      this.$muteBtn.click(function(){
          _this.setMute(!_this.mute);
          if(_this.events.onMuteClick) {
              _this.events.onMuteClick(_this.mute);
          }
          return false;
      });
  }

  VideoControlsWidget.prototype = {
      "$": function(){
          return this.$el.find.apply(this.$el, arguments);
      },
      setPlaying: function(isPlaying) {
          this.playing = isPlaying;
          this.render();
      },
      setDuration: function(duration) {
          this.duration = duration;
          this.render();
      },
      setMute: function(isMute) {
          this.mute = isMute;
          this.render();
      },
      updateElapsed: function(elapsed) {
          this.elapsed = elapsed;
          this.render();
      },
      formatTime: function(seconds) {
          var hours = Math.floor(seconds / 3600);
          var minutes = Math.floor((seconds % 3600) / 60);
          var seconds = Math.floor(seconds % 60);
          var leadZeroes = function(v) {
              vStr = (v + "").length == 1 ? "0" + v : "" + v;
              return vStr;

          }
          if(hours > 0) {
              return hours + ":" + leadZeroes(minutes) + ":" + leadZeroes(seconds);
          } else {
              return minutes + ":" + leadZeroes(seconds);
          }
      },
      render: function() {
          var elapsedWidth = 0;
          if(this.duration) {
              elapsedWidth = (Math.min(this.elapsed / this.duration, 1.0) * 100) + '%'
              this.$rollLbl.text("Advertisement (" + this.formatTime(Math.max(this.duration - this.elapsed, 0)) +")")
          } else {
              this.$rollLbl.text("");
          }
          this.$elapsed.css("width", elapsedWidth);

          if(this.mute) {
              this.$muteBtn
                  .attr("title", "Unmute")
                  .find("i").removeClass().addClass("icon-volume-off");
          } else {
              this.$muteBtn
                  .attr("title", "Mute")
                  .find("i").removeClass().addClass("icon-volume-up");
          }
      }
  };
;

  var YouTubeModule,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  YouTubeModule = (function(_super) {

    __extends(YouTubeModule, _super);

    function YouTubeModule() {
      return YouTubeModule.__super__.constructor.apply(this, arguments);
    }

    YouTubeModule.prototype.enter = function() {
      var firstScriptTag, module, options, tag,
        _this = this;
      if (!(window.postMessage != null)) {
        this.trigger("complete");
      }
      module = this;
      options = this.options;
      this.player = null;
      this.done = false;
      this.controlsWidget = new VideoControlsWidget({
        el: this.$.find('.video-controls'),
        events: {
          onMuteClick: function(isMuted) {
            if (isMuted) {
              return module.player.mute();
            } else {
              return module.player.unMute();
            }
          }
        }
      });
      tag = document.createElement('script');
      tag.src = "//www.youtube.com/iframe_api";
      firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = function() {
        return module.player = new YT.Player('yt-player', {
          height: options.player_height,
          width: options.player_width,
          videoId: options.video_id,
          playerVars: {
            controls: "0",
            disablekb: "0",
            rel: "0",
            autohide: "1"
          },
          events: {
            'onReady': function(event) {
              return module.onPlayerReady(event);
            },
            'onStateChange': function(event) {
              return module.onPlayerStateChange(event);
            },
            'onError': function(event) {
              return module.onPlayerError(event);
            }
          }
        });
      };
      return this.elapsedInt = window.setInterval(function() {
        var _ref;
        if (!(((_ref = _this.player) != null ? _ref.getCurrentTime : void 0) != null)) {
          return;
        }
        return _this.controlsWidget.updateElapsed(_this.player.getCurrentTime());
      }, 100);
    };

    YouTubeModule.prototype.onPlayerReady = function(event) {
      this.$.find(".video-controls").show();
      event.target.playVideo();
      this.controlsWidget.setDuration(this.player.getDuration());
      return this.controlsWidget.setMute(this.player.isMuted());
    };

    YouTubeModule.prototype.onPlayerStateChange = function(event) {
      if (event.data === YT.PlayerState.ENDED && !this.done) {
        this.player.stopVideo();
        this.controlsWidget.updateElapsed(this.controlsWidget.duration);
        this.controlsWidget.setPlaying(false);
        this.done = true;
        return this.trigger('complete');
      }
    };

    YouTubeModule.prototype.onPlayerError = function() {
      return this.trigger('complete');
    };

    return YouTubeModule;

  })(cloud9.modules.BaseModule);

  cloud9.modules.YouTubeModule = YouTubeModule;

}).call(this);

/* End "modules/YouTubeModule/module.js" */
/* Begin "modules/PostAuthGCSModule/module.js" */
// Generated by CoffeeScript 1.3.3
(function() {
  var PostAuthGCSModule,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  PostAuthGCSModule = (function(_super) {

    __extends(PostAuthGCSModule, _super);

    function PostAuthGCSModule() {
      return PostAuthGCSModule.__super__.constructor.apply(this, arguments);
    }

    PostAuthGCSModule.prototype.initialize = function() {
      var defaultOptions,
        _this = this;
      defaultOptions = {
        login: true,
        login_timeout: 15,
        fail_url: null,
        fail_init_url: null,
        gcs_timeout: 5,
        alt_flow: null
      };
      this.options = $.extend(defaultOptions, this.options);
      if (/facebook\.com/.test(document.referrer) || /^http\:\/\/(t\.co|twitter\.com)/.test(document.referrer)) {
        cloud9.checkIsOnline(function() {
          return window.location.href = 'http://www.cloudnine.com/?utm_source=gcs&utm_campaign=gcs&utm_medium=wifi';
        });
      }
      $(function() {
        _this.$.find('.response-btn').bind('click', function(e) {
          var destUrl;
          e.preventDefault();
          destUrl = cloud9.promos.getEdgeDestUrl() || 'http://edge.c9w.net/wifi_dest.html?pd=1';
          return window.setTimeout(function() {
            return window.location.href = destUrl;
          }, 600);
        });
        if (/Android/.test(navigator.userAgent) && cloud9.promos.templateName === 'superpromo-laptop-assets') {
          return $('#bg-resizable').hide();
        }
      });
      window.gcsComplete = function(success) {
        if (success) {
          cloud9.promos.track('accept');
        } else {
          cloud9.promos.track('err1');
        }
        return _this.$.find('h4.survey').hide();
      };
      return window.gcsAltAction = function() {
        var destUrl;
        if (_this.options.alt_flow) {
          cloud9.promos.track('reject+alt_login');
          return window.setTimeout(function() {
            return cloud9.promos.tryFlow(_this.options.alt_flow);
          }, 600);
        } else {
          cloud9.promos.track('reject');
          destUrl = cloud9.promos.getEdgeDestUrl() || 'http://edge.c9w.net/wifi_dest.html?pd=1';
          return window.setTimeout(function() {
            return window.location.href = destUrl;
          }, 600);
        }
      };
    };

    PostAuthGCSModule.prototype.enter = function() {
      var _this = this;
      if (this.options.login) {
        return cloud9.promos.backgroundLogin(function(res) {
          if (!res.online) {
            cloud9.promos.responseRedirect('fail_init', _this.getFailInitUrl());
            return;
          }
          return _this.showGCS();
        }, this.options.login_timeout);
      } else {
        return this.showGCS();
      }
    };

    PostAuthGCSModule.prototype.getFailInitUrl = function() {
      var res;
      res = this.options.fail_init_url;
      if (res != null) {
        res = cloud9.promos.renderUrl(res);
      }
      return res;
    };

    PostAuthGCSModule.prototype.getFailUrl = function() {
      var res;
      res = this.options.fail_url;
      if ((res != null) && res !== '$EDGE_DEST_URL$') {
        res = cloud9.promos.renderUrl(res);
      }
      return res;
    };

    PostAuthGCSModule.prototype.scalePrompt = function() {
      var ifHeight, prompt;
      prompt = $("#t402-prompt-iframe")[0];
      try {
        if ((prompt != null) && (prompt.contentWindow != null) && (prompt.contentWindow.document != null)) {
          ifHeight = $("body", prompt.contentWindow.document).height();
          if ($(prompt).height() < ifHeight) {
            $(prompt).height(ifHeight);
          }
        }
      } catch (err) {

      }
      this.$.find('.inner1').height(this.$.find('.centerer').height() + 10);
      $(window).trigger('resize');
      return window.setTimeout(function() {
        return $(window).trigger('resize');
      }, 1500);
    };

    PostAuthGCSModule.prototype.showGCS = function() {
      var gcsLoaded,
        _this = this;
      gcsLoaded = false;
      this.loadGCS(function() {
        _this.$.find('.main-content').show();
        gcsLoaded = true;
        try {
          _402_Show();
        } catch (err) {
          cloud9.promos.track('fail');
          _this.$.find('h4.survey').hide();
        }
        _this.$.find('.loader-overlay').hide();
        return _this.scalePrompt();
      });
      return window.setTimeout(function() {
        if (!gcsLoaded) {
          if (_this.getFailUrl() === '$EDGE_DEST_URL$') {
            cloud9.promos.track('fail');
            return window.setTimeout(function() {
              return window.location.href = cloud9.promos.getEdgeDestUrl() || 'http://edge.c9w.net/wifi_dest.html?pd=1';
            }, 500);
          } else {
            return cloud9.promos.responseRedirect('fail', _this.getFailUrl());
          }
        }
      }, this.options.gcs_timeout * 1000);
    };

    PostAuthGCSModule.prototype.loadGCS = function(cb) {
      var ARTICLE_URL, CONTENT_ID, oldWrite, scriptsrc, shtml;
      shtml = '';
      oldWrite = document.write;
      document.write = function(s) {
        return shtml += s;
      };
      ARTICLE_URL = 'http://nimbus.c9w.net/portals/freewifi/';
      CONTENT_ID = '' + (Math.floor(Math.random() * 1e7));
      scriptsrc = '//survey.g.doubleclick.net/survey?site=5640014' + '&url=' + encodeURIComponent(ARTICLE_URL) + '&cid=' + encodeURIComponent(CONTENT_ID) + '&random=' + (new Date).getTime();
      return $.getScript(scriptsrc, function() {
        var checkReadyInt, snodes;
        document.write = oldWrite;
        snodes = $(shtml);
        $('body').prepend(snodes);
        return checkReadyInt = window.setInterval(function() {
          if (window._402 && window._402.params) {
            window.clearInterval(checkReadyInt);
            return cb();
          }
        }, 100);
      });
    };

    return PostAuthGCSModule;

  })(cloud9.modules.BaseModule);

  cloud9.modules.PostAuthGCSModule = PostAuthGCSModule;

}).call(this);

/* End "modules/PostAuthGCSModule/module.js" */
/* Begin "modules/PostAuthTrueXModule/module.js" */
// Generated by CoffeeScript 1.6.3
var PostAuthTrueXModule, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

PostAuthTrueXModule = (function(_super) {
  __extends(PostAuthTrueXModule, _super);

  function PostAuthTrueXModule() {
    _ref = PostAuthTrueXModule.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  PostAuthTrueXModule.prototype.initialize = function() {
    this.uid = 'boingo_user_' + Math.floor((Math.random() * 1000) + 1).toString();
    this.partner_config_hash = this.options['partner_config_hash'];
    return this.truex_config_options = {
      'network_user_id': this.uid,
      'partner_config_hash': this.partner_config_hash
    };
  };

  PostAuthTrueXModule.prototype.postAuthLogin = function(res) {
    var self;
    self = this;
    if (!res.online) {
      console('login failed');
      return cloud9.promos.responseRedirect('fail');
    } else {
      console.log("login successful");
      return $.getScript('http://static.truex.com/js/client.js', function() {
        var e;
        console.log('truex script loaded');
        try {
          return self.onTrueXScriptLoaded();
        } catch (_error) {
          e = _error;
          return console.log(e.stack);
        } finally {
          console.log('done');
        }
      });
    }
  };

  PostAuthTrueXModule.prototype.onTrueXScriptLoaded = function() {
    var displayTrueX;
    displayTrueX = function(activity, client) {
      var e;
      try {
        return client.loadActivityIntoContainer(activity, 'truex_activity');
      } catch (_error) {
        e = _error;
        return console.log(e.stack);
      }
    };
    return truex.client(this.truex_config_options, function(client) {
      return client.requestActivity(function(activity) {
        if (activity) {
          console.log('has activity');
          $('.connect-loader').hide();
          $('#truex_activity').show();
          activity.onClose(function(activity) {
            $('#truex_activity').hide();
            return cloud9.promos.responseRedirect('accept');
          });
          return displayTrueX(activity, client);
        } else {
          console.log('no activity');
          return cloud9.promos.responseRedirect('accept');
        }
      });
    });
  };

  PostAuthTrueXModule.prototype.enter = function() {
    var _this = this;
    return cloud9.promos.backgroundLogin(function(res) {
      return _this.postAuthLogin(res);
    }, 0);
  };

  return PostAuthTrueXModule;

})(cloud9.modules.BaseModule);

cloud9.modules.PostAuthTrueXModule = PostAuthTrueXModule;

/* End "modules/PostAuthTrueXModule/module.js" */
/* Begin "modules/MastercardModule/module.js" */
// Generated by CoffeeScript 1.8.0
(function() {
  var MastercardModule,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  MastercardModule = (function(_super) {
    __extends(MastercardModule, _super);

    function MastercardModule() {
      return MastercardModule.__super__.constructor.apply(this, arguments);
    }

    MastercardModule.prototype.doResponse = function(e, optPrefix) {
      var mode, opts, self;
      self = this;
      mode = (self.options[optPrefix + '_' + e + '_mode'] || '').toLowerCase() || 'redirect';
      opts = {
        successUrl: self.options[optPrefix + '_' + e + '_url']
      };
      if (self.options[optPrefix + '_timeout']) {
        opts['pTimeout'] = self.options[optPrefix + '_timeout'];
      }
      if (self.options[optPrefix + '_retake']) {
        opts['pRetake'] = self.options[optPrefix + '_retake'];
      }
      return cloud9.promos.response(e, mode, opts);
    };

    MastercardModule.prototype.sendJsonDataSynchronouslyTo = function(data, url, callback) {
      return $.ajax({
        type: "POST",
        async: false,
        url: url,
        data: data,
        dataType: 'json',
        complete: callback ? callback : function() {}
      });
    };

    MastercardModule.prototype.buildDataObjectToSendToMasterPass = function(email, postalCode, programCommunicationOptin) {
      return JSON.stringify({
        "siteId": 493,
        "eventId": 182,
        "channelId": 1,
        "email": email,
        "postalCode": postalCode.toString(),
        "mcCommunicationOptIn": true,
        "programCommunicationOptIn": programCommunicationOptin,
        "locale": "en_US",
        "privacyAccepted": true,
        "termsAccepted": true
      });
    };

    MastercardModule.prototype.sendDataToMasterPass = function(data) {
      var finalUrl, masterPassUrl, masterPassUrlEncoded, proxyUrl;
      masterPassUrl = "https://ws.mastercard.com/MasterCardID/Registration/preauth/registerLeadGenUser";
      masterPassUrlEncoded = encodeURIComponent(masterPassUrl);
      proxyUrl = "/apiproxy/postjson/";
      finalUrl = proxyUrl + "?url=" + masterPassUrlEncoded;
      return this.sendJsonDataSynchronouslyTo(data, finalUrl, function(jqxhr, status) {
        console.log(status);
        return console.log(jqxhr);
      });
    };

    MastercardModule.prototype.setupAccept = function(division, context, opts) {
      var self;
      self = this;
      this.$.find(context + " input[type=image].accept ").click(function(e) {
        e.preventDefault();
        return self.$.find(context + " .input-form").submit();
      });
      this.$.find(context + ' .input-form').submit(function(e) {
        var $inp, $inputs, dataToSendToMasterPass, element, finalUrl, inp, inpObj, inputElementsByName, inputsByName, name, re, val, _i, _j, _k, _len, _len1, _len2;
        e.preventDefault();
        finalUrl = null;
        $inputs = $(this).find('input.user-input,select.user-input');
        inputsByName = {};
        for (_i = 0, _len = opts.length; _i < _len; _i++) {
          inpObj = opts[_i];
          inputsByName[inpObj.name] = inpObj;
        }
        inputElementsByName = {};
        for (_j = 0, _len1 = $inputs.length; _j < _len1; _j++) {
          element = $inputs[_j];
          inputElementsByName[element.name] = element;
        }
        dataToSendToMasterPass = self.buildDataObjectToSendToMasterPass(inputElementsByName.email.value, inputElementsByName.zip.value, inputElementsByName.signup.checked);
        self.sendDataToMasterPass(dataToSendToMasterPass);
        for (_k = 0, _len2 = $inputs.length; _k < _len2; _k++) {
          inp = $inputs[_k];
          $inp = $(inp);
          name = $inp.attr('name');
          val = $inp.val();
          if (inputsByName[name].type === 'checkbox') {
            if (inp.checked) {
              val = true;
            } else {
              val = false;
            }
            self.responseData(name, val);
          } else if (inputsByName[name].validateRegExp) {
            re = new RegExp(inputsByName[name].validateRegExp);
            if (re.test(val)) {
              self.responseData(name, val);
            } else {
              if (name === 'card') {
                window.alert("Please enter a valid credit card");
              } else {
                window.alert("Please enter a valid " + inputsByName[name].placeholder);
              }
              return false;
            }
          } else {
            self.responseData(name, val);
          }
        }
        return self.doResponse('accept', division);
      });
      this.$.find('input[name=zip]').keydown(function(e) {
        if (this.value.length > 5) {
          return $(this).val(this.value.substring(0, 5));
        }
      });
      this.$.find('input[name=zip]').keyup(function(e) {
        if (this.value.length > 5) {
          return $(this).val(this.value.substring(0, 5));
        }
      });
      this.$.find('input[name=card]').keydown(function(e) {
        if (this.value.length > 4) {
          return $(this).val(this.value.substring(0, 4));
        }
      });
      return this.$.find('input[name=card]').keyup(function(e) {
        if (this.value.length > 4) {
          return $(this).val(this.value.substring(0, 4));
        }
      });
    };

    MastercardModule.prototype.initialize = function() {
      var context, division, old;
      this.registerForReflow(this.$.find('p'));
      if (this.options.mobile) {
        this.$.addClass('mobile');
      }
      division = 'left';
      context = '.left-container';
      this.setupAccept(division, context, this.options.left_inputs);
      division = 'right';
      context = '.right-container';
      this.setupReject(division, context, this.options.right_inputs);
      this.$.find('.accept,.reject').css('visibility', 'hidden');
      if (this.options.tags) {
        old = this.options.tags;
        return this.$.find('.px-container').html(old.replace(/\%\%ORD\%\%/g, Math.floor(Math.random() * 100000000)));
      }
    };

    return MastercardModule;

  })(cloud9.modules.PromoDataModule);

  cloud9.modules.MastercardModule = MastercardModule;

}).call(this);

/* End "modules/MastercardModule/module.js" */
/* Begin "modules/PostAuthAppDLModule/module.js" */
// Generated by CoffeeScript 1.6.2
var PostAuthAppDLModule, _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

PostAuthAppDLModule = (function(_super) {
  __extends(PostAuthAppDLModule, _super);

  function PostAuthAppDLModule() {
    this.doOpen = __bind(this.doOpen, this);
    this.login = __bind(this.login, this);    _ref = PostAuthAppDLModule.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  PostAuthAppDLModule.prototype.defaultOptions = {
    auto_login: true,
    login_delay: 0,
    login_msg: null
  };

  PostAuthAppDLModule.prototype.initialize = function() {
    this.options = $.extend({}, this.defaultOptions, this.options);
    this.status = this.$.find(".status");
    $('#valid-loader').activity({
      color: '#dddddd'
    });
    return this.bindClicks();
  };

  PostAuthAppDLModule.prototype.bindClicks = function() {
    var _this = this;

    this.$.find('.start-btn').click(function(e) {
      e.preventDefault();
      return _this.doOpen();
    });
    return this.$.find('.reject-btn').click(function(e) {
      e.preventDefault();
      return cloud9.promos.acceptRedirect();
    });
  };

  PostAuthAppDLModule.prototype.enter = function() {
    return this.selectFrame('instr-frame');
  };

  PostAuthAppDLModule.prototype.reject = function() {
    return cloud9.promos.responseRedirect("reject+verify_reject", this.options.reject_url);
  };

  PostAuthAppDLModule.prototype.login = function() {
    if (this.options.login_msg) {
      alert(this.options.login_msg);
    }
    return setTimeout(function() {
      return cloud9.promos.acceptRedirect();
    }, this.options.login_delay);
  };

  PostAuthAppDLModule.prototype.selectFrame = function(frame) {
    return this.$.find('.app-window-frame').each(function() {
      if ($(this).hasClass(frame)) {
        return $(this).show();
      } else {
        return $(this).hide();
      }
    });
  };

  PostAuthAppDLModule.prototype.doOpen = function() {
    var store;

    console.info("Opening " + this.options.store + " app " + this.options.app_id);
    if (this.options.store_url) {
      store = cloud9.promos.renderUrl(this.options.store_url, {
        MAC_ALPHA_SHA1: this.options.mac_alpha_sha1 || '',
        MAC_ALPHA: this.options.mac_alpha || '',
        MAC_ALPHA_UPPER: this.options.mac_alpha_upper || '',
        MAC_RAW: this.options.mac_raw || '',
        CLICK_ID: this.options.click_id
      });
    } else {
      store = this.options.store;
    }
    if (AppControl.open(store, this.options.app_id)) {
      return console.info("" + this.options.store + " opened");
    } else {
      console.warn("" + this.options.store + " open failed");
      this.status.text("Could not open the app store.");
      AppControl.eraseVerifyCookie();
    }
  };

  return PostAuthAppDLModule;

})(cloud9.modules.BaseModule);

cloud9.modules.PostAuthAppDLModule = PostAuthAppDLModule;

/* End "modules/PostAuthAppDLModule/module.js" */
/* Begin "modules/AppInstructionModule/module.js" */
// Generated by CoffeeScript 1.3.3
(function() {
  var AppInstructionModule,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AppInstructionModule = (function(_super) {

    __extends(AppInstructionModule, _super);

    function AppInstructionModule() {
      return AppInstructionModule.__super__.constructor.apply(this, arguments);
    }

    AppInstructionModule.prototype.initialize = function() {
      var self;
      self = this;
      self.$.find('.accept').click(function(e) {
        e.preventDefault();
        if (self.options.alert_msg) {
          alert(self.options.alert_msg);
        }
        return self.trigger('complete');
      });
      return self.$.find('.reject').click(function(e) {
        e.preventDefault();
        self.$.find('.steps,.action').hide();
        self.$.find('.reject_message').show();
        if (self.options.disable_on_reject === true) {
          return cloud9.promos.trackRedirect(cloud9.promos.disableUrl, "reject+instruction_reject");
        } else {
          return cloud9.promos.track("reject+instruction_reject");
        }
      });
    };

    AppInstructionModule.prototype.enter = function() {
      var _ref,
        _this = this;
      if (((_ref = window.AppControl) != null ? _ref.hasVerifyCookie() : void 0) === true) {
        return setTimeout(function() {
          _this.trigger('complete');
          return cloud9.promos.track("skip_instructions");
        }, 500);
      } else {
        return cloud9.promos.track("instructions");
      }
    };

    return AppInstructionModule;

  })(cloud9.modules.BaseModule);

  cloud9.modules.AppInstructionModule = AppInstructionModule;

}).call(this);

/* End "modules/AppInstructionModule/module.js" */
/* Begin "modules/SkipModule/module.js" */
(function() {
  var SkipModule;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  SkipModule = (function() {
    __extends(SkipModule, cloud9.modules.BaseModule);
    function SkipModule() {
      SkipModule.__super__.constructor.apply(this, arguments);
    }
    SkipModule.prototype.initialize = function() {
      return this.$.hide();
    };
    SkipModule.prototype.enter = function() {
      this.$.hide();
      this.trigger('response', function() {
        return cloud9.promos.acceptRedirect();
      });
      return this.trigger('complete');
    };
    return SkipModule;
  })();
  cloud9.modules.SkipModule = SkipModule;
}).call(this);

/* End "modules/SkipModule/module.js" */
/* Begin "modules/AppDLv3Module/module.js" */
// Generated by CoffeeScript 1.8.0
(function() {
  var AppDLv3Module,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AppDLv3Module = (function(_super) {
    __extends(AppDLv3Module, _super);

    function AppDLv3Module() {
      return AppDLv3Module.__super__.constructor.apply(this, arguments);
    }

    return AppDLv3Module;

  })(cloud9.modules.AppDLv2Module);

  cloud9.modules.AppDLv3Module = AppDLv3Module;

}).call(this);

/* End "modules/AppDLv3Module/module.js" */
/* Begin "modules/FlashAnimationModule/module.js" */
// Generated by CoffeeScript 1.6.1
(function() {
  var FlashAnimationModule,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  FlashAnimationModule = (function(_super) {

    __extends(FlashAnimationModule, _super);

    function FlashAnimationModule() {
      return FlashAnimationModule.__super__.constructor.apply(this, arguments);
    }

    FlashAnimationModule.prototype.initialize = function() {
      var opts, self;
      self = this;
      self.skippable = true;
      self.$.find('.fail-link').click(function() {
        self.trigger('response', cloud9.promos.failRedirect);
        return self.trigger('complete');
      });
      self.$.find('.anim-placeholder-text').hide();
      opts = _.extend({
        width: 640,
        height: 360,
        version: "9",
        expressInstallSwfurl: null,
        flashVars: {},
        params: {
          swliveconnect: true,
          AllowScriptAccess: "always",
          wmode: "transparent"
        },
        attributes: {},
        playSkip: 0,
        killSwf: true
      }, this.options);
      return self.options = opts;
    };

    FlashAnimationModule.prototype.killSwf = function() {
      return this.$.find('object').remove();
    };

    FlashAnimationModule.prototype.startSkipper = function() {
      var _this = this;
      if (this.options.playSkip == null) {
        return;
      }
      return cloud9.countDown(this.options.playSkip, function(skipLeft) {
        return _this.trigger('skipTime', [skipLeft]);
      });
    };

    FlashAnimationModule.prototype.enter = function() {
      var $placeholder, animationAccept, animationDone, animationReject, animationStarted, callbackFn, opts, self;
      self = this;
      self.startSkipper();
      self.$.find('.anim-placeholder-text').show();
      opts = self.options;
      $placeholder = self.$.find('.anim-placeholder');
      $placeholder.attr('id', $placeholder.closest('.module-instance').attr('id') + '-anim-placeholder');
      callbackFn = function(e) {
        if (!e.success) {
          return cloud9.promos.failRedirect();
        }
      };
      swfobject.embedSWF(opts.src, $placeholder.attr('id'), opts.width, opts.height, opts.version, opts.expressInstallSwfurl, opts.flashvars, opts.params, opts.attributes, callbackFn);
      animationStarted = function() {};
      animationDone = function() {
        console.log("Animation Done");
        return window.setTimeout(function() {
          if (self.options.killSwf) {
            self.killSwf();
          }
          return self.trigger('complete');
        }, 10);
      };
      animationAccept = function() {
        if (self.options.killSwf) {
          self.killSwf();
        }
        self.trigger('response', function() {
          return cloud9.promos.acceptRedirect();
        });
        return self.trigger('complete');
      };
      animationReject = function() {
        if (self.options.killSwf) {
          self.killSwf();
        }
        self.trigger('response', function() {
          return cloud9.promos.rejectRedirect();
        });
        return self.trigger('complete');
      };
      window.animationReject = animationReject;
      window.animationAccept = animationAccept;
      window.animationDone = animationDone;
      return window.animationStarted = animationStarted;
    };

    FlashAnimationModule.prototype.exit = function() {
      window.animationReject = void 0;
      window.animationAccept = void 0;
      return window.animationDone = void 0;
    };

    return FlashAnimationModule;

  })(cloud9.modules.BaseModule);

  cloud9.modules.FlashAnimationModule = FlashAnimationModule;

}).call(this);

/* End "modules/FlashAnimationModule/module.js" */
/* Begin "modules/UnrulyModule/module.js" */
// Generated by CoffeeScript 1.7.1
var UnrulyModule,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

UnrulyModule = (function(_super) {
  __extends(UnrulyModule, _super);

  function UnrulyModule() {
    return UnrulyModule.__super__.constructor.apply(this, arguments);
  }

  UnrulyModule.prototype.defaultOptions = {
    playSkip: 15,
    require_flash: "9.0.18",
    skippable_text: "Skippable in $SECS$"
  };

  UnrulyModule.prototype.initialize = function() {
    var self, unrulyRedirectFail;
    self = this;
    unrulyRedirectFail = function() {
      cloud9.promos.track('fail');
      return top.location.href = cloud9.promos.getEdgeDestUrl() || 'http://edge.c9w.net/wifi_dest.html';
    };
    if ((typeof noAd !== "undefined" && noAd !== null) && noAd) {
      unrulyRedirectFail();
    } else if (this.options.carousel) {
      window.unrulyRedirectFail = unrulyRedirectFail;
    }
    this.options = $.extend({}, this.defaultOptions, this.options);
    if (this.options.require_flash && !swfobject.hasFlashPlayerVersion(this.options.require_flash)) {
      cloud9.promos.track('fail_init');
      top.location.href = cloud9.promos.getEdgeDestUrl() || 'http://edge.c9w.net/wifi_dest.html';
    }
    window.postMsg = (function(_this) {
      return function(msg) {
        switch (msg) {
          case "play":
            return _this.onPlay();
          case "complete":
            return _this.onComplete();
        }
      };
    })(this);
    return this.$.find('.skipper').click(function(e) {
      e.preventDefault();
      cloud9.promos.track('reject');
      return setTimeout(function() {
        return top.location.href = cloud9.promos.getEdgeDestUrl() || 'http://edge.c9w.net/wifi_dest.html';
      }, 500);
    });
  };

  UnrulyModule.prototype.onPlay = function() {
    cloud9.promos.track('vid_saw_0');
    return cloud9.countDown(this.options.playSkip, (function(_this) {
      return function(s) {
        var text;
        text = _this.options.skippable_text.replace("$SECS$", s);
        return _this.$.find('.header-text').text(text);
      };
    })(this), (function(_this) {
      return function() {
        _this.$.find('.header-text').hide();
        return _this.$.find('.skipper').show();
      };
    })(this));
  };

  UnrulyModule.prototype.onComplete = function() {
    cloud9.promos.track('vid_saw_100');
    cloud9.promos.track('accept');
    return setTimeout(function() {
      return top.location.href = cloud9.promos.getEdgeDestUrl() || 'http://edge.c9w.net/wifi_dest.html';
    }, 2000);
  };

  UnrulyModule.prototype.enter = function() {};

  UnrulyModule.prototype.exit = function() {};

  return UnrulyModule;

})(cloud9.modules.BaseModule);

cloud9.modules.UnrulyModule = UnrulyModule;

/* End "modules/UnrulyModule/module.js" */
/* Begin "modules/SurveyGizmoModule/module.js" */
(function() {
  var SurveyGizmoModule;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  SurveyGizmoModule = (function() {
    __extends(SurveyGizmoModule, cloud9.modules.BaseModule);
    function SurveyGizmoModule() {
      SurveyGizmoModule.__super__.constructor.apply(this, arguments);
    }
    SurveyGizmoModule.prototype.initialize = function() {
      var opts, self, url, url_param;
      self = this;
      opts = self.options;
      window.surveyComplete = function() {
        if (!self.options.skip_response) {
          self.trigger('response', function() {
            return cloud9.promos.acceptRedirect();
          });
        }
        return self.trigger('complete');
      };
      window.surveySkip = function() {
        if (!self.options.skip_response) {
          self.trigger('response', function() {
            return cloud9.promos.rejectRedirect();
          });
        }
        return self.trigger('complete');
      };
      window.surveySize = function(width, height) {
        self.$.find('iframe').animate({
          width: Number(width) + 'px',
          height: Number(height) + 'px'
        });
        return $(window).trigger('resize');
      };
      self.$.find('iframe').css({
        width: parseInt(opts.width || 640) + 'px',
        height: parseInt(opts.height || 360) + 'px'
      });
      url_param = $.extend({
        promo: cloud9.promos.promo
      }, cloud9.venue, {
        venuetype: cloud9.venue.venue_type,
        postalcode: cloud9.venue.postal_code
      });
      delete url_param["venue_type"];
      delete url_param["postal_code"];
      url = this.options.src + "?" + $.param(url_param);
      return $(self.$.find('iframe')).attr('src', url);
    };
    SurveyGizmoModule.prototype.enter = function() {
      if (this.options.unbrand === void 0 || this.options.unbrand === true) {
        return this.trigger('unbrand');
      }
    };
    SurveyGizmoModule.prototype.exit = function() {
      delete window.surveyComplete;
      delete window.surveySkip;
      return delete window.survey;
    };
    return SurveyGizmoModule;
  })();
  cloud9.modules.SurveyGizmoModule = SurveyGizmoModule;
}).call(this);

/* End "modules/SurveyGizmoModule/module.js" */
/* Begin "modules/AppPromoModule/module.js" */
// Generated by CoffeeScript 1.3.3
(function() {
  var AppPromoModule,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AppPromoModule = (function(_super) {

    __extends(AppPromoModule, _super);

    function AppPromoModule() {
      return AppPromoModule.__super__.constructor.apply(this, arguments);
    }

    AppPromoModule.prototype.initialize = function() {
      var self;
      self = this;
      self.$.find('.connect').click(function(e) {
        e.preventDefault();
        return self.trigger('complete');
      });
      return self.$.find('.ineligible').click(function(e) {
        e.preventDefault();
        self.$.find('.action').hide();
        self.$.find('.ineligible_message').show();
        return window.setTimeout(function() {
          if (self.options.disable_on_reject === true) {
            return cloud9.promos.trackRedirect(cloud9.promos.disableUrl, "reject+ineligible");
          } else {
            return cloud9.promos.submitResponse("reject+ineligible");
          }
        }, 1000);
      });
    };

    AppPromoModule.prototype.enter = function() {
      var _ref;
      if (((_ref = window.AppControl) != null ? _ref.hasVerifyCookie() : void 0) === true) {
        this.trigger('complete');
        return cloud9.promos.track("skip_promo");
      }
    };

    return AppPromoModule;

  })(cloud9.modules.BaseModule);

  cloud9.modules.AppPromoModule = AppPromoModule;

}).call(this);

/* End "modules/AppPromoModule/module.js" */
/* Begin "modules/SlideShowModule/module.js" */
// Generated by CoffeeScript 1.6.3
var SlideShowModule, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

SlideShowModule = (function(_super) {
  __extends(SlideShowModule, _super);

  function SlideShowModule() {
    _ref = SlideShowModule.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  SlideShowModule.prototype.enter = function() {
    var i, listItems, listLen, slideshow, transition_speed, updateNavDots,
      _this = this;
    transition_speed = 300;
    slideshow = $('.img_slideshow');
    listItems = slideshow.children('li');
    listLen = listItems.length;
    i = 0;
    listItems.not(':first').hide();
    $('.nav-dots li:first-child').addClass('nav-dot-curr');
    updateNavDots = function(curr, next) {
      $(".nav-dots li:nth-child(" + (curr + 1) + ")").removeClass('nav-dot-curr');
      return $(".nav-dots li:nth-child(" + (next + 1) + ")").addClass('nav-dot-curr');
    };
    $('button.prev_btn').click(function() {
      return listItems.eq(i).fadeOut(transition_speed, function() {
        var j;
        j = i;
        i = (listLen + (i - 1) % listLen) % listLen;
        updateNavDots(j, i);
        return listItems.eq(i).fadeIn(transition_speed);
      });
    });
    return $('button.next_btn').click(function() {
      var self;
      self = _this;
      return listItems.eq(i).fadeOut(transition_speed, function() {
        var j;
        j = i;
        i = (listLen + (i + 1) % listLen) % listLen;
        updateNavDots(j, i);
        if (i === 0 && j === (listLen - 1)) {
          $('.img_slideshow').hide();
          $('.btns .slideshow_btn').hide();
          $('.nav-dots').hide();
          self.trigger('response', function() {
            return self.doResponse('accept');
          });
          return self.trigger('complete');
        } else {
          return listItems.eq(i).fadeIn(transition_speed);
        }
      });
    });
  };

  return SlideShowModule;

})(cloud9.modules.AcceptRejectModule);

cloud9.modules.SlideShowModule = SlideShowModule;

/* End "modules/SlideShowModule/module.js" */
/* Begin "modules/AmazonPubModule/module.js" */
// Generated by CoffeeScript 1.6.1
(function() {
  var AmazonPubModule,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AmazonPubModule = (function(_super) {

    __extends(AmazonPubModule, _super);

    function AmazonPubModule() {
      return AmazonPubModule.__super__.constructor.apply(this, arguments);
    }

    AmazonPubModule.prototype.initialize = function() {
      var defaultOptions, rdirect,
        _this = this;
      defaultOptions = {
        login_timeout: 15,
        iframe_url: null
      };
      this.options = $.extend(defaultOptions, this.options);
      $(function() {
        if (/Android/.test(navigator.userAgent) && cloud9.promos.templateName === 'superpromo-laptop-assets') {
          return $('#bg-resizable').hide();
        }
      });
      rdirect = this.doRedirect();
      return window.postMsg = function(msg) {
        var nxt;
        if (msg === 'loaded') {

        } else if (msg === 'unloaded') {
          nxt = cloud9.promos.getEdgeDestUrl() || 'http://edge.c9w.net/wifi_dest.html';
          return rdirect(nxt);
        }
      };
    };

    AmazonPubModule.prototype.doRedirect = function(url) {
      var executed;
      executed = false;
      return function(url) {
        if (!executed) {
          executed = true;
          return window.location.href = url;
        }
      };
    };

    AmazonPubModule.prototype.postLogin = function(res) {
      var url;
      if (!res.online) {
        cloud9.promos.responseRedirect('reject', 'http://nimbus.c9w.net/files/media/superpromos/amazonpub/creative/index.html');
        return;
      }
      url = this.getIframeUrl();
      this.$.find('.viewport').attr('src', url);
      this.$.find('.loader-overlay').hide();
      return this.$.find('.amzn-viewport-bkg').detach().prependTo('body').show();
    };

    AmazonPubModule.prototype.enter = function() {
      var res,
        _this = this;
      if (this.options.auto_login) {
        return cloud9.promos.backgroundLogin(function(res) {
          return _this.postLogin(res);
        }, this.options.login_timeout);
      } else {
        res = {
          online: true
        };
        return this.postLogin(res);
      }
    };

    AmazonPubModule.prototype.getIframeUrl = function() {
      var res;
      res = this.options.iframe_url.replace(/\$VENUE\$/g, encodeURIComponent(cloud9.venue.uuid));
      res = res.replace(/\$PROMO\$/g, encodeURIComponent(cloud9.promos.promo));
      res = res.replace(/\$TRACK_URL\$/g, encodeURIComponent(cloud9.promos.trackUrl));
      return res = res.replace(/\$RAND\$/g, '' + Math.floor(Math.random() * 1e8));
    };

    return AmazonPubModule;

  })(cloud9.modules.BaseModule);

  cloud9.modules.AmazonPubModule = AmazonPubModule;

}).call(this);

/* End "modules/AmazonPubModule/module.js" */
/* Begin "modules/GateModule/module.js" */
// Generated by CoffeeScript 1.6.3
var GateModule, staticUrl, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

staticUrl = cloud9.promos.staticUrl;

GateModule = (function(_super) {
  __extends(GateModule, _super);

  function GateModule() {
    _ref = GateModule.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  GateModule.prototype.getBackgroundDiv = function() {
    if ($("#bg-cover").length > 0) {
      return $("#bg-cover");
    } else {
      return $("#moflo-container");
    }
  };

  GateModule.prototype.setupBackgroundSwapper = function() {
    var backgroundImageCssAttribute, currentBackgroundDiv, self;
    self = this;
    if (self.options.gateBackground) {
      currentBackgroundDiv = self.getBackgroundDiv();
      backgroundImageCssAttribute = "background-image";
      this.originalBackground = currentBackgroundDiv.css(backgroundImageCssAttribute);
      this.gateBackground = "url(" + self.options.gateBackground + ")";
      return currentBackgroundDiv.css(backgroundImageCssAttribute, this.gateBackground);
    }
  };

  GateModule.prototype.swapBackground = function() {
    var backgroundImageCssAttribute, currentBackgroundDiv, self;
    self = this;
    if (self.options.gateBackground) {
      currentBackgroundDiv = self.getBackgroundDiv();
      backgroundImageCssAttribute = "background-image";
      if (currentBackgroundDiv) {
        if (currentBackgroundDiv.css(backgroundImageCssAttribute) === this.gateBackground) {
          return currentBackgroundDiv.css(backgroundImageCssAttribute, this.originalBackground);
        } else {
          return currentBackgroundDiv.css(backgroundImageCssAttribute, this.gateBackground);
        }
      }
    }
  };

  GateModule.prototype.setupContinue = function() {
    var $continue, self;
    self = this;
    $continue = this.$.find('.continue');
    return $continue.click(function(e) {
      var onResponse;
      e.preventDefault();
      self.swapBackground();
      onResponse = function() {
        return self.doResponse('continue');
      };
      self.trigger('response', onResponse);
      return self.trigger('complete');
    });
  };

  GateModule.prototype.setupGateReject = function() {
    var $gate_reject, self;
    self = this;
    $gate_reject = this.$.find('.gate_reject');
    if (!self.options.customRejectUrl) {
      return $gate_reject.click(function(e) {
        var curr_promo_uuid, f, visited_gate_promo_uuid, visited_promo_uuids,
          _this = this;
        e.preventDefault();
        visited_gate_promo_uuid = [cloud9.getParam('visited_gate_promos')] || [];
        try {
          curr_promo_uuid = [window.location.href.match('wifi/promos/([^\/]+)/')[1]];
        } catch (_error) {
          curr_promo_uuid = [];
        }
        visited_promo_uuids = (visited_gate_promo_uuid.concat(curr_promo_uuid)).join("__");
        self.options['reject_url'] = self.options['gate_reject_url'];
        f = function(opts, o) {
          if (visited_promo_uuids) {
            return cloud9.extend(o, {
              'visited_gate_promos': visited_promo_uuids
            });
          } else {
            return o;
          }
        };
        return self.doResponse('reject', {
          'build_response_url_args': f,
          'do_not_track_login': true
        });
      });
    } else {
      return $gate_reject.click(function(e) {
        e.preventDefault();
        return window.location = self.options.customRejectUrl;
      });
    }
  };

  GateModule.prototype.setupDropDownMode = function() {
    var $button_div, $dropdown_button, $dropdown_div, self;
    self = this;
    $button_div = this.$.find('.btns').not('.dropdown_mode');
    $dropdown_div = this.$.find('.dropdown_mode');
    if (this.options.dropdown_mode) {
      $button_div.hide();
      $dropdown_button = this.$.find('.dropdown_button');
      console.log($dropdown_button);
      return $dropdown_button.click(function(e) {
        var $continue, $gate_reject, selected_value;
        e.preventDefault();
        selected_value = self.$.find('.gate_dropdown option:selected').val();
        console.log(selected_value);
        if (selected_value === "reject") {
          $gate_reject = self.$.find('.gate_reject');
          return $gate_reject.trigger('click');
        } else if (selected_value === "accept") {
          $continue = self.$.find('.continue');
          return $continue.trigger('click');
        } else {

        }
      });
    } else {
      $dropdown_div.hide();
    }
  };

  GateModule.prototype.setupPromoRedirectDropDownMode = function() {
    var $button_div, $dropdown_button, $dropdown_div, selected, self;
    self = this;
    $button_div = this.$.find('.btns').not('.promo_redirect_dropdown_mode');
    $dropdown_div = this.$.find('.promo_redirect_dropdown_mode');
    if (this.options.promo_redirect_dropdown_mode) {
      $button_div.hide();
      $dropdown_button = this.$.find('.promo_redirect_dropdown_button');
      selected = self.$.find('.gate_promo_redirect_dropdown option:selected');
      if (selected.hasClass('promo_redirect_dropdown_default')) {
        $dropdown_button.prop('disabled', true);
      }
      $('.gate_promo_redirect_dropdown').change(function() {
        selected = self.$.find('.gate_promo_redirect_dropdown option:selected');
        if (selected.hasClass('promo_redirect_dropdown_default')) {
          return $dropdown_button.prop('disabled', true);
        } else {
          return $dropdown_button.prop('disabled', false);
        }
      });
      return $dropdown_button.click(function(e) {
        var curr_url, new_url, p, selected_value;
        e.preventDefault();
        selected = self.$.find('.gate_promo_redirect_dropdown option:selected');
        if (!selected.hasClass('promo_redirect_dropdown_default')) {
          selected_value = selected.val();
          curr_url = window.location.href;
          p = new RegExp('\/wifi\/promos\/[A-Za-z0-9]\+\/', 'g');
          new_url = curr_url.replace(p, '/wifi/promos/' + selected_value + '/');
          console.log(new_url);
          return window.location.replace(new_url);
        }
      });
    } else {
      $dropdown_div.hide();
    }
  };

  GateModule.prototype.initialize = function() {
    if (this.options.mobile) {
      this.$.addClass('mobile');
    }
    this.setupPromoRedirectDropDownMode();
    this.setupDropDownMode();
    this.setupContinue();
    this.setupGateReject();
    this.$.find('.continue,.gate_reject').css('visibility', 'hidden');
    return this.setupBackgroundSwapper();
  };

  GateModule.prototype.enter = function() {
    var old;
    this.$.find('.continue,.gate_reject').css('visibility', 'visible');
    if (this.options.tags) {
      old = this.options.tags;
      return this.$.find('.px-container').html(old.replace(/\%\%ORD\%\%/g, Math.floor(Math.random() * 100000000)));
    }
  };

  return GateModule;

})(cloud9.modules.AcceptRejectModule);

cloud9.modules.GateModule = GateModule;

/* End "modules/GateModule/module.js" */
/* Begin "modules/PreAuthGCSModule/module.js" */
// Generated by CoffeeScript 1.8.0
(function() {
  var PreAuthGCSModule,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if (/facebook\.com/.test(document.referrer) || /^http\:\/\/(t\.co|twitter\.com)/.test(document.referrer)) {
    window.location.href = 'http://www.cloudnine.com/?utm_source=gcs&utm_campaign=gcs&utm_medium=wifi';
  }

  PreAuthGCSModule = (function(_super) {
    __extends(PreAuthGCSModule, _super);

    function PreAuthGCSModule() {
      return PreAuthGCSModule.__super__.constructor.apply(this, arguments);
    }

    PreAuthGCSModule.prototype.initialize = function() {
      var defaultOptions;
      defaultOptions = {
        gcs_timeout: 5,
        alt_flow: null
      };
      this.options = $.extend(defaultOptions, this.options);
      this.resp = 'fail';
      this.gcsLoaded = false;
      this.gcsFailed = false;
      this.entered = false;
      window.gcsComplete = (function(_this) {
        return function(success) {
          if (success === false) {
            cloud9.promos.track('err3');
            _this.failGCS();
          } else {
            _this.resp = 'accept';
          }
          return _this.$.find('h4.survey').hide();
        };
      })(this);
      window.gcsAltAction = (function(_this) {
        return function() {
          if (_this.options.alt_flow) {
            cloud9.promos.track('reject+alt_login');
            return window.setTimeout(function() {
              return cloud9.promos.tryFlow(_this.options.alt_flow, {
                mode: 'preauth'
              });
            }, 600);
          } else {
            return cloud9.promos.responseRedirect('reject');
          }
        };
      })(this);
      return $((function(_this) {
        return function() {
          _this.$.find('.response-btn').bind('click', function(e) {
            e.preventDefault();
            return cloud9.promos.responseRedirect(_this.resp);
          });
          if (/Android/.test(navigator.userAgent) && cloud9.promos.templateName === 'superpromo-laptop-assets') {
            $('#bg-resizable').hide();
          }
          return _this.showGCS();
        };
      })(this));
    };

    PreAuthGCSModule.prototype.enter = function() {
      this.entered = true;
      if (this.gcsFailed) {
        return cloud9.promos.responseRedirect('fail');
      }
    };

    PreAuthGCSModule.prototype.failGCS = function() {
      cloud9.promos.track('login');
      if (this.gcsFailed) {
        return;
      }
      if (!this.gcsLoaded) {
        this.gcsFailed = true;
        if (this.entered) {
          window.setTimeout(function() {
            return cloud9.promos.responseRedirect('fail');
          });
          return 600;
        }
      }
    };

    PreAuthGCSModule.prototype.scalePrompt = function() {
      var err, ifHeight, prompt;
      prompt = $("#t402-prompt-iframe")[0];
      try {
        if ((prompt != null) && (prompt.contentWindow != null) && (prompt.contentWindow.document != null)) {
          ifHeight = $("body", prompt.contentWindow.document).height();
          if ($(prompt).height() < ifHeight) {
            $(prompt).height(ifHeight);
          }
        }
      } catch (_error) {
        err = _error;
      }
      this.$.find('.inner1').height(this.$.find('.centerer').height() + 10);
      $(window).trigger('resize');
      return window.setTimeout(function() {
        return $(window).trigger('resize');
      }, 1500);
    };

    PreAuthGCSModule.prototype.showGCS = function() {
      this.loadGCS((function(_this) {
        return function() {
          var err;
          _this.$.find('.main-content').show();
          _this.gcsLoaded = true;
          try {
            _402_Show();
          } catch (_error) {
            err = _error;
            _this.gcsLoaded = false;
            _this.$.find('h4.survey').hide();
          }
          _this.$.find('.loader-overlay').hide();
          return _this.scalePrompt();
        };
      })(this));
      return window.setTimeout((function(_this) {
        return function() {
          if (!_this.gcsLoaded && !_this.gcsFailed) {
            cloud9.promos.track('err2');
            return _this.failGCS();
          }
        };
      })(this), this.options.gcs_timeout * 1000);
    };

    PreAuthGCSModule.prototype.loadGCS = function(cb) {
      var ARTICLE_URL, CONTENT_ID, oldWrite, scriptsrc, shtml;
      shtml = '';
      oldWrite = document.write;
      document.write = function(s) {
        return shtml += s;
      };
      ARTICLE_URL = 'http://nimbus.c9w.net/portals/freewifi/';
      CONTENT_ID = '' + (Math.floor(Math.random() * 1e7));
      scriptsrc = '//survey.g.doubleclick.net/survey?site=_difnzw6zqhlz74pajhsh6q6tfi' + '&url=' + encodeURIComponent(ARTICLE_URL) + '&cid=' + encodeURIComponent(CONTENT_ID) + '&random=' + (new Date).getTime();
      return $.getScript(scriptsrc).done(function() {
        var checkReadyInt, snodes;
        document.write = oldWrite;
        snodes = $(shtml);
        $('body').prepend(snodes);
        return checkReadyInt = window.setInterval(function() {
          if (window._402 && window._402.params) {
            window.clearInterval(checkReadyInt);
            return cb();
          }
        }, 100);
      }).fail((function(_this) {
        return function() {
          cloud9.promos.track('err1');
          return _this.failGCS();
        };
      })(this));
    };

    return PreAuthGCSModule;

  })(cloud9.modules.BaseModule);

  cloud9.modules.PreAuthGCSModule = PreAuthGCSModule;

}).call(this);

/* End "modules/PreAuthGCSModule/module.js" */
/* Begin "modules/LogoSplashModule/module.js" */
// Generated by CoffeeScript 1.6.3
(function() {
  var LogoSplashModule, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  LogoSplashModule = (function(_super) {
    __extends(LogoSplashModule, _super);

    function LogoSplashModule() {
      _ref = LogoSplashModule.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    LogoSplashModule.prototype.defaultOptions = {
      use_branding_logo: false,
      complete: null,
      loader_timeout: 0,
      loader_color: null
    };

    LogoSplashModule.prototype.initialize = function() {
      var brandingLogo, form, opts, self;
      this.options = $.extend({}, this.defaultOptions, this.options);
      if (/Android/.test(navigator.userAgent) && cloud9.promos.templateName === 'superpromo-laptop-assets') {
        $('#bg-resizable').hide();
      }
      if (this.options['use_branding_logo']) {
        if (cloud9.brandingObj.logo) {
          brandingLogo = $('<img />');
          brandingLogo.attr('src', cloud9.brandingObj.logo);
          brandingLogo.attr('alt', cloud9.brandingObj.name);
          this.$.find('.branding-logo').append(brandingLogo);
        } else {
          this.$.find('.branding-logo').text(cloud9.brandingObj.name);
        }
      }
      this.$.find('.terms-text').show();
      this.$.find('.connect-container').hide();
      self = this;
      opts = self.options;
      form = self.$.find('form.loginform');
      if (opts.login_mode === 'modal') {
        form.appendTo(self.$);
        form.addClass('modal');
      }
      form.submit(function(e) {
        var login_type, password, username, _ref1;
        e.preventDefault();
        login_type = (_ref1 = opts.wifi_auth) != null ? _ref1.login_type : void 0;
        if (login_type) {
          username = self.$.find('input[name=username]').val();
          password = self.$.find('input[name=password]').val();
          if (login_type === 'email' && (!username || !username.length || username.indexOf('@') === -1)) {
            alert('Invalid email');
            return false;
          }
          self.$.find('.connect-loader').show();
          self.$.find('.loginform, .connect').hide();
          return $.ajax({
            type: 'POST',
            url: opts.wifi_auth.verify_url,
            data: {
              m: 'ajax',
              username: username,
              password: password,
              venue_uuid: cloud9.venue.uuid
            },
            dataType: 'json',
            success: function(res) {
              if (res) {
                self.doComplete();
                return false;
              }
              self.$.find('.connect-loader').hide();
              self.$.find('.loginform, .connect').show();
              if (login_type === 'password') {
                return alert('Invalid password');
              } else if (login_typ === 'email') {
                return alert('Invalid email');
              } else {
                return alert('Invalid password');
              }
            }
          });
        } else {
          return self.doComplete();
        }
      });
      return self.$.find('.connect').click(function() {
        if (form.length) {
          form.submit();
        } else {
          self.doComplete();
        }
        return false;
      });
    };

    LogoSplashModule.prototype.isTrailingMode = function() {
      return this.options.force_trailing_mode || ($.inArray("/integration/dynamic", cloud9.venue.wifi_config.features) !== -1 || $.inArray("/integration/interstitial", cloud9.venue.wifi_config.features) !== -1);
    };

    LogoSplashModule.prototype.doComplete = function() {
      var resp, respUrl;
      if (this.options['complete']) {
        resp = this.options['complete'][0];
        respUrl = this.options['complete'][1] ? cloud9.promos.renderUrl(this.options['complete'][1]) : null;
        return cloud9.promos.responseRedirect(resp, respUrl);
      }
      return this.trigger('complete');
    };

    LogoSplashModule.prototype.showLoader = function() {
      var color, timeout,
        _this = this;
      if (this.options["loader_timeout"] === 0) {
        return;
      }
      color = this.options["loader_color"];
      timeout = this.options["loader_timeout"];
      timeout = +timeout;
      this.$.find('.connect-container').hide();
      this._loader = this.$.find('.connect-loader').show().activity({
        color: color
      });
      return window.setTimeout(function() {
        return _this.doComplete();
      }, timeout * 1000);
    };

    LogoSplashModule.prototype.enter = function() {
      this.$.find('.connect-container').show();
      if (this.isTrailingMode()) {
        return this.showLoader();
      }
    };

    LogoSplashModule.prototype.exit = function() {
      var _ref1;
      return (_ref1 = this._loader) != null ? _ref1.activity(false) : void 0;
    };

    return LogoSplashModule;

  })(cloud9.modules.BaseModule);

  cloud9.modules.LogoSplashModule = LogoSplashModule;

}).call(this);

/* End "modules/LogoSplashModule/module.js" */
/* Begin "modules/SolveMediaModule/module.js" */
// Generated by CoffeeScript 1.6.2
var SolveMediaModule, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

SolveMediaModule = (function(_super) {
  __extends(SolveMediaModule, _super);

  function SolveMediaModule() {
    _ref = SolveMediaModule.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  SolveMediaModule.prototype.initialize = function() {
    var defaultOptions,
      _this = this;

    defaultOptions = {
      max_retries: 3
    };
    this.options = $.extend(defaultOptions, this.options);
    window.ACPuzzleInfo.onload = function() {
      return _this.puzzleOnload();
    };
    this._puzzleInit = false;
    this._retries = 0;
    return $(function() {
      return _this.$.find('solve-submit-btn').attr('disabled', 'disabled');
    });
  };

  SolveMediaModule.prototype.enter = function() {
    var _this = this;

    _this.puzzleOnload();
    return window.setTimeout(function() {
      return _this.$.find('solve-submit-btn').removeAttr('disabled');
    }, 4000);
  };

  SolveMediaModule.prototype.puzzleOnload = function() {
    var ckey, module,
      _this = this;

    module = this;
    ckey = window.location.host === 'nimbus.c9w.net' ? 'LcS3vUStXikbpyFCgTgcNa9h6pgqNCzU' : 'TB519LokV7zulTvdoPcQRT2rSFbC5ird';
    ACPuzzle.create(ckey, 'solve-widget', {
      onerror: function() {
        return cloud9.promos.failRedirect();
      },
      callback: function() {
        _this._puzzleInit = true;
        return _this.$.find('solve-submit-btn').removeAttr('disabled');
      }
    });
    return $('#solve-form').submit(function(e) {
      e.preventDefault();
      if ((this.adcopy_challenge == null) || (this.adcopy_response == null)) {
        cloud9.promos.failRedirect();
      }
      challenge_id = ACPuzzle.get_challenge();
      user_response = ACPuzzle.get_response();
      $('body').css('cursor', 'wait');
      return $.post($(this).attr('action'), {
        challenge: challenge_id,
        response: user_response,
      }, function(r) {
        $('body').css('cursor', 'default');
        if (r === 'True') {
          return cloud9.promos.acceptRedirect();
        } else {
          module._retries++;
          if (module._retries >= module.options.max_retries) {
            cloud9.promos.rejectRedirect();
            return;
          }
          alert("Incorrect answer. Please try again.");
          $('body').css('cursor', 'default');
          return ACPuzzle.reload('');
        }
      }, 'text');
    });
  };

  return SolveMediaModule;

})(cloud9.modules.BaseModule);

cloud9.modules.SolveMediaModule = SolveMediaModule;

/* End "modules/SolveMediaModule/module.js" */