const data1 = "14,3,12,8,9,11,4,3,2,4";
// Zähle jede 2te Zahl zusammen
// 14 + 12 + 9 +…

let sum = 0;
let numberString = data1.split(",")
let numbers = parseInt(numberString)
console.log(numberString);


for (let index = 0; index < 10; index++) {
  if (index % 2 == 0) {
    console.log("gut");
    sum+=parseInt(numberString[index])
  }
}
console.log(sum);

