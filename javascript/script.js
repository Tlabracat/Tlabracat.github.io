$(document).ready(function() {
	
	$(window).scroll(function () {

		console.log($(window).scrollTop());

		if ($(window).scrollTop() > 310) {
			$('nav').addClass('navFixed');
		}
		if ($(window).scrollTop() <311) {
			$('nav').removeClass('navFixed');
		}
	});
});

