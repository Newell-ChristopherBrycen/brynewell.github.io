 var requestURL = 'https://brynewell.github.io/temple.json';
 var request = new XMLHttpRequest();

 request.open('GET', requestURL);

 request.responseType = 'json';
 request.send();

 request.onload = function() {
     var temples = request.response;
     fillTemple(temples);
 }
 function fillTemple(jsonObj) {
     document.getElementById('name1').innerHTML = jsonObj[temple[0].templeName];
     document.getElementById('address1').innerHTML = temple[0].address;
     document.getElementById('telephone1').innerHTML = temple[0].telephone;
     document.getElementById('services1').innerHTML = temple[0].services;
     document.getElementById('history1').innerHTML = temple[0].history;
     document.getElementById('ordinance1').innerHTML = temple[0].ordinanceSchedule;
     document.getElementById('session1').innerHTML = temple[0].sessionSchedule;
     document.getElementById('closed1').innerHTML = temple[0].templeClosedDates;

     document.getElementById('name2').innerHTML = temple[1].templeName;
     document.getElementById('address2').innerHTML = temple[1].address;
     document.getElementById('telephone2').innerHTML = temple[1].telephone;
     document.getElementById('services2').innerHTML = temple[1].services;
     document.getElementById('history2').innerHTML = temple[1].history;
     document.getElementById('ordinance2').innerHTML = temple[1].ordinanceSchedule;
     document.getElementById('session2').innerHTML = temple[1].sessionSchedule;
     document.getElementById('closed2').innerHTML = temple[1].templeClosedDates;

     document.getElementById('name3').innerHTML = temple[2].templeName;
     document.getElementById('address3').innerHTML = temple[2].address;
     document.getElementById('telephone3').innerHTML = temple[2].telephone;
     document.getElementById('services3').innerHTML = temple[2].services;
     document.getElementById('history3').innerHTML = temple[2].history;
     document.getElementById('ordinance3').innerHTML = temple[2].ordinanceSchedule;
     document.getElementById('session3').innerHTML = temple[2].sessionSchedule;
     document.getElementById('closed3').innerHTML = temple[2].templeClosedDates;

     document.getElementById('name4').innerHTML = temple[3].templeName;
     document.getElementById('address4').innerHTML = temple[3].address;
     document.getElementById('telephone4').innerHTML = temple[3].telephone;
     document.getElementById('services4').innerHTML = temple[3].services;
     document.getElementById('history4').innerHTML = temple[3].history;
     document.getElementById('ordinance4').innerHTML = temple[3].ordinanceSchedule;
     document.getElementById('session4').innerHTML = temple[3].sessionSchedule;
     document.getElementById('closed4').innerHTML = temple[3].templeClosedDates;
 }