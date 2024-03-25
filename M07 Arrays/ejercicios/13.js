function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:


  // CON BUCLE:

  // let sumaDeNotas = 0;

  // for (let i = 0; i < resultadosTest.length; i++) {
  //   sumaDeNotas += resultadosTest[i];
  // }
  // return sumaDeNotas / resultadosTest.length;

  // CON METODO REDUCE:

  let resultado = resultadosTest.reduce(function(acumulador, numero) {
    return acumulador += numero;
  })

  return resultado / resultadosTest.length
}


module.exports = promedioResultadosTest;
