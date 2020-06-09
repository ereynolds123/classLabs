// Readline code

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function getUserInput(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

//Items in the rooms with their hints
let itemsinRoom = {
  itemOne: {
    name: "book",
    hint: "Rage Against the Dying ____ the light.",
  },
  itemTwo: {
    name: "pocket",
    hint: "A leaf is in the pocket!",
  },
  itemThree: {
    name: "globe",
    hint: "What grows on the lawn?",
  },
};

//Global variable declaration
playerTurn = 0;

//Sanitize function which sanitizes the user input
function sanitize(string) {
  return string.toLowerCase().trim();
}

//If the input is inspect, it increases the player turn and returns the appropriate hint, one at a time
async function inspectRoom(input) {
  while (sanitize(input) === "inspect" && playerTurn < 3) {
    if (sanitize(input) !== "inspect" && sanitize(input) !== "solve") {
      console.log("Input not recognized. Inspect or Solve");
    } else {
      playerTurn++;
      if (playerTurn === 1) {
        console.log("You find a book on the table. Inside the book is a poem with a missing word. " +itemsinRoom["itemOne"]["hint"]);
      } else if (playerTurn === 2) {
        console.log("You find a jacket in the closet." + itemsinRoom["itemTwo"]["hint"]);
      } else if (playerTurn === 3) {
        console.log("You see a lawn in a photograph." + itemsinRoom["itemThree"]["hint"]);
      }
    }
    input = await getUserInput("What would you like to do?\n");
  }
  console.log(input);
  return input;
}

//Takes user input and begins the game
async function playGame() {
  //Variable Declaration.
  let puzzleAnswer = "Leaves of Grass";
  let name = await getUserInput("What is your name?");
  let input = await getUserInput(
    "Hello " +
      name +
      ". Look around. You are stuck in the poetry Escape Room. There are a few items hidden throughout the room which will allow you to solve the puzzle to escape. What would you like to do? There are three objects in the room. Feel free to inspect the objects.Once you have all three objects, answer the puzzle. Type inspect or solve. \n"
  );
    
//Recognizes whether the input is an appropriate input
  while (sanitize(input) !== "inspect" && sanitize(input) !== "solve") {
    input= await getUserInput("Input not recognized. Inspect or Solve\n");
  }
  input = await inspectRoom(input);
  

  //If the player turn is 4 or the player input is solve, asks to solve the puzzle. If answer is correct, displays victory message
  if (playerTurn >= 3 || sanitize(input) === "solve") {
    poemTitle = await getUserInput(
      "Using the three clues you have, what is the book of poems titled? Hint: Whitman. \n"
    );
    if (sanitize(poemTitle) === "leaves of grass") {
      console.log("Congratulations! You have escaped!");
      //Exits the game
      process.exit();
    } else {
      console.log("Try again!");
      input = await getUserInput("What would you like to do?\n");
      inspectRoom(input);
    }
  }
}

playGame();
