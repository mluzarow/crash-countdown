window.onload = function () {
	initialize ();
}

class dateTime {
    constructor () {
        this.day = 0;
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
    }
}

function initialize () {
    // Get the current server time
    serverTime = new Date ();
    
    // Release date (June 30th. 2017 @ 0:00:00)
    var END_TIME = new Date ("2017-06-30T00:00:00.000Z");
    
    // Compare times and calculate difference
    var timeToGo = new dateTime ();
    
    var remainingTime = END_TIME.getTime () - serverTime.getTime ();
    // To seconds
    remainingTime = parseInt (remainingTime / 1000);
    // To Days
    remainingTime = remainingTime / 60 / 60 / 24;
    timeToGo.day = Math.floor (remainingTime);
    // To hours
    remainingTime = (remainingTime % timeToGo.day) * 60;
    timeToGo.hour = Math.floor (remainingTime);
    // To minutes
    remainingTime = (remainingTime % timeToGo.hour) * 60;
    timeToGo.minute = Math.floor (remainingTime);
    // To seconds
    remainingTime = (remainingTime % timeToGo.minute) * 60;
    timeToGo.second = Math.floor (remainingTime);
    
    console.log (timeToGo);
    console.log (remainingTime);
}