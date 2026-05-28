console.log(document.getElementById("weather-icon"));

const apiKey = "37ca9efd1cf40041e1b5d62f4f9414ce";

const searchButton = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");
const weatherCard = document.getElementById("weather-card");
const weatherIcon = document.getElementById("weather-icon");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");

searchButton.addEventListener("click", function () {
  const city = cityInput.value.trim();

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Unable to find city");
      }
      return response.json();
    })
    .then(function (data) {
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      cityName.textContent = data.name;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      description.textContent = `Conditions: ${data.weather[0].description}`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      weatherCard.style.display = "block";
    })
    .catch(function (error) {
      alert(error.message);
    });
});
