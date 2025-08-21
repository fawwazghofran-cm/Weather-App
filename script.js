const apiKey = "de0492a49880e225d06942382d85aa16"; // ضع مفتاح OpenWeatherMap هنا
const getWeatherBtn = document.getElementById("getWeather");
const cityInput = document.getElementById("city");
const resultDiv = document.getElementById("result");

getWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if(city === "") {
    resultDiv.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if(!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      resultDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(err => {
      resultDiv.innerHTML = `<p>${err.message}</p>`;
    });
});
