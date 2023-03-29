# Project: Tic-Tac-Toe Game

## Description:

   Functional Tic Tac Toe game using HTML, CSS & Javascript!
   
   Preview Image:
   
   ![Imgur](https://i.imgur.com/A2710Mk.png)
   
# Links
   
   * [Play Tic Tac Toe Here](https://thecaliforniacoder.github.io/Tic-Tac-Toe/)

## User Stories

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
   * JavaScript (ES6)
   * Git
   * GitHub

   
## Planning 

   * I started by writing as much pseudocode as possible.
   * I created a To-Do list to keep track of tasks.
   * I created a basic template of the game in HTML and CSS to visualize before my Javascript.

## Build/Code Process & Timeframe

### Day 1:

I spent the first day of the project planning by creating a list of tasks within an ordered ‘To-Do’ list. Once that was done, I spent some time brainstorming until I was able to thoroughly sudo-code the rules of the game and all of the possible winning combinations. 

### Day 2 - 4:

I started off by declaring the necessary variables: buttons, players, score, player choices (arrays), winning combinations (array) etc. I then began to add event listeners to the game board buttons and assign a single colour to each player. Although my code shows the 'startGame' function first, I initially began with my 'takeTurns' function where I was able to implement the rules. After the 'takeTurns' was constructed, I dove into the hardest part of the code, determining a winner! I ended up using a combination of .some(), .every(), and .includes() to find winning combination matches!

 * Determine Winner Function:
   
   ![Imgur](https://i.imgur.com/Qjzti7S.png)
   
### Day 5:

I used Day 5 to refactor some code as well as begin my css! The MVP was only complete once I added some specific styling. 

### Day 6-7:

A portion of my code that I'm particularly proud of is the ‘addNewScore’ function. This is because I nearly constructed it correctly on the first try. This was a fun bonus feature for me to implement before finishing off my styling.

   * Add New Score Function:

   ![Imgur](https://i.imgur.com/0SeJhoH.png)
   
## Challenges
   
   The main challenge I faced was understanding how to construct my determine winner function without redundant if/else statements. 
   The array methods I mentioned above were a life-saver.
     
   Another challenge I faced was understanding where to place certain code snippets. 
   I had, finally, got to a place where I understood WHAT code I needed but was struggling to understand WHERE to place it.
     
## Wins
   
   Besides finishing on time, I'd say the biggest win is having learnt so many new ways of creating certain features.
      
## Key Learnings & Takeaways
  
   * Using array methods to replace daunting for loops.
   * Placing code snippets in the correct order, (it sounds funny but I actually gained a lot of clarity).
   * Utilizing certain resources besides Stack Overflow.
   * Learning when to ask for help! Sometimes I don't need to spend hours/days researching when I have access to mentors to guide me.
   * Realizing that I enjoy working on a team!

## Bugs

Next time, I want to improve the CSS layout so that everything appears 'above the fold'. I still need more practice with pure CSS.

## Future Improvements

Going forward, I'll structure my time more efficiently by spending more time on the core functionality as opposed to honing in on the details. I'll test as I go more often and get feedback as I progress!

As for the game, I’d like to adjust the layout and maybe even add audio for a better user experience!

