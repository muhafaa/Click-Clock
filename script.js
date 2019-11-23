var target = document.getElementById("target");
var startBtn = document.getElementById("startBtn");
var x;

function start() {
  alert("Click the circle target as many as you can!");
  var time = 9;
  randomized();
  target.style.visibility = "unset";
  target.style.transition = "0.2s";
  startBtn.disabled = true;
  timer(time);
}

var click = 0;
var c = document.getElementById("click");

function move() {
  randomized();
  click += 1;
  c.innerHTML = "Score : " + click;
}

function resetOnClick() {
  if (confirm("Are you sure want to reset?")) {
    reset();
  }
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

function timer(seconds) {
  x = setInterval(function() {
    let timer = document.getElementById("timer");
    let highScore = document.getElementById("highest-score");
    timer.innerHTML = "Timer : " + seconds + " second(s)";

    if (seconds == 0) {
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
