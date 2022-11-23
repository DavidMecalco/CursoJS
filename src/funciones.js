//Sentencias para generar diferentes acciones
//Las funciones e sun conjunto de tareas en JS

//Existen dos tipos de funciones

//1.- Declarativa
function miFuncion(){
    return 3;
}

//Mandar llamar una función declarativa
miFuncion();

//2.- Expresión
var a = 5;
var b = 6;

var otraFuncion = function(a, b){
    return a + b;
}

//Llamar una función Expresiva
otraFuncion(5, 2);

//Imprimir en la consola del navegador
function saludar(estudiante){
    console.log(estudiante);
}

saludar("Diego");

//Concatenar una varibale en cosola
function concatenarSaludo(estudiante){
    console.log('Hola ${estudiante}');
}

concatenarSaludo("David");