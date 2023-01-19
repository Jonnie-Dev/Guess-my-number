'use strict';

let _secretNumber = Math.floor(Math.random() * 20) + 1;
const secretNumberElement = document.querySelector('.number');

const scoreElement = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');

let score = 20
let highScore = 0

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

const reset = _ => {
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumberElement.style.width = '27.5rem';
  secretNumberElement.textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  scoreElement.textContent = 20;
  score = 20;
  _secretNumber = Math.floor(Math.random() * 20) + 1;
};

const check = () => {
  const guess = +document.querySelector('.guess').value;

   // When there's no input
  if (!guess || guess == 0) {
    displayMessage('⛔ Invalid number!');

    // When player wins
  } else if (guess === _secretNumber) {
    displayMessage('🎉 Correct Number!');

    secretNumberElement.textContent = _secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    secretNumberElement.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      highscoreEl.textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== _secretNumber) {
      if (score <= 1) {
        displayMessage('💥Sorry, You lost the game!');
        document.querySelector('.score').textContent = 0;
      } else if (score >= 2) {
        displayMessage(guess > _secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } 
    }
};

checkBtn.addEventListener('click', check);

againBtn.addEventListener('click', reset);

