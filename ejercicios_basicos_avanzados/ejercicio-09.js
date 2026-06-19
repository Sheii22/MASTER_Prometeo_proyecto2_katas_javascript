// Ejercicio 9



/* Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array. */

//Puedes usar este array para probar tu función: 
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  
    let suma = 0;

    // Recorrer el array ..........element = numberList[i]
    for( const element of numberList){
      
        suma = suma + element;
    }
    return suma;
}


// PRUEBA:

console.log("El resultado de la suma es: " + sumNumbers(numbers)); // 151