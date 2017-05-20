$(document).ready(function(){
    $(this).scrollTop(0);
});

var headerExpanded = false;
var roundLogo = 'img/logo_round.png';
var longLogo = 'img/logo_long.png';
var SLIDE_SPEED = 0;
var isMobile = $(window).width() < 768;

function expandHeader() {
 	if(!headerExpanded) {
		$('.header .nav .img').slideUp(SLIDE_SPEED);
		headerExpanded = true;
		$('.header #logo img').animate({'height': '50px'});
		$('#logo').fadeOut(300, function() {
			$('#logo img').attr('src', roundLogo);
			$('#logo').fadeIn(300);
			if (isMobile) {
				$('#logo').css({ 'top': $(window).height() - 70 + 'px',
								 'left': -$(window).width() / 2 + 40 + 'px',
								 'position': 'relative',});
			}
		});

		$('.nav').animate(
			{
				'margin-left':'0'
			}, 800);
		}
}

function collapseHeader() {
	if(headerExpanded) {
		$('.header .nav .img').slideUp(SLIDE_SPEED);
		headerExpanded = false;
		$('.header #logo img').animate({'height': '60px'});
		$('#logo').fadeOut(300, function() {
			$('#logo img').attr("src", longLogo);
			$('#logo').fadeIn(300);

			if (isMobile) {
				$('#logo').animate({ 'top': 0,
								 'left': 0,
								 'position': 'relative'});
			}
		});

		$('.nav').animate(
			{
			'margin-left':'110vw'
			}, 800, function() {
				$(this).css('margin-left', '-110vw');
		});

	}
}

var currentLocation = window.location;

var onHome = currentLocation.pathname.includes('index') || currentLocation.pathname === '/';
if(onHome) {
	collapseHeader();
	$(window).scroll(function() {
		if(!isMobile) {
			var hT = $('.scroll-expand-nav').offset().top;
		} else {
			var hT = $(window).height();
		}
		var hH = $('.scroll-expand-nav').outerHeight(),
		wS = $(this).scrollTop();
		if (wS > (hT+hH) && !headerExpanded){
			expandHeader();
		} else if (wS < (hT+hH) && headerExpanded) {
			collapseHeader();
		}
	});
} else {
	expandHeader();
}

$('.header .nav .img').slideUp(SLIDE_SPEED);
if (!isMobile) {
	$('.nav .team').mouseenter(function() {
		$('.team .img').slideDown(SLIDE_SPEED);
	});

	$('.team').mouseleave(function() {
		$('.team .img').slideUp(SLIDE_SPEED);
	});

	$('.nav .cars').mouseenter(function() {
		$('.cars .img').slideDown(SLIDE_SPEED);
	});

	$('.cars').mouseleave(function() {
		$('.cars .img').slideUp(SLIDE_SPEED);
	});

	$('.nav .sponsors').mouseenter(function() {
		$('.sponsors .img').slideDown(SLIDE_SPEED);
	});

	$('.sponsors').mouseleave(function() {
		$('.sponsors .img').slideUp(SLIDE_SPEED);
	});

	$('.nav .media').mouseenter(function() {
		$('.media .img').slideDown(SLIDE_SPEED);
	});
	$('.media').mouseleave(function() {
		$('.media .img').slideUp(SLIDE_SPEED);
	});
}

