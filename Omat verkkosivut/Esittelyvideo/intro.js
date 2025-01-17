let video1 = document.getElementById("video1");
let pause_button = document.getElementById("pause");
let play_button = document.getElementById("play");

pause_button.addEventListener('click', pause_function)
play_button.addEventListener("click", play_function)

if (video1.muted) {console.log("Video is muted")}

function pause_function() {
    video1.pause()
    console.log("pause_function")}

function play_function() {
    video1.play()
    console.log("play_function")}
