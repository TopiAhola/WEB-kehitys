'use strict';
let moduuli = "Moduuli 2";
let tehtava = "Tehtävä 6";
let tehtavananto = `
Write a function that returns a random dice roll between 1 and 6. The function should not have any parameters. 
Write a main program that rolls the dice until the result is 6. The main program should print out the result of 
each roll in an unordered list (ul). (2p)
`
//Funktio:
function roll_die(){
  let var_roll = Math.floor(Math.random() *6 +1);
  return var_roll;
}


//Tehdään ul lista id="roll_ul"
let roll_ul = document.createElement("ul");
roll_ul.setAttribute("id", "roll_ul");
document.getElementById("tuloste").appendChild(roll_ul);

//Heataan nopan arvo funktiosta ja laitetaan lapsielementtejä listaan:

let roll;
while (roll !== 6) {
  roll = roll_die();
  let roll_li = document.createElement("li");
  roll_li.innerHTML = roll;
  document.getElementById("roll_ul").appendChild(roll_li);
  
}




//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
