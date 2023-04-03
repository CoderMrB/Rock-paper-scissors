/*
Rock paper scissors game.
Take players name as input☑️
    Have an input field on the page☑️
    Have a submit button☑️
    Add event listener to submit button☑️
    Have a function activated by clicking submit button☑️
    Function should take text from input field and store in on the page.☑️
    Push this text to an empty h3 element☑️
    If possible the input field and button should then be hidden☑️

Display player's name☑️
    could place name permanently somewhere else

Declare variables to hold scores for player and computer☑️

Take a user's input for Rock, Paper, Scissors☑️

Generate a random choice for the computer☑️
Compare users input against computer choice☑️
Record / display the winner☑️
Add 1 to winner's score
Allow user to play again or end there
If end there, display message indicating winner
*/


//Variables

//Score variables
const userScore = document.querySelector("#userScore")
const compScore = document.querySelector("#compScore")

//Submit button variables
let submitNameButton = document.querySelector("#submit")
submitNameButton.addEventListener("click", respondToName)

//Display name variables
const displayName = document.querySelector("#displayName");

//Computer choice variables
const compOptions = ["rock", "paper", "scissors"]
compChoiceDisplay = document.querySelector('#compChoice')
let compChoice=""

//User choice variables
let userChoice = ""
const userChoiceLabel = document.querySelector("#userChoiceLabel")
const userChoiceField = document.querySelector("#userChoiceField")
const userSubmitChoiceButton = document.querySelector("#userSubmitChoice")
userSubmitChoiceButton.addEventListener("click", submitChoice)
const displayUserChoice = document.querySelector('#displayUserChoice')


//Result variables
const resultDisplay = document.querySelector('#resultDisplay')


//Functions

//Function to take name and respond with message
function respondToName(){
    let nameField = document.querySelector("#userNameField").value
    displayName.textContent = `Thanks for coming to play me at rock, paper, scissors ${nameField}!`
    const allGoAway = document.getElementsByClassName('disappear')
    for(const stream of allGoAway){
        stream.style.display = 'none'
    }
    userScore.textContent = "Your score is currently: 0"
    userScore.style.display = "block"
    compScore.textContent = "My score is currently: 0"
    compScore.style.display = "block"
    userChoiceLabel.style.display = "block"
    userChoiceField.style.display = "block"
    userSubmitChoiceButton.style.display = "block"
}


//Function to take the users choice
function submitChoice(){
    let userChoiceEntered = userChoiceField.value.toLowerCase()
    userChoice = userChoiceEntered
    if ((userChoice === ('rock')) || (userChoice === ('paper')) || (userChoice === 'scissors')){
        displayUserChoice.textContent = `You have chosen ${userChoice}!`
        displayUserChoice.style.display = "block"
        generateCompChoice()
    }else{
        alert("Sorry, that wasn't a valid choice! Please try again")
        userChoice = ""
        respondToName()
    } 
}

//Function to take generate the computers choice
function generateCompChoice(){
    let i = Math.floor(Math.random()*3)
    compChoice = compOptions[i]
    compChoiceDisplay.textContent = (`The computer has chosen ${(compOptions[i])}`)
    compChoiceDisplay.style.display = "block"
    displayResult()
    }

//Function to determine and display who won the round
function displayResult(){
    if (compChoice === userChoice){
        resultDisplay.textContent = "That one was a draw!"
        resultDisplay.style.display = "block"
    }else if (compChoice === "rock"){
            if (userChoice === "paper"){
                resultDisplay.textContent = "Paper beats rock. You won that one!"
                resultDisplay.style.display = "block"
            }else{
                resultDisplay.textContent = "Rock beats scissors. I won that one!"
                resultDisplay.style.display = "block"
            } 
    }else if (compChoice === "paper"){
            if (userChoice === "scissors"){
                resultDisplay.textContent = "Scissors beats paper. You won that one!"
                resultDisplay.style.display = "block"
            }else{
                resultDisplay.textContent = "Paper beats rock. I won that one!"
                resultDisplay.style.display = "block"
                }
    }else if (compChoice === "scissors"){
            if (userChoice === "rock"){
                resultDisplay.textContent = "Rock beats scissors. You won that one!"
                resultDisplay.style.display = "block"
            }else{
                resultDisplay.textContent = "Scissors beats paper. I won that one!"
                resultDisplay.style.display = "block"
            }
    }
}

    