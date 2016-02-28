$(document).ready(function(){

	// Pseudo code: When "update" button is clicked, change the background image that correlates with the city the user entered in input box. 


	// Set Up Variables
	var images=["images/austin.jpg", "images/la.jpg", "images/nyc.jpg", "images/sf.jpg", "images/sydney.jpg"];


	// Update image by changing the body background URL
	function changeImage(event){
		// Prevent the default action of the form submit
		event.preventDefault();
		// .trim for "Bonus Remove extra spaces or new lines" & .toLowerCase for various user input case scenarios
		var userInput = $('#city-type').val().trim().toLowerCase();
		// Reset the user input field after it is submitted
		$('#city-type').val('');


	// Conditionals to define and accept user input
		if (userInput == "austin" || userInput ==  "atx") {
			$('body').css('background', 'url('+images[0]+')');
		} else if (userInput == "los angeles" || userInput == "la" || userInput == "lax") {
			$('body').css('background', 'url('+images[1]+')');
		} else if (userInput == "new york city" || userInput == "new york" || userInput == "nyc" || userInput == "ny") {
			$('body').css('background', 'url('+images[2]+')');
		} else if (userInput == "san francisco" || userInput == "sf" || userInput == "bay area") {
			$('body').css('background', 'url('+images[3]+')');
		} else if (userInput == "sydney" || userInput == "syd") {
			$('body').css('background', 'url('+images[4]+')');
	// A final condition to capture all edge cases.
		} else {
			alert("Oy! That city is coming soon or doesn't exist.")
		}
	}

	// On click of submit button, update background image
	$('form').on('submit', changeImage);

});



