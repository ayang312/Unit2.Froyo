const flavors = prompt("Please enter a list of comma-separated Froyo flavors (no spaces)");

// parse input into an array of flavor
const inputFlavor = flavors.split(",");

//create object for flavors
const froyo = {};

//you are looping through the array
//loop of array and determine if flavor exists and increase count
//does the key vanilla exist in my froyo object?.. if not, create key and set value to 1
//if key vanilla does exist, increase value by 1
let vanillaCount = 0;
let strawberryCount = 0;
let coffeeCount = 0;

for (let i = 0; i < inputFlavor.length; i++) {
    if (inputFlavor[i].toLowerCase() === "vanilla") {
        vanillaCount += 1;
        froyo["vanilla"] = vanillaCount;       
    }   else if (inputFlavor[i].toLowerCase() === "strawberry") {
        strawberryCount += 1;
        froyo["strawberry"] = strawberryCount;
    } else if (inputFlavor[i].toLowerCase() === "coffee") {
        coffeeCount += 1;
        froyo["coffee"] = coffeeCount;
    }
}

// return object
console.table(froyo);