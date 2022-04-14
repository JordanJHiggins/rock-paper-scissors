const selection = ["Rock", "Paper", "Scissors"];

function computerPlay(selection) {
  return selection[Math.floor(Math.random() * selection.length)];
}

console.log(computerPlay(selection));
