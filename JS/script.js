// La case d'affichage
let ecran = document.querySelector(".calculator-screen");
ecran.textContent = "0";

// Les informations gardées en mémoire
let nombre1 = 0;      // le premier nombre
let nombre2 = 0;      // le deuxième nombre
let operation = "";   // le signe choisi (+ ou -), jamais affiché
let nouveau = true;   // true = le prochain chiffre remplace l'ancien

// On récupère tous les boutons de la page
let boutons = document.querySelectorAll("button");

// Pour chaque bouton, on lui donne son code (comme un onclick écrit dans le HTML)
for (let bouton of boutons) {
    let texte = bouton.textContent.trim();   // le texte du bouton : 1, 2, +, =, ...

    if (texte == "+" || texte == "-") {
        // Un signe : on garde le nombre et le signe, l'écran ne change pas
        bouton.setAttribute("onclick",
            "nombre1 = Number(ecran.textContent); operation = '" + texte + "'; nouveau = true");
    } else if (texte == "=") {
        // Égal : on calcule et on affiche le résultat
        bouton.setAttribute("onclick",
            "nombre2 = Number(ecran.textContent); " +
            "if (operation == '+') { ecran.textContent = nombre1 + nombre2 } " +
            "if (operation == '-') { ecran.textContent = nombre1 - nombre2 } " +
            "operation = ''; nouveau = true");
    } else {
        // Un chiffre : il remplace l'ancien nombre ou s'ajoute à la suite
        bouton.setAttribute("onclick",
            "ecran.textContent = (nouveau ? '' : ecran.textContent) + " + texte + "; nouveau = false");
    }
}