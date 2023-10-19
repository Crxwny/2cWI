let randomNumber = Math.floor(Math.random() * 6) + 5;

// Math.random gibt eine Zahl von 0 (inklusiv) - 1 (exklusiv) aus
// *6 macht das eine Zahl von 0 (inlusiv) - 6 (exklusiv) herauskommt
// Math.floor rundet die Zahl auf eine Ganzzahl auf
// + 5 gibt ihm einen Startwert von 5 und damit eine Zahl von 5 (inklusiv) - 11 (exklusiv),
//was widerum heißt, dass es eine Zahl von 5-10 ausgibt.

if ((randomNumber == 10)) {
  console.log("Ten");
}

if ((randomNumber == 9)) {
  console.log("Nine");
}

if ((randomNumber == 8)) {
  console.log("Eight");
}
if ((randomNumber == 7)) {
  console.log("Seven");
}
if ((randomNumber == 6)) {
  console.log("Six");
}
if ((randomNumber == 5)) {
  console.log("Five");
}
