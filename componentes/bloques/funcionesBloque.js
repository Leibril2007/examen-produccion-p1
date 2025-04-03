import { dataCruz } from "../../data/data.js";

function agregarCruz(){

    let txtX = document.createElement('p');
    txtX.textContent = "x";
    dataCruz.push(txtX.textContent);

    console.log(dataCruz);

}

function agregarCheck(){
    
}

function eliminarBloque(){
    
}

export { agregarCruz, agregarCheck, eliminarBloque }