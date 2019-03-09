let section = document.querySelector('section.section')

let requestURL="https://byui-cit230.github.io/weather/data/towndata.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseTYPE ='json';
request.send();

request.onload = function() {
    let towns = request.response;
    populateSection(towns);
    showPlace(towns);
}

function populateSection(jsonObj) {
    let towns = jsonObj['towns'];
    let arrayTowns = ["Fish Haven","Preston","Soda Springs"];
    for (var i=0; i< towns.length; i++){
        for (var s= 0; s < arrayTowns.length; s++) {
            if (towns[i].name == arrayTowns[s]){ 
                let myH1 = document.createElement('H1');
                let myPara1 = document.createElement('p');
                let myPara2 = document.createElement('p');
                let myPara3 = document.createElement('p');
                let myPara4 = document.createElement('p');
                let myList = document.createElement('ul');
                
                myH1.textContent = towns[1].name;
                myPara1.textContent = 'Motto: ' + towns[1].motto;
                myPara2.textContent = 'Year Founded: ' + towns[1].yearFounded;
                myPara3.textContent = 'Current Population: ' + towns[1].currentPopulation;
                myPara4.textContent = 'Average Rainfall: ' + towns[1].averageRainfall;
                
                let townEvents = towns[1].events;
                for (let j = 0; j < events.length; j++) {
                    let listItem = document.createElement('li');
                    listItem.textContent = towns[j];
                    myList.appendChild(listItem);
                }
                myArticle.appendChild(myH1);
                myArticle.appendChild(myPara1);
                myArticle.appendChild(myPara2);
                myArticle.appendChild(myPara3);
                myArticle.appendChild(myPara4);
                myArticle.appendChild(myList);
            
                section.appendChild(myArticle);
            }
        }
    }
    

}