let count= 0;
function go(){
    count++
    console.log("Go!"+ count);
    go();
}

go();

//A function calling itself too many times is a flag to error out. Hits a maximum call stack. They will not run forever
