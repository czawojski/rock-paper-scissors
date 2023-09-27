let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const textArray = [
        'rock',
        'paper',
        'scissors'
    ];
    const randomNumber = Math.floor(Math.random()*textArray.length);
    return textArray[randomNumber];
}

let playerSelection;
let computerSelection;

document.querySelectorAll("button").forEach(occurence => {
    let id = occurence.getAttribute('id');
    occurence.addEventListener("click", function playRound(playerSelection, computerSelection) {
        if (playerScore < 5 && computerScore < 5) {
            if (id == "rock") {
                playerSelection = 'rock';
            }
            if (id == "paper") {
                playerSelection = 'paper';
            }
            if (id == "scissors") {
                playerSelection = 'scissors';
            }

        console.log("Player: " + playerSelection);
        computerSelection = getComputerChoice();
        console.log("Computer: " + computerSelection);

            if (playerSelection === 'rock' && computerSelection === 'paper') {
                computerScore++;
                document.getElementById("result").innerHTML = "You lose! Paper covers rock.";
            }
            else if (playerSelection === 'rock' && computerSelection === 'scissors') {
                playerScore++;
                document.getElementById("result").innerHTML = "You win! Rock crushes scissors.";
            }
            else if (playerSelection === 'paper' && computerSelection === 'rock') {
                playerScore++;
                document.getElementById("result").innerHTML = "You win! Paper covers rock.";
            }
            else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                computerScore++;
                document.getElementById("result").innerHTML = "You lose! Scissors cut paper.";
            }
            else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                computerScore++;
                document.getElementById("result").innerHTML = "You lose! Rock crushes scissors.";
            }
            else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                playerScore++;
                document.getElementById("result").innerHTML = "You win! Scissors cut paper.";
            }
            else if (playerSelection === computerSelection) {
                document.getElementById("result").innerHTML = "Tie! No winner here.";
            }
            document.getElementById("playerScore").innerHTML = "Your score: " + playerScore;
            document.getElementById("computerScore").innerHTML = "Computer's score: " + computerScore;
        }
        else if (playerScore === 5) {
            document.getElementById("result").innerHTML = "YOU WIN THE GAME!";
        }
        else if (computerScore === 5) {
            document.getElementById("result").innerHTML = "GAME OVER. You lose.";
        }
        });
    });


// Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// v.2 -- For now, remove the logic that plays exactly five rounds.
// function playGame() {
    // for (let i = 0; i < 5; i++) {
        // let x = playRound(playerSelection, computerSelection);
        // console.log(x);
    // }
// }

    // playGame();

    // declareWinner();

    function declareWinner() {
        if (playerScore == 5) {
            return 'You won the game!';
        }
        else if (computerScore == 5) {
            return 'You lost. Try again.';
        }
    }