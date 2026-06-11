const lancementButton = document.getElementById("lancement");
const accueilSection = document.getElementById("accueil");
const pageniveaux = document.getElementById("niveaux")
const questionniveau1 = document.getElementById ("facile")
const questionniveau2 = document.getElementById ("moyen")
const questionniveau3 = document.getElementById ("difficile")

lancementButton.addEventListener("click", afficherNiveaux);

function afficherNiveaux (){
    pageniveaux.hidden=false;
    accueilSection.hidden=true;
}


questionniveau1.addEventListener("click", afficherFacile);

function afficherFacile () {
    pageniveaux.hidden=true;
    questionniveau1.hidden=false;
}

questionniveau2.addEventListener("click", afficherMoyen);

function afficherMoyen () {
    pageniveaux.hidden=true;
    questionniveau2.hidden=false;
}

questionniveau3.addEventListener("click", afficherDifficile);

function afficherDifficile () {
    pageniveaux.hidden=true;
    questionniveau3.hidden=false;
}
