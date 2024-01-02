/**
 * Un conjunto puede ser convertido en un array colocando el conjunto, junto
 * con el operador de dispersion (...) directamente dentro de un array literal
 */
const shoppingSet = new Set().add("Apples").add("Bananas").add("Beans");
console.log(shoppingSet);
//Entonces convertimos el conjunto en un array
const shoppingArray = [...shoppingSet];
console.log(`Conjunto ya convertido: ${shoppingArray}`);
/**
 * Es posible usar el metodo Array.from() para convertir un conjunto en un array
 */
const shoppingArray2 = Array.from(shoppingSet);
/**
 * Ejemplo de un array con elementos repetidos, pasarlo a un conjunto para
 * reducir los elementos dentro del array
 */
const duplicate = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9];
const nonDuplicate = [...new Set(duplicate)];
console.log(nonDuplicate);
