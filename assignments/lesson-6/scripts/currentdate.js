var n =  new Date();
var gd =  n.getDate();
var y = n.getFullYear();
        var m;
    function getMonth() {
        var month = new Array(12);
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "Novemeber";
        month[11] = "December";
    }

    function getWeekday() {
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var d = weekday[n.getDay()]
    }
    var date = (weekday + " ," + gd + " " + m + " " + y)
document.getElementById("date").innerHTML = date;
