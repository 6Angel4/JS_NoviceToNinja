/**
 * Los tipo de datos primitivos y objetos tienen propiedades y metodos
 *
 * Propiedades - son informacion acerca del objeto o valor
 * Metodos - realizan una accion sobre el objeto o valor (para cambiarlo o para decirnos algo sobre el)
 *
 * Podemos acceder alas propiedades de un String usando la notacion .
 * Esto involucra un . seguido de la propiedad en al que estamos interesados,
 * por ejemplo, todos los String tienen la propiedad length que nos indica cuantos
 * caracteres hay en el String
 */

//  Ejemplo de una PROPIEDAD:
const name = "Alexa"; //  Constante name con el valor 'Alexa'
console.log(name.length); //  Ver en consola cuantos caracteres tiene el valor de la constante name

/**
 * Un metodo es una accion que un dato primitivo o un objeto pueden realziar
 * Para llamar a un metodo, utilizamos el operador . ,seguido del nombre del metodo,
 * seguido por parentesis (eso es util para distinguir entre una propiedad y un metodo)
 *
 * Metodos terminan con ()
 */

//  Ejemplo de un METODO
console.log("toUpperCase() " + name.toUpperCase()); //  Convertir los caracteres del String en mayusculas
console.log("toLowerCase() " + name.toLowerCase()); //  Convertir los caracteres del String en minusculas
console.log("charAt() " + name.charAt(1)); //  Para saber que caracter esta en x posicion (index)
console.log("indexOf() " + name.indexOf("A")); //   Para saber en que posicion se encuentra el caracter 'A'
console.log("indexOf() " + name.indexOf("Z")); //   Si el caracter solicitado no existe, devuelve el valor -1
console.log("lastIndexOf() " + name.lastIndexOf("a")); //   Si queremos saber la ultima ocurrencia de un caracter
console.log("includes() " + name.includes("a")); //   Si queremso saber si el String contiene un cierto caracter
console.log("startsWith() " + name.startsWith("A")); //   Si queremos saber si el String comienza con cierto caracter
console.log("endsWith() " + name.endsWith("A")); //  Si queremos saber si el String termina con cierto caracter
console.log("concat() " + "JavaScript".concat(" ", "Ninja", "!")); //    El metodo concat() puede ser usado para concatenar 2 o mas Strings
console.log("trim() " + "\t\t JavaScript Ninja! \r".trim()); //    Si queremos eliminar los espcacios en blanco
console.log("repeat() " + "Hello ".repeat(2)); //Si queremos repetir un String n numeros de veces

