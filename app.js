'use strict';
const API_KEY = "4ba63e23b843f2244b301297f18a678b";

const search = document.querySelector('.search');
const searchBtn = document.querySelector('.search-btn');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const weatherIcon = document.querySelector('.weather-icon');
const weatherDescription = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind-speed');
const location = document.querySelector('.location');
const pressure = document.querySelector('.pressure');
const minTemperature = document.querySelector('.min-temperature');
const maxTemperature = document.querySelector('.max-temperature');
const feelsLike = document.querySelector('.feels-like');
const sunriseTime = document.querySelector('.sunrise-time');
const sunsetTime = document.querySelector('.sunset-time');


window.onload = () => {
    search.value = "London";
    fetchWeather(search.value).then(data => {
        updateUI(data);
    }).catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

searchBtn.addEventListener('click', () => {
    const city = search.value.trim();
    if (city) {
        fetchWeather(city).then(data => {
            updateUI(data);
        }).catch(error => {
            console.error('Error fetching weather data:', error);
            alert("City not found");
        });
    } else {
        alert("Please enter a city name");
    }
});

search.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const city = search.value.trim();
        if (city) {
            fetchWeather(city).then(data => {
                updateUI(data);
            }).catch(error => {
                console.error('Error fetching weather data:', error);
                alert("City not found");
            });
        } else {
            alert("Please enter a city name");
        }
    }
});
function updateUI(data) {
    const {temperature, humidity, pressure, temp_min, temp_max, description, feels_like, wind_speed, sunrise, sunset, city, country} = data;

    temperature.innerHTML = `${Math.round(temperature)}°C`;
    humidity.innerHTML = `${humidity}%`;
    weatherDescription.innerHTML = description;
    windSpeed.innerHTML = `${wind_speed} m/s`;
    location.innerHTML = `${city}, ${country}`;
    pressure.innerHTML = `${pressure} hPa`;
    minTemperature.innerHTML = `${temp_min}°C`;
    maxTemperature.innerHTML = `${temp_max}°C`;
    feelsLike.innerHTML = `${feels_like}°C`;

    const sunriseDate = new Date(sunrise * 1000);
    const sunsetDate = new Date(sunset * 1000);
    
    sunriseTime.innerHTML = `${sunriseDate.getHours()}:${sunriseDate.getMinutes()}`;
    sunsetTime.innerHTML = `${sunsetDate.getHours()}:${sunsetDate.getMinutes()}`;

    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}



async function fetchWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},CountryCode&appid=${API_KEY}&units=metric`);

console.log(response);
    // Check if the response is ok (status code 200-299)
    // If not, throw an error with a message
    if (!response.ok) {
        throw new Error('City not found');
    }
    const data = await response.json();
    let {main: {temp, humidity, pressure, temp_min, temp_max, feels_like}, wind:{speed}, sys:{sunrise, sunset,country}, name:city, weather:{[0]:{description}}} = data;
    
    return {
        temperature: temp,
        humidity: humidity,
        pressure: pressure,
        temp_min: temp_min,
        temp_max: temp_max,
        description: description,
        feels_like: feels_like,
        wind_speed: speed,
        sunrise: sunrise,
        sunset: sunset,
        city: city,
        country: country,

    };
}



function displayForecast(data) {
    const forecastContainer = document.querySelector('.forecast-container');
    forecastContainer.innerHTML = ''; // Clear previous forecast

    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temperature = Math.round(item.main.temp);
        const description = item.weather[0].description;
        const icon = item.weather[0].icon;

        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
            <h3>${day}</h3>
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}">
            <p>${temperature}°C</p>
            <p>${description}</p>
        `;
        forecastContainer.appendChild(forecastItem);
    });
}
