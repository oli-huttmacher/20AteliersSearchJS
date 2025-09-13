# trier le tableaux de A<=>Z  
```
  btn.addEventListener("click", () => {
  sens = sens === "gauche" ? "droite" : "gauche";
  console.log("le sens a changé :", sens);
  render(tabFruits); // ✅ relancer l’affichage
});

```
