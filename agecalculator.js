let age= 29;
function ageCalc(num){
    let secondsPerMin= 60;
    let minutesPerhour= 60;
    let hoursPerDay= 24;
    let daysPerYear= 365.25;
    return ("You are " +(num*secondsPerMin*minutesPerhour*hoursPerDay*daysPerYear)+" seconds old!");
}

console.log(ageCalc(age));