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
  if (isUser1) {
    console.log("Player 1's Turn");
  }

  while (!isFinished) {
    
    console.log("Row?");
    let inputRow = await readLineAsync();

    if (inputRow!= 0 && inputRow!= 1 && inputRow!= 2  ) {
      console.log("Wrong Row, please try again");
    } else {

    console.log("Column?");
    let inputColumn = await readLineAsync();

    if (inputColumn!= 0 && inputColumn!= 1 && inputColumn!= 2  ) {
      console.log("Wrong Column, please try again");
    } else {
   
    if (field[inputRow][inputColumn] != 0) {
      console.log("Place already in use, try again");
      
    } else {
    if (isUser1) {
      field[inputRow][inputColumn] = 1;

      isUser1 = false;
      console.log("Player 2's turn");
    } else if (!isUser1) {
      field[inputRow][inputColumn] = 2;

      isUser1 = true;
      console.log("Player 1's Turn");

    }
    printField();

    if (
      (field[0][0] === 1 && field[0][1] === 1 && field[0][2] === 1) ||
      (field[1][0] === 1 && field[1][1] === 1 && field[1][2] === 1) ||
      (field[2][0] === 1 && field[2][1] === 1 && field[2][2] === 1) ||
      (field[0][0] === 1 && field[1][0] === 1 && field[2][0] === 1) ||
      (field[0][1] === 1 && field[1][1] === 1 && field[2][1] === 1) ||
      (field[0][2] === 1 && field[1][2] === 1 && field[2][2] === 1) ||
      (field[0][0] === 1 && field[1][1] === 1 && field[2][2] === 1) ||
      (field[0][2] === 1 && field[1][1] === 1 && field[2][0] === 1)
    ) {
      console.log("Player 1 wins!");
      isFinished = true;
    } else if (
      (field[0][0] === 2 && field[0][1] === 2 && field[0][2] === 2) ||
      (field[1][0] === 2 && field[1][1] === 2 && field[1][2] === 2) ||
      (field[2][0] === 2 && field[2][1] === 2 && field[2][2] === 2) ||
      (field[0][0] === 2 && field[1][0] === 2 && field[2][0] === 2) ||
      (field[0][1] === 2 && field[1][1] === 2 && field[2][1] === 2) ||
      (field[0][2] === 2 && field[1][2] === 2 && field[2][2] === 2) ||
      (field[0][0] === 2 && field[1][1] === 2 && field[2][2] === 2) ||
      (field[0][2] === 2 && field[1][1] === 2 && field[2][0] === 2)
    ) {
      console.log("Player 2 wins!");
      isFinished = true;
    }}}}
  }

  readline.close();
})(); // () dient dazu die async Funktion zu starten.
