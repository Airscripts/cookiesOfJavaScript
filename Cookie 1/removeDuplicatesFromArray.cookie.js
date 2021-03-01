// Declaring an array with some colors.
let colors = ["red", "green", "blue", "green"];
console.log(colors); // (4) ["red", "green", "blue", "green"]

// Removing duplicate colors.
let colorsWithoutDuplicates = [...new Set(colors)];
console.log(colorsWithoutDuplicates); // (3) ["red", "green", "blue"]