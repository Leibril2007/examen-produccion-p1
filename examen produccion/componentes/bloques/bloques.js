import { bloque } from "./itemBloque.js"
import { dataCruz, dataCheck } from "../../data/data.js"

function cargarBloques(){

    let padreBloques = document.createElement('div');
    padreBloques.className = "p-bloques";

    dataCruz.forEach(e => {

        padreBloques.appendChild(bloque(e));

    })

    dataCheck.forEach(e => {

        padreBloques.appendChild(bloque(e));

    })


    return padreBloques;
}

export { cargarBloques }