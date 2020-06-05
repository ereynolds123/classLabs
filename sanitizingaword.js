//Sanitization function. Upper case the first letter, lower case rest
function capitalize(someStr){
    let firstletter= someStr.slice(0, 1).toUpperCase();
    let endOfWord= someStr.slice(1).toLowerCase();
    let capitalWord= firstletter+ endOfWord;
    return capitalWord;

}

console.log(capitalize("teRRIble"));

//More concise

function capitalize(string){
    return string[0].toUpperCase()+string.slice[1].toLowerCase();
}