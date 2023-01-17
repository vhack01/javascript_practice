const pause = document.querySelector('.btn--pause');
const refresh = document.querySelector('.btn--refresh');
const timer_area = document.querySelector('.timer_area');

// Timer varables
let hours = 0;
let minutes = 0;
let seconds = 0;


// leading Zero's
let leadingHours = 0;
let leadingMinutes = 0;
let leadingSeconds = 0;

function startTimer() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    }
    else leadingSeconds = seconds;

    if (minutes < 10)
        leadingMinutes = "0" + minutes.toString();
    else leadingMinutes = minutes;

    if (hours < 10)
        leadingHours = "0" + hours.toString();
    else leadingHours = hours;

    timer_area.innerText = leadingHours + ' : ' + leadingMinutes + ' : ' + leadingSeconds;
}

// window.setInterval(startTimer, 1);

// Interval Varaibles
let timerInterval = null;
let timerStatus = false;

pause.addEventListener('click', function () {
    if (!timerStatus) {
        timerInterval = window.setInterval(startTimer, 1000);
        timerStatus = true;
        this.innerHTML = `<img src='./image/pause.svg' alt='Play'>`;
    } else {
        window.clearInterval(timerInterval);
        timerStatus = false;
        this.innerHTML = `<img src='./image/play.svg' alt='Pause'>`;
    }
});

refresh.addEventListener('click', function () {
    window.clearInterval(timerInterval);
    timer_area.innerText = '00 : 00 : 00';
    seconds = 0;
    minutes = 0;
    hours = 0;
});

