# Project: Tic-Tac-Toe Game

## Description:

   Functional Tic Tac Toe game using HTML, CSS & Javascript
   
   Preview Image:
   
   ![Imgur](https://i.imgur.com/A2710Mk.png)
   
# Links
   
   * [Game Link](https://thecaliforniacoder.github.io/Tic-Tac-Toe/)

## User Stories

   * As a user, I should be able to start a new tic tac toe game
   * As a user, I should be able to click on a square to add X first and then O, and so on
   * As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
   * As a user, I should not be able to click the same square twice
   * As a user, I should be shown a message when I win, lose or tie
   * As a user, I should not be able to continue playing once I win, lose, or tie
   * As a user, I should be able to play the game again without refreshing the page

### Bonus Features

   * Keep track of multiple game rounds with a win, lose and tie counter

## Timeframe & Team
   
   We were given a week to complete this solo assignment. 
   
## Technologies Used

   I used HTML, CSS, and Vanilla Javascript to build this project.
   
## Planning 

   * I started by writing as much pseudocode as possible.
   * I created a To-Do list to keep track of tasks.
   * I created a basic template of the game in HTML and CSS to visualize before my Javascript.

## Build/Code Process

   I started off by declaring the necessary variables: buttons, players, score, player choices (arrays), winning combinations (array) etc.
   I then began to add event listeners to the game board buttons and assign a single color to each player. 
   Although my code shows the 'startGame' function first, I initially began with my 'takeTurns' function where I was able to implement the rules.
   After the 'taketurns' was constructed, I dove in to the hardest part of the code, determining a winner!
   
   * Determine Winner Function:
   
   ![Imgur](https://i.imgur.com/Qjzti7S.png)
   
   I ended up using a combination of .some(), .every(), and includes() to find winning combination matches!
   
   A function I'm particularly proud of is addNewScore(). This is because I nearly constructed it correctly on the first try.
   
   * Add New Score Function:

   [Imgur](https://i.imgur.com/0SeJhoH.png)
   
   This was towards the end of my code since this was a bonus feature.

