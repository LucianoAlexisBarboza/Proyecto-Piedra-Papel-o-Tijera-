let random = ["Piedra", "Papel", "Tijera"];


function getComputerChoice() {
    return random [Math.floor(Math.random()*random.length)];
}
function getPlayerChoice() {
    let getPlayerChoice = prompt("Piedra, Papel o Tijera?");
    return getPlayerChoice;
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Piedra") {
        if (computerSelection === "Piedra") {
            console.log("Empate!");
        } else if (computerSelection === "Papel") {
            console.log("Perdiste!");
        } else console.log("Ganaste!");
    } else if (playerSelection === "Papel") {
        if (computerSelection === "Piedra") {
            console.log("Ganaste!");
        } else if (computerSelection === "Papel") {
            console.log("Empate!"); 
        } else console.log("Perdiste!")
    } else if (playerSelection === "Tijera") {
        if (computerSelection === "Piedra") {
            console.log("Perdiste!");
        } else if (computerSelection === "Papel") {
            console.log("Ganaste!"); 
        } else console.log("Empate!")
    } else console.log("ERROR: Tenes que introducir una de las 3 opciones!");
}

console.log(playRound(playerSelection, computerSelection));


