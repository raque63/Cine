document.addEventListener("DOMContentLoaded",loaded);

var fechas;
var peliculas;
var consecutivo;
var compraA;
async function loaded(event) {
    try{
        await loadDates();
        render_Dates();
    } catch(error){return;}
    try{ render_menu();} catch(error){return;}
    document.querySelector('.close-btn').addEventListener('click', function() {
        document.getElementById('pop-upContainer').style.display = 'none';
    });
    document.querySelector('.close-btn1').addEventListener('click', function() {
        document.getElementById('pop-upContainer2').style.display = 'none';
    });
    if (!localStorage.getItem('currentInvoiceNumber')) {
        localStorage.setItem('currentInvoiceNumber', 1000);
    }
}

function render_Dates(){
    var ul=document.getElementById('menu-fechas');
    fechas.forEach(function (d){
        li(ul,d);
    });
}
function li(ul,date){
    let f=document.createElement('li');
    let a=document.createElement('a');
    a.text=date;
    a.addEventListener('click', function() {
        let selectedElements = ul.getElementsByClassName('selected');
        Array.from(selectedElements).forEach(function (element) {
            element.classList.remove('selected');
        });
        render_day(date);
        f.className='selected';
    });
    f.appendChild(a);
    ul.appendChild(f);
}
async function render_day(date){
    let request = new Request(backend + 'peliculas/' + 'byFecha/'+ `${date}`, {method: 'GET'});
    const response = await fetch(request);
    if (response.ok) {
        peliculas = await response.json();
        let space=document.getElementById('movies');
        space.innerHTML = '';
        peliculas.forEach(function (p){
           show_movie(space,p);
        });
    } else {
        errorMessage(response.status);
    }
}
function show_movie(space,movie){
    let divPrin=document.createElement('div');
    divPrin.className='movies';
    let div= document.createElement('div');
    div.className='movie-container';
    let m=document.createElement('span');
    let dNam=document.createElement('div');
    dNam.className='name-container';
    let img=document.createElement('img');
    img.src="../../images/"+movie.id+".jpg";
    img.className='movie-picture';

    m.textContent=movie.name;
    m.className='item-name';
    let score=document.createElement('span');
    score.textContent=movie.type;
    score.className='item-genero';
    let rest=document.createElement('span');
    rest.textContent=movie.restriction;
    rest.className='item';

    let dTandas=document.createElement('div');
    dTandas.className='tandas-container';
    let form=document.createElement('span');
    form.className='item-format';
    form.textContent=movie.format;
    dTandas.appendChild(form);
    movie.tandas.forEach(function (t){
       let tanda=document.createElement('span');
       tanda.textContent=t.hour;
       tanda.className='item-tanda';
       dTandas.appendChild(tanda);
       tanda.addEventListener('click',e=>compra(movie,t));
    });


    dNam.appendChild(m);
    dNam.appendChild(score);
    dNam.appendChild(rest);
    div.appendChild(img);
    divPrin.appendChild(dNam);
    divPrin.appendChild(dTandas);
    div.appendChild(divPrin);
    space.appendChild(div);
}
async function loadDates() {
    let request = new Request(backend + 'peliculas/' + 'fechas', {method: 'GET'});
    const response = await fetch(request);
    if (response.ok) {
        fechas = await response.json();
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


    document.getElementById('pop-upContainer').style.display = 'none';
    document.getElementById('pop-upContainer2').style.display = 'flex';
}
function compra(movie,tanda){
    let pop_up=document.getElementById('pop');
    let div_container=document.getElementById('movie-details');
    div_container.innerHTML=' ';
    var boton = document.getElementById('pagar');
    if (boton) {
        boton.remove();
    }
    div_container.className='movie-details';
    let divM=document.createElement('div') ;
    let divI=document.createElement('div');
    let bN=document.createElement('b');
    bN.textContent='Pelicula: ';
    let bF=document.createElement('b');
    bF.textContent='Fecha: ';
    let bH=document.createElement('b');
    bH.textContent='Horario: ';
    let name=document.createElement('span');
    name.textContent=movie.name;
    let fecha=document.createElement('span');
    fecha.textContent=tanda.date;
    let hora=document.createElement('span');
    hora.textContent=tanda.hour;
    let img=document.createElement('img');
    img.src="../../images/"+movie.id+".jpg";
    img.className='movie-picture';
    let pay=document.createElement('button');
    pay.textContent='Pagar';
    pay.id='pagar';
    pay.addEventListener('click',e=>finalizarCompra(tanda,movie));

    divI.appendChild(img);
    divM.appendChild(bN);
    divM.appendChild(name);
    divM.appendChild(document.createElement('br'));
    divM.appendChild(bF);
    divM.appendChild(fecha);
    divM.appendChild(document.createElement('br'));
    divM.appendChild(bH);
    divM.appendChild(hora);
    div_container.appendChild(divM);
    div_container.appendChild(divI);
    pop_up.appendChild(pay);
    document.getElementById('pop-upContainer').style.display = 'flex';
}
async function finalizarCompra(tanda,movie){
    if(validate()){
        loadPurchase(tanda,movie);
        pagar();
    }
}
function pagar() {
    console.log(compraA);
    let request=new Request(backend+'compras', {method:'POST',
        headers:{'CONTENT-Type': 'application/json'},
        body: JSON.stringify(compraA)});
    (async ()=>{
        const response= await fetch(request);
        if(!response.ok){errorMessage (response.status); return;}
        document.getElementById('pop-upContainer').style.display = 'none';
        tiqueteCompra();
    })();
}
function loadPurchase(tandaAux,movie){
    compraA={
        numeroTiquete:getNextInvoiceNumber().toString(),
        cedulaC:document.getElementById('cedula').value,
        nombreC:document.getElementById('nombre').value,
        numTarjeta:document.getElementById('tarjeta').value,
        tanda: {
            id:tandaAux.id,
            pelicula: movie,
            date:tandaAux.date,
            hour:tandaAux.hour,
            room:tandaAux.room
        },
        canBoletos:document.getElementById('boletos').value,
        canBoletosEspeciales:document.getElementById('boletos-Es').value
    }
}
function getNextInvoiceNumber() {
    let currentInvoiceNumber = parseInt(localStorage.getItem('currentInvoiceNumber'), 10);
    localStorage.setItem('currentInvoiceNumber', currentInvoiceNumber + 1);
    return currentInvoiceNumber;
}
function validate(){
    let inputs=[
        document.getElementById('boletos'),
        document.getElementById('boletos-Es'),
        document.getElementById('cedula'),
        document.getElementById('nombre'),
        document.getElementById('tarjeta')
    ]

    // Verificar campos de nombre, cédula y tarjeta
    let nombre = inputs[3];
    let cedula = inputs[2];
    let tarjeta = inputs[4];

    let valid = true;


    if (nombre.value.trim().length===0) {
        valid = false;
        document.getElementById('nombre').style.borderColor = 'red';
    } else {
        document.getElementById('nombre').style.borderColor = '';
    }

    if (cedula.value.trim().length===0) {
        valid = false;
        document.getElementById('cedula').style.borderColor = 'red';
    } else {
        document.getElementById('cedula').style.borderColor = '';
    }

    if (tarjeta.value.trim().length===0) {
        valid = false;
        document.getElementById('tarjeta').style.borderColor = 'red';
    } else {
        document.getElementById('tarjeta').style.borderColor = '';
    }

    return valid;
}