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
