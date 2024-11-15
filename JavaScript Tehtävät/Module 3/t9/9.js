//Open t9 folder in your IDE/editor. This is continuation to previous task.
// There is only one text field left, where the user writes the calculation (addition, subtraction, multiplication or division) (4p)
// You can use the includes and split methods.
// eval() function is prohibited
// No need to support decimal numbers, calculating integers is enough.
// Example inputs: 3+5, 2-78, 3/6, etc...

let nappula = document.getElementById("start");
nappula.addEventListener("click", funktio) ;


function funktio() {
  let calculation = document.getElementById("calculation").value;
  let calculation_string= calculation.toString().trim();

  //Havaitaan laskutoimitus:
  let operation;
  if (calculation_string.includes("+")) {operation = "add"}
  if (calculation_string.includes("-")) {operation = "sub"}
  if (calculation_string.includes("*")) {operation = "multi"}
  if (calculation_string.includes("/")) {operation = "div"}

  //Tehdään oikea laskutoimitus ja splitataan numerot:
  if (operation === "add") {
    let numbers = calculation_string.split("+");
    result =  parseFloat(numbers[0]) + parseFloat(numbers[1]);
  }
  else if (operation === "sub") {
     let numbers = calculation_string.split("-");
    result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
  }
  else if (operation === "multi") {
     let numbers = calculation_string.split("*");
    result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
  }
  else if (operation === "div") {
     let numbers = calculation_string.split("/");
    result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
  }
  else {console.log("Operation error")
  result = "Operation error";
  }

  document.getElementById("result").innerText = result;

}