/*
Write a program that rolls user defined number of dice and displays the sum of the results of the dice rolls.(2p)

First, program asks the user for the number of dice rolls.
Then the program throws a die as many times as the user defined.
Print the sum of the results in the console or in the HTML document.

*/

'use strict';

let dice_amount = prompt("Give number of dice to roll: ")
let sum = 0;

for (let n = 0; n < dice_amount; n++) {
  let roll = Math.floor(Math.random() * 6 + 1 );
  sum += roll;

}


const tuloste = sum;
document.querySelector('#tulostusalue1').innerHTML = tuloste;