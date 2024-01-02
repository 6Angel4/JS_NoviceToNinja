/**
 * Los ciclos repiten una parte del codigo una y otra vez deacuerdo a las
 * condiciones.
 */

/**
 *  El ciclo while repetira un bloque de codigo mientras la condicion sea true
 *  La esctructura es la siguiente:
 *
 *  while(condicion){
 *     hace algo
 *  }
 */
let botes = 10;
while (botes > 0) {
  console.log(
    `Aqui hay ${botes}, en una pared. y si un bote se cae, tendremos ${
      botes - 1
    }`
  );
  botes--;
}

/**
 * El ciclo do...while es similar al ciclo while, la unica diferencia es que la condicion
 * va despues del codigo. Esqyo quiere decir que el bloque se ejecutara por lo menos 1 vez
 */
do {
  console.log(
    `Aqui hay ${botes}, en una pared. y si un bote se cae, tendremos ${
      botes - 1
    }`
  );
  botes--;
} while (botes > 0);

/**
 * El ciclo for es el mas comun de ver en JavaScript, y esta es su estructura
 *  for(inicializacion;condicion;despues(o agregado)){hace algo}
 */
for (let botes = 10; botes > 0; botes--) {
  console.log(
    `Aqui hay ${botes}, en una pared. y si un bote se cae, tendremos ${
      botes - 1
    }`
  );
}

/**
 * Ciclos for anidados
 * Puedes colocar un ciclo dentro de otro ciclo para crear un ciclo anidado
 */
for (let i = 1; i < 13; i++) {
  for (let j = 1; j < 13; j++) {
    console.log(`${j} multiplied by ${i} is ${i * j}`);
  }
}

/**
 * Ciclos sobre arreglos
 */
