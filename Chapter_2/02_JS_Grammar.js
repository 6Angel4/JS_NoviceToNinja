/* 
    En JS puedes omitir o hacer uso de ; en tus declaraciones
    porque los interpretes de JS hacen uso de un proceso
    llamado Automatic Semicolon Insertion (ASI), este proceso
    coloca ; al final de la linea por nosotros
*/
const message = "Hello World";
alert(message);

/*
    Block (bloques)

    Los bloques son una serie de declaraciones o sentencias que se
    agrupan entre llaves.
    Los bloques no necesitan ser terminados con ; (semicolon) 
*/
{
  //  Este es un bloque que contiene 2 declaraciones o sentencias
  const message = "Hello World";
  alert(message);
}
