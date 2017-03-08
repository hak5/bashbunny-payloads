$(function(){
	var termsClick = $('#js-terms #terms-of-use');
	if(termsClick.length && $('#js-browser').val() == "ie8"){
		termsClick.click(function(){
			window.open(termsClick.attr('href'),'_blank');
			return false;
		});
	}
	/* Magnific Code for modal */
	var miPopover = $('.mi-popover');
	if(miPopover.length && typeof $.magnificPopup != 'undefined'){
		$('.mi-popover').magnificPopup({
			items: {
			    src: $('.mi-popover').attr('href').replace(/ /g,'%20')
			  },  
			mainClass:'m-modal',
			  type: 'ajax',
			  ajax:{
	        	settings:{
	        	dataType:'html'
	        	}
	          },
	        closeOnContentClick: false,
	        closeMarkup: '<button class="m-modal-close mfp-close">%title%<span></span></button>',
		  	tClose:'Close',
		  	tLoading:'Loading...',
		  	callbacks: {
	    		  beforeOpen: function() {
	    			  this.container.attr('aria-live', 'assertive');
		    	  },
		    	  parseAjax: function(mfpResponse) {
		    		  mfpResponse.data = $(mfpResponse.data).filter('.l-popup-container');
	    		  }
		  	}
			});	
	}
	/* Magnific code end */
	var roomLastValidation = $('#js-room-name');
	var accessValidation = $('#js-access-code');
	if(roomLastValidation.length){
		$('form').on('submit',function(){
			if(!$( "input[name='ROOM_NUMBER']").val() || !$( "input[name='LAST_NAME']").val()){
				$(this).closest('.upgrade-info-box').addClass("t-warning");
				return false;
			}
			else{
				$("#js-room-name button").prop('disabled', true);
			}
		});
	}
	if(accessValidation.length){
		$('form').on('submit',function(){
			if(!$( "input[name='ACCESS_CODE']").val()){
				$(this).closest('.upgrade-info-box').addClass("t-warning");
				return false;
			}
		});
	}
		if($('#page-container').length == 0)
	{
		$("#tc-close").show();
		$("#tc-close").click(function(){
			history.go(-1);
			return false;
		});
	}else{
		if($('#page-container').data('options').iReleaseVersion == "1"){
			function balanceBoxHeight(){
				var biggestHeight=0;
				$('.options ul').each(function(){
					if($(this).height()>0&&$(this).height()>biggestHeight){
						biggestHeight=$(this).height();
					}});
				$('.options ul').height(biggestHeight);
				}
				if($('#layout-content').is(':hidden')==false){
					balanceBoxHeight();
				}
				else{
					$(window).resize(function(){
						if($('#layout-content').is(':hidden')==false){
							balanceBoxHeight();$(window).unbind('resize');
						}
					});
				}
		}
		else if($('#page-container').data('options').iReleaseVersion == "2")
		{
			$( "form" ).on( "submit", function( event ) {
				  event.preventDefault();
				  window.location.replace($( this ).attr( 'action' ) + "?" + encodeURIComponent(encodeURIComponent(decodeURIComponent(decodeURIComponent($( this ).serialize().replace(/\+/g,  " ")).replace(/\+/g,  " ")).replace(/'/g,"%27").replace(/"/g,"%22")).replace(/'/g,"%27").replace(/"/g,"%22")));
			});
			if($('#m-option2').length != 0){
				//set default state for mobile price plan options
				$('#m-option1 a em, #m-option2 a em').addClass("toggle");
				$('#m-option1 a em, #m-option2 a em').addClass("toggle_close");
				$('#mobile-price-plan-form-1, #mobile-price-plan-form-2').hide();

				$('#m-option1 a, #m-option2 a').click(function(){
					if(($('#mobile-price-plan-form-1').is(':hidden') && $('#mobile-price-plan-form-2').is(':hidden')) || !($(this).parent().find('form').is(':hidden')))
					{
						$(this).parent().find('form').toggle();
						$(this).find('em').toggleClass('toggle_close');
					}else{
						$('#mobile-price-plan-form-1, #mobile-price-plan-form-2').toggle();
						$('#m-option1 a em, #m-option2 a em').toggleClass('toggle_close');
					}
				});
			}	
			
			
		}
		else if($('#page-container').data('options').iReleaseVersion == "3"){
			if($('#m-option2').length != 0){
				//set default state for mobile price plan options
				$('#m-option1 a em, #m-option2 a em').addClass("toggle");
				$('#m-option1 a em, #m-option2 a em').addClass("toggle_close");
				$('#mobile-price-plan-form-1, #mobile-price-plan-form-2').hide();

				$('#m-option1 a, #m-option2 a').click(function(){
					if(($('#mobile-price-plan-form-1').is(':hidden') && $('#mobile-price-plan-form-2').is(':hidden')) || !($(this).parent().find('form').is(':hidden')))
					{
						$(this).parent().find('form').toggle();
						$(this).find('em').toggleClass('toggle_close');
					}else{
						$('#mobile-price-plan-form-1, #mobile-price-plan-form-2').toggle();
						$('#m-option1 a em, #m-option2 a em').toggleClass('toggle_close');
					}
				});
			}
			
		}
	}
	
});
