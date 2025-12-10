/*Ejercicio #2 (sugerencia map() )
Escribir una funcion que:
•	Crear un arreglo de números
•	Duplicar el valor de cada número en el arreglo.
•	Imprimir el arreglo actualizado
Ejemplo: Dado el arreglo [1, 2, 4, 5]. La salida debe ser: 
[2, 4, 8, 10]
*/

let numberArray = [1, 2, 4, 5];
//Imprimir en consola el array original
console.log(numberArray);


//Función que multiplica cada índice por dos, utilizando map()

const doubleArrayMap = () => {
    let doubleArray = numberArray.map(num => num * 2);
    let doubleArrayText = doubleArray.join(", ");
    return `El array original es: ${numberArray} y cada índice fue multiplicado por dos, los resultados son: ${doubleArrayText}`;
};

console.log(doubleArrayMap());

/*
//Función que multiplica cada índice por dos, utilizando un ciclo for
const doubleArrayFor = () => {
    for(let index = 0; index < numberArray.length; index++){
        numberArray[index] *= 2;
    }
    return numberArray;
};
//Imprimir el array modificado
console.log(numberArray);
console.log(doubleArrayFor());
console.log(numberArray);

//Función que multiplica cada índice por dos, utilizando forEach()
console.log(numberArray);
const doubleArrayForEach = () => {
    numberArray.forEach((num, index, arr) => {
        arr[index] = num * 2;
    });

};
doubleArrayForEach()
console.log(numberArray);
*/

export { doubleArrayMap };