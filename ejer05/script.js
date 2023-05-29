/*El programa “elige” un número al azar entre uno y un millón y pregunta por el mismo. El visitante intenta acertar en una ventana emergente. Tras cada respuesta, una nueva ventana dice “el número es Mayor” o “el número es Menor” y se pide un nuevo número, hasta que el usuario lo acierta. En ese momento una ventana lo felicita y muestra el número de intentos que ha realizado hasta el acierto.*/

let numAleatorio = Math.floor(Math.random() * 1000000) + 1;
let contador = 0;

function myFuncion() {
       
    let numero = -1;
  
    console.log(numAleatorio);
  
      numero = parseInt(document.getElementById('numero').value);
  
      if (numero < 0) {
        alert("Ingrese valores positivos");
        contador++;
        return;
      }
      contador++;
  
      if (numero < numAleatorio) {
        alert("El número a buscar es MAYOR al ingresado");
      } else if (numero > numAleatorio) {
        alert("El número a buscar es MENOR al ingresado");
      } else {
        alert("¡FELICITACIONES! HA ENCONTRADO EL NÚMERO en: " + contador + " intentos!");
        }
        return;
    
  }
  

