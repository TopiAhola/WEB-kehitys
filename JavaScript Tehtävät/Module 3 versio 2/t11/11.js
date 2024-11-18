'use strict';
const picArray = [
  {
    title: 'Title 1',
    caption: 'Caption 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'img/pic1.jpg',
      medium: 'thumbnails/pic1.jpg',
    },
  },
  {
    title: 'Title 2',
    caption: 'Caption 2',
    description:
      'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    image: {
      large: 'img/pic2.jpg',
      medium: 'thumbnails/pic2.jpg',
    },
  },
  {
    title: 'Title 3',
    caption: 'Caption 3',
    description:
      'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    image: {
      large: 'img/pic3.jpg',
      medium: 'thumbnails/pic3.jpg',
    },
  },
  {
    title: 'Title 4',
    caption: 'Caption 4',
    description:
      'Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    image: {
      large: 'img/pic4.jpg',
      medium: 'thumbnails/pic4.jpg',
    },
  },
  {
    title: 'Title 5',
    caption: 'Caption 5',
    description:
      'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. ',
    image: {
      large: 'img/pic5.jpg',
      medium: 'thumbnails/pic5.jpg',
    },
  },
  {
    title: 'Title 6',
    caption: 'Caption 6',
    description:
      'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh.',
    image: {
      large: 'img/pic6.jpg',
      medium: 'thumbnails/pic6.jpg',
    },
  },
  {
    title: 'Title 7',
    caption: 'Caption 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'img/pic7.jpg',
      medium: 'thumbnails/pic7.jpg',
    },
  },
  {
    title: 'Title 8',
    caption: 'Caption 8',
    description:
      'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. ',
    image: {
      large: 'img/pic8.jpg',
      medium: 'thumbnails/pic8.jpg',
    },
  },
  {
    title: 'Title 9',
    caption: 'Caption 9',
    description:
      'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. ',
    image: {
      large: 'img/pic9.jpg',
      medium: 'thumbnails/pic9.jpg',
    },
  },
];

// add your code here
//Continue task 5. Folder t11 already exists. Follow the instructions in t11.txt. Modify the program to open large image in a modal when <article> is clicked. (6p)
// kick yourself at this point if you used innerHTML to create the <article> and its content.
// add the following html code between </div> and </body> manually to the HTML-document (no JS)
// <dialog>
//    <span>&#x2715;</span>
//    <img>
// </dialog>
// picArray has two images for each item: medium and large. Medium is used in the <img> inside the <article> and large is used in the <img> inside the <dialog>.
// use showModal() and close() functions to show and hide <dialog>
// the same time you are opening the modal, you should put the large image to the <img> in the modal.
// Don't forget to add alt attribute.
// use <span> inside <dialog> to close the modal.

let target = document.getElementById("pictures");

//Tehdään i määrä artikkeleita:
for (let i = 0; i < 3; i++) {

  //Otetaan satunnaisia artikkeleita picarraysta:
  let pic_nro = Math.floor(Math.random() * picArray.length)
  console.log(pic_nro)
  //Tehdään artikkeli:
  let new_article = document.createElement("article");
  new_article.setAttribute("class", "card");
  new_article.setAttribute("pic_nro", `${pic_nro}`)

  //Tehdään heading:
  let new_heading = document.createElement("h2");
  new_heading.innerText = picArray[pic_nro]["title"];
  new_article.appendChild(new_heading);
  //Figure:
  let new_figure = document.createElement("figure");

  let new_image = document.createElement("img");
  new_image.src = picArray[pic_nro]["image"]["medium"];
  new_image.alt = picArray[pic_nro]["title"];
  new_figure.appendChild(new_image);

  let new_figcaption = document.createElement("figcaption");
  new_figcaption.innerText = picArray[pic_nro]["caption"];
  new_figure.appendChild(new_figcaption);

  new_article.appendChild(new_figure);

  //Teksti:
  let new_text = document.createElement("p");
  new_text.innerText = picArray[pic_nro]["description"];
  new_article.appendChild(new_text);

  //Syötetään script joka avaa ison kuvan.
  //let new_script = document.createElement("script");
  //new_script.inne

  //Syötetään Artikkeli
  target.appendChild(new_article);
}



//Fuktiot ison kuvan avaamiseksi ja sulkemiseksi:

function showModal(event) {
  //Haetaan klikatun artikkelin numero:
  console.log("showModal ajettu")
  console.log(event);
  console.log(event.target.closest(".card"));
  let card_target = event.target.closest(".card");
  let pic_nro_local = card_target.getAttribute("pic_nro");
  console.log(pic_nro_local);
  //Laitetaan dialogiin artikkelin iso kuva
  dialog_image.src = picArray[pic_nro_local]["image"]["large"];
  dialog_image.alt = picArray[pic_nro_local]["caption"];
  dialogi.style.display = "block";
}

function close () {
  console.log("close ajettu");
  dialogi.style.display = "none";
}

//Määritellään dialogi
let dialogi = document.getElementsByTagName("dialog")[0];
let dialog_image = dialogi.querySelector("img");
dialog_image.setAttribute("src", "");

//Tehdään sulkemisnappula:
let close_button = dialogi.querySelector("span");
close_button.style.cursor = "pointer";
close_button.addEventListener("click", close);


//Toistorakenne hakee kaikki artikkelit ja luo nappulat joita klikata:
let nappulat = [];
let cards = document.querySelectorAll(".card");
console.log(cards);
for (let card of cards) {
  let card_pic_nro = card.getAttribute("pic_nro");
  console.log(card_pic_nro);
  //tehdään nappula jolla on numero:
  card.addEventListener("click", showModal);
  nappulat.push(card);
}







