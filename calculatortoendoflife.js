//Function takes 3 arguments of age, an amount of substance 
//you need per day and an item name and returns a string 
// of how many you need to last the rest of your life. 

function supplyCal(age, amountPerDay, itemName){
    let amountPerYear= (amountPerDay *365);
    let remaingInLife= (100 /*average amount of years in life */-age)*(amountPerYear);
    return ("You will need " + (remaingInLife)   + " " +(itemName) + "s" +" to last the rest of your life.");
// return You will need ${remaingInLife}+ ${itemName} to last the rest of your life. /*This is a template string*/
}


console.log(supplyCal(20, 3, "cheese"));
console.log(supplyCal(99, 3, "cookie"));
console.log(supplyCal(0, 3, "cookie"));