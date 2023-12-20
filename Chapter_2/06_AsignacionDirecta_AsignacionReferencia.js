/*
    Cuando asignamos un valor primitivo a una variable, varias cambios 
    podemos hacer directamente a ese valor.

    Si asignamos un vakir no-primitivo a una variable, este esta hecho
    por referencia, asiq ue los cambios subsecuentes afectaran todas
    las referencias del objeto
*/

//  Asignacion Directa
const a = 1;
let b = a; //  a=1, b=1
b = 2; //  a=1, b=2

//  Asignacion por Referencia
const c = { value: 1 };
let d = c; //  c.value = 1, d.value = 1
d.value = 2; //  c.value=2,d.value=2
