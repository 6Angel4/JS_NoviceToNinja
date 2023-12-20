/**
 * A diferencia de las funciones anteriores, en esta situacion para
 * cambiar el tipo de dato, podemos utilizar la funcion
 * parseInt(), ademas que tambien podedmos especificar la base
 */

console.log(parseInt("1010", 2)); //Convierte de binario, regresa a decimal
console.log(parseInt("omg", 36));
console.log(parseInt("23", 10));

/**
 * Si un String inicia con un numero, la funcion parseInt() usara ese numero e ignorara
 * cualquier letra que este delante o despues
 */
const address = "221B Baker Street";
console.log(parseInt(address, 10)); //Base 10

/**
 * Esto es diferente en con la funcion Number, pues este tendra como salida NaN
 * Tambien hay que tener en cuenta que si se utiliza parseInt() y dentro colocamos
 * un numero Floating Point Decimal, este perdera sus decimales, para evitar eso, se recomienda
 * usar parseFloat()
 */
const numero = "2.9";
console.log(parseFloat(numero));
