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

/*
 * Programming Quiz: Bank Accounts 1
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `savingsAccount` 
 * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
 * - Your `savingsAccount` object should have a `printAccountSummary()` method
 * - Your `printAccountSummary()` method should return the EXACT expected message
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */

var savingsAccount = {
	balance: 1000,
	interestRatePercent: 1,
	deposit: function addMoney(amount) {
		if (amount > 0) {
			savingsAccount.balance += amount;
		}
	},
	withdraw: function removeMoney(amount) {
		var verifyBalance = savingsAccount.balance - amount;
		if (amount > 0 && verifyBalance >= 0) {
			savingsAccount.balance -= amount;
		}
	},
	printAccountSummary: function() {
		return (
			'Welcome!\n' +
			'Your balance is currently $' +
			savingsAccount.balance +
			' and your interest rate is ' +
			savingsAccount.interestRatePercent +
			'%.'
		);
	}
};

console.log(savingsAccount.printAccountSummary());

var savingsAccount = {
	balance: 1000,
	interestRatePercent: 1,
	deposit: function addMoney(amount) {
		if (amount > 0) {
			savingsAccount.balance += amount;
		}
	},
	withdraw: function removeMoney(amount) {
		var verifyBalance = savingsAccount.balance - amount;
		if (amount > 0 && verifyBalance >= 0) {
			savingsAccount.balance -= amount;
		}
	}
};

/*
 * Programming Quiz: Facebook Friends
 */

var facebookProfile = {
	name: 'Heggy',
	friends: 5,
	messages: [ 'this is my first message' ],
	postMessage: function addMessage(message) {
		facebookProfile.messages.push(message);
	},
	deleteMessage: function removeMessage(index) {
		// .splice(startIndex, NoElementToDelete)
		facebookProfile.messages.splice(index, 1);
	},
	addFriend: function increaseFriend() {
		facebookProfile.friends++;
	},
	removeFriend: function decreaseFriend() {
		facebookProfile.friends--;
	}
};

facebookProfile.removeFriend();
facebookProfile.friends;
facebookProfile.postMessage('In Cuba');
facebookProfile.messages;
facebookProfile.postMessage('In Bankok');
facebookProfile.messages;
facebookProfile.deleteMessage(1);

var facebookProfile = {
	name: 'Natalie Cyreus',
	friends: 927,
	messages: [ 'In Buenos Aires!', 'In Stockholm!', 'In New York!' ],
	postMessage(message) {
		facebookProfile.messages.push(message);
	},
	deleteMessage(index) {
		facebookProfile.messages.splice(index, 1);
	},
	addFriend() {
		facebookProfile.friends += 1;
	},
	removeFriend() {
		facebookProfile.friends = facebookProfile.friends - 1;
	}
};

console.log(facebookProfile.removeFriend());
console.log(facebookProfile.friends);
