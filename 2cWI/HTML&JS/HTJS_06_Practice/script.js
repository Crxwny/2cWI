function magicFormel() {
  console.log("Do the magic worked");
  let num1 = document.getElementById("heightValue").value;
  let num2 = document.getElementById("weightValue").value;

  if (num1 == "" || num2 == "") {
    console.log("Invalid Input, try again");

    document.getElementById("result").textContent = "Invalid";

    document.getElementById("result").style.color = "darkred";

    return;
  }

  let result = parseFloat((num1 * 1.43) / num2 - 3.4);

  if (result > 0) {
    document.getElementById("result").textContent = "Positiv";
    document.getElementById("result").style.color = "green";

    console.log("Positiv");
  } else if (result < 0) {
    document.getElementById("result").textContent = "Negativ";
    document.getElementById("result").style.color = "red";

    console.log("Negativ");
  } else {
    console.log("Invalid Input, try again");
    document.getElementById("result").textContent = "Invalid";
    document.getElementById("result").style.color = "darkred";
  }
}
