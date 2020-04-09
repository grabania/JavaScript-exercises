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
