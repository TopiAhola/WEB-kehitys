'use strict';
let moduuli = "Moduuli 4";
let tehtava = "Tehtävä 4";
let tehtavananto = `
Develop the app even further. Optional chaining is not the best way to handle missing image. Use ternary operator or if/else to add a default image if TV-show is missing image property. (2p)
Use https://via.placeholder.com/210x295?text=Not%20Found as the default image.

`
//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;


//osoite
"https://api.tvmaze.com/search/shows"
//query:
// https://api.tvmaze.com/search/shows?q=hakusana
//kuva ["show"]["image"]["medium"]

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

    //Haetaan kuva ja korvataan not_found kuvalla jos ei ole kuvaa
    let hakukuva = document.createElement("img");
    hakukuva.setAttribute("alt", "hakukuva");

    if (vastaus_json[0]["show"]["image"]["medium"] !== null) {
      hakukuva.setAttribute("src",`${vastaus_json[0]["show"]["image"]["medium"]}`);
    }
    else {
      hakukuva.setAttribute("src",`not_found.png`);
    }

    document.getElementById("tuloste").appendChild(hakukuva);
    console.log(hakukuva)
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
