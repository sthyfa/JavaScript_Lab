/*Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) 
of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/
let numeros = [1, 2, 3, 4];

const funcionSumaProducto = (operacion) => {
    let resultadoSuma = 0;
    let resultadoProducto = 1;
    let message = "";

    switch (operacion) {
        case "sumar":
            for (let i = 0; i < numeros.length; i++) {
                resultadoSuma += numeros[i];
            }
            message = `El resultado de sumar los elementos del array: ${numeros} es: ${resultadoSuma}`;
            break;

        case "multiplicar":
            for (let i = 0; i < numeros.length; i++) {
                resultadoProducto *= numeros[i];
            }
            message = `El resultado de multiplicar los elementos del array: ${numeros} es: ${resultadoProducto}`;
            break;

        default:
            message = "Opción no válida. Usa 'sumar' o 'multiplicar'.";
    };

    return message;
};

// Llamadas de la función
console.log(funcionSumaProducto("sumar"));
console.log(funcionSumaProducto("multiplicar"));
console.log(funcionSumaProducto("restar"));

export { funcionSumaProducto };