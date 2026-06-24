// Ejercicio 19



/* Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato (también podéis crear uno nuevo con solo los que NO incluyan esa palabra).

Recuerda usar la función .includes() para comprobar la palabra. */

//Puedes usar este array:
const toys = [
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'LEGO'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

function removeToys(pList){

    // Creo un nuevo array para los juguetes que NO incluyan la palabra gato
    const toysNoCat = [];

    // Recorrer todos los juguetes ...
    for(const element of pList){

        // los juguetes que NO incluyen la palabra gato ...
        if(!element.name.includes('gato')){

            // ... los añado al nuevo array(return)
            toysNoCat.push(element);
        }
    }
    return toysNoCat;
}


// PRUEBA:
console.log("Los juguetes que NO incluyen la palabra ´gato´ son: ", removeToys(toys)); /*  [
                        { id: 5, name: 'Transformers' },
                        { id: 11, name: 'LEGO' },
                        { id: 23, name: 'Hot Wheels' },
                        { id: 60, name: 'Nerf Blaster' }
                       ] */ 