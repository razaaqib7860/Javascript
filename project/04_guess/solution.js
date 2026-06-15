let randomGuess = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const displayGuesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const NewGame = document.querySelector('.resultParas');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    ValidateGuess(guess);
  });

  function ValidateGuess(guess) {
    if (isNaN(guess)) {
      alert('PLease enter a valid number');
    } else if (guess < 1) {
      alert('PLease enter a number more than 1');
    } else if (guess > 100) {
      alert('PLease enter a  number less than 100');
    } else {
      prevGuess.push(guess);
      if (numGuess > 10) {
        displayGuess(guess);
        console.log(`Game Over You Dumb 😏, The Value is ${randomGuess}`);
        endGame();
      } else {
        displayGuess(guess);
        checkGuess(guess);
      }
    }
  }

  function checkGuess(guess) {
    if (guess === randomGuess) {
      displayMessage('You Guessed it Right , Fuck You 🖕🏻');
      endGame();
    } else if (guess < randomGuess) {
      displayMessage('guess too low , like your dihhh 🤧');
    } else if (guess > randomGuess) {
      displayMessage('guess too high, like my dihhh 🙈');
    } else {
      prevGuess.push(guess);
    }
  }

  function displayGuess(guess) {
    userInput.value = '';
    // diclare guess as a empty so that user can input again.
    displayGuesses.innerHTML += `${guess},  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
  }

  function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
  }

  const p = document.createElement('p');
  
  function endGame() {
    userInput.value = '';
    userInput.setAttribute(`disabled`, '');

    //### create a button for newGame
    p.classList.add('button');
    // its create a p and add a class button
    p.innerHTML = `<h2 id="newGame">Start New Game, NGU 🫶🏻 </h1>`;
    // its just add text in p
    NewGame.appendChild(p);
    // add this p in NewGame part( check declared constant)
    playGame = false;
    newGame();
  }

  function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomGuess = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      remaining.innerHTML = `${11 - numGuess} `;
      displayGuesses.innerHTML = '';
      userInput.removeAttribute(`disabled`, '');
      NewGame.removeChild(p);
      playGame = true;
    });
  }
}
