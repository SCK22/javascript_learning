const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

// forEach method
console.log('For Each Methoda:');
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(printIt => 
              console.log("I want to eat a", printIt));
               
// The .map() Method
// takes in array and returns an array after applying the fucntion
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map( firstLetter => firstLetter[0]);
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map( s => s/100);
console.log(smallNumbers);

//  filter method
// Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array.

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
  return word.length < 6;
});
console.log(shortWords);


const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNum = randomNumbers.filter( rn => rn < 250);
console.log(randomNumbers);
console.log(smallNum);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
function longWords (word){
  if (word.length >7){
    return true
  }
}

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(longWords);
console.log(favoriteWords);
console.log(longFavoriteWords);

// The .findIndex() Method
console.log('findIndex method:');

// Invoke .findIndex() on the the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.
const animals1 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals1.findIndex(animal => {return animal === 'elephant'});
console.log(foundAnimal);

// Let's see if we can find the index of the first animal that starts with the letter 's'.

const startsWithS = animals.findIndex(animal =>
    {return animal[0]==='s'});
console.log(startsWithS);


const startsWithS_inbuilt = animals.findIndex(animal =>
    {return animal.startsWith('s')});

console.log(startsWithS_inbuilt);

// Reduce 
console.log('Reduce method');
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator,currentValue) => {
  console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
                                          },10);

console.log(newSum);

// const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
    return word.length < 6;
  }));
  
  // Use filter to create a new array
  
  const interestingWords = words.filter(w => {return w.length >5 });
  //console.log(interestingWords);
  // Make sure to uncomment the code below and fix the incorrect code before running it
  
console.log(interestingWords.every((word) => { return word.length > 5 ;}));
  

// .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
// .map() executes the same code on every element in an array and returns a new array with the updated elements.
// .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
// .findIndex() returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
// .reduce() iterates through an array and takes the values of the elements and returns a single value.
// All iterator methods takes a callback function that can be pre-defined, or a function expression, or an arrow function.
// You can visit the Mozilla Developer Network to learn more about iterator methods (and all other parts of JavaScript!).