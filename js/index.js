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
/*////// Slider //////*/
var image = document.querySelector(".image");
var imageIdv = document.querySelectorAll(".image-idv");
var imageIdvLast = imageIdv[imageIdv.length -1];

var btnLeft = document.querySelector(".btn-left");
var btnRight = document.querySelector(".btn-right");

image.insertAdjacentElement('afterbegin', imageIdvLast);

function next(){

    let imageIdvFirst = document.querySelectorAll(".image-idv")[0];
    image.style.marginLeft = "-200%";
    image.style.transition = "1s";
    setTimeout(function(){
        
        image.style.transition = "none";
        image.insertAdjacentElement('beforeend', imageIdvFirst);
        image.style.marginLeft = "-100%";
    },1000);

    let play = document.querySelector(".play");
    let tituloHid = document.querySelectorAll(".title-sld")[1];
    let showTitle = document.querySelectorAll(".title-sld")[2];
    let textShow = document.querySelectorAll(".text-sld")[2];
    let textHid = document.querySelectorAll(".text-sld")[1];
    if(showTitle){

        tituloHid.style.display = "none";
        play.style.visibility = "hidden";
    }
    if(textShow){

        textHid.style.display = "none";
    }

    setTimeout(function(){

        if(showTitle){

            showTitle.style.display = "block";
            play.style.visibility = "visible";
        }
        if(textShow){

            textShow.style.display = "block";
        }
    }, 1000)

}
function prev(){
    
    let imageIdv = document.querySelectorAll(".image-idv");
    let imageIdvLast = imageIdv[imageIdv.length -1];
    image.style.marginLeft = "0";
    image.style.transition = "1s";
    setTimeout(function(){
        
        image.style.transition = "none";
        image.insertAdjacentElement('afterbegin', imageIdvLast);
        image.style.marginLeft = "-100%";
    },1000);

    let play = document.querySelector(".play");
    let tituloHid = document.querySelectorAll(".title-sld")[1];
    let showTitle = document.querySelectorAll(".title-sld")[0];
    let textShow = document.querySelectorAll(".text-sld")[0];
    let textHid = document.querySelectorAll(".text-sld")[1];

    if(showTitle){

        tituloHid.style.display = "none";
        play.style.visibility = "hidden";
    }
    if(textShow){

        textHid.style.display = "none";
    }
    setTimeout(function(){

        if(showTitle){

            showTitle.style.display = "block";
            play.style.visibility = "visible";
        }
        if(textShow){

            textShow.style.display = "block";
        }
    }, 1000)
}

btnRight.addEventListener("click", function(){

    next();
})
btnLeft.addEventListener("click", ()=>{

    prev();
})

setInterval(function(){

    next();
}, 10000);

var tituloShow = document.querySelectorAll(".title-sld")[1];
tituloShow.style.display = "block";
var textoShow = document.querySelectorAll(".text-sld")[1];
textoShow.style.display = "block";
var play = document.querySelector(".play");
play.style.visibility = "visible";

/*////// Color Navegador //////*/
var home = document.querySelector(".links-index");
home.style.backgroundColor = "blueviolet";

/*////// Noticia //////*/
function cargar(){

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            show(this);
        }
    }
    xhttp.open("GET","noticia.xml",true);
    xhttp.send();
}

function show(xml){

    let objHttp = xml.responseXML;
    let cadena = "";

    let nombre = objHttp.getElementsByTagName('nombre');
    let info = objHttp.getElementsByTagName('info');

    for(let i =0; i < nombre.length; i++){
        cadena += '<h1>'+'<strong>' + nombre[i].childNodes[0].nodeValue + '</strong>' + '</h1>';
        cadena += '<p>' + info[i].childNodes[0].nodeValue + '</p>';
    }
    document.querySelectorAll(".not-son")[0].innerHTML = cadena;
    //document.querySelectorAll(".not-son")[0].innerHTML = cadena;
}
cargar();

var hola = document.querySelectorAll(".not-son")[0];
console.log(hola);