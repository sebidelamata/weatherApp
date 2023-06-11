import "./style.css";
import { queryWeather } from "./queryWeather";

let query = await queryWeather('new york');
console.log(query)
let body = document.querySelector('body');
let weatherDiv = document.createElement('div');
body.appendChild(weatherDiv);
weatherDiv.id = 'weather-div';
weatherDiv.classList.add('night-cloudy');
let cityForm = document.createElement('form');
cityForm.id = 'city-form';
weatherDiv.appendChild(cityForm);


