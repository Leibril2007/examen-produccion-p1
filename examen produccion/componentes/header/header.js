function cargarMenu(){

    let header = document.createElement('div');
    header.className = "head";

    let contX = document.createElement('div');
    contX.className = "conts cont-x";


    let titX = document.createElement('p');
    titX.className = "tit-x";
    titX.textContent = "Total X =";

    contX.appendChild(titX);
    header.appendChild(contX);


    let contSlash = document.createElement('div');
    contSlash.className = "conts cont-/";


    let titS = document.createElement('p');
    titS.className = "tit-/";
    titS.textContent = "Total / = 0";

    contSlash.appendChild(titS);

    header.appendChild(contSlash);
    
    return header;

}

export { cargarMenu }