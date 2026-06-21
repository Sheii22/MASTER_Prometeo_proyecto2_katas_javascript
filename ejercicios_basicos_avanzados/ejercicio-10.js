// Ejercicio 10



/* Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función. */

// Puedes usar este array para probarla:
const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {

  // Calcular promedio:

  let suma = 0;
  let resultado = 0; 

  /* 1.(paso 1) Sumar todos los elementos del Array.
    Para ello, recorremos el array: */
  for(const element of numberList){

    suma = suma + element;
  }

  // 2.(paso 2) Dividir la suma entre la cantidad de datos:
  resultado = suma / numberList.length;

  return resultado;
}


// PRUEBA:

console.log("El resultado del promedio es: " 
                     + average(numbers)); // 23.428571428571427
