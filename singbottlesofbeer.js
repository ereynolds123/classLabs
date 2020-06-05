function sing() {               // outer function
  let numberOfBottles = 99

  function bottlesOfBeer() {    // inner function
      let message = '' + numberOfBottles
        + ' bottles of beer on the wall';
      return message;
  }

  while (numberOfBottles > 0) {
      console.log(bottlesOfBeer())
      numberOfBottles -= 1
  }

}

sing ();

console.log ("First round done");

