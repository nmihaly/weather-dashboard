var city = "";
var currentTemperature = document.querySelector(".temp");
var currentHumidty = document.querySelector(".humidity");
var currentWSpeed = document.querySelector(".wind");
var currentUvindex = document.querySelector(".uvIndex");
var currentCity = document.querySelector(".cityName")
var citySearch = document.querySelector(".searchInput")
var searchCityBtn = document.querySelector(".searchBtn");

var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=60f54ac03ed7a4b3ce28598e56d34aee";

var getWeatherInfo = function() {
  fetch(apiURL)
  .then(function(response) {
    // request was successful
    if (response.ok) {
      console.log(response);
      response.json().then(function(data) {
        console.log(data.main.temp);
        
    });
  }
});
}

searchCityBtn.addEventListener("click", getWeatherInfo);



  
 
