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

//Computer choice variables
const compOptions = ["rock", "paper", "scissors"]
let compChoice=""

//User choice variables
let userChoice = ""


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
    const newContent = document.createTextNode(`Thanks for coming to play ${nameField}!\r\nMake your choice - rock, paper or scissors?`)
    nameMessage.appendChild(newContent);

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

}


//Function to take the users choice
function submitChoice(choice){
        userChoice = choice;
        let i = Math.floor(Math.random()*3);
        compChoice = compOptions[i];
        displayResult()
    } 

//Function to determine and display who won the round
function displayResult(){
    if (compChoice === userChoice){
        nameMessage.textContent = `You chose ${userChoice}.\r\n I chose ${compChoice}.\r\n That one was a draw!`
    }else if (compChoice === "rock"){
            if (userChoice === "paper"){
                nameMessage.textContent = `You chose ${userChoice}.\r\n I chose ${compChoice}.\r\nPaper beats rock. You won that one!`
                currentUserScore++
            }else{
                nameMessage.textContent = `You chose ${userChoice}.\r\n I chose ${compChoice}.\r\nRock beats scissors. I won that one!`
                currentCompScore++
            } 
    }else if (compChoice === "paper"){
            if (userChoice === "scissors"){
                nameMessage.textContent = `You chose ${userChoice}.\r\n I chose ${compChoice}.\r\nScissors beats paper. You won that one!`
                currentUserScore++
            }else{
                nameMessage.textContent = `You chose ${userChoice}.\r\n I chose ${compChoice}.\r\nPaper beats rock. I won that one!`
                currentCompScore++
                }
    }else if (compChoice === "scissors"){
            if (userChoice === "rock"){
                nameMessage.textContent = `You chose ${userChoice}.\r\n I chose ${compChoice}.\r\nRock beats scissors. You won that one!`
                currentUserScore++
                
            }else{
                nameMessage.textContent = `You chose ${userChoice}.\r\n I chose ${compChoice}. \r\n Scissors beats paper.I won that one!`
                currentCompScore++
            }
    }userScoreDisplay.textContent = `Your score: ${currentUserScore}`;
    compScoreDisplay.textContent = `My score: ${currentCompScore}`;
}


