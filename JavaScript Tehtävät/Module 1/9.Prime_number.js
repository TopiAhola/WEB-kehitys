/*
Write a program that asks the user for an integer and tells if the number is a prime number. (2p)

Prime numbers are numbers that are only divisible by 1 and itself.
For example, number 13 is a prime number as it can only be divided by 1 or 13 so that the result is an integer.
On the other hand, number 21 for example is not a prime number as it can be also be divided by numbers 3 and 7.
Print the result on the HTML document.

*/
'use strict';

let raw_number = parseInt(prompt("Give integer: "));
let number = Math.abs(raw_number);
let prime_bool = true;

for (let n = 2; n < number; n++) {

  if (number % n === 0) {
    prime_bool = false;
    break
  }

}
let tuloste;
if (prime_bool === false) {tuloste = `Number ${raw_number} is not a prime.`
}
else {tuloste = `Number ${raw_number} is a prime.`
}


document.querySelector('#tulostusalue1').innerHTML = tuloste;