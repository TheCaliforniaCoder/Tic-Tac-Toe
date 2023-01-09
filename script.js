//create variables for players

let currentPlayer = 'red';

//player choice arrays

playerOneChoices = [];

playerTwoChoices = [];

//change the color of the boxes on click

let colorBox = document.querySelectorAll('.box');

colorBox.forEach((box, index) => {
    box.addEventListener('click', takeTurns)
    console.log(index)
})

//possible winning combinations
const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];

//testing out a two player color
function takeTurns(e){
    // Change the box background color to match the currentPlayer
    if (currentPlayer === 'red') {
      e.target.style.backgroundColor = 'red';
    } else {
      e.target.style.backgroundColor = 'blue';
    }
// conditional for combinations 
// first push each player choice to the choices array
// then compare choices array with winning combinations
    let divsArray = []; 
   for (let i = 0, j = colorBox.length; i < j; i++){
    divsArray.push(colorBox[i].getAttribute('id'))
   }


// Let's set up whos turns is it next based on the current value of currentPlayer
    if (currentPlayer == 'red'){
        currentPlayer = 'blue';
    }else {
        currentPlayer = 'red';
    }

    // Alert user on who's turn is it next

}

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


