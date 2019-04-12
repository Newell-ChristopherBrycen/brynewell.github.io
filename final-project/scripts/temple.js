 var requestURL = 'https://brynewell.github.io/temple.json';
 var request = new XMLHttpRequest();

 request.open('GET', requestURL);

 request.responseType = 'json';
 request.send();

 request.onload = function() {
     let temples = request.response;
     fillTemple(temples);
 }
 function fillTemple(jsonData) {
     let temple = jsonData['temple'];

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

     let myName2 = document.getElementById('name2').innerHTML;
     myName2.textContent = temple[1].templeName;
     let myAddress2 = document.getElementById('address2').innerHTML;
     myAddress2.textContent = temple[1].address;
     let myTelephone2 = document.getElementById('telephone2').innerHTML;
     myTelephone2.textContent = temple[1].telephone;
     let myServices2 = document.getElementById('services2').innerHTML;
     myServices2.textContent = temple[1].services;
     let myHistory2 = document.getElementById('history2').innerHTML;
     myHistory2.textContent = temple[1].history;
     let myOrdinance2 = document.getElementById('ordinance2').innerHTML;
     myOrdinance2.textContent = temple[1].ordinanceSchedule;
     let mySession2 = document.getElementById('session2').innerHTML;
     mySession2.textContent = temple[1].sessionSchedule;
     let myClosed2 = document.getElementById('closed2').innerHTML;
     myClosed2.textContent = temple[1].templeClosedDates;

     let myName3 = document.getElementById('name3').innerHTML;
     myName3.textContent = temple[2].templeName;
     let myAddress3 = document.getElementById('address3').innerHTML;
     myAddress3.textContent = temple[2].address;
     let myTelephone3 = document.getElementById('telephone3').innerHTML;
     myTelephone3.textContent = temple[2].telephone;
     let myServices3 = document.getElementById('services3').innerHTML;
     myServices3.textContent = temple[2].services;
     let myHistory3 = document.getElementById('history3').innerHTML;
     myHistory3.textContent = temple[2].history;
     let myOrdinance3 = document.getElementById('ordinance3').innerHTML;
     myOrdinance3.textContent = temple[2].ordinanceSchedule;
     let mySession3 = document.getElementById('session3').innerHTML;
     mySession3.textContent = temple[2].sessionSchedule;
     let myClosed3 = document.getElementById('closed3').innerHTML;
     myClosed3.textContent = temple[2].templeClosedDates;

     let myName4 = document.getElementById('name4').innerHTML;
     myName4.textContent = temple[3].templeName;
     let myAddress4 = document.getElementById('address4').innerHTML;
     myAddress4.textContent = temple[3].address;
     let myTelephone4 = document.getElementById('telephone4').innerHTML;
     myTelephone4.textContent = temple[3].telephone;
     let myServices4 = document.getElementById('services4').innerHTML;
     myServices4.textContent = temple[3].services;
     let myHistory4 = document.getElementById('history4').innerHTML;
     myHistory4.textContent = temple[3].history;
     let myOrdinance4 = document.getElementById('ordinance4').innerHTML;
     myOrdinance4.textContent = temple[3].ordinanceSchedule;
     let mySession4 = document.getElementById('session4').innerHTML;
     mySession4.textContent = temple[3].sessionSchedule;
     let myClosed4 = document.getElementById('closed4').innerHTML;
     myClosed4.textContent = temple[3].templeClosedDates;
 }