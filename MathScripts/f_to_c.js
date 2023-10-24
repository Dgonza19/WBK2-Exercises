"use strict"

// "use strict";

// // input
// var fahrenheitTemperature = 75

// // calculations
// var celsiusTemperature =  (fahrenheitTemperature - 32) * 5/9;

// // output
// console.log(fahrenheitTemperature + " degrees Fahrenheit is equal to " + celsiusTemperature.toFixed(2) + " degrees Celsius. ");

function convertFtoC(fahrenheitTemperature) {
    let celsiusTemperature =  (fahrenheitTemperature - 32) * 5/9;
    return celsiusTemperature;
}

    let fahrenheitTemperature = 92;
    let celsiusTemperature = convertFtoC(fahrenheitTemperature);
    console.log(fahrenheitTemperature + " degrees Fahrenheit is " + celsiusTemperature.toFixed(2) + " degress Celsius.");

    fahrenheitTemperature = 212;
    celsiusTemperature = convertFtoC(fahrenheitTemperature);
    console.log(fahrenheitTemperature + " degrees Fahrenheit is " + celsiusTemperature.toFixed(2) + " degress Celsius.");

    fahrenheitTemperature = 90;
    celsiusTemperature = convertFtoC(fahrenheitTemperature);
    console.log(fahrenheitTemperature + " degrees Fahrenheit is " + celsiusTemperature.toFixed(2) + " degress Celsius.");

    fahrenheitTemperature = 72;
    celsiusTemperature = convertFtoC(fahrenheitTemperature);
    console.log(fahrenheitTemperature + " degrees Fahrenheit is " + celsiusTemperature.toFixed(2) + " degress Celsius.");

    fahrenheitTemperature = 32;
    celsiusTemperature = convertFtoC(fahrenheitTemperature);
    console.log(fahrenheitTemperature + " degrees Fahrenheit is " + celsiusTemperature.toFixed(2) + " degress Celsius.");

    fahrenheitTemperature = 0;
    celsiusTemperature = convertFtoC(fahrenheitTemperature);
    console.log(fahrenheitTemperature + " degrees Fahrenheit is " + celsiusTemperature.toFixed(2) + " degress Celsius.");

    fahrenheitTemperature = -40;
    celsiusTemperature = convertFtoC(fahrenheitTemperature);
    console.log(fahrenheitTemperature + " degrees Fahrenheit is " + celsiusTemperature.toFixed(2) + " degress Celsius.");



///////////////////////////////////////////////////


// // Establish the starting values that we "know"
// var fahrenheit;
// fahrenheit = 80;

// // Calculate any values that we dont 
// // already know, but that we can figure out.

// var celcius;
// // var step1 = fahrenheit -32;
// // var step2 = step1 * 5;
// // var step3 = step2 / 9;
// // celcius = step3;

// celcius = (fahrenheit - 32) * 5 / 9;

// // Display the results.



// var message = "The Farenheit Temp: " + fahrenheit + " is the same as the Celcius Temp: " + celcius;

// console.log(message);