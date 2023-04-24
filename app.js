const userChoiceDisplay = document.createElement("h1");
const computerChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");
const gameGrid = document.getElementById("game");
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ["rock", "paper", "scissors"];
let userChoice;
let computerChoice;

const handleClick = (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = "User choices: " + userChoice;
  generateComputerChoices();
  getResult();
};

const generateComputerChoices = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice = randomChoice;
  computerChoiceDisplay.innerHTML = "Computer choices: " + computerChoice;
};

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement("button");
  button.id = choices[i]; // You can delete this if you want to use e.target.innerHTML in the handleClick
  button.innerHTML = choices[i];
  button.addEventListener("click", handleClick);
  gameGrid.appendChild(button);
}

const getResult = () => {
  if (userChoice === computerChoice) {
    resultDisplay.innerHTML = "IT'S A DRAW!";
  } else {
    switch (userChoice + computerChoice) {
      case "rockscissors":
      case "paperrock":
      case "scissorspaper":
        resultDisplay.innerHTML = "YOU WIN!";
        break;
      case "rockpaper":
      case "paperscissors":
      case "scissorsrock":
        resultDisplay.innerHTML = "YOU LOSE!";
        break;
      default:
        resultDisplay.innerHTML = "SOMETHING IS WRONG!!!";
    }
  }
};
