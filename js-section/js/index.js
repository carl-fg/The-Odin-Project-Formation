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

function getComputerChoice(items){

    let botChoice = items[Math.floor(Math.random() * items.length)];
    console.log(`L'ordinateur fait ${botChoice}.`)
    return botChoice;
}

function getHumanChoice(){

    let humanChoice = prompt("Choisissez entre 'pierre', 'papier' ou 'ciseaux'.");

    if (humanChoice == "pierre"){
        console.log("Vous avez choisi pierre.");
        
    } else if (humanChoice == "papier"){
        console.log("Vous avez choisi papier.");
        
    } else if (humanChoice == "ciseaux"){
        console.log("Vous avez choisi ciseaux.");
        
    } else {
        console.log("Votre choix n'a pas de correspondance. Vérifiez l'orthographe.");
        
    }
}

getComputerChoice(choices)
getHumanChoice()