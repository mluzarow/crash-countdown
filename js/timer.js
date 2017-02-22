window.onload = function () {
	initialize ();
}

class dateTime {
    constructor () {
        this.year = 0;
        this.month = 0;
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
    var remainingTime = new dateTime ();
    
    remainingTime.year = END_TIME.getFullYear () - serverTime.getFullYear ();
    remainingTime.month = Math.abs (END_TIME.getMonth () - serverTime.getMonth ());
    remainingTime.day = Math.abs (END_TIME.getDate () - serverTime.getDate ());
    remainingTime.hour = Math.abs (END_TIME.getHours () - serverTime.getHours ());
    remainingTime.minute = Math.abs (END_TIME.getMinutes () - serverTime.getMinutes ());
    remainingTime.second = Math.abs (END_TIME.getSeconds () - serverTime.getSeconds ());
    
    console.log (remainingTime);
}