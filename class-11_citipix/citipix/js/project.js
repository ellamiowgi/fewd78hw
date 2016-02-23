// Pseudo code:
//	When "update" button is clicked, change the background image that correlates with the city the user entered in input box. 



// Set Up Variables
var images=["images/austin.jpg", "images/la.jpg", "images/nyc.jpg", "images/sf.jpg", "images/sydney.jpg"];



// Update image by changing the body background URL

function changeImage(){
	var userInput = $('#city-type').val();

// Conditionals to define and accept user input
	if (userInput == "Austin" || userInput == "austin" || userInput == "ATX" ||userInput == "Atx" || userInput ==  "atx") {
		$('body').css('background', 'url('+images[0]+')');
	} else if (userInput == "Los Angeles" || userInput == "los angeles" || userInput == "LA" || userInput == "la" || userInput == "LAX" || userInput == "lax" || userInput == "Lax") {
		$('body').css('background', 'url('+images[1]+')');
	} else if (userInput == "New York City" || userInput == "new york city" || userInput == "New York" || userInput == "new york" || userInput == "NYC" || userInput == "nyc" || userInput == "New york" || userInput == "NY" || userInput == "ny") {
		$('body').css('background', 'url('+images[2]+')');
	} else if (userInput == "San Francisco" || userInput == "san francisco" || userInput == "San francisco" || userInput == "SF" || userInput == "sf") {
		$('body').css('background', 'url('+images[3]+')');
	} else if (userInput == "Sydney" || userInput == "sydney" || userInput == "Syd" || userInput == "syd") {
		$('body').css('background', 'url('+images[4]+')');
// A final condition to capture all edge cases.
	} else {
		alert("Oy! That city is coming soon or doesn't exist.")
	}
}

// On click of submit button, update background image
$('#submit-btn').on('click', changeImage);