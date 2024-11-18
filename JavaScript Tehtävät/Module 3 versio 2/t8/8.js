//Open t8 folder in your IDE/editor. Make a simple calculator. (4p)
// There are two input fields where user enters numbers. Based on the drop-down list, calculator performs addition, subtraction, multiplication or division of these two numbers.
// Use the value attribute of <option> elements to decide which operation the calculator needs to do. Example.
// Show the result in <p id="result"> when the button is clicked.

let operation;
let result;

let nappula = document.getElementById("start");
nappula.addEventListener("click", funktio) ;

function funktio(event){
  //Tarvitaanko tätä? :
  //event.preventDefault();

  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  operation = document.getElementById("operation").value;
  //testituloste:
  //document.getElementById("result").innerText = operation + num1 + num2 ;

  if (operation === "add") {
    result = num1 + num2;
  }
  else if (operation === "sub") {
    result = num1 - num2;
  }
  else if (operation === "multi") {
    result = num1 * num2;
  }
  else if (operation === "div") {
    result = num1 / num2;
  }
  else {console.log("Operation error")
  result = "Operation error";
  }

  //pyöristys ja tulostus:
  result = result.toFixed(3);
  document.getElementById("result").innerText = result;

}