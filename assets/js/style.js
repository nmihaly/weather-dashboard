// variables
var city = "";
var currentTemperature = document.querySelector(".temp");
var currentHumidty = document.querySelector(".humidity");
var currentWind = document.querySelector(".wind");
var currentUvindex = document.querySelector(".uvIndex");
var currentCity = document.querySelector(".cityName")
var citySearch = document.querySelector(".searchInput")
var citySearchBtn = document.querySelector(".searchBtn");

// api variable set up with api key
// key does not work with citySearch var?
var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=d3438048dbcaeb40473421d355cfba74";

//fetch weather info from api
var getWeatherInfo = function() {
  fetch(apiURL)
  .then(function(response) {
    // request was successful
    if (response.ok) {
      console.log(response);
      response.json().then(function(data) {
        console.log(data.main.temp);
        displayWeather(data.main.temp, data.wind.speed, data.main.humidity);
    });
  }
});
};

// connect search city input to display info
function displayWeather(event){
  event.preventDefault();
  if(citySearch.val().trim()!==""){
      city=citySearch.val().trim();
      currentWeather(city);
  }
};
// create var for current date
var date = moment().format('MMMM Do YYYY');

//use date to connect to city searched
document.getElementById(currentCity).html(response.name +"("+date+")");


// convert temp from Kelvin to Fahrenheit
var tempF = (response.main.temp - 273.15) * 1.80 +32;
document.getElementById(currentTemperature).html(tempF);

// add humidity
document.getElementById(currentHumidty).html(data.main.humidity+"%");

// add windspeed and convert to MPH
var ws = data.wind.speed;
var windmph = (ws*2.237)
document.getElementById(currentWind).html(windmph+"MPH");

//cannot find UV Index in data?

//add click event listener for search button
citySearchBtn.addEventListener("click", getWeatherInfo);



  
 
