const buttonAdd = document.querySelector('#btn_add');
const input = document.querySelector('input');
const list = document.querySelector('ul');
const buttonDel = document.createElement('button');
const li = document.createElement('li');

list.addEventListener('click', (event) => {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }    
});

buttonAdd.addEventListener('click', () => {
    const li = document.createElement('li');
    const buttonDel = document.createElement('button');

    li.innerText = input.value;
    list.appendChild(li);
    li.appendChild(buttonDel);
    buttonDel.innerText = 'Видалити';
    input.value = '';

    buttonDel.addEventListener('click', () => {
        list.removeChild(li);
    });
});
