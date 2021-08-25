// Describe pigDice() 
// If the player rolls a 1 (at any point) they score 0 and move onto the next player
// If player rolls any other number, it is added to their score 
// player can "hold" and turn is added to their score 
// first player to 100 points wins

function Scores() {
  this.playerOneTotal = 0;
  this.playerTwoTotal = 0;
  this.tempScore = 0;
  this.playerOne = true;
  this.playerTwo = false;
}

Scores.prototype.roll = function () {
  var rollDice = Math.floor(Math.random() * 6 + 1);

  if (rollDice != 1) {
    this.tempScore += rollDice;
  } else {
    this.tempScore = 0;
    this.endTurn();
  }
};

Scores.prototype.endTurn = function () {
  if (this.playerOne) {
    this.playerOneTotal += this.tempScore;
  } else {
    this.playerTwoTotal += this.tempScore;
  } 
  this.tempScore = 0;
  this.winnerCheck();
  this.playerOne = !this.playerOne;
  this.playerTwo = !this.playerTwo;
};

Scores.prototype.winnerCheck = function() {
  if (this.playerOneTotal >= 100) {
    return "You are the winner";
  } else if (this.playerTwoTotal >= 100) {
    return "Player 2 is the winner!";
  }
};


// console.log(score.winnerCheck());
// console.log(score);

// UI Logic

let score = new Scores();

$(document).ready(function () {
  $("#roll").click(function () {
    score.roll();
    $(".currentScore").text(score.tempScore);
    //$(".playerTwoTotal").text(0);
  });
  $("#hold").click(function () {
    score.endTurn();
    // $(".currentScore").hide();
    $(".playerOneTotal").text(score.playerOneTotal);
    $(".playerTwoTotal").text(score.playerTwoTotal);
  });
});