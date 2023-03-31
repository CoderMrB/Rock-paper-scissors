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
Compare users input against computer choice
Record / display the winner
Add 1 to winner's score
Allow user to play again or end there
If end there, display message indicating winner
*/


//Section declaring variables
//Declares a variable to target an empty paragraph where scores may be stored
const userScore = document.querySelector("#userScore")
const compScore = document.querySelector("#compScore")


//Declares variable to store the HTML submit button
let submitNameButton = document.querySelector("#submit")
//Eventlistener added to submit button to initiate function
submitNameButton.addEventListener("click", respondToName)

//Declares variable to store the HTML H2 element that currently has no text
const displayName = document.querySelector("#displayName");

const compOptions = ["Rock", "Paper", "Scissors"]
compChoice = document.querySelector('#compChoice')

let userChoice = ""

const userChoiceLabel = document.querySelector("#userChoiceLabel")
const userChoiceField = document.querySelector("#userChoiceField")
const userSubmitChoiceButton = document.querySelector("#userSubmitChoice")
userSubmitChoiceButton.addEventListener("click", submitChoice)
const displayUserChoice = document.querySelector('#displayUserChoice')




//Function to take the name typed into the input box, hide the input box, label and submit button, and display a welcome message using the user's inputted name
function respondToName(){
    let nameField = document.querySelector("#userNameField").value//Declares variable to hold value typed to input box
    displayName.textContent = `Thanks for coming to play me at rock, paper, scissors ${nameField}!`//Makes welcome message using user's name appear
    const allGoAway = document.getElementsByClassName('disappear')//Targets elements I wish to disappear
    for(const stream of allGoAway){ //hides all the elements I wish to disappear
        stream.style.display = 'none'
    }
    userScore.textContent = "Your score is currently: 0"
    userScore.style.display = "block"
    compScore.textContent = "My score is currently: 0"
    compScore.style.display = "block"
    userChoiceLabel.style.display = "block"
    userChoiceField.style.display = "block"
    userSubmitChoiceButton.style.display = "block"
    // generateCompScore()
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
        submitChoice()
    }
}


//Function to take generate the computers choice
function generateCompChoice(){
    let i = Math.floor(Math.random()*3)
    compChoice.textContent = (`The computer has chosen ${(compOptions[i])}`)
    compChoice.style.display = "block"
}

