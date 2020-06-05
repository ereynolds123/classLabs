let birthDate = new Date (1991, 03, 07, 9);
currentDate= Date.now()
let ageInSec =currentDate-birthDate;
function ageInYrs(sec){
    let min= sec/60;
    let hr= min/60;
    let days= hr/24;
    let years= days/365.25;
    return years;
}

console.log(ageInYrs(ageInSec/1000));
console.log(ageInSec);