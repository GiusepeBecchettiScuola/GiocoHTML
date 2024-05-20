let blocchi = [];
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
    blocchi.push(blocco);
}

let lavas = [];
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
    lavas.push(lava);
}
let bandiere = [];
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
    bandiere.push(bandiera);
}

function posizionaBlocchi() {
    // Inizio del livello
    generaBlocco(600, 47, 200);
    generaBlocco(1200, 47, 300);
    generaBlocco(1600, 47, 200);
    generaBlocco(2200, 47, 300);
    generaBlocco(2800, 230, 300); // Blocco elevato
    generaBlocco(3500, 230, 200); // Blocco elevato
    generaBlocco(3900, 340, 150); // Blocco ancora più elevato
    generaBlocco(4200, 47, 500);
    generaBlocco(5000, 100, 200);
    generaBlocco(5500, 47, 300);
    generaBlocco(6000, 230, 300);
    generaBlocco(6600, 47, 300);
}

function posizionaLava() {
    // Inizio del livello
    generaLava(800, 47, 400); // Lava tra il primo e il secondo blocco
    generaLava(1500, 47, 500); // Lava tra il secondo e il terzo blocco
    generaLava(1800, 47, 400); // Lava tra il terzo e il quarto blocco
    generaLava(2500, 47, 300); // Lava tra il quarto e il quinto blocco elevato
    generaLava(3200, 47, 300); // Lava tra il quinto e il sesto blocco elevato
    generaLava(3700, 47, 200); // Lava tra il sesto e il settimo blocco elevato
    generaLava(4050, 47, 400); // Lava tra il settimo e l'ottavo blocco
    generaLava(4700, 47, 300); // Lava tra l'ottavo e il nono blocco
    generaLava(5200, 47, 300); // Lava tra il nono e il decimo blocco
    generaLava(5800, 47, 400); // Lava tra il decimo e l'undicesimo blocco
    generaLava(6600, 47, 300); // Lava tra l'undicesimo e il dodicesimo blocco

}

function posizionaBandiera() {
    // Fine del livello
    generaBandiera(7500, 47); // Bandiera di fine livello
}