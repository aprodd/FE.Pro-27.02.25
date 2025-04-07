function calcNum () {
    let count = 0;

    return function res(num) {
        count += num;
        return count;
    }
}

let sum = calcNum();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));