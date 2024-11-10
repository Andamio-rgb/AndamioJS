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
////// Prueba //////
var contacto = document.querySelector("#contacto");
contacto.style.backgroundColor = "blueviolet";


////// Geolocalizador //////
var options={

    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 0
}
function succes(position){

    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map('mapa',{
        center:[latitude,longitude],
        zoom: 9
    });

    L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'my openstreetmap'}).addTo(map);

    let control = L.Routing.control({
        waypoints:[
            L.latLng(latitude, longitude),
            L.latLng(41.629885, -0.903963)
        ],
        language: 'es',

    }).addTo(map);
}
function error(){
    
    let map = L.map('mapa',{
        center:[41.629885, -0.903963],
        zoom: 14
    });
    L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'my openstreetmap'}).addTo(map);
    L.marker([41.629885, -0.903963]).addTo(map);
}

if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(
        succes,
        error,
        options
    );
}
else{
    alert('Los servicios de geolocalización no están disponibles');
}
