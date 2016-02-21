document.getElementById('fahrenheit').onkeyup = convertToCelsius;

function convertToCelsius () {
	var fahrenheit = document.getElementById('fahrenheit').value;

	var convertedCelsius = (fahrenheit - 32) * .5556;

	document.getElementById('celsiusResult').value = convertedCelsius

// Question: after deleting a number in my "Enter Fahrenheit" input, the converter is reading that value as zero and leaving the "Celsius Result" calculated at "-17.7792". How do I eliminate that?

	if (convertedCelsius < 10) {
    	document.body.style.backgroundColor = "dodgerblue";
	} else if (convertedCelsius > 10.1 && convertedCelsius < 29.9) {
    	document.body.style.backgroundColor = "#10d7af";
	} else if (convertedCelsius > 30) {
    	document.body.style.backgroundColor = "deeppink";
	}

}

document.getElementById('celsius').onkeyup = convertToFahrenheit;

function convertToFahrenheit () {
	var celsius = document.getElementById('celsius').value;

	var convertedFahrenheit = (celsius * 1.8) + 32;

	document.getElementById('fahrenheitResult').value = convertedFahrenheit

// Question: same as above, but eliminating the "Fahrenheit Result" calculated at 32. Thanks!
}
