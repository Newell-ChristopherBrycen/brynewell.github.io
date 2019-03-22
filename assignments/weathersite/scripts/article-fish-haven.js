
                
                const output = document.getElementById("article1");
                const requestURL="https://byui-cit230.github.io/weather/data/towndata.json";
                const request = new XMLHttpRequest();
                request.open('GET', requestURL);
                request.responseTYPE = 'json';
                request.send();
                
                request.onload = function() {
                    let towndata = JSON.parse(request.responseText);
                     articleFunction(towndata);
                }
                function articleFunction(jsonData) {

                  
                   let towns = jsonData['towns'];                                                      
                for (var i = 0; i < towns.length ; i++) {
                    
                    
                        if (towns.name == "Fish Haven") {
                                let myH1 = document.createElement('h1');
                                let myList = document.createElement('ul');
                                myH1.textContent = towns[i].motto; 
                                myList.textContent = "Events in Fish Haven";
                                    for (var j = 0; j < events.length ; j++) {
                                    let myListItem = document.createElement('li');
                                    

                                    myListItem.textContent = towns[i].events[j];
                                    
                                };
                               
                                
                                
                               
                                
                            
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
