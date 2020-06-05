//My Solution

//Function takes two numbers, divides them
// If there is no remainder, it returns true. Otherwise false. 
function divisible(x, y){
    if(x % y===0){
        return true;
    }else {
        return false;
    }
}

console.log(divisible(100, 10));//=>true
console.log(divisible(100, 7));//=>false
console.log(divisible(3333, 11));//=>true
console.log(divisible(99,12));//=>false

//Other solutions. Short, but not very readable

function divisible(x,y){
    return !(x % y)
}

//Without the modulus
function divisible(x,y){
    let outcome=x/y;
    if (outcome===Math.floor(outcome)){
        return true;
    }else{
        return false;
    }
}