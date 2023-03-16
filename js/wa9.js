const customName = document.getElementById('customname');

const randomize = document.querySelector('.randomize');

const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'On an average day in Boulder, Colorado, about 60 degrees fahrenheit, :insertx: decided to go on a walk. She decided to put on her favorite :inserty: to prepare for the walk. When she went outside, everyone was making fun of her. Even her neighbor tried to hit her with a large :insertz: at her head that weighed about 20 pounds. The End.'; 
let insertX = ['Lilly Gwin', 'Katie Pellegrini', 'Jessica Youngs', 'MiRi Frasier', 'Kate Rowland'];
let insertY = ['blazer', 'green sweatsuit', 'corset', 'panties'];
let insertZ = ['tomato', 'capybara', 'shoe', 'corn husk', 'bunny rabbit'];
randomize.addEventListener('click', result);
function result() {
let newStory = storyText;

let xItem, yItem, zItem;
xItem = randomValueFromArray(insertX);
yItem = randomValueFromArray(insertY);
zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(':insertx:', xItem);
newStory = newStory.replace(':inserty:', yItem);
newStory = newStory.replace(':insertz:', zItem);

    if(customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replace('a little girl', name)+ '';
    }
  
    if(document.getElementById("uk").checked) {
      const weight = Math.round(300/14) + ' stone';
      const temperature =  Math.round((94-32)*(5/9)) + ' degrees centigrade';
      newStory = newStory.replace("2 degrees fahrenheit", temperature);  
      newStory = newStory.replace("20 pounds", weight); 
    }
  
    story.textContent = newStory;
    story.style.visibility = 'visible';
  }