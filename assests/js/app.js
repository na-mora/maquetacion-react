/**Codigo JavaScript */

// Codigo de inicio
document.addEventListener('DOMContentLoaded', function(){
    // Revision de inicio
    eventListener();
});

// Constantes
const mobile = 480;
const tablet = 768;
const pc = 1140;

let menuMobile = null;

// Funcion de inicio
function eventListener(){

    // Ponemos a escuchar a los botones
    esTelefono = esMobile();

    menuMobile = document.querySelector('.mobile-menu');
    menuMobile.addEventListener('click', navegacionResponsive)

}

function esMobile(){
    // Hallamos el tamanno actual
    const tamanoActual = window.innerWidth;

    if(tamanoActual<=mobile){
        // Es un mobile
        return true; 
    }
    else{
        return false;
    }
}

function esTablet(){
    if(tamanoActual >mobile && tamanoActual<=tablet){
        // Es una tablet
        return true;
    }
    else{
        return false;
    }
}

function esPC(){
    if(tamanoActual >mobile && tamanoActual>tablet){
        // Es una tablet
        return true;
    }
    else{
        return false;
    }
}

// Menu icono
function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');
   
    if(navegacion.classList.contains('no-activo') ){
        
        navegacion.classList.remove('no-activo')
    }
    else{
        
        navegacion.classList.add('no-activo')
    }

    const header = document.querySelector('.header');

    if(header.classList.contains('con-menu') ){
        
        header.classList.remove('con-menu')
    }
    else{
        
        header.classList.add('con-menu')
    }
}