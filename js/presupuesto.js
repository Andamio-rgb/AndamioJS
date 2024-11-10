var nav = document.querySelector(".header-index");
window.addEventListener("load", ()=>{
    this.setInterval('ocultar()', 3000);
})

var body = document.querySelector('body');
body.addEventListener("wheel", mostrar);

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
var presupuesto = document.querySelector("#presupuesto");
presupuesto.style.backgroundColor = "blueviolet";

/*////// PRESUPUESTO //////*/
/*////// Producto //////*/
var presupuesto = document.querySelector("#pres");
var producto = document.querySelector("#producto");
var plazo = document.querySelector("#plazo");
function presValor(){


    if(producto.value == 'digital'){

        presupuesto.value = 8.99 + ' €';
       
    }
    else if(producto.value == 'fisico'){

        presupuesto.value = 12.99 + ' €';
        
    }
}


producto.addEventListener("click", function(){

    presValor();
})

/*////// Descuento Plazo //////*/
function sumar(){

    for(i=1; i <=12; i++){

        if(plazo.value == i){

            presupuesto.value = parseFloat(presupuesto.value) / 1.01 + ' €'; 
        }
    }
}

plazo.addEventListener("change",sumar);

/*////// Extra //////*/
var algo = document.getElementById("calidad");
var poster = document.getElementById("poster");
var personalizar = document.getElementById("personalizar");
var contador = 0;

algo.addEventListener("click", mas);
poster.addEventListener("click", mas);
personalizar.addEventListener("click", mas);


function mas(e){

    hola = e.target;
    console.log(hola.className)
    if(hola.className == ''){

        hola.classList.add('masIete');
        hola.classList.remove('menosIete');
        presupuesto.value = parseFloat(presupuesto.value) + 7 + ' €'; 
    }
    else if(hola.className == 'masIete'){

        hola.classList.remove('masIete');
        hola.classList.add('menosIete');
        presupuesto.value = parseFloat(presupuesto.value) - 7 + ' €'; 
    }
    else{

        hola.classList.add('masIete');
        hola.classList.remove('menosIete');
        presupuesto.value = parseFloat(presupuesto.value) + 7 + ' €'; 
    }
}

/*////// Extra //////*/
var enviar = document.querySelector("#enviar");

function validarNombre(){

    nombre = document.querySelector("#nombre").value;
    reName =/^[a-zA-Z]{1,15}$/;
    if(reName.exec(nombre)){
        document.querySelector("#nombre").classList.add("valido");
        document.querySelector("#nombre").classList.remove("invalido");
        enviar.disabled = false;
    }
    else{
        document.querySelector("#nombre").classList.add("invalido");
        document.querySelector("#nombre").classList.remove("valido");
        enviar.disabled = true;
    }
}

function validarApellido(){

    apellido = document.querySelector("#apellido").value;
    reApell = /^[a-zA-Z]{1,40}$/;
    if(reApell.exec(apellido)){
        document.querySelector("#apellido").classList.add("valido");
        document.querySelector("#apellido").classList.remove("invalido");
        enviar.disabled = false;
    }
    else{
        document.querySelector("#apellido").classList.add("invalido");
        document.querySelector("#apellido").classList.remove("valido");
        enviar.disabled = true;
    }
}

function validarTel(){

    telefono = document.querySelector("#telefono").value;
    reTelef = /^[0-9]{1,9}$/;
    if(reTelef.exec(telefono)){
        document.querySelector("#telefono").classList.add("valido");
        document.querySelector("#telefono").classList.remove("invalido");
        enviar.disabled = false;
    }
    else{
        document.querySelector("#telefono").classList.add("invalido");
        document.querySelector("#telefono").classList.remove("valido");
        enviar.disabled = true;
    }
}

function validarEmail(){

    email = document.querySelector("#email").value;
    reEmail = /^[a-zA-Z0-9]{1,15}[@]{1}(gmail)[\.]{1}(com|es)$/;

    if(reEmail.exec(email)){
        document.querySelector("#email").classList.add("valido");
        document.querySelector("#email").classList.remove("invalido");
        enviar.disabled = false;
    }
    else{
        document.querySelector("#email").classList.add("invalido");
        document.querySelector("#email").classList.remove("valido");
        enviar.disabled = true;
    }
}

var politica = document.querySelector("#politica");

function politiCheck(){

    if(politica.className == ''){

        politica.classList.add('valido');
        politica.classList.remove('invalido');
    }
    else if(politica.className == 'valido'){

        politica.classList.remove('valido');
        politica.classList.add('invalido');
    }
    else{

        politica.classList.add('valido');
        politica.classList.remove('invalido');
    }
}

politica.addEventListener("input", politiCheck);
document.querySelector("#nombre").addEventListener('input', validarNombre);
document.querySelector("#apellido").addEventListener('input', validarApellido);
document.querySelector("#telefono").addEventListener('input', validarTel);
document.querySelector("#email").addEventListener('input', validarEmail);

enviar.addEventListener("click", function(){

    validarNombre();
    validarApellido();
    validarTel();
    validarEmail();
    politiCheck();

    if(document.querySelector("#nombre").classList.contains('valido') && document.querySelector("#apellido").classList.contains('valido') && document.querySelector("#telefono").classList.contains('valido') && document.querySelector("#email").classList.contains('valido') && plazo.value != '' && presupuesto.value !='' && politica.checked){
        alert('El formulario se ha entregado correctamente');
        enviar.disabled = false;
    }
    else{
        alert('Ha habido algún fallo al rellenar el formulario');
        enviar.disabled = false;
    }
});

