//Set binding size 
//Create the grid based on the binding size
//Create a loop that goes through the binding size
//Create a line that read # # # # 
//Create a newlne and switch the pattern to # # # #

let size= 10;
let board= "";

for(let y=0; y< size; y++){
    for (let x=0; x< size; x++){
        if ((x+y)% 2===0){
            board+=" ";
        }else{
            board+="#";
        }
    }
    board +="\n";
}

console.log(board);