//


'use strict';

//Tulostetaan konsoliin
console.log("Im printing to console");
//Ponnahdusikkuna
alert("ponnahdusikkuna!");

//Määritellään vakio tuloste ja muuttuja tuloste2
const tuloste = "tulostetaan tämä";
let tuloste2 = "AAAA!"

//Laitetaan tuloste kappaleeseen jonka id on "tulostusalue"
document.querySelector('#tulostusalue').innerHTML = tuloste;

//Pyydetään käyttäjältä syöte, laitetaan se muuttujaan name
name = prompt('What is your name?');

// Laita muuttuja name stringin sisään.
let greeting = `Hello ${name}`;