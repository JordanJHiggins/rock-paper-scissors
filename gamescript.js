// Game
let tie = 0;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const selection = ["Rock", "Paper", "Scissors"];
  const random = selection[Math.floor(Math.random() * selection.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    tie++;
    console.log(
      `You picked ${playerSelection} and your opponent picked ${computerSelection}. It's a tie!`
    );
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore++;
    console.log("Rock beats paper.You win!");
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore++;
    console.log("Rock beats paper. You win!");
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore++;
    console.log("Rock beats paper. You win!");
  } else {
    computerScore++;
    console.log(`${computerSelection} beats ${playerSelection}. You lose!`);
  }
}

function result() {
  if (playerScore === 5) {
    console.log("You win the game!");
  } else if (computerScore === 5) {
    console.log("You lose the game!");
  }
}

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

// GUI
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

function scoreBoard() {
  const playerScoreMessage = document.createElement("div");

  playerScoreMessage.innerText = `Player: ${playerScore}`;

  document.body.appendChild(playerScoreMessage);
}

scoreBoard();
