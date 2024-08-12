var backend="http://localhost:8080/";
function render_menu(){
    html=` <div class="encabezado">
    <div class="principal">
    <div class="logoD">
         <img class="logo" src="/images/logo.png">
    </div>
<!--    <span class="letras-encabezado">San Pedro Cinemas</span>-->
    <div>
           <ul class="menu">
                <li> <a id="cartelera" href="#">Cartelera</a></li>
                <li> <a id="tiquete" href="#">Tiquete</a></li>
           </ul>
    </div>
    </div>
    </div>`;
    document.querySelector('#menu').innerHTML = html;
    document.getElementById('cartelera').addEventListener('click',  e => {
        window.location = "/pages/cartelera/view.html";
    });
    document.getElementById('tiquete').addEventListener('click',  e => {
        window.location = "/pages/tiquete/view.html";
    });
}

function errorMessage(status){
    switch(status){
        case 404: error="Registro no encontrado"; break;
        case 409: error="Registro duplicado"; break;
        case 401: error="Usuario no autorizado"; break;
        case 403: error="Usuario no tiene derechos"; break;
    }
    console.log(status);
    window.alert(error);
}