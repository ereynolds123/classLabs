//Readline boiler plate code, allows for asynchronous programming
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

//Player object
let player = {
  inventory: [],
  trapped: true,
  faceing: "north",
  escape() {
    //write escape method here
  },
};

//Items in room
//Cabinet
let cabinet = {
  name: "cabinet",
  description: "A large cabinet locked with a heavy padlock",
  unlock() {
    //code here
  },
};
//Desk
let desk = {
  name: "desk",
  description: "A fancy writing desk. One of the drawers is slightly ajar. ",
  unlock() {
    //code here
  },
  inventory: ["key"],
//This function takes the key out of the desk inventory and puts it into the player inventory
//You can slice to take out a specific thing 
  takeKey() {
    let key = this.inventory.pop();
    player.inventory.push("key");
  },
};
//Paper
let paper = {
  name: "paper",
  describe:
    "The paper says to free your mind start where all great stories start. ",
};
//Room object
let room = {
  inventory: [cabinet, desk, paper],
  north: "",
  south: "",
  east: "",
  west: "",
};
