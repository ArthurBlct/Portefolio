let titre_stage = document.getElementById("titre-stage");
let whoosh1 = document.querySelector(".whoosh")

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