
function generaBlocco3(posizioneX, posizioneY, width = 100) {
    let blocco = document.createElement("div");
    blocco.style.left = posizioneX + "px";
    blocco.dataset.posizioneOriginaleX = posizioneX;
    blocco.style.bottom = posizioneY + "px";
    blocco.dataset.posizioneOriginaleY = posizioneY;
    blocco.style.width = width + "px";
    blocco.dataset.widthOriginale = width;
    blocco.classList.add("classeBlocco");
    document.body.appendChild(blocco);
    vettoreBlocchi.push(blocco);
}


function generaLava3(posizioneX, posizioneY, width) {
    let lava = document.createElement("div");
    lava.style.left = posizioneX + "px";
    lava.dataset.posizioneOriginaleX = posizioneX;
    lava.style.bottom = posizioneY + "px";
    lava.dataset.posizioneOriginaleY = posizioneY;
    lava.style.width = width + "px";
    lava.dataset.widthOriginale = width;
    lava.classList.add("classeLava");
    document.body.appendChild(lava);
    vettoreLava.push(lava);
}

function generaBandiera3(posizioneX, posizioneY) {
    let bandiera = document.createElement("img");
    bandiera.src = "img/image-removebg-preview.png";
    bandiera.alt = "bandiera";
    bandiera.style.left = posizioneX + "px";
    bandiera.dataset.posizioneOriginaleX = posizioneX;
    bandiera.style.bottom = posizioneY + "px";
    bandiera.dataset.posizioneOriginaleY = posizioneY;
    bandiera.classList.add("classeBandiera");
    document.body.appendChild(bandiera);
    vettoreBandiere.push(bandiera);
}

function posizionaBlocchi3() {
    generaBlocco(700, 47, 250);
    generaBlocco(1200, 230, 200);
    generaBlocco(1600, 47, 250);
    generaBlocco(2200, 47, 200);
    generaBlocco(2600, 230, 300); 
    generaBlocco(3300, 47, 300);
    generaBlocco(3800, 140, 250); 
    generaBlocco(4400, 47, 400);
    generaBlocco(5100, 47, 300);
    generaBlocco(5700, 230, 300); 
    generaBlocco(6300, 47, 300);
    generaBlocco(6900, 140, 200); 
}

function posizionaLava3() {
    generaLava(500, 47, 6600); 
}

function posizionaBandiera3() {
    generaBandiera(7400, 47); 
}
