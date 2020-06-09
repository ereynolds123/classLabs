//Setting a class with methods area and perimter

class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length || width;
  }
  area() {
    return this.length * this.width;
  }
  perimeter() {
    return this.length *2  + this.width * 2;
  }
}

function generateSquare(side){
    new Rectangle(side, side);
}

let square = new Rectangle(7);
console.log(square);
console.log(square.area());
square.length = 5;
square.width = 5;
console.log(square);
console.log(square.perimeter());
console.log(square.area());
console.log(generateSquare(2)); //This isn't working
