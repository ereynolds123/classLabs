let light ={
    color: "green",
    message: "I am now green"
}

let transitions ={
    "red": {canChangeTo: ["flashing red", "green" ]},
    "flashing red": {canChangeTo: ["red"]},
    "green": {canChangeTo: ["flashing green", "yellow"]},
    "flashing green": {canChangeTo: ["green"]},
    "yellow": {canChangeTo: ["flashing yellow", "red"]},
    "flashing yellow": {canChangeTo: ["yello"]}
}

function changeLight(lightObj, nextState){
    //If transitions at light objects color can change to the next state
    if(transitions[lightObj.color].canChangeTo.includes(nextState)){
        lightObj.color = nextState;
        console.log(lightObj.message);
    } else {
        throw ("You can not change from " + lightObj +" to " + nextState)
    }
}

changeLight(light, "yellow");
