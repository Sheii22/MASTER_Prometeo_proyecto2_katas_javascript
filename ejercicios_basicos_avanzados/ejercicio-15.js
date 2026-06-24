// Ejercicio 15



/* Includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".

Usa la función .includes de javascript. */

const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

function includes(pArray){

    // Bucle: recorrer el array
    for(const element of pArray){

        /* array.includes(); -> Me va a indicar si algo existe o se incluye en el array que compruebe */

        // Si el valor actual del array incluye la palabra "Camiseta" ...
        if(element.includes("Camiseta") ==  true){

            // ... lo muestra por consola
            console.log(element);
        }
    }      
}


// PRUEBA:

console.log("Valores que incluyen la palabra <Camiseta>: "); 
includes(products);  /* Camiseta de Metallica
                        Camiseta de Basket
                        AC/DC Camiseta*/ 
    