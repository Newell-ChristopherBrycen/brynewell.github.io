let forecastRequest = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=07407eccd051a7a7b4fc81e187f47771';
forecastRequest.open('Get', apiURLstring2, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);


    let i;
    for (i = 0; i < forecastData.list.length && "18:00:00" == forecastData.list.dt_txt ; i++ ){
    if  (forecastData.list.dt_txt = "18:00:00" ) {
               
        
        document.getElementById('day1-temp').innerHTML = forecastData.list[i].main.temp + "&deg; F";
        let icon = "http://openweathermap.org/img/w/" + forecastData.weather[i].icon + ".png";
        let desc = forecastData.weather[i].description;


        document.getElementById('day1-icon').setAttribute('src', icon);
        document.getElementById('day1-icon').setAttribute('alt', desc);
                
        break;
}

}
}