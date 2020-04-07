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

/*
 * Programming Quiz: Musical Groups
 */

var musicians = 1;

if (musicians < 1) {
	console.log('not a group');
} else if (musicians === 1) {
	console.log('solo');
} else if (musicians === 2) {
	console.log('duet');
} else if (musicians === 3) {
	console.log('trio');
} else if (musicians === 4) {
	console.log('quartet');
} else {
	console.log('this is a large group');
}
/*
	* Programming Quiz: Murder Mystery
	*/

var room = 'dining room';
var suspect = 'Mr. Parkes';

var weapon = '';
var solved = false;

if (room === 'ballroom' && suspect === 'Mr. Kalehoff') {
	weapon = 'poison';
	solved = true;
} else if (room === 'gallery' && suspect === 'Ms. Van Cleve') {
	weapon = 'trophy';
	solved = true;
} else if (room === 'billiards room' && suspect === 'Mrs. Sparr') {
	weapon = 'pool stick';
	solved = true;
} else if (room === 'dining room' && suspect === 'Mr. Parkes') {
	weapon = 'knife';
	solved = true;
}

if (solved) {
	console.log(suspect + ' did it in the ' + room + ' with the ' + weapon + '!');
}

var colt = 'not busy';
var weather = 'nice';

if (colt === 'not busy' && weather === 'nice') {
	console.log('go to the park');
}

/*
 * Programming Quiz - Checking Your Balance
 */

var balance = 325.0;
var checkBalance = true;
var isActive = false;

if (checkBalance === true && isActive === false) {
	console.log('Your balance is: ' + balance.toFixed(2));
}

/*
 * Programming Quiz: Ice Cream
 */

var flavor = 'strawberry';
var vessel = 'cone';
var toppings = 'cookies';

if (
	(flavor === 'vanilla' || flavor === 'chocolate') &&
	(vessel === 'cone' || vessel === 'bowl') &&
	(toppings === 'sprinkles' || toppings === 'peanuts')
);
{
	console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`);
}

/*
 * Programming Quiz: What do I Wear?
 */

var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

if (
	shirtWidth > 17 &&
	shirtWidth < 20 &&
	(shirtLength > 27 && shirtLength < 29) &&
	(shirtSleeve > 8.12 && shirtSleeve < 8.38)
) {
	console.log('S');
} else if (
	shirtWidth > 19 &&
	shirtWidth < 22 &&
	(shirtLength > 28 && shirtLength < 30) &&
	(shirtSleeve > 8.37 && shirtSleeve < 8.63)
) {
	console.log('M');
} else if (
	shirtWidth > 21 &&
	shirtWidth < 24 &&
	(shirtLength > 29 && shirtLength < 31) &&
	(shirtSleeve > 8.62 && shirtSleeve < 8.88)
) {
	console.log('L');
} else if (
	shirtWidth > 23 &&
	shirtWidth < 26 &&
	(shirtLength > 30 && shirtLength < 33) &&
	(shirtSleeve > 8.87 && shirtSleeve < 9.63)
) {
	console.log('XL');
} else if (
	shirtWidth > 25 &&
	shirtWidth < 28 &&
	(shirtLength > 32 && shirtLength < 34) &&
	(shirtSleeve > 9.62 && shirtSleeve < 10.13)
) {
	console.log('2XL');
} else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
	console.log('3XL');
} else {
	console.log('N/A');
}

/*
 * Programming Quiz - Navigating the Food Chain
 */

var eatsPlants = false;
var eatsAnimals = true;

var category =
	eatsPlants && eatsAnimals ? 'omnivore' : eatsAnimals ? 'carnivore' : eatsPlants ? 'herbivore' : undefined;

console.log(category);

var tier = 'nsfw deck';
var output = 'You’ll receive ';

switch (tier) {
	case 'deck of legends':
		output += 'a custom card, ';
	case "collector's deck":
		output += 'a signed version of the Exploding Kittens deck, ';
	case 'nsfw deck':
		output += 'one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ';
	default:
		output += 'one copy of the Exploding Kittens card game.';
}

console.log(output);
