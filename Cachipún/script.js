// math.random me genera la jugada automatica de computadora y le indico el minimo y maximo
function computadora(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

// indico los valores de cada jugada
var piedra = 0;
var papel = 1;
var tijera = 2;
var opciones = ["Piedra", "Papel", "Tijera"];


// cantidad de veces que desea jugar
var n_juegos = window.prompt('Ingrese cantidad de veces que desea jugar.');
const n_juegos_int = parseInt(n_juegos);


// el usuario ingresa valor y computadora se le indica que escoge numero entre 0 y 2
var opcionUsuario;
var opcionComputador = computadora(0,2);   

// se pide que elija al usuario y se muestran las elecciones
opcionUsuario = prompt("ELIGE: \nPiedra: 0\nPapel: 1\nTijera: 2", 0);
alert(" Tu opción fue " + opciones[opcionUsuario]);
alert("Mi opcion fue " + opciones[opcionComputador]);

document.write(" <h1>Gracias por jugar conmigo !!!</h1>");


// se ocupa el operador de igualdad == para los posibles resultados en las 3 elecciones, si la condicion cumple se ejecuta if en caso contrario else
if(opcionUsuario == piedra)
{
    if(opcionComputador == piedra)
    {
        alert("¡EMPATE!");
    }
    else if(opcionComputador == papel)
    {
        alert("¡PERDISTE! ");
    }
    else if(opcionComputador == tijera)
    {
        alert("¡GANASTE!");
    }
}
else if(opcionUsuario == papel)
{
    if(opcionComputador == piedra)
    {
        alert("¡GANASTE!");
    }
    else if(opcionComputador == papel)
    {
        alert("¡EMPATE!");
    }
    else if(opcionComputador == tijera)
    {
        alert("¡PERDISTE!");
    }
}
else if(opcionUsuario == tijera)
{
    if(opcionComputador == piedra)
    {
        alert("¡PERDISTE!");
    }
    else if(opcionComputador == papel)
    {
        alert("¡GANASTE!");
    }
    else if(opcionComputador == tijera)
    {
        alert("¡EMPATE!");
    }
}