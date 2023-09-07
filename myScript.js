let playerScore = 0;
let computerScore = 0;

// randomly returns ‘Rock’, ‘Paper’ or ‘Scissors’ to make the computer’s play
function getComputerChoice() {
    const textArray = [
        'rock',
        'paper',
        'scissors'
    ];
    const randomNumber = Math.floor(Math.random()*textArray.length);
    return textArray[randomNumber];
}

// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

// let playerselection ... through ... playerSelection.toLowerCase works HERE

// worked yesterday without these declarations, but won't work today without them:
let playerSelection;
let computerSelection;

// plays a single round of Rock Paper Scissors -- two parameters - the playerSelection and computerSelection

// return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" 
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Choose one: rock, paper, scissors.");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    // let result;
    if (playerSelection != null) {
        if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++;
            return 'You lose! Paper covers rock.'
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++;
            return 'You win! Rock crushes scissors.'
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            return 'You win! Paper covers rock.'
        }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++;
            return 'You lose! Scissors cut paper.'
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;
            return 'You lose! Rock crushes scissors.'
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            return 'You win! Scissors cut paper.'
        }
        else if (playerSelection === computerSelection) {
            return 'Tie! No winner here.'
        }
        // return result;
    }
}

// Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
function playGame() {
    for (let i = 0; i < 5; i++) {
        let x = playRound(playerSelection, computerSelection);
        console.log(x);
    }
}

    playGame();

    console.log('Your score: ' + playerScore);
    console.log('Computer score: ' + computerScore);

    declareWinner();

    function declareWinner() {
        if (playerScore > computerScore) {
            return 'You won the game!';
        }
        else if (computerScore > playerScore) {
            return 'You lost. Try again.';
        }
        else {
            return 'Tie game.';
        }
    }