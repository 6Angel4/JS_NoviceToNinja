/**
 * Los booleanos solo tiene 2 valores: true y false
 * Para el valor booleano, podemos usar la funcion Boolean()
 * Cualquier valor en JS tiene un valor booleano y la mayoria
 * de ellos son true (estos son conocidos como truthy values)
 */
console.log(Boolean("hello"));
console.log(Boolean(42));
console.log(Boolean(0));

/**
 * Solo 9 valores son siempre false y estos se les conoce
 * como false values

 * "" // double quoted empty string literal
 * '' // single quoted empty string literal
 * `` // empty template literal
 * 0
 * -0 // considered different to 0 by JavaScript!
 * NaN
 * false
 * null
 * undefined
 */
