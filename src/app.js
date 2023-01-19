function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let daysofWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = daysofWeek[date.getDay()];

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function displayCurrentWeather(response) {
  let cityElement = document.querySelector("#cityName");
  let temperatureElement = document.querySelector("#cur-temp-nr");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#windSpeed");
  let dateElement = document.querySelector("#date");

  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = response.data.main.humidity;
  windSpeedElement.innerHTML = response.data.wind.speed;
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "b1a8336ff1e05b64da5625e4158fbea3";
let city = "Stockholm";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayCurrentWeather);
