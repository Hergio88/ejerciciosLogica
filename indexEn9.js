document.getElementById('calculateButton').addEventListener('click', function() {
  
  const inputValue = document.getElementById('matrixInput').value;

  // Conv matriz
  const numbers = inputValue.split(',').map(Number);

  
  const result = sumOfTwoMin(numbers);

  document.getElementById('result').innerText = `La suma de los dos números más pequeños es ${result}.`;
});

function sumOfTwoMin(array) {
  let min1 = Infinity;
  let min2 = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min1) {
      min2 = min1;
      min1 = array[i];
    } else if (array[i] < min2 && array[i] !== min1) {
      min2 = array[i];
    }
  }
alert(min1);
alert(min2);
  return min1 + min2;
}
