import "./style.css";
import { queryWeather } from "./queryWeather";
import { doc } from "prettier";

let query = await queryWeather('new york');
console.log(query)
let isDay = query.current.is_day;
let tempScaleF = true;
let body = document.querySelector('body');
let weatherDiv = document.createElement('div');
body.appendChild(weatherDiv);
weatherDiv.id = 'weather-div';

// set background
if(isDay === 1 && query.current.condition.code === 1000){
    weatherDiv.className = 'sunny';
} else if(isDay === 1 && (query.current.condition.code === 1003 || 
    query.current.condition.code === 1006 ||
    query.current.condition.code === 1063 ||
    query.current.condition.code === 1066 ||
    query.current.condition.code === 1069 ||
    query.current.condition.code === 1072 ||
    query.current.condition.code === 1114 ||
    query.current.condition.code === 1150 ||
    query.current.condition.code === 1180 ||
    query.current.condition.code === 1183 ||
    query.current.condition.code === 1210 ||
    query.current.condition.code === 1213 ||
    query.current.condition.code === 1216 ||
    query.current.condition.code === 1249 ||
    query.current.condition.code === 1255 ||
    query.current.condition.code === 1261 ||
    query.current.condition.code === 1273 ||
    query.current.condition.code === 1279)){
    weatherDiv.className = 'partly-cloudy';
} else if(isDay === 1 && (query.current.condition.code === 1009 || 
    query.current.condition.code === 1030 ||
    query.current.condition.code === 1087 ||
    query.current.condition.code === 1117 ||
    query.current.condition.code === 1135 ||
    query.current.condition.code === 1147 ||
    query.current.condition.code === 1153 ||
    query.current.condition.code === 1168 ||
    query.current.condition.code === 1171 ||
    query.current.condition.code === 1186 ||
    query.current.condition.code === 1189 ||
    query.current.condition.code === 1192 ||
    query.current.condition.code === 1195 ||
    query.current.condition.code === 1198 ||
    query.current.condition.code === 1201 ||
    query.current.condition.code === 1204 ||
    query.current.condition.code === 1207 ||
    query.current.condition.code === 1219 ||
    query.current.condition.code === 1222 ||
    query.current.condition.code === 1225 ||
    query.current.condition.code === 1237 ||
    query.current.condition.code === 1240 ||
    query.current.condition.code === 1243 ||
    query.current.condition.code === 1246 ||
    query.current.condition.code === 1252 ||
    query.current.condition.code === 1258 ||
    query.current.condition.code === 1264 ||
    query.current.condition.code === 1276 ||
    query.current.condition.code === 1283)){
    weatherDiv.className = 'overcast';
} else if(isDay === 0 && query.current.condition.code === 1000){
    weatherDiv.className = 'night-clear';
} else if(isDay === 0 && (query.current.condition.code === 1003 || 
    query.current.condition.code === 1006 ||
    query.current.condition.code === 1009 ||
    query.current.condition.code === 1030 ||
    query.current.condition.code === 1063 ||
    query.current.condition.code === 1066 ||
    query.current.condition.code === 1069 ||
    query.current.condition.code === 1072 ||
    query.current.condition.code === 1087 ||
    query.current.condition.code === 1114 ||
    query.current.condition.code === 1117 ||
    query.current.condition.code === 1135 ||
    query.current.condition.code === 1150 ||
    query.current.condition.code === 1153 ||
    query.current.condition.code === 1168 ||
    query.current.condition.code === 1171 ||
    query.current.condition.code === 1180 ||
    query.current.condition.code === 1183 ||
    query.current.condition.code === 1186 ||
    query.current.condition.code === 1189 ||
    query.current.condition.code === 1192 ||
    query.current.condition.code === 1195 ||
    query.current.condition.code === 1198 ||
    query.current.condition.code === 1201 ||
    query.current.condition.code === 1204 ||
    query.current.condition.code === 1207 ||
    query.current.condition.code === 1210 ||
    query.current.condition.code === 1213 ||
    query.current.condition.code === 1216 ||
    query.current.condition.code === 1219 ||
    query.current.condition.code === 1222 ||
    query.current.condition.code === 1225 ||
    query.current.condition.code === 1237 ||
    query.current.condition.code === 1240 ||
    query.current.condition.code === 1243 ||
    query.current.condition.code === 1246 ||
    query.current.condition.code === 1249 ||
    query.current.condition.code === 1252 ||
    query.current.condition.code === 1255 ||
    query.current.condition.code === 1258 ||
    query.current.condition.code === 1261 ||
    query.current.condition.code === 1264 ||
    query.current.condition.code === 1273 |
    query.current.condition.code === 1276 ||
    query.current.condition.code === 1279 ||
    query.current.condition.code === 1283)){
    weatherDiv.className = 'night-cloudy';
}

