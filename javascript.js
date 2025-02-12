function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice;
    do  {
        choice = prompt("Make your choice (rock, scissors, paper): ").toLowerCase();
    } while (!["rock", "paper", "scissors"].includes(choice));
    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}, Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie");
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        return "win";
    } else {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        return "lose";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    console.log("Welcome to trhe game! Best of 5 rounds.");

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

playGame();


