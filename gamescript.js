// Generates a random choice for computer opponent
function computerPlay() {
  const selection = ["Rock", "Paper", "Scissors"];
  const random = selection[Math.floor(Math.random() * selection.length)];
  return random;
}
// takes players choice
let playerSelection = window.prompt("Make a selection");
let computerSelection = computerPlay();
// plays a single round between player and computer
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `You picked ${playerSelection} and your opponent picked ${computerSelection}. It's a tie!`;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "Rock beats paper.You win!";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "Rock beats paper. You win!";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "Rock beats paper. You win!";
  } else {
    return `${computerSelection} beats ${playerSelection}. You lose!`;
  }
}
//displays winner of round
console.log(playRound(playerSelection, computerSelection));
