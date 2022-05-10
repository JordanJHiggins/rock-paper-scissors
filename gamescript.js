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
    return console.log(
      `You picked ${playerSelection} and your opponent picked ${computerSelection}. It's a tie!`
    );
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore++;
    return console.log("Rock beats paper.You win!");
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore++;
    return console.log("Rock beats paper. You win!");
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore++;
    return console.log("Rock beats paper. You win!");
  } else {
    computerScore++;
    return console.log(
      `${computerSelection} beats ${playerSelection}. You lose!`
    );
  }
}
//stores score count
let tie = 0;
let playerScore = 0;
let computerScore = 0;
// plays five rounds
/*
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = window.prompt("Make a selection");
    let computerSelection = computerPlay();

    console.log(`Computer chooses ${computerSelection}.`);

    playRound(playerSelection, computerSelection);
  }
}
*/
// determines winner and loser
function result() {
  if (tie > playerScore && tie > computerScore) {
    console.log("It's a tie!");
  } else if (playerScore > computerScore) {
    console.log("You win the game!");
  } else {
    console.log("You lose the game!");
  }
}
// game();

// creates three buttons
function createButtons() {
  const rockButton = document.createElement("button");
  const paperButton = document.createElement("button");
  const scissorButton = document.createElement("button");

  rockButton.innerText = "Rock";
  paperButton.innerText = "Paper";
  scissorButton.innerText = "Scissors";

  document.body.appendChild(rockButton);
  document.body.appendChild(paperButton);
  document.body.appendChild(scissorButton);

  rockButton.addEventListener("click", () => {
    playRound("Rock", computerPlay());
  });

  paperButton.addEventListener("click", () => {
    playRound("Paper", computerPlay());
  });

  scissorButton.addEventListener("click", () => {
    playRound("Scissors", computerPlay());
  });
}

createButtons();
