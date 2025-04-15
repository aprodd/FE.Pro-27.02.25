const imgEl = document.getElementById('image');
const btnEl = document.getElementById('btn');

const imgArr = [
    'img/arsenal.png',
    'img/chelsea.png',
    'img/mancity.png',
    'img/manutd.png'];

btn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random()*imgArr.length);
    imgEl.src = imgArr[randomIndex];
})