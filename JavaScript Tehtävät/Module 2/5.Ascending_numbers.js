'use strict';
let moduuli = "Moduuli 2";
let tehtava = "Tehtävä 5";
let tehtavananto = `
Write a program that prompts the user for numbers. When the user enters one of the numbers he previously entered, 
the program will announce that the number has already been given and stops its operation and then prints all the 
given numbers to the console in ascending order. (2p)
`
//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;

//Ohjelma:
let numbers = [];
while (true) {
   let number = parseFloat(prompt("Anna numero: "));
   //Onko numero jo listassa:
   if (numbers.includes(number))
   {
      console.log(`Number ${number} has already been given`);
      break;
   }
   //Virhesyötettä ei laiteta listaan:
   else   {
      if (isNaN(number) === false) {
         numbers.push(number);
      }

   }
}

//Sortti ja tulostus:
numbers.sort((a, b) => a - b);
for (let n = 0; n < numbers.length; n++) {
   console.log(numbers[n]);
}
