//create variables for players
let playerOne = {
currentChoice: null
};

let playerTwo = {
    currentChoice: null
};

//create a player board with 2d array

const board = [
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

//changeColor function
const cells = document.querySelector('.parent').children;
//change the color on the board for each individual cell
cells.addEventListener('click', changeColor);
function changeColor(){
    this.style.backgroundColor = 'green';
}

//when it's time to make the restart button it could be something like
//if outcome is only tie/win then restart if button is clicked 


