const selection = ["Rock", "Paper", "Scissors"];
const random = Math.floor(Math.random() * selection.length);

function computerPlay() {
  return random, selection[random];
}

const playerSelection = window.prompt("Make a selection");

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection + " " + computerPlay());
}

playRound(playerSelection);
