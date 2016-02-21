// This iteration of my homework is incomplete, but wanted to turn it in. Will turn in completed work ASAP.

$(document).ready(function () {

	$('.signUpNow button').on('click', displayAlert);

	function displayAlert () {
		alert("We are not currently taking sign ups");
		$('.signUpNow button').text("No Sign Ups!");
	}

	$('.post1para2').hide();
	$('.js-readless1').hide();


	function showReadMore1() {
		$('.post1para2').slideDown();
		$('.js-readmore1').hide();
		$('.js-readless1').show();
	}

	$('.js-readmore1').on('click', showReadMore1);
	

	function hideReadLess() {
		$('.post1para2').slideUp();
		$('.js-readless1').hide();
		$('.js-readmore1').show();
	}

	$('.js-readless1').on('click', hideReadLess);


	$('.post2para2').hide();
	$('.js-readless2').hide();


	function showReadMore2() {
		$('.post2para2').slideDown();
		$('.js-readmore2').hide();
		$('.js-readless2').show();
	}

	$('.js-readmore2').on('click', showReadMore2);
	

	function hideReadLess2() {
		$('.post2para2').slideUp();
		$('.js-readless2').hide();
		$('.js-readmore2').show();
	}

	$('.js-readless2').on('click', hideReadLess2);


	$('.extraLine').hide();


	function showLearnMore() {
		$('.learnMore').slideDown();
		$('.learnMore').hide();
		$('.extraLine').show();
	}

	$('.learnMore').on('click', showLearnMore);



// JON'S HELP
	// $('.js-readmore1').on('click', revealArticle1);

	// function revealArticle1 () {
	// 	$('.post1para2').slideToggle();
	// 	if ($('.js-readmore1').text() === "Read More >") {
	// 		$('.js-readmore1').text("<Read Less");
	// 	} else {
	// 		$('.js-readmore1').text("Read More >");
	// 	}
	// }


// *****DO NOT DELETE THIS CURLY BRACE & CLOSING PARENTHESIS*****
})