let cityForm = document.createElement('form');
cityForm.id = 'city-form';
weatherDiv.appendChild(cityForm);
let cityInput = document.createElement('input');
cityInput.id = 'city-input';
cityInput.autofocus = true;
cityInput.value = query.location.name;
cityForm.appendChild(cityInput);
let locationData = document.createElement('div');
locationData.id = 'location-data';
weatherDiv.appendChild(locationData);
let locationGeo = document.createElement('div');
locationGeo.id = 'location-geo';
locationGeo.textContent = `${query.location.region}, ${query.location.country}`;
locationData.appendChild(locationGeo);
let locationCoords = document.createElement('div');
locationCoords.id = 'location-coords';
locationCoords.textContent = `${query.location.lat}°, ${query.location.lon}°`;
locationGeo.appendChild(locationCoords);
let tempDiv = document.createElement('div');
tempDiv.id = 'temp-div';
weatherDiv.appendChild(tempDiv);
let temp = document.createElement('div');
temp.id = 'temp';
temp.textContent = `${query.current.temp_f}° F`;
tempDiv.appendChild(temp);
let tempModeChange = document.createElement('div');
tempModeChange.id = 'temp-mode-change';
tempModeChange.textContent = 'C°';
tempDiv.appendChild(tempModeChange);
let feelsLike = document.createElement('div');
feelsLike.id = 'feels-like';
feelsLike.textContent = `Feels like ${query.current.feelslike_f}°`;
weatherDiv.appendChild(feelsLike);
let generalCondition = document.createElement('div');
generalCondition.id = 'general-condition';
generalCondition.textContent = query.current.condition.text;
weatherDiv.appendChild(generalCondition);
let minorStats = document.createElement('div');
minorStats.id = 'minor-stats';
weatherDiv.appendChild(minorStats);
let humidity = document.createElement('div');
humidity.id = 'humidity';
minorStats.appendChild(humidity);
humidity.textContent = `Humidity: ${query.current.humidity}%`;
let gustSpeed = document.createElement('div');
gustSpeed.id = 'gust-speed';
gustSpeed.textContent = `Gust Speed: ${query.current.gust_mph} mi/h`;
minorStats.appendChild(gustSpeed);
let precipDepth = document.createElement('div');
precipDepth.id = 'precip-depth';
precipDepth.textContent = `Precipitation: ${query.current.precip_in} inches`;
minorStats.appendChild(precipDepth);
let airPressure = document.createElement('div');
airPressure.id = 'air-pressure';
airPressure.textContent = `Air Pressure: ${query.current.pressure_in} inches of mercury`;
minorStats.appendChild(airPressure);
let uv = document.createElement('div');
uv.id = 'uv';
uv.textContent = `UV Index: ${query.current.uv}`;
minorStats.appendChild(uv);
let viz = document.createElement('div');
viz.id = 'viz';
viz.textContent = `Visibility: ${query.current.vis_miles} miles`;
minorStats.appendChild(viz);
let windDirection = document.createElement('div');
windDirection.id = 'wind-direction';
windDirection.textContent = `Wind Direction: ${query.current.wind_dir}, ${query.current.wind_degree}°`;
minorStats.appendChild(windDirection);
let windSpeed = document.createElement('div');
windSpeed.id = 'wind-speed';
windSpeed.textContent = `Wind Speed: ${query.current.wind_mph} mi/h`;
minorStats.appendChild(windSpeed);
let lastUpdate = document.createElement('div');
lastUpdate.id = 'last-update';
lastUpdate.textContent = `Last updated ${query.current.last_updated}`;
weatherDiv.appendChild(lastUpdate);



