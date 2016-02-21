// converted to FAHRENHEIT 
// < 10 --> white
// >10 and <30 --> light blue
// >30 and <60 --> blue
// >60 and <85 --> green
// >85 ---> red 

// Converted Celsius:
// < -12.2 = snow
// > -12.23 and < -1.1 = lightsteelblue
// > -1.12 and <15.5 = royalblue
// > 15.56 and < 29.4 = mediumseagreen
// >29.45 = mediumvioletred


// Pseudo Code:
// User enters fahrenheit value.
// On clicking "calculate", the converted temp displays and the background color changes depending on the values above.



function convertToCelsius() {
	var fahrenheit = $('#fahrenheit').val();

	var convertedCelsius = (fahrenheit - 32) * .5556;

	$('#celsiusResult').val(convertedCelsius);
	if (fahrenheit < 10) {
		$('body').css('background-color', 'snow');
	} else if (fahrenheit >= 10 && fahrenheit < 30) {
		$('body').css('background-color', 'lightsteelblue');
	} else if (fahrenheit >= 30 && fahrenheit < 60) {
		$('body').css('background-color', 'royalblue');
	} else if (fahrenheit >= 60 && fahrenheit < 85) {
		$('body').css('background-color', 'mediumseagreen');
	} else if (fahrenheit >= 85) {
		$('body').css('background-color', 'mediumvioletred');
	}
}

$('.fahr_to_cels').on('click', convertToCelsius);


function resetCelsiusResult() {
	$('#celsiusResult').val('');
}

$('#fahrenheit').on('keyup', resetCelsiusResult);

// Nice to have: 
// 1. when user deletes fahrenheit value, the celsius result empties 
// 2. figure out why "-17" stays in converted celsius box
// 3. finish converting back to fahrenheit 

