// Arrays 
//  Creating arrays
const hobbies =['a','b','c'];
console.log(hobbies);

// Accessing elements

// Arrays in JavaScript are zero-indexed

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

var listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

// Update Elements
let groceryList = ['bread', 'tomatoes', 'milk'];
console.log(groceryList)

groceryList[1] = 'avocados';
console.log(groceryList)

// Arrays with let and const
// You may recall that you can declare variables with both the let and const keywords. Variables declared with let can be reassigned.
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

// We can change the elements of the arrays in both cases i.e  const and let, as always we cannot change the whole array if it is defined with const.


// The .length property
console.log(utensils.length);

// Let's learn about some built-in JavaScript methods that make working with arrays easier. These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.

let chores = ['wash dishes', 'do laundry', 'take out trash'];

// The .push() Method
// If you're looking for a method that will mutate an array by adding elements to it, then .push() is the method for you!
console.log("Push method");
chores.push('a','b');
console.log(chores);

// The .pop() Method - Another array method, .pop(), removes the last item of an array.
chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
console.log("Pop method");
console.log(chores);
chores.pop();
console.log(chores);

//More Array Methods
groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
//  shift will give the first element of the array.
groceryList.shift();
console.log(groceryList);
//  unshift will add the elements to the beginning of the array.
groceryList.unshift('popcorn');
console.log(groceryList);
//  slice will give a shallow copy of the oroginal array including the first index, excluding the last index.
console.log(groceryList.slice(1,4));
console.log(groceryList);

//  indexOf will give the index of the first occurance of the element in the array.
// we can give a parameter to tell the indexOf operator where to start searching from.
const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

// join
console.log("Join method");
var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join(" "));

//  Functions and Arrays
// So when you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well. You might also see this concept explained as pass-by-reference since what we're actually passing the function is a reference to where the variable memory is stored and changing the memory.

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement(newArr){
  newArr.pop();
}

removeElement(concept);
console.log(concept);


// Nested Arrays

var numberClusters = [[1,2], [3,4], [5,6]];

const target = numberClusters[2][1];
console.log(target);













