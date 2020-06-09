let dog = {
    name: "Abby", 
    paws: "4"
}

dog.speak = function speak(){
   console.log("My name is ", this.name, "and I have ", this.paws, "paws!" )
}

console.log(dog.speak());
dog.name ="Abby";
dog.paws ="3";
console.log(dog.speak());