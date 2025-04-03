import { agregarCruz, agregarCheck, eliminarBloque } from "./funcionesBloque.js";
import { actualizarLocalStorage } from "../../services/local_storage.js";

function bloque(){

    let divBloque = document.createElement('div');
    divBloque.className = "dv-bloque";

    let contBtns = document.createElement('div');
    contBtns.className = "cont-btns";

    let btnX = document.createElement('div');
    btnX.className = "btns-bloq  btn-x";
    btnX.textContent = "X";
    contBtns.appendChild(btnX);

    btnX.addEventListener("click", function(){
        agregarCruz();
    })


    let btnSlash = document.createElement('div');
    btnSlash.className = "btns-bloq  btn-slash";
    btnSlash.textContent = "/";
    contBtns.appendChild(btnSlash);

    divBloque.appendChild(contBtns);

    return divBloque;
}

export { bloque }