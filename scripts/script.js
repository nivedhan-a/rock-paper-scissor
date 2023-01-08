const options = ["rock", "paper", "scissors"];

//Computer

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}


let computerSelection = getComputerChoice();



//Player

function getPlayerChoice() {
  let validInput = false;
  
  while (validInput === false) {
    let choice = prompt("Rock Paper Scissors");
    if (choice === null) {
      console.log("Enter valid input");
      continue;
    } 

    let toLower = choice.toLowerCase();

    if (options.includes(toLower)) {
      validInput = true;
      return toLower;
    }
  }
}

let playerSelection = getPlayerChoice();


// Single Round

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
             (playerSelection === "scissors" && computerSelection === "paper") ||
             (playerSelection === "paper" && computerSelection === "rock")) {
              return "player";
  } else {
    return "computer";
  }
}

//5 times run

function game(playerSelection, computerSelection) {
  let computerScore = 0;
  let playerScore = 0; 
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();
    console.log("Player Selection is:");
    console.log(playerSelection);
    let computerSelection = getComputerChoice();
    console.log("Computer Selection is:");
    console.log(computerSelection);
    console.log("Winner is:")
    console.log(playRound(playerSelection, computerSelection));
    console.log("----------------------------------");
    if (playRound(playerSelection, computerSelection) === "player") {
      playerScore++;
    } else if (playRound(playerSelection, computerSelection) === "computer") {
      computerScore++;
    }
  } 
  console.log("Game over");
  if (playerScore > computerScore) {
    return "Player is the Winner";
  } else if (computerScore > playerScore) {
    return "Computer is the Winner";
  } else if (computerScore === playerScore){
    return "It's a tie";
  }
}



console.log(game(playerSelection, computerSelection));