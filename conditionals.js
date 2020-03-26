var price = 15.0;
var money = 20.0;

if (money >= price) {
	console.log('buy the hammer');
} else {
	console.log("don't buy the hammer");
}

var a = 1;
var b = 2;

if (a > b) {
	console.log('a is greater than b');
} else {
	console.log('a is less then or equal to b');
}

var weather = 'sunny';

if (weather === 'snow') {
	console.log('Bring a coat.');
} else if (weather === 'rain') {
	console.log('Bring a rain jacket');
} else {
	console.log('Wear what you have.');
}

var money = 100.5;
var price = 100.5;

if (money > price) {
	console.log("You paid extra, here's your change.");
} else if (money === price) {
	console.log('You paid the exact amount, have a nice day!');
} else {
	console.log("That's not enough, you still owe me money.");
}

var weather = 'sunny';

if (weather === 'snow') {
	console.log('Bring a coat.');
} else if (weather === 'rain') {
	console.log('Bring a rain jacket.');
} else {
	console.log('Wear what you have on.');
}

var money = 100.5;
var price = 100.5;

if (money > price) {
	console.log("You paid extra, here's your change.");
} else if (money === price) {
	console.log('You paid the exact amount, have a nice day!');
} else {
	console.log("That's not enough, you still owe me money.");
}

var runner = 'Kendyll';
var position = 2;
var medal;

if (position === 1) {
	medal = 'gold';
} else if (position === 2) {
	medal = 'silver';
} else if (position === 3) {
	medal = 'bronze';
} else {
	medal = 'pat on the back';
}

console.log(runner + ' received a ' + medal + ' medal.');

var number = 4;

if (number % 2 === 1) {
	console.log('odd');
} else {
	console.log('even');
}
