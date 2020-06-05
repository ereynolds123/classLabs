let name = 'Mr. Bean'; 
{
    let name ='Detective Bob';
    {
        console.log(name); // => Detective Bob
    }
    console.log(name); // => Detective Bob
}
console.log(name +"\n"); //Mr. Bean



let fruit = 'Apple';
{
    let fruit ='Blueberry';
    {
        let fruit = 'Cantaloupe';
    }
    console.log(fruit + "\n"); // What is this fruit? => "Blueberry"
}


let nameTwo = 'Alice';     // this name is global

let alpha = function() {
  console.log(nameTwo);    // console.logs the global variable Alice
  beta();               // calls beta() but can't see it 
}

// alpha() uses let so must be called after it is defined
alpha();

function beta() {     // beta is hoisted!
  let nameTwo = 'Bob';     // this name is local to beta
  console.log(nameTwo);    // prints "Bob"
}

console.log(nameTwo+ "\n");      // prints "Alice"


let poet = 'Robert Frost';

function famousPoem(poet) {

  let poemAuthors = {
   'Robert Frost': 'Stopping by Woods on a Snowy Evening',
   'Walt Whitman': 'Leaves of Grass',
   'undefined': 'The Lanyard' // Billy Collins
  };
  return poemAuthors[poet];
}

console.log(famousPoem('Walt Whitman')); // => Leaves of Grass
console.log(famousPoem(poet));           // => Stopping by Woods on Snowy Evening

poet = 'Maya Angelou';
console.log(famousPoem());               // => The lanyard