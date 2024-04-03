const spesa = ["uova", "pane", "latte", "merendine", "melanzane"];

const listaSpesa = document.querySelector(".lista-spesa");


let i = 0;

while (i < spesa.length) {
    
    let elemLista = spesa[i];
    elemLista = document.createElement("li");
    console.log(elemLista);
    elemLista.textContent = `${spesa[i]}`;
    listaSpesa.appendChild(elemLista);
    elemLista.addEventListener("click", function(){
        
        if(elemLista.style.textDecoration === "line-through"){
            elemLista.style.textDecoration = "none";
        } else {
            elemLista.style.textDecoration = "line-through";
        }
    });
    
    
    i++;

    
}






