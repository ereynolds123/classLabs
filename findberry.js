//Take an arrays, function finds the first word that ends in sanitized "berry". Return the original unsanitized berry. 
let fruits = ["Apple", "BlueBErry", "Cherry", "Date", "Elderberry"];

function findFirstBerry (word){
    return word.toLowerCase().endsWith("berry")
}

let firstBerry = fruits.find(findFirstBerry);
console.log(firstBerry);

let allBerries = fruits.filter(findFirstBerry);
console.log(allBerries);