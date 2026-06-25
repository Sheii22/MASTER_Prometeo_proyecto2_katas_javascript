// Ejercicio 24



/* Utiliza un bucle para filtrar personajes de Star Wars por la especie "Human" y guárdalos en un nuevo array llamado humanCharacters.

Imprime este nuevo array por consola. */

const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' },
  { name: 'C-3PO', species: 'Droid' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Yoda', species: 'Unknown' },
  { name: 'Han Solo', species: 'Human' }
];
const humanCharacters = [];

function speciesHuman(pCharacters, humanCharacters){

   // Utiliza un bucle ...
   for(const element of pCharacters){

       /* ... para filtrar personajes de Star Wars por la especie "Human" y guárdalos en un nuevo array llamado humanCharacters.*/
       humanCharacters = pCharacters.filter((element) => 
                                             element.species == 'Human');

       /* Nota: 
          filter(): Crea un nuevo array con todos los elementos que cumplan una condición dada.
          let arrayFiltrado = array.filter((elemento) => elemento > 3); */
   }
   // Imprime este nuevo array por consola.
   console.log("Los personajes de Star Wars por la especie <Human> son: ",    humanCharacters);
}


// PRUEBA:

speciesHuman(characters, humanCharacters);
/* Los personajes de Star Wars por la especie <Human> son:  [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Han Solo', species: 'Human' }
]*/ 