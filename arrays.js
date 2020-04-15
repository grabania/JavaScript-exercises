/*
 * Programming Quiz: MyFamily
 */

var myFamily = [ 'Julia', 'James', 'Paulina' ];

console.log(myFamily);

/*
 * Programming Quiz: Building the Crew
 */

var captain = 'Mal';
var second = 'Zoe';
var pilot = 'Wash';
var companion = 'Inara';
var mercenary = 'Jayne';
var mechanic = 'Kaylee';

var crew = [ captain, second, pilot, companion, mercenary, mechanic ];

console.log(crew);

/*
 * Programming Quiz: The Price is Right
 */

var prices = [ 1.23, 48.11, 90.11, 8.5, 9.99, 1.0, 1.1, 67.0 ];

prices[0] = 10;
prices[2] = 20;
prices[6] = 30;

console.log(prices);

//Splice Method

var donuts = [ 'glazed', 'chocolate frosted', 'Boston creme', 'glazed cruller' ];
donuts.splice(1, 1, 'chocolate cruller', 'creme de leche');

console.log(donuts);

/*
 * Programming Quiz: Colors of the Rainbow
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

var rainbow = [ 'Red', 'Orange', 'Blackberry', 'Blue' ];

rainbow.splice(2, 1, 'Yellow', 'Purple');

console.log(rainbow);

/*
 * Programming Quiz: Quidditch Cup
 */

function hasEnoughPlayers(team) {
	if (team.length >= 7) {
		return true;
	} else {
		return false;
	}
}

var team = [
	'Oliver Wood',
	'Angelina Johnson',
	'Katie Bell',
	'Alicia Spinnet',
	'George Weasley',
	'Fred Weasley',
	'Harry Potter'
];
console.log(hasEnoughPlayers(team));

/*
 * Programming Quiz: Joining the Crew
 */

var captain = 'Mal';
var second = 'Zoe';
var pilot = 'Wash';
var companion = 'Inara';
var mercenary = 'Jayne';
var mechanic = 'Kaylee';

var crew = [ captain, second, pilot, companion, mercenary, mechanic ];

var doctor = 'Simon';
var sister = 'River';
var shepherd = 'Book';

crew.push(doctor, sister, shepherd);

console.log(crew);

// Array Loops
var donuts = [ 'jelly donut', 'chocolate donut', 'glazed donut' ];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
	donuts[i] += ' hole';
	donuts[i] = donuts[i].toUpperCase();
}
console.log(donuts);

for (var i = 0; i < donuts.length; i++) {
	donuts[i] += ' hole';
	donuts[i] = donuts[i].toUpperCase();
	console.log(donuts[i]);
}

var donuts = [ 'jelly donut', 'chocolate donut', 'glazed donut' ];

// forEach example
donuts.forEach(function(donut) {
	donut += ' hole';
	donut = donut.toUpperCase();
	console.log(donut);
});

//another forEach example
words = [ 'cat', 'in', 'hat' ];
words.forEach(function(word, num, all) {
	console.log('Word ' + num + ' in ' + all.toString() + ' is ' + word);
});

/*
 * Programming Quiz: Another Type of Loop
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 */

var test = [
	12,
	929,
	11,
	3,
	199,
	1000,
	7,
	1,
	24,
	37,
	4,
	19,
	300,
	3775,
	299,
	36,
	209,
	148,
	169,
	299,
	6,
	109,
	20,
	58,
	139,
	59,
	3,
	1,
	139
];

test.forEach(function(word) {
	if (word % 3 === 0) {
		word += 100;
		console.log(word);
	}
});

var donuts = [ 'jelly donut', 'chocolate donut', 'glazed donut' ];

var improvedDonuts = donuts.map(function(donut) {
	donut += ' hole';
	donut = donut.toUpperCase();
	return donut;
});

console.log(improvedDonuts);
