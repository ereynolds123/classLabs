//Asks for name, awaits input, returns a string with the input

console.log("What is your name?");
//the .on makes it so it continually asks.
process.stdin.on("data", (chunk)=>{
    //sanitize user input
    function capitalize(name){
        let firstletter= name.slice(0, 1).toUpperCase();
        let endOfWord= name.slice(1).toLowerCase();
        let capitalWord= firstletter+ endOfWord;
        return capitalWord;
    }
   //Set sanitized chunk to a variables
    let chunkSanitized= capitalize(chunk.toString().trim());
    
    //If input is bye, exit the program. If name is on enemies list, say "Go away". Otherwise say hello to friend. 
    if(chunkSanitized==="Bye"){
        process.exit(); //exits the program if you say bye
    }else if(chunkSanitized==="Darth"|| chunkSanitized==="Voldemort" || chunkSanitized==="Victor" || chunkSanitized==="Jenny"){
        console.log("Go Away!");
        console.log("What is your name?");
    }
    else{
    console.log(`Hello, ${chunkSanitized}!`);
    console.log("What is your name?"); }
})