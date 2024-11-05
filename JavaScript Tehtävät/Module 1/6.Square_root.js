/*
Write a program that prints the text "Should I calculate the square root?" in a confirmation window.
If the user selects OK, the program asks for the number and calculates and prints its square root to the HTML document.
If the user selects Cancel, the program prints the text "The square root is not calculated." to the HTML document (3p)

The confirmation window can be displayed with the function confirm(). The function returns true if the user selects OK.
If the user selects Cancel, the function returns false. You cannot calculate the square root of a negative number.
If the number entered by the user is negative, the program prints "The square root of a negative number is not defined"
to the HTML document.

*/

let calculate_bool = confirm("Should I calculate the square root?")
let tuloste;

if (calculate_bool === false) {tuloste = "The square root is not calculated." }
else {
    let number = prompt("Give number: ")
    if (number < 0) {tuloste = "The square root of a negative number is not defined" }
    else {
        let square_root = Math.sqrt(number).toFixed(3);
        tuloste = `Square root of ${number} is ${square_root}.`
    }
}





document.querySelector('#tulostusalue1').innerHTML = tuloste;