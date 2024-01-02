/**
 * Condicionales logicos
 */

/**
 * Sentencia if
 * Una sentencia if tiene la siguiente estructura
 * if(condition){
 *  codigo que correra si la condicion en verdadera
 * }
 */

//Ejemplo
const age = 23;
if (age < 18) {
  console.log("no pasas");
}
/**
 * Sentencia else
 * La palabra reservada  else puede ser usada para agregar un bloque de codigo alternativo
 * que correra si la condicion if es FALSE
 */
if (age < 18) {
  console.log("no pasas");
} else {
  console.log("Pasas");
}
/**
 * Operador Ternario
 * Una forma corta de escribir una sentencia if...else
 * condicion ? (codigo que corre si la condicion es TRUE) : (codigo que corre si la condicion es FALSE)
 */
const n = 5;
n % 2 == 0 ? console.log("n es par") : console.log("n es inpar");

/**
 * Sentencia switch
 * El operador switch puede ser usado para crear codigo mas sencillo
 */
let number = 4;
switch (number) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  default:
    console.log("Numero no valido");
    break;
}
