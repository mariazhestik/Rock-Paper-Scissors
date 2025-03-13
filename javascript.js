let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

/*
function getHumanChoice() {
    let choice;
    do  {
        choice = prompt("Make your choice (rock, scissors, paper): ").toLowerCase();
    } while (!["rock", "paper", "scissors"].includes(choice));
    return choice;
}
*/


function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const resultDiv = document.getElementById("result");
    const scoreDiv = document.getElementById("score");

    let resultText = (`You chose: ${humanChoice}, Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        resultText += "It's a tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultText +=  (`You won! ${humanChoice} beats ${computerChoice}`);
        
    } else {
        resultText += (`You lost! ${computerChoice} beats ${humanChoice}`);
        return "lose";
    }

    resultDiv.textContent = resultText;
    scoreDiv.textContent = `Score: You - ${humanScore}, computer - ${computerScore}`;

    if (humanScore === 5) {
        resultDiv.innerText = "You won the game";
        disableButtons();
    } else if (computerScore === 5) {
        resultDiv.innerTetx = "Computer wom the game";
    }
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));

/*
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    console.log("Welcome to the game! Best of 5 rounds.");

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i}: `);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);

        if (result === "win"){
            humanScore++;
        } else if(result === "lose"){
            computerScore++;
        }

        console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log("Game over!");
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game ended in a draw!");
    }
}
*/

playGame();


