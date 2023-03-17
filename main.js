let compWins = 0
let userWins = 0
let isValidResponse = false

//Check the user inputs something valid (Rock, Paper, or Scissors).
//The following takes in the user's input and checks it is one of Rock, Paper, or Scissors. If so, it sets isValidResponse to true and passes the input into the variable userInput. If not, it asks the user to input something valid.
while (isValidResponse === false){
    let userInput = prompt(`Type Rock, Paper, or Scissors.`)

    if (userInput === `Rock` || userInput === `Paper` || userInput === `Scissors`) {
        console.log(`User has entered valid response.`)
        isValidResponse = true
    }

    else {
        console.log(`User has entered invalid response.`)
        alert(`That was an ivalid response. Please input "Rock", "Paper", or "Scissors".`)
    }
}

//The following What beats what?
// If the user's input is set to paper and the computer's input is set to scissors, 
// compare user's input against the 
/* let rules = [
    [`rock`, `scissors`],
    [`scissors`, `paper`],
    [`paper`, `rock`]
]*/