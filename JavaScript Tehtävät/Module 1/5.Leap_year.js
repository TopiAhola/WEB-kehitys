/*
Write a program that asks the user to enter a year and notifies the user whether the input year is a leap year.
A year is a leap year if it is divisible by four. However, years divisible by 100 are leap years only if they are
also divisible by 400. Print the result on the HTML document. (3p)

*/


const year = parseInt(prompt("Give year: "));
let leap_year = 0;
let tuloste;

if (year % 4 !== 0 ) {leap_year = 0;}
else if (year % 4 === 0 && year % 100 !== 0) {leap_year = 1;}
else if (year % 100 === 0 && year % 400 === 0) {leap_year = 1;}

if (leap_year === 0) {tuloste = `Year ${year} is not a leap year.`}
if (leap_year === 1) {tuloste = `Year ${year} is a leap year.` }

document.querySelector('#tulostusalue1').innerHTML = tuloste;