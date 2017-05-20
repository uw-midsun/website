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
})

$(".arrow.animated.bounce, .previous_text.animated.bounce").click(function() {
	
	$("html, body").animate({
	    scrollTop: $(".home-body").offset().top
	}, 500);
    
    return false;
});	