import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {
    readline.question("", (userRes) => {
      resolve(userRes);
    });
  });
};

(async () => {
  //async = definiert asynchronen Pfeilfunktionsausdruck, { } definiert eigentliche Funktion. asynchron = Code kann fortgesetzt werden, während Operationen im Hintergrund ausgeführt werden und das Ergebnis wird später behandelt wenn verfügbar
  let balance = 0;
  let isFinished = false;

  while (!isFinished) {
    console.log("Selektieren Sie die gewünschte Funktion:");
    console.log("1. Einzahlen");
    console.log("2. Kontostand");
    console.log("3. Abheben");
    console.log("4. Beenden");

    let inputOfUser = await readLineAsync();

    if (inputOfUser == 1) {
      console.log("Geben Sie den einzuzahlenden Betrag ein:");
      inputOfUser = await readLineAsync();
      balance += parseFloat(inputOfUser);
      console.log("Sie haben " + inputOfUser + "€ eingezahlt!");
    } else if (inputOfUser == 2) {
      console.log("Ihr Kontostand beträgt: " + balance + "€");
    } else if (inputOfUser == 3) {
      console.log("Geben Sie den abzuhebenden Betrag ein:");
      inputOfUser = await readLineAsync();
      balance -= parseFloat(inputOfUser);
      console.log("Sie haben " + inputOfUser + "€ abgehoben!");
    } else if (inputOfUser == 4) {
      console.log("Bankomat wird heruntergefahren");
      isFinished = true;
    } else {
      console.log("Ungültige Eingabe, bitte wählen Sie erneut!");
    }
  }

  readline.close();
})(); // () dient dazu die IIFE, also async Funktion zu starten.
