/**
 * Podemos tener arreglos dentro de arreglos, conoidos como arreglo multidimencional
 * Esto puede ser usado para crear coordenadas, por ejemplo:
 */
const coordenadas = [
  [1, 3],
  [4, 2],
];
/**
 * Para acceder a los valores de un arreglo multidimencional, usamos 2 indices:
 * Uno para referirnos al lugar en otro arreglo y otro para su lugar dentro del arreglo
 */
console.log(coordenadas[0][0]); //array [0] en la posicion del array [0]    =   1
console.log(coordenadas[1][0]); //array [1] en la posicion del array [0]    =   4

