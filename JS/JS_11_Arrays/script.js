let array = [4, 1, 2, 3];

array.push(17);
array.push(199);
let summe = 0
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
  summe += array[index];
}

console.log(summe);