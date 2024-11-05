/*
Write a program that prompts for three integers.
The program prints the sum, product and average of the numbers to the HTML document. (3p)

*/


let integer1 = parseInt(prompt("Anna kokonaisluku 1:"));
let integer2 = parseInt(prompt("Anna kokonaisluku 2:"));
let integer3 = parseInt(prompt("Anna kokonaisluku 3:"));

let sum = integer1 + integer2 + integer3;
let product = integer1 * integer2 * integer3;
let average = sum / 3;

let tuloste = `Lukujen summa on ${sum}. <br>Lukujen tulo on ${product}.<br>Lukujen keskiarvo on ${average}.`

document.querySelector('#tulostusalue1').innerHTML = tuloste;
