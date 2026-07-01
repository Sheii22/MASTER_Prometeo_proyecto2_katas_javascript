// Ejercicio 33



/* Desarrolla una función que reciba un país por parámetro y devuelva su capital.

Utiliza un objeto para almacenar los países y sus capitales.

La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado. */

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(capitals, country) {
  
    // RECORRER EL OBJETO de capitales para buscar el país(country)
    for (const key in capitals) {

        // Si el país existe en el objeto ...
        if (key === country) {

            // ... devuelve la capital
            return `La capital es: ${capitals[key]}`;
        }
    }
    // Si el país NO existe en el objeto ... devuelve un msg
    return "El país no se encuentra en la lista.";
}


// PRUEBAS:

console.log(getCapital(capitals, 'Spain')); // La capital es: Madrid

console.log(getCapital(capitals, 'Tunisia')); 
// El país no se encuentra en la lista.

console.log(getCapital(capitals, 'Ireland')); // La capital es: Dublin



