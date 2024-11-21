'use strict';
let moduuli = "Moduuli 4";
let tehtava = "Tehtävä 6";
let tehtavananto = `
Develop the app further (4p).
Now add a form where you can enter a search term like in assignments 1-3
Send the search term to https://api.chucknorris.io/jokes/search?query=$value_from_input using fetch()
Print each joke in this format:
<article
    <pJoke here<p
</article

`
//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;


//osoite : https://api.chucknorris.io/jokes/
//query : https://api.chucknorris.io/jokes/search?query=${hakusana}
// sisältö on [result][ohjekti_numero][value]

let lomake = document.getElementById("lomake");
let nappula = lomake.addEventListener("submit", submit_funktio);

async function submit_funktio() {
  console.log("Submit funktio")
  event.preventDefault()

  let hakusana = document.getElementById("hakukentta").value;
  console.log(hakusana);

  let query =`https://api.chucknorris.io/jokes/search?query=${hakusana}`
  console.log(query)

  try {
    let vastaus = await fetch(query);
    let vastaus_json = await vastaus.json();
    //Vitsin sisältö on vastaus_json.value
    console.log(vastaus_json)
    console.log(vastaus_json["result"][0]["value"]);

    let artikkeli = document.createElement("article");
    for (let n = 0; n < vastaus_json["result"].length; n++) {
      let joke = document.createElement("p");
      joke.innerText = `${vastaus_json["result"][n]["value"]}`
      artikkeli.appendChild(joke);
    }

    document.getElementById("tuloste").appendChild(artikkeli);

  }
  catch (error) {
    console.log(error.message);
  }
}


