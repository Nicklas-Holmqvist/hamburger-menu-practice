
document.querySelector('#setHamburger').style.cursor = "pointer";
document.querySelector('header').style.overflow = "hidden"; 

const sizeHeader = document.querySelector('#setHeight');

const zoomPlus = document.querySelector('#setPlus');
zoomPlus.style.zIndex = "20";

const zoomMinus = document.querySelector('#setMinus');

const htmlOverFlow = document.querySelector('html');
const sizeMain = document.querySelector('main');

/**
 * This function open and close the hamburgermenu
 * It change the height of the header to 100vh and removes overflows such scrollbar
 * When clicked again it get a 4rem height and scrollbar visible agian
 */
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

/**
 * This function change the font-size of the p-tag width 10%.
 * Also change the zoomicon från plus to minus, vice verse when pressed.
 */
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


