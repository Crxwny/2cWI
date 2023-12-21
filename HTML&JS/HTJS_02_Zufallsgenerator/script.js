function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Generator() {
  let num1 = parseInt(document.getElementById("number1").value);
  let num2 = parseInt(document.getElementById("number2").value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  }

  let randomNum = getRandomNumber(num1, num2);

  console.log(randomNum);

  document.getElementById("result").innerHTML =
    "A random number between " + num1 + " and " + num2 + " is " + randomNum;
}
