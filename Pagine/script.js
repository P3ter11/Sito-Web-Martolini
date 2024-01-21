
const arrayProdotti = [
    {
        categoria: "Muratura",
        immagine: "../Immagini/costruzione.jpg",
        pdf: "../Download/Costruzione.pdf",
        prodotti: [
            "Blocchi intonaco",
            "Blocchi faccia a vista interno",
            "Blocchi correa faccia a vista interno",
            "Blocchi faccia a vista esterno",
            "Blocchi faccia a vista colorato esterno",
            "Blocchi faccia a vista tagliafuoco interno",
            "Blocchi slittati e scanalati splittati esterno",
            "Blocchi splittati colorato esterno",
            "Blocchi slittati bifaccia esterno",
            "Blocchi slittati di testa bifaccia esterno",
        ],
    },
    {
        categoria: "Recinzione",
        immagine: "../Immagini/recinzione3.jpg",
        pdf: "../Download/Recinzione.pdf",
        prodotti: [
            "Colonna splittata idrofugata 45x45 cm h.20",
            "Capitello quadro idrofugato 52,5x52,5 cm spessore 9cm",
            "Copertina L=25 30x5,5x25 per blocchi spessore 20",
            "Copertine torate idrofugate per muri spessore 12-15-20-25-30",
            "Copertine torate di testa idrofugate per muri spessore 12-15-20-30",
            "Copertine colorate torate idrofugate per muri spessore 20-25",
            "Copertine torate levigate idrofugate per muri spessore 12-15-20-25-30",
            "Copertine torate di testa levigate idrofugate per muri spessore 12-15-20-25-30",
            "Copertine torate di testa L=100 per muri spessore 15-20-25-30-40-50",
            "Copertine torate di testa L=50 per muri spessore 15-20-25-30-40-50",
            "Copertina 30x4x100 per muri spessore 15-20-25-30-40-50",
        ],
    },
    {
        categoria: "Anelli / Pozzetti",
        immagine: "../Immagini/anelli-pozzetti.jpg",
        pdf: "../Download/Anelli-Pozzetti.pdf",
        prodotti: [
            "Anelli senza fondo a pianta quadrata",
            "Anelli prolunga senza fondo a pianta quadrata",
            "Pozzetti con fondo a pianta quadrata",
            "Anelli senza fondo a pianta rettangolare",
            "Pozzetto pluviale sifonato 25x25",
            "Anello senza fondo e pozzetto con fondo 45x45 tipo MILANO",
            "Pozzetto stradale sifonato 45x45",
            "Anello prolunga pozzetto stradale 45x45",
            "Anello senza fondo - Anello prolunga - Pozzetto con fondo 80x80",
        ],
    },
    {
        categoria: "Chiusini",
        immagine: "../Immagini/chiusini.jpg",
        pdf: "../Download/Chiusini.pdf",
        prodotti: [
            "Chiusini tipo leggero a pianta quadrata",
            "Chiusini caditoia tipo leggero a pianta quadrata",
            "Chiusini tipo pesante a pianta quadrata",
            "Chiusini caditoia tipo pesante a pianta quadrata",
            "Chiusini tipo leggero a pianta rettangolare",
            "Chiusino con tappo in lamiera zincata per pozzetti contatore acqua",
        ],
    },
    {
        categoria: "Fognatura",
        immagine: "../Immagini/fognatura.jpg",
        pdf: "../Download/Fognatura.pdf",
        prodotti: [
            "Solette carrabili a pianta quadrata",
            "Solette carrabili a pianta rettangolare",
            "Anelli perdenti a pianta circolare",
            "Coperchi tipo leggero a pianta circolare per an. perdenti",
            "Coperchi tipo pesante a pianta circolare per an. perdenti",
            "Coperchi carrabili a pianta circolare per an. perdenti",
            "Coperchi tipo leggero a pianta circolare per an. perdenti diam. 100",
            "Soletta carrabile a pianta circolare per an. perdenti diam. 200",
            "Tubi da ml. 1 a sezione circolare",
            "Tubi da ml. 2 con bicchiere a sezione circolare",
            "Fossa Biologica tipo Imhoff circolare diam. 80 ad elementi",
            "Fossa Biologica tipo Imhoff circolare diam. 110 ad elementi",
            "Fossa Biologica tipo Imhoff circolare diam. 125 ad elementi",
            "Fossa Biologica tipo Imhoff circolare diam. 150 ad elementi",
            "Fossa Biologica tipo Imhoff circolare diam. 200 ad elementi",
            "Pozzetto condensa grassi 49X79 monoblocco",
            "Pozzetto condensa grassi 90X110 monoblocco",
            "Pozzo prima pioggia circolare diam. 100 monoblocco",
            "Pozzo prima pioggia circolare diam. 150 monoblocco",
            "Pozzi disoleatori circolari diam. 100-150 monoblocco",
        ],
    },
    {
        categoria: "Stradale",
        immagine: "../Immagini/stradale.jpg",
        pdf: "../Download/Stradale.pdf",
        prodotti: [
            "Plinto porta palo illuminazione peso 780Kg. per pali H. 6mt TIPO 1",
            "Plinto porta palo illuminazione peso 1300kg per pali H. 10mt",
            "Lastre e pali per recinzione prefabbricante",
            "Dissuasori di sosta",
            "Porta Biciclette",
            "Cordolo lineare 5/5 L=50",
            "Cordolo tronchetto 7/7 L=50",
            "Cordolo lineare 5/6",
            "Cordolo curvo 6/8",
            "Cordolo lineare e cordolo curvo 12/1",
            "Cordolo lineare lavorato",
            "Canali con profilo ad incastro con bordo protetto in acciaio zincato",
            "Griglie ad incastro con bloccaggio",
            "Canalette in cls. di polimerico",
            "Chiusini in ghisa sferoidale e coperchio quadri",
            "Chiusini in ghisa sferoidale telaio e coperchio rettangolare",
            "Chiusini caditoia piana in ghisa sferoidale telaio e coperchio quadri",

        ],
    }
]


let main = document.getElementById("section-prodotti");
let buttons = document.querySelectorAll("#buttons_prodotti div");
let p = document.querySelector(".info_prodotti p");
let containerImg = document.querySelector(".img_prodotti");
let h2 = document.querySelector(".info_prodotti h2");
let downloadPdf = document.querySelector("#section-prodotti a");



function getProdotti(element){
    for(let i=0; i<buttons.length; i++){
        buttons[i].classList.remove("cover");
    }
    element.classList.add("cover");
    main.style.display = "flex";
    p.innerHTML = "";
    h2.innerHTML = "";
    for(let i=0; i<arrayProdotti.length; i++){
        if (element.innerText === arrayProdotti[i].categoria) {
            containerImg.src = arrayProdotti[i].immagine;
            downloadPdf.href = arrayProdotti[i].pdf;
            downloadPdf.download = "Prodotti "+arrayProdotti[i].categoria;
            h2.innerHTML += "<h2>"+arrayProdotti[i].categoria+"</h2>";
            for(element of arrayProdotti[i].prodotti){
                p.innerHTML += element+"<br>";
            }
        }
        
    }
        
}

let click = false;

function clicked(){
    let menu = document.getElementById("hamburger-menu");
    let nav = document.getElementById('nav-mobile');

    if(!click){
        menu.classList.add("active-hamburger");
        nav.classList.add("show");
        click = true;
    }
    else{
        menu.classList.remove("active-hamburger");
        nav.classList.remove("show");
        click = false;
    }
}









