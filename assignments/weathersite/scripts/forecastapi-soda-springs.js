let forecastRequest = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=0afcdb35770dba4e28b20dc7706ca070';
forecastRequest.open('Get', apiURLstring2, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
    
            


        var forecast = forecastData["list"];
    for ( let i = 0; i < forecast.length; i++ ){
    if  (list[i].dt_txt.includes('18:00:00')) {
               
        
        document.getElementById('day1-temp').innerHTML = forecastData.list[i].main.temp + "&deg; F";
        for (j = 0; j < forecastData.weather.length; j ++) {
        let icon = "http://openweathermap.org/img/w/" + forecastData.weather[j].icon + ".png";
        let desc = forecastData.weather[j].description;


        document.getElementById('day1-icon').setAttribute('src', icon);
        document.getElementById('day1-icon').setAttribute('alt', desc);
        };
        
};

};
};