# Project Name

#### This is an object oriented Pig Dice game.

#### _By Paige Tiedeman, Roman Kolivashko & Diego Serafico

## Technologies Used

* HTML
* CSS
* JavaScript
* JQuery
* Bootstrap

## Description

Pig Dice is a game where players take turn rolling a dice. Each number is added to the previous roll until the player passes onto the next. If a player rolls a 1 their turn total will equal 0 and the game moves to the next player. First player to 100 points wins!

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Go to the top level of this directory_
* _Open index.html in your browser_
* _Click on the die_

## Known Bugs

* _N/A_

## License

_[MIT](https://opensource.org/licenses/MIT)_

Copyright (c) 2021 Paige Tiedeman, Diego Serafico and Roman Kolivashko.

## Contact Information

_Paige Tiedeman **paigetiedeman@gmail.com**_  
_Diego Serafico **serafico@gmail.com**_
_Roman Kolivashko **rkolivashko@gmail.com**_

### Tests

Describe rollDice()  

Test: "A player can roll any number"  
Code:  rollDice(2)  
Expected Output: random number between 1-6  

Test: "If a player rolls any number other than 1 their points are added"  
Code: rollDice(3), rollDice(4), rollDice(5)  
Expected Output: tempScore = 12  

Test: "If a player rolls 1 their score will equal 0" 
Code: rollDice(5), rollDice(1)  
Expected Output: tempScore = 0  

Test: "If players total point equal 100 they receive a winner alert"  
Code: totalPoints = 100  
Expected Output: "You are a winner"  

Test: "A player can end their turn"  
Code: score.endTurn();  
Expected Output: Scores {playerOneTotal: 9, playerTwoTotal: 0, tempScore: 0, playerOne: false, playerTwo: true}  



