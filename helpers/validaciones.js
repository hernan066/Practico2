const estados = ["pendiente", "completado", "en-proceso"];



const esValido = (estadoIngresado) => {
    if (!estados.includes(estadoIngresado)) {
       console.log(
        "Error de comandos, para mas informacion ingrese la opcion: ayuda"
      );
      return false;
    }else{
        return true;
    }
  };

  const noEstaVacio = (tarea= "") => {
    if (tarea === "") {
      console.log(
        "Error: ingrese una tarea"
      );
      return false;
    }else{
        return true;
    }
  }

  const numeroDeTareasEsValido =(numeroDeTarea, tareas) => {
    if (numeroDeTarea > tareas.length ) {
      console.log(
        "Error: el numero de tarea ingresado no existe"
      );
      return false;
    }else{
        return true;
    }
  }

  

  module.exports = {
    esValido,
    noEstaVacio,
    numeroDeTareasEsValido,
    
  }