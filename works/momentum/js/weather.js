const API_KEY = "7f2ca9c3722e86e9f32926605fc9d02c";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = ` ${data.main.temp}℃ ${data.weather[0].main}`;
      city.innerText = `@${data.name}`;
    });
}

function onGeoError() {
  const weather = document.querySelector("#weather span:first-child");
  const city = document.querySelector("#weather span:last-child");
  weather.innerText = ` -℃ -`;
  city.innerText = `@-`;
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
