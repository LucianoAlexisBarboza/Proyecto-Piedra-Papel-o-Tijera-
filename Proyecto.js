let random = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return random [Math.floor(Math.random()*random.length)];
}

const buttons = document.querySelectorAll('button');
const player = document.getElementById('span')
const computer = document.getElementById('span1')

let computerScore = 0;
let playerScore = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    if (button.id === "1") {
        if (computerSelection === "Paper") {
            console.log("You lose");
            computerScore++;
            computer.textContent = computerScore;
        } else if (computerSelection === "Scissors") {
            console.log("You win");
            playerScore++;
            player.textContent = playerScore;
        } else console.log("Draw");
    } else if (button.id === "2") {
        if (computerSelection === "Rock") {
            console.log("You win");
            playerScore++;
            player.textContent = playerScore;
        } else if (computerSelection === "Scissors") {
            console.log("You lose"); 
            computerScore++;
            computer.textContent = computerScore;
        } else console.log("Draw");
    } else if (button.id === "3") {
        if (computerSelection === "Rock") {
            console.log("You lose"); 
            computerScore++;
            computer.textContent = computerScore;
        } else if (computerSelection === "Paper") {
            console.log("You win");
            playerScore++;
            player.textContent = playerScore;
        } else console.log("Draw");
    }
  });
});


