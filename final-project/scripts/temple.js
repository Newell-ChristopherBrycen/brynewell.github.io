 var requestURL = 'https://brynewell.github.io/temple.json';
 var request = new XMLHttpRequest();

 request.open('GET', requestURL);

 request.responseType = 'json';
 request.send();

 request.onload = function() {
     let temples = request.response;
     fillTemple(temples);
     console.log(temples);
 }
 function fillTemple(jsonObj) {
     let temple = jsonObj['temple'];

     let myName1 = document.getElementById('name1').innerHTML; 
     let myAddress1 = document.getElementById('address1').innerHTML;
     myName1.textContent = temple[0].templeName;
     myAddress1.textContent = temple[0].address;
     let myTelephone1 = document.getElementById('telephone1').innerHTML; 
     myTelephone1.textContent = temple[0].telephone;
     let myServices1 = document.getElementById('services1').innerHTML;
     myServices1.textContent = temple[0].services;
     let myHistory1 = document.getElementById('history1').innerHTML;
     myHistory1.textContent = temple[0].history;
     let myOrdinance1 = document.getElementById('ordinance1').innerHTML; 
     myOrdinance1.textContent = temple[0].ordinanceSchedule;
     let mySession1 = document.getElementById('session1').innerHTML;
     mySession1.textContent = temple[0].sessionSchedule;
     let myClosed1 = document.getElementById('closed1').innerHTML; 
     myClosed1.textContent = temple[0].templeClosedDates;

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