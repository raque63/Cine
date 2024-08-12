document.addEventListener("DOMContentLoaded",loaded);
var compraA;
async function loaded(event) {
    try{ render_menu();} catch(error){return;}
    document.getElementById('consultar').addEventListener('click',tiquete);
    document.querySelector('.close-btn1').addEventListener('click', function() {
        document.getElementById('pop-upContainer2').style.display = 'none';
    });
}

async function tiquete() {
    let ticket=document.getElementById('ticketNumber').value;
    let request = new Request(backend + 'compras/' + ticket, {method: 'GET'});
    const response = await fetch(request);
    if (response.ok) {
        compraA = await response.json();
        tiqueteCompra();
    } else {
        errorMessage(response.status);
    }
}
function tiqueteCompra(){
    let div_cliente=document.getElementById('costumer-details');
    let div_compra=document.getElementById('compra-details');
    let divPeli=document.getElementById('pelicula');

    div_cliente.innerHTML = '';
    div_compra.innerHTML = '';
    divPeli.innerHTML = '';

    let img=document.createElement('img');
    img.src="../../images/"+compraA.tanda.pelicula.id+".jpg";
    img.className='movie-picture';
    divPeli.appendChild(img);
    let divC=document.createElement('div');
    let bCedula=document.createElement('b');
    bCedula.textContent='Cedula: ';
    let id=document.createElement('span');
    id.textContent=compraA.cedulaC;
    let bCliente=document.createElement('b');
    bCliente.textContent='Cliente: ';
    let nombre=document.createElement('span');
    nombre.textContent=compraA.nombreC;

    divC.appendChild(bCedula);
    divC.appendChild(id);
    divC.appendChild(document.createElement('br'));
    divC.appendChild(bCliente);
    divC.appendChild(nombre);
    divC.appendChild(document.createElement('br'));
    div_cliente.appendChild(divC);

    let divCo=document.createElement('div');
    let bPelicula=document.createElement('b');
    bPelicula.textContent='Pelicula: ';
    let pelicula=document.createElement('span');
    pelicula.textContent=compraA.tanda.pelicula.id;
    let bFecha=document.createElement('b');
    bFecha.textContent='Fecha: ';
    let fecha=document.createElement('span');
    fecha.textContent=compraA.tanda.date;
    let bHora=document.createElement('b');
    bHora.textContent='Horario: ';
    let hora=document.createElement('span');
    hora.textContent=compraA.tanda.hour;
    let BR=document.createElement('b');
    BR.textContent='Boletos Regulares: ';
    let boletos=document.createElement('span');
    boletos.textContent=compraA.canBoletos;
    let bbA=document.createElement('b');
    bbA.textContent='Boletos especiales: ';
    let boletosE=document.createElement('span');
    boletosE.textContent=compraA.canBoletosEspeciales;
    let btiquete=document.createElement('b');
    btiquete.textContent='Tiquete: ';
    let tiquete=document.createElement('span');
    tiquete.textContent=compraA.numeroTiquete;

    divCo.appendChild(bPelicula);
    divCo.appendChild(pelicula);
    divCo.appendChild(document.createElement('br'));
    divCo.appendChild(bFecha);
    divCo.appendChild(fecha);
    divCo.appendChild(document.createElement('br'));
    divCo.appendChild(bHora);
    divCo.appendChild(hora);
    divCo.appendChild(document.createElement('br'));
    divCo.appendChild(BR);
    divCo.appendChild(boletos);
    divCo.appendChild(document.createElement('br'));
    divCo.appendChild(bbA);
    divCo.appendChild(boletosE);
    divCo.appendChild(document.createElement('br'));
    divCo.appendChild(btiquete);
    divCo.appendChild(tiquete);
    div_compra.appendChild(divCo);


    document.getElementById('pop-upContainer2').style.display = 'flex';
}