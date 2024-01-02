/**
 * Maps
 * Es una estructura de datos
 * Se compone de una llave y un valor
 */
//Creando un mapa vacio
const romanNumerals = new Map();
//Agregando enteros a los mapas
console.log(romanNumerals);
//retorna el valor conectado llave con valor a traves de un "hash rocket" (=>)
romanNumerals.set(1, "I");
//Agregar multples valores
romanNumerals.set(2, "II").set(3, "III").set(4, "IV").set(5, "V");
/**
 * Metodos de Map
 */
//Metodo get
console.log(romanNumerals.get(4)); //buscamos por la llave, para obtener el valor
//Metodo has
console.log(romanNumerals.has(5)); //verificar si tenemos cierta llave (retorna un boolean)
//Crear un mapa con multiples valores usando un arreglo anidado como parametro
const heroes = new Map([
  ["Clark Kent", "Superman"],
  ["Bruce Wayne", "Batman"],
]);
console.log(heroes.size);
/**
 * Remover elementos de Map
 * El metodo delete pude ser usado para remover una llave y su valor de un map
 * Esto retornara un valor booleano de TRUE si el elemento fue removido o
 * FALSE en caso de que no se encuentre en el map (desded un inicio). Para eliminar
 * un valor especifico, necesitas la llave especifica.
 */
heroes.delete("Clark Kent"); //True, porque se elimina
/**
 * El metodo clear removera todos los pares (llave:valor) del map
 */
heroes.clear();
