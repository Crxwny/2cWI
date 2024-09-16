function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function supercalculation(a, b) {
  return ((a + b) / 2) * a;
}

function printEasterDate(year) {
  let n = year - 1900;
  let a = n % 19;
  let b = (7 * a + 1) / 19;
  let m = (11 * a + 4 - b) % 29;
  let q = n / 4;
  let w = (n + q + 31 - m) % 7;
  let p = 25 - m - w;
  p = Math.ceil(p);
  if (p <= 0) {
    p = p + 31;
    console.log("Ostersonntag ist der " + p + ". März");
  } else {
    console.log("Ostersonntag ist der " + p + ". April");
  }
}

printEasterDate(2024);
