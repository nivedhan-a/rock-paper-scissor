function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const choice = options[Math.floor(Math.random() * options.length)]; 
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  let result = checkWinner(playerSelection, computerSelection);
  if (result === "Player") {
    return `Player wins, ${playerSelection} beats ${computerSelection}`;  
  } else if (result === "Computer") {
    return `Computer wins, ${computerSelection} beats ${playerSelection}`;
  } else {
    return "Tie"
  }
}





function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();