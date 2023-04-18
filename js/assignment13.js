const volumeUp = document.querySelector('#volume-up');
const volumeDown = document.querySelector('#volume-down');

volumeUp.addEventListener('click', () => {
  for(let i = 0; i < 999999999; i++) {
    console.log('Turning volume up...');
  }
});

volumeDown.addEventListener('click', () => {
  for(let i = 0; i < 999999999; i++) {
    console.log('Turning volume down...');
  }
});
