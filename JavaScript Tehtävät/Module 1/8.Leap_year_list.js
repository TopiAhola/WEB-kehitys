/*
Write a program that prompts the user for the start and end year.
The program prints all leap years from the interval given by the user.
Printing is done in an unordered list to the HTML document. (3p)

Example output HTML code:
<ul>
   <li>1992</li>
   <li>1996</li>
   <li>2000</li>
   <li>2004</li>
   <li>2008</li>
</ul>

*/

'use strict';

let start_year = prompt("Give start year: ");
let end_year = prompt("Give end year: ");
let list_items = `Leap years between ${start_year} and ${end_year}: `;

// Tämä on huono koska list_items saa määrittelemättömän arvon joka tulee riviksi listaan
// Kannattaisi tehdä JS lista josta ajaa kaikki rivit kerralla HTML stringiksi...


//Toistorakenne vuosien välille:
for (let year = start_year; year <= end_year; year++) {

  //Onko vuosi karkausvuosi:
  let leap_year = false;
  if (year % 4 !== 0) {
    leap_year = false;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    leap_year = true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    leap_year = true;
  }

  // Jos on karkausvuosi lisätään listan riviksi
  if (leap_year == true) {
    list_items = list_items + `<li>${year}</li>`;
  }
}

//Laitetaan li elementit listaan:
let list =  `<ul id='list'>${list_items}<ul>`;

//Laitetaan lista tulostusalueelle
document.querySelector('#tulostusalue1').innerHTML = list;