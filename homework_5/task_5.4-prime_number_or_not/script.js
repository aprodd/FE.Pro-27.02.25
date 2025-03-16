let num = +prompt('Введіть число:');
let isPrime = num > 1;

for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    isPrime *= false;
  } else {
    isPrime *= true;
  }
}

alert(`${num} - ${isPrime ? 'просте':'не просте'} число.`);
