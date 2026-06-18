// Ejercicio 6



/* 1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola. */

let numbers = [0,1,2,3,4,5,6,7,8,9];

for(let i = 0; i <= 9; i++){
    
    console.log(numbers[i]);
}


/* 1.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de j por consola solo cuando el resto del numero dividido entre 2 sea 0. */

console.log("Lista par:");

for(let j = 0; j <= 9; j++){
    
    if( numbers[j] % 2 == 0){

        console.log(numbers[j]);
    }
}


/* 1.3 Crea un bucle para conseguir dormir contando ovejas.
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle y cambia el mensaje en la décima vuelta a '¡Dormido!'. */

console.log("Dormir contando ovejas:");

let k = 1;

//Contador
let cont = 0;

do{
    k++;

    //Contador
    cont++;

    console.log('Intentando dormir 🐑');
    
} while(k <= 10);

console.log('¡Dormido!');

console.log("El bucle ha dado " + cont + " vueltas");