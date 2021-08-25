// Describe pigDice() 
// If the player rolls a 1 (at any point) they score 0 and move onto the next player
// If player rolls any other number, it is added to their score 
// player can "hold" and turn is added to their score 
// first player to 100 points wins

let playerOne = {
  totalPoints: 0,
  tempPoints: 0
}

let playerTwo = {
  totalPoints: 0,
  tempPoints: 0
}

function rollDice() {

  var rollDice = Math.floor(Math.random() *6 + 1);

  if ( rollDice != 1 ) {
    playerOne.tempPoints += rollDice;
  }else {
    playerOne.tempPoints = 0;
  }
  playerOne.totalPoints += playerOne.tempPoints;
  playerOne.tempPoints = 0;
}

rollDice(playerOne);

function winnerCheck() {
  if (playerOne.totalPoints === 100) {
    alert("You are the winner");
  }
}

