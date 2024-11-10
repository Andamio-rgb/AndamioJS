var nav = document.querySelector(".header-index");
window.addEventListener("load", ()=>{
    this.setInterval('ocultar()', 3000);
})

function mostrar(){

    if(nav.className == 'header-index'){

        nav.classList.add("mostrar-head");
    }
}
function ocultar(){

    if(nav.className == 'header-index mostrar-head'){

        nav.classList.remove("mostrar-head");
    }
}
/*////// Prueba //////*/
var galery = document.querySelector("#galeria");
galery.style.backgroundColor = "blueviolet";