//Define allowable state transitions (string to string)
let transitions =  {
    red: { canChangeTo: ['flashing red', 'green'] },
    'flashing red': { canChangeTo: ['red'] },
    green: { canChangeTo: ['flashing green', 'yellow'] },
    'flashing green': { canChangeTo: ['yellow'] },
    yellow: { canChangeTo: ['flashing yellow', 'red'] },
    'flashing yellow': { canChangeTo: ['yellow'] }
  }
  ​
  //initialize global variables for use in class definition
  let currentLight //Keeps track of the currently active light
  let lookupTable // will map strings to objects
  ​
  ​
  class Light{
    //create a light that is always a specific color
    constructor(color) {
      this.color = color;    
    }
    
    changeLight(nextState) {
      //If it's an allowable (string to string) transition
      if (transitions[this.color].canChangeTo.includes(nextState)) {
        //Change the currrentLight to the next Light Object
        currentLight = lookupTable[nextState]
        //and tell us what the new color is
        console.log(`the light is now ${currentLight.color}`)
      } else {
        //Otherwise tell them why it didn'd work
        console.log(`invalid state transition from ${this.color} to ${nextState} please try again`)
        //(and don't change the currentLight)
      }
    }
  }
  ​
  //define all light options
  let redLight = new Light('red')
  let greenLight = new Light('green')
  let yellowLight = new Light('yellow')
  ​
  lookupTable = {
    //map strings to the light options they represent
    'red': redLight,
    'yellow': yellowLight,
    'green': greenLight
  }
  ​
  //start the current light at a distinct value
  currentLight = redLight
  ​
  //prompt the user to enter a color
  console.log('The light is red, what color should we change it to? ')
  ​
  process.stdin.on('data', (chunk)=> {
    //parse the answer
    let color = chunk.toString().trim()
    //and call the changeColor method on whatever our current light object is
    currentLight.changeLight(color)
  })
