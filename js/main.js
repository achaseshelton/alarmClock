var alarmTime = null;  //Sets the value of variable alarmTime to nothing.
var alarmTimeout = null;  //Sets the vaulue of variable alarmTimeout to nothing.

function updateTime ()  {
    var display = document.getElementById("clock");  //Sets the variable display to get the div "clock"
    var date = new Date();  //Sets the value of date to get the current date and time.

    var hour = date.getHours(); //Sets the value of variable hour to the current hour vaule in the variable date.
    var minutes = date.getMinutes();  //Sets the value of variable minutes to the current minutes value in the variable date.
    var seconds = date.getSeconds();  //Sets the vaule of variable seconds to the current seconds value of the variable date.

    hour = hour < 10 ? "0" + hour : hour;  //Sets hours to have a "0" before hours if the value of hours in less than 10.
    minutes = minutes < 10 ? "0" + minutes : minutes;  //Sets minutes to have a "0" before minutes if the vaule of minutes is less than 10.
    seconds = seconds < 10 ? "0" + seconds : seconds;  //Sets seconds to have a "0" before seconds if the vaule of seconds is less than 10.
    
    display.innerText= hour + ":" + minutes + ":" + seconds  //The inner text of variable display is the value of the varibles hour, minutes, and seconds with ":" in between.
};

function setAlarmTime(value)  {
    alarmTime = value;  //Linked with the "onchange" in html if the alarm time is populated changes the alarmTime variable to equal the value stored in the alarm input.
    console.log(alarmTime);
};

function setAlarm()  {
    if(alarmTime)  {  //Only runs if there is an alarmTime.
        var current = new Date;  //Sets the variable current to the current date and time
        var timeToAlarm = new Date(alarmTime);  //Sets the variable timeToAlarm to the date and time of variable alarmTime
    };
      if(timeToAlarm > current)  {  //This runs if the variable timeToAlarm is greater than the variable current.
          var timeout = timeToAlarm.getTime() - current.getTime();  //Sets the value of variable timeout to the time of timeToAlarm minus the time of current variable.
          alarmTimeout = setTimeout(() => alert("Time to wake up!!!"), timeout);  // Sends an alert to wake up with the parameter of the timeout variable.
          alert("Alarm Set!");  //Alerts the user that an Alarm has been set.
      };
};

function clearAlarm()  {
    if(alarmTimeout)  {  //If there has been an alarmTimeout
        clearTimeout(alarmTimeout);  //Clears the timeout of the variable alarmTimeout
        alert("Alarm Cleared!")  //Sends the user an alert that the alarm has been cleaed.
    }
}


setInterval(updateTime, 1000)  //Sets update time function to run ever 1000 miliseconds or every 1 second.