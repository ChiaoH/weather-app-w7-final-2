function displayCurrentWeather(response) {
  console.log(response.data);

  let cityElement = document.querySelector("#cityName");
  let temperatureElement = document.querySelector("#cur-temp-nr");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#windSpeed");

  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = response.data.main.humidity;
  windSpeedElement.innerHTML = response.data.wind.speed;
}

let apiKey = "b1a8336ff1e05b64da5625e4158fbea3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayCurrentWeather);
