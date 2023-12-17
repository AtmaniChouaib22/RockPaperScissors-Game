let playerScore = 0 , 
    pcScore = 0 , 
    winner = ""; 

let rockButton = document.querySelector(".rock"); 
let paperButton = document.querySelector(".paper"); 
let scissorButton = document.querySelector(".scissor"); 
let playerShowBox = document.querySelector(".pshow-box"); 
let pcShowBox = document.querySelector(".pcshow-box") ; 
let statusDisplay = document.querySelector(".status"); 
let playerShowScore = document.querySelector(".pshowcount"); 
let pcShowScore = document.querySelector(".pcshowcount"); 


function randomChoice(){ 
    const choicesArray = ["rock" , "paper", "scissor"] ; 
    let pcSelection = choicesArray[Math.floor(Math.random()* choicesArray.length)];

    if(pcSelection === 'rock'){
        pcShowBox.innerHTML = '<p>🧱</p>' ; 
    }else if(pcSelection === "paper"){
        pcShowBox.innerHTML = '<p>🧻</p>' ;
    }else if(pcSelection === 'scissor'){
        pcShowBox.innerHTML = '<p>✂️</p>' ;
    }
    return pcSelection ; 
}


function playRound(playerSelection , pcSelection){
    if(playerSelection === pcSelection){
        return `tie Game 😑`; 
    }else if(playerSelection === "rock" && pcSelection === "scissor"){
        playerScore++ ; 
        return `player won 😎`; 
    }else if(playerSelection === "paper" && pcSelection === "rock"){
        playerScore++ ; 
        return `player won 😎`; 
    }else if(playerSelection === "scissor" && pcSelection === "paper"){
        playerScore++ ; 
        return `player won 😎`; 
    }else if(playerSelection === "rock" && pcSelection === "paper"){
        pcScore++ ; 
        return `pc won 💻`; 
    }else if(playerSelection === "paper" && pcSelection === "scissor"){
        pcScore++ ; 
        return `pc won 💻`; 
    }else if(playerSelection === "scissor" && pcSelection === "rock"){
        pcScore++ ; 
        return `pc won 💻`; 
    }
}; 

function findWinner(){
    if(playerScore ===5 ){ 
        return `You won the Game 🦸` ; 
    }else if(pcScore === 5){
        return `You lost Looser 👎`; 
    }else{
        return ;
    }
};
//clear and rset resault of the game 
function reset(){
    playerScore = 0 ; 
    pcScore = 0 ; 
    winner = ''; 
    pcShowScore.textContent = pcScore ; 
    playerShowScore.textContent = playerScore; 
    playerShowBox.innerHTML = '<p>❔</p>';
    pcShowBox.innerHTML = '<p>❔</p>' ; 
    statusDisplay.textContent = "choose To play Again";
    statusDisplay.classList.toggle("onwinpop") ; 
    //inabele events again 
    rockButton.addEventListener("click" , rockFunc);
    paperButton.addEventListener("click",paperFunc);
    scissorButton.addEventListener("click" ,scissorFunc);

}

function endGame(){
    rockButton.removeEventListener("click" , rockFunc);
    paperButton.removeEventListener("click",paperFunc);
    scissorButton.removeEventListener("click" ,scissorFunc);
    setTimeout(reset , 5000);  
};

//if user selected the rock 
function rockFunc(){
    let playerSelected = "rock"; // setting player selection
    let pcSelected = randomChoice(); //setting pc selection 
    playerShowBox.innerHTML = '<p>🧱</p>'; //appending selected emo on screen
    let roundWinner = playRound(playerSelected , pcSelected); //starting the game 
    playerShowScore.textContent = playerScore ; //appending score
    pcShowScore.textContent = pcScore ; 
    statusDisplay.textContent = roundWinner;  //appendng roundwinner
    let winner = findWinner(); //checking for winner

    if(playerScore ===  5|| pcScore === 5){    //checking for game end
        statusDisplay.classList.toggle("onwinpop"); 
        statusDisplay.textContent = winner;   //appending final winner to status 
        endGame(); 
    }
};
rockButton.addEventListener("click", rockFunc); 

//if player selected paper 
function paperFunc(){
    let playerSelected = "paper"; // setting player selection
    let pcSelected = randomChoice(); //setting pc selection 
    playerShowBox.innerHTML = '<p>🧻</p>'; //appending selected emo on screen
    let roundWinner = playRound(playerSelected , pcSelected); //starting the game 
    playerShowScore.textContent = playerScore ; //appending score
    pcShowScore.textContent = pcScore ; 
    statusDisplay.textContent = roundWinner;  //appendng roundwinner
    let winner = findWinner(); //checking for winner

    if(playerScore === 5 || pcScore === 5){    //checking for game end
        statusDisplay.classList.toggle("onwinpop") ; 
        statusDisplay.textContent = winner;   //appending final winner to status 
        endGame(); 
    }
};

paperButton.addEventListener("click", paperFunc); 

//if player selected scissor 
function scissorFunc(){
    let playerSelected = "scissor"; // setting player selection
    let pcSelected = randomChoice(); //setting pc selection 
    playerShowBox.innerHTML = '<p>✂️</p>'; //appending selected emo on screen
    let roundWinner = playRound(playerSelected , pcSelected); //starting the game 
    playerShowScore.textContent = playerScore ; //appending score
    pcShowScore.textContent = pcScore ; 
    statusDisplay.textContent = roundWinner;  //appendng roundwinner
    let winner = findWinner();  //checking for winner

    if(winner != undefined){    //checking for game end
        statusDisplay.classList.toggle("onwinpop") ; 
        statusDisplay.textContent = winner;  //appending final winner to status 
        endGame(); 
    }
};

scissorButton.addEventListener("click",scissorFunc); 