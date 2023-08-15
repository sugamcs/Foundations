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
       
     