import React, {useState} from "react";
import {ANIMALS} from "@frontendmasters/pet";
import useDropdown from "./useDropdown"

const SearchParams=()=>{
    const [location, setLocation]= useState("Seattle, WA");
    const [animal, AnimalDropdown]= useDropdown("Animal", "dog", ANIMALS)
    // const [breed, BreedDropdown]= useDropdown("breed", "", breeds)
  

    return(
        <div className="search-params">
            <form>
                <label htmlFor="location">Location
                <input id="location" value={location} placeholder="location" onChange={event=>setLocation(event.target.value)}></input></label> 
                {/* Set location updates the state, useState is the default location. This is a hook. All hooks begin with use. A hook is the current state and an updater function. hooks never go inside of if statements or for loops */}
                <AnimalDropdown/>
                {/* <BreedDropdown /> */}

                <button>Submit</button>
            </form>

        </div>
    )
}

export default SearchParams