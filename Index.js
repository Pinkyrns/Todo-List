let RandomNumber = Math.floor((Math.random() * 99) + 1);
const GuessField = document.querySelector("#guessField");
const Submit = document.querySelector("#submit");
const Guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultPress = document.querySelector(".resultPress");


const Para = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playgame = true;
if (playgame) {
    Submit.addEventListener('click', function (e) {
        e.preventDefault();
        const Guess = parseInt(GuessField.value);
        validateGuess(Guess);

    });
}
function validateGuess(Guess) {
    if (isNaN(Guess)) {
        alert("Please enter a valid number");
    }
    else if (Guess < 1) {
        alert("Please enter a number more than 1");
    }
    else if (Guess > 100) {
        alert("Please enter a number less than 100");
    }
    else {
        prevGuess.push(Guess);
        if (numGuess === 11) {
            displayMessage(`Game Over .Random number was ${RandomNumber} `);
            endGame();
        }
        else {
            displayGuess(Guess);
            checkGuess(Guess)
        }
    }
}

function checkGuess(Guess) {
    if (Guess === RandomNumber) {
        displayMessage(`You guessed it right`);
        endGame()
    } else if (Guess < RandomNumber) {
        displayMessage(`Number is TOOO low`)
    }
    else if (Guess > RandomNumber) {
        displayMessage(`Number is TOOO High`)
    }
}
function displayGuess(Guess) {
    GuessField.value = '';
    Guesses.innerHTML += `${Guess},  `;
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<p>${message}</p>`;
}

function endGame() {
    GuessField.value = '';
    GuessField.setAttribute('disabled', '');
    Para.classList.add('button');
    Para.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    resultPress.append(Para);
    playgame = false;
    newGame();
}
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        RandomNumber = Math.floor((Math.random() * 99) + 1);
        prevGuess = [];
        numGuess = 1;
        Guesses.innerHTML = '';
        lowOrHi.innerHTML = '';
        lastResult.innerHTML = `${11 - numGuess}`;
        GuessField.removeAttribute('disabled');
        resultPress.removeChild(Para);
        playgame = true;
    })
}
