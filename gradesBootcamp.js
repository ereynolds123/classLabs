//Program that calculates total Bootcamp grade

//Function determines the readability score
function totalReadabilityScore() {
  let readabilityScore = [4,4,3,3, 3,3]; //Add your readability scores here
  let totalScore = 0;
  for (var i = 0; i < readabilityScore.length; i++) {
    totalScore += readabilityScore[i] / readabilityScore.length;
  }
  console.log("This is you total readablity score: "+ totalScore);
  return totalScore;
}


//Function determines the organization score
function totalOrganizationScore() {
    let organizationScore = [3,3, 3, 3, 4,3]; //Add your organization scores here
    let totalOrganizationScore = 0;
    for (var i = 0; i < organizationScore.length; i++) {
      totalOrganizationScore += organizationScore[i] / organizationScore.length;
    }
    console.log("This is you total organization score: " +totalOrganizationScore);
    return totalOrganizationScore;
  }


//Function determines the functionality  score
function totalFunctionalityScore() {
    let functionalityScore = [3,3,3,3,3,3]; //Add your functionality scores here
    let totalFuncScore = 0;
    for (var i = 0; i < functionalityScore.length; i++) {
      totalFuncScore += functionalityScore[i] / functionalityScore.length;
    }
    console.log("This is you total functionality score: " +totalFuncScore);
    return totalFuncScore;
  }


//Determines the total score
let finalScore = (totalFunctionalityScore()+ totalOrganizationScore()+ totalReadabilityScore()) /3

console.log ("Your final score is: " + finalScore);
