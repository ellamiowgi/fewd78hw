// This iteration of my homework is incomplete, but wanted to turn it in. Will turn in completed work ASAP.

$(document).ready(function () {

	$('.signUpNow button').on('click', displayAlert);

	function displayAlert () {
		alert("We are not currently taking sign ups");
		$('.signUpNow button').text("No Sign Ups!");
	}

	$('.post1para2').hide();

	$('.js-readmore1').on('click', revealArticle1);

	function revealArticle1 () {
		$('.post1para2').slideToggle();
		if ($('.js-readmore1').text() === "Read More >") {
			$('.js-readmore1').text("Read Less");
		} else {
			$('.js-readmore1').text("Read More >");
		}
	}




})


// - If a user clicks "Read More":

// have the extra <p> tag slide down along with a "Read Less" link in the blog post using $.slideDown() and $.show()
// hide the "Read More" link using $.hide()