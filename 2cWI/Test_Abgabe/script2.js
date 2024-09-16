const data2 = "Hans ist ein netter Kerl H";
// Gib obigen Text aus
console.log("Aufgabe 1");
console.log(data2);
// Lösche folgende Buchstaben; a e
console.log("Aufgabe 2");
let woerter = data2.split("");

for (let index = 0; index < woerter.length; index++) {
  if (woerter[index] !== "a" && woerter[index] !== "e") {
    console.log(woerter[index]);
  }
}

let woerter2 = [
    " ",
  "H",
  "n",
  "s"," ",
  "i",
  "s",
  "t", " ",
  "i",
  "n", " ",
  "n",
  "t",
  "t",
  "r", " ",
  "K",
  "r",
  "l", " ", "H"
];

// Vervierfache folgende Buchstaben: H
console.log("Aufgabe 3");
for (let index = 0; index < woerter2.length; index++) {
  if (woerter2[index] == "H") {
    woerter2[index] += "H";
    woerter2[index] += "H";
    woerter2[index] += "H";
    

    
  }
  console.log(woerter2[index]);
}

// HHHHns ist in nttr Krl HHHH
