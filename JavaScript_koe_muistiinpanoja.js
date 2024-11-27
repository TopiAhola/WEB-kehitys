'use strict'; //Pakottaa määrittelemään muuttujien tyypin

//HTML tiedostossa JavaScript laitetaan joko suoraan <script></script>
//-elementin sisää tai mielummin ulkoiseen tiedostoon:

<script src="JavaScript_Muistiinpanoja.js" defer></script>
//defer jättää scriptin suorittamisen viimeiseksi, vasta kun HTML sivu on ladannut.
//Muuten script voidaan ajaa ennen kun sen kohde-elementit on luotu!

//Rivit pitää päättää joko puolipisteeseen ; tai olla sulkeiden sisällä }
//Yksittäinen rivi voi päättyä puolipisteeseen vaikka olisi funktio tai ehto
//joissa yleensä käytetään {} aaltosulkeita.

//Tapoja valita HTML elementti:
document.querySelector('#tulostusalue'); //Valitsee css selector arvon perusteella ensimmäisen vastaavan elementin.
document.querySelectorAll('p'); //Valitsee kaikki kappaleet p
document.getElementById('tulostusalue');
document.getChild(index); // valitsee elementin sisällä olevan lapsen numeron perusteella

console.log(element.innerText); //Tulostaa elementin tekstin konsoliin.

//Elementtien muokkaaminen:

element.appendChild(child_element);  //Lisää lapsielementin elementin sisään.
element.innerText = "teksti"  //Asettaa elementin teksint
element.innerHTML = "HTML kieltä" //Asettaa HTML kieltä elementin sisään. Voi lisätä lapsielementtejä.
element.setAttribute('src', 'laurea.png'); //Asettaa attribuutin "src" arvoksi "laurea.png".

//Koealueen asioita:

//API = application programming interface
//AJAX = asychronous JavaScript and XML

//Async funktio:
async function get_poor_joke() {
  let query = `https://api.chucknorris.io/jokes/search?query=poor`;
  let response = await fetch(query);
  let response_message = await response.json()
  console.log(response_message)
}

//DOM -Document object model BOM -Browser object model

//-Elementit, niiden attribuutit ja sisältö(teksti) ovat "nodeja"

//CSS muokkaus:
//style näköjään ottaa css kielen stringin...

document.querySelector('#paragraph').style = "color: #eee; background-color: #222; padding: 3rem;";

//Arrayt ja Object literalit:

let array = []
let obj_literal = {"avain" : "arvo", "avain2" : 5}

array.length //antaa arrayt pituuden numerona

//Arrayn metodit:
sort() //sorts the array alphabetically
reverse() //reverses the items in the array in reverse order
shift() //deletes and returns the 1st item in the array
pop() //deletes and returns the last item in the array
push(value) //adds the value at the end of the array, multiple values separated by commas
includes(value) //checks whether the array contains the given value

//Arrayn looppaaminen:

for (let i=0; i<array.length; i++) {"Iteroi i arvon perusteella. " }
for (let arvo of array) {"Käy läpi arrayn arvot" }
for (let avain in array) {"Käy läpi arrayn avaimet"};

//Object literalin muokkaaminen
let obj_literal = {"avain" : "arvo", "avain2" : 5};

delete obj_literal.avain2;      //deletoi avain2 -parin
obj_literal.avain3 = "arvo3";   //lisää avain3-arvo3 -parin.

console.log(obj_literal["avain2"])  //tulostaa numeron 5
console.log(obj_literal.avain2)     //Sama juttu


//Yleisiä

const vakio = `vakio, arvo voidaan määritellä vain kerran, paitsi jos on 
array tai object literal. Arrayta voi muokata metodeilla.
Literalin arvoja voi "mutatoida" eli muokata`

let muuttuja = `muuttuja, arvoa voi muokata `

var vari = `vanha merkintätapa`


//Ehtorakenteet
let a = 5;
if (a > 10) {}

if (a==0) {"a on 0"}
if (a!=0) {"a ei ole 0"}

// OR merkitään pystyviivoilla ||
if ( a>10 || a<1) {"a ei ole välillä 10-1"}
// AND merkitään: &&
if (a <= 10 && a>1) {"a on välillä 10-2"}
// negaatio merkitään !
//tässä tapauksessa negaatio tehdää sulkujen sisällä olevalle ehdolle
if (!(a>10)) {console.log("a ei ole isompi kuin 10")}

// == vertaa arvoja välittämättä datatyypistä
// === vaatii tyyppien yhtäläisyyden, eli string === string

// if - else if - else

if (a > 10) {
  "jos a on yli 10"
} else if (a>9) {
  "jos a on yli 9"
} else {"kaikki muut tapaukset"
"else on vapaaehtoinen, se tarvitaan vain jos halutaan joku reaktio kaikissa tapauksissa"
}

//Toistorakenteita
let b = 0;

while (b<10) {b++  } //while ehto rakenteen alussa sallii ohittamisen jos ehto on tosi jo aluksi

do { b++ } while (b<10); //do-while-rakenne suoritetaan vähintään kerran

//for silmukoita on erilaisia
for (let i=0; i<array.length; i++) {"Iteroi i arvon perusteella. " }
for (let arvo of array) {"Käy läpi arrayn arvot" }
for (let avain in array) {"Käy läpi arrayn avaimet"};
