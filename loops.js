// Loops

// Repeating Tasks Manually
// The For Loop
// Write your code below



for (let counter = 5; counter <10;counter ++){
    console.log(counter);
  }

  
// looping backwards
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0 ; counter--){
    console.log(counter)
  };
  

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0 ; i < vacationSpots.length;
    i ++){
  console.log ('I would love to visit ' + vacationSpots[i]);
}

//  Nested loops
// Write your code below
console.log("Nested looping example");
let bobsFollowers = ['a','b','c','d'];
let tinasFollowers = ['a','c','e'];
console.log(bobsFollowers,tinasFollowers);
let mutualFollowers = [];

for (let i =0 ; i<bobsFollowers.length; i++){
  for (let j = 0; j<tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);

//  while loop
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard
while (currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// Write your code below

const cupsOfSugarNeeded = 0;
let cupsAdded = 0;

do {
  cupsAdded ++;
  console.log('cupsAdded ' + cupsAdded);
} while (cupsAdded <cupsOfSugarNeeded );

//  break statement
console.log('Break statement');
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let rapperArrayIndex =0 ; rapperArrayIndex < rapperArray.length; rapperArrayIndex++ ){
  console.log(rapperArray[rapperArrayIndex]);
  if (rapperArray[rapperArrayIndex] == 'Notorious B.I.G.'){
    break;
  }
  
}
console.log("And if you don\'t know, now you know.");


