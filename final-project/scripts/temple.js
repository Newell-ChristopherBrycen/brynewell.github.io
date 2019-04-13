 const requestURL = 'https://brynewell.github.io/final-project/json/temple.json';
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

     let myName1 = document.getElementById('name1'); 
     let myAddress1 = document.getElementById('address1');
     myName1.textContent = temple[0].templeName;
     myAddress1.textContent = temple[0].address;
     let myTelephone1 = document.getElementById('telephone1'); 
     myTelephone1.textContent = "Phone Number: " + temple[0].telephone;
     let myServices1 = document.getElementById('services1');
     myServices1.textContent = "Services Offered: " + temple[0].services;
     let myHistory1 = document.getElementById('history1');
     myHistory1.textContent = "Temple History: " + temple[0].history;
     let myOrdinance1 = document.getElementById('ordinance1'); 
     myOrdinance1.textContent = temple[0].ordinanceSchedule;
     let mySession1 = document.getElementById('session1');
     mySession1.textContent = temple[0].sessionSchedule;
     let myClosed1 = document.getElementById('closed1'); 
     myClosed1.textContent = "Temple is Closed on: " + temple[0].templeClosedDates;

     let myName2 = document.getElementById('name2');
     myName2.textContent = temple[1].templeName;
     let myAddress2 = document.getElementById('address2');
     myAddress2.textContent = temple[1].address;
     let myTelephone2 = document.getElementById('telephone2');
     myTelephone2.textContent = "Phone Number: " + temple[1].telephone;
     let myServices2 = document.getElementById('services2');
     myServices2.textContent = "Services Offered: " + temple[1].services;
     let myHistory2 = document.getElementById('history2');
     myHistory2.textContent = "Temple History: " + temple[1].history;
     let myOrdinance2 = document.getElementById('ordinance2');
     myOrdinance2.textContent = temple[1].ordinanceSchedule;
     let mySession2 = document.getElementById('session2');
     mySession2.textContent = temple[1].sessionSchedule;
     let myClosed2 = document.getElementById('closed2');
     myClosed2.textContent = "Temple is Closed on: " + temple[1].templeClosedDates;

     let myName3 = document.getElementById('name3');
     myName3.textContent = temple[2].templeName;
     let myAddress3 = document.getElementById('address3');
     myAddress3.textContent = temple[2].address;
     let myTelephone3 = document.getElementById('telephone3');
     myTelephone3.textContent = "Phone Number: " + temple[2].telephone;
     let myServices3 = document.getElementById('services3');
     myServices3.textContent = "Services Offered: " + temple[2].services;
     let myHistory3 = document.getElementById('history3');
     myHistory3.textContent = "Temple History: " + temple[2].history;
     let myOrdinance3 = document.getElementById('ordinance3');
     myOrdinance3.textContent = temple[2].ordinanceSchedule;
     let mySession3 = document.getElementById('session3');
     mySession3.textContent = temple[2].sessionSchedule;
     let myClosed3 = document.getElementById('closed3');
     myClosed3.textContent = "Temple is Closed on: " + temple[2].templeClosedDates;

     let myName4 = document.getElementById('name4');
     myName4.textContent = temple[3].templeName;
     let myAddress4 = document.getElementById('address4');
     myAddress4.textContent = temple[3].address;
     let myTelephone4 = document.getElementById('telephone4');
     myTelephone4.textContent = "Phone Number: " + temple[3].telephone;
     let myServices4 = document.getElementById('services4');
     myServices4.textContent = "Services Offered: " + temple[3].services;
     let myHistory4 = document.getElementById('history4');
     myHistory4.textContent = "Temple History: " + temple[3].history;
     let myOrdinance4 = document.getElementById('ordinance4');
     myOrdinance4.textContent = temple[3].ordinanceSchedule;
     let mySession4 = document.getElementById('session4');
     mySession4.textContent = temple[3].sessionSchedule;
     let myClosed4 = document.getElementById('closed4');
     myClosed4.textContent = "Temple is Closed on: " + temple[3].templeClosedDates;
 }