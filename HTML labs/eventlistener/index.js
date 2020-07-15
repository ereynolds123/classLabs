let anchor = document.getElementById("anchor");

anchor.addEventListener("click", ()=>{
    event.preventDefault();
    alert("Hello");
   
})

let color = document.getElementById("color");

color.addEventListener("click", ()=>{
    color.style.backgroundColor="red";
})

let submitButton = document.getElementById("click");

submitButton.addEventListener ("click", ()=>{
    alert("goodbye");
    submitButton.disabled="true";
})

let form = document.getElementById("form");

form.addEventListener("submit", ()=>{
    alert("Form submitted")
})