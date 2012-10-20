//alert("JavaScript works!");
//Author: Gabriel Marte
//Date: 10/17/12
//SDI Project 4

//FUNCTIONS LIBRARY

//Does a string follow a 123-456-7890 pattern like a phone number?v
//STRING FUNCTION FLOWCHART
var valPhoneNumFormat = function(checkNum){
	var phoneNum = checkNum;
	var phonePattern = /^[0-9-]+[0-9-]+[0-9-]/;
	if (phonePattern.test(checkNum)) {
		console.log ("Phone number format is correct");
	} else {console.log("Phone number format is incorrect");
	   };
	return phoneNum;
};

valPhoneNumFormat("111-111-1111");

//Does a string follow an aaa@bbb.ccc pattern like an email address?
//STRING FUNCTION FLOWCHART

var valEmailFormat = function(checkEmail){
	var emailSample = checkEmail;
	var emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]/
	if (emailPattern.test(checkEmail)){
		console.log ("Email format is correct");
	} else {console.log("Email format is incorrect");
	   };
	return emailSample;
};

valEmailFormat("aaa@bbb.ccc")

//Is the string a URL? (Does it start with http: or https:?)
//STRING FUNCTION FLOWCHART
var valUrl = function(checkUrl){
	var urlSample = checkUrl;
	var urlPattern = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
	if (urlPattern.test(checkUrl)){
		console.log ("URL format is correct");
	} else {console.log("URL format is incorrect");
	   };
	return urlSample;
};

valUrl("https://www.test.com")

//Title-case a string (split into words, then uppercase the first letter of each word)
//STRING FUCTION WITH LOOP FLOWCHART
function upCase(string) {
    var testString = string.split(/\s|_/);
    for(var i=0,l=testString.length; i<l; i++) {
        testString[i] = testString[i].substr(0,1).toUpperCase() + 
                 (testString[i].length > 1 ? testString[i].substr(1).toLowerCase() : "");
    };
    return testString.join("");
};

console.log(upCase("testing this"));

//Find the smallest value in an array that is greater than a given number
//ARRAY FUNCTION FLOWCHART
var minValue = function (array) {
	var	min = array[0];
    for (i=0; i<array.length; i++) {
	    if (array[i]<min) {
		    min = array[i];
		};
    };
    return min;
};

console.log ("The smallest value is " + (minValue([2, 4, 6, 8, 10])));

//Find the total value of just the numbers in an array, even if some of the items are not numbers.
//ARRAY FUNCTION FLOWCHART
var totalVal = function (array) {
	var sum = 0;
	for (var i=0; i<array.length; i++) {
		if (!isNaN(parseInt(array[i]))) {sum += array[i]; 
		console.log(sum)
		};
	};
	return sum;
};

totalVal([1, 2, 3, 4, 5, "a", "b", "c", "d", "e"])



