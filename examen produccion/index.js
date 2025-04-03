import { cargarMenu } from "./componentes/header/header.js";
import { cargarBloques } from "./componentes/bloques/bloques.js";


let DOM = document.querySelector("#root");

function cargarDOM(){

    DOM.appendChild(cargarMenu());
    DOM.appendChild(cargarBloques());

}

cargarDOM()