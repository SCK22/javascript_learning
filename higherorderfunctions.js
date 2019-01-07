// HIGHER-ORDER FUNCTIONS
// higher-order functions. Higher-order functions are functions that accept other functions as arguments and/or return functions as output. This enables us to build abstractions on other abstractions, just like "We hosted a birthday party" is an abstraction that may build on the abstraction "We made a cake."

// Functions as Data

// In JavaScript, functions are first class objects, this means that like other objects you've encountered, JavaScript functions can have properties and methods.
// Since functions are a type of object, they have properties such as .length and .name and methods such as .toString(). You can see more about the methods and properties of functions in the documentation.

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  }
  
  // Write your code below
  const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  
  is2p2();
//  we can check the name attribute for the newly assigned variable
  console.log(is2p2.name);
  console.log(checkThatTwoPlusTwoEqualsFourAMillionTimes.name);



