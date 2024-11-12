'use strict';
let moduuli = "Moduuli 2";
let tehtava = "Tehtävä 9";
let tehtavananto = `
Write a function called even(), which receives an array containing numbers as a parameter. 
The function returns a second (usually smaller) array which has the even numbers of the original array. 
The function must not make changes to the original table. (3p)
Example: In a three-item array, there are items 2, 7 and 4. The function returns a two-item array with items 2 and 4.
Print both the original array and the new array to the console in the main program after you have called the function.
You can hard code the array, no need for prompt().
`

function even(array) {
  let new_array = [];
  for (let n = 0; n < array.length; n++) {
    if (array[n] % 2 === 0 ) {
      new_array.push(array[n]);
    }
  }
return new_array;
}


let array1 = [1,5,8,9,10]
let array2 = even(array1);

console.log(array1);
console.log(array2);
let tuloste = `Numerot: 1,5,8,9,10. Uuden arrayn numerot: ${array2}`

//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
document.querySelector('#tuloste').innerHTML = tuloste;