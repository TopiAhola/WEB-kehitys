'use strict';
let moduuli = "Moduuli 4";
let tehtava = "Tehtävä 5";
let tehtavananto = `
Make an app that retrieves a random Chuck Norris joke and displays it in the console. (2p)
API to use: chucknorris.io
Send a request to https://api.chucknorris.io/jokes/random and print only the joke to the console (that would be the 'value' property)
No need to add a form.

`
//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;


//osoite : https://api.chucknorris.io/jokes/random
//query : https://api.tvmaze.com/search/shows?q=hakusana
//

let lomake = document.getElementById("lomake");
let nappula = lomake.addEventListener("submit", submit_funktio);

async function submit_funktio() {
  console.log("Submit funktio")
  event.preventDefault()

  let hakusana = document.getElementById("hakukentta").value;
  console.log(hakusana);

  let query =`https://api.chucknorris.io/jokes/random`
  try {
    let vastaus = await fetch(query);
    console.log(vastaus);
    let vastaus_json = await vastaus.json();
    //Vitsin sisältö on vastaus_json.value
    console.log(vastaus_json.value);
    document.getElementById("tuloste").innerHTML = `Vastaus haettu konsoliin. Myös tässä: ${vastaus_json.value}`;

  }
  catch (error) {
    console.log(error.message);
  }
}


