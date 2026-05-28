alert("Faisant The Odin Project dans le but de me faire un rappel des notions basiques du développement web et étant la section JS, le design n'a pas d'importance sur ce projet. Ce n'est qu'une V1 et une deuxième version sera proposée ultérieurement.");

const display = document.querySelector(".affichage");

const zero = document.querySelector(".div11");
const one = document.querySelector(".div7");
const two = document.querySelector(".div8");
const three = document.querySelector(".div9");
const four = document.querySelector(".div4");
const five = document.querySelector(".div5");
const six = document.querySelector(".div6");
const seven = document.querySelector(".div1");
const eight = document.querySelector(".div2");
const nine = document.querySelector(".div3");

const reset = document.querySelector(".reset");
const del = document.querySelector(".delete");

const plus = document.querySelector(".div15");
const minus = document.querySelector(".div14");
const multipl = document.querySelector(".div13");
const divid = document.querySelector(".div12");
const point = document.querySelector(".div10");
const equal = document.querySelector(".equal");

let currentInput = "";

function updateDisplay(val) {

    display.value = val;
};

zero.addEventListener("click", () => {

    currentInput += "0";
    updateDisplay(currentInput);
});

one.addEventListener("click", () => {

    currentInput += "1";
    updateDisplay(currentInput);
});

two.addEventListener("click", () => {

    currentInput += "2";
    updateDisplay(currentInput);
});

three.addEventListener("click", () => {

    currentInput += "3";
    updateDisplay(currentInput);
});

four.addEventListener("click", () => {

    currentInput += "4";
    updateDisplay(currentInput);
});

five.addEventListener("click", () => {

    currentInput += "5";
    updateDisplay(currentInput);
});

six.addEventListener("click", () => {

    currentInput += "6";
    updateDisplay(currentInput);
});

seven.addEventListener("click", () => {

    currentInput += "7";
    updateDisplay(currentInput);
});

eight.addEventListener("click", () => {

    currentInput += "8";
    updateDisplay(currentInput);
});

nine.addEventListener("click", () => {

    currentInput += "9";
    updateDisplay(currentInput);
});

reset.addEventListener("click", () => {

    currentInput = "";
    updateDisplay(currentInput);
});

del.addEventListener("click", () => {

    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
});

plus.addEventListener("click", () => {

    currentInput += "+";
    updateDisplay(currentInput);
});

minus.addEventListener("click", () => {

    currentInput += "-";
    updateDisplay(currentInput);
});

multipl.addEventListener("click", () => {

    currentInput += "x";
    updateDisplay(currentInput);
});

point.addEventListener("click", () => {

    if (!currentInput.endsWith(".") && !currentInput.endsWith("+") && !currentInput.endsWith("-") && !currentInput.endsWith("/") && !currentInput.endsWith("x")){ // Vérifie que le point ne s'ajoute pas derrière un point ou un opérateur.

        currentInput += ".";
        updateDisplay(currentInput);
    }
});

divid.addEventListener("click", () => {

    currentInput += "/";
    updateDisplay(currentInput);
});

equal.addEventListener("click", () => {

    if (currentInput === "") return;

    const expression = currentInput.replace(/x/g, "*"); // Remplace les "x" par des "*" pour que l'évaluation fonctionne correctement.

    try {

        const result = eval(expression);
        currentInput = String(result);
        updateDisplay(currentInput);

    } catch (error) {

        updateDisplay("Erreur");
        currentInput = "";
    }
});