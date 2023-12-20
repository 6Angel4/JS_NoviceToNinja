/**
 * Los simbolos fueron introducidos como un nuevo valor primitivo en ES6
 * estos pueden ser usados para crear valores unicos
 * La unica forma de crearlos es usando la funcion Symbol()
 */
const uniqueID = Symbol("Esto es un ID unico"); //  Es recomendable agregar una descripcion del simbolo dentro del parentesis
console.log(typeof uniqueID);
console.log(uniqueID);
//Puedes acceder manualmente a la descripcion usando la funcion String()
console.log(String(uniqueID));
//Es posible que dos variables apunten al mismo simbolo, si se utiliza el
//metodo fo() cuando se crea el simbolo
const A = Symbol.for("simbolo compartido");
const B = Symbol.for("simbolo compartido");
