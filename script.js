const buttons = document.querySelectorAll("button");
const resultsDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

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
    let message = "";

    humanChoice = buttons.id;

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      computerScore++;
      message = `Computer win!`;
    } else {
      humanScore++;
      message = `You win! `;
    }

    scoreDiv.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
    resultsDiv.textContent = message;
    if (humanScore === 5 || computerScore === 5) {
      const winner = humanScore === 5 ? "Human" : "Computer";
      resultsDiv.textContent = `${winner} wins the game!`;

      buttons.forEach((button) => {
        button.disabled = true;
      });
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const humanChoice = button.textContent;
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
    });
  });
}
playGame();
