/*Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) 
of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/
let numeros = [1, 2, 3, 4];

const funcionSumaProducto = (operacion) => {
    let resultadoSuma = 0;
    let resultadoProducto = 1;

    switch (operacion) {
        case "sumar":
            for (let i = 0; i < numeros.length; i++) {
                resultadoSuma += numeros[i];
            }
            return `La suma es: ${resultadoSuma}`;

        case "multiplicar":
            for (let i = 0; i < numeros.length; i++) {
                resultadoProducto *= numeros[i];
            }
            return `El producto es: ${resultadoProducto}`;

        default:
            return "Opción no válida. Usa 'sumar' o 'multiplicar'.";
    }
};

// Llamadas de la función
console.log(funcionSumaProducto("sumar"));
console.log(funcionSumaProducto("multiplicar"));
console.log(funcionSumaProducto("restar"));