/**
 * Son un tipo especial de String que fueron introduciodos en ES6
 * Los template literals usan el caracter bakctick ``, para delimitar un
 * String
 */

//Ejemplo
`hello`;
`She said, "It's me!"`;

/**
 * Tambien permiten interpolar codigo JS. Esto quiere decir que una
 * expresion JS puede ser insertada dentro de un String y el resultado
 * sera mostrado.
 */

//Ejemplo
const name = `Siri`;
console.log(`Hello ${name}`);
const age = 29;
console.log(`Edad = ${age + 1}`);

/**
 * La expresion JS es colocada dentro de las llaves
 * con el caracter $ frente a estos.
 */
