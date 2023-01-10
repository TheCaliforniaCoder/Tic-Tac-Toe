//create variables for current player and buttons

let currentPlayer = 'red';
let restartButton = document.querySelector('#restart');
let startButton = document.querySelector('#play-button');

//change the color of the boxes on click

let colorBox = document.querySelectorAll('.box');

colorBox.forEach((box) => {
    box.addEventListener('click', takeTurns)
})

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

//player choice arrays

let playerOneChoices = [];

let playerTwoChoices = [];


//variable that will change once player wins or ties
let gameOverPlayerWon = false;

//function that changes colors for each player and determines who's turn it is
function takeTurns(e){
    if (gameOverPlayerWon){
        return;
    }
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


    console.log(gameOverPlayerWon)

    console.log('p1', playerOneChoices)
    console.log('p2', playerTwoChoices)

//sets up who's turns is it next based on the current value of currentPlayer
    if (currentPlayer == 'red'){
        currentPlayer = 'blue';
        console.log('blues turn')
    }else {
        currentPlayer = 'red';
        console.log('reds turn')
    }

// Alert user on who's turn is it next
    
}

function determineWinner(currentPlayer){
const playerChoice = currentPlayer === 'red'? playerOneChoices : playerTwoChoices;
console.log(playerChoice, 'player choice')

if (playerChoice.length >= 3){
// then compare choices array with winning combinations
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

/* function displayResult(){
    if(playerOneChoices.length + playerTwoChoices.length == 9){
                return console.log(`it's a tie`)
            }
    else if ()
} */

/* function blueFunction (){
    this.style.backgroundColor = 'blue'
}

function redFunction (){
    this.style.backgroundColor = 'red'
}  */


/*
//declare columns and rows variables
let rows = board.length;

let columns = board[0].length;

//nested for loop to iterate through rows and columns
for(let i = 0; i < rows.length; i++){
    for(let j = 0; j < columns.length; j++){
       
     }
    }

  const div1 = document.querySelector('#div1');
  div1.addEventListener('click', changeColor)

//changeColor function

function changeColor(){
    document.div1.style.backgroundColor = 'yellow';
}
 */
/* 
const cells = document.querySelector('.parent').children;
//change the color on the board for each individual cell
cells.addEventListener('click', changeColor); */


//when it's time to make the restart button functional it could be something like
//if outcome is only tie/win then restart if button is clicked 


