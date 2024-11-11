//Moduuli 2 tehtävät:
'use strict';


/* Tehtävä 1:
Write a program that prompts the user for five numbers and prints them in the reverse order they were entered.
Print the result to the console.(2p)
Save the numbers to an array, then use for-loop to iterate in reverse order.
Do not use array.reverse() function.
*/
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
document.querySelector('#tehtava1').innerHTML = tuloste;


/* Tehtävä 2:
Write a program that asks the user for the number of participants. After this, the program asks for the names of all participants.
Finally, the program prints the names of the participants on the web page in an ordered list (<ol>) in alphabetical order. (2p)

*/
number = prompt("Anna osallistujien määrä: ")
let osallistujat = [];

for (let n = 0; n < number; n++) {
  osallistujat.push(prompt(`Anna osallistujan ${n+1}. nimi:`))
}


let tuloste2 = `<ol> ${rivit} </ol>`
document.querySelector('#tehtava2').innerHTML = tuloste2;

/* Tehtävä 2:


*/


document.querySelector('#tehtava2').innerHTML = tuloste;