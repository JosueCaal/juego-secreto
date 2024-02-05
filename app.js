let numeroMaximo=10;
//lista para almacenar los numeros si ya fue sorteado
let listaNumerosSorteados =[];
//la siguiente variable almacena lo que retorna(return) la funcion
//numeroAleatorio.
let numeroSecreto = numeroAleatorio();
//variable de contador
let intento = 1;
console.log(numeroSecreto);



//funcion del botón intentar
function verificarIntento(){
    //almacena en la variable el valor ingresado por el usuario
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intento);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intento} ${(intento===1)?'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('Disabled');
    }else{
        //EL YSUARIO NO ACERTO
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número es menor');
        }else{
            asignarTextoElemento('p','El número es mayor');
        }
    }
        
        intento++;
        limpiarCaja();
    return; 

}

function limpiarCaja(){
    let valorCaja=document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

//funcion para asignar el texto a los elementos del HTML
function asignarTextoElemento(elemento,texto){
//SELECTORES
//esto se vuelve objeto
let elementoHtml = document.querySelector(elemento);
elementoHtml.innerHTML = texto;
return;
}
function mensajesIniciale(){
    //mensajes que se muestran al recargar la pagina
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`indica un número del 1 al ${numeroMaximo} !!`);
}

//espacio para ejecutar las funciones y enviar los datos de los parametros.
mensajesIniciale();


function numeroAleatorio(){
   //almacenamos en la variable el  numero aleatorio
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //validamos si el tamaño del arreglo es igual al numero maximo de intentos
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se llego al número maxio de sorteos');
    }else{
        //si el numero generado esta incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){

            //colocamos return para que sea devuelto el valor de la funcion
            return numeroAleatorio();

        }else{
            //enviamos el número a la lista
            listaNumerosSorteados.push(numeroGenerado);
            //se retorna el numeroGenerado para que se pueda utilizar para
            //jugar ya que no ha sido utilizado (no pertenece a la lista)
            return numeroGenerado;
        }
    }
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de reinicio
    mensajesIniciale();
    //generar número aleatorio
    numeroSecreto = numeroAleatorio();
    //inicializar el numero de intentos.
    intento = 1;
    //deshabilitar el botón de nuevo juego
    //usamos la misma logica de habilitar solo que en esta caso
    //utilizamos setAttribute y le damos dos paramatros.
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
