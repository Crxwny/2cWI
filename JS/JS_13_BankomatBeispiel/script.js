let balance = 0;
let selection = {};



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

console.log("Selektieren Sie die gewünschte Funktion");
console.log("1. Einzahlen");
console.log("2. Abheben");
console.log("Beenden");
let inputOfUser = await readLineAsync();
console.log("Your name is " + inputOfUser);

 inputOfUser = await readLineAsync();
console.log("Your name is " + inputOfUser);

readline.close();