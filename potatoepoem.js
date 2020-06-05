//Creates a potato poem

//Variable declaration
let count = 0;
//Increments count. Prints the message. Loops 8 times. 
while (count < 8) {
  count++;
  if (count === 4) {
    console.log(count + " !");
  } else if (count === 8) {
    console.log("More!");
  } else {
    console.log(count + " potato,");
  }
}
