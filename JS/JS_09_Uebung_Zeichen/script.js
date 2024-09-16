// Task 1
for (let index = 0; index < 4; index++) {
  if (index % 2 == 0) {
    console.log("XXXX");
  }
  if (index % 2 != 0) {
    console.log("OOOO");
  }
}

// Task 2
let sum = 0;

for (let nejo = 1; nejo <= 100; nejo++) {
  if (nejo % 2 === 0) {
    sum += nejo;
  }
}

console.log(sum);

// Task 3

let meinArray = ["Mein Vater sagt mir tolle Sachen"];

let satz = meinArray[0]
let woerter = satz.split(" ");

for (let index = 0; index < woerter.length; index++) {
    if (index %2 !== 0) {
        console.log(woerter[index]);

    }
    
}

// Task 4

let meinArray2 = [4, 3, 2, 4, 3, 4];

let vierer = 0

for (let index = 0; index < meinArray2.length; index++) {
    if (meinArray2[index] == 4) {
        vierer++;
    }
    
}

console.log(vierer);

