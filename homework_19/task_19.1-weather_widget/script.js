const apiKey = "e4cb41a1d3bc833c55ee66a822ee5df9";
const input = document.querySelector('.search input');
const button = document.querySelector('.search button');

async function checkWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    let data = await response.json();

    if (response.status == 400 || response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
        document.querySelector('.error').innerText = 'Please enter the correct city name';

    } else {
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.descr').innerHTML = data.weather[0].description;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';
        button.textContent = 'Refresh';
    }
}

button.addEventListener('click', (e)=> {
    !input.value.trim() ? e.stopPropagation() : checkWeather(input.value);
});

input.addEventListener('input', ()=> {
    if (input.value || input.value == '') button.textContent = 'Search';
});