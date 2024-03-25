function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  let nuevoArray = array.map(function(num, indice) {
    return num * indice;
  })

  return nuevoArray;
}

module.exports = multiplicarElementosPorIndice;
