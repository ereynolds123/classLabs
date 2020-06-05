//Asks for name, awaits input, returns a string with the input

console.log("What is your name?");
process.stdin.on("data", (chunk)=>{
    //sanitize user input
    function capitalize(name){
        let firstletter= name.slice(0, 1).toUpperCase();
        let endOfWord= name.slice(1).toLowerCase();
        let capitalWord= firstletter+ endOfWord;
        return capitalWord;
    
    }
    console.log(`Hello, ${capitalize(chunk.toString())}!`);
    //close program
    process.exit();
})