/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

const newImg = document.createElement('img');
newImg.classList.add('goblin-image');
newImg.setAttribute('src', './src/image/goblin.png');
let images = document.getElementsByClassName('goblin-image');
const goblinImage = images[0];

const amountElement = document.getElementsByClassName('scores-amount')[0];
const gameOverEl = document.getElementsByClassName('game-over')[0];


const positions = document.getElementsByClassName('field');
const positionsArray = [...positions];

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function forClick() {
  images[0].remove();
  score.push(1);
  let sum = 0;
  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  amountElement.textContent = sum;
  falled.pop();
}

let score = [];
let falled = [];
function removeGoblin() {
  const randomNum = getRandomInRange(0, 15);
  const parentElement = positionsArray[randomNum];
  if (!parentElement.contains(goblinImage)) {
    parentElement.appendChild(newImg);
    falled.push(1);
    images = [...images];
    images[0].addEventListener('click', forClick);
  } else if (images.length > 1) {
    images[0].remove();
  }
  if (falled.length === 5) {
    gameOverEl.style.display = 'block';
    images[0].removeEventListener('click', forClick);
    clearInterval(timerID);
  }
}


let timerID = setInterval(removeGoblin, 1000);
