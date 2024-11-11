'use strict';
let moduuli = "Moduuli 2";
let tehtava = "Tehtävä 1";
let tehtavananto = `
Write a program that prompts the user for five numbers and prints them in the reverse order they were entered.
Print the result to the console.(2p)
Save the numbers to an array, then use for-loop to iterate in reverse order.
Do not use array.reverse() function.
`

let n1 = prompt("Anna numero 1.");
let n2 = prompt("Anna numero 2.");
let n3 = prompt("Anna numero 3.");
let n4 = prompt("Anna numero 4.");
let n5 = prompt("Anna numero 5.");
let numerot = [n1,n2,n3,n4,n5];

for (let n = numerot.length; n > 0; n = n-1) {
  console.log(numerot[n-1]);
}

const tuloste = `Tehtävä 1 tulostaa numerot ${numerot} käänteisessä järjestyksessä konsoliin.`;

//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
document.querySelector('#tuloste').innerHTML = tuloste;