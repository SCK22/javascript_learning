// By convention, we capitalize and CamelCase class names.
class Dog {
    // JavaScript calls the constructor() method every time it creates a new instance of a class.
    constructor(name){
        // Inside of the constructor() method, we use the this keyword. In the context of a class, this refers to an instance of that class. In the Dog class, we use this to set the value of the Dog instance's name property to the name argument.
        this._name = name;
        this._behavior = 0;
    }
    get name() {
        return this._name;
    }
    get behavior(){
        return this._behavior;
    }

    incrementBehavior(){
        this._behavior ++;
    }
}

// Instance
//  An instance is an object that contains the property names and methods of a class, but with unique property values. 

// The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.
const halley = new Dog('halley');
// log name
console.log(halley.name);
//  log behavior
console.log (halley.behavior);

// increment behavior
console.log(halley.incrementBehavior()); // returns undefined as this function does not return anything

//  log behavior
console.log (halley.behavior);
