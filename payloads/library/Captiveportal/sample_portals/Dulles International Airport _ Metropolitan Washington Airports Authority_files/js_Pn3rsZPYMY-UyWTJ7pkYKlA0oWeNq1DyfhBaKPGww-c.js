(function($) {

	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_EN/sdk.js#xfbml=1&version=v2.3&appId=579264578881928";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

}(jQuery));
;
// Only load assoc. widgets if the containers for them are present.
jQuery(document).ready(function() {
  if (jQuery('.mwaa-security-widget').length) {
    jQuery.getScript("/sites/all/modules/custom/mwaa_timing/js/widgets/mwaa_security_widget.js");
  }
  
  if (jQuery('.mwaa-parking-widget').length) {
    jQuery.getScript("/sites/all/modules/custom/mwaa_timing/js/widgets/mwaa_parking_widget.js");
  }
});



;
/*
--------------------------------------------------------------------------
(c) 2007 Lawrence Akka
 - jquery version of the spamspan code (c) 2006 SpamSpan (www.spamspan.com)

This program is distributed under the terms of the GNU General Public
Licence version 2, available at http://www.gnu.org/licenses/gpl.txt
--------------------------------------------------------------------------
*/

(function ($) { //Standard drupal jQuery wrapper.  See http://drupal.org/update/modules/6/7#javascript_compatibility
// load SpamSpan
Drupal.behaviors.spamspan = {
  attach: function(context, settings) {
    // get each span with class spamspan
    $("span.spamspan", context).each(function (index) {
      // Replace each <spam class="t"></spam> with .
      if ($('span.t', this).length) {
        $('span.t', this).replaceWith('.');
      }
      
      // For each selected span, set mail to the relevant value, removing spaces
      var _mail = ($("span.u", this).text() +
        "@" +
        $("span.d", this).text())
        .replace(/\s+/g, '');

      // Build the mailto URI
      var _mailto = "mailto:" + _mail;
      if ($('span.h', this).length) {
        // Find the header text, and remove the round brackets from the start and end
        var _headerText = $("span.h", this).text().replace(/^ ?\((.*)\) ?$/, "$1");
        // split into individual headers, and return as an array of header=value pairs
        var _headers = $.map(_headerText.split(/, /), function (n, i) {
          return (n.replace(/: /, "="));
        });

        var _headerstring = _headers.join('&');
        _mailto += _headerstring ? ("?" + _headerstring) : '';
      }

      // Find the anchor content, and remove the round brackets from the start and end
      var _anchorContent = $("span.a", this).html();
      if (_anchorContent) {
        _anchorContent = _anchorContent.replace(/^ ?\((.*)\) ?$/, "$1");
      }

      // create the <a> element, and replace the original span contents

      //check for extra <a> attributes
      var _attributes = $("span.e", this).html();
      var _tag = "<a></a>";
      if (_attributes) {
        _tag = "<a " + _attributes.replace("<!--", "").replace("-->", "") + "></a>";
      }

      $(this).after(
        $(_tag)
          .attr("href", _mailto)
          .html(_anchorContent ? _anchorContent : _mail)
          .addClass("spamspan")
      ).remove();
    });
  }
};
}) (jQuery);;
(function ($) {
	Drupal.behaviors.backtotop = {
		attach: function(context) {
			var exist= jQuery('#backtotop').length;
      if(exist == 0) {
        $("body", context).once(function() {
          $(this).append("<div id='backtotop'>"+Drupal.t(Drupal.settings.back_to_top.back_to_top_button_text)+"</div>");
        });
      }
			$(window).scroll(function() {
				if($(this).scrollTop() > Drupal.settings.back_to_top.back_to_top_button_trigger) {
					$('#backtotop').fadeIn();	
				} else {
					$('#backtotop').fadeOut();
				}
			});

      $('#backtotop', context).once(function() {
			  $(this).click(function() {
			    $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function() {
            $('html, body').stop();
          });
          $('html,body').animate({ scrollTop: 0 }, 1200, 'easeOutQuart', function() {
            $("html, body").unbind("scroll mousedown DOMMouseScroll mousewheel keyup");
          });
          return false;
			  });
			});
		}
	};
})(jQuery);;
