                
        n =  new Date();
        gd =  n.getDate();
        y = n.getFullYear();
        m = switch (n.getMonth()){
            case 0:
            day = "January";
            break;
            case 1:
            day = "February";
            break;
            case 2:
            day = "March";
            break;
            case 3:
            day = "April";
            break;
            case 4:
            day = "May";
            break;
            case 5:
            day = "June";
            break;
            case 6:
            day = "July";
            break;
            case 7:
            day = "August";
            break;
            case 8:
            day = "September";
            break;
            case 9:
            day = "October"  
            case 10:
            day = "November"
            break;
            case 11:
            day = "December"
            break;
        }
            d = switch(n.getDay()) {
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
        document.getElementById("date").innerHTML = d + " ," + gd + " " + m + " " + y
