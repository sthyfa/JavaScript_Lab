import { printOutStringSimple, printOutString } from "./Ejercicio1/main.js";
import { doubleArrayMap } from "./Ejercicio2/main.js";
import { funcionSumaProducto } from "./Ejercicio3/main.js";
import { commonCourseFunction } from "./Ejercicio4/main.js";
import { listPeople, removeDani, removeJuan, movLuis, addMyName, mariaOut, mariaIndex, messageConsola} from "./Ejercicio5/main.js";
import { bubble } from "./Ejercicio6/main.js";

// Función para crear contenido dentro de cajas
const createBox = (title, content) => {
    const container = document.getElementById("container");
    const box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
    container.appendChild(box);
};

// Ejercicio 1
createBox("Ejercicio 1", printOutString());
createBox("Ejercicio 1 Guion", printOutStringSimple());

// Ejercicio 2
createBox("Ejercicio 2", doubleArrayMap());

// Ejercicio 3
createBox("Ejercicio 3 Suma", funcionSumaProducto("sumar"));
createBox("Ejercicio 3 Producto", funcionSumaProducto("multiplicar"));

// Ejercicio 4
createBox("Ejercicio 4", commonCourseFunction());

// Ejercicio 5
/*${listPeople()}<br>
${removeDani()}<br>
${removeJuan()}<br>
${movLuis()}<br>
${addMyName()}<br>
${mariaOut()}<br>
${mariaIndex()}
*/
let ej5Content = `
${messageConsola()}
`;
createBox("Ejercicio 5", ej5Content);

// Ejercicio 6
createBox("Ejercicio 6", bubble());
