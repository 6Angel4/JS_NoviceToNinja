const btn = document.getElementById("button");
const rainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "rebeccapurple",
  "violet",
];

function change() {
  document.body.style.background = rainbow[Math.floor(7 * Math.random())];
}
btn.addEventListener('click',change);
 /*
    1- Creamos una variable ded nombre btn.
    2- Usamos la funcion document.getElementById para encontrar un elemento HTML con el ID de btn. Esta es asiganada a btn.
    3- Creamos otra variable de nombre rainbow. Un arreglo que contiene una lista de Strings.
    4- Creamos una funcion de nombre change. Esta coloca un color de background color del elemento <body></body>.
    5- Creamos un evento, que verifica cuando el boton es presionado (hace click).
 */