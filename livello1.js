
function generaBlocco(posizioneX, posizioneY, width = 100) {
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


function generaLava(posizioneX, posizioneY, width) {
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

function generaBandiera(posizioneX, posizioneY) {
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

function posizionaBlocchi() {
    generaBlocco(600, 47, 300);
    generaBlocco(1200, 47, 300);
    generaBlocco(1800, 47, 300);
    generaBlocco(2400, 230, 300);
    generaBlocco(3000, 230, 300);
    generaBlocco(3400, 230, 250);
    generaBlocco(4000, 47, 500);
    generaBlocco(4700, 100, 300);
    generaBlocco(5300, 47, 300);
    generaBlocco(5900, 230, 300);
    generaBlocco(6500, 47, 300);

}
function posizionaLava() {
    generaLava(400, 47, 6500);
}

function posizionaBandiera() {
    generaBandiera(7500, 47);
}
