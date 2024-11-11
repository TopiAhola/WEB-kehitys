'use strict';
let moduuli = "Moduuli 2";
let tehtava = "Tehtävä 3";
let tehtavananto = `
Write a program that asks for the names of six dogs. The program prints dog names
 to unordered list ul in reverse alphabetical order. (2p)
`


let koirat = [];

for (let n = 0; n < 6; n++) {
  koirat.push(prompt(`Anna koiran ${n+1}. nimi:`))
}
koirat.sort().reverse();

//Lisätään sivulle ul elementti ja annetaan sille id
let dog_list = document.createElement("ul");
dog_list.setAttribute("id", "lista");
document.getElementById("tuloste").appendChild(dog_list);

//Lisätään rivejä listaan
for (let n = 0; n < koirat.length; n++) {
    let rivi = document.createElement("li");
    rivi.innerHTML = koirat[n];
    document.getElementById("lista").appendChild(rivi);
  }





//const tuloste = "tulostetaan tämä";

//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
//document.querySelector('#tuloste').innerHTML = tuloste;