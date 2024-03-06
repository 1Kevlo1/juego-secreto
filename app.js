
let numeroSecreto = 0;
let numIntentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo = 10;

function condicionesIniciales(){
    asignarTextoElemnto('h1','Juego del numero secreto');
    asignarTextoElemnto('p',`Indica un numero entre 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumAleatorio();
    numIntentos=1;
}

function asignarTextoElemnto(elemento, texto){
    let elemntoHtml=document.querySelector(elemento);
    elemntoHtml.innerHTML=texto;
    return;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensajes iniciales
    //reiniciar numero secreto
    //reinicar num intentos
    condicionesIniciales();
    //desabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemnto('p',`Acertaste el numero en ${numIntentos} ${(numIntentos==1) ? 'Intento' : 'Intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no aserto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemnto('p','El numero secreto es menor');
        }else{
            asignarTextoElemnto('p','El numero secreto es mayor');
        }
        numIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}



function generarNumAleatorio(){
    let numeroGenerado = numeroSecreto=Math.floor(Math.random()*numeroMaximo)+1;
    if(listaNumerosSorteados.length==numeroMaximo){
        
        asignarTextoElemnto('p','Ya se sortearon todos los Numeros Posibles');

    }else{
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumAleatorio();

        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

condicionesIniciales();