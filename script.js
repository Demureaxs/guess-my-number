'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

//generate a secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// function to display a message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// game logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
    // when player wins
  } else if (guess === secretNumber) {
    // sets the high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
    // what happens when win
    displayMessage('Winner Winner Chicken Dinner!');
    changeScore(score);
    // changes background to pink
    document.querySelector('body').style.backgroundColor = '#f76788';
    // number reveal and box sizing increase
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    //highscore update

    // when guess is wrong
  } else if (guess !== secretNumber && score > 1) {
    displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low');

    score--;
    changeScore(score);

    //
  } else {
    document.querySelector('.score').textContent = 0;
    displayMessage('You ran out of guesses, better luck next time.');
  }
});

//when guess is too high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('.message').textContent =
//         'You ran out of guesses, better luck next time.';
//     }

//     // when guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low';
//       score--;
//       document.querySelector('.score').textContent = score;

// again button
document.querySelector('.again').addEventListener('click', function () {
  //resets score
  score = 20;
  changeScore(score);
  //resets the message
  displayMessage('Start guessing...');
  //resets background color
  document.querySelector('body').style.backgroundColor = '#222222';
  //resets button size
  document.querySelector('.number').style.width = '15rem';
  //resets the score icon
  document.querySelector('.number').textContent = '?';
  //reset the guess box
  document.querySelector('.guess').value = '';
  // resets the secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
