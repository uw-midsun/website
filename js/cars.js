
$(function(){
	
	var page = $("body");
	var contents = $("#container");
	var segnaposto = $(".segna");
	var cars = $(".sidebar_car");
	var firstcar = $(cars.get(0));
	var sidebarOffset = firstcar.offset();
	var segnapostoTopMargin = (segnaposto.height() - firstcar.height())/2;
	
	segnaposto.css("top", sidebarOffset.top - segnapostoTopMargin);
	segnaposto.fadeIn();
	
	$(window).scroll(function(scroll) {
    	
    	var yOffset = $(this).scrollTop() - contents.height();
    	var currentPageOffset = (yOffset) / (contents.height() * contents.length);
		var currentPage = $(contents.children().get(Math.round(currentPageOffset+1)));
	    	
	    var averagePosition = currentPageOffset * page.height() * 0.077;
		segnaposto.css('margin-top', averagePosition);
		// $('.bg_sun').css('margin-top', averagePosition - page.height() / 8);
		var theta = $(window).scrollTop() / 100 % Math.PI;
		$('.segna').css({ transform: 'rotate(-' + theta + 'rad)' });

		$('.text_info').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object - 100){
                
                $(this).animate({'margin-left':'0'},500);
                    
            }
        });

        $('.title').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
        });

        $('.car').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'right':'0'},500);
                    
            }
        });
		return false;
    	
    });
    
    $(".sidebar_car").click(function() {
	    
	    $("html, body").animate({
		    scrollTop: $($.attr(this, "href")).offset().top
		}, 500);
	    
	    return false;
    });
	
	$(".arrow.animated.bounce, .previous_text.animated.bounce").click(function() {
		
		$("html, body").animate({
		    scrollTop: $("#MSXI").offset().top
		}, 500);
	    
	    return false;
	});	
});