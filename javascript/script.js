$(document).ready(function() {
	
	$(window).scroll(function () {

		if ($(window).scrollTop() > $("header").height()) {
			$('nav').addClass('navFixed');
		}
		if ($(window).scrollTop() < $("header").height()) {
			$('nav').removeClass('navFixed');
		}
	});
});

