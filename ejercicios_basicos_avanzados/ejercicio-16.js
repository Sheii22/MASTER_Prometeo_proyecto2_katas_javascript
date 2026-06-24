// Ejercicio 16



/* For...of: Usa un bucle forof para recorrer todos los destinos del array.
Imprime en un console.log cada uno de sus valores. */

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

function showValues(pList){

    // Usa un bucle forof para recorrer todos los destinos del array.
    for(const element of pList){

        // Imprime en un console.log cada uno de sus valores.
        console.log(element);
    }
}


// PRUEBA:

console.log("Los valores del array son: "); 
showValues(placesToTravel);  /* Japon
                                Venecia
                                Murcia
                                Santander
                                Filipinas
                                Madagascar */ 
                        