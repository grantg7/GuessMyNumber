'use strict';

/*
//DOM maniplulation
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number😁';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

//eventlisteners

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'NO NUMBER! ⛔';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'CORRECT! 😁';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO HIGH! ⬆️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER!☠️';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO LOW! ⬇️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER!☠️';
      document.querySelector('.score').textContent = 0;
    }
  }
});
