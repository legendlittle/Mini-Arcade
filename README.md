# Mini-Arcade
> We are 'The Boyzzz' and this is an Arcade filled with some extremely challenging games. Sign Up now if you dare to challenge any of our high scores! Good Luck :)

#### Team Members - [David Wong](https://github.com/blmlol "David's Github Page"), [Chris Genel](https://github.com/cgenel "Chris's Github Page"), & [Ryan Bigdoli](https://github.com/Ryan-Bidgoli "Ryan's Github Page")  - *The Boyzzz!*

## Table of Contents

```
PROJECT2
  - config
    - passport
      - passport.js
    - config.json
  - controllers
    - auth.js
    - auth.controller.js
  - models
    - example.js
    - index.js
    - user.js
    - schema.sql
  - node_modules
  - public
    - images
    - js
      - color.js
      - hangman.js
      - simonSays.js
    -style
      - hangman.css
      - simonSays.css
      - style.css
  - routes
    - apiRoutes.html
    - htmlRoutes.html
  - views
    -layouts
      - main.handlebars
    - 404.handlebars
    - colorGame.handlebars
    - hangmans.handlebars
    - index.handleabars
    - signin.handlebars
    - signup.handlebars
    - simonSays.handlebars
  - .gitignore
  - LICENSE
  - package-lock.json
  - package.json
  - server.js
```

## General Info
This is an arcade based app that is backed by a MySQL Database using Sequelize. When first visiting the app the user will be directed to the arcade lobby which has a carousel displaying some insanely difficult games. In order to play a game the user must either create an account or sign-in to an exisitng account using the appropriate links in the navbar at the top of the homepage. We are utilizing the Passport Authentication Middleware for Node.js to authenticate user logins. Once an account is created and the user is signed in you will then return to the dashboard where you are now greeted with your initials and you may now choose your game and you may now also check your high-scores using the 'High-Scores' link in the navbar at the top of the page. We have both GET and POST routes to first retrieve the users scores from all games played before then and then we update and store the users score/high scores for each game. Currently we have 3 games that the user can choose from. A Simon Says button click game, Hangman retro video-game themed, and a speed/click color game.

#### Color Game -
  * This is a speed/click based color changing button game. The user must be signed in to an account to play the game. User will first click on 'Start Game' and the timer will begin. You must click on the correct answer as quickly as possible and as many times as possible before the timer runs out. There are four buttons at the bottom of the screen each one of them has a different color background and each button also has different words of colors for each one of the buttons, the text on each button is also in different colored text than the background of each button. All of the colors for the buttons, text, and words, are set to random. The game will prompt you to select a randomized colored text and for every successful click a point will be added. After the game is complete a modal will pop up and ask if you would like to save the game and exit back to the main arcade page or play again. Good Luck!

#### Simon Says -
  * This is a 'Simon Says' button click game. The user must be signed in to an account to play the game. User will click 'Start Game" and four colored buttons will appear at the bottom of the screen and then will be a box in the middle of the screen that flashes a sequence of colors that the user must watch carefully for the order. The user will then click the colored buttons below to match the sequence of colors that was displayed above. Click end turn to see if your input was correct. If your score goes up, then hit next turn and see how long you last! After the game is complete a modal will pop up and ask if you would like to save the game and exit back to the main arcade page or play again. The users current score and high-score are both displayed in game and are stored and saved for when the user decides to play again. Good Luck!

#### Hangman -
  * This is a hangman word guessing game with a retro arcade video-game theme for the word selection. The user must be signed in to an account to play the game. The user will first see an array of blank letters with a number a guesses remaining. User will press any letter they chooes as their first guess to begin the game and will have to attempt to guess the correct game before they run out of guesses. After the game is complete a modal will pop up and ask if you would like to save the game and exit back to the main arcade page or play again. The users current score and high-score are both displayed in game and are stored and saved for when the user decides to play again. Good Luck!

To-do- list:
* Have the high score routes look more appealing
* Add more games!!

## Status
Project is: _in progress_

## Deployed Link
https://peaceful-mountain-30216.herokuapp.com/
