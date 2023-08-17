function getComputerChoice(){
        choices = ["Rock", "Paper", "Scissors"];
        randomIndex = Math.floor(Math.random() * choices.length)
        return choices[randomIndex]
}
        

function playRound(playerSelection,computerSelection) {
        computerChoice = computerSelection
        if (playerSelection == computerChoice) {
                return "Tie";
            } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
                return "You lose(paper beats rock)";
            } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
                
                return "You win(rock beats scissors)";
            } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
                
                return "You win(paper beats rock)";
            } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
            
                return "You win(scissors beats paper)";
            } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
                return "You lose(rock beats scissors)";
            }
}

let computerSelection = getComputerChoice()
console.log(playRound("Rock",computerSelection))
       

function game() {
        let computerWins = 0;
        let playerWins = 0;
    
        for (let round = 0; round < 5; round++) {
            const playerChoice = prompt("What is your choice? ");
            if (!playerChoice) {
                console.log("Invalid input. Please enter 'rock', 'paper', or 'scissors'.");
                continue; 
            }
    
            const computerChoice = getComputerChoice();
            const roundResult = playRound(playerChoice, computerChoice);
            console.log(roundResult);
    
            if (roundResult.includes("win")) {
                playerWins++;
            } else if (roundResult.includes("lose")) {
                computerWins++;
            }
        }
    
        if (playerWins > computerWins) {
            console.log("You win the game!");
        } else if (computerWins > playerWins) {
            console.log("Computer wins the game!");
        } else {
            console.log("It's a tie game!");
        }
    }
game();
    