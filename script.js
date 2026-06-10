const lancementButton = document.getElementById("lancement");
const quizSection = document.getElementById("quiz");
const accueilSection = document.getElementById("accueil");

lancementButton.addEventListener("click", startQuiz);

function startQuiz (){
    quizSection.hidden=false;
    accueilSection.hidden=true;
}