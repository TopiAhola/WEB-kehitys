'use strict';
let moduuli = "Moduuli 4";
let tehtava = "Tehtävä 3";
let tehtavananto = `
Develop the app further.
Add JavaScript that gets the value entered to the form and sends a request with fetch to 
https://api.tvmaze.com/search/shows?q=$ {value_from_input}. Print the search result to the console. (3p)
`
//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;


//osoite
"https://api.tvmaze.com/search/shows"
//query:
// https://api.tvmaze.com/search/shows?q=hakusana

let lomake = document.getElementById("lomake");
let nappula = lomake.addEventListener("submit", submit_funktio);

async function submit_funktio() {
  console.log("Submit funktio")
  event.preventDefault()
  let hakusana = document.getElementById("hakukentta").value;
  console.log(hakusana);
  let query =`https://api.tvmaze.com/search/shows?q=${hakusana}`
  try {
    let vastaus = await fetch(query);
    let vastaus_json = await vastaus.json();
    console.log(vastaus_json);
    document.getElementById("tuloste").innerHTML = "Vastaus haettu konsoliin";

  }
  catch (error) {
    console.log(error.message);
  }
}

