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
			result = 'Tie';
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
			result = 'Tie';
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
			result = 'Tie';
		}
	}
	// show the result
	// $('#status').html('You chose '+userChoice+'. Computer chose '+ computerChoice+'. '+result+'.');
	// console.log(result);
	$('.modal_whoWon').html(result);
	$('.left_user_result_image').attr('src', 'images/' + userChoice + '.png');
	$('.right_computer_result_image').attr('src', 'images/' + computerChoice + '.png');

	$('#modal').addClass('isActive');

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

$('.next_round_btn').on('click', initiateNextRound);

function initiateNextRound() {
	currentRound++;
	$('.round').removeClass('currentRound');
	$('#modal').removeClass('isActive');

	if (currentRound > 2) {
		if (computerScore > userScore) {
			alert ('The Computer Beat You...this time.');
		} else if (userScore > computerScore) {
			alert('You Beat the Computer!');
		} else {
			alert("Y'all tied!");
		}
		currentRound = 0;
	}

	$('.round').eq(currentRound).addClass('currentRound');
}

// copied from slack:

// $('#status').html('You chose '+userChoice+'. Computer chose '+computerChoice+'. '+result);




