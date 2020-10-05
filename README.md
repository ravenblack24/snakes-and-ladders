# React Snakes & Ladders game
> Repository for my React.js Snakes and Ladders game which evolved from a Codewars JavaScript challenge!

## Table of contents
* [Status](#status)
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Contact](#contact)

## Status
Project is currently in progress with the following items to do:
* Indicate when counter activates a snake or ladder
* Show counters moving between positions
* Tidy up UI
* Find a nicer board png!
* Map snakes and ladder positions to the board
* Improve 'roll' effect
* Make turns easier to see

## General info
The idea for this project came about after I had done my first few React.js apps as a nice way to evolve a vanilla JavaScript solution to a [coding challenge on Codewars](https://www.codewars.com/kata/587136ba2eefcb92a9000027).

My codewars solution satisfied the following rules:

* **Rule 1**:  There are two players and both start off the board on square 0.

* **Rule 2**:  Player 1 starts and alternates with player 2.

* **Rule 3**:  You follow the numbers up the board in order 1=>100

* **Rule 4**:  If the value of both die are the same then that player will have another go.

* **Rule 5**:  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).

* **Rule 6**:  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).

* **Rule 7**:  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)

* **Rule 8**:  If the Player rolled a double and lands on the finish square “100” without any remaining moves then the Player wins the game and does not have to roll again.

* **Return 1**: Return Player n Wins!. Where n is winning player that has landed on square 100 without any remainding moves left.

* **Return 2**: Return Game over! if a player has won and another player tries to play.

* **Return 3**: Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Technologies
* React.js, vanilla Javascript and some css

## Setup
In the project directory you should run:

`npm install`

Installs the required libraries.

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

`npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
The app is ready to be deployed!

## Contact
Created by [Kay Pea](https://imkp.co.uk) - feel free to contact me!