let listaAmigosIngresados = [];

function agregarAmigo() {    
    
    //Capturar el valor del campo de entrada

    let nuevoAmigo = document.getElementById('amigo').value;
    
    
    //Validar la entrada

    if (nuevoAmigo === '') {
        alert('Por favor, ingrese un nombre.');
    } else {
        //Actualizar el array de amigos        
        listaAmigosIngresados.push(nuevoAmigo);

        actualizarListaAmigos();        

        //Limpiar el campo de entrada
        limpiarCaja();

    }
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < listaAmigosIngresados.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigosIngresados[i];
        listaAmigos.appendChild(li);
    }    
}

/* function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    let li = document.createElement("li");

    li.textContent = listaAmigosIngresados[listaAmigosIngresados.length -1];
    listaAmigos.appendChild(li);
} */

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    
    let indiceAmigoSorteado =  Math.floor(Math.random()*listaAmigosIngresados.length);
    document.getElementById('resultado').innerHTML = 'El amigo secreto sorteado es: ' + listaAmigosIngresados[indiceAmigoSorteado];
    
}

function reiniciarJuego() {
    listaAmigosIngresados = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';

}