function fnLoop () {
    for (let i = 1; i <= 10; i++) {
        let num = +prompt('Введіть число більше 100');
        if(num < 100) {
            continue;
        } else {
            return num;
        }
    }
}

fnLoop();


