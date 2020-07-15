function howAccurate() {
  let start = Date.now();
  setTimeout(function () {
     let end=Date.now()
    console.log(end - start);
  }, 
  1000);
} 

howAccurate();