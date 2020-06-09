//Put grades into an objects

let grades = {
    "midterm": 3.3,
    "project" : 4.0,
    "final": 3.2,
    "test": 3.5,
    "paper": 3.5
}

//Function which loops through the object and adds the grades together and divides by the amount of objects in the loop
function gpa (object){

    let total= 0;

    for (let key in object){
        total += object[key]; //Adds the grade in each iteration of the loop to the total
    }
    return total / Object.keys(object).length
}

console.log("The GPA is " + gpa(grades));
