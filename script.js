const valArr = ["rock" , "paper", "scissor"] ; 
let playerScore = 0 , 
    computerScore = 0 ; 
    
//random value generator 
function computerChoice(){ 
    return valArr[Math.floor(Math.random()* valArr.length)];
}
 
//all possible cases 
function gameRes(playerSelection , computerSelection){ 
     if(playerSelection === "") {
        console.log("you entered nothing");
        return ; 
    }else if(playerSelection === computerSelection){
        return `Tie Game`; 
    }else if (playerSelection === "rock" && computerSelection ==="scissor"){
        playerScore++ ; 
        return `Player won` ; 
    }else if (playerSelection === "paper" && computerSelection ==="rock"){
        playerScore++ ;
        return `Player won` ; 
    }else if (playerSelection === "scissor" && computerSelection ==="paper"){
        playerScore++ ;
        return `Player won` ; 
    }else if (playerSelection === "paper" && computerSelection ==="scissor"){
        computerScore++ ;
        return `Computer won` ; 
    }else if (playerSelection === "scissor" && computerSelection ==="rock"){
        computerScore++ ;
        return `Computer won` ; 
    }else if (playerSelection === "rock" && computerSelection ==="paper"){
        computerScore++ ;
        return `Computer won` ; 
    }else{
        return ; 
    }
}

// the one who get 5 point first wins 
function game(){
   do{
    const playerSelection= prompt("enter your choice").toLocaleLowerCase() ; 
    let computerSelection = computerChoice() ;   
    console.log(gameRes(playerSelection , computerSelection)) ; 
    console.log(`current player score: ${playerScore} || current computer Score ${computerScore}`);       
   }while(playerScore < 5 && computerScore < 5); 

   console.log("#################################################"); 
   console.log(`final player score: ${playerScore} final computer score ${computerScore}`); 

   //Evaluating The game 
   if(playerScore === 5){
    return `you won`; 
   }else if (computerScore === 5){
    return `You lost`; 
   }
}

console.log(game()); 