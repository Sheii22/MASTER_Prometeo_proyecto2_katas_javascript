// Ejercicio 32



/* Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo. 

Utiliza este array para probar tu función. */
const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {

    // Creo un objeto para guardar el miembro más antiguo
    let oldestMember = xMen[0];
                    // Inicializo el objeto con el primer elemento del array

    // Recorrer el array de objetos
    for(const element of xMen){

        // Si el X-Men actual es más antiguo ...
        if(element.year < oldestMember.year){

            // ... lo guardo como el miembro más antiguo
            oldestMember = element;
        }
    }
    // Devuelvo el nombre del miembro más antiguo
    return oldestMember.name; 
}


// PRUEBA:

console.log("El miembro más antiguo de los X-Men es: ", 
             findOldestXMen(xMen)); // Cyclops