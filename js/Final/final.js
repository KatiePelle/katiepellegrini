// Initialize variables
let startTime, endTime;
let numWords = 0;
const wordsPerMinute = 200;

// Listen for the start button click event
document.getElementById("start").addEventListener("click", function() {
  // Hide the start button and show the input area
  this.disabled = true;
  document.getElementById("input-area").style.display = "block";

  // Focus on the input field and start the timer
  document.getElementById("input").focus();
  startTime = new Date().getTime();
});

// Listen for the input field keyup event
document.getElementById("input").addEventListener("keyup", function(event) {
  if (event.key === " ") {
    // Get the input value and split it into words
    const input = this.value.trim();
    const words = input.split(" ");

    // Count the number of words and calculate the elapsed time
    numWords = words.length;
    endTime = new Date().getTime();
    const timeElapsed = endTime - startTime;
    const seconds = timeElapsed / 1000;
    const minutes = seconds / 60;

    // Calculate the typing speed and redirect to the result page
    const speed = Math.round(numWords / minutes);
    const resultPage = `result.html?speed=${speed}`;
    window.location.href = resultPage;
  }
});

// Listen for the reset button click event
document.getElementById("reset").addEventListener("click", function() {
  // Reset the input field and show the start button
  document.getElementById("input").value = "";
  document.getElementById("input-area").style.display = "none";
  document.getElementById("start").disabled = false;
});
