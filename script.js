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

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('NO NUMBER! ⛔');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('CORRECT! 😁');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'TOO HIGH! ⬆️' : 'TOO LOW! ⬇️');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('GAME OVER! ☠️');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//     // When guess is too high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'TOO HIGH! ⬆️';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'GAME OVER!☠️';
//       document.querySelector('.score').textContent = 0;
//     }
//     // When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'TOO LOW! ⬇️';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'GAME OVER!☠️';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// This is my take on this code... lets see what he does.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//     // When guess is too high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'TOO HIGH! ⬆️';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'GAME OVER!☠️';
//       document.querySelector('.score').textContent = 0;
//     }
//     // When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'TOO LOW! ⬇️';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'GAME OVER!☠️';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
