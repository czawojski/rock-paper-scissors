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

// plays a single round of Rock Paper Scissors -- two parameters - the playerSelection and computerSelection

// return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" 
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Choose one: rock, paper, scissors.");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    let result;
    if (playerSelection != null) {
        if (playerSelection === 'rock' && computerSelection === 'paper') {
        result = 'You lose! Paper covers rock.';
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            result = 'You win! Rock crushes scissors.';
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            result = 'You win! Paper covers rock.';
        }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            result = 'You lose! Scissors cut paper.';
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            result = 'You lose! Rock crushes scissors.';
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            result = 'You win! Scissors cut paper.';
        }
        else if (playerSelection === computerSelection) {
            result = 'Tie! No winner here.';
        }
        return result;
    }
}

// Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
}
    game();