/*Exercise # 6
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]
*/
let bubbleArray = [3, 6, 12, 5, 100, 1 ];

const bubble = () => {
    for(let i = 0; i < bubbleArray.length - 1; i++){
        for(let j = 0; j < bubbleArray.length - i - 1; j++){
            if(bubbleArray[j] > bubbleArray[j + 1]){
                let temp = bubbleArray[j];
                bubbleArray[j] = bubbleArray[j + 1];
                bubbleArray[j + 1] = temp;
            };
        };
    };
    return `El resultado de reacomodar el array es ${bubbleArray}`;
};


console.log(bubble());

export { bubble };