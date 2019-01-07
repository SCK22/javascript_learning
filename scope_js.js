// Scope 

const city = 'New York City';

const logCitySkyline =function() {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
};
console.log(logCitySkyline());


var satellite = 'The Moon';
var galaxy = 'The Milky Way';
var stars = 'North Star';

function callMyNightSky (){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

// Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes.

// const satellite = 'The Moon';
// const galaxy = 'The Milky Way';
// let stars = 'North Star';

// const callMyNightSky = () => {
//   stars = 'Sirius';
//   return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
// };

// console.log(callMyNightSky());
// console.log(stars);

// Soping correctly
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if (region === "The Arctic"){
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    }
    console.log(lightWaves);
  };
  
  logVisibleLightWaves();
