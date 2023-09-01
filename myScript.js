// randomly returns ‘Rock’, ‘Paper’ or ‘Scissors’ to make the computer’s play
function getComputerChoice() {
    const textArray = [
        'Rock',
        'Paper',
        'Scissors'
    ];
    const randomNumber = Math.floor(Math.random()*textArray.length);
    return textArray[randomNumber];
}

console.log(getComputerChoice());