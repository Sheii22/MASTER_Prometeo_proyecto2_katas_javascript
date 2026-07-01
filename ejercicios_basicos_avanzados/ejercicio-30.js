// Ejercicio 30



/* Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.

Utiliza bucles para estructurar este objeto e imprime el resultado por consola. */

const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];
                          // Dada una lista de canciones
function groupTracksByGenre(pTracks){
    
    // Creo un objeto para agrupar las canciones
    const tracksGroupByGenre = {};
      // const tracksGroupByGenre = {  genre: [ arrays de canciones ]  }

    // Recorrer las canciones
    for(const element of pTracks){

        // Si el género aún no existe en el objeto ... 
        if(!tracksGroupByGenre[element.genre]){

            // ... lo creo
            tracksGroupByGenre[element.genre] = [];
        }

        // Añado la canción al género:
        tracksGroupByGenre[element.genre].push(element);
    }
    /* Devuelvo el objeto con las canciones agrupadas, para posteriormente imprimirlo por consola */
    return tracksGroupByGenre;
}


// PRUEBA:

console.log(groupTracksByGenre(tracks)); 
/* 
{
  Metal: [ { title: 'Enter Sandman', genre: 'Metal' } ],
  Rock: [
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
  ],
  Pop: [
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Bad Guy', genre: 'Pop' }
  ],
  Country: [ { title: 'Old Town Road', genre: 'Country' } ],
  Grunge: [ { title: 'Smells Like Teen Spirit', genre: 'Grunge' } ]
} */