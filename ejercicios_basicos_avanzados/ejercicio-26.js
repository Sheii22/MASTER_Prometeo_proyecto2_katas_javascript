// Ejercicio 26



/* Filtra una lista de canciones para crear una playlist que solo contenga canciones de rock que duren más de 5 minutos.

Utiliza un bucle para lograrlo e imprime la nueva playlist por consola. */

const songs = [
  { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
  { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
  { title: 'Billie Jean', genre: 'Pop', duration: 4.54 },
  { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
  { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
  { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
  { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
  { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 },
  { title: 'Black Dog', genre: 'Rock', duration: 4.54 },
  { title: 'Thunderstruck', genre: 'Rock', duration: 4.52 },
  { title: 'Crazy Love', genre: 'Pop', duration: 3.52 },
];
const rockPlaylist = [];

function filterSongs(pSongs, rockPlaylist){

    // Recorrer la lista de canciones(bucle) para luego poder filtrarlas:
    for(const element of pSongs){

        // canciones de rock que duren más de 5 minutos.
        if((element.genre === 'Rock') && (element.duration > 5)){

           /* Añadir a la nueva playlist las canciones que cumplen las condiciones */
           rockPlaylist.push(element); 
        }
    }
    // Devolver la nueva playlist para luego poder imprimirla
    return rockPlaylist;
}


// PRUEBA:

console.log("La nueva playlist es: ", filterSongs(songs, rockPlaylist));
/* [
  { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
  { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
  { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
  { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
  { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
  { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
  { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 }
]
*/ 