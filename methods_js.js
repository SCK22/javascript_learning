// // Methods
// When the data stored on an object is a function, we call that a method. A property is what an object has, while a method is what an object does.

var alienShip = {
    invade: function () { console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
}
};

alienShip.invade();

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
alienShip ={
    retreat: function() {console.log(retreatMessage)},
    takeOff () {console.log('Spim... Borp... Glix... Blastoff!')
}  
}
alienShip.retreat();
alienShip.takeOff();

// Nested Objects

let spaceship = {
    passengers: [{name: 'Space Dog'}], 
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      backup: {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
let capFave = spaceship.crew.captain['favorite foods'][0];

let firstPassenger = spaceship.passengers[0];