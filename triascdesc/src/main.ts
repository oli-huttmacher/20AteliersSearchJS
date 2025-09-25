//tableaux d'objet fruits de A à Z----------------------------
const tabFruits: string[] = [
  "Abricot", // A
  "Ananas",
  "Banane", // B
  "Cerise", // C
  "curcuma", //racine
  "Datte", // D
  "Elderberry", // E (baie de sureau)
  "Figue", // F
  "Fruit de la Passion",
  "Goyave", // G
  "Grenade",
  "Gingembre", //racine
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
//attrape le DOM => catch the DOM
const btn = document.getElementById("btn") as HTMLButtonElement;
const containerUl = document.getElementById("containerUl") as HTMLUListElement;

//type littéral ou union de types.
// Ça veut dire : “la variable sens peut uniquement valoir "gauche" OU "droite"”.
let sens: "gauche" | "droite" = "gauche";
//listener sur btn
btn.addEventListener("click", (e) => {
  sens = sens === "gauche" ? "droite" : "gauche";
  render(tabFruits);
  console.log("le sens a changer");
});

// Fonction métier (logique pure)
function sortFruits(tab: string[], sens: "gauche" | "droite"): string[] {
  return [...tab].sort((a, b) =>
    sens === "gauche" ? a.localeCompare(b) : b.localeCompare(a)
  );
}
//création des li dans ul des fruits
function render(tab: string[]) {
  //vide le container Ul
  containerUl.innerHTML = "";
   const sorted = sortFruits(tab, sens); // appelle la logique métier
  for (let fruit of sorted) {
    const li = document.createElement("li");
    li.classList = "listFruits";
    li.textContent = fruit;
    containerUl.appendChild(li);
  }
}
render(tabFruits);
//render
