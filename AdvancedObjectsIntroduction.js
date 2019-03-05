// Advanced Objects Introduction

// this is like self in python, it refers to the object in which its called

let robot = {
    model : '1E78V2',
    energyLevel : 100,
    provideInfo()  {return `I am ${this.model}  and my current energy level is ${this.energyLevel}`}
  };
  
console.log("Robot info",robot.provideInfo());

// Privacy
// https://www.codecademy.com/courses/introduction-to-javascript/lessons/advanced-objects/exercises/privacy

//  Getters and setters are methods which are used to respect the properties prepended or starting with _
// Getters can return the value of internal properties and setters can safely reassign property values

robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel () {
      if (typeof this._energyLevel === 'number')
      {
        return `My current energy level is ${this._energyLevel}`;
      }
      else {
        return 'System malfunction: cannot retrieve energy level'
      }
    }
};

console.log("Robot Energy leve",robot.energyLevel)

// Setter methods
// we can still change the values of properties without the setter methods
robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if (typeof num === 'number' && num >=0){
        this._numOfSensors = num;
      } else{
        console.log('Pass in a number that is greater than or equal to 0');
      }
    }
  };
  
  console.log("Before", robot.numOfSensors);
  robot.numOfSensors = 100;
  console.log("After", robot.numOfSensors);
//   console.log(robot.name);
  
  
  