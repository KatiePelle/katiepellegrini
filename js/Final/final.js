const text = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

document.getElementById("text").innerHTML = text;

document.getElementById("start").addEventListener("click", function() {
  startTime = new Date();
  this.disabled = true;
  document.getElementById("input").disabled = false;
  document.getElementById("submit").disabled = false;
  document.getElementById("reset").disabled = false;
});

document.getElementById("submit").addEventListener("click", function() {
  endTime = new Date();
  const timeDiff = endTime - startTime;
  const seconds = timeDiff / 1000;
  const minutes = seconds / 60;
  const words = text.split(" ");
  const numWords = words.length;
  const wpm = numWords / minutes;

  let resultPage;
  if (wpm > 80) {
    resultPage = "excellent.html";
  } else if (wpm > 60) {
    resultPage = "good.html";
  } else if (wpm > 40) {
    resultPage = "average.html";
  } else {
    resultPage = "poor.html";
  }

  sessionStorage.setItem("time", seconds.toFixed(2));
  sessionStorage.setItem("wpm", wpm.toFixed(2));
  window.location.href = resultPage;
});

document.getElementById("reset").addEventListener("click", function() {
  window.location.reload();
});
