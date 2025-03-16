// Цикл while
let i = 10;
let valueDollar = 26;

while (i <= 100) {
    console.log(`${i} доларів - ${i * valueDollar} гривень.`);
    i += 10;
}

// Цикл do...while
let j = 10;
let dollarValue = 26;

do {
    console.log(`${j} доларів - ${j * dollarValue} гривень.`);
    j += 10;
} while (j <= 100);

// Цикл for
for (let i = 10; i <= 100; i += 10) {
    let valueDollar = 26;
    console.log(`${i} доларів - ${i * valueDollar} гривень.`);
}


