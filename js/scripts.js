// Describe Scores() 
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

var face1=new Image()
face1.src="img/1.jpg"
var face2=new Image()
face2.src="img/2.jpg"
var face3=new Image()
face3.src="img/3.jpg"
var face4=new Image()
face4.src="img/4.jpg"
var face5=new Image()
face5.src="img/5.jpg"
var face6=new Image()
face6.src="img/6.jpg"

Scores.prototype.roll = function () {
  var rollDice = + Math.floor(Math.random() * 6 + 1);
  document.images["myDice"].src=eval("face"+rollDice+".src")
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

Scores.prototype.winnerCheck = function () {
  if (this.playerOneTotal >= 10) {
    this.endGame();
    alert("Player 1 is the winner");
    $(".winner-img1").show();
  } else if (this.playerTwoTotal >= 10) {
    this.endGame();
    alert("Player 2 is the winner!");
    $(".winner-img2").show();
  }
};


Scores.prototype.endGame = function () {
  confetti();
  this.playerOneTotal = 0;
  this.playerTwoTotal = 0;
  this.tempScore = 0;
  this.playerOne = true;
  this.playerTwo = false;
  
};

// UI Logic

let score = new Scores();

$(document).ready(function () {
  $(".winner-img1").hide();
  $(".winner-img2").hide();
  $(".currentScore").text(score.tempScore);
  $(".playerOneTotal").text(score.playerOneTotal);
  $(".playerTwoTotal").text(score.playerTwoTotal);
  $("#roll").click(function () {
    score.roll();
    $(".currentScore").text(score.tempScore);
  });
  $("#hold").click(function () {
    score.endTurn();
    $(".currentScore").text("0");
    $(".playerOneTotal").text(score.playerOneTotal);
    $(".playerTwoTotal").text(score.playerTwoTotal);
  });
});