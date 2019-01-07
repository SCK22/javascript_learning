//Introduction to JavaScript

console.log('Hello this is an introduction and practice of JavaScript');
console.log(3*5);
console.log(Math.round(12.124));
var h = 10;
console.log(h);
console.log("You have entered the number:", h); // Yay!, same syntax as python.

//https://www.codecademy.com/courses/introduction-to-javascript/lessons/variables/exercises
// using var to create variables
var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

// var and let are both used for function declaration in javascript but the difference between them is that var is function scoped and let is block scoped. It can be said that a variable declared with var is defined throughout the program as compared to let.

// using let to create variables;
//The let keyword signals that the variable can be reassigned a different value. Take a look at the example:
//Another concept that we should be aware of when using let (and even var) is that we can declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of undefined:
let changeMe = true;
changeMe = false;
console.log(changeMe);


//Create a Variable: const
//Constant variables must be assigned a value when declared. If you try to declare a const variable without a value, you'll get a SyntaxError.
const entree = 'Enchiladas';
console.log(entree);
//entree = 'Tachos';
//const testing;

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;
// Use the mathematical assignments in the space below:
// ++ is predefined to increase the value by 1, and -- to decrease the value by 1  
levelUp+= 5;
powerLevel-=100;
multiplyMe*=11;
quarterMe/=4;
// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

var x = 10;
x+=1;
console.log("print", x);
var x = 12;
console.log("print", x);

let y = 100;
console.log("print", y);
// let y = 101;
// console.log("print", y);

const z = 111;
console.log("print", z);

// const z = 112;
// console.log("print", z);
// Variable declared with const and let cannot be reassigned, they can only be manipulated with.

//String Interpolation
// In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals. 
var myName = 'c';
var myCity = 'B';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

//typeof operator
let newVariable = 'Playing around with typeof.';

console.log("Type of the variable is",typeof newVariable);

newVariable = 1;

console.log("Type of the variable is",typeof newVariable);