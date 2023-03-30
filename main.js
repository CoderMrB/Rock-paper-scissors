/*
Rock paper scissors game.
Take players name as input
    Have an input field on the page
    Have a submit button
    Add event listener to submit button
    Have a function activated by clicking submit button
    Function should take text from input field and store in on the page.
    Push this text to an empty p element
    If possible the input field and button should then be hidden
Display player's name
Declare variables to hold scores for player and computer
Take a user's input for Rock, Paper, Scissors
Generate a random choice for the computer
Compare users input against computer choice
Record / display the winner
Add 1 to winner's score
Allow user to play again or end there
If end there, display message indicating winner
*/

console.log("working?")

let submitName = document.querySelector("#submit")
submitName.addEventListener("click", pushName)

const displayName = document.querySelector("#displayName")

function pushName(){
    let nameField = document.getElementById('userName')
    let nameEntered = nameField.value
    // displayName.textContent = "Thanks for coming to play me at rock, paper, scissors Chris"
    displayName.textcontent = nameEntered
}