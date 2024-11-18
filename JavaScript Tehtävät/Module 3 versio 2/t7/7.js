//Open t7 folder in your IDE/editor. Make a hover effect with JavaScript. (2p)
// when user mouses over <p id="trigger"> change the picture of <img id="target"> form picA.jpg to picB.jpg
// when user mouses off, change the picture back to original

let target = document.getElementById("target");
let trigger = document.getElementById("trigger");
trigger.addEventListener("mouseout", image1);
trigger.addEventListener("mouseover", image2);

function image1() {
  console.log("mouseout");
  target.src = `img/picA.jpg`;
}


function image2() {
  console.log("mouseover");
  target.src = `img/picB.jpg`;
}