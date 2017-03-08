// page-specific js
$(document).ready(function() {

    // TODO: Remove customSelect
	//$('select').customSelect();

	// Image Slider for >=1024px Res-Devices
	$('.flexslider').flexslider({
	  animation: "slide",
	  controlsContainer: ".flex-container",
	  slideshow: false
	});

		
	// Adds .placeholder class input fields in IE 
	//$('input, textarea').placeholder();


	var topMenu = $('nav#topMenu');
	var loginForm = $('.login-form');


	// Hide Login Form with Javascript so Users with JS disabled will still see the Login Form
	loginForm.hide();


	
	 // Collapse the following compontents if expanded at <=768px
    $.breakpoint({
        condition: function () {
            return window.matchMedia('only screen and (min-width:480px)').matches;
        },
        enter: function () {
			$('ul.additional').hide();
			$('.__toggle_simple').next().show();
        }

    }); 
   

    $.breakpoint({
        condition: function () {
            return window.matchMedia('only screen and (min-width:768px)').matches;
        },
        enter: function () {
			topMenu.hide();
			loginForm.hide();
        }

    }); 

    
    // Scroll page past URL bar on mobile/tablet devices
	$.breakpoint({
	    condition: function () {
	        return window.matchMedia('only screen and (max-width:768px)').matches;
	    },
	    enter: function () {
			$('body').delay('100').animate({ scrollTop: '0px' }, 'slow');
	    }
	
	});

    //remove link on logo and hide login on EULA page
	var eulaPage = window.location.pathname.split('/');
	if (eulaPage[2] == "EULA") {
	    $('#site-title a').removeAttr('href').css('cursor', 'default');
	    $('.lrg-res_nav ul li').hide();
	}
    
});
