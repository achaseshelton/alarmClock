Create html file to showcase clock with time, date, and buttons to create and clear an alarm

Create a css file to style and make the alarm clock look presentable

Create a javascript file to do the following:

Display the current time and date updating every second:
    1. Create and update time funtion.
        2. Set a constant variable for the date equal to the new date
        3. Set a constant variable for the hours equal to the current hour with the get hours function.
        4. Set a constant variable for the minutes equal to the current minute with the get minutes function.
        5. Set a constant variable for the seconds equal to the current second using the get seconds function.
        6. Display the time using the variables for Hours : Minutes : Seconds.
    7. Set the interval for the update to update every 1000 miliseconds.

Create an a function to set the alarm time.
    1. If there is an alarm time selected then it takes the value and makes it equal to the alarmTime variable.

Create a function to set the alarm.
    1. If the alarm time variable has a value.
        1. Create a current variable equal to the current time.
        2. Create an time to alarm variable equal to the time of the alarm time variable.
    2. If the time to alarm variable is greater than the current time value.
        1. create a timeout variable that takes the time of the time to alarm variable and subtracts the current time from it.
        2. Set an alert for when the difference between the time to alarm and the current time is 0.
        3. Set an alert to tell the user an alarm has been set.

Create a function to clear the alarm.
    1. if there has been an alarm timeout.
        1. Clear the alarm timeout
        2. Alert the user that the alarm has been cleared.