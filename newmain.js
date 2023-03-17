// let hardCodedPlayerMove = "rock";
// let hardCodedComputerMove = "rock";
    let possibleComputerMoves = [`rock`, `paper`, `scissors`]
/*
    com     player
    R       p --
    R       S --
    P       R --
    P       S --
    S       P --
    S       R -- */

    function getRandomInt(max){
        return Math.floor(Math.random()*max)
    }
    
    let randomInt = getRandomInt(3)
    console.log(randomInt)
    
    let randomComputerMove = possibleComputerMoves[randomInt]

    console.log(`The computer chose ${randomComputerMove}`)

    function getWinner(playerMove, computerMove){
        if (playerMove === "rock" && computerMove === "paper"){
    //console.log("Player had rock, computer had paper. Computer wins")
    return -1;
}
    else if(playerMove === "paper" && computerMove === "scissors"){
        //console.log("Player had paper, computer had scissors. Computer wins")
        return -1;
    }
    else if(playerMove === "scissors" && computerMove === "rock"){
        //console.log("Player had scissors, computer had rock. Computer wins")
        return -1;
    }
    else if(playerMove === "scissors" && computerMove === "paper"){
        //console.log("Player had scissors, computer had paper. Player wins")
        return 1;
    }
    else if(playerMove === "rock" && computerMove === "scissors"){
        //console.log("Player had rock, computer had scissors. Player wins")
        return 1;
    }
    else if(playerMove === "paper" && computerMove === "rock"){
        //console.log("Player had paper, computer had rock. Player wins")
        return 1;
    }
    else if(playerMove === computerMove){
        //console.log("Player and computer had the same thing. It's a draw!")
        return 0;
    }
    }

   alert(getWinner(prompt(`Type Rock, Paper, or Scissors.`), randomComputerMove))