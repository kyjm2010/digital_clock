function showTime() {
    let time = new Date()
    let calendarDay = time.getDay()
    let day = time.getDate()
    let month = time.getMonth()
    let year = time.getFullYear()
    let hr = time.getHours()
    let hr_military = hr
    let min = time.getMinutes()
    let sec = time.getSeconds()
    let am_pm = "AM"

    if (hr > 11) {
        hr -= 12
        am_pm = "PM"
    }

    if (hr == 0) {
        hr = 12
    }

    switch (calendarDay) {
        case 1:
            calendarDay = "Mon"
            break;
        case 2:
            calendarDay = "Tues"
            break;
        case 3:
            calendarDay = "Wed"
            break;
        case 4:
            calendarDay = "Thu"
            break;
        case 5:
            calendarDay = "Fri"
            break;
        case 6:
            calendarDay = "Sat"
            break;
        case 7:
            calendarDay = "Sun"
            break;
    }

    switch (month) {
        case 0:
            month = "Jan"
            break;
        case 1:
            month = "Feb"
            break;
        case 2:
            month = "Mar"
            break;
        case 3:
            month = "Apr"
            break;
        case 4:
            month = "May"
            break;
        case 5:
            month = "Jun"
            break;
        case 6:
            month = "Jul"
            break;
        case 7:
            month = "Aug"
            break;
        case 8:
            month = "Sep"
            break;
        case 9:
            month = "Oct"
            break;
        case 10:
            month = "Nov"
            break;
        case 11:
            month = "Dec"
            break;
    }

    day = (day < 10) ? "0" + day : day
    hr = (hr < 10) ? "0" + hr : hr
    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec
    let currentDate = `${calendarDay}, ${day} ${month}, ${year}`
    let currentTime = `${hr}:${min}:${sec} ${am_pm}`

    if (hr_military >= 19 && hr_military < 22) {
        document.body.style.backgroundImage = "url(images/sunset.jpg)";
        document.body.style.backgroundPosition = 'center';
    } else if (hr_military >= 22 && hr_military < 6) {
        document.body.style.backgroundImage = "url(images/night.jpg)";
        document.body.style.backgroundPosition = 'top';
    } else if (hr_military >= 6 && hr_military < 11) {
        document.body.style.backgroundImage = "url(images/sunrise.jpg";
        document.body.style.backgroundPosition = 'center';
    } else {
        document.body.style.backgroundImage = "url(images/full-sun.jpg";
        document.body.style.backgroundPosition = 'top right';
    }

    document.querySelector('#clockDate').innerText = currentDate
    document.querySelector('#clockTime').innerText = currentTime

}
const timer = setInterval(showTime, 1000)

const lightgrey = document.querySelector('#light-grey')
const black = document.querySelector('#black')
const white = document.querySelector('#white')
const orange = document.querySelector('#orange')
const blue = document.querySelector('#blue')
const green = document.querySelector('#green')

function changeBackgroundColor(color) {
    clockDisplay.style.background = color
}

function changeColor(color) {
    clockDisplay.style.color = color
}

lightgrey.addEventListener('click', function() {changeBackgroundColor('linear-gradient(180deg, rgba(247,247,247,1) 29%, rgba(144,144,144,1) 100%)')})
black.addEventListener('click', function() {changeBackgroundColor('linear-gradient(180deg, rgba(144,144,144,1) 29%, rgba(0,0,0,1) 63%)')})
white.addEventListener('click', function() {changeBackgroundColor('linear-gradient(180deg, rgba(144,144,144,1) 22%, rgba(255,255,255,1) 52%)')})
orange.addEventListener('click', function() {changeColor('orange')})
blue.addEventListener('click', function() {changeColor('blue')})
green.addEventListener('click', function() {changeColor('green')})


onOff.addEventListener("click", function () {
    if ((document.querySelector('.date').style.display && document.querySelector('.time').style.display) == 'none') {
        document.querySelector('.date').style.display = 'block'
        document.querySelector('.time').style.display = 'block'

    } else {
        document.querySelector('.date').style.display = 'none'
        document.querySelector('.time').style.display = 'none'
    }
})


let radio = document.createElement("audio");
radio.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/9/9e/War_of_the_Worlds_1938_Radio_broadcast_full.opus");
radio.setAttribute("loop", "true");
radioBtn = document.getElementById("radio-btn");

radioBtn.addEventListener("click", function () {
    if ((' ' + radioBtn.className + ' ').indexOf(' is-active ') > -1) {
        radioBtn.className = "radio-btn";
        radio.muted = true;
    }

    else {
        radioBtn.className = "btn radio-btn is-active";
        radio.play();
        radio.muted = false;
    }
});











