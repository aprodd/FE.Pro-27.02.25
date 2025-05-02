const containerBtn = document.querySelector('.btn_wrapper');
const btn1 = document.getElementById('btn_1');
const btn2 = document.getElementById('btn_2');
const btn3 = document.getElementById('btn_3');

containerBtn.addEventListener('click', (event) => {
    // const targetID = event.target.id;

    // if(targetID === 'btn_1') {
    //     alert('Клікнуто на кнопці: Кнопка 1');
    // }
    // if(targetID === 'btn_2') {
    //     alert('Клікнуто на кнопці: Кнопка 2');
    // }
    // if(targetID === 'btn_3') {
    //     alert('Клікнуто на кнопці: Кнопка 3');
    // }
    if(event.target.tagName === 'BUTTON') {
        alert(`Клікнуто на кнопці : ${event.target.textContent}`)
    }
})