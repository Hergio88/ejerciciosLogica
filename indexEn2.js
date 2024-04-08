// resolver con logica  para recorrer el arreglo *
document.getElementById('calculateButton').addEventListener('click', function() {
  
  const inputValue = document.getElementById('matrixInput').value;

  // Conv matriz
  const numbers = inputValue.split(',').map(Number);

  
  const result = minMax(numbers);

  document.getElementById('result').innerText = `El número mínimo es ${result[0]} y el número máximo es ${result[1]}.`;
});

function minMax(array) {

  const min = Math.min(...array);
  const max = Math.max(...array);

  
  return [min, max];
}
