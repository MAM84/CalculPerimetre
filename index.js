let longueur = prompt("Veuillez saisir la longueur");
let unitLongueur = prompt("En quelle unité ?");
let largeur = prompt("Veuillez saisir la largeur");
let unitLargeur = prompt("En quelle unité ?");

const UNIT = ["mm", "cm", "dm", "m"];

while(isNaN(longueur) || longueur <= 0){
    alert("Veuillez rentrer une longueur positive !")
    longueur = prompt("Veuillez saisir la longueur")
}

while(UNIT.indexOf(unitLongueur) === -1){
    alert("Veuillez rentrer une unité acceptable (" + UNIT.join(" ou ") + ") !")
    unitLongueur = prompt("En quelle unité ?")
}

while(isNaN(largeur) || largeur <= 0){
    alert("Veuillez rentrer une largeur positive !")
    largeur = prompt("Veuillez saisir la largeur")
}

while(UNIT.indexOf(unitLargeur) === -1){
    alert("Veuillez rentrer une unité acceptable (" + UNIT.join(" ou ") + ") !")
    unitLargeur = prompt("En quelle unité ?")
}

switch (unitLongueur) {
    case "mm":
        longueur /= 1000; //signifie longueur = longueur / 1000 : plus court quand on répète la même valeur, cela signifie que la valeur se reprend elle même
        break;
    case "cm":
        longueur /= 100;
        break;
    case "dm":
        longueur /= 10;
        break;
}
switch (unitLargeur) {
    case "mm":
        largeur /= 1000;
        break;
    case "cm":
        largeur /= 100;
        break;
    case "dm":
        largeur /= 10;
        break;
}
const perimetre = (parseFloat(longueur) + parseFloat(largeur)) * 2;
alert("Le perimetre d'un surface de coté " + longueur + "x" + largeur + " est de " + perimetre + "m");
