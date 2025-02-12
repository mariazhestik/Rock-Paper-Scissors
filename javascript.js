function computerChoice() {
    let cchoice = ["rock", "paper", "scissors"];
    return cchoice[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let person = prompt("Make your choice: ")
    return "Your choice is " + person;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie");
    } else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log("You win! Rock beats scissors!");
        } else if (computerChoice == "paper") {
            console.log("You lost! Paper beats rock!");
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats rock!");
        } else if (computerChoice == "scissors") {
            console.log("You lost! Scissors beat paper!");
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log("You win! Scissors beat paper!");
        } else if (computerChoice == "rock") {
            console.log("You lost! Rock beats scissors!")
        }
    }
}

console.log(computerChoice());

console.log(getHumanChoice());

let humanScore = 0;
let compuerScore = 0;
