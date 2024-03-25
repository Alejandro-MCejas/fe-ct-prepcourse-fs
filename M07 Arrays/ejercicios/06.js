function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  let dobles = array.map(function (n) {
    return n * 2;
  })

  return dobles;
}

module.exports = duplicarElementos;
