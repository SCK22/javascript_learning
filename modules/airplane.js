// Default export
//  allows us to export one module per file
//we can use export statement to export JavaScript objects, functions, and primitive data types.

let Airplane = {};

Airplane.availableAirplanes = [
    {
        name : 'AeroJet',
        fuelCapacity : 800

    },
    {
        name : 'SkyJet',
        fuelCapacity : 500
    }
];
module.exports = Airplane;