$(document).on('ready', function() {
	// cache element selectors
	var $header = $('.js-header');
	var headerHeight = $header.outerHeight();
	var $home = $('#home');
	var $contact = $('#contactUs');

	var adjustHomeHeight = function() {
		var sectionHeight = window.innerHeight - headerHeight;
		// use outerHeight because it includes padding and border in
		// the height calculation which is what we anticipate
		// when using box-sizing: border-box
		$home.outerHeight(sectionHeight);
		$contact.outerHeight(sectionHeight);
		return false;
	}

	var onResize = function() {
		adjustHomeHeight();
		return false;
	}

	// Takes a jQuery element to use the jQuery animate function to
	// smooth scroll to.
	var smoothScroll = function($target) {
		// Measure the distance of the target element to
		// the top of the page and subtract the height of
		// the nav so that it is precisely aligned below the nav
		var offsetTop = $target.offset().top - 56;
		$('html, body').animate({
			scrollTop: offsetTop
	    }, 500);
	    return false;
	}

	// Callback for when clicking on an anchor link in the nav
	// event is the data for the click event
	var onAnchorClick = function(event) {
		// Prevents the default action of clicking on an anchor link (snapping
		// you to the position of the element with the id)
		event.preventDefault();
		// Abstract the hash from the href attribute and uses jQuery
		// to select the element
		var $targetElement = $(this.hash);
		// Execute smoothScroll function passing in the target element
		// to scroll to
		smoothScroll($targetElement);
		return false;
	}

	// Determines which project was clicked on to reveal the
	// corresponding project in a modal
	var onProjectClick = function() {
		// get the index of the clicked project
		var index = $('.js-projects').children().index(this);
		console.log(index);
		// add the active class to the modal container
		$('#modals').addClass('is-active');
		// add the active class to the specific modal that corresponds
		// to the clicked one
		$('.js-modals').children('.modal').eq(index).addClass('is-active');
		return false;
	}

	// Removes the active classes from the modal container
	// as well as all the modals within it
	var closeModal = function() {
		$('#modals').removeClass('is-active');
		$('.js-modals').children().removeClass('is-active');
		return false;
	}

	// goes to the previous modal
	var navigateLeft = function() {
		// only execute this if the modal container has the 'is-active' class
		if ($('#modals').hasClass('is-active')) {
			// get the index value of the current active modal
			var index = $('#modals').children('.modal').index($('.js-modals').children('.is-active'));
			// remove the active class of the current active modal
			$('.js-modals').children('.modal').eq(index).removeClass('is-active');
			// add the active class to the previous modal
			$('.js-modals').children('.modal').eq(index - 1).addClass('is-active');
		}
	}

	// goes to the next modal
	var navigateRight = function() {
		// only execute this if the modal container has the 'is-active' class
		if ($('#modals').hasClass('is-active')) {
			// get the index value of the current active modal
			var index = $('#modals').children('.modal').index($('.js-modals').children('.is-active'));
			// remove the active class of the current active modal
			$('.js-modals').children('.modal').eq(index).removeClass('is-active');
			// add the active class to the next modal
			$('.js-modals').children('.modal').eq(index + 1).addClass('is-active');
		}
	}

	// Fired on each keydown event
	// event is the data of the keydown event and contains a key
	// for determining which key was pressed. ESC is keyCode 27
	// left is 37, right is 39
	var onKeydown = function(event) {
		console.log(event.keyCode);
		if (event.keyCode === 27) {
			// execute closeModal if ESC is pressed
			closeModal()
		} else if (event.keyCode === 37) {
			navigateLeft();
		} else if (event.keyCode === 39) {
			navigateRight();
		}
		return false;
	}

	window.addEventListener('resize', onResize);
	window.addEventListener('keydown', onKeydown);
	$('.js-anchor').on('click', onAnchorClick);
	$('.js-projects').children().on('click', onProjectClick);
	$('.js-modal-close').on('click', closeModal);
	adjustHomeHeight();
	// Create a new instance of Constellation, passing in the canvas element
	var constellation = new Constellation(document.getElementById('constellation'));
	// Run the initialize function for the constellation
	constellation.init();
})
