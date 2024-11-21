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


//for-of ja for-in
let lista = ["a","b","c"];

//Tulostaa listaobjektin
console.log(lista);

// for-of käy läpi listan arvot: a,b,c
for (const listaElement of lista) {
  console.log(listaElement);
}
// for-in käy läpi listan avaimet: 0,1,2
for (const listaKey in lista) {
  console.log(listaKey);
}
//for-i käy läpi i:n arvot määrätyllä välillä. Listaa käydä läpi i:n arvolla.
for (let i = 0; i < haluttu_määrä ; i++) {
  console.log(lista[i]);
}

//
document.querySelector ('#logo') // retrieves a single element from a document using the css selector. In this case with a certain id
document.querySelectorAll ('.button') // retrieves elements from a document using the css class selector. Palauttaa taulukon?
document.getElementById ('logo') // retrieves an element with a specific id from the document

// commands can also be aligned to the selected element:
element.getElementsByTagName ("p") // retrieves all p-elements from the selected element
element.appendChild (child) // add child node to element
element.removeChild (child) // removes the child node from the element

element.innerHTML // The HTML code contained in the element
element.innerText // The text contained in the element

//Change the value of an attribute:
<img id="logo" src="metropolia.png" alt="Some image">

<script>
document.getElementById('logo').src = 'laurea.png';                 // the attribute name is used as the property
document.getElementById('logo').setAttribute('src', 'laurea.png');  // or setAttribute() function for older browsers
</script>

//Havaintoja window:sta:
prompt()
//on window-elementin/ohjektin juttu:
window.prompt()
//Tämä muuttaa selainikkunan otsikkoriviä:
window.location.href = "https://www.google.fi"

/////////////////////////////////////////////////////////////////////////////////////

//Interaktiivisuudesta:
// klikkaustapahtuma ajaa funktion:
//Huomaa että funktiossa ei ole argumentteja
nappula.addEventListener('click', funktio1);

function funktio1() {console.log("Nappulaa klikattu")}

//Funktion voi myös kirjoittaa suoraan nimettömänä funktiona tai nuolifunktiona:
nappula.addEventListener('click', function() {console.log("Nappulaa klikattu") });
nappula.addEventListener("click", () => {console.log("Nappulaa klikattu"); });

//Selaimen konsoli kirjaa klikkaustapahtumasta lisää tietoja.
//Voivat olla olennaisia muissa tapahtumissa kuin klikkailussa.

//Kirjataan hiiren liike konsoliin ja tulostetaan hiiren koordinaatit sivulle:
document.addEventListener('mousemove', function(event) {
  console.log (event);
  document.querySelector('#tulostusalue2').textContent =`Hiiren koordinaatit: ${event.clientX}, ${event.clientY}`;
});

//Reagoidaan näppäimistöön: Toimii!
document.addEventListener('keypress', function(event) {
  console.log (event);
  if (event.key === 'a') {console.log("Nappulaa a painettu")}

});

// .addEvenListener on oikea tapa tehdä reaktiot. Vanhemman "onclick" -jutut on vanhentuneita

//Lomakkeista:
//Jos sivulla on lomake, selain lataa sivun uudestaan kun lomake lähetetään.
//Jos haluaa estää sivun päivityksen:
let form = document.querySelector ('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log (event);
})
// .preventDefault(); estää konsolia nollautumasta.

//Hyödyllinen tapa hakea:
//Hakee input elementin jonka name attribuutti on "icao"
let arvo = document.querySelector('input[name="icao"]').value;


//////////////////////////////////////////////////////////////////////////////////////
// Asynchronous fuctions

// .json() on asyncroninen ja vaatii await avainsanan. Response objektin pystyy kirjaamaan konsoliin
// ennen kun sen arvot on palautettu palvelimesta, mutta sen arvoja ei voi kutsua etukäteen.
// Siksi sekä fetch() ja .json() on await sanan jälkeen.

async function asynchronousFunction() {                 // asynchronous function is defined by the async keyword
        console.log('asynchronous download begins');
        try {                                               // error handling: try/catch/finally
            const response = await fetch('http://127.0.0.1:3000/airport/00A');    // starting data download, fetch returns a promise which contains an object of type 'response'
            const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
            console.log(jsonData.ICAO, jsonData.Name);    // log the result to the console
        } catch (error) {
            console.log(error.message);
        } finally {                                         // finally = this is executed anyway, whether the execution was successful or not
            console.log('asynchronous load complete');
        }
    }


////////////////////////////////////////////////////////////////////////////////