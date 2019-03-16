let forecastRequest = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=0afcdb35770dba4e28b20dc7706ca070';
forecastRequest.open('Get', apiURLstring2, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);
            getForecast(forecastData);

};
    function getForecast(jsonObj) {
        var forecast = jsonObj["list"];
    for ( let i = 0; i < forecast.list.length; i++ ){
    if  (forecastData.list.dt_txt = "18:00:00" ) {
               
        
        document.getElementById('day1-temp').innerHTML = forecastData.list[i].main.temp + "&deg; F";
        for (j = 0; j < forecastData.weather.length; j ++) {
        let icon = "http://openweathermap.org/img/w/" + forecastData.weather[j].icon + ".png";
        let desc = forecastData.weather[j].description;


        document.getElementById('day1-icon').setAttribute('src', icon);
        document.getElementById('day1-icon').setAttribute('alt', desc);
        };
        break;
};

};
};