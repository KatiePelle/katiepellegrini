function increaseVolume() {
  var volumeLevel = document.getElementById("volume-level");
  volumeLevel.innerText = parseInt(volumeLevel.innerText) + 10;
  document.body.style.backgroundColor = `rgb(${Math.random()*256}, ${Math.random()*256}, ${Math.random()*256})`; /* Random background color */
}

function decreaseVolume() {
  var volumeLevel = document.getElementById("volume-level");
  volumeLevel.innerText = parseInt(volumeLevel.innerText) - 10;
  var volumeIndicator = document.getElementById("volume-indicator");
  volumeIndicator.style.fontSize = `${Math.random()*50 + 20}px`; /* Random font size */
}
