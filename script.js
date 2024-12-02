let titre_stage = document.getElementById("titre-stage");
let whoosh1 = document.querySelector(".whoosh")
let titre_ecole = document.getElementById("titre-ecole");
let whoosh2 = document.querySelectorAll(`.whoosh`)

// console.log(titre_stage.textContent);

titre_stage.addEventListener("click", function(){

    if (whoosh1.classList.contains("hidden")==false){
        whoosh1.classList.add("hidden");
        titre_stage.textContent = "+ Stage en Entreprise"
    } else {
        whoosh1.classList.remove("hidden");
        titre_stage.textContent = "- Stage en Entreprise"
    }
});

titre_ecole.addEventListener("click", function(){

    if (whoosh2.classList.contains("hidden")==false){
        whoosh2.classList.add("hidden");
        titre_ecole.textContent = "+ Projets Ecole"
    } else {
        whoosh2.classList.remove("hidden");
        titre_ecole.textContent = "- Projets Ecole"
    }
});