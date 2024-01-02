/**
 * los conjuntos es una estructura de datos que representan una coleccion de valores unicos
 * asi que no incluye cualquier valor duplicado.
 * Si varios valores reaparecen, solo aparecera una ves ese elemento
 * El metodo set es conveniente para eliminar elementos duplicados al momento de verificar
 * datos.
 * Al introducir Strings dentro de un conjunto, este separara caracter por caracter la cadena
 * de texto.
 * Todos los valores no primitivos como arreglos y objetos son considerados valores unicos
 * La coercion de tipós no es utilizada al agregar elementos en el conjunto
 */

//Crear un conjunto vacio
const list = new Set();
//Agregar valores al conjunto usando el metodo add
list.add(1);
//Se pueden agregar multiples elementos
list.add(2).add(3).add(4);
//Para agregar multiples valores
const numbers = new Set([1, 2, 3]);
console.log(numbers);
//Strings en los conjuntos
const letras = new Set("Hola");
console.log(letras);
//Para agregar palabras separadas, se necesita el metodo add()
const frase = new Set().add("la").add("cucaracha");
console.log(frase);
const mixedTypes = new Set().add(2).add("2"); //Esto es diferente
