//A modular function that counts down from a value and when it hits 0 says Blastoff. 
function countDown(sec){
    if (sec===0){
        console.log("Blastoff");
    }else{
        console.log(sec + "...")
        sec--;
        countDown(sec); //Change the value you are using as an argument so you eventually get to your base case
    }
}
countDown(10)

//You can also do a while loop