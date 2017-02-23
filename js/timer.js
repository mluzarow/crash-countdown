window.onload = function () {
	initialize ();
    window.setInterval (crashDate, 1000);
}

class dateTime {
    constructor () {
        this.day = 0;
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
    }
}

var counter_sec_1 = null;
var counter_sec_10 = null;
var counter_min_1 = null;
var counter_min_10 = null;
var counter_hr_1 = null;
var counter_hr_10 = null;
var counter_day_1 = null;
var counter_day_10 = null;
var counter_day_100 = null;

var timeToGo = new dateTime ();

function initialize () {
// Get the current server time
    var serverTime = new Date ();
    // Release date (June 30th. 2017 @ 0:00:00)
    var END_TIME = new Date ("2017-06-30T00:00:00.000Z");
    
    // Compare times and calculate difference   
    var remainingTime = END_TIME.getTime () - serverTime.getTime ();
    
    // To seconds
    remainingTime = parseInt (Math.floor (remainingTime / 1000));
    // To Days
    remainingTime = ((remainingTime / 60) / 60) / 24;
    timeToGo.day = parseInt (Math.floor (remainingTime));
    // To hours
    remainingTime = (remainingTime % timeToGo.day) * 24;
    timeToGo.hour = Math.floor (remainingTime);
    // To minutes
    remainingTime = (timeToGo.hour != 0 ? (remainingTime % timeToGo.hour) * 60 : remainingTime * 60);
    timeToGo.minute = Math.floor (remainingTime);
    // To seconds
    remainingTime = (timeToGo.minute != 0 ? (remainingTime % timeToGo.minute) * 60 : remainingTime * 60);
    timeToGo.second = parseInt (Math.floor (remainingTime));
    
    // Get all the image boxes in here as well
    counter_sec_1 = document.getElementById ("seconds_1");
    counter_sec_10 = document.getElementById ("seconds_10");
    counter_min_1 = document.getElementById ("minutes_1");
    counter_min_10 = document.getElementById ("minutes_10");
    counter_hr_1 = document.getElementById ("hours_1");
    counter_hr_10 = document.getElementById ("hours_10");
    counter_day_1 = document.getElementById ("days_1");
    counter_day_10 = document.getElementById ("days_10");
    counter_day_100 = document.getElementById ("days_100");
    
    // Set up the date
    counter_sec_1.src = "img/crash_" + (timeToGo.second % 10) + ".png";
    counter_sec_10.src = "img/crash_" + parseInt (timeToGo.second / 10) + ".png";
    counter_min_1.src = "img/crash_" + (timeToGo.minute % 10) + ".png";
    counter_min_10.src = "img/crash_" + parseInt (timeToGo.minute / 10) + ".png";
    counter_hr_1.src = "img/crash_" + (timeToGo.hour % 10) + ".png";
    counter_hr_10.src = "img/crash_" + parseInt (timeToGo.hour / 10) + ".png";
    counter_day_1.src = "img/crash_" + (timeToGo.day % 100 % 10) + ".png";
    counter_day_10.src = "img/crash_" + parseInt (timeToGo.day % 100 / 10) + ".png";
    counter_day_100.src = "img/crash_" + parseInt (timeToGo.day / 100) + ".png";
}

// Shows the date in terms of crash bandicoot letter images
function crashDate () {
    timeToGo.second -= 1;
    
    // seconds 0s
    if (timeToGo.second < 0) {
        timeToGo.second = 59;
        timeToGo.minute -= 1;
        
        // minutes 0s
        if (timeToGo.minute < 0) {
            timeToGo.minute = 59;
            timeToGo.hour -= 1;
            
            // hours 0s
            if (timeToGo.hour < 0) {
                timeToGo.hour = 23;
                timeToGo.day -= 1;
                
                counter_day_1.src = "img/crash_" + (timeToGo.day % 100 % 10) + ".png";
                counter_day_10.src = "img/crash_" + parseInt (timeToGo.day % 100 / 10) + ".png";
                counter_day_100.src = "img/crash_" + parseInt (timeToGo.day / 100) + ".png";
            } 
            counter_hr_1.src = "img/crash_" + (timeToGo.hour % 10) + ".png";
            counter_hr_10.src = "img/crash_" + parseInt (timeToGo.hour / 10) + ".png";
        }
        counter_min_1.src = "img/crash_" + (timeToGo.minute % 10) + ".png";
        counter_min_10.src = "img/crash_" + parseInt (timeToGo.minute / 10) + ".png";
    }
    counter_sec_1.src = "img/crash_" + (timeToGo.second % 10) + ".png";
    counter_sec_10.src = "img/crash_" + parseInt (timeToGo.second / 10) + ".png";
}