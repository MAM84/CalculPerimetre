let longueur = prompt("Veuillez saisir la longueur");
const unitLongueur = prompt("En quelle unité ?");
let largeur = prompt("Veuillez saisir la largeur");
const unitLargeur = prompt("En quelle unité ?");

const UNIT = ["mm", "cm", "dm", "m"];

if (isNaN(longueur) || longueur <= 0 || isNaN(largeur) || largeur <= 0) {
    alert("Veuillez rentrer une longueur et une largeur positive !");
} else if (UNIT.indexOf(unitLongueur) === -1 || UNIT.indexOf(unitLargeur) === -1) {
    alert("Veuillez rentrer une unité acceptable (" + UNIT.join(" ou ") + ") !");
} else {
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
}

// Dans mon code, je n'ai pas utilisé parsefloat mais c'est parceque j'ai multiplié par 2 la longueur et la largeur donc cela les a déjà transformé en nombre. Mais il est plus propre d'utiliser le parsefloat

//Cette correction intègre la partie bonus que j'ai oublié de faire

// Correction Francis : pour convertir la longueur en m à partir de l'unité saisie par l'utilisateur, j'ai utilisé (comme l'avait suggéré Léonie) 2 tableaux :
// const unites = ["km","hm","dam","m","dm","cm","mm"];
// const rapport =[1000,100,10,1,.1,.01,.001];
// l'indexOf sur le premier me permet de choisir le multiplicateur dans le second :
// unit = unites.indexOf("dm");
// long = longueur * rapport[unit]