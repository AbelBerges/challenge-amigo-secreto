// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let ingresoNom = document.getElementById('amigo');
let resultadoNom = document.getElementById('resultado');
let cantidad;
let vaciar = ""
let elegido = 0;
function agregarAmigo(){
    let entradaNombre = '';
    entradaNombre = document.getElementById('amigo').value;
    let mayus = entradaNombre.toUpperCase();
    let elemento = document.createElement('div');
    let testigo = '';
    //console.log('El valor de nombre ' + entradaNombre);
    if (entradaNombre == ''){
        alert('El nombre no puede estar vacío');
    } else {
        if (listaAmigos.length == 0 ) {
            resultadoNom.innerHTML = '';
            listaAmigos.push(mayus);
            elemento.innerHTML = `<span>${mayus}`;
            resultadoNom.appendChild(elemento);
        } else {
            for (let index = 0; index < listaAmigos.length; index++) {
                if(mayus == listaAmigos[index]){
                    testigo = listaAmigos[index];
                }
            }
            if(testigo == ''){
                listaAmigos.push(mayus);
                elemento.innerHTML = `<span>${mayus}`;
                resultadoNom.appendChild(elemento);
            } else {
                alert(`El amigo/a ${mayus} ya fue añadido/a`);
            }
        }
    }
}

function sortearAmigo(){
    cantidad = listaAmigos.length;
    if(listaAmigos.length < 1){
        alert('Debe ingresar por lo menos dos amigos');
    } else {
        elegido = parseInt((Math.random() * cantidad));
        console.log(elegido);
        for(let i = 0; i < listaAmigos.length;i++){
            console.log(listaAmigos[i]);
            if (i == elegido){
                resultadoNom.innerHTML = `El amigo elegido es ${listaAmigos[i]}`;
            }
        }
    }
    listaAmigos = [];
    ingresoNom.value = vaciar;
}

function reiniciar(){
    listaAmigos = [];
    resultadoNom.innerHTML = "";
    ingresoNom.value = vaciar;
}
