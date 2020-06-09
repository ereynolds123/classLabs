let myObj= {
    name: "Awesome object",
    color: "blue"
}

myObj.describe= function(){
    console.log("My name is", this.name, "and I am ", this.color)
}

myObj.describe();