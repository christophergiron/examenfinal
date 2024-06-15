//Esta funcion hace que al darle al boton este agregue el valor de ese boton a nuestro display 
function agregarAlDisplay(value){
    document.getElementById('display').value += value;  
}
//Esta funcion permite tomar los datos en el display y calcular para esto usa el eval y posteriormente ya opera el resultado  
function calcular(){
var expression = document.getElementById('display').value;
//Busca en la cadena en busca de un valor numerico para luego mostrarlo
var result = eval (expression);
document.getElementById('display').value = result;
}
//Esta funcion sirve para el boton C el cual sirve para borrar la informacion acumulada actualmente 
function limpiarDisplay(){
document.getElementById('display').value = '';
}