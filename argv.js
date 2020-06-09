let argvArr= process.argv //argV is an array of what you enter into the terminal

let names = argvArr.slice(2);

for (let name of names){
console.log( "Hi "+ name)};