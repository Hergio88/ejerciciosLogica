document.getElementById('calculateButton').addEventListener('click', function() {
    
    const inputValue = document.getElementById('matrixInput').value;

    const cadenaNumeros = inputValue.split(',').map(Number);

    const result = minMax(cadenaNumeros);
  
  
    document.getElementById('result').innerText = `El número máximo es ${result[1]}.`;
});
  
function minMax(array) {
  
    const min = Math.min(...array);
    const max = Math.max(...array);
  
   
    return [min, max];
}

  