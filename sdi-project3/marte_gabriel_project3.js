//Author: Gabriel Marte
//SDI project 3
//10/11/2012

var getCharList = function(json){
	for (var i = 0; i<json.characters.length; i++){		//FOR LOOP
		var characters = json.characters[i]					//LOCAL VARIABLES
		console.log("Player: " + characters.charName + ", Rank: " + characters.charRank + ", Class: " + characters.charClass )

	}
};

getCharList(json)
