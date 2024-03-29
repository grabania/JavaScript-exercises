function sayHello() {
	var message = 'Hello!';
	console.log(message);
}

console.log(sayHello());

function sayHello() {
	var message = 'Hello!';
	return message; // returns value instead of printing it
}

console.log(sayHello());

function findAverage(x, y) {
	var answer = (x + y) / 2;
	return answer;
}

console.log(findAverage(5, 9));

// x and y are parameters in this function declaration
function add(x, y) {
	// function body
	var sum = x + y;
	return sum; // return statement
}

// 1 and 2 are passed into the function as arguments
console.log(add(1, 2));

/*
 * Programming Quiz: Laugh it Off 1
 */

function laughh() {
	return 'hahahahahahahahahaha!';
}

console.log(laughh());

/*
 * Programming Quiz: Laugh it Off 2
 */
var laughString;

function laugh(num) {
	laughString = '';
	if (num > 0) {
		for (var i = num; i > 0; i--) {
			laughString += 'ha';
		}
		laughString += '!';
	}
	return laughString;
}

console.log(laugh(3));

function isThisWorking(input) {
	console.log('Printing: isThisWorking was called and ' + input + ' was passed in as an argument.');
	return 'Returning: I am returning this string!';
}

isThisWorking(3);

function sleep() {
	console.log("I'm sleepy!");
	return 'zzz';
	return 'snore';
}

sleep();

function square(x) {
	return x * x;
}

function subtractFour(x) {
	return square(x) - 4;
}

console.log(subtractFour(5));

//Using return value
function addTen(x) {
	return x + 10;
}

function divideByThree(y) {
	return y / 3;
}

var result = addTen(2);
console.log(divideByThree(result));

//sayHi function

function sayHi(name) {
	var greeting = 'Hello';
	console.log(greeting + ' ' + name);
}

sayHi('Julia');

/*
 * Programming Quiz: Build A Triangle
 */

function makeLine(length) {
	var line = '';
	for (var j = 1; j <= length; j++) {
		line += '* ';
	}
	return line + '\n';
}

function buildTriangle(x) {
	var triangle = '';
	for (var t = 1; t <= x; t++) {
		triangle += makeLine(t);
	}
	return triangle;
}

console.log(buildTriangle(10));

// Function expression/anonymous function/callback

// function expression catSays
var catSays = function(max) {
	var catMessage = '';
	for (var i = 0; i < max; i++) {
		catMessage += 'meow ';
	}
	return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
	return 'Hello ' + callbackFunc(3);
}

// pass in catSays as a callback function
console.log(helloCat(catSays));

// Inline function expressions

// Function expression that assigns the function displayFavorite
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
	console.log('My favorite movie is ' + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
	messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, 'Finding Nemo');

//or shorter

// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
	messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
	console.log('My favorite movie is ' + movieName);
}, 'Finding Nemo');

/*
 * Programming Quiz: Laugh
 */

var laugh = function(num) {
	var numOfHa = '';

	for (var i = 0; i < num; i++) {
		numOfHa += 'ha';
	}

	numOfHa += '!';
	return numOfHa;
};
console.log(laugh(10));

/*
 * Programming Quiz: Cry
 */

var cry = function makeCry(num) {
	numOfBoo = 'boohoo';
	return numOfBoo;
};

console.log(cry());

/*
 * Programming Quiz: Inline Functions
 */

function emotions(myString, myFunc) {
	console.log('I am ' + myString + ', ' + myFunc(2));
}

emotions('happy', function laugh(num) {
	var numOfHa = '';

	for (var i = 0; i < num; i++) {
		numOfHa += 'ha';
	}

	numOfHa += '!';
	return numOfHa;
});
