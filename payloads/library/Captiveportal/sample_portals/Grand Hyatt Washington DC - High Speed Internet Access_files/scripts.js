$(document).ready(function() {

	// Make boxes equal height
	$('.eqht').equalHeight();

	// Hotel Info accordians
	$('.hotel-info .btn').on('click', function(){
		//$('.info-list').slideUp().find('a').removeClass('active');
		$(this).toggleClass('active').closest('h3').next('.info-list').slideToggle();
		return false;
	}).first().click(); // Trigger initial click to show content
	$('.info-link').on('click', function(){
		$(this).closest('h4').next('p').slideToggle();
		return false;
	});

});

// make sure the $ is pointing to JQuery and not some other library
(function($){
    $.fn.equalHeight = function() {
       // find the tallest height in the collection
        tallest = 0;
        this.each(function(){
            thisHeight = $(this).height();
            if( thisHeight > tallest)
                tallest = thisHeight;
        });

        // set each items height to use the tallest value found
        this.each(function(){
            $(this).height(tallest);

			// Hack our featured item
			if( $(this).hasClass('feature') ){
				$(this).addClass('superfeature').height(tallest+40);

			}
        });
    }
})(jQuery);
