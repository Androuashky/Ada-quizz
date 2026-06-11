const lancementButton = document.getElementById("lancement");
const quizSection = document.getElementById("quiz");
const accueilSection = document.getElementById("accueil");
const pageniveaux = document.getElementById("niveaux")
const questionniveau1 = document.getElementById ("questionfacile")

lancementButton.addEventListener("click", startQuiz);

function startQuiz (){
    pageniveaux.hidden=false;
    accueilSection.hidden=true;
}

function startQuizniveaux (){
    pageniveaux.hidden=true;
    accueilSection.hidden=true;

}

lancementButton.addEventListener("click", startQuizniveaux);