let series = [0, 1];

while (series.length < 10) {
  let num1 = series.pop(); //last value of array
  let num2 = series.pop(); //first value of array
  let num3 = num2 + num1; //sum of the values. 
  series.push(num2, num1, num3);
}
console.log(series);
