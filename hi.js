const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

greet();

async function greet(){
    let name= await ask("What is your name?");
    let color= await ask ("What is your favorite color?");
    let quest= await ask ("What is your quest?");
    console.log("Hello, "+ name+ "!\nGood luck on your quest "+ quest + "!\n Here is a "+ color +" flower!");
    process.exit();
}

