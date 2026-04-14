let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        choice = "rock";
    }
    else if (choice === 1) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors!").toLowerCase();
    if (choice === "rock") {
        return choice;
    } else if (choice === "paper") {
        return choice;
    } else if (choice === "scissors") {
        return choice;
    } else {
        return getHumanChoice();
    }

}


function playRound(humanChoice, computerChoice) {
    // if choice are equal they draw
    // rocks beats scissors loses against paper
    // paper beats rock loses against scissor
    // scissor beats paper loses against rock
    if (humanChoice === computerChoice) {
        console.log("Draw");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper.");
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`)
        computerScore++;
    }

    console.log(`Score: ${humanScore} - ${computerScore}`);
}



function playGame() {
    
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}


playGame();