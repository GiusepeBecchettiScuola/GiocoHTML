
function generaBlocco2(posizioneX, posizioneY, width = 100) {
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

function generaLava2(posizioneX, posizioneY, width) {
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

function generaBandiera2(posizioneX, posizioneY) {
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

function posizionaBlocchi2() {
    generaBlocco(600, 47, 300);
    generaBlocco(1100, 47, 300);
    generaBlocco(1600, 230, 300); 
    generaBlocco(2100, 47, 300);
    generaBlocco(2700, 230, 300); 
    generaBlocco(3300, 47, 300);
    generaBlocco(3800, 140, 350); 
    generaBlocco(4400, 47, 500);
    generaBlocco(5100, 100, 400);
    generaBlocco(5700, 47, 400);
    generaBlocco(6100, 47, 400);
    generaBlocco(6900, 47, 400);
    generaBlocco(7500, 210, 200); 
}
function posizionaLava2() {
    generaLava(400, 47, 7200); 
}

function posizionaBandiera2() {
    generaBandiera(8000, 47); 
}
