#Exercice 5

**Durée :** :warning: 25 mins :warning:

<ins>**Attention au temps.**</ins>

Il n'y a aucun piège dans cet exercice.

<ins>**N'essayez pas de faire plus que ce qui est demandé**</ins> (sauf s'il vous reste du temps à la fin du test). Ne pas finir l'exercice pourra vous pénaliser.

---

### Informations

Pour importer de façon simple un fichier javascript, vous pouvez vous baser sur les javascripts fournis, comme ceci : 

```javascript
//=require ../../node_modules/jquery/dist/jquery.min.js
//=require ./partials/_exemple.js

// Ceci est un commentaire. Les deux lignes au-dessus ne le sont pas.
// https://www.npmjs.com/package/gulp-include
```

---

### Exercice 5.1

En utilisant jQuery le plus possible (sinon vanilla, c'est ok aussi), mettez en place les comportements suivants : 

1. Une fois le document chargé, ajouter un attribut "data-count-css" au bouton "Open Google in new tab" ayant comme valeur le nombre de fichiers CSS inclus dans la page.
  
2. Une fois toute la page chargée, si le nombre total de balises contenues dans la balise body est supérieur ou égal à 1000 alors ajouter une balise script à la fin de la balise body. Sinon, ajouter la balise script au début de la balise body. Cette balise script devra contenir le code nécessaire à la mise en place du point 3 :

2. Chaque fois que la fenêtre est redimensionnée, logger dans la console la valeur en pixels de la distance séparant le bouton "Open Google in new tab" du haut de la page ainsi que celle le séparant de son parent direct.

---

### Exercice 5.2

1. Ajouter la librairie [Lodash](https://lodash.com/) au projet de la façon qui vous semble la meilleure.

2. Inclure la libraire dans le bundle JS de la homepage.

3. Créez le tableau suivant : 

```js
var stars = [
  {
    name: 'Morgan Freeman',
    chauve: false,
    cool: true,
  },
  {
    name: 'Bruce Willis',
    chauve: true,
    cool: true
  },
  {
    name: 'Cyril Hanouna',
    chauve: false,
    cool: false
  },
  {
    name: 'Pascal Obispo',
    chauve: true,
    cool: false
  }
];
```

4. En utilisant Lodash, afficher dans la console un tableau des stars chauves et pas cools.

---

- [Introduction](../README.md)
- [Exercice 1](./exo1.md)
- [Exercice 2](./exo2.md)
- [Exercice 3](./exo3.md)
- [Exercice 4](./exo4.md)
- **Exercice 5**
- [Exercice 6](./exo6.md)
