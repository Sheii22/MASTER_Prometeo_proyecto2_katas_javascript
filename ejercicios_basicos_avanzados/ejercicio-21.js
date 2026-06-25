// Ejercicio 21

/* Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:". */

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

function minorOrAdult(pUsers){

    //Creo un array para guardar los nombres de los usuarios menores de edad
    const minorUsers = [];
    //Creo un array para guardar los nombres de los usuarios mayores de edad
    const adultUsers = [];

    // Usa un bucle
    for(const element of pUsers){
        
        // Menor de edad
        if(element.years < 18){

            minorUsers.push(element.name);
        }
        // mayores de edad:  element.years >= 18
        else{

            adultUsers.push(element.name);
        }
    }
    // Si el array con los usuarios menores de edad no está vacío:
    if(!minorUsers.empty){
     
        // Imprimir por consola el nombre de los usuarios
        console.log("Usuarios menores de edad: ", minorUsers);
    }
    // Si el array con los usuarios mayores de edad no está vacío:
    if(!minorUsers.empty){
     
        // Imprimir por consola el nombre de los usuarios
        console.log("Usuarios mayores de edad: ", adultUsers);
    }
}


// PRUEBA:

minorOrAdult(users);
/* Usuarios menores de edad:  [ 'Natasha', 'Khamala' ]
   Usuarios mayores de edad:  [ 'Tony', 'Peter', 'Bruce' ]
   */ 