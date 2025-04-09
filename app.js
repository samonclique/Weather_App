'Use Strict';
const search = document.querySelector('.search');
const searchBtn = document.querySelector('.search-btn');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');


async function fetchWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},CountryCode&appid=4ba63e23b843f2244b301297f18a678b
&units=metric`);
    if (!response.ok) {
        throw new Error('City not found');
    }
    const data = await response.json();
    let {main: {temp, humidity, pressure, temp_min, temp_max, feels_like}, weather: {description}} = data;
    
    return {
        temperature: temp,
        humidity: humidity,
        pressure: pressure,
        temp_min: temp_min,
        temp_max: temp_max,
        description: description,
        feels_like: feels_like,

    };
}