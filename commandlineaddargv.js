//Takes numbers from a command line and adding them together

//Variable declarations
let numbers= process.argv.slice(2);
let total= 0;

//Converts inputs to string. Adds to total 
numbers.forEach((number)=>{
    total= total + parseInt(number)
});

console.log(total)

