
let computerScore = 0 , playerScore = 0 ; 
//random Choice generator 
function computerChoice(){ 
    const choicesArray = ["rock" , "paper", "scissor"] ; 
    return choicesArray[Math.floor(Math.random()* choicesArray.length)];
}
 
//Game Logic
function playRound(playerSelect, computerSelect){ 
     if(playerSelect === "") {
        console.log("you entered nothing");
        return ; 
    }else if(playerSelect=== computerSelect){
        return `Tie Game You!! you ${playerScore} || computer ${computerScore}`; 
    }else if (playerSelect === "rock" && computerSelect ==="scissor"){
        playerScore++ ; 
        return `Player won!! you ${playerScore} || computer ${computerScore}` ; 
    }else if (playerSelect === "paper" && computerSelect ==="rock"){
        playerScore++ ;
        return `Player won!! you ${playerScore} || computer ${computerScore}` ; 
    }else if (playerSelect === "scissor" && computerSelect ==="paper"){
        playerScore++ ;
        return `Player won!! you ${playerScore} || computer ${computerScore}` ; 
    }else if (playerSelect === "paper" && computerSelect ==="scissor"){
        computerScore++ ;
        return `Computer won!! you ${playerScore} || computer ${computerScore}` ; 
    }else if (playerSelect === "scissor" && computerSelect ==="rock"){
        computerScore++ ;
        return `Computer won you ${playerScore} || computer ${computerScore}` ; 
    }else if (playerSelect === "rock" && computerSelect ==="paper"){
        computerScore++ ;
        return `Computer won you ${playerScore} || computer ${computerScore}` ; 
    }else{
        return ; 
    }
}

const btn = document.querySelectorAll("button"); 
const output = document.querySelector('.output'); 

function endGame(){
    console.log("game ended"); 
    btn.forEach(button => {
        button.removeEventListener("click", gameFunc); 
    })
}

function gameFunc(e){ 
    let playerSelection = e.target.getAttribute("data-value"); 
    let computerSelection = computerChoice(); 
    let resText = document.createElement("p"); //created a p element
    resText.textContent = playRound(playerSelection,computerSelection); //resault inside p
    output.append(resText);  //appending resault to output container
    //checking resaults
    if(playerScore===5 || computerScore===5){
        endGame(); 
        return;
    } 
};

btn.forEach(button => {
    button.addEventListener("click", gameFunc)
});
 
