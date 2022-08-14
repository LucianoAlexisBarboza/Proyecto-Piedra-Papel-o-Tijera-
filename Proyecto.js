let random = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return random [Math.floor(Math.random()*random.length)];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            computerScore++;
            console.log("You lose");
        } else if (computerSelection === "Scissors") {
            playerScore++;
            console.log("You win");
        } else console.log("Draw");
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            playerScore++;
            console.log("You win");
        } else if (computerSelection === "Scissors") {
            computerScore++;
            console.log("You lose"); 
        } else console.log("Draw");
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            computerScore++;
            console.log("You lose");
        } else if (computerSelection === "Paper") {
            playerScore++;
            console.log("You win"); 
        } else console.log("Draw");
    }
}


let computerScore = 0;
let playerScore = 0;

function game(totalScore) {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        playRound(playerSelection)
     }
}

function score() {
    if (computerScore > playerScore) {
        console.log("You lose this game, press F5 to start again.")
    } else if (playerScore > computerScore) {
        console.log("You win this game, Congratulations!")
    } else console.log("Its a draw, press F5 to start again.")
}

console.log(game())
console.log(score())


