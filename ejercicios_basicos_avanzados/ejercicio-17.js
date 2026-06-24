// Ejercicio 17



/* For...in: Usa un for...in para imprimir por consola los datos del alienígena.

Debería tener este formato cada uno de los console.log: "La propiedad ____ tiene cómo valor: ____" */

//Puedes usar este objeto:
const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

function dataAlien(pObject){

    /* Bucle for...in: enfocadodos a "recorrer" objetos(teniendo dicho objeto ciertas propiedades) */
    for(const key in pObject){

        // Imprimir por consola los datos del alienígena.
        console.log("La propiedad " + key 
            + " tiene cómo valor: " + pObject[key]);
    }
}


// PRUEBA:

console.log("los datos del alienígena son: "); 
dataAlien(alien);  /*  La propiedad name tiene cómo valor: Xenomorph
                       La propiedad species tiene cómo valor: Xenomorph XX121
                       La propiedad origin tiene cómo valor: Unknown
                       La propiedad weight tiene cómo valor: 180  */ 
           
    