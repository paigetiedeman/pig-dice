# Project Name

#### This is a site..

#### _By Paige Tiedeman, Roman Kolivashko & Diego Serafico

## Technologies Used

* HTML
* CSS
* JavaScript
* JQuery
* Bootstrap

## Description

This simple HTML site uses Javascript...

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Go to the top level of this directory_
* _Open index.html in your browser_

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
Expected Output: tempPoints = 12

Test: "If a player rolls 1 their score will equal 0" 
Code: rollDice(5), rollDice(1)  
Expected Output: tempPoints = 0  

Test: "If players total point equal 100 they receive a winner alert"  
Code: totalPoints = 100  
Expected Output: "You are a winner"  


