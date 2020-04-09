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

var avg = findAverage(5, 9);

// x and y are parameters in this function declaration
function add(x, y) {
	// function body
	var sum = x + y;
	return sum; // return statement
}

// 1 and 2 are passed into the function as arguments
var sum = add(1, 2);

/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

function laugh() {
	var sound = 'hahahahahahahahahaha!';
	return sound;
}

console.log(laugh()); /* call the laugh function */
