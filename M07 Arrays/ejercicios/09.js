function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  let contador = array.filter(function(num) {
    return num > 10;
  });

  return contador.length;

}

module.exports = contarElementosMayoresA10;
