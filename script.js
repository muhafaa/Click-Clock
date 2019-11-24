var target = document.getElementById("target");
var startBtn = document.getElementById("startBtn");
var x;
var btnSound = document.getElementById("button-sound");

// button start on click
function start() {
  btnSound.play();
  swal({
    title: "Instruction!",
    text: "Click on the circle target before the timer is up"
  }).then(value => {
    btnSound.play();
    let time = 9;
    randomized();
    target.style.visibility = "unset";
    target.style.transition = "0.2s";
    startBtn.disabled = true;
    timer(time);
  });
}

var click = 0;
var c = document.getElementById("click");

// score
function move() {
  let audio = document.getElementById("target-sound");
  randomized();
  click += 1;
  c.innerHTML = "Score : " + click;
  audio.play();
}

// button reset on click
function resetOnClick() {
  btnSound.play();
  swal({
    title: "Are you sure want to reset?",
    text: "You are about to restart the game",
    buttons: true,
    dangerMode: true
  }).then(value => {
    btnSound.play();
    if (value) {
      reset();
    }
  });
}

function reset() {
  click = 0;
  c.innerHTML = "Score : 0";
  target.style.transition = "none";
  target.style.visibility = "hidden";
  randomized();
  startBtn.disabled = false;
  endTimer(x);
}

var targetWidth = target.style.width;
var targetHeight = target.style.height;

// target randomized effect
function randomized() {
  let heightMax = 55;
  let widthMax = 74;

  target.style.top = String(Math.floor(Math.random() * heightMax)) + "vh";
  target.style.left = String(Math.floor(Math.random() * widthMax)) + "vh";

  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  target.style.backgroundColor = color;
}

// timer
function timer(seconds) {
  x = setInterval(function() {
    let timer = document.getElementById("timer");
    let highScore = document.getElementById("highest-score");
    timer.innerHTML = "Timer : " + seconds + " second(s)";

    if (seconds == 0) {
      let audio = document.getElementById("timer-sound");
      audio.play();
      swal({
        title: "Time's Up!",
        text: "Your Score : " + click,
        icon: "warning"
      });
      if (click > highScore.innerHTML) {
        highScore.innerHTML = click;
      }
      reset();
    } else {
      seconds--;
    }
  }, 1000);
}

function endTimer(interval) {
  clearInterval(interval);
  document.getElementById("timer").innerHTML = "Timer : 10 second(s)";
}
