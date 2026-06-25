// Ejercicio 25



/* Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.

Imprime ambos conteos por consola. */

const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

                    // Dada una lista de películas,
function moviesReleaseYear(pMovies){

   // Creo 2 variables para contar ambos conteos:
   let contBefore2000 = 0;
   let contAfter2000 = 0;

   // utilizando un bucle.
   for(const element of pMovies){
       
        // Películas antes del año 2000
        if(element.releaseYear < 2000){
            
            contBefore2000++;
        }
        /* Películas posteriores al año 2000: 
        element.releaseYear >= 2000*/ 
        else{

            contAfter2000++;
        }
   }
   // Imprime ambos conteos por consola.
   console.log("Las películas antes del año 2000 son: ", contBefore2000);
   console.log("Las películas posteriores al año 2000 son: ", contAfter2000);
  
}


// PRUEBA:

moviesReleaseYear(movies);
/*
Las películas antes del año 2000 son:  7
Las películas posteriores al año 2000 son:  3
*/ 