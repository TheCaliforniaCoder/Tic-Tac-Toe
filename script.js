//create variables for players

let playerOne = {
currentChoice: null
};

let playerTwo = {
    currentChoice: null
};

//create a player board with 2d array

let board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//declare columns and rows variables
let rows = board.length;

let columns = board[0].length;

//nested for loop to iterate through rows and columns

//change the color on the board for each individual cell
const cells = document.querySelector('.parent').children;

//when it's time to make the restart button it could be something like
//if outcome is only tie/win then restart if button is clicked 


