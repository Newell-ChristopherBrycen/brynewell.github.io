let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=07407eccd051a7a7b4fc81e187f47771';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    

    document.getElementById('condition').innerHTML = weatherData.weather[0].description;
    document.getElementById('hightemp').innerHTML = weatherData.main.temp_max;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('windspeed').innerHTML = weatherData.wind.speed;

    let t = parseInt(weatherData.main.temp_max);
let s = parseInt(weatherData.wind.speed);

let f = 35.74 + .06215*t - 35.75*(s**.16) + .4275*t*(s**.16);


document.getElementById('windchill').innerHTML = f.toFixed(1) ;
}
