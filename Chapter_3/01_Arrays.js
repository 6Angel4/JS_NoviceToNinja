/**
 *  Un arreglo es una lista ordenada de valores. Para crear un arreglo lietral, simplemente
 *  escribimos un par de corchetes
 */
const myArray = [];
// Puedes usar tambien un constructor de array
const myArray2 = new Array();

// Inicializar un array
/**
 *  Podemos crear un array literal vacio llamdo "heroes" con el sigueinte codigo
 */
const heroes = [];

// Podemos encontrar el valor del elemento 0 en el array "heroes" usando el siguietne codigo
console.log(heroes[0]);
/**
 * Para acceder a un valor especifico en un array, escribimos la posicion
 * dentro de los corchetes (esto se le conoce como index). Si un elemento en un array esta
 * vacio, este retornara undefined
 * */

/**
 * Agregar valores al Array
 * Para colocar el String Superman dentro de nuestro array, podemos asignarselo al elemento 0
 * Cada elemento en un arreglo puede ser tratado como variable.
 * Podemos usar la notacion de index para agregar elementos en cualquier posicion
 */
heroes[0] = "Superman";
console.log(heroes[0]);

// Crear Array literales
/**
 * Podemos crear literales usando corchetes que contengan algunos valores iniciales
 * Aqui no es necesario agregar valores uno por uno.
 * No es necesario usar el mismo tipo de elementos dentro del array.
 */
const avengers = ["Captain America", "Iron Man", "Thor", "Hulk"];
const mixArray = [null, 1, [], "two", true];

// Remover elementos de un array
/**
 * El operador delete removera un elemento de un array
 */
delete avengers[3];
console.log(avengers);

//Desestructurar un array
/**
 * El concepto de desestructurar en un arreglo, se refiere a tomar los valores de un arreglo
 * y presentarlos de manera individual.
 * Desestructurar te permite asignar multiples valores al mismo tiempo
 */
const [x, y] = [1, 2]; //x=1 y=2
[x, y] = [y, x]; //x=2 y=1
