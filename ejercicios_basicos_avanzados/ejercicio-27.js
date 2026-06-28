// Ejercicio 27



/* Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array y guarda su nombre en una variable.

Imprime el nombre por consola. */

const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

function findOldestCartoon(pCartoons){

    /* Creo un objeto "auxiliar"
    para poder comparar los "debut" de los objetos(cartoons) del array
    y poder guardar en él también el nombre de la serie de dibujos animados más antigua*/
    const oldestCartoon = {
        name: "", 
        debut: 0
    };
 
    // Utiliza un bucle(recorrer el array) ...
    for(const element of pCartoons){
        
        // ... para encontrar la serie de dibujos animados más antigua

        /* "CASO BASE": para que funcione, en un primer momento,
        el objeto auxiliar tomará los valores en sus propiedades del primer elemento del array */
        if(oldestCartoon.debut == 0){

            oldestCartoon.debut = element.debut;
            oldestCartoon.name = element.name;

        } 
        /* Si el cartoon actual es más antiguo que el guardado en el objeto auxiliar ... */
        else if(element.debut < oldestCartoon.debut){

            // ... guarda el cartoon actual en el objeto auxiliar
            oldestCartoon.debut = element.debut;
            oldestCartoon.name = element.name;
        }
    }
    /* Devuelve el nombre de la serie de dibujos animados más antigua en el array */
    return oldestCartoon.name;
}


// PRUEBA:

console.log("El nombre de la serie de dibujos animados más antigua es: ", findOldestCartoon(cartoons)); // Mickey Mouse
