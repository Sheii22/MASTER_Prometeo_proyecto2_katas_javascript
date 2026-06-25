// Ejercicio 23



/* Usa un bucle para crear 3 arrays de películas filtrados por categorías.

Película pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y película grande -> más de 200 minutos.

Imprime cada array por consola. */

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

function movieCategory(pMovies){
        
    // Crear 3 arrays de películas filtrados por categorías.
    const smallMovie = [];
    const mediumMovie = [];
    const bigMovie = [];

    // Usa un bucle:
    for(const element of pMovies){

        // Película pequeña -> menos de 100 minutos.
        if(element.durationInMinutes < 100){

            smallMovie.push(element);
        } 
        // Película mediana -> más de 100 minutos y menos de 200.
        else if(element.durationInMinutes < 200){

            mediumMovie.push(element);
        } 
        // Película grande -> más de 200 minutos.
        else{

            bigMovie.push(element);
        }
    }
    // Imprime cada array por consola:
    console.log("Películas pequeñas:", smallMovie);
    console.log("Películas medianas:", mediumMovie);
    console.log("Películas grandes:", bigMovie);
}


// PRUEBA:

movieCategory(movies);
/* Películas pequeñas: [ { name: 'Spirited Away', durationInMinutes: 80 } ]

Películas medianas: [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'Terminator', durationInMinutes: 140 },
  { name: 'The Matrix', durationInMinutes: 136 },
  { name: 'Amélie', durationInMinutes: 110 },
  { name: 'Eternal Sunshine of the Spotless Mind',
    durationInMinutes: 108}]
    
Películas grandes: [
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 }
]*/ 