// selectors
const selectGradient = document.getElementById("select-gradient");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

// event listeners
// selectGradient.addEventListener("click", gradientSelector);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// functions
function setGradient(event){
    console.log("gradient selector function");
    const body = document.getElementById("use-gradient");
    // body.style.backgroundColor = "#a0c4ff"; 
    body.style.background = "linear-gradient(120deg, " + color1.value + ", " + color2.value + ")";
}

