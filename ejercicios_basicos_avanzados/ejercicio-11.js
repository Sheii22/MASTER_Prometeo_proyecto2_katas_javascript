// Ejercicio 11



/* Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio. */

// Puedes usar este array para probar tu función:
const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {

  // Calcular promedio mezclado:

  let suma = 0;
  let resultado = 0; 

  /* 1.(paso 1) Sumar los elementos del Array.
    Para ello, recorremos el array: */
  for(const element of list){

       // "Cuando es un valor number . . . 
    if(typeof element === "number"){
       
        // . . . lo sume"
        suma = suma + element;
    }
    else{  // "y de lo contrario(String) . . . 

        // . . . cuente la longitud del string(element.length) y lo sume.""
        suma = suma + element.length;
    }
  }

  // 2.(paso 2) Dividir la suma entre la cantidad de datos:
  resultado = suma / list.length;

  return resultado;
}


// PRUEBA:

console.log("El resultado del promedio mezclado es: " 
                     + averageWord(mixedElements)); // 5.888888888888889
