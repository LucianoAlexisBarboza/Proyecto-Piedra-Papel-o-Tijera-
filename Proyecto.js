let random = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return random [Math.floor(Math.random()*random.length)];
}

function getPlayerChoice() {
   return Player = prompt("Rock, Paper or Scissors?");
}



function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection === "Rock".toLowerCase()) {
        if (computerSelection === "Paper") {
            computerScore++;
            console.log("You lose");
        } else if (computerSelection === "Scissors") {
            playerScore++;
            console.log("You win");
        } else console.log("Draw");
    } else if (playerSelection === "Paper".toLowerCase()) {
        if (computerSelection === "Rock") {
            playerScore++;
            console.log("You win");
        } else if (computerSelection === "Scissors") {
            computerScore++;
            console.log("You lose"); 
        } else console.log("Draw");
    } else if (playerSelection === "Scissors".toLowerCase()) {
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

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        playRound(playerSelection);            
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


