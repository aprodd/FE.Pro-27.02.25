let num = prompt('Введіть трьохзначне число');
let arr = num.split('');

if (arr.length === 3) {
    // Чи правда, що всі цифри однакові?
    if (arr[0] === arr[1] && arr[1] === arr[2] && arr[2] === arr[0]) {
        console.log ('Вірно, усі числа одинакові');
    } else {
        console.log('Невірно, числа різні');
    }
    // Чи є серед цифр цифри однакові?
    if (arr[0] === arr[1] || arr[1] === arr[2] || arr[2] === arr[0]) {
        console.log('Є одинакові числа');
    } else {
        console.log('Немає одинакових чисел');
    }
} else {
    console.error('Помилка. Введіть трьохзначне число.');
}





