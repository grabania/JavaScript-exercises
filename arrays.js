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
