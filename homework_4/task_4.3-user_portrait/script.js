const userYearBirth = prompt('Введіть Ваш рік народження');
const userCity = prompt('У якому місті проживаєте?');
const userFavoriteSport = prompt('Ваш улюблений вид спорту?');
const userAge = 2025 - userYearBirth;
const capitals = {
    ua: 'Київ',
    us: 'Вашингтон',
    uk: 'Лондон'
};
const countries = {
    ua: 'України',
    us: 'Америки',
    uk: 'Великобританії'
};

if (userYearBirth !== null) {
    alert(`Вам ${userAge} років.`);
} else {
    alert('Шкода, що Ви не захотіли ввести свій рік народження.');
}

if (userCity === capitals.ua) {
    alert(`Ви живете у столиці ${countries.ua}.`);
} else if (userCity === capitals.us) {
    alert(`Ви живете у столиці ${countries.us}.`);
} else if (userCity === capitals.uk) {
    alert(`Ви живете у столиці ${countries.uk}.`);
} else if (userCity === null) {
    alert('Шкода, що Ви не захотіли ввести своє місце проживання.');
} else {
    alert(`Ви живете у місті ${userCity}.`);
}

if (userFavoriteSport === 'Бокс') {
    alert('Круто! Хочете стати як Майк Тайсон?');
} else if (userFavoriteSport === 'Футбол') {
    alert('Круто! Хочете стати як Зінедін Зідан?');
} else if (userFavoriteSport === 'Теніс') {
    alert('Круто! Хочете стати як Новак Джоковіч?');
} else if (userFavoriteSport === null) {
    alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту.');
} else {
    alert(`Успіхів Вам у спорті ${userFavoriteSport}.`);
}




// alert(`Вам ${userAge} років.`);

// if (userCity === 'Київ') {
//     alert('Ви живете у столиці України.');
// } else if (userCity === 'Вашингтон') {
//     alert('Ви живете у столиці Америки.');
// } else if (userCity === 'Лондон') {
//     alert('Ви живете у столиці Великобританії.');
// } else {
//     alert(`Ви живете у місті ${userCity}.`);
// }






