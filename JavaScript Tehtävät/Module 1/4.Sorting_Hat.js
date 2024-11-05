/*
In the Harry Potter children's books, the sorting hat assigns a new student at Hogwarts School of W
itchcraft and Wizardry to one of the four classes, which are Gryffindor, Slytherin, Hufflepuff, and Ravenclaw.
 Write an electronic sorting hat that asks for a student's name and draws a room for him.
 If you enter Anna as the name, for example, the program prints to the HTML document "Anna, you are Ravenclaw." (3p)

Use math.random() to draw a value (1, 2, 3 or 4)
Once the number is drawn, you need to use a multiple choice structure (if, else if, ..., else or switch).

*/


'use strict';

let name = prompt('What is your name?');
//Satunnainen kokonaisluku väliltä 1-4
let number = Math.floor(Math.random() * 4 + 1 );
let student_class;

if (number == 1) {student_class = "Gryffindor"};
if (number == 2) {student_class = "Slytherin"};
if (number == 3) {student_class = "Hufflepuff"};
if (number == 4) {student_class = "Ravenclaw"};



let tuloste = `${name}, you are ${student_class}.`;
document.querySelector('#tulostusalue1').innerHTML = tuloste;