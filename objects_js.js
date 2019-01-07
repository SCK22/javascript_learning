// Objects in Java script

// There are only seven fundamental data types in JavaScript, and six of those are the primitive data types: string, number, boolean, null, undefined, and symbol. With the seventh type, objects, we open our code to more complex possibilities.

// At their core, JavaScript objects are containers storing related data and functionality, but that deceptively simple task is extremely powerful in practice. You've been using the power of objects all along, but now it's time to understand the mechanics of objects and start making your own!

// Creating Object Literals

// Objects can be assigned to variables just like any JavaScript type. We use curly braces, {}, to designate an object literal:

let spaceship = {};

// We fill an object with unordered data. This data is organized into key-value pairs. A key is like a variable name that points to a location in memory that holds a value.
spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    color : 'silver'
  };
// A key's value can be of any data type in the language including functions or other objects.

spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
const crewCount  = spaceship.numCrew;
console.log(crewCount);
var planetArray = spaceship.flightPath;
console.log(planetArray);


spaceship = {
'Fuel Type' : 'Turbo Fuel',
homePlanet : 'Earth',
color: 'silver',
'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship['color'] = 'glorious gold';
spaceship.numEngines = 8;

delete spaceship['Secret Mission'];