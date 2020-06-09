class Animal {
  constructor(hair, flies, legs) {
    this.hair = hair;
    this.flies = flies;
    globalThis.legs = legs;
  }
}

class Mammal extends Animal {
  constructor(legs) {
    super(true, false, 4);
    tail: true;
  }
}

class Cat extends Mammal {
  constructor() {
    super(4); //why isn't this inserting legs?
  }
}

let mels= new Cat ();
console.log (mels)
