var x = 10;
while (x <= 25) {
	console.log('Printing out x = ' + x);
	x = x + 2;
}

/*
 * Programming Quiz: JuliaJames
 */

var x = 1;

while (x <= 20) {
	if (x % 3 === 0 && x % 5 === 0) {
		console.log('JuliaJames');
	} else if (x % 5 === 0) {
		console.log('James');
	} else if (x % 3 === 0) {
		console.log('Julia');
	} else {
		console.log(x);
	}
	x++;
}

/*
 * Programming Quiz: 99 Bottles of Juice
 */

var num = 99;

while (num >= 1) {
	if (num === 2) {
		console.log(
			num +
				' bottles of juice on the wall! ' +
				num +
				' bottles of juice! Take one down, pass it around... ' +
				(num - 1) +
				' bottle of juice on the wall!'
		);
	} else if (num === 1) {
		console.log(
			num +
				' bottle of juice on the wall! ' +
				num +
				' bottle of juice! Take one down, pass it around... ' +
				(num - 1) +
				' bottles of juice on the wall!'
		);
	} else {
		console.log(
			num +
				' bottles of juice on the wall! ' +
				num +
				' bottles of juice! Take one down, pass it around... ' +
				(num - 1) +
				' bottles of juice on the wall!'
		);
	}
	num--;
}

/*
 * Programming Quiz: Countdown, Liftoff!
 */
var num = 60;

while (num >= 0) {
	if (num === 50) {
		console.log('Orbiter transfers from ground to internal power');
	} else if (num === 31) {
		console.log('Ground launch sequencer is go for auto sequence start');
	} else if (num === 16) {
		console.log('Activate launch pad sound suppression system');
	} else if (num === 10) {
		console.log('Activate main engine hydrogen burnoff system');
	} else if (num === 6) {
		console.log('Main engine start');
	} else if (num === 0) {
		console.log('Solid rocket booster ignition and liftoff!');
	} else {
		console.log('T-' + num + ' seconds');
	}
	num--;
}

/*
* Nested for loop
*/

for (var x = 0; x < 5; x = x + 1) {
	for (var y = 0; y < 3; y = y + 1) {
		console.log(x + ',' + y);
	}
}

/*
 * Programming Quiz: Changing the Loop.
 * Rewrite the following while loop as a for loop:
 */

var x = 9;
while (x >= 1) {
	console.log('hello ' + x);
	x = x - 1;
}

for (var x = 9; x >= 1; x--) {
	console.log('hello ' + x);
}

/*
 * Programming Quiz: Fix the Error 1
 */

for (var x = 5; x < 10; x++) {
	console.log(x);
}

/*
 * Programming Quiz: Fix the Error 2
 */

for (var k = 0; k < 200; k++) {
	console.log(k);
}

/*
 * Programming Quiz: Factorials
 */

let solution = 1;

for (i = 1; i <= 12; i++) {
	solution *= i;
}
console.log(solution);

/*
 * Programming Quiz: Find my Seat
 */

for (var f = 0; f < 26; f++) {
	for (l = 0; l < 100; l++) {
		console.log(f + '-' + l);
	}
}
