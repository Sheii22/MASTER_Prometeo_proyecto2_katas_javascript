// Ejercicio 14



/* Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

Puedes usar este array para probar tu función: */
const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {

    /* reduce() = Va recorriendo el array y va “acumulando” un resultado.
       Ejemplo: [1, 2, 3].reduce((a, b) => a + b, VALOR INICIAL); */

  
                                 //Recorre el array y cuenta cuántas veces aparece cada palabra
    const contadorRepeticiones = list.reduce((acumulador, word) => 
        { 
            acumulador[word] = (acumulador[word] || 0) + 1;
            return acumulador;
        }, 
        {});
    
    /* DESGLOSE:
    
      + (acumulador, word) => { ... } = FUNCIÓN PRINCIPAL.

            + "word" = elemento actual del array(list).

            + "acumulador[word] = (acumulador[word] || 0) + 1;" =

                  + "acumulador[word]" = accede a la propiedad del objeto; 
                    a la palabra específica del array que nos pasan por parámetro.

                  + "(acumulador[word] || 0)" = cantidad de veces que aparece
                            si existe(palabra repetida) → usa el valor
                            si no existe → usa 0

                  + "+ 1" = suma 1 cada vez que aparece la palabra

            + "return acumulador;" = devuelve el acumulador actualizado.
               

      + "{}" = como el resultado a devolver es un objeto,
               el VALOR INICIAL del "acumulador" será "{}". 

      + ");" = FIN.
      
      */ 

    return contadorRepeticiones;
}


// PRUEBA:

console.log("Contador de repeticiones: ", repeatCounter(words)); 
           // { code: 4, repeat: 1, eat: 1, sleep: 3, enjoy: 2 }
    
    

/* Nota para mí: métodos de arrays que pudo utilizar para este ejercicio:

     + filter(): crea un nuevo array con todos los elementos que cumplan una condición dada. “qué elementos cumplen esto”.
     
     + reduce(): aplica una función a un acumulador y a cada elemento (de izquierda a derecha) para reducirlo a un solo valor. “cómo convierto todo en un resultado”.
     
     + map(): crea un nuevo array con los resultados de llamar a una función dada en cada elemento del array. "Eficiente".
     
     Conclusión: para este caso, dado el resultado que quiero mostrar, 
     creo que "reduce()"se adapta mejor a lo que necesito". */