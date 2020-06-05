//Readline boiler plate code
const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

greet();


//sanitizes first name
function firstName(name){
    let firstletter= name.slice(0, 1).toUpperCase();
    let endOfWord= name.slice(1).toLowerCase();
    let capitalFirstName= firstletter+ endOfWord;
    return capitalFirstName; //outcome of the function, building the sanitized name 

}


//asynchronously asks for first and last name
async function greet(){
    let name= await ask("What is your first name?");
    let sanitizedFirstName= firstName(name); //you put line 19 through this function. 
    let last= await ask ("What is your last name?");
    let sanitizedLastName= firstName(last); 
    let fullName= sanitizedFirstName+sanitizedLastName;
    //guard clause against "Darth"
    if(sanitizedFirstName==="Darth"){
      console.log ("Nooooooooo! That\'s impossible")
    }else {
      console.log("Hello, "+ fullName);}
    process.exit();
}

//you can also sanitize by let name=chunk.toString().trim
//name.toLowerCase()