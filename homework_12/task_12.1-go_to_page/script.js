const buttonGet = document.getElementById('btn_1');
const buttonUrl = document.getElementById('btn_2');

buttonGet.addEventListener('click', () => {
    const userLink = prompt('Введіть посилання');

    if(userLink !== null) {
        buttonUrl.addEventListener('click', () => window.location.href = userLink);
    } else {
        alert('Ви не передали посилання.Спробуйте знову');
    }
});
