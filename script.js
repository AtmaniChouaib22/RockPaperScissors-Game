//random Choice generator 
const choicesArray = ["rock" , "paper", "scissor"] ; 
let computerScore = 0 , playerScore = 0 ; 
function computerChoice(){ 
    return choicesArray[Math.floor(Math.random()* choicesArray.length)];
}
 
//all possible cases 
function playRound(playerSelect, computerSelect){ 
     if(playerSelect === "") {
        console.log("you entered nothing");
        return ; 
    }else if(playerSelect=== computerSelect){
        return `Tie Game`; 
    }else if (playerSelect === "rock" && computerSelect ==="scissor"){
        playerScore++ ; 
        return `Player won` ; 
    }else if (playerSelect === "paper" && computerSelect ==="rock"){
        playerScore++ ;
        return `Player won` ; 
    }else if (playerSelect === "scissor" && computerSelect ==="paper"){
        playerScore++ ;
        return `Player won` ; 
    }else if (playerSelect === "paper" && computerSelect ==="scissor"){
        computerScore++ ;
        return `Computer won` ; 
    }else if (playerSelect === "scissor" && computerSelect ==="rock"){
        computerScore++ ;
        return `Computer won` ; 
    }else if (playerSelect === "rock" && computerSelect ==="paper"){
        computerScore++ ;
        return `Computer won` ; 
    }else{
        return ; 
    }
}
function itIsFive(event){
    event.preventDefault(); 
}
const buttonSelect = document.querySelectorAll("button"); 
buttonSelect.forEach((button) =>{
    button.addEventListener("click", (e)=> {
        let computerSelection = computerChoice() ; 
        let playerSelection = button.getAttribute("data-value"); 
        let display = document.createElement("p"); 
        display.textContent = playRound(playerSelection , computerSelection); 
        const sec = document.querySelector("body"); 
        sec.setAttribute("class" , "displayStyle"); 
        sec.appendChild(display);
        if(playerScore===5 || computerScore===5){
            itIsFive(e); 
        }  
    }) 
})
 
