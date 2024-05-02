const data3 = "4,9,-3,-9,-5,10,2,1,14";
// NImm alle positiven Zahlen und berechne den Mittelwert
let numbersdata3 = data3.split(",")
console.log(numbersdata3);
let summe = 0
let anzahl = 0
let summeNegativ = 0

for (let index = 0; index < numbersdata3.length; index++) {
    if (parseInt(numbersdata3[index]) > 0) {
        


        summe += parseInt(numbersdata3[index]);
        anzahl += 1;
        
    }
    
}
console.log("Summe ist " +summe);
console.log("Anzahl ist " + anzahl);
let mittelwert = summe / anzahl;
console.log("Mittelwert ist " +mittelwert);


// Ausserdem gib die Summe der negativen Zahlen aus
for (let index = 0; index < numbersdata3.length; index++) {
    if (parseInt(numbersdata3[index]) < 0) {
        


        summeNegativ += parseInt(numbersdata3[index]);
        
        
    }
    
}

console.log("Negative Summe ist " + summeNegativ);