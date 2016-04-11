var startPauseButton = document.querySelector('.start-pause-button p');
var clearButton = document.querySelector('.clear-button');
var timerHours = document.querySelector('.timer__hours');
var timerMilliseconds = document.querySelector('.timer__milliseconds');
var timer;
var hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
var clickChecker = false;
var pauseChecker = true;

function startButtonHandler() {
  startPauseButton.innerHTML = 'Pause';
  clickChecker = true;

  function startTimer() {
    milliseconds = +milliseconds + 4;

    if (milliseconds > 999) {
      milliseconds = 0;
      milliseconds = '0';
      seconds++;
    };

    if (seconds == 0) {
      seconds = '00';
    };

    if (seconds > 0 && seconds <= 9) {
      seconds = '0' + +seconds;
    };

    if (seconds > 59) {
      seconds = '00';
      seconds = 0;
      minutes++;
    };

    if (minutes == 0) {
      minutes = '00';
    };

    if (minutes > 59) {
      minutes = '00';
      minutes = 0;
      hours++;
    } else {
      minutes = '0' + +minutes;
    };

    if (hours == 0) {
      hours = '00';
    };

    if (hours > 99) {
      hours = '00';
      hours = 0;
    } else {
      hours = '0' + +hours;
    };

    timerMilliseconds.innerHTML = milliseconds;
    timerHours.innerHTML = hours + ':' + minutes + ':' + seconds;

  };

  timer = setInterval(startTimer, 4);
}

function clearTimerButtonHandler() {
  clearInterval(timer);
  clickChecker = false;
  pauseChecker = true;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  timerMilliseconds.innerHTML = '0';
  timerHours.innerHTML = '00:00:00';
  startPauseButton.innerHTML = 'Start';
}

function startPauseButtonChecker() {
  if (!clickChecker) {
    startButtonHandler();
  } else { if (!pauseChecker) {
      startButtonHandler();
      pauseChecker = true;
    } else {
      startPauseButton.innerHTML = 'Cont..';
      clearInterval(timer);
      pauseChecker = false;
    }
  }
}

startPauseButton.addEventListener('click', startPauseButtonChecker);
clearButton.addEventListener('click', clearTimerButtonHandler);
