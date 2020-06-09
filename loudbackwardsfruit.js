let fruits = ["apple", "banana" , "cherry"];


//Reverse and array and print everthing in all uppercase
function loudBackwards(array) {
  array.reverse();  
  array.forEach((array) => {
    let newArray = array.toUpperCase();
    console.log(newArray);
  }); 
}

loudBackwards(fruits);
