const arrayProdotti = [
{
    //MURATURA
    prodotti: [
        "Blocchi intonaco",
        "Blocchi faccia a vista interno",
        "Blocchi correa faccia a vista interno",
        "Blocchi faccia a vista esterno",
        "Blocchi faccia a vista colorato esterno",
        "Blocchi faccia a vista tagliafuoco interno",
        "Blocchi slittati e scanalati splittati esterno",
        "Blocchi slittati di testa bifaccia colorato esterno",
    ],
},
{
    //RECINZIONE
    prodotti: [
        "Colonna splittata idrofugata 45x45 cm h.20",
        "Capitello quadro idrofugato 52,5x52,5 cm spessore 9cm",
        "Copertine torate idrofugate",
        "Copertine torate di testa idrofugate",
        "Copertine colorate torate idrofugate",
        "Copertine torate levigate idrofugate",
        "Copertine torate di testa levigate idrofugate",
        "Copertine torate di testa L=100 e L=50",
    ],
},
{
    //ANELLI / POZZETTI
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
    //CHIUSINI
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
    //FOGNATURA
    prodotti: [
        "Solette carrabili",
        "Anelli perdenti a pianta circolare",
        "Coperchi tipo leggero / pesante / carrabili",
        "Tubi a sezione circolare",
        "Fosse Biologiche tipo Imhoff",
        "Pozzetti condensa grassi",
        "Pozzi prima pioggia circolare",
        "Pozzi disoleatori circolari",
    ],
},
{
    //STRADALE
    prodotti: [
        "Plinti porta palo illuminazione",
        "Lastre e pali per recinzione prefabbricate",
        "Dissuasori di sosta",
        "Porta Biciclette",
        "Cordoli",
        "Canali con profilo ad incastro con bordo protetto in acciaio zincato",
        "Canalette in cls. polimerico",
        "Chiusini in ghisa",
    ],
}
];
    function getContent(type){
        if(type === "Muratura"){
            let p = document.querySelector("#muratura .pr p");
            for(element of arrayProdotti[0].prodotti){
                p.innerHTML += element+"<br>";
            }
        }
        else if (type === "Recinzione"){
            let p = document.querySelector("#recinzione .pr p");
            for(element of arrayProdotti[1].prodotti){
                p.innerHTML += element+"<br>";
            }
        }
        else if (type === "Anelli"){
            let p = document.querySelector("#anelli .pr p");
            for(element of arrayProdotti[2].prodotti){
                p.innerHTML += element+"<br>";
            }
        }
        else if (type === "Chiusini"){
            let p = document.querySelector("#chiusini .pr p");
            for(element of arrayProdotti[3].prodotti){
                p.innerHTML += element+"<br>";
            }
        }
        else if (type === "Fognatura"){
            let p = document.querySelector("#fognatura .pr p");
            for(element of arrayProdotti[4].prodotti){
                p.innerHTML += element+"<br>";
            }
        }
        else if (type === "Stradale"){
            let p = document.querySelector("#stradale .pr p");
            for(element of arrayProdotti[5].prodotti){
                p.innerHTML += element+"<br>";
            }
        }
    
    }

    let loader = document.getElementById('loader');

window.addEventListener('load', function() {
    getContent('Muratura');
    getContent('Recinzione');
    getContent('Anelli');
    getContent('Chiusini');
    getContent('Fognatura');
    getContent('Stradale');

    loader.style.display = 'none';
});

let buttons = document.querySelectorAll(".buttons_prodotti .btn");
let p = document.querySelector(".info_prodotti p");
let containerImg = document.querySelector(".img_prodotti");
let h2 = document.querySelector(".info_prodotti h2");
let downloadPdf = document.querySelector("#section-prodotti a");
let contents = document.querySelectorAll( ".content" );

buttons.forEach(button =>{
button.addEventListener('mouseenter', () => {
    let target = button.getAttribute('data-target');
    let targetId = document.getElementById(target);

    contents.forEach(content =>{
        if (content !== targetId) 
            content.classList.remove('cover');
            content.style.opacity = '0';
    });

    /* targetId.style.opacity = '1'; */

    targetId.classList.add('cover');
    targetId.style.opacity = '1';
    /* targetId.style.display = 'flex'; */

});

});