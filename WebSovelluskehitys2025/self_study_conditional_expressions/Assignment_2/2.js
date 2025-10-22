'use strict';
let moduuli = "Conditional expressions and loops";
let tehtava = "Assignment 2";
let tehtavananto = `
Write a program that calculates the distance between two points on a 2D plane and displays the result in an HTML document. 
The program should prompt the user for the coordinates of two points (x, y) and then calculate the Euclidean distance 
between them using the formula:
Distance = √((x2 - x1)^2 + (y2 - y1)^2)
In total, there will be four prompts to input the x and y coordinates for the two points.
You can do it also with fewer prompts if you use string methods like split().
3p
`


let x1 = prompt("Point 1 X coordinate: ")
let y1 = prompt("Point 1 Y coordinate: ")
let x2 = prompt("Point 2 X coordinate: ")
let y2 = prompt("Point 2 y coordinate: ")

let distance = Math.sqrt((Math.pow((x2-x1),2) ) + Math.pow((y2-y1),2) );

const tuloste = `Distance between points (${x1},${y1}) and (${x2},${y2}) is ${distance}`;

//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
document.querySelector('#tuloste').innerHTML = tuloste;