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

//1. Comando para imprimir todos los nombres de la lista 
console.log(`Los nombres de la lista son: ${people.join(", ")}`);

//2. Comando para eliminar a "Dani" de la lista
people.splice(1, 1);
console.log(`Los nombres de la lista son: ${people.join(", ")}`);

//3. Comando para eliminar a "Juan" de la lista
people.splice(2, 1);
console.log(`Los nombres de la lista son: ${people.join(", ")}`);

//4. Comando para mover a Luis al inicio del array
const moveLuis = () => {
    let luis = people.splice(1, 1)[0];
    people.unshift(luis);
    return people;
};
console.log(`Los nombres de la lista son: ${moveLuis().join(", ")}`);

//5. Agregar mi nombre al final del array
people.push("Fancy");
console.log(`Los nombres de la lista son: ${people.join(", ")}`);

/* 6. Mediante un bucle, itere a través de este array y, 
después de console.log "María", salga del bucle. (usar break)
*/
const mariaOut = () => {
    for(let i = 0; i < people.length; i++){
        if(people[i] === "Maria"){
            break;
        };
        return people[i];
    };
};

console.log(mariaOut());
console.log(people);

// 7. Comando para el indexOf donde se encuentra "María".

const mariaIndex = () => {
    for (let i = 0; i < people.length; i++) {
        if (people[i] === "Maria") {
            return i; 
        };
    };
    return "María no está, María se fue, María se escapa de tu vida";
};

console.log(`El índice de María es: ${mariaIndex()}`);

