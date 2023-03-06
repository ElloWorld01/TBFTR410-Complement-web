# R410 - TD1 : Réponses aux Questions
## 6 Exercice 1 : Commençons avec l’objet document (index.html et exercice1.js)
### 6.1 La propriété « document.title »
#### Quel sera l’évènement qui déclenchera l’appelle de votre fonction ?

L'évènement qui déclenchera l'appel de ma fonction est l'attribut `onload`, qui permet de déclencher une fonction dès que la page HTML est chargée.

#### Quelle méthode avez-vous utilisée pour récupérer l’objet représentant votre balise `<h1>` ?

J'ai utilisé la méthode `getElementById()` pour récupérer l'objet représentant ma balise `<h1>` avec l'identifiant `title`.
```javascript
document.getElementById('title')
```

#### Quelle propriété de l’objet représentant votre balise `<h1>` avez-vous utilisée pour récupérer le texte de celui-ci ?

J'ai utilisé la propriété `textContent` de l'objet représentant ma balise `<h1>` pour récupérer le texte de celle-ci.
```javascript
document.getElementById("title").textContent
```

#### Quelle(s) méthode(s) avez-vous utilisée pour récupérer l’objet représentant la première balise `<h2>` ?

J'ai utilisé la méthode `getElementsByTagName()` pour récupérer une liste des objets représentant les balises `<h2>` du document, puis j'ai pris le premier élément de la liste avec l'indice `[0]`.
```javascript
document.getElementsByTagName('h2')[0]
```

#### Comment faire pour connaitre le nombre de balise `<h2>` du document ?

 pour connaitre le nombre de balise `<h2>` du document, j'ai utilisé la propriété `length` sur la liste des objets représentant les balises `<h2>` du document, récupérée avec la méthode `getElementsByTagName()`.
```javascript
document.getElementsByTagName('h2').length
```

#### Quelle méthode avez-vous utilisée pour récupérer les objets de votre classe ?

J'ai utilisé la méthode `getElementsByClassName()` pour récupérer une liste des objets de la classe `firstOrLast`.
```javascript
let elements = document.getElementsByClassName('firstOrLast')
```

#### Comment avez-vous déterminé si un nombre est pair ?

J'ai utilisé la propriété `length` de l'objet `elements` pour déterminer si le nombre est pair ou impair.
```javascript
if (elements.length % 2 == 0)
```

### 6.2 Les propriétés innerHTML, innerText et textContent
#### Quelles différences existe-t-il entre les 3 propriétés innerHTML, innerText et textContent ?

La propriété `innerHTML` renvoie les paragraphes et les `span`.
La propriété `innerText` renvoie seulement le paragraphe en enlevant les `span`.
La propriété `textContent` renvoie le contenu textuel sans aucune balise.

### 6.3 La propriété document.lastModified
#### Comment modifier votre code pour qu’il permette de sélectionner le 1er auteur de la liste ?

J'ai utilisé la méthode `querySelectorAll()` pour récupérer une liste des objets représentant les balises `<meta>` avec l'attribut `name="author"`, puis j'ai pris le premier élément de la liste avec l'indice `[0]`.
```javascript
let author = document
  .querySelectorAll('meta[name="author"]')[0]
  .getAttribute("content");
```

#### Même question avec le dernier auteur de la liste.

J'ai utilisé la méthode `querySelectorAll()` pour récupérer une liste des objets représentant les balises `<meta>` avec l'attribut `name="author"`, puis j'ai pris le dernier élément de la liste avec l'indice `[document.querySelectorAll('meta[name="author"]').length - 1]`.
```javascript
let author = document
    .querySelectorAll('meta[name="author"]')[document.querySelectorAll('meta[name="author"]').length - 1]
    .getAttribute("content");
```

## 7 Exercice 2 : l’objet Date (exercice2.html et exercice2.js)
#### Comment obtenez-vous le nombre de jours ?

J'obtiens le nombre de jours en faisant la différence entre la date du 19 juillet 2023 et la date actuelle, puis en convertissant le résultat donné en millisecondes en jours.
```javascript
	const millis = new Date(2023, 6, 19).getTime() - Date.now();
	let days = Math.floor(millis / 1000 / 60 / 60 / 24);
```

#### Comment faites-vous la mise à jour du texte ?

J'ai utilisé la méthode `replace()` pour remplacer le texte `xxx` par le nombre de jours, le texte `X` par le dernier chiffre de l'année et le texte `jours` par `jour` si le nombre de jours est égal à 1. Ensuite, j'ai modifié le texte de l'élément avec la propriété `innerHTML` afin de mettre à jour l'élément.
```javascript
if (days == 1)
		elements[i].innerHTML = elements[i].innerHTML.replace('jours', 'jour');
elements[i].innerHTML = elements[i].innerHTML.replace(/xxx/, days);
elements[i].innerHTML = elements[i].innerHTML.replace(/X/, lastNumberOfYear);
```

### 7.1 `setInterval()` et `setTimeout()`
#### Laquelle des deux méthodes de l’objet `window` avez-vous utilisé ? Pourquoi ?

J'ai utilisé la méthode `setInterval()` pour que la fonction `getNbDays()` s'exécute toutes les secondes sans s'arrêter, contrairement à la méthode `setTimeout()` qui ne s'exécute qu'une seule fois.

## 8 Exercice 3 : HTML, CSS et JavaScript (exercice3.html et exercice3.js)
### 8.1 Champ Texte et Couleur d’arrière-plan
#### Quel évènement avez-vous utilisé ?

J'ai utilisé l'évènement `input` qui se déclenche dès que l'input est modifié.

#### Comment avez-vous fait changer la couleur du champ texte ?

J'ai changé la classe de la balise `<input>` en fonction de la valeur de l'input.
