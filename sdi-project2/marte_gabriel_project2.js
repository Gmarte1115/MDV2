//Author Gabriel Marte
// SDI Project 2
// 10/02/12
//Let's start a game!

//Variables: String, Number, Array

var startMsg = "Start";
	endMsg = "Finish";
;

var posPlayers = 2;
	posMatches = 1;
;

var playerNames = ["Red", "Blue", "Gold"];
	playerHp = [10, 20, 30]
;

//Procedure variable


var createGame = function (gameStart){
	if (gameStart === true)
		console.log("Begin new game!")
		else console.log("Game not ready.")
};

//Boolean Function 

var getGameReady = function (validMatch) {
	var gameReady = ((posPlayers + posMatches) === validMatch)
	if (gameReady === true)
		console.log("Get your match ready.")
		else console.log("Match not ready");
	return gameReady;
};

//Number Function

var getPlayerCount = function (totalPlayers){
	var playerCount = totalPlayers
	while (playerCount > 0) {
		console.log ("Player " + playerCount + " ready.");
		playerCount--;
	} 
	return playerCount
};

//String Function
var getMatchDetails = function (playerOne, playerTwo){
	var matchNum = [1]
	var matchString = ("Match " + matchNum[0] + ": ")
		console.log(matchString + playerOne + " VS " + playerTwo)
	return matchNum;
};
//Array Function
var getPlayerStats = function (currentPlayer,currentHp){
	var currentPlayer = playerNames;
		currentHp = playerHp;
		currentPlayerLength = currentPlayer.length;
		for (i = 0; i < currentPlayerLength; i++){
			console.log( currentPlayer[i] + "'s current HP is: " + currentHp[i])
		};
	return currentHp;
};

createGame(true);

var gameReady = getGameReady(3);
var playerCount = getPlayerCount(2);
var playerHp = getPlayerStats();
var matchNum = getMatchDetails(playerNames [0], playerNames [2]);

















