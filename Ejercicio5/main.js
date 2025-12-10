/*Exercise #5
For each of the exercises below, assume you are starting with 
the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log 
    "Maria", exit from the loop. (usar break)
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
const resultadosFunction = () => {
    let resultados= [];
    // 1. Imprimir todos los nombres
    people.join(", ");
    console.log(people);
    // 2. Eliminar "Dani"
    people.splice(1, 1);
    console.log(people);
    // 3. Eliminar "Juan"
    people.splice(2, 1);
    console.log(people);
    // 4. Mover "Luis" al inicio
    let luis = people.splice(1, 1)[0];
    people.unshift(luis);
    console.log(people);
    // 5. Agregar tu nombre al final
    people.push("Fancy");
    console.log(people);
    resultados.push(`Punto 1-5. Los nombres de la lista son: ${people.join(", ")}. 
    -----> Más detalle en consola.<------`);
    return resultados;
};

resultadosFunction();
console.log(people);

 // 6. Mostrar nombres antes de "Maria"
const mariaOut = () => { 
    let index = 0;
    for(let i = 0; i < people.length; i++){
        if(people[i] === "Maria"){ 
            index = i;
            break; 
        };
    };
    let textArray = people.slice(0, index).join(", ");
       return `Punto 6. Antes de "Maria", los nombres son: ${textArray}`;
}; 
console.log(mariaOut());

// 7. Índice de "Maria"
const mariaIndex = () => {
    for (let i = 0; i < people.length; i++) {
        if (people[i] === "Maria") {
            return `Punto 7. El índice de María es: ${i}`; 
        }; 
    }; 
    return "Punto 7. María no está, María se fue, María se escapa de tu vida"; 
}; 
console.log(mariaIndex());

export { resultadosFunction, mariaOut, mariaIndex };
