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
let userScoreLabel = document.querySelector("#userScoreLabel")
let compScoreLabel = document.querySelector("#compScoreLabel")
let userScore = document.querySelector("#userScore")
let compScore = document.querySelector("#compScore")
let currentUserScore = 0
let currentCompScore = 0

//Submit button variables
let submitNameButton = document.querySelector("#submit")
submitNameButton.addEventListener("click", respondToName)

let chooseRockButton = document.querySelector("#chooseRock")
let choosePaperButton = document.querySelector("#choosePaper")
let chooseScissorsButton = document.querySelector("#chooseScissors")

chooseRockButton.addEventListener("click",  () => { submitChoice("rock") })
choosePaperButton.addEventListener("click", () => { submitChoice("paper") })
chooseScissorsButton.addEventListener("click", () => { submitChoice("scissors") })

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
const displayUserChoice = document.querySelector('#displayUserChoice')


//Result variables
const resultDisplay = document.querySelector('#resultDisplay')


//Functions

//Function to take name and respond with message
function respondToName(){
    let nameField = document.querySelector("#userNameInput").value

    const welcomeMessageArea = document.createElement("div")
    welcomeMessageArea.setAttribute('id', 'welcomeMessageArea')

    const compPic = document.createElement("img")
    compPic.setAttribute('src', './images/computer-monitor-hardware-cute-kawaii-cartoon-vector-17457061.jpg')
    compPic.setAttribute('id', 'compPic')

    const nameMessage = document.createElement("h2")
    nameMessage.setAttribute('id', 'nameMessage')
    const newContent = document.createTextNode(`Thanks for coming to play ${nameField}!`)
    const choiceMessage = document.createTextNode(`Make your choice! Rock, paper or scissors?`)
    nameMessage.appendChild(newContent);
    nameMessage.appendChild(document.createElement("br"))
    nameMessage.appendChild(choiceMessage);


    
    welcomeMessageArea.appendChild(nameMessage)
    welcomeMessageArea.appendChild(compPic)

  
    const currentDiv = document.getElementById("nameArea");
    currentDiv.prepend(welcomeMessageArea)
    const allGoAway = document.getElementsByClassName('disappear')

    for(const stream of allGoAway){
        stream.style.display = 'none'
    }

    chooseRockButton.style.display = "block"
    choosePaperButton.style.display = "block"
    chooseScissorsButton.style.display = "block"

    const choicesAndScores = document.getElementById("choicesAndScores")
    const scoresArea = document.createElement("div")
    scoresArea.setAttribute('id', 'scoresArea')
    const userScoreDisplay =document.createElement("p")
    userScoreDisplay.setAttribute('id', 'userScoreDisplay')
    const compScoreDisplay =document.createElement("p")
    compScoreDisplay.setAttribute('id', 'compScoreDisplay')
    scoresArea.appendChild(userScoreDisplay)
    scoresArea.appendChild(compScoreDisplay)
    choicesAndScores.prepend(scoresArea)

    userScoreDisplay.textContent = `Your score: ${currentUserScore}`
    compScoreDisplay.textContent = `My score: ${currentCompScore}`

    /*Scores area removed from HTML

 <div id="scoresArea">
      <p id="userScoreLabel" style="display: none">Your Score:</p>
      <p id="userScore" style="display: none"> </p>
      <p id="compScoreLabel" style="display: none">My Score: </p>
      <p id="compScore" style="display: none"> </p>
      </div>
    </div>

    */
}


//Function to take the users choice
function submitChoice(choice){
    if ((choice === ('rock')) || (choice === ('paper')) || (choice === 'scissors')){
        nameMessage.textContent = `You have chosen ${choice}!`
        userChoice = choice;
        displayUserChoice.style.display = "block"
        generateCompChoice()
    }else{
        alert("Sorry, that wasn't a valid choice! Please try again")
        userChoice = ""
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
        nameMessage.textContent = "That one was a draw!"
        resultDisplay.style.display = "block"
    }else if (compChoice === "rock"){
            if (userChoice === "paper"){
                nameMessage.textContent = "Paper beats rock. You won that one!"
                currentUserScore++
                userScoreDisplay.textContent = `Your score: ${currentUserScore}`
                resultDisplay.style.display = "block"
            }else{
                nameMessage.textContent = "Rock beats scissors. I won that one!"
                currentCompScore++
                resultDisplay.style.display = "block"
            } 
    }else if (compChoice === "paper"){
            if (userChoice === "scissors"){
                nameMessage.textContent = "Scissors beats paper. You won that one!"
                currentUserScore++
                userScoreDisplay.textContent = `Your score: ${currentUserScore}`
                resultDisplay.style.display = "block"
            }else{
                nameMessage.textContent = "Paper beats rock. I won that one!"
                currentCompScore++
                compScoreDisplay.textContent = `My score: ${currentCompScore}`
                resultDisplay.style.display = "block"
                }
    }else if (compChoice === "scissors"){
            if (userChoice === "rock"){
                nameMessage.textContent = "Rock beats scissors. You won that one!"
                currentUserScore++
                userScoreDisplay.textContent = `Your score: ${currentUserScore}`
                resultDisplay.style.display = "block"
            }else{
                nameMessage.textContent = "Scissors beats paper. I won that one!"
                currentCompScore++
                compScoreDisplay.textContent = `My score: ${currentCompScore}`
               
                resultDisplay.style.display = "block"
            }
    }userScore.textContent = currentUserScore
    compScore.textContent = currentCompScore
}

