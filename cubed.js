//Make a cube class

class Cube {
  constructor(side =4) {
    this.side = side;
  }
  volume() {
    return this.side ** 3;
  }
  area() {
    return this.side ** 2 * 6;
  }
}


let cube1 = new Cube(3)
console.log(cube1.volume())
console.log(cube1.area())