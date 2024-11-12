'use strict';
let moduuli = "Moduuli 2";
let tehtava = "Tehtävä 8";
let tehtavananto = `
Write a function called concat(), which receives an array of strings as a parameter. 
The function returns a string formed by concatenating the elements of the array. (2p)
Example: In a four-item array, there are items Johnny, DeeDee, Joey and Marky. 
The function returns the string JohnnyDeeDeeJoeyMarky.
Do not use array.join() function
You can hardcode the array, no need for prompt().
Print the result to HTML document.
`
//Funktio
function concat(string_array) {
  let new_string = string_array[0];
  for(let n=1; n < string_array.length; n++) {
    new_string = new_string + string_array[n];
  }


  return new_string;
}

let lista = [`Tässä on stringejä yhdessä:`, `aaa`,`bbb`,`ccc`,`ddd`,`eee`];


let tuloste = concat(lista);
console.log(concat(lista));
console.log(lista)

//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
document.querySelector('#tuloste').innerHTML = tuloste;