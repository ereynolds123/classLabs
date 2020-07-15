pokeList= document.getElementById("pokemon");
let spriteWrapper =document.getElementById("img-wrapper");
let type= document.getElementById("type");
let height= document.getElementById("height")

fetch ("https://pokeapi.co/api/v2/pokemon ")
//You are making the request. When you build a server you use response. req, res means when you get a request, gives a response
.then((res)=>{
    //Turn response into a json object
    console.log(res)
    return res.json()
})
.then((obj)=>{
    //For each pokemon create a link with the name
    console.log(obj.results)
    obj.results.forEach((pokemon)=>{
        pokeList.innerHTML += `<li class="singlePokemon" id="${pokemon.url}">${pokemon.name}</li>`
    });
    let listArray =Array.from(document.getElementsByClassName("singlePokemon"))
    listArray.forEach((pokemon)=>{
        pokemon.addEventListener("click", fetchData)
    })
}) 

//Function to fetch data for the pokemon values and add to the table
function fetchData(event){
    let url= event.target.id;
    fetch(url)
    .then((res)=>{
        //Turn response into a json object
        return res.json()
    })
    .then((obj)=>{
        spriteWrapper.innerHTML=`<img src="${obj.sprites.front_default}"/>`
        
        let typeNames= obj.types.map((obj)=>{
            return obj.type.name
        })
        let typeString = typeNames.join('/');
        type.innerText = `types: ${typeString}`;
  
        height.innerText=`height: ${obj.height} '`;
        weight.innerText=`weight: ${obj.weight} kg`;


        console.log(obj.types);
        console.log(obj.height);
        console.log(obj.weight);
        console.log(obj.sprites.front_default)
    })
}