let arr = [10, 20, 30, null, 'str', 40, undefined, 50];

function average() {
    let sum = 0;
    let count = 0;

    for(i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number') {
        sum += arr[i];
        count++;
        }
    }
    return sum / count;
}

average();
