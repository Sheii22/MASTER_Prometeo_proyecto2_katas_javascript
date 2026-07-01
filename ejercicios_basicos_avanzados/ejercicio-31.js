// Ejercicio 31



/* Dada una lista de artistas con sus influencias, utiliza bucles anidados para listar todos los artistas y sus influencias directas e imprime cada par por consola. */

const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
  { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
  { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
  { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

function listArtistsAndTheirInfluences(pArtists){

    // Recorrer la lista de artistas
    for(const artist of pArtists){

        // Recorrer la lista de influencias DE CADA ARTISTA
        for(const influence of artist.influences){

            /* Listar todos los artistas y sus influencias directas e imprime cada par por consola. */
            console.log("El artista: ", artist.name,
                " y su influencia directa: ", influence);
        }
    }
}


// PRUEBA:

listArtistsAndTheirInfluences(artists); 
/*
El artista:  Kurt Cobain  y su influencia directa:  The Beatles
El artista:  Kurt Cobain  y su influencia directa:  Pixies
El artista:  Kurt Cobain  y su influencia directa:  Lead Belly
El artista:  David Bowie  y su influencia directa:  Little Richard
El artista:  David Bowie  y su influencia directa:  Chuck Berry
El artista:  David Bowie  y su influencia directa:  The Velvet Underground
El artista:  Eddie Vedder  y su influencia directa:  The Who
El artista:  Eddie Vedder  y su influencia directa:  Neil Young
El artista:  Eddie Vedder  y su influencia directa:  Jim Morrison
El artista:  Freddie Mercury  y su influencia directa:  Liza Minnelli
El artista:  Freddie Mercury  y su influencia directa:  Jimi Hendrix
El artista:  Freddie Mercury  y su influencia directa:  Aretha Franklin
El artista:  John Lennon  y su influencia directa:  Elvis Presley
El artista:  John Lennon  y su influencia directa:  Chuck Berry
El artista:  John Lennon  y su influencia directa:  Buddy Holly
 */