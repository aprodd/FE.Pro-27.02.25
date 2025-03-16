// Цикл while
let num = +prompt('Введіть число: ');
let i = 1;

while (i <= 100 && i * i <= num) {
    console.log(i);
    i++;
}

// Цикл do...while
let userNum = +prompt('Введіть число:');
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 100 && j * j <= userNum);

// Цикл for
let number = +prompt('Введіть число:');

for (let i = 1; i <= 100 && i * i <= number; i++) {
        console.log(i);
}
