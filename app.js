'use strict';

// selectors
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

// event listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// functions
function setGradient(event){
    console.log("gradient selector function");
    const content = document.getElementById("use-gradient");
    // content.style.backgroundColor = "#a0c4ff"; 
    content.style.background = "linear-gradient(180deg, " + color1.value + ", " + color2.value + ")";
    document.body.style.backgroundColor = color2.value;
}

