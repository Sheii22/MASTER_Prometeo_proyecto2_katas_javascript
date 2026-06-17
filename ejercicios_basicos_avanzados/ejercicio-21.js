// Ejercicio 21



/* Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:". */

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

/* Bucle for:
   + let i = 0  ......inicializo el índice que recorrerá el array
   + i < users.length  ......le digo al bucle for que recorra el array 
                                 hasta la longitud de éste
   + i++  ......que el índice avance una posición del array en cada
                    vuelta */
for(let i = 0; i < users.length; i++){

    /* Imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" */
    if(users[i].years < 18){

        console.log("Usuarios menores de edad:" + users[i].name);
    }

    /* Imprimir a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:" */
    if(users[i].years >= 18){

        console.log("Usuarios mayores de edad:" + users[i].name);
    }
}