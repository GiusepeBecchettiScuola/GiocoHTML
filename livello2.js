
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
    blocchi.push(blocco);
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
    lavas.push(lava);
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
    bandiere.push(bandiera);
}

function posizionaBlocchi2() {

    generaBlocco(1200, 100, 150);
    generaBlocco(1500, 150, 200);
    generaBlocco(1800, 200, 150);
    generaBlocco(2100, 47, 300);
    generaBlocco(2600, 47, 200);
    generaBlocco(2900, 47, 250);
    generaBlocco(3300, 100, 150);
    generaBlocco(3600, 150, 200);
    generaBlocco(3900, 200, 150);
    generaBlocco(4200, 47, 300);
    generaBlocco(4700, 47, 200);
    generaBlocco(5000, 47, 250);
    generaBlocco(5400, 100, 150);
    generaBlocco(5700, 150, 200);
    generaBlocco(6000, 200, 150);
    generaBlocco(6300, 47, 300);
}

function posizionaLava2() {
    generaLava(600, 47, 100); // Lava tra il primo e il secondo blocco
    generaLava(1100, 47, 100); // Lava tra il secondo e il terzo blocco
    generaLava(1500, 47, 200); // Lava tra il terzo e il quarto blocco
    generaLava(1900, 47, 100); // Lava tra il quinto e il sesto blocco
    generaLava(2400, 47, 100); // Lava tra il settimo e l'ottavo blocco
    generaLava(2900, 47, 200); // Lava tra il nono e il decimo blocco
    generaLava(3400, 47, 100); // Lava tra l'undicesimo e il dodicesimo blocco
    generaLava(3900, 47, 200); // Lava tra il tredicesimo e il quattordicesimo blocco
    generaLava(4400, 47, 100); // Lava tra il quindicesimo e il sedicesimo blocco
}

function posizionaBandiera2() {
    generaBandiera(6500, 47); // Bandiera di fine livello
}