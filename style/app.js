
document.querySelector('#setHamburger').style.cursor = "pointer";
document.querySelector('header').style.overflow = "hidden"; 
document.querySelector('#setPlus').style.zIndex = "20";

const sizeHeader = document.querySelector('#setHeight');

const zoomPlus = document.querySelector('#setPlus');
const zoomMinus = document.querySelector('#setMinus');

const htmlOverFlow = document.querySelector('html');
const sizeMain = document.querySelector('main');


function openHamburgermenu() {
    if ( sizeHeader.style.height == "4rem") {
        sizeHeader.style.height = "100vh";
        htmlOverFlow.style.overflow = "hidden";                       
    }
    else {
        sizeHeader.style.height = "4rem";
        htmlOverFlow.style.overflow = "visible";   
    }
}

function largerText() {
    if ( sizeMain.style.fontSize == "100%") {
        sizeMain.style.fontSize = "110%";  
        zoomMinus.style.zIndex = "20"; 
        zoomPlus.style.zIndex = "0";               
    }
    else {
        sizeMain.style.fontSize = "100%";
        zoomMinus.style.zIndex = "0";
        zoomPlus.style.zIndex = "20";   
    }
}


