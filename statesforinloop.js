let states = {
    "VT": "Vermont",
    "CA": "California",
    "NY": "New York", 
    "MA": "Massachussets"
}

for (let key in states){
    console.log(key + " is short for " + states[key]) //key gives the key to the object. The states at the key gives the property
}