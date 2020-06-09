// Declaring argV allows you to enter an order
let argvArr= process.argv 
let order = argvArr.slice(2);


//Menu object. Determines the price of each order
let menu = {
    "burger": "5.00",
    "fries": "3.50",
    "shake": "1.11",
    "salad": "4.25"
}

//Function runs the items of the order through the object to add to the total of all items 
 function total(array){
    let total = 0; 

    for (let item of array){
        total += parseFloat(menu[item.toLowerCase()])
    }

    return total.toFixed(2);
 }


console.log(" You total is " , total(order))


//This code is close, but doesn't work
//Takes the order from the command line and turns it into strings 

/*for (let i=0; i < order.length; i++) {
    console.log ("You order total is $" + calculatingOrder(menu) + ".")
  }



//A function to take the order and pass it through the object
/*function calculatingOrder(menu){

    let total= 0;

    for (let key in menu){
        total += parseInt(menu[key]); 
        console.log ("I am inside of the for loop")
    }
    console.log(typeof(total)) 
} */

