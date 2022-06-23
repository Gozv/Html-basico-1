// Variables
let operandoA;
let operandoB;
let operacion;
let resultado;

// Pantalla de calculadora
let display = document.getElementById("letras");

// Numeros de pantalla
function addNumDisplay(numberText) {
   display.innerText += numberText;
}

// Reset de display
function cleanDisplay() {
   display.innerText = ''; 
}

// Funcion para operar
function addValues(valor1, valor2) {
   resultado = valor1 + valor2
   return resultado
 }
 
 function substractValues(valor1, valor2) {
   resultado = valor1 - valor2
   return resultado
 }
 
 function multValues(valor1, valor2) {
   resultado = valor1 * valor2
   return resultado
 }
 
 function divValues(valor1, valor2) {
   resultado = valor1 / valor2
   return resultado
 }
 
 // Le agregamos la funcionalidad a cada boton dependiendo de la operacion
 function sumar() {
   operandoA = parseFloat(display.innerText);
   operacion = "+";
   display.innerText += "+";
   cleanDisplay()
 }
 
 function restar() {
   operandoA = parseFloat(display.innerText);
   operacion = "-";
   display.innerText += "-";
   cleanDisplay()
 }
 
 function multiplicar() {
   operandoA = parseFloat(display.innerText);
   operacion = "*";
   display.innerText += "*";
   cleanDisplay()
 }
 
 function dividir() {
   operandoA = parseFloat(display.innerText);
   operacion = "/";
   display.innerText += "/";
   cleanDisplay()
 }
 
 // Creacion del Operando B y aplicacion del resultado final segun el simbolo 
 function operandoB_mas_resultado_final() {
   operandoB = parseFloat(display.innerText)
 
   switch (operacion) {
     case "+":
       addValues(operandoA,operandoB);
       break;
     case "-":
       substractValues(operandoA,operandoB);
       break;
     case "*":
       multValues(operandoA,operandoB);
       break;
     case "/":
       divValues(operandoA,operandoB);
       break;
   }
 
   display.innerText = resultado;
 }