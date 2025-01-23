// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

;
let resultadoNom = document.getElementById('resultado');
let cantidadAmigos = 0;
let elegido = 0;
function agregarAmigo(){
    let entradaNombre = document.getElementById('amigo').value
    let elemento = document.createElement('div');
    //console.log('El valor de nombre ' + entradaNombre);
    if (entradaNombre == ''){
        alert('El nombre no puede estar vacío');
    } else {
        listaAmigos.push(entradaNombre);
        cantidadAmigos++;
        elemento.innerHTML = `<span>${entradaNombre}`;
        resultadoNom.appendChild(elemento);
    }
}

function sortearAmigo(){
    if(cantidadAmigos <= 1){
        alert('Debe ingresar por lo menos dos amigos');
    } else {
        elegido = parseInt((Math.random() * cantidadAmigos) +1);
        for(let i = 0; i < cantidadAmigos;i++){
            if (i == elegido){
                //resultadoNom.remove();
                resultadoNom.innerHTML = `El amigo elegido es ${listaAmigos[i]}`;
            }
        }
    }
}