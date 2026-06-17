// Ejercicio 4



//Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
   // Posiciones:      0          1          2          3        4


//4.1 - Saca a "Tendo" por consola atacando su posición.
console.log("4.1 - Mostrar: " + aldeanos[3]); // Tendo

//4.2 - Coloca en el último lugar de este array a "Cervasio".
aldeanos.push("Cervasio");
console.log("4.2 - El nuevo elemento del array es: " + aldeanos[5]);
                                                          // Cervasio

//4.3 - Cambia el primer elemento de este array por "Bambina".
aldeanos.splice(0, 1, "Bambina");
            // Desde la posición 0, 
            // quiero cortar/eliminar 1 posición,
            // y susutituir por:"Bambina"
console.log("4.3 - El nuevo array es: " + aldeanos);
                            //Bambina,Narciso,Vacarena,Tendo,Nendo,Cervasio

//4.4 - Dale la vuelta a este array.
aldeanos.reverse();
console.log("4.4 - El array invertido es: " + aldeanos);
                            // Cervasio,Nendo,Tendo,Vacarena,Narciso,Bambina
               //Posiciones:       0      1     2       3       4       5

//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
aldeanos.splice(4, 1, "Canela");
console.log("4.5 - El nuevo estado del array es: " + aldeanos);
                  // Cervasio,Nendo,Tendo,Vacarena,Canela,Bambina

/* 4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente. Pista: puedes usar el método length con algo más para ello. */
console.log("4.6 - El último elemento de este array es: " 
                             + aldeanos[aldeanos.length-1]); //Bambina
                                    

