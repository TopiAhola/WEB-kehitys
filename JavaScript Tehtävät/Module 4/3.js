'use strict';
let moduuli = "Moduuli 4";
let tehtava = "Tehtävä 2";
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


/*
  // When the form is submitted...
  const airportForm = document.querySelector('#airport-form')
  airportForm.addEventListener('submit', async function(evt) {
  // ... prevent the default action.
  evt.preventDefault();
  // get value of input element
  const code = document.querySelector('input[name=icao]').value;
  try {                                               // error handling: try/catch/finally
  const response = await fetch(`http://127.0.0.1:3000/airport/${code}`);    // starting data download, fetch returns a promise which contains an object of type 'response'
  const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
  console.log(jsonData.ICAO, jsonData.Name);    // log the result to the console
} catch (error) {
  console.log(error.message);
}
});

*/
