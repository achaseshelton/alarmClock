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
};

function setAlarm()  {
    if(alarmTime)  {
        var current = new Date;
        var timeToAlarm = new date(alarmTime);
    }
      if(alarmTime > current)  {
          var timeout = timeToAlarm.getTime() - current.getTime();
          alarmTimeout = setTimeout(alert("Time to Wake Up!!"), timeout);
          alert("Alarm Set");
      }
}



setInterval(updateTime, 1000)