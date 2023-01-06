//create variables for players
let playerOne = {
currentChoice: null
};

let playerTwo = {
    currentChoice: null
};

//change the color of the boxes on click

let colorBox = document.querySelectorAll('.box');

for(const b of colorBox){
    b.addEventListener('click', boxClicked)
}

function boxClicked(e){
    e.target.style.backgroundColor = 'green';
}
/* const board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

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


