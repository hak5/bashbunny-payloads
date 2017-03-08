// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files

(function(e){"use strict";function n(e){if(!e.condition()){typeof e.exit=="function"&&e.exit();e.is_active=!1}}function r(e){if(e.condition()){if(typeof e.first_enter=="function"){e.first_enter();delete e.first_enter}typeof e.enter=="function"&&e.enter();e.is_active=!0}}function i(e){e.is_active?n(e):r(e)}function s(){var i=e.grep(t,function(e){return e.is_active}),s=e.grep(t,function(e){return!e.is_active});e.each(i,function(e,t){n(t)});e.each(s,function(e,t){r(t)})}var t=[];e.breakpoint=function(n,r){r=e.extend(!0,{},e.breakpoint.defaults,r);t.push(n);t.length===1&&e(window).on("resize orientationchange",function(){s()});i(n)};e.breakpoint.breakpoints=t;e.breakpoint.defaults={}})(jQuery);


/*
Breakpoints.js
version 1.0
Creates handy events for your responsive design breakpoints
Copyright 2011 XOXCO, Inc
http://xoxco.com/

Documentation for this plugin lives here:
http://xoxco.com/projects/code/breakpoints
Licensed under the MIT license:
http://www.opensource.org/licenses/mit-license.php

*/

(function($){var lastSize=0;var interval=null;$.fn.resetBreakpoints=function(){$(window).unbind('resize');if(interval){clearInterval(interval);}
lastSize=0;};$.fn.setBreakpoints=function(settings){var options=jQuery.extend({distinct:true,breakpoints:new Array(320,480,768,1024)},settings);interval=setInterval(function(){var w=$(window).width();var done=false;for(var bp in options.breakpoints.sort(function(a,b){return(b-a)})){if(!done&&w>=options.breakpoints[bp]&&lastSize<options.breakpoints[bp]){if(options.distinct){for(var x in options.breakpoints.sort(function(a,b){return(b-a)})){if($('body').hasClass('breakpoint-'+options.breakpoints[x])){$('body').removeClass('breakpoint-'+options.breakpoints[x]);$(window).trigger('exitBreakpoint'+options.breakpoints[x]);}}
done=true;}
$('body').addClass('breakpoint-'+options.breakpoints[bp]);$(window).trigger('enterBreakpoint'+options.breakpoints[bp]);}
if(w<options.breakpoints[bp]&&lastSize>=options.breakpoints[bp]){$('body').removeClass('breakpoint-'+options.breakpoints[bp]);$(window).trigger('exitBreakpoint'+options.breakpoints[bp]);}
if(options.distinct&&w>=options.breakpoints[bp]&&w<options.breakpoints[bp-1]&&lastSize>w&&lastSize>0&&!$('body').hasClass('breakpoint-'+options.breakpoints[bp])){$('body').addClass('breakpoint-'+options.breakpoints[bp]);$(window).trigger('enterBreakpoint'+options.breakpoints[bp]);}}
if(lastSize!=w){lastSize=w;}},250);};})(jQuery);



/* jquery-placeholder / jquery.placeholder.min.js 
*  For more info: https://github.com/mathiasbynens/jquery-placeholder/blob/master/jquery.placeholder.min.js		
*/

/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));



/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.style.background="none";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);


/*
 * Selecter Plugin [Formstone Library]
 * @author Ben Plum
 * @version 1.9.2
 *
 * Copyright © 2012 Ben Plum <mr@benplum.com>
 * Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */
 
