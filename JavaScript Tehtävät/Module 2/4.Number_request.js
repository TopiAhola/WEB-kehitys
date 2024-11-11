'use strict';
let moduuli = "Moduuli 2";
let tehtava = "Tehtävä 4";
let tehtavananto = `
Write a program that asks the user for numbers until he gives zero. 
The given numbers are printed in the console from the largest to the smallest. (2p)
`

let number;
let numbers = [];
while (number !== 0) {
  number = parseFloat(prompt("Anna numero: "));
  numbers.push(number);
  }

numbers.sort((a, b) => b - a);

for (let n = 0; n < numbers.length; n++) {
  console.log(numbers[n]);
}

//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
