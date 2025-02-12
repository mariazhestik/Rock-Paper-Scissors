function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice;
    do  {
        choice = promt("Make your choice (rock, scissors, paper): ").toLowerCase();
    } while (!["rock", "paper", "scissors"].includes(choice));
    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}, Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

console.log(getComputerChoice());

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
