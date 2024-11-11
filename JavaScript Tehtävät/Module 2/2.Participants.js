/* Tehtävä 2:
Write a program that asks the user for the number of participants. After this, the program asks for the names of all participants.
Finally, the program prints the names of the participants on the web page in an ordered list (<ol>) in alphabetical order. (2p)

*/
'use strict';
let moduuli = "Moduuli 2";
let tehtava = "Tehtävä 2";
let tehtavananto = `Write a program that asks the user for the number of participants. After this, the program asks for the names of all participants.
Finally, the program prints the names of the participants on the web page in an ordered list () in alphabetical order. (2p)`;



let number = prompt("Anna osallistujien määrä: ")
let osallistujat = [];

for (let n = 0; n < number; n++) {
  osallistujat.push(prompt(`Anna osallistujan ${n+1}. nimi:`))
}
osallistujat.sort()

//Lisätään sivulle ol elementti ja annetaan sille id
let ordered_list = document.createElement("ol");
ordered_list.setAttribute("id", "lista");
document.getElementById("tuloste").appendChild(ordered_list);

//Lisätään rivejä ol listaan
for (let n = 0; n < osallistujat.length; n++) {
    let rivi = document.createElement("li");
    rivi.innerHTML = osallistujat[n];
    document.getElementById("lista").appendChild(rivi);
  }



/*
let rivit = [];

  for (let n = 0; n < osallistujat.length; n++) {
    rivit.push(`<li>${osallistujat[n]}</li>`)
  }


ei käytetä tätä
let tuloste = `<ul>${rivit}</ul>`;
*/
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
//document.querySelector('#tuloste').innerHTML = tuloste;