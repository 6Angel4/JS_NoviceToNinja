/**
 * La manera que se preferida para cambiar un Number a String es
 * usando la funcion String
 */
let numero = 3;
// recordar que typeOf es un atributo, y en este caso es solo para saber el tipo de dato
console.log(typeof String(numero));
console.log(typeof numero.toString());
console.log(typeof numero.toString(2)); //Si queremos cambair la base del numero, en este caso binario
