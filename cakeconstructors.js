//Set up a constructor to make a cake with various flavors, icing and decorations

class Cake {
  constructor(flavor, icing, decoration) {
    this.flavor = flavor;
    this.icing = icing;
    this.decoration= decoration;
  }

//Prints the type of cake you have created. 
//The describe make it a method 
  describe= function describe(){
      console.log("It is a "+ this.flavor + " cake with "+ this.icing + " icing, and "+ this.decoration)
  }
}

function generateCake (flavor, icing, decoration){
    return new Cake(flavor, icing, decoration)
}

let myCake = generateCake ("chocolate", "caramel", "sprinkles")
let mySecondCake= generateCake ("vanilla", "caramel", "flowers")
myCake.describe();
mySecondCake.describe();

//To allow user to input data you would use asyn await, store as a variable, pass through the object using user inputs. 