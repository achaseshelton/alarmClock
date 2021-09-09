var alarmTime = null;
var alarmTimeout = null;

function updateTime ()  {
    var display = document.getElementById("clock");
    var date = new Date();

    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    display.innerText= hour + ":" + minutes + ":" + seconds
};

function setAlarmTime(value)  {
    alarmTime = value;
    console.log(alarmTime);
};

function setAlarm()  {
    if(alarmTime)  {
        var current = new Date;
        var timeToAlarm = new Date(alarmTime);
    };
      if(timeToAlarm > current)  {
          var timeout = timeToAlarm.getTime() - current.getTime();
          alarmTimeout = setTimeout(() => alert("Time to wake up!!!"), timeout);
          alert("Alarm Set!");
      };
};

function clearAlarm()  {
    if(alarmTimeout)  {
        clearTimeout(alarmTimeout);
        alert("Alarm Cleared!")
    }
}


setInterval(updateTime, 1000)