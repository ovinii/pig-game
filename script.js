'use strict';

// selecting elements
const score0 = document.querySelector('#score--0')
const score1 = document.getElementById('score--1')
const dice = document.querySelector('.dice')
const rollDice = document.querySelector('.btn--roll')
const hold = document.querySelector('.btn--hold')
const newGame = document.querySelector('.btn--new')
let current0 = document.getElementById('current--0')
let current1 = document.getElementById('current--1')

// starting conditions
score0.textContent = 0
score1.textContent = 0
dice.classList.add('hidden')

// scores
let curr0Score = 0
let curr1Score = 0

rollDice.addEventListener('click', function () {
  // 1. show and display dice randomly
  const diceResult = Math.trunc(Math.random() * 6) + 1
  dice.classList.remove('hidden')
  dice.src = `dice-${diceResult}.png`
  // 2. check for rolled 1
  if (diceResult !== 1) {
    curr0Score += diceResult
    current0.textContent = curr0Score
  } else {
    // switch to player2
  }
})