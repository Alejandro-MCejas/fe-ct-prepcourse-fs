function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:


  let bandera = undefined;

  for (let i = 0; i < array.length; i++) {
    if(array[i].length >= 5){
      bandera = array[i];
      break;
    }
  }

  return bandera;

}

module.exports = obtenerPrimerStringLargo;
