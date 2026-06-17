// Ejercicio 2



/* 1. Luke Skywalker cumple años:

Modifica el siguiente código JavaScript para actualizar la edad de 
Luke Skywalker a 25 años. */
const jedi = {nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí...
jedi.edad = 25;
console.log("Edad actualizada de Luke Skywalker: " + jedi.edad + " años.");
 

// 2. Presentación al estilo Leia Organa:

/* Crea tres variables con la siguiente información:
        nombre: "Leia"
        apellido: "Organa"
        edad: 20 */
const nombre = "Leia";
const apellido = "Organa";
const edad = 20;

/* Muestra un mensaje por consola que siga la siguiente estructura:
   "Soy Leia Organa, tengo 20 años y soy una princesa de Alderaan."
   Utiliza la concatenación para ello. */
console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");
   

/* 3. Calculando el coste total de sables de luz:

Obtén el precio total de dos sables de luz: "Shoto de Yoda" y "sable de Darth Vader". Imprime el resultado por consola utilizando console.log.*/

const sable1 = {

    nombre: "Shoto de Yoda", 
    precio: 1500
};

const sable2 = {
    nombre: "Sable de Darth Vader", 
    precio: 2000
};

// Tu código para calcular el precio total aquí...
const precioTotal = sable1.precio + sable2.precio;
console.log("Precio total de sables de luz: " + precioTotal);


// 4. Actualizando el precio final de las naves:

/* Modifica el valor de la variable global precioBaseGlobal a 25.000 créditos. (Nota: para poder modificar el valor de una variable, hay que definirla mediante "let", en lugar de mediante "const")*/

let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable
precioBaseGlobal = 25000;
console.log("El valor actual de la variable global precioBaseGlobal es: " + precioBaseGlobal + " créditos.");

/* Actualiza el precio final (precioFinal) de dos naves ("Ala-X" y "Halcón Milenario") sumando el valor de precioBaseGlobal a su precio base (precioBase). */

const nave1 = {
    nombre: "Ala-X", 
    precioBase: 50000, 
    precioFinal: 60000
};

const nave2 = {
    nombre: "Halcón Milenario", 
    precioBase: 70000, 
    precioFinal: 80000
};

/* Tu código para actualizar el precio final de cada nave aquí...

precioFinal = precioBase + precioBaseGlobal*/

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
// nave1.precioFinal = 50000 + 25000 = 75000 créditos.
console.log("El precio final de la primera nave es: " + nave1.precioFinal + " créditos.");

nave2.precioFinal = nave2.precioBase + precioBaseGlobal;
// nave2.precioFinal = 70000 + 25000 = 95000 créditos.
console.log("El precio final de la segunda nave es: " + nave2.precioFinal + " créditos.");
