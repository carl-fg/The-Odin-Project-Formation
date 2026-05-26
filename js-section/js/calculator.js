// alert("Faisant The Odin Project dans le but de me faire un rappel des notions basiques du développement web et étant la section JS, le design n'a pas d'importance sur ce projet.");

const display = document.querySelector(".affichage");

const oneBtn = document.querySelector(".div1");
const two = document.querySelector(".div2");
const three = document.querySelector(".div3");
const four = document.querySelector(".div4");
const five = document.querySelector(".div5");
const six = document.querySelector(".div6");
const seven = document.querySelector(".div7");
const eight = document.querySelector(".div8");
const nine = document.querySelector(".div9");

let currentInput = "";
let previousInput = "";

oneBtn.document.addEventListener("click", () => {

    currentInput = 1;
    display.innerHTML = currentInput;
});