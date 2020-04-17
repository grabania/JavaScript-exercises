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
