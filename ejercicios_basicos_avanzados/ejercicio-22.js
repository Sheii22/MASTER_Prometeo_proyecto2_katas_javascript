// Ejercicio 22



/* Usa un for para reemplazar todas las comidas que no sean veganas con las frutas del array de frutas.

Recuerda no usar frutas duplicadas.

Finalmente, imprime el array resultante. */

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

function veganFood(pFoodSchedule, pFruits){

   // Índice para recorrer las frutas
   let indexFruits = 0;

   // Recorrer comidas(pFoodSchedule):
   for(let i = 0; i < pFoodSchedule.length; i++){

       // comidas NO veganas:
       if(!pFoodSchedule[i].isVegan){
     

            /* Al estar recorriendo un array de Objetos,
            cambio los valores de sus propiedades: */

            pFoodSchedule[i].name = pFruits[indexFruits];
            pFoodSchedule[i].isVegan = true;   

            indexFruits++;
       }
   }
   
   // Finalmente, imprime el array resultante.
   return pFoodSchedule;
}


// PRUEBA:

console.log("El array de comida vegana es: ", 
             veganFood(foodSchedule, fruits))
            /* [
            { name: 'Heura', isVegan: true },
            { name: 'Strawberry', isVegan: true },
            { name: 'Tofu', isVegan: true },
            { name: 'Banana', isVegan: true },
            { name: 'Rice', isVegan: true },
            { name: 'Pasta', isVegan: true }
            ]
            */