if(jQuery)(function(g){function t(a){a=a||{};y&&(a.trueMobile=!0,"undefined"===typeof a.mobile&&(a.mobile=!0));a=g.extend({},u,a);for(var b=g(this),e=0,d=b.length;e<d;e++){var f=b.eq(e),h=a;if(!f.data("selecter")){var k=f.find("option, optgroup"),j=k.filter("option"),n=j.filter(":selected"),m=h.defaultLabel?-1:j.index(n),q=k.length-1,r=h.links?"nav":"div",v=h.links?"a":"span";h.multiple="multiple"==f.attr("multiple");h.disabled=f.is(":disabled");var c="<"+r+' class="selecter '+h.customClass;h.mobile?c+=" mobile": h.cover&&(c+=" cover");c=h.multiple?c+" multiple":c+" closed";h.disabled&&(c+=" disabled");c+='">';h.multiple||(c+='<span class="selecter-selected">',c+=w(h.trimOptions,!1!=h.defaultLabel?h.defaultLabel:n.text()),c+="</span>");for(var c=c+'<div class="selecter-options">',n=0,l=null,p=0,t=k.length;p<t;p++)l=g(k[p]),"OPTGROUP"==l[0].tagName?c+='<span class="selecter-group">'+l.attr("label")+"</span>":(c+="<"+v+' class="selecter-item',n==m&&(c+=" selected"),0==p&&(c+=" first"),p==q&&(c+=" last"),c+= '" ',c=h.links?c+('href="'+l.val()+'"'):c+('data-value="'+l.val()+'"'),c+=">"+w(h.trimOptions,l.text())+"</"+v+">",n++);c+="</div>";h.mobile&&(c+='<div class="selecter-overlay"></div>');c+="</"+r+">";f.addClass("selecter-element").after(c);k=f.next(".selecter");j=g.extend({$selectEl:f,$optionEls:j,$selecter:k,$selected:k.find(".selecter-selected"),$itemsWrapper:k.find(".selecter-options"),$items:k.find(".selecter-item"),index:m,guid:x},h);void 0!=g.fn.scroller&&j.$itemsWrapper.scroller();k.on("click.selecter", ".selecter-selected",j,z).on("click.selecter",".selecter-item",j,A).on("selecter-close",j,s).data("selecter",j);if(h.links)f.hide();else f.on("change",j,B).on("focus.selecter",j,C).on("blur.selecter",j,D);x++}}return b}function z(a){a.preventDefault();a.stopPropagation();var b=a.data;if(!b.$selectEl.is(":disabled"))if(g(".selecter").not(b.$selecter).trigger("selecter-close",[b]),b.$selecter.hasClass("closed")){if(a.preventDefault(),a.stopPropagation(),a=a.data,!a.$selecter.hasClass("open")){var b= a.$selecter.offset(),e=g("body").outerHeight(),d=a.$itemsWrapper.outerHeight(!0);b.top+d>e&&!a.mobile?a.$selecter.addClass("bottom"):a.$selecter.removeClass("bottom");a.$itemsWrapper.show();a.mobile&&a.$itemsWrapper.css({maxHeight:0.9*document.documentElement.clientHeight,maxWidth:0.9*document.documentElement.clientWidth});a.$selecter.removeClass("closed").addClass("open");g("body").on("click.selecter-"+a.guid,":not(.selecter-options)",a,E);void 0!=g.fn.scroller&&a.$itemsWrapper.scroller("reset")}}else b.$selecter.hasClass("open")&& s(a)}function s(a){a.preventDefault();a.stopPropagation();a=a.data;a.$selecter.hasClass("open")&&(a.$itemsWrapper.hide(),a.$selecter.removeClass("open").addClass("closed"),g("body").off(".selecter-"+a.guid))}function E(a){a.preventDefault();a.stopPropagation();0==g(a.currentTarget).parents(".selecter").length&&s(a)}function A(a){a.preventDefault();a.stopPropagation();var b=g(this),e=a.data;e.$selectEl.is(":disabled")||(e.links?window.location.href=b.attr("href"):e.$itemsWrapper.is(":visible")&&(b= e.$items.index(b),m(b,e,!1)),e.multiple||s(a))}function B(a,b){if(!b){var e=g(this);data=a.data;index=data.$optionEls.index(data.$optionEls.filter("[value="+e.val()+"]"));m(index,data,!1)}}function C(a){a.preventDefault();a.stopPropagation();a=a.data;!a.$selectEl.is(":disabled")&&!a.multiple&&(a.$selecter.addClass("focus"),g(".selecter").not(a.$selecter).trigger("selecter-close",[a]),g("body").on("keydown.selecter-"+a.guid,a,F))}function D(a){a.preventDefault();a.stopPropagation();a=a.data;a.$selecter.removeClass("focus"); g(".selecter").not(a.$selecter).trigger("selecter-close",[a]);g("body").off(".selecter-"+a.guid)}function F(a){if(9!=a.keyCode&&!a.metaKey&&!a.altKey&&!a.ctrlKey&&!a.shiftKey){a.preventDefault();a.stopPropagation();var b=a.data,e=b.$items.length-1,d=-1;if(-1<g.inArray(a.keyCode,q?[38,40,37,39]:[38,40]))d=b.index+(38==a.keyCode||q&&37==a.keyCode?-1:1),0>d&&(d=0),d>e&&(d=e);else{a=String.fromCharCode(a.keyCode).toUpperCase();for(i=b.index+1;i<=e;i++){var f=b.$optionEls.eq(i).text().charAt(0).toUpperCase(); if(f==a){d=i;break}}if(0>d)for(i=0;i<=e;i++)if(f=b.$optionEls.eq(i).text().charAt(0).toUpperCase(),f==a){d=i;break}}0<=d&&m(d,b,!0);return!1}}function m(a,b,e){var d=b.$items.eq(a);if(d.hasClass("selected"))b.multiple&&(b.$optionEls.eq(a).attr("selected",null),d.removeClass("selected"));else{var f=d.html();d.data("value");if(b.multiple)b.$optionEls.eq(a).attr("selected","selected");else if(b.$selected.html(f),b.$items.filter(".selected").removeClass("selected"),!e||e&&!q)b.$selectEl[0].selectedIndex= a;b.$selectEl.trigger("change",[!0]);d.addClass("selected");b.callback.call(b.$selecter,b.$selectEl.val());b.index=a}}function w(a,b){return!1===a?b:b.length>a?b.substring(0,a)+"...":b}var q=-1<navigator.userAgent.toLowerCase().indexOf("firefox"),y=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||window.opera),u={callback:function(){},cover:!1,customClass:"",defaultLabel:!1,links:!1,mobile:!1,trimOptions:!1},x=0,r={defaults:function(a){u=g.extend(u,a||{});return g(this)}, disable:function(){for(var a=g(this),b=0,e=a.length;b<e;b++){var d=a.eq(b),f=d.next(".selecter");f.hasClass("open")&&f.find(".selecter-selected").trigger("click");d.attr("disabled","disabled");f.addClass("disabled")}return a},enable:function(){for(var a=g(this),b=0,e=a.length;b<e;b++){var d=a.eq(b),f=d.next(".selecter");d.attr("disabled",null);f.removeClass("disabled")}return a},destroy:function(){for(var a=g(this),b=0,e=a.length;b<e;b++){var d=a.eq(b),f=d.next(".selecter");f.hasClass("open")&&f.find(".selecter-selected").trigger("click"); void 0!=g.fn.scroller&&f.find(".selecter-options").scroller("destroy");d.off(".selecter").removeClass("selecter-element").show();f.off(".selecter").remove()}return a}};g.fn.selecter=function(a){return r[a]?r[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"===typeof a||!a?t.apply(this,arguments):this}})(jQuery);