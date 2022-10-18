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
            computerScore++;
            computer.textContent = computerScore;
        } else if (computerSelection === "Scissors") {
            playerScore++;
            player.textContent = playerScore;
        }
    } else if (button.id === "2") {
        if (computerSelection === "Rock") {
            playerScore++;
            player.textContent = playerScore;
        } else if (computerSelection === "Scissors") {
            computerScore++;
            computer.textContent = computerScore;
        }
    } else if (button.id === "3") {
        if (computerSelection === "Rock") {
            computerScore++;
            computer.textContent = computerScore;
        } else if (computerSelection === "Paper") {
            playerScore++;
            player.textContent = playerScore;
        }
    }
    if (computerScore === 3) {
        console.log("You Lose");
        document.getElementById("divA").textContent = "Perdiste! Presiona F5 para volver a jugar!";   
    } else if(playerScore === 3) {
        console.log("You Win");
        document.getElementById("divA").textContent = "Felicitaciones, ganaste!";       
    }
  });
});