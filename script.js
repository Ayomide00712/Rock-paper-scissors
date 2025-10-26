function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }

    console.log(`Score → You: ${humanScore} | Computer: ${computerScore}`);
  }

  // Play 5 rounds
  for (let i = 1; i <= 5; i++) {
    const humanChoice = prompt(`Round ${i}: Enter rock, paper, or scissors`);
    const computerChoice = getComputerChoice();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    playRound(humanChoice, computerChoice);
    
  }

  // Final result
  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (humanScore < computerScore) {
    console.log("😔 Computer won the game!");
  } else {
    console.log("🤝 It's a draw!");
  }
}

playGame();
