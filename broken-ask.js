//Readline boiler plate code, allows for asynchronous programming
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

//Calling function begins the game
start();

//Asks for user input
async function start(){

    let myNum= await ask("What is the answer to the ultimate question of life, the universe and everyting? ");

//While the number is not equal to 42, print incorrect message to console
    while (myNum !==42){
        myNum = await ask ("Hmmm...  That doesn't seem quite right. Guess again.\n")
        myNum= parseInt(myNum);
    }

//When the answer is correct, print correct message and exit
    console.log("Now if only we knew the question...")
    process.exit();
}