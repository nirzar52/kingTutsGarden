/* Keywords: plant, cellphone, clock, pyramid */
const myTitle = document.querySelector("h1");
console.log(myTitle);

let titlePart1 = "Tutankhamen Pharoh";
let titlePart2 = 'The Awesome Green Thumbed Ruler';
myTitle.innerText = `${titlePart1}: ${titlePart2}`;

//phsroahs sleep state
let isSleeping = true;

let pharoahPlants = [
    {plantName: "basil", colour: "green", needsWatering:true},
    {plantName: "rosemary", colour: "green", needsWatering:false},
    {plantName: "sweet millions tomatoes", colour: "orange", needsWatering:true},
    {plantName: "peppermint", colour: "green", needsWatering:false},
    {plantName: "cillantro", colour: "green", needsWatering:true},
    {plantName: "strawbarries", colour: "red", needsWatering:true}
]

//number of plants
let numPlants = pharoahPlants.length;
console.log(`The Pharoah has ${numPlants} plants!`);

//the pharoahs first plant is 
console.log(pharoahPlants[0]);

//the pharoahs last plant is 
console.log(pharoahPlants[pharoahPlants.length -1]);

let strawbarries = pharoahPlants[pharoahPlants.length -1];
    console.log(strawbarries.needsWatering);
    console.log(strawbarries["needsWatering"]);