$(document).ready(function() {
	var swiper = new Swiper('.swiper-container', {
		direction: 'horizontal',
		loop: true,
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		autoplay: 5000,
		autoplayDisableOnInteraction: true,
		paginationClickable: true,
		spaceBetween: 300
	});

	function isScrolledIntoView(elem)
	{
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();
	
		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();
		return  (elemTop+ 100) <= docViewBottom;
	}
	$(window).scroll(function(){
		if(isScrolledIntoView('.row.description')){
			$('body').removeClass('loaded');
		}
		else{
			$('body').addClass('loaded');
		}
	});
})

$(".arrow.animated.bounce, .previous_text.animated.bounce").click(function() {
	
	$("html, body").animate({
	    scrollTop: $(".home-body").offset().top
	}, 500);
    
    return false;
});	