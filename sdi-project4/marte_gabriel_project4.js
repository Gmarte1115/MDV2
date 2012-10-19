//alert("JavaScript works!");
//Author: Gabriel Marte
//Date: 10/17/12
//SDI Project 4

//STRING FUNCTIONS LIBRARY

//Does a string follow a 123-456-7890 pattern like a phone number?v

var valPhoneNumFormat = function(checkNum){
	var phoneNum = checkNum;
	var phonePattern = /^[0-9-]+[0-9-]+[0-9-]/
	if (phonePattern.test(checkNum))
		console.log ("Phone number format is correct");
		else console.log("Phone number format is incorrect");
	
	
};

valPhoneNumFormat("111-111-1111");

//Does a string follow an aaa@bbb.ccc pattern like an email address?


var valEmailFormat = function(checkEmail){
	var emailSample = checkEmail;
	var emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]/
	if (emailPattern.test(checkEmail))
		console.log ("Email format is correct");
		else console.log("Email format is incorrect");
	
	
};

valEmailFormat("aaa@bbb.ccc")

//Is the string a URL? (Does it start with http: or https:?)

var valUrl = function(checkUrl){
	var urlSample = checkUrl;
	var urlPattern = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
	if (urlPattern.test(checkUrl))
		console.log ("URL format is correct");
		else console.log("URL format is incorrect");
};

valUrl("https://www.test.com")

//Title-case a string (split into words, then uppercase the first letter of each word)

function upCase(string) {
    var testString = string.split(/\s|_/);
    for(var i=0,l=testString.length; i<l; i++) {
        testString[i] = testString[i].substr(0,1).toUpperCase() + 
                 (testString[i].length > 1 ? testString[i].substr(1).toLowerCase() : "");
    }
    return testString.join("");
}

console.log(upCase("testing this"));

//Given a string version of a number such as "42", return the value as an actual Number, such as 42.

var convertNum = function(numString){
	var numList = {
		"0" : 0,
		"1" : 1,
		"2" : 2,
		"3" : 3,
		"4" : 4,
		"5" : 5,
		"6" : 6,
		"7" : 7,
		"8" : 8,
		"9" : 9
	}

	
};
console.log(convertNum("42"));
















