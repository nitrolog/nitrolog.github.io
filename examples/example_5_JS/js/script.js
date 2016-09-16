var startPauseButton = document.querySelector('.start-pause-button p');
var clearButton = document.querySelector('.clear-button');
var timerHours = document.querySelector('.timer__hours');
var timerMilliseconds = document.querySelector('.timer__milliseconds');
var timer;
var clickChecker = false;
var pauseChecker = true;
var date, contDate, pauseDate, currentDate, timerDate;


function startButtonHandler() {

  startPauseButton.innerHTML = 'Pause';
  clickChecker = true;

  function startTimer() {

    var hours, minutes, seconds, milliseconds;

    currentDate = new Date();

    currentDate.setMilliseconds( currentDate.getMilliseconds() - date.getMilliseconds() );
    currentDate.setSeconds( currentDate.getSeconds() - date.getSeconds() );
    currentDate.setMinutes( currentDate.getMinutes() - date.getMinutes() );
    currentDate.setHours( currentDate.getHours() - date.getHours() );

    milliseconds = currentDate.getMilliseconds();
    seconds = currentDate.getSeconds();
    minutes = currentDate.getMinutes();
    hours = currentDate.getHours();

    if (seconds == 0) {
      seconds = '00';
    }

    if (seconds > 0 && seconds <= 9) {
      seconds = '0' + seconds;
    }

    if (minutes == 0) {
      minutes = '00';
    }

    if (minutes > 0 && minutes <= 9) {
      minutes = '0' + minutes;
    }

    if (hours == 0) {
      hours = '00';
    }

    if (hours > 0 && hours <= 9) {
      hours = '0' + hours;
    }

    timerMilliseconds.innerHTML = milliseconds;
    timerHours.innerHTML = hours + ':' + minutes + ':' + seconds;

  }

  timer = setInterval(startTimer, 25);
}

function clearTimerButtonHandler() {
  clearInterval(timer);
  clickChecker = false;
  pauseChecker = true;
  timerMilliseconds.innerHTML = '0';
  timerHours.innerHTML = '00:00:00';
  startPauseButton.innerHTML = 'Start';
}

function differenceDate() {
  date.setMilliseconds( date.getMilliseconds() - ( pauseDate.getMilliseconds() - contDate.getMilliseconds() ));
  date.setSeconds( date.getSeconds() - ( pauseDate.getSeconds() - contDate.getSeconds() ));
  date.setMinutes( date.getMinutes() - ( pauseDate.getMinutes() - contDate.getMinutes() ));
  date.setHours( date.getHours() - ( pauseDate.getHours() - contDate.getHours() ));
}

function startPauseButtonChecker() {
  if (!clickChecker) {
    date = new Date();
    startButtonHandler();
  } else { if (!pauseChecker) {
      contDate = new Date();
      differenceDate();
      startButtonHandler();
      pauseChecker = true;
    } else {
      startPauseButton.innerHTML = 'Cont..';
      pauseDate = new Date();
      clearInterval(timer);
      pauseChecker = false;
    }
  }
}

startPauseButton.addEventListener('click', startPauseButtonChecker);
clearButton.addEventListener('click', clearTimerButtonHandler);
