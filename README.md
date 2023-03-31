# Project: Tic-Tac-Toe Game

## Description:

My initial project during the Software Engineering Immersive program at General Assembly was a solo endeavour that took seven days to complete. This was my maiden voyage creating a full-fledged game and also marked my first hands-on experience working with JavaScript in a practical setting.

The goal of this project was to build a Tic Tac Toe game using HTML, CSS & Javascript. Two players can take turns until they tie or someone wins. Players can play multiple times and keep score!
   
   * Preview Image:
   
   ![Imgur](https://i.imgur.com/A2710Mk.png)
   
# Deployment Link
   
   * [Play Tic Tac Toe Here](https://thecaliforniacoder.github.io/Tic-Tac-Toe/)
   
## Code Installation

To access and run the code for this project, follow these steps:

   * Download or clone the project repository from GitHub. You can do this by clicking on the green “Code” button and selecting “Download ZIP” to download      a zipped version of the code, or by copying the repository URL and running git clone in your terminal.
   * Once you have the code downloaded or cloned, open the project folder in your code editor of choice.
   * Open the index.html file in your web browser to view the project.

## Technical Requirements

   * As a user, I should be able to start a new tic tac toe game.
   * As a user, I should be able to click on a square to add X first and then O, and so on.
   * As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next.
   * As a user, I should not be able to click the same square twice.
   * As a user, I should be shown a message when I win, lose or tie.
   * As a user, I should not be able to continue playing once I win, lose, or tie.
   * As a user, I should be able to play the game again without refreshing the page.

### Bonus Features

   * Keep track of multiple game rounds with a win, lose and tie counter.
   
## Technologies Used

   * HTML
   * CSS with animation
   * JavaScript 
   * Git
   * GitHub

   
## Planning 

   * I started by writing as much pseudocode as possible.
   * I created a To-Do list to keep track of tasks.
   * I created a basic template of the game in HTML and CSS to visualize before my Javascript.

## Build/Code Process & Timeframe

### Day 1:

I spent the first day of the project planning by creating a list of tasks within an ordered ‘To-Do’ list. Once that was done, I spent some time brainstorming until I was able to thoroughly pseudocode the rules of the game and all of the possible winning combinations. 

### Day 2 - 4:

The function that took the most time was the 'takeTurns' function where I was able to implement the rules. The function performs the following actions:

  * It begins by checking if a player has won already, if not, then it continues with the rest of the function. 
  * It sets the 'currentIndex' variable to the ID in which the 'currentPlayer' has clicked.
  * It prevents a player from being able to click the same choice twice by removing the event listener.
  * It changes the background color of each clickable box on the grid to match the color of the 'currentPlayer' using an if/else statement.
  * It defines the 'gameOverPlayerWon' variable which calls the 'determineWinner' function (shown later). 
  * Then, it determines if someone has won by checking the 'gameOverPlayerWon' variable within an if statement and alerts the players of the winner. Later on, I added an 'addNewScore' function where I kept score of each player's wins, and called that function here. 
  * If no player has won, and both 'playerChoices' arrays length add up to 9, then it's deemed a tie.
  * Finally, the function ends with an if/else statement that determines whose turn it is based on the current value of the 'currentPlayer' variable.
  
  ![Imgur](https://i.imgur.com/WN7BPZO.jpg)

After the 'takeTurns' was constructed, I dove into the hardest part of the code, determining a winner! I ended up using a combination of .some(), .every(), and .includes() to find winning combination matches!

 * Determine Winner Function:
   
   ![Imgur](https://i.imgur.com/Qjzti7S.png)
   
### Day 5:

I used Day 5 to refactor some code as well as begin my css! The MVP was only complete once I added some specific styling. 

### Day 6-7:

A portion of my code that I'm particularly proud of is the ‘addNewScore’ function. This is because I nearly constructed it correctly on the first try. This was a fun bonus feature for me to implement before finishing off my styling.

   * Add New Score Function:

   ![Imgur](https://i.imgur.com/0SeJhoH.png)
   
## Challenges
   
   The main challenge I faced was understanding how to construct my ‘determineWinner’ function without redundant if/else statements. 
   The array methods I mentioned above were a life-saver.
     
   Another challenge I faced was understanding where to place certain code snippets. 
     
## Wins
   
   Besides finishing on time, I'd say the biggest win is having learnt so many new ways of creating certain features. Array methods proved to be massively    helpful. Using .some(), .every(), and .includes() together was probably my biggest time saver. 

      
## Key Learnings & Takeaways
  
   * Using array methods to replace daunting for loops.
   * Placing code snippets in the correct order, (it sounds funny but I actually gained a lot of clarity).
   * Utilizing certain resources besides Stack Overflow like MDN Web Docs.
   * Learning when to ask for help! Sometimes I don't need to spend hours/days researching when I have access to mentors to guide me.
   * Realizing that I enjoy working on a team!

## Bugs

Next time, I want to improve the CSS layout so that everything appears 'above the fold'. I still need more practice with pure CSS.

## Future Improvements

Going forward, I'll structure my time more efficiently by spending more time on the core functionality as opposed to honing in on the details. I'll test as I go more often and get feedback as I progress!

As for the game, I’d like to adjust the layout to have the ‘start game’ button appear above the fold for smaller screens and maybe even add audio for a better user experience.

