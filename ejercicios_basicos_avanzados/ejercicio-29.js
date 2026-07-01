// Ejercicio 29



/* Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

Utiliza bucles para lograrlo e imprime el objeto final por consola. */

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

function groupMoviesByDecade(pMovies){

    // Creo un objeto para agrupar las películas
    const moviesGroupByDecade = {};
      // const moviesGroupByDecade = {  decade: [ array de películas ]  }


    // Recorrer la lista de películas:
    for(const element of pMovies){

        /* Calcular la década de la película actual:
        Pasos:
         1. Dividir entre 10:  /10
         2. Eliminar los decimales:  Math.floor()
         3. Multiplicar por 10:   * 10
        */
        const decade = Math.floor(element.releaseYear / 10) * 10;


        // Si la década aún no existe en el objeto ... 
        if(!moviesGroupByDecade[decade]){
            
            // ... la creo
            moviesGroupByDecade[decade] = [];
        }

        // Añado la película a la década:
        moviesGroupByDecade[decade].push(element);
    }
    /* Devuelvo el objeto con las películas agrupadas, para posteriormente imprimirlo por consola */
    return moviesGroupByDecade;
}


// PRUEBA:

console.log(groupMoviesByDecade(starWarsMovies)); 
/* 
{
  '1970': [ { title: 'A New Hope', releaseYear: 1977 } ],
  '1980': [
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 }
  ],
  '1990': [ { title: 'The Phantom Menace', releaseYear: 1999 } ],
  '2000': [
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 }
  ],
  '2010': [
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
  ]
}
*/ 