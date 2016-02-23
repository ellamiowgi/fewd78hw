// Pseudo code:
//	1. When "update" button is clicked, change the background image that correlates with the city the user entered in input box. 



// Set Up Variables
var images=["images/austin.jpg", "images/la.jpg", "images/nyc.jpg", "images/sf.jpg", "images/sydney.jpg"];


// Update image by changing the body background URL

function changeImage(){
	$('body').css('background', images);
}

// On click of submit button, update background image
$('#submit-btn').on('click', changeImage);