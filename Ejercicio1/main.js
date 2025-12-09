/*Ejercicio #1 ( sugerencia join() )
Copy the code below into your workspace:
*/
//Complete the function to print out the string: This is a sentence.

//Función para imprimir con método join
let arr = ["This", "is", "a", "sentence."];
const printOutString = () => {
  return arr.join(" ");
};

console.log(printOutString());

//Función para imprimir con método join 
const printOutStringSimple = () => arr.join(" - ");

console.log(printOutStringSimple());