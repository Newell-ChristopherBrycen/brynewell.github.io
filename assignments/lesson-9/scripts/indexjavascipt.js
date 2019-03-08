let requestURL="https://byui-cit230.github.io/weather/data/towndata.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseTYPE ='json';
request.send();

request.onload = function() {
    let places = request.response;
    populateSection(places);
    showPlace(places);
}
