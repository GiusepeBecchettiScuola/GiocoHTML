
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
    blocchi.push(blocco);
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
    lavas.push(lava);
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
    bandiere.push(bandiera);
}

function posizionaBlocchi3() {

    generaBlocco(1100, 47, 250);

    generaBlocco(2100, 200, 150);
    generaBlocco(2400, 47, 300);
    generaBlocco(2900, 47, 200);
    generaBlocco(3200, 47, 250);
    generaBlocco(3600, 100, 150);

    generaBlocco(5300, 47, 250);
    generaBlocco(5700, 100, 150);
    generaBlocco(6000, 150, 200);
    generaBlocco(6300, 200, 150);
    generaBlocco(6600, 47, 300);
}

function posizionaLava3() {
// Lava tra il quindicesimo e il sedicesimo blocco
}

function posizionaBandiera3() {
    generaBandiera(6800, 47); // Bandiera di fine livello
}