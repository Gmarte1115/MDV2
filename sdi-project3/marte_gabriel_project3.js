//Author: Gabriel Marte
//SDI project 3
//10/11/2012

var teamNames = ["Warriors", "Sorcerers", "Assassins"];
var evilBattleCry = "We will destroy you!! BWAHAHAHAHAHA";
var goodBattleCry = "Thou shall not pass this way...";
var evilVictoryMsg = "BWAHAHAHAHA, YOU DID NOT STAND A CHANCE!";
var goodVictoryMsg = "THY HAS TOLDETH YOU SO!!!";
var beginBattleMsg = "FIGHT!";


var getCharList = function(json){
	var characters = json.characters
	for (var i = 0; i<json.characters.length; i++){		//FOR LOOP
		var characters = json.characters[i]					//LOCAL VARIABLES
		console.log("Player: " + characters.charName + ", Rank: " + characters.charRank + ", Class: " + characters.charClass )
	}return characters
};


var getUpGrade = function(json){
	for (var i = 0; i<json2.upGrades.length; i++){	//FOR LOOP
		var equipUpGrade = json2.upGrades[i]		
		console.log("If you choose the " + equipUpGrade.weapon + ", you gain " + equipUpGrade.powerUp)
	}
	return equipUpGrade
};

//Constructor
var newChar = function (name){
	var totalData = [];
	var addData = function (){
			totalData.push ()
	};
	var getCharData = function (){
		for (var i=0; i<totalData.length; i++){
			console.log(name + " has " + totalData[i] + "." )
		}
	};
	return {// RETURNED VALUES
		"name": name,               //OBJECT PROPERTY
		"alliance": "",                  //STRING PROPERTY
		"combatReady":[],            //BOOLEAN PROPERTY
		"totalHp":"",			//NUMBER PROPERTY
		"addData": addData, 	    //PROCEDURE/MUTATOR  
		"getCharData": getCharData//FUNCTION/ACCESSOR
	}
};

getCharList(json)
getUpGrade(json)

//Kring info
var kring = newChar("Kring");
console.log (kring);
kring.alliance = ("Good Guy");
kring.addData("MP: 10");
kring.addData("20,000 soldiers");
kring.addData("2 revive potions");
kring.combatReady = true
kring.totalHp = 30
kring.getCharData();

var morduke = newChar("Morduke");
console.log (morduke);
morduke.alliance = ("Bad Guy");
morduke.addData("MP: 30");
morduke.addData("10,000 sorcerers");
morduke.addData("3 revive potions");
morduke.combatReady = true
morduke.totalHp = 15
morduke.getCharData();

var rengu = newChar("Rengu");
console.log (rengu);
rengu.alliance = ("No allegiance");
rengu.addData("MP: 20");
rengu.addData("500 Assassins");
rengu.addData("2 revive potions");
rengu.combatReady = true
rengu.totalHp = 25
rengu.getCharData();

console.log ("'Kring vs. Morduke'")
if (kring.totalHp > morduke.totalHp){
	console.log ("Kring: " + goodBattleCry)
	console.log ("Morduke: " + evilBattleCry)
	console.log (beginBattleMsg)
	console.log ("Kring: " + goodVictoryMsg)
} else {
	console.log ("Kring: " + goodBattleCry)
	console.log ("Morduke: " + evilBattleCry)
	console.log (beginBattleMsg)
	console.log ("Morduke: " + evilVictoryMsg)
};
		












