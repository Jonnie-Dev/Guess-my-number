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

const check = () => {
  let messageContent = '';

  if (score > 0) {
    if (!inputElement.value) {
      messageContent = '🚨No Number!🚨';
    } else if (inputElement.value == secretNumber) {
      messageContent = '💥🎉 Correct Number!';

      secretNumberElement.textContent = inputElement.value;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '27.5rem';

      score > highscoreElement.textContent
        ? (highscoreElement.textContent = score)
        : highscoreElement.textContent;
    } else {
      if (inputElement.value > secretNumber) {
        messageContent = '📉Too high';
      } else {
        messageContent = ' 📈Too low';
      }
      score -= 1;
      scoreElement.textContent = score;
    }
  } else {
    messageContent = 'So sad, you lost 🤦‍♂️';
  }

  message.textContent = messageContent;
};

checkBtn.addEventListener('click', check);

againBtn.addEventListener('click', reset);
