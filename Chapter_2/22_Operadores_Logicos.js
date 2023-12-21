/**
 * Un operador logico puede ser usado con cualquier valor primitivo u objeto
 * El resutlado es basado en si los valores son considerados verdaderos o falses
 */

// ! (NOT logico)
/**
 * Colocando el operador ! frente de un valor se convertira en un Booleano
 * y retornara el valor opuesto
 */
console.log(!true); // Negamos true y retorna false
console.log(!0); // Recordando que 0 es falsy, pero como negamos eso, devulve true

//Una opcion corta para verificar si un valor es true o false, es usando doble negacion !!
console.log(!!true);
console.log(!!0);

// && (AND logico)
/**
 * Para que se obtenga un retorno true, amabas condiciones a revision deben ser true
 * en el caso de que 1 de las condiciones no se cumpla (no sea true), el resultado
 * sera false
 *
 * El operador logico AND trabaja con 2 o mas valores (operandos) y solo evalua true
 * o resuelve true si TODOS los operandos son true
 */

//Ejemplo:
//NOTA: null = 0
let a = 1,
  b = 0,
  c = 1,
  d = 0;
console.log(!!(a && b)); // Uno de los valores es falsy (false)
console.log(!!(a && c)); // Ambos valores son trurhy

// || (OR logico)
/**
 * El operador logico OR trabaja con 2 o mas operandos, pero evalua true
 * si alguno de los operandos es true, evaluara false si y solo si los operandos
 * son false.
 */
console.log(!!(a || b)); // Uno de los valores es true
console.log(!!(b || d)); // Ambos valores son false
