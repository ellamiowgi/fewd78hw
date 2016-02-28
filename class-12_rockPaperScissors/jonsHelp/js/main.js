// Pseudo Code
// + On click, get user choice
		// 1. define var
		// 2. using "THIS" b/c we're selecting one item in a group
		// " 'userChoice' is(=) what the user selects (this), so find (.find) the button (.type) and insert it here (.html) "

// + Get random computer choice (using arrays)
// + Compare choices to determine the winner
// + Display user & computer choice and who won on the page
// + increase score of winner
// + on click of "start over" button, reset scores
// ------BONUS------
// + style to pop up module
// + Best of 3 (after 3 games, reset)




var userChoice;
var computerChoice;
var userScore = 0;
var computerScore = 0;
var currentRound = 0;
var result;

// on click, reset scores
$('#reset').on('click', function() {
	userScore = 0;
	computerScore = 0;
	$('#humanScore').html(userScore);
	$('#computerScore').html(computerScore);
});

// + On click, get user choice
$('.choices button').on('click', function() {
	userChoice = $(this).find('.type').html();
	userChoice = userChoice.toLowerCase();
	computerChoice = getComputerChoice();
	console.log(userChoice);
	console.log(computerChoice);
	getWinner();
});


// compare user and computer choice to get winner
function getWinner() {
	var result = '';
	if (userChoice === 'rock') {
		if (computerChoice === 'rock') {
			result = 'Its a Tie';
		} else if (computerChoice === 'paper') {
			result = 'You Lose';
			computerScore++;
		} else if (computerChoice === 'scissors') {
			result = 'You Win';
			userScore++;
		}
	} else if (userChoice === 'paper') {
		if (computerChoice === 'rock') {
			result = 'You Win';
			userScore++;
		} else if (computerChoice === 'paper') {
			result = 'Its a Tie';
		} else if (computerChoice === 'scissors') {
			result = 'You Lose';
			computerScore++;
		}
	} else if (userChoice === 'scissors') {
		if (computerChoice === 'rock') {
			result = 'You Lose';
			computerScore++;
		} else if (computerChoice === 'paper') {
			result = 'You Win';
			userScore++;
		} else if (computerChoice === 'scissors') {
			result = 'Its a Tie';
		}
	}
	// show the result
	// $('#status').html('You chose '+userChoice+'. Computer chose '+ computerChoice+'. '+result+'.');
	// console.log(result);
	$('.js-result').html(result);
	$('.js-player-img').attr('src', 'images/' + userChoice + '.png');
	$('.js-comp-img').attr('src', 'images/' + computerChoice + '.png');

	$('.modal').addClass('isActive');

	// update the scores
	$('#humanScore').html(userScore);
	$('#computerScore').html(computerScore);
}


// + Get random computer choice (using arrays).
function getComputerChoice() {
	var plays = ['rock', 'paper', 'scissors'];
 	var randNum = Math.floor(Math.random() * plays.length);
 	var play = plays[ randNum ];
 	return play;
}

$('.js-next').on('click', initiateNextRound);

function initiateNextRound() {
	currentRound++;
	$('.round').removeClass('currentRound');
	$('.modal').removeClass('isActive');

	if (currentRound > 2) {
		if (computerScore > userScore) {
			alert('computer beat you');
		} else if (userScore > computerScore) {
			alert('you beat le computer');
		} else {
			alert("y'all tied up.")
		}
		currentRound = 0;
	}

	$('.round').eq(currentRound).addClass('currentRound');
}


// copied from slack:

// $('#status').html('You chose '+userChoice+'. Computer chose '+computerChoice+'. '+result);




