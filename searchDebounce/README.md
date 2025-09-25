# 🏷️ Atelier 3 — Recherche avec debounce  
>📝 Objectif

>>*Quand l’utilisateur tape dans une barre de recherche, la liste de résultats se met à jour seulement après une pause de 300 ms, et pas à chaque frappe :exclamation:
👉 Ça évite que le navigateur refasse trop de calculs  inutilement quand on tape vite.*
 ___

### 🛠️ Étapes

>1. Préparer le HTML

   \- Un champ texte de recherche.  

   \- Une liste d’éléments (ex. fruits).  

>2. Mettre en place la logique debounce

- Créer une fonction debounce qui retarde l’exécution d’une autre fonction.

- Spécifier un délai (300 ms).

>3. Connecter la recherche

- Quand on tape dans l’input, appliquer le filtre après la pause.

- Sans debounce, ça déclenche trop souvent.

>4. Afficher les résultats

- Filtrer la liste pour ne garder que les éléments qui correspondent.

- Mettre en évidence (optionnel) le terme recherché.

>5. Tester différents cas

- Taper très vite → la liste se met à jour uniquement à la fin.

- Effacer le champ → tous les éléments reviennent.

- Essayer avec différentes majuscules/minuscules (casse).
___

>1. Préparer le HTML

<pre>
   - Un champ texte de recherche.
   - Une liste d’éléments (ex. fruits).
</pre>  



>1. Préparer le HTML 

- Un champ texte de recherche. - Une liste d’éléments (ex. fruits).  


