

const requestURL="https://byui-cit230.github.io/weather/data/towndata.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseTYPE = 'json';
request.send();

request.onload = function() {
    let towndata = request.response;
    let towns = towndata['towns'];
    let output = document.querySelector('section');
    

    let arrayTowns = ["Fish Haven","Preston","Soda Springs"];


    
    
    towns.forEach(towns => {
        for (var s= 0; s < arrayTowns.length; s++) {
            if (towns[i].name == arrayTowns[s]) { 
                let myH1 = document.createElement('H1');
                let myPara1 = document.createElement('p');
                let myPara2 = document.createElement('p');
                let myPara3 = document.createElement('p');
                let myPara4 = document.createElement('p');
                let myList = document.createElement('ul');
                
                myH1.textContent = towns[i].name;
                myPara1.textContent = 'Motto: ' + towns[i].motto;
                myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
                myPara3.textContent = 'Current Population: ' + towns[i].currentPopulation;
                myPara4.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
                
                let townEvents = towns[i].events;
                for (let j = 0; j < townEvents.length; j++) {
                    let listItem = document.createElement('li');
                    listItem.textContent = townEvents[j];
                    myList.appendChild(listItem);
                };
                output.appendChild(myH1);
                output.appendChild(myPara1);
                output.appendChild(myPara2);
                output.appendChild(myPara3);
                output.appendChild(myPara4);
                output.appendChild(myList);
            
            };   
            };
        });
    };

