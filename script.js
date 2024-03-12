let clickMenu = false;

function clicked(){
    let menu = document.getElementById("hamburger-menu");
    let nav = document.getElementById('nav-mobile');

    if(!clickMenu){
        menu.classList.add("active-hamburger");
        nav.classList.add("show");
        clickMenu = true;
    }
    else{
        menu.classList.remove("active-hamburger");
        nav.classList.remove("show");
        clickMenu = false;
    }
}

function showGallery(element){
    let gallery = document.getElementById("category-foto");
    let target = document.querySelectorAll(".target");
    for(let i = 0; i<target.length; i++)
        target[i].style.display="none";

        console.log(element.innerText);
    
    switch(element.innerText){
        case "Azienda":
            let immAzienda = document.getElementById("category-azienda");
            immAzienda.style.display = "grid";
        break;
        case "Linea di produzione":
            let immProduzione = document.getElementById("category-produzione");
            immProduzione.style.display = "grid";
        break;
        case "I nostri lavori":
            let immLavori = document.getElementById("category-lavori");
            immLavori.style.display = "grid";
        break;
        case "I nostri prodotti":
            let immProdotti = document.getElementById("category-prodotti");
            immProdotti.style.display = "grid";
        break;

    }
    
}









