let count = 0;
let timer = 10;
let countDown;

function startGame() {
  count = 0;
  timer = 10;
  document.getElementById("play-button").style.display = "none";
  document.getElementById("click-button").style.display = "block";
  document.getElementById("click-count").innerHTML = "0 clicks";
  document.getElementById("results").style.display = "none";
  startTimer();
}

function incrementCount() {
  count++;
  document.getElementById("click-count").innerHTML = count + " clicks";
}

function startTimer() {
  countDown = setInterval(() => {
    timer--;
    if (timer < 0) {
      clearInterval(countDown);
      endGame();
    }
    document.getElementById("timer").innerHTML = timer;
  }, 1000);
}

function endGame() {
  document.getElementById("click-button").style.display = "none";
  document.getElementById("results").style.display = "block";
  document.getElementById("score").innerHTML = count;
  let rank;
  if (count >= 50) {
    rank = "Excellent!";
  } else if (count >= 30) {
    rank = "Average";
  } else if (count >= 10) {
    rank = "Poor";
  } else {
    rank = "Terrible";
  }
  document.getElementById("rank").innerHTML = rank;
}

function resetGame() {
  document.getElementById("play-button").style.display = "block";
  document.getElementById("results").style.display = "none";
}

