'use strict';
let moduuli = "Moduuli 2";
let tehtava = "Tehtävä 7";
let tehtavananto = `
Modify the function above so that it gets the number of sides on the dice as a parameter. 
With the modified function you can for example roll a 21-sided role-playing dice. 
The difference to the last exercise is that the dice rolling in the main program continues 
until the program gets the maximum number on the dice, which is asked from the user at the beginning. (2p)
`

//Funktio:
function roll_dice(sides){
  var var_roll = Math.floor(Math.random() *sides +1);
  return var_roll;
}

 //Tehdään ul lista id="roll_ul"
let roll_ul = document.createElement("ul");
roll_ul.setAttribute("id", "roll_ul");
document.getElementById("tuloste").appendChild(roll_ul);

//Pyydetään nopan sivut:
let dice_sides = parseInt(prompt("Give number of sides on the dice: "));

//Heataan nopan arvo funktiosta ja laitetaan lapsielementtejä listaan:
let roll;
while (roll !== dice_sides) {
  roll = roll_dice(dice_sides);
  let roll_li = document.createElement("li");
  roll_li.innerHTML = roll;
  document.getElementById("roll_ul").appendChild(roll_li);

}



//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
