//CONDITIONAL STATEMENTS
// if, else if, and else statements.
// comparison operators.
// logical operators.
// truthy vs falsy values.
// ternary operators.
// the switch statement.


// -The if keyword
let sale = true;

if (sale){
    console.log(`The variable sale is set to ${sale}.`);
    console.log('Time to buy!');
} 

sale=false;
if (!sale){
    console.log(`The variable sale is set to ${sale}.`);
    console.log('Do not buy!');
} 

// if else 
// var sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
}
else {
  console.log('Time to wait for a sale.');
}


//Here is a list of some handy comparison operators and their syntax:

// Less than: <
// Greater than: >
// Less than or equal to: <=
// Greater than or equal to: >=
// Is equal to: ===
// Is NOT equal to: !==

let hungerLevel = 7;
if (hungerLevel > 7){
  console.log('Time to eat!');
} else {
   console.log('We can eat later!');
}

//Logical Operators
// There are three logical operators:

// the and operator (&&)
// the or operator (||)
// the not operator, otherwise known as the bang operator (!)
let mood = 'sleepy';
let tirednessLevel = 6;


if (mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

//Truthy and Falsy
// truthy - when the variable is not explicitly true but when we use it in situation like if(varName) , if it is defied, then the expression evaluates to true
// similarly falsy
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

//Ternary Operator
let isLocked = false;

//if (isLocked) {
//  console.log('You will need a key to open the //door.');
//} else {
//  console.log('You will not need a key to open the door.');
//}
// Ternanry operator
isLocked?console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;


isCorrect?console.log('Correct!'): console.log('Incorrect!');

favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!'?console.log('I love that!'): console.log("I don't love that!");

//Else If Statements
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
}else if(season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.');
} 
else if(season === 'fall'){
  console.log('It\'s fall! Leaves are falling!');
}
else if(season === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!');
}
else {
  console.log('Invalid season.');
}

// The switch keyword
let athleteFinalPosition = 'first place';
switch(athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.')
    break;//but why
}