//create variables for current player, boxes and buttons
let currentPlayer = 'red';
let colorBox = document.querySelectorAll('.box');
let startButton = document.querySelector('#play-button');
let alertMessage = document.querySelector('#alert');

//variable that will change once player wins or ties
let gameOverPlayerWon = false;

//player choices arrays
let playerOneChoices = [];
let playerTwoChoices = [];

//possible winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

//event listener for start/reset button 
startButton.addEventListener('click', startGame);

//start function and reset function
function startGame (){
//change the color of the boxes on click
colorBox.forEach((box) => {
    box.addEventListener('click', takeTurns);
//reset buttons to grey when clicked
    box.style.backgroundColor = 'grey';
});
    currentPlayer = 'red';
    alertMessage.textContent = `${currentPlayer}'s turn!`;
    startButton.innerHTML = 'Restart';
    gameOverPlayerWon = false;
//resetting player choice arrays to empty
 playerOneChoices = [];
 playerTwoChoices = [];
}

//function that changes colors for each player and determines who's turn it is
function takeTurns(e){
    if (gameOverPlayerWon){
        return;
    }
//converts id to integer
    const currentIndex = parseInt(e.target.id)
    e.target.removeEventListener('click', takeTurns);
    // Change the box background color to match the currentPlayer
    if (currentPlayer === 'red') {
      e.target.style.backgroundColor = 'red';
      playerOneChoices.push(currentIndex)
    } else {
      e.target.style.backgroundColor = 'blue';
      playerTwoChoices.push(currentIndex)
    }

    gameOverPlayerWon = determineWinner(currentPlayer);

    if(gameOverPlayerWon){
        alertMessage.textContent = `${currentPlayer} wins!`
        return;
    }

    if(playerOneChoices.length + playerTwoChoices.length == 9 && !gameOverPlayerWon){
        alertMessage.textContent = `It's a tie!`;
        return;
    }

    console.log(gameOverPlayerWon)

    console.log('p1', playerOneChoices)
    console.log('p2', playerTwoChoices)

//sets up who's turns is it next based on the current value of currentPlayer
    if (currentPlayer == 'red'){
        currentPlayer = 'blue';
// alert user on who's turn is it next
        alertMessage.textContent = `${currentPlayer}'s turn!`;
    }else {
        currentPlayer = 'red';
        alertMessage.textContent = `${currentPlayer}'s turn!`;
    }
    
}

function determineWinner(currentPlayer){
const playerChoice = currentPlayer === 'red'? playerOneChoices : playerTwoChoices;
console.log(playerChoice, 'player choice')

if (playerChoice.length >= 3){
//then compare choices array with winning combinations
    const playerWon = winningCombinations.some(winningCombo => {
        return winningCombo.every((winningIndex) =>{
         return playerChoice.includes(winningIndex)
        })
     })
    return playerWon? currentPlayer: false;
} else{
    return false;
}

}
