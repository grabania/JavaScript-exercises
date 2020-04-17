var umbrella = {
	color: 'pink',
	isOpen: false,
	open: function() {
		if (umbrella.isOpen === true) {
			return 'The umbrella is already opened!';
		} else {
			umbrella.isOpen = true;
			return 'Julia opens the umbrella!';
		}
	}
};
console.log(umbrella.open());

/*
 * Programming Quiz: Umbrella
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `umbrella`
 * - The variable `umbrella` should be an object
 * - Your `umbrella` object should have the `color` and `isOpen` property
 * - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
 * - Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
 */

var umbrella = {
	color: 'pink',
	isOpen: true,
	open: function() {
		if (umbrella.isOpen === true) {
			return 'The umbrella is already opened!';
		} else {
			umbrella.isOpen = true;
			return 'Julia opens the umbrella!';
		}
	},
	close: function() {
		if (umbrella.isOpen !== true) {
			return 'The umbrella is already closed!';
		} else {
			umbrella.isOpen = false;
			return 'Julia closes the umbrella!';
		}
	}
};
console.log(umbrella.open());

//Object Literals
var sister = {
	name: 'Sarah',
	age: 23,
	parents: [ 'alice', 'andy' ],
	siblings: [ 'julia' ],
	favoriteColor: 'purple',
	pets: true,
	paintPicture: function() {
		return 'Sarah paints!';
	}
};

console.log(sister.paintPicture());
// two equivalent ways to use the key to return its value
console.log(sister['parents']); // returns [ "alice", "andy" ]
console.log(sister.parents); // also returns ["alice", "andy"]

/*
 * Programming Quiz: Menu Items
 */

var breakfast = {
	name: 'The Lumberjack',
	price: '$9.95',
	ingredients: [ 'eggs', 'sausage', 'toast', 'hashbrowns', 'pancakes' ]
};

console.log(breakfast);
