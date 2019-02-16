var n =  new Date();
var gd =  n.getDate();
var y = n.getFullYear();
        var m;
switch (n.getMonth()){
    case 0:
    m = "January";
    break;
    case 1:
    m = "February";
    break;
    case 2:
    m = "March";
    break;
    case 3:
    m = "April";
    break;
    case 4:
    m = "May";
    break;
    case 5:
    m = "June";
    break;
    case 6:
    m = "July";
    break;
    case 7:
    m = "August";
    break;
    case 8:
    m = "September";
    break;
    case 9:
    m = "October";
    break;
    case 10:
    m = "November";
    break;
    case 11:
    m = "December";
}
                var day;
    switch(n.getDay()) {
    case 0:  
    day = "Sunday";
    break;
    case 1:
    day = "Monday";
    break;
    case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "Wednesday";
    break;
    case 4:
    day = "Thursday";
    break;
    case 5:
    day = "Friday";
    break;
    case 6:
    day = "Saturday";  
    }
    document.getElementById("date").innerHTML = day + " ," + gd + " " + m + " " + y;
