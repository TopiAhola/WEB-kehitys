'use strict';
let moduuli = "Moduuli 4";
let tehtava = "Tehtävä 2";
let tehtavananto = `
Develop the app further.
Add JavaScript that gets the value entered to the form and sends a request with fetch to https://api.tvmaze.com/search/shows?q=${value_from_input}. Print the search result to the console. (3p)
`




//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
