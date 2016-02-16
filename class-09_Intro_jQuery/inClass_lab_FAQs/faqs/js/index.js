// // Tip: You can either hide the answer on page load with js or use display:none in css


// I started off by hiding the answers (thanks, tip!)
$("#answer1, #answer2, #answer3").hide();


// For code lines 9, 15, and 21, I created the name of "reveal1", "reveal2," and "reveal3" to eventually define the respective function.
$('#question1').on('click', reveal1);

function reveal1 () {
	$('#answer1').slideToggle();
}

$('#question2').on('click', reveal2);

function reveal2 () {
	$('#answer2').slideToggle();
}

$('#question3').on('click', reveal3);

function reveal3 () {
	$('#answer3').slideToggle();
}