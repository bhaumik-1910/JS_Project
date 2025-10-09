const buttons = document.querySelectorAll('button');

const resultEL = document.querySelector('#result');

const userscoreEL = document.querySelector('#user-score');

const computerEL = document.querySelector('#computer-score');

let playerScore = 0;

let computerScore = 0;

buttons.forEach ((en) => {
    en.addEventListener('click' , function (){
        const result = playRound (en.id , computerPlay());
        return resultEL.textContent = result;
    })
})


function computerPlay()
{
    const arr = ["Rock","Paper","Scissor"]
    const randomSelection = Math.floor(Math.random() * arr.length)
    return arr[randomSelection]
    
};


function playRound(userselection , computerselection) {
    if (userselection === computerselection){
        return ("Game Tie !! " + userselection + " and " + computerselection + " both are same.")
    }else if ((userselection == "Rock" && computerselection == "Scissor") ||
             (userselection == "Rock" && computerselection == "Scissor") ||
             (userselection == "Rock" && computerselection == "Scissor")) 
        {
            playerScore++;
            userscoreEL.textContent = playerScore;
            console.log("PLAYER"+playerScore);
            return ("You Win ... 😁" + userselection + " beats " + computerselection)
        }
        else {
            {

            computerScore++;
            computerEL.textContent = computerScore;
            console.log("Computer"+computerScore);
            return ("You lose Game ... 😕 " + userselection + " beats " + computerselection)
        }
        }
}