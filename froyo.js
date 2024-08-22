let flavors = prompt("Please enter a list of comma-separated Froyo flavors (no spaces)");

// parse input into an array of flavor
flavors = flavors.split(",");

//create object for flavors
const flavorCount = (arr) => {

    const count = {};

    //you are looping through the array
    //loop of array and determine if flavor exists and increase count
    //does the key vanilla exist in my froyo object?.. if not, create key and set value to 1
    //if key vanilla does exist, increase value by 1
    for (let flavor of arr) {
        flavor = flavor.trim();
            if (flavor in count) {
                count[flavor] += 1;
            } else {
                count[flavor] = 1;
            }
    }
    return count;
}


// return object
console.table(flavorCount(flavors));