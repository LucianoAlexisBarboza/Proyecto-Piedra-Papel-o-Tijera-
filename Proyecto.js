function getComputerChoice() {
    return random [Math.floor(Math.random()*random.length)];
}

const random = ["Piedra", "Papel", "Tijera"];
console.log(getComputerChoice());



