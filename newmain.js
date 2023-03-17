let playerMove = "paper";
let computerMove = "scissors";

/*
    com     player
    R       p --
    R       S --
    P       R --
    P       S --
    S       P --
    S       R -- */

if (playerMove === "rock" && computerMove === "paper"){
    console.log("Player had rock, computer had paper. Computer wins")}
    else if(playerMove === "paper" && computerMove === "scissors"){
        console.log("Player had paper, computer had scissors. Computer wins")}
    else if(playerMove === "scissors" && computerMove === "rock"){
        console.log("Player had scissors, computer had rock. Computer wins")}
    else if(playerMove === "scissors" && computerMove === "paper"){
        console.log("Player had scissors, computer had paper. Player wins")}
    else if(playerMove === "rock" && computerMove === "scissors"){
        console.log("Player had rock, computer had scissors. Player wins")}
    else if(playerMove === "paper" && computerMove === "rock"){
        console.log("Player had paper, computer had rock. Player wins")}
    else if(playerMove === computerMove){
        console.log("Player and computer had the same thing. It's a draw!")
    }