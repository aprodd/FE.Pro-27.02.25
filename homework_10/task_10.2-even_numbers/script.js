let arr = [10, 21, 32, 43, 54];
let newArr = [];

arr.forEach(function (item) {
    if(item % 2 === 0) {
        newArr.push(item);
    }
});

newArr;

