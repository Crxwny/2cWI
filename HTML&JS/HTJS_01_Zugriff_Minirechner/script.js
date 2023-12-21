function Add() {
  console.log("Added");
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;
 
  let result = parseFloat(num1) + parseFloat(num2);
  if (result >= 0 || result <= 0) {
     updateResult(result);
  } else {
     console.log("Invalid Input, try again");
  }
 }
 
 function Subtract() {
  console.log("Subtraced");
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;
 
  let result = parseFloat(num1) - parseFloat(num2);
  if (result >= 0 || result <= 0) {
     updateResult(result);
  } else {
     console.log("Invalid Input, try again");
  }
 }
 
 function Multiply() {
  console.log("Multiplied");
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;
 
  let result = parseFloat(num1) * parseFloat(num2);
  if (result >= 0 || result <= 0) {
     updateResult(result);
  } else {
     console.log("Invalid Input, try again");
  }
 }
 
 function Divide() {
  console.log("Divided");
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;
 
  let result = parseFloat(num1) / parseFloat(num2);
  if (result >= 0 || result <= 0) {
     updateResult(result);
  } else {
     console.log("Invalid Input, try again");
  }
 }
 
 function updateResult(value) {
  document.getElementById("result").textContent = value;
 }