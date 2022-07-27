let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let winnerString;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (playerGuess, computerGuess, numberToGuess) => {
    
    let playerRange = Math.abs(playerGuess - numberToGuess);
    let computerRange = Math.abs(computerGuess - numberToGuess);
    
    //FINDS WHO IS CLOSEST TO TARGET AND DETERMINES WINNER
    if (playerRange < computerRange) {
        return true;
    } else if (playerRange > computerRange) {
        return false;
    } else {
        return true;
    }
}

const updateScore = (winnerString) => {
    if (winnerString == 'human') {
        humanScore = humanScore + 1;
    } else if (winnerString == 'computer') {
        computerScore = computerScore + 1;
    }
}

const advanceRound = () => {
    currentRoundNumber = currentRoundNumber + 1;
}