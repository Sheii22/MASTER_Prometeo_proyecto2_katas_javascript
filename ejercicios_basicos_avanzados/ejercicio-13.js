// Ejercicio 13



/* Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false. */

//Puedes usar este array para probar tu función: 
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, name) {
  
    // 1. Recorrer el array
    for(let i = 0; i < nameList.length; i++){
        
        // 2. Si existe el elemento ...
        if(nameList[i] === name){

            // 3. ... nos devuelve un true y la posición de dicho elemento.
            return { exist: true,  position: i };
            /* Devuelvo un objeto para no mezclar booleanos con números en el return. De lo contrario, true se convertiría en 1 y me lo sumaría a la posición xD  */
        }
    }
    // 2. Si NO existe el elemento ...

    // 3. ... nos devuelve un false.
    return { exist: false };
}


// PRUEBAS:

console.log("Buscador de nombres: ", nameFinder(names, 'Peter')); 
// Buscador de nombres:  { exist: true, position: 0 }

console.log("Buscador de nombres: ", nameFinder(names, 'Sarah')); 
// Buscador de nombres:  { exist: false }
                    
console.log("Buscador de nombres: ", nameFinder(names, 'Marc')); 
// Buscador de nombres:  { exist: true, position: 10 }




/* Nota para mí: utilizo "," en lugar de: "+" en el console.log,
para que JavaScript, al concatenar string + object, no me convierta el objeto en string: [object Object] */