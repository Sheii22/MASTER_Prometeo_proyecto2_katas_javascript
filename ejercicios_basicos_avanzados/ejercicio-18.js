// Ejercicio 18



/* Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.

Imprime en un console log el array resultante. */

//Puedes usar este array:
const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

function removeItems(pList){

    /* Usa un bucle for para recorrer todos los destinos del array ...

       ACLARACIÓN: si recorro el array hacia adelante y elimino un elemento, los siguientes se desplazan una posición y puede ser que me salte algún elemento. Por ello, recorro el array de atrás hacia adelante. */
    for(let i = pList.length - 1; i >= 0; i--){

        // ... y elimina los elementos que tengan el id 11 y el id 40.
        if((pList[i].id === 11) || (pList[i].id === 40)){

            pList.splice(i,1);
                   // Elimina desde la posición i, 1 sola posición.
        }
    }
    // Imprime en un console log el array resultante.
    console.log("El array resultante es: ", pList);
}


// PRUEBA:

removeItems(placesToTravel); 
           /* El array resultante es:  [
                { id: 5, name: 'Japan' },
                { id: 23, name: 'Murcia' },
                { id: 44, name: 'Filipinas' },
                { id: 59, name: 'Madagascar' } 
             ] */ 
    