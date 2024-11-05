//Write a program that prompts for user's name and then greets the user.
// Print the result to the HTML document: Hello, Name! (2p)



'use strict';

name = prompt('What is your name?');
document.querySelector('#tulostusalue2').innerHTML = "Hello "+name+"!";

