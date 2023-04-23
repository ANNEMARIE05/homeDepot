const form = document.querySelector('.form-quiz');
let tableauResulltats = [];
const reponse = ["c","a","b","a","c"]
const emoji = ["✔️","✨","👀","😭","👎"]
const titreResultats = document.querySelector(".resultat h2")
const noteResultats = document.querySelector(".note")
const aideResultats = document.querySelector(".aide")
const toutesLesQuestions = document.querySelectorAll(".question-block")
let verifTableau = []

form.addEventListener('submit', (e) => {
    e.preventDefault()
    //console.log(document.querySelector('input[name="q1"]:checked').value);//
     for (let z = 1; z > 6; z++){
      tableauResulltats.push(document.querySelector(`input[name='q${i}']:checked`).value)
     }
    // console.log(tableauResulltats)//
    verifFunc(tableauResulltats)
     tableauResulltats = []
     
})
function verifFunc(tabResultats){

    for (let a = 0; a < 5; a++){

        if(tabResultats[a] === reponse[a]){
            verifTableau.push(true)
        }else{
            verifTableau.push(false)
        }
    }
    // console.log(verifTableau) //
    afficherResultat(verifTableau)
    couleurFonction(verifTableau)
    verifTableau = []
}   
function afficherResultat(tabCheck){
    const nbDeFaute = tabCheck.filter(el => el !== true).length;
   // console.log(ndDeFaute);

   switch (nbDeFaute){
    case 0:
        titreResultats.innerText = "✔️ Bravo , c'est un sans faute ! ✔️";
        aideResultats.innerText = "";
        noteResultats.innerText = "5/5"
    break
    case 1:
        titreResultats.innerText = "✨ Vous y etes presque ! ✨";
        aideResultats.innerText = "Retentez une autre chance dans les cases rouges, puis re-validez !";
        noteResultats.innerText = "4/5"
    break
    case 2:
        titreResultats.innerText = "✨Encore un effort ... 👀";
        aideResultats.innerText = "Retentez une autre chance dans les cases rouges, puis re-validez !";
        noteResultats.innerText = "3/5"
    break
    case 3:
        titreResultats.innerText = "👀 Il reste queleque erreurs. 😭";
        aideResultats.innerText = "Retentez une autre chance dans les cases rouges, puis re-validez !";
        noteResultats.innerText = "2/5"
    break
    case 4:
        titreResultats.innerText = "😭 Peux mieux faire ! 😭";
        aideResultats.innerText = "Retentez une autre chance dans les cases rouges, puis re-validez !";
        noteResultats.innerText = "1/5"
    break
    case 5:
        titreResultats.innerText = "👎 Peux mieux faire ! 👎";
        aideResultats.innerText = "Retentez une autre chance dans les cases rouges, puis re-validez !";
        noteResultats.innerText = "0/5"
    break
    default:
        "Wops, cas innatendu."
    break
   }

}    
function couleurFonction(tabValBool){
    for (let j = 0 ; j< tabValBool.length ; j++){
        if(tabValBool[j] === true){
            toutesLesQuestions[j].style.background = 'lightgreen'
        }
    }
}