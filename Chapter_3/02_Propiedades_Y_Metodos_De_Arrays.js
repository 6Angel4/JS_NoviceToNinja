let avengers = [
  "Captain America",
  "Iron Man",
  "Thor",
  "Hulk",
  "Hawkeye",
  "Black Widow",
];
/**
 * Para encontrar la longitud de un arreglo, podemos usar la propiedad length
 */
console.log(avengers.length);
/**
 * La propiedad length puede ser usada como parte de un indice para encontrar el ultimo
 * elemento en un array
 * Notaras que tenemos que restar 1 de la propiedad length, esto es porque el indice
 * inicia en 0
 * la propiedad length es mutable, por lo que tu puedes cambiarlo manualmente.
 * Si indicas que la longitud o la propiedad length sera mayor, se crearan
 * espacios vacios (undefined) y si lo haces corto, se eliminaran los elementos restantes
 */
console.log(avengers.length - 1);

//Pop,Push,Shift y Unshift
/**
 * Para remover el ultimo elemento del array, podemos usar el metodo pop()
 */
console.log(avengers.pop());
/**
 * Para remover el primer elemento del array, podemos usar el metodo shift()
 */
console.log(avengers.shift());
/**
 * El metodo push() agrega un nuevo valor al final del array
 */
avengers.push("Ant Man");
console.log(avengers);
/**
 * El metodo unshift() es similar al metodo push, pero este agrega un nuevo elemento
 * al inicio del array
 */
avengers.unshift("Captain America");
/**
 * Union de arrays
 * El metodo concat puede ser usado para unir con uno o mas arrays
 * Al usar estono se modifica el array, se crea otro array combinando
 */
avengers.concat(["Black Widow", "Captain America"]);
avengers = avengers.concat(["Black Widow", "Captain America"]);
console.log(avengers);
/**
 * El metodo join()
 * Puede ser usado para convertir un array en un String, esto comprime todos los elementos
 * del array y los separa por default por comas
 */
console.log(avengers.join());
console.log(avengers.join(" & "));
console.log(avengers.join(" | "));
/**
 * El metodo slice cea un subarray, cortando una porcion de la matriz original, empezando
 * en una posicion y termina en otra.
 */
console.log(avengers.slice(2, 4));
/**
 * El metodo splice() remueve elementos de un arreglo, entonces inserta nuevos elementos
 * en su lugar. Por ejemplo, remover el elemento Hulk y remplzalo por Scarlet Witch
 */
avengers.splice(3, 1, "Scarlet Witch");
/**
 * Reversa
 * Podemos poner en un orden inverso el array
 */
console.log(avengers.reverse());
/**
 * Ordenar un aray con el metodo sort()
 */
console.log(avengers.sort());
/**
 * Encontrando valores en un array
 * Podemos encontrar un valor particular en un arreglo usando el metodo indexOf()
 */
console.log(avengers.indexOf("Iron Man"));
/**
 * ES6 tambein incluye en metodo includes(), este retorna un booleano
 * tambien se puede indivar donde empezara la busqueda
 */
console.log(avengers.includes("Iron Man"));
