$(document).ready(function() {
	var swiper = new Swiper('.swiper-container', {
		direction: 'horizontal',
		loop: true,
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		autoplay: 5000,
		autoplayDisableOnInteraction: false,
		paginationClickable: true,
		spaceBetween: 300
	});
});
var element;

$('.business img, .electrical img, .mechanical img').click(_activate);

$('.team-content .back-button').click(_goBack);

function _activate() {
	var self = $(this).parent(),
		siblings = self.siblings();
	siblings.addClass('fade-out');
	self.addClass('fade-out');
	setTimeout(function() {
		siblings.addClass('hide-away');
		self.addClass('activated');
	}, 301);
}

function _goBack() {
	var self = $(this).parent(),
		siblings = self.siblings();
	self.addClass('activated-out');
	setTimeout(function() {
		self.removeClass('activated');
	}, 301);
	setTimeout(function() {
		siblings.removeClass('hide-away fade-out');
		self.removeClass('activated-out');
		self.removeClass('fade-out');
	}, 601);
}

var teamMembers = [
	{
		name: 'Tak Alguire',
		program: 'Electrical Engineering',
		title: 'Project Manager',
		imgSrc: 'Tak_Alguire'
	},
	{
		name: 'Minghao Ji',
		program: 'Electrical Engineering',
		title: 'Technical Manager',
		imgSrc: 'Minghao_Ji'
	},
	{
		name: 'Aaron Lam',
		program: 'Computer Engineering',
		title: 'Administrative Manager',
		imgSrc: 'Aaron_Lam'
	},
	{
		name: 'Devon Copeland',
		program: 'Mechatronics Engineering',
		title: 'Mechanical Manager',
		imgSrc: 'Devon_Copeland'
	},
	{
		name: 'Adam Marchand',
		program: 'Mechanical Engineering',
		title: 'Mechanical Manager',
		imgSrc: 'Adam_Marchand'
	},
	{
		name: 'Matthew Suski',
		program: 'Mechanical Engineering',
		title: 'Mechanical Manager',
		imgSrc: 'Matthew_Suski'
	},
	{
		name: 'Adrian Au',
		program: 'Mechanical Engineering',
		title: 'Aerobody Lead',
		imgSrc: 'Adrian_Au'
	},
	{
		name: 'Ritu Shah',
		program: 'Systems Design Engineering',
		title: 'Chassis Lead',
		imgSrc: 'Ritu_Shah'
	},
	{
		name: 'Lauren Hankins',
		program: 'Mechanical Engineering',
		title: 'Brakes Lead',
		imgSrc: 'Lauren_Hankins'
	},
	{
		name: 'Robin Pearce',
		program: 'Mechatronics Engineering',
		title: 'Driver Controls Lead',
		imgSrc: 'Robin_Pearce'
	},
	{
		name: 'Titus Chow',
		program: 'Computer Science',
		title: 'Electrical Manager',
		imgSrc: 'Titus_Chow'
	},
	{
		name: 'Calder Kitagawa',
		program: 'Nanotechnology Engineering',
		title: 'Electrical Manager',
		imgSrc: 'Calder_Kitagawa'
	},
	{
		name: 'Karl Ding',
		program: 'Computer Science',
		title: 'Firmware Lead',
		imgSrc: 'Karl_Ding'
	},
	{
		name: 'Kevin Chen',
		program: 'Mechatronics Engineering',
		title: 'Hardware Design Lead',
		imgSrc: 'Kevin_Chen'
	},
	{
		name: 'Taiping Li',
		program: 'Electrical Engineering',
		title: 'Hardware Design Lead',
		imgSrc: 'Taiping_Li'
	},	
	{
		name: 'Alyssha Schneider',
		program: 'Management Engineering',
		title: 'Business Lead',
		imgSrc: 'Alyssha_Schneider'
	},
	{
		name: 'Clarke Vandenhoven',
		program: 'Chemical Engineering',
		title: 'Sponsorship Lead',
		imgSrc: 'Clarke_Vandenhoven'
	},
	{
		name: 'Toni Li',
		program: 'Management Engineering',
		title: 'Marketing Lead',
		imgSrc: 'Toni_Li'
	},
	{
		name: 'Tony Wang',
		program: 'Computer Engineering',
		title: 'Marketing Lead',
		imgSrc: 'Tony_Wang'
	}
]

_loadTeamMemebers();


function _loadTeamMemebers() {
	var containerElement = $('.team-members');
	teamMembers.forEach(function(item) {
		var element = $('<div class="team-member col-md-3 col-xd-12"></div>'),
			img = $('<img class="member-image" src="img/team/members-small/' + item.imgSrc + '.jpg" />'),
			titleContainer = $('<div class="member-description">' + 
							       '<h4 class="name">' + item.name + '</h4>' + 
								   '<h4 class="program">' + item.program + '</h4>' + 
								   '<h4 class="title">' + item.title + '</h4>' + 
							   '</div>');
		element.append(img);
		element.append(titleContainer);
		containerElement.append(element);
	});

}
