// let hardCodedPlayerMove = "rock";
// let hardCodedComputerMove = "rock";
    let possibleComputerMoves = [`rock`, `paper`, `scissors`];
    let numberOfGames = 0;
    let playerWins = 0;
    let playerLosses = 0;
    let playerDraws = 0;
/*
    com     player
    R       p --
    R       S --
    P       R --
    P       S --
    S       P --
    S       R -- */

    function getWinner(playerMove, computerMove){
        if (playerMove === "rock" && computerMove === "paper"){
    //console.log("Player had rock, computer had paper. Computer wins")
    playerLosses ++;
    return 'You lose';
}
    else if(playerMove === "paper" && computerMove === "scissors"){
        //console.log("Player had paper, computer had scissors. Computer wins")
        playerLosses ++;
        return 'You lose';
    }
    else if(playerMove === "scissors" && computerMove === "rock"){
        //console.log("Player had scissors, computer had rock. Computer wins")
        playerLosses ++;
        return 'You lose';
    }
    else if(playerMove === "scissors" && computerMove === "paper"){
        //console.log("Player had scissors, computer had paper. Player wins")
        playerWins ++;
        return 'You win';
    }
    else if(playerMove === "rock" && computerMove === "scissors"){
        //console.log("Player had rock, computer had scissors. Player wins")
        playerWins ++;
        return 'You win';
    }
    else if(playerMove === "paper" && computerMove === "rock"){
        //console.log("Player had paper, computer had rock. Player wins")
        playerWins ++;
        return 'You win';
    }
    else if(playerMove === computerMove){
        //console.log("Player and computer had the same thing. It's a draw!")
        playerDraws ++;
        return "It's a draw";
    }
    }

    function getRandomInt(max){
        return Math.floor(Math.random()*max)
    }

    let wantsToKeepPlaying = true;

    while (wantsToKeepPlaying === true){
    numberOfGames ++;
    let randomInt = getRandomInt(3);
    console.log(randomInt);
    
    let randomComputerMove = possibleComputerMoves[randomInt]
    console.log(`The computer chose ${randomComputerMove}`)

let userInput = prompt(`Type rock, paper, or scissors.`);
console.log(`The player chose ${userInput}`);
   alert(getWinner(userInput, randomComputerMove));

   if (confirm(`You have played ${numberOfGames} game(s). You have ${playerWins} wins, ${playerLosses} losses, and ${playerDraws} draws. Would you like to play again?`) === false){
    wantsToKeepPlaying = false;
   }
    }

/* There will be playerWins, playerLosses, playerDraws*/