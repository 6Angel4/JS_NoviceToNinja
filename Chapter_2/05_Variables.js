// Las variables son usadas para referir a un valor almacenado en memoria

/*  
    Declarando y Asignando

    Las variables tienen que ser declaradas antes de poder ser usadaas
    Se utilizan las palabras clave const y let para declarar variables

    - const
        Es utilizada cuando la variable no va a recibir otro valor
    -let
        Es utilizada cuando la variable va a cambiar despues.
    
    Para asignar un valor a una constante (const) o a una variable (let)
    se utiliza el operador =

    Puedes declarar y asignar varibales del mismo tipo al mismo tiempo si
    lo separas por ,

    Usando consts, prevenimos reasiganar una variablecon otro objeto
*/

//  Ejemplo
const name = "Alexa"; //  No se le quiere asignar otro valor
//name = 'Siri';  //  Error
//console.log(name);

let score = 0,
  x = 2,
  y = 9; //  El valor cambiara durante el programa

//  Ver el valor de la constante name
console.log(name);
console.log(typeof name);

const name2 = { value: "Alexa" }; //    Un objeto
name2.value = "Siri"; //  Cambia el valor
