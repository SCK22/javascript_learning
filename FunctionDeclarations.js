// Function Declarations

// We should also be aware of the hoisting feature in JavaScript which allows access to function declarations before they're defined.

function getReminder(){
    console.log('Water the plants.');
  }
  function greetInSpanish(){
    console.log('Buenas Tardes.');
  }

getReminder();
greetInSpanish();

// Passing arguments to functions. 
var name;
function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + ' ! We appreciate your business.');
}

sayThanks('Cole');

// Default arguments
function makeShoppingList(item1 = 'milk',
                           item2 = 'bread',
                           item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList();

//  return 
var rows;
var columns;
function monitorCount(rows, columns){
  return rows * columns;
}

const numOfMonitors = monitorCount(5,4);
console.log('Number of monitors required are :' ,numOfMonitors);

// Helper Functions
// We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.


function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns){
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5,4);
console.log(totalCost);

// Function Expressions
//  Frankly I don't know what is the benefit of using this
const plantNeedsWater = function(day){
  if (day === 'Wednesday'){
    return true;
  } else{
    return false;
  }
 }
 plantNeedsWater('Tuesday');
 console.log(plantNeedsWater('Tuesday'));

//  Arrow functions
console.log('Arrow Funtions');
// "fat arrow" () => notation.
// Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:

const plantNeedsWater1 = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
console.log(plantNeedsWater1('Wednesday'));

const plantsNeedWater2 = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
console.log(plantsNeedWater2('Wednesday'));

// Concise Body Arrow Functions

console.log('Concise Body Arrow Functions');
const plantNeedsWater4 = day => day === 'Wednesday' ? true : false;console.log(plantNeedsWater4('Wednesday'));