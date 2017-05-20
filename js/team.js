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
		name: 'Aaron Lam',
		program: '3rd Year Computer Engineering',
		title: 'Project Manager',
		imgSrc: 'Aaron_Lam'
	},
	{
		name: 'Minghao Ji',
		program: '3rd Year Electrical Engineering',
		title: 'Technical Manager',
		imgSrc: 'Minghao_Ji'
	},
	{
		name: 'Tak Alguire',
		program: '2nd Year Electrical Engineering',
		title: 'Operations Manager',
		imgSrc: 'Tak_Alguire'
	},
	{
		name: 'Devon Copeland',
		program: '3rd Year Mechatronics Engineering',
		title: 'Mechanical Manager',
		imgSrc: 'Devon_Copeland'
	},
	{
		name: 'Matthew Suski',
		program: '2nd Year Mechanical Engineering',
		title: 'Mechanical Manager',
		imgSrc: 'Matthew_Suski'
	},
	{
		name: 'Ritu Shah',
		program: '3rd Year Systems Design Engineering',
		title: 'Chassis Lead',
		imgSrc: 'Ritu_Shah'
	},
	{
		name: 'Angela Chao',
		program: '3rd Year Systems Design Engineering',
		title: 'Chassis Lead',
		imgSrc: 'Angela_Chao'
	},
	{
		name: 'Kuldeep Panjwani',
		program: '2nd Year Mechanical Engineering',
		title: 'Body & Aerodynamics Lead',
		imgSrc: 'Kuldeep_Panjwani'
	},
	{
		name: 'Lauren Hankins',
		program: 'Mechanical Engineering',
		title: 'Brakes Lead',
		imgSrc: 'Lauren_Hankins'
	},
	{
		name: 'Robin Pearce',
		program: '1st Year Mechatronics Engineering',
		title: 'Driver Controls Lead',
		imgSrc: 'Robin_Pearce'
	},
	{
		name: 'Titus Chow',
		program: '3rd Year Computer Science',
		title: 'Electrical Manager',
		imgSrc: 'Titus_Chow'
	},
	{
		name: 'Calder Kitagawa',
		program: '3rd Year Nanotechnology Engineering',
		title: 'Electrical Manager',
		imgSrc: 'Calder_Kitagawa'
	},
	{
		name: 'Lucas Francisco Fryzek',
		program: '3rd Year Computer Science',
		title: 'Firmware Lead',
		imgSrc: 'Lucas_Francisco'
	},
	{
		name: 'Karl Ding',
		program: '3rd Year Computer Science',
		title: 'Firmware Lead',
		imgSrc: 'Karl_Ding'
	},
	{
		name: 'Kevin Chen',
		program: '3rd Year Mechatronics Engineering',
		title: 'Hardware Design Lead',
		imgSrc: 'Kevin_Chen'
	},
	{
		name: 'Taiping Li',
		program: '2nd Year Electrical Engineering',
		title: 'Hardware Design Lead',
		imgSrc: 'Taiping_Li'
	},
	{
		name: 'Clarke Vandenhoven',
		program: '1st Year Chemical Engineering',
		title: 'Sponsorship Lead',
		imgSrc: 'Clarke_Vandenhoven'
	},
	{
		name: 'Iris Chang',
		program: '2nd Year Systems Design Engineering',
		title: 'Business Manager',
		imgSrc: 'Iris_Chang'
	},
	{
		name: 'Toni Li',
		program: '2nd Year Management Engineering',
		title: 'Marketing Lead',
		imgSrc: 'Toni_Li'
	},
	{
		name: 'Tony Wang',
		program: '2nd Year Computer Engineering',
		title: 'Marketing Lead',
		imgSrc: 'Tony_Wang'
	},
	{
		name: 'Keith Wong',
		program: '3rd Year Electrical Engineering',
		title: 'Safety Officer',
		imgSrc: 'Keith_Wong'
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