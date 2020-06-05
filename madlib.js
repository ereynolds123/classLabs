//Readline boiler plate code
const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}


//Sanitizes words

function capitalize(string){
    let firstletter= string.slice(0, 1).toUpperCase();
    let endOfWord= string.slice(1).toLowerCase();
    let capitalizedWord= firstletter+ endOfWord;
    return capitalizedWord;
}

//Asynchronous function for madlib inputs

async function madLibInputs(){
    let name= await ask("What is your first name?");
    let nounOne= await ask("Tell me a noun?");
    let nounTwo= await ask("Tell me another noun?");
    let sport= await ask ("What's your favorite sport?");
    let verb= await ask("Tell me a verb?");
    let nounThree= await ask ("Tell me a final noun?")
    let adverb= await ask("Finally, tell me an adverb?");
    console.log(`Hello ${capitalize(name)}! \nYour favorite things include ${capitalize(nounOne)}s and ${capitalize(nounTwo)}s.\nYour favorite sport is ${capitalize(sport)}.\n You like to ${capitalize(verb)} with the ${capitalize(nounThree)} which is very ${capitalize(adverb)}`)
    process.exit();
};

madLibInputs();