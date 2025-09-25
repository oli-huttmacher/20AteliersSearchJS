"use strict";
const parentDuRendu = document.getElementById("render");
const promptInput = document.getElementById("inputPrompt");
const galery = document.querySelector(".galery");
const elcontainer = document.createElement("div");
const numberOffruit = document.createElement("h4");
let nbFruit;
//tableaux d'objet fruits de A à Z----------------------------
const tabFruits = [
    "Abricot", // A
    "Ananas",
    "Banane", // B
    "Cerise", // C
    "curcuma",
    "Datte", // D
    "Elderberry", // E (baie de sureau)
    "Figue", // F
    "Fruit de la Passion",
    "Goyave", // G
    "Grenade",
    "Gingembre",
    "Huckleberry", // H (myrtille américaine)
    "Ikéban", // I (fruit rare, mais on peut mettre "Ita Palm" = fruit du palmier d’Ita)
    "Jujube", // J
    "Kiwi/vert", // K
    "Litchi", // L
    "Mangue", // M
    "Mate/Paraguay",
    "Nectarine", // N
    "Orange", // O
    "Papaye", // P
    "pomme",
    "prune",
    "Quetsche", // Q (prune d’Alsace)
    "Raisin", // R
    "Sapote", // S
    "Tamarillo", // T (tomate en arbre)
    "Ugli", // U (agrume jamaïcain)
    "Vanille", // V (la gousse est le fruit de l’orchidée)
    "Watermelon", // W (pastèque en anglais)
    "Xigua", // X (variété chinoise de pastèque)
    "Yuzu", // Y
    "Ziziphus", // Z (fruit proche du jujube)
];
//le timer---------------------------------------------
let timer; // pour stocker le setTimeout
//resultat du tableau
let resultInput = ""; //le string de la recherche
//listener de l'input capture le prompt et le met dans la variable resultinput
promptInput.addEventListener("input", (e) => {
    const valueBrut = e.target; //<input>
    const term = nettoyageInputValue(valueBrut.value);
    console.log(valueBrut.value); //"string"
    //netoyage
    resultInput = nettoyageInputValue(valueBrut.value);
    //filtrage
    const resultats = filtrage(tabFruits, resultInput);
    console.log("Nouveau tableau filtré:", resultats);
    render(resultats);
    //
    // Chercher un fruit qui correspond exactement
    const fruitTrouve = tabFruits.find((fruit) => fruit.toLowerCase() === resultInput.toLowerCase());
    if (fruitTrouve) {
        discover(fruitTrouve);
    }
    retard(term, 3000); // 👈 attend 3s avant d’appeler filtrage + render + discover
});
//netayage du resultat de l'input
function nettoyageInputValue(valuePrompt) {
    const netoyageTrimAndLowerCase = valuePrompt.trim().toLocaleLowerCase();
    return netoyageTrimAndLowerCase;
}
//filtage les fruits qui matchs ou le resulta du fruits
function filtrage(tab, promptPropre) {
    if (promptPropre === "") {
        return []; // ou tab si tu veux tout afficher par défaut
    }
    return tab.filter((el) => el.toLowerCase().includes(promptPropre));
}
function render(tab) {
    parentDuRendu.innerHTML = ""; // on vide l'affichage précédent
    tab.forEach((el) => {
        const li = document.createElement("li"); // 👈 crée un li à chaque fois
        li.classList.add("list_fruits");
        li.textContent = el;
        parentDuRendu.appendChild(li);
    });
}
function discover(fruits) {
    elcontainer.classList = "discover_fruit";
    const eltitre = document.createElement("h3");
    eltitre.textContent = fruits;
    const literature = document.createElement("p");
    literature.textContent =
        "Ce fruits est un délice entre la saveur et le bonheur";
    elcontainer.appendChild(eltitre); //h3
    elcontainer.appendChild(literature); //p
    galery.innerHTML = "<h1>Résumer du fruit :</h1>"; // reset avec le titre
    galery.appendChild(elcontainer);
}
function retard(term, delay) {
    if (timer)
        clearTimeout(timer);
    timer = setTimeout(() => {
        // input vide → on nettoie l’affichage
        console.log(`✅ Timer déclenché avec valeur: "${term}" après ${delay}ms`);
        nbFruit = nombreAleatoire0a10();
        if (term === "") {
            parentDuRendu.innerHTML = "";
            galery.innerHTML = "<h3>Résumer du fruit : </h3>";
            return;
        }
        // filtrer et afficher dans l’UL
        const resultats = filtrage(tabFruits, term);
        render(resultats);
        // trouver un fruit exact
        const fruitTrouve = tabFruits.find((fruit) => fruit.toLowerCase() === term);
        if (fruitTrouve) {
            discover(fruitTrouve);
            numberOffruit.textContent = `il m'en reste ${nbFruit}`;
            elcontainer.appendChild(numberOffruit);
        }
    }, delay);
    console.log(`▶️ Nouveau timer lancé (${delay}ms) pour la valeur: "${term}"`);
}
//il me reste chiddre aléatoire en 0 et 100
function nombreAleatoire0a10() {
    return Math.floor(Math.random() * 11);
}
