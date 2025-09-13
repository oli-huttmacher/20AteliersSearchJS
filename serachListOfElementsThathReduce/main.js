console.log("hello js");
//search doom--------------------------------------------
const searchInput = document.getElementById("searchInput");
const ulContainer = document.getElementById("ulContainer");
//search <p></p>
const queryList = document.getElementById("queryList");
const counter = document.getElementById("counter");
const emptyMsg = document.getElementById("emptyMsg");

console.log(ulContainer);
console.log(searchInput);

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

// function ecoute l'input------------------
searchInput.addEventListener("input", (e) => {
  //execution de la fonction recupereInput
  handleInput(e.target.value);
});


function renderList(tab) {
  //vider les Ul a chaque applle
  //creer un list par el
  //ajouter a l'ul
  ulContainer.innerHTML = "";
  for (let el = 0; el < tab.length; el++) {
    const liFruits = document.createElement("li");
    liFruits.textContent = tab[el];
    ulContainer.appendChild(liFruits);
  }
}
function renderMeta(nbResultatsVisibles, nbResultatsTotal, termeRecherche) {
  //nbResultatsVisibles, nbResultatsTotal, termeRecherche
  //mettre ajour queryList
  if (!termeRecherche) {
    queryList.textContent = "";
  } else {
    queryList.textContent = `Recherche : ${termeRecherche}`;
  }
  //Gérer emptyMsg
  emptyMsg.hidden = nbResultatsVisibles !== 0;
  //mettre ajour le compteur
  counter.textContent = `${nbResultatsVisibles} sur ${nbResultatsTotal}`;

  console.log(nbResultatsVisibles, nbResultatsTotal, termeRecherche);
}
//que fait filterItems ? on sait pas
function filterItems(sourceTab, texteRecherche) {
  const rechercheNormalisee = texteRecherche.trim().toLowerCase();
  if (rechercheNormalisee === "") return sourceTab;

  return sourceTab.filter((unFruit) =>
    unFruit.toLowerCase().includes(rechercheNormalisee)
  );
}

/**
 * Gère ce que l’utilisateur tape dans l’input.
 * @param {string} rawValue - Texte brut venant de e.target.value
 */
function handleInput(rawValue) {
  // 1. normaliser la saisie
  const texte = rawValue.trim().toLowerCase();

  // 2. filtrer le tableau
  const resultats = filterItems(tabFruits, texte);

  // 3. afficher les résultats
  renderList(resultats);

  // 4. mettre à jour les infos
  renderMeta(resultats.length, tabFruits.length, texte);
}

// filterItems(tabFruits, "an");
// filterItems(tabFruits, "POM");
// filterItems(tabFruits, "");
// filterItems(tabFruits, "zzzz");
//  renderList(tabFruits);
// renderMeta(2, 26, "an");
