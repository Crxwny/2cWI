let banana = "Banane";
let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let appleWeight = 0.34;
let bananaWeight = 0.22;

let amountOfBananas = 17;
let amountOfApples = 8;

let applePerKilo = 1 / 0.34;
let bananaPerKilo = 1 / 0.22;

let pricePerBanana = bananaPricePerKilo * bananaWeight;
let pricePerApple = applePricePerKilo * appleWeight;

console.log("Anzahl von Bananen: " + amountOfBananas);
console.log("Anzahl von Aepfeln: " + amountOfApples);
console.log("Aepfel pro Kilo: " + applePerKilo);
console.log("Bananen pro Kilo: " + bananaPerKilo);
console.log("Preis einer Banane: " + pricePerBanana);
console.log("Preis eines Aepfels: " + pricePerApple);
console.log("Preis für 8 Aepfel: " + pricePerApple * 8);
console.log("Preis für 17 Bananen: " + pricePerBanana * 17);
console.log("Preis für 1 Tonne Aepfel: " + applePricePerKilo * 1000);
console.log("Preis für 1 Tonne Bananen: " + pricePerBanana * 1000);
