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

/*
 * Programming Quiz: I Got Bills
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

var bills = [ 50.23, 19.12, 34.01, 100.11, 12.15, 9.9, 29.11, 12.99, 10.0, 99.22, 102.2, 100.1, 6.77, 2.22 ];

var total = bills.map(function(bill) {
	bill += bill * 0.15;

	return parseFloat(bill.toFixed(2)); // or: return Number(bill.toFixed(2))
});
console.log(total);

/*
 * Arrays in Arrays
 */

var donutBox = [
	[ 'glazed', 'chocolate glazed', 'cinnamon' ],
	[ 'powdered', 'sprinkled', 'glazed cruller' ],
	[ 'chocolate cruller', 'Boston creme', 'creme de leche' ]
];

for (var row = 0; row < donutBox.length; row++) {
	// here, donutBox[row].length refers to the length of the donut array currently being looped over
	for (var column = 0; column < donutBox[row].length; column++) {
		console.log(donutBox[row][column]);
	}
}

/*
 * Programming Quiz: Nested Numbers
 *
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

var numbers = [
	[ 243, 12, 23, 12, 45, 45, 78, 66, 223, 3 ],
	[ 34, 2, 1, 553, 23, 4, 66, 23, 4, 55 ],
	[ 67, 56, 45, 553, 44, 55, 5, 428, 452, 3 ],
	[ 12, 31, 55, 445, 79, 44, 674, 224, 4, 21 ],
	[ 4, 2, 3, 52, 13, 51, 44, 1, 67, 5 ],
	[ 5, 65, 4, 5, 5, 6, 5, 43, 23, 4424 ],
	[ 74, 532, 6, 7, 35, 17, 89, 43, 43, 66 ],
	[ 53, 6, 89, 10, 23, 52, 111, 44, 109, 80 ],
	[ 67, 6, 53, 537, 2, 168, 16, 2, 1, 8 ],
	[ 76, 7, 9, 6, 3, 73, 77, 100, 56, 100 ]
];

for (var row = 0; row < numbers.length; row++) {
	for (var column = 0; column < numbers[row].length; column++) {
		if (numbers[row][column] % 2 === 0) {
			numbers[row][column] = 'even';
		} else {
			numbers[row][column] = 'odd';
		}
		console.log(numbers);
	}
}
