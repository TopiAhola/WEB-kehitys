//Open t10 folder in your IDE/editor. Read the first name and last name values from the form and print them in the <p id="target"> (2p)
// remember to stop the default action of the form
// you can use attribute selectors in querySelector() to select the <input> elements
// example output: Your name is Luke Skywalker



let form = document.getElementById ('source');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log (event);

  let etunimi = document.querySelector('[name="firstname"]').value;
  let sukunimi = document.querySelector('[name="lastname"]').value;

  console.log (etunimi, sukunimi);
  document.getElementById("target").innerText = `Your name is ${etunimi} ${sukunimi}.`;


})

