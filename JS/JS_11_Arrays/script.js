let array = [4, 1, 2, 3];

array.push(17);
array.push(199);
let summe = 0;
let mittelwert = 0;
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
  summe += array[index];
  mittelwert += array[index] / array.length;
}

console.log(summe);
console.log(mittelwert);

let stringArray = ["Susi", "Paula", "Hans"];

stringArray.push("Sepp");

for (let index = 0; index < stringArray.length; index++) {
  console.log(
    "Meine Freunde sind " +
      stringArray[0]+
      ", " +
      stringArray[1] +
      ", " +
      stringArray[2] +
      " und " +
      stringArray[3]
  );
}
