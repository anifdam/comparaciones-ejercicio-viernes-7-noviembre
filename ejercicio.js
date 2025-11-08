
// Forma tradicional de funciones
function saludar() {
    console.log("hola")
}
saludar();
 
// Arrow Function
const saludarFlecha = (nombre) => {
    return `Hola ${nombre}`
}
console.log(saludarFlecha("Ariel"))
 
// Esto se puede hacer simplemente cuando es una sola línea
const saludarSimple = nombre => `Hola ${nombre}`;
console.log(saludarSimple("Ariel"))

/*
// Forma tradicional de funciones
function saludar() {
    console.log("hola")
}
saludar();
 
// Arrow Function
const saludarFlecha = (nombre) => {
    return `Hola ${nombre}`
}
console.log(saludarFlecha("Ariel"))
 
// Esto se puede hacer simplemente cuando es una sola línea
const saludarSimple = nombre => `Hola ${nombre}`;
console.log(saludarSimple("Ariel"))
 
*/
 
 
const numeros = [1, 2, 3, 4, 5];
 
// Vamos a multiplicar cada numeros usando un ForEach + funcion normal
 
numeros.forEach(function (n) {
    console.log("x2:", n * 2);
})
 
// 2
// 4
// 6
 
// Por que son Arrow Function
numeros.forEach(n => console.log("x2 con arrow:", n * 2))

console.log("=== Comparacion Local de JS ===")
 
// Conversion automatica
 
console.log(0 == "0")   // true -> convierte el "0" a numero
console.log([] == 0)    // true -> [] se convierte en "" -> 0
console.log([] == "")   // true -> por que ambos se convierten en string vacios
console.log("0" == [])  // false -> aqui la empieza el meme y se los dejo de tarea para la casa
 
 
// comparacion estricta
// comparamos valor y tipo de datos
console.log("\n")
console.log(0 === "0")       // False -> tipos distintos ( numeros vs string)  
console.log([] === 0 )        //
console.log(String(0) === "0" )  // ambos string
console.log([] === [])  //
