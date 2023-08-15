function getComputerChoice(){
        choices = ["Rock", "Paper", "Scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex]
}

const computerChoice = getComputerChoice() 


function round(playerSelection,computerSelection){
        computerSelection = computerChoice
        if (playerSelection == computerChoice){
                return "Tie"
        }else if(playerSelection.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper" ) {
                return "You lose(paper,rock)"
        }else if(playerSelection.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors" ) {
                return "You win(rock,scissors)"
        }else if(playerSelection.toLowerCase() === "paper" && computerChoice.toLowerCase() ==="rock" ) {
                return "You win(paper,rock)"
        }else if (playerSelection.toLowerCase() === "scissors"&& computerChoice.toLowerCase() === "paper") {
                return "You win(scissors,paper)"
        }else if (playerSelection.toLowerCase() === "scissors"&& computerChoice.toLowerCase() === "rock") {
                return "You lose(scissors,rock)"
        }
}
console.log(round("rock", computerChoice))