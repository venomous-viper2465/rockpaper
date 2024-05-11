
let humanScore=0;
let computerScore=0;



function playGame(humanChoice){
    if(computerScore!=5 && humanScore!=5){
        let b=getComputerChoice();
        playround(humanChoice, b);
       
        console.log(humanScore);
        console.log(computerScore);
        return;
    }
    else{
    (humanScore>computerScore) ? (console.log(`user won ${computerScore}`)) : (console.log(`You failed computer score is ${computerScore}`));
    humanScore=0;
    computerScore=0;
    return;
    }
    
}

function getComputerChoice(){
    let a=Math.random();
    if(a<=0.33){
        return "ROCK";
    }
    else if(a>=0.67){
        return "PAPER";
    }
    else{
        return "SCISSORS";
    }
}

function playround(human, computer){
    if(human===computer) return;
    else if((human==="ROCK" && computer ==="SCISSORS") || (human==="SCISSORS" && computer==="PAPER") || (human==="PAPER" && computer==="ROCK")){
       humanScore=humanScore+1;
    }
    else if((computer==="ROCK" && human==="SCISSORS") || (computer==="SCISSORS" && human==="PAPER") || (computer==="PAPER" && human==="ROCK")){
        computerScore=computerScore+1;
    }
    document.getElementById('player1').textContent=`Player 1:  ${humanScore}`;
    document.getElementById('player2').textContent=`Player 2:  ${computerScore}`;
}

let rock=document.getElementById("rockss");
let paper=document.querySelector("#paper");
let scissors=document.querySelector("#scissors");
rock=addEventListener("click", ()=>{playGame("ROCK")});
paper=addEventListener("click", ()=>{playGame("PAPER")});
scissors=addEventListener("click", ()=>{playGame("SCISSORS")});
