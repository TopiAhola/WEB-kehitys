'use strict';
//Tehtävänanto tähän:
let moduuli = "Conditional expressions and loops ";
let tehtava = "Assignment 1 ";
let tehtavananto = `
Write a program that prompts the user for a temperature in Celsius and converts it to Fahrenheit and Kelvin. 
The program should then display the converted temperatures in an HTML document.
Calculate the temperature in Fahrenheit by using the formula: F = (C * 9/5) + 32, where F is the temperature in Fahrenheit and C is the temperature in Celsius.
2p
`

let tempC = Number(prompt("Give temperature in Celsius: "));
let tempF = (tempC * 9 / 5) + 32;
let tempK = tempC + 273.15;


let tuloste = `Temperature in Celsius: ${tempC} <br>` + `Temperature in Fahrenheit: ${tempF} <br>` + `Temperature in Kelvin: ${tempK} <br>`;

//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
document.querySelector('#tuloste').innerHTML = tuloste;