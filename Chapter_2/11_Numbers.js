/**
 * Los numeros pueden ser integers (numeros enteros) o
 * pueden ser numeros con punto flotante (decimales)
 *
 * JS no distingue entre integers y floating point decimal, estos
 * tienen el tipo Number
 */
console.log(typeof 42); //Integer
console.log(typeof 3.14159); //Float point decimal
/**
 * Para saber si un numero es del tipo integer o floating point decimal
 * se utiliza el metodo Number.isInteger(), para saber si es un number o integer
 */
console.log(Number.isInteger(45));
console.log(Number.isInteger(45.15));
