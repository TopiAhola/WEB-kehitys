/*


*/


'use strict';

//Tulostetestejä:
const tuloste = "tulostetaan tämä";
document.querySelector('#tulostusalue1').innerHTML = tuloste;


//For testejä:
let lista = ["a","B", "c"];

console.log(lista);

for (const elementti of lista) {
  console.log(elementti);
}

for (const avain in lista) {
  console.log(avain);
}



//TEstataan nappulaa:
let nappula = document.querySelector ('.button');
//nappula.addEventListener('click', funktio1);
//function funktio1() {console.log("Nappulaa klikattu1")}

//nappula.addEventListener('click', function() {console.log("Nappulaa klikattu2") });

nappula.addEventListener("click", () => {console.log("Nappulaa klikattu3"); });



//Reagoidaan hiiren liikkeeseen:
document.addEventListener('mousemove', function(event) {
  console.log(event);
  let tuloste2 = `Hiiren koordinaatit: ${event.clientX}, ${event.clientY}`;
  document.querySelector('#tulostusalue2').textContent = tuloste2;
});

//Reagoidaan näppäimistöön: Toimii!
document.addEventListener('keypress', function(event) {
  console.log (event);
  if (event.key === 'a') {console.log("Nappulaa a painettu")}
  });