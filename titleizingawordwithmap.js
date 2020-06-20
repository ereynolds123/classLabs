//This program takes any string and capitalized the first letter of the word and lower cases the rest of the word. 

//Sanitization function. Upper case the first letter, lower case rest
let capitalizeWord= function capitalize(someStr){
    let firstletter= someStr.slice(0, 1).toUpperCase();
    let endOfWord= someStr.slice(1).toLowerCase();
    let capitalWord= firstletter+ endOfWord;
    return capitalWord;
}

//Variable Declaration
let string = "the rain in spain falls MAINLY on the PLAIN"
let array= string.split(" ");

//Capitalize each first letter in the new array you have built, convert back into a string. Prints the titleized string
let titleizedString = array.map(capitalizeWord).join(" ");
console.log(titleizedString);

// A titleize function that is more modular. Takes a string, makes it into an array, takes the array and capitalizes the first letter of word, rejoins the string. 
function titlize(string){
    return string.split(" ").map(capitalizeWord).join(" ")
}

console.log(titlize("This IS A TEst"))