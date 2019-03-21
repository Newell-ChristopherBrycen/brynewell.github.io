let h = parseInt(document.getElementById('hightemp').innerHTML);
let l = parseInt(document.getElementById('lowtemp').innerHTML);
let t = (h + l)/2 ;
let s = parseInt(document.getElementById('windspeed').innerHTML);

let f = 35.74 + .06215*t - 35.75*(s**.16) + .4275*t*(s**.16);


document.getElementById('windchill').innerHTML = f.toFixed(1) ;