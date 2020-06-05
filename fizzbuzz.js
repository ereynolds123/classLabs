//console.log number 1-100
//For numbers divisible by 3, return "Fizz"
//For numbers divisible by 5, return "Buzz"
//For numbers divisible by 3 and 5, return "FizzBuzz"

for (let number= 1; number<=100; number+=1){
    if (number % 3===0 && number % 5===0){
        console.log("FizzBuzz");}
    else if (number % 3===0){
        console.log("Fizz");}
    else if(number % 5===0){
        console.log("Buzz");}
    else console.log(number);
}