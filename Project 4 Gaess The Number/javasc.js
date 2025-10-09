let randomNumber = parseInt(Math.random() * 100 + 1);

const buttons = document.querySelector('#subt');
const form = document.querySelector('#form');
const userInput = document.querySelector('#guessField');
let InputArray = [];
const array = document.querySelector('.guesses');

let count = document.querySelector('.lastResult') ;
let counter = 10;

let play = true;


const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');


if (play){
    
    buttons.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt (userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert(`Plz Give an Velid Number`)
    } else if (guess < 1) {
        alert(`Plz Give an Velid Number Which is Greater than '1'`)
    } else if (guess > 100 ){
        alert(`Plz Give an Velid Number Which is Less than '100'`)
    } else {
        if (counter <= 0)
        {
            console.log("ok in validation");
            
            InputArray.push(guess);
            displayGuess(guess);
            displayMsg(`Game is Over , Random Numbe was ${guess}`)
            endGame();
        } else{
            checkGuess(guess);
            displayGuess(guess);
        }
    }
}
function checkGuess(guess) {
    if (guess === randomNumber)
    {
        displayMsg(`Congoo You Guess Write ...... 👌:) `);
        endGame();
    } else if (guess < randomNumber)
    {
        displayMsg (`You Guess lower Number then Random Number... 👎👎`);
    } else if (guess > randomNumber)
    {
        displayMsg(`You Guess Large Nuber the Random Number... 👍👍`)
    }
}

function displayGuess(guess) {
    userInput.value = '';
    InputArray.push(guess);
    counter -- ;
    array.innerHTML = `${InputArray}`;
    count.innerHTML = `${counter}`;
}

function displayMsg(Msg) {
    alert(Msg);
}

function endGame() {
    console.log("ok in endGame");
    play = false;
    userInput.value = '';
    buttons.setAttribute('disabled' , '');
    p.classList.add('button');
    p.innerHTML= `<h3 id = 'newStart'>"Start a New Game... :) "</h3>`;
    startOver.appendChild(p);
}

function startGame() {
    const newgame = document.querySelector('#newStart');
    newgame.addEventListener('click' , function (e){
        
        randomNumber = parseInt(Math.random() * 100 + 1);

        play = true;
        userInput.value = '';
        InputArray = [];
        array.innerHTML = `${InputArray}`;
        counter = 10;
        count.innerHTML = `${counter}`;
        buttons.removeAttribute('disabled');
        startOver.removeChild(p);

    })
}