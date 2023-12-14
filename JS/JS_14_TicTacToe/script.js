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

  let field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  printField();

  function printField() {
    for (let row = 0; row < field.length; row++) {
      let actualRow = field[row];
      let output = "";
      for (let column = 0; column < actualRow.length; column++) {
        let sign = " ";
        if (actualRow[column] == 1) {
          sign = "X";
        } else if (actualRow[column] == 2) {
          sign = "O";
        }
        output += sign + " | ";
      }
      console.log(output);
    }
  }

  let isFinished = false;
  let isUser1 = true;

  while (!isFinished) {
    console.log("Reihe?");
    let inputRow = await readLineAsync();

    console.log("Spalte?");
    let inputColumn = await readLineAsync();

    if (isUser1) {
      field[inputRow][inputColumn] = 1;

      isUser1 = false;
      console.log("Spieler 2, du bist dran");
    } else {
      field[inputRow][inputColumn] = 2;

      isUser1 = false;
      console.log("Spieler 1, du bist dran");
    }
    printField();

    
  }

  readline.close();
})(); // () dient dazu die async Funktion zu starten.
