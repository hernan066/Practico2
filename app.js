const process = require("process");

const { esValido } = require("./helpers/validaciones");
const { listar, crear, actualizar, borrar, ayuda } = require("./funcionesDeTareas");

const comando = process.argv[2];
const parametro2 = process.argv[3];
const parametro3 = process.argv[4];

const tareas = (accion) => {
  switch (accion) {
    case "ayuda":
      //Comado: ayuda
      ayuda();
      break;
    case "crear":
      //Comado: crear tarea
      crear(parametro2);
      break;
    case "listar":
      //Comando: listar
      //Comando: listar estado
      if (esValido(parametro2)) {
        listar(parametro2);
      }

      break;
    case "actualizar":
      //Comando: actualizar numeroTarea estado
      if (esValido(parametro3) && parametro2 <= data.length && parametro3 !== undefined) {
        actualizar(parametro2, parametro3);
      }

      break;
    case "borrar":
      //Comando: borrar numeroTarea
      borrar(parametro2);
      break;
    default:
      console.log("Error de comandos, para mas informacion ingrese la opcion: ayuda");
      break;
  }
};

//console.clear();
tareas(comando);
