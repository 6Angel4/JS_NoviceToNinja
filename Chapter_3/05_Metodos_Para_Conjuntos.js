/**
 * Metodos para conjuntos (set())
 * los conjuntos no tienen notacion por indice, es decir, no podemos acceder por indexOf()
 */
//Para encontrar el tamaño de un conjunto se utiliza el metodo size()
const jla = new Set().add("Superman").add("Batman").add("Wonder Woman");
console.log(jla);
console.log(jla.size);
//Para saber si un valor existe en el conjunto se hace el uso del metodo has(). Esto retorna
//un booleano
console.log(jla.has("Batman"));
/**
 * Remover valores del conjunto
 * El metodo delete() puede ser usado para remover un valor de un conjunto.
 * Esto retorna un booleano, TRUE si el elemento fue removido, FALSE si el valor
 * no se encuentra en el conjunto y no pudo ser removido
 */
console.log(jla.delete("Superman"));
console.log(jla.delete("Flash"));
/**
 * Para remover todos los elementos de un conjunto, se puede utilizar el metodo clear()
 */
jla.clear();
