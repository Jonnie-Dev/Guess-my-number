'use strict';

const secretNumber = Math.floor(Math.random() * 20) + 1;

const secretNumberElement = document.querySelector('.number');

const inputElement = document.querySelector('.guess');

const message = document.querySelector('.message');

const scoreElement = document.querySelector('.score');

let score = Number(scoreElement.textContent);

const highscoreElement = document.querySelector('.highscore');

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

const reset = _ => {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '27.5rem';
  secretNumberElement.textContent = '?';
  inputElement.value = '';
  message.textContent = 'Start guessing...';
  scoreElement.textContent = 20;
  score = 20;
};

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

const check = () => {
   // When there's no input
  if (!guess && guess != 0) {
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
      if (score <= 1) {
        displayMessage('💥Sorry, You lost the game!');
        document.querySelector('.score').textContent = 0;
      } else if (score >= 2) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } 
    }
};

checkBtn.addEventListener('click', check);

againBtn.addEventListener('click', reset);

