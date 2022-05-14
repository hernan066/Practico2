const estados = ["pendiente", "completado", "en-proceso", undefined];


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

  module.exports = {
    esValido,
  }