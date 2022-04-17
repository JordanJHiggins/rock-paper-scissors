// generates a random choice for computer opponent
function computerPlay() {
  const selection = ["Rock", "Paper", "Scissors"];
  const random = selection[Math.floor(Math.random() * selection.length)];
  return random;
}

// plays a single round between player and computer
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    tie++;
    return `You picked ${playerSelection} and your opponent picked ${computerSelection}. It's a tie!`;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore++;
    return "Rock beats paper.You win!";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore++;
    return "Rock beats paper. You win!";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore++;
    return "Rock beats paper. You win!";
  } else {
    computerScore++;
    return `${computerSelection} beats ${playerSelection}. You lose!`;
  }
}
//plays 5 rounds of the game
let tie = 0;
let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = window.prompt("Make a selection");
    let computerSelection = computerPlay();

    console.log(`"Computer plays"${computerSelection}`);

    playRound(playerSelection, computerSelection);
  }
}

function result() {
  if (tie > playerScore && tie > computerScore) {
  }
}
console.log(game());
