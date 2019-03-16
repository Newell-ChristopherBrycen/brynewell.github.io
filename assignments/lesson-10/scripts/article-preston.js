
                
                const output = document.querySelector('section');
                const requestURL="https://byui-cit230.github.io/weather/data/towndata.json";
                const request = new XMLHttpRequest();
                request.open('GET', requestURL);
                request.responseTYPE = 'json';
                request.send();
                
                request.onload = function() {
                    let citydata = request.response;
                    nameCity(citydata);
                    
                }
                function nameCity(jsonObj)   {     
                    let cities = jsonObj['towns'];                                                           let cities = jsonObj['towns'];
                for (var i = 0; i < cities.length; i++) {
                    
                    let events = jsonObj['events'];
                        if (cities.name == 'Preston') {
                                let myH1 = document.createElement('h1');
                                let myList = document.createElement('ul');
                                myH1.textContent = towns[i].motto; 
                                myList.textContent = "Events in Preston";
                                    for (var j = 0; j < events.length; j++) {
                                    let myListItem1 = document.createElement('li');
                                    let myListItem2 = document.createElement('li');
                                    let myListItem3 = document.createElement('li');
                                    let myListItem4 = document.createElement('li');
                                    let myListItem5 = document.createElement('li');

                                    myListItem1.textContent = towns[i].events[j];
                                    myListItem2.textContent = towns[i].events[j];
                                    myListItem3.textContent = towns[i].events[j];
                                    myListItem4.textContent = towns[i].events[j];
                                    myListItem5.textContent = towns[i].events[j];
                                }
                               
                                
                                
                               
                                
                            output = document.getElementById("article1").innerHTML;
                               
                                output.appendChild(myH1);
                                output.appendChild(myList);
                                output.appendChild(myListItem1);
                                output.appendChild(myListItem2);
                                output.appendChild(myListItem3);
                                output.appendChild(myListItem4);
                                output.appendChild(myListItem5);
                                
                            };   
                            
                        };
                            };
