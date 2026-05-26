// FONCTION ADDITIONER AVEC 7
function add7(num){

    let final = num + 7;
    console.log(final);
    return final;
}

// let choice = parseFloat(prompt("Quelle chiffre de base ?"));
// // add7(choice);


// FONCTION MULTIPLIER
function multiply(num2, num3){

    let final2 = num2 * num3;
    console.log(final2);
    return final2;
}

// let choice2 = parseFloat(prompt("Quelle chiffre de base ?"));
// let choice3 = parseFloat(prompt("Quelle chiffre pour le multiplier ?"));
// multiply(choice2, choice3);


// FONCTION CAPITALIZE
function capitalize(text){

    let correctSentence = text.charAt(0).toUpperCase() + text.slice(1);
    console.log(`La phrase de base était "${sentence}" et maintenant : ${correctSentence}`);
    return correctSentence;
}

// let sentence = "je vais manger dehors.";
// capitalize(sentence);


// FONCTION LASTLETTER
function lastLetter(word){

    let last = word.slice(-1);
    console.log(last);
    return last;
    
}

// const wds = "Banane";
// lastLetter(wds);



// FONCTION PIERRE PAPIER CISEAUX
const choices = ["pierre", "papier", "ciseaux"];

// CHOIX DE L'ORDINATEUR
function getComputerChoice(items){

    let botChoice = items[Math.floor(Math.random() * items.length)];
    console.log(`L'ordinateur a choisi ${botChoice}.`)

    return botChoice;
}

const computer = getComputerChoice(choices);

// CHOIX DU JOUEUR
function getHumanChoice(items){

    alert("Pour rappel, 1 = Pierre, 2 = Papier, 3 = Ciseaux");
    let humanChoice = Number(prompt("Choisissez ce que vous voulez jouer (1, 2 ou 3)")); // La fonction Number permet de transformer le prompt (str) en int

    if (humanChoice >= 1 && humanChoice <= items.length){

        const valeur = items[humanChoice - 1]; // -1 car l'index commence à 0
        console.log("Tu as choisi :", valeur);

        return valeur;
        
    } else {

        console.log("Choix invalide.");

        return null;
        
    }

}

const human = getHumanChoice(choices);

// CREATION DU JEU
if (human === computer){

    console.log("Égalité !");
    
} else if (
    (human === "pierre" && computer === "ciseaux") ||
    (human === "papier" && computer === "pierre") ||
    (human === "ciseaux" && computer === "papier")
){

    console.log("Tu as gagné !");
    
} else {

    console.log("L'ordinateur a gagné !");
    
}