$(document).on('ready', function() {
	// cache element selectors
	var $header = $('.js-header');
	var headerHeight = $header.outerHeight();
	var $home = $('#home');

	var adjustHomeHeight = function() {
		var windowHeght = window.innerHeight;
		$home.height(windowHeght - headerHeight);
	}

	var onResize = function() {
		adjustHomeHeight();
	}

	window.addEventListener('resize', onResize);
	adjustHomeHeight();
})
