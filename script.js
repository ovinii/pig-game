'use strict';

// selecting scores
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const currScore0 = document.getElementById('current--0');
const currScore1 = document.getElementById('current--1');
// selecting btn's
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
// selecting the dice
const dice = document.querySelector('.dice');

let scores, currScore, activePlayer, playing;

// starting conditions
const init = function () {
  // scores
  scores = [0, 0]
  playing = true
  currScore = 0
  activePlayer = 0

  // reseting them game
  score0.textContent = 0
  score1.textContent = 0
  currScore0.textContent = 0
  currScore1.textContent = 0
  dice.classList.add('hidden')
  player0.classList.remove('player--winner')
  player1.classList.remove('player--winner')
  player0.classList.add('player--active')
  player1.classList.remove('player--active')
}

init()

// events section
btnRollDice.addEventListener('click', function () {
  if (playing) {
    // 1. show and display dice randomly
    const diceResult = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceResult}.png`;
    // 2. check for rolled 1
    if (diceResult !== 1) {
      currScore += diceResult;
      document.getElementById(`current--${activePlayer}`).textContent = currScore;
    } else {
      // switch to player2
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to active player's score
    scores[activePlayer] += currScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //2. check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      //finish the game
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      playing = false;
      dice.classList.remove('hidden');
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', init);

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}