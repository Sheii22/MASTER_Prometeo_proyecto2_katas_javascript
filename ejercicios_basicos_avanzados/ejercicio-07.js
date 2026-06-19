// Ejercicio 7



/* Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos. */

function greaterNumber(numberOne , numberTwo) {
  
    if(numberOne > numberTwo){

        console.log("El número más alto es: " + numberOne);

    } else if(numberOne == numberTwo){

        console.log("Ambos números son iguales");

    } else {  // numberOne < numberTwo

        console.log("El número más alto es: " + numberTwo);
    }
}


// PRUEBAS:

greaterNumber(5, 2); // El número más alto es: 5
greaterNumber(5, 5); // Ambos números son iguales
greaterNumber(5, 8); // El número más alto es: 8


