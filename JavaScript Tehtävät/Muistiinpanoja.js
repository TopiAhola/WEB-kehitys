//

//'use strict' pakottaa määrittelemään muuttujien tyypin alustaessa
'use strict';


//Tulostetaan konsoliin
console.log("Im printing to console");
//Ponnahdusikkuna
alert("ponnahdusikkuna!");

//Määritellään vakio tuloste ja muuttuja tuloste2
const tuloste = "tulostetaan tämä";
let tuloste2 = "AAAA!"

//Laitetaan tuloste kappaleeseen jonka id on "tulostusalue"
document.querySelector('#tulostusalue').innerHTML = tuloste;


// .querySelector metodi etsii elementin id perusteella:
// määritellään haku = elementti jonka id=joku_id
let muuttuja = document.querySelector('#joku_id')

//.innerHTML toimii myös muuttujille!
let muuttuja2 = false
muuttuja.innerHTML = "Jotain tekstiä";
muuttuja.innerHTML = muuttuja2;
// Mitä kaikkea innerHTML tekee?

//Pyydetään käyttäjältä syöte, laitetaan se muuttujaan name
name = prompt('What is your name?');

// Laita muuttuja name stringin sisään.
let greeting = `Hello ${name}`;