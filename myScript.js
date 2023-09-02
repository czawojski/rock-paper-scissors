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

const computerSelection = getComputerChoice();

console.log(computerSelection);


let playerSelection = prompt("Choose one: rock, paper, scissors.");
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
playerSelection = playerSelection.toLowerCase();

// plays a single round of Rock Paper Scissors -- two parameters - the playerSelection and computerSelection
// return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" 
function playRound(playerSelection, computerSelection) {
    let result;
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
    else {
        result = 'Tie! No winner here.';
    }
    return result;
}
  
  console.log(playRound(playerSelection, computerSelection));