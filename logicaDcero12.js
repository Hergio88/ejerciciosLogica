document.getElementById('eliminarDuplicadosBtn').addEventListener('click', function() {
    var input = document.getElementById('inputArray').value;
    var array = input.split(',').map(item => item.trim());
    var uniqueArray = Array.from(new Set(array));
    document.getElementById('resultado').innerText = "Array sin duplicados: " + uniqueArray.join(', ');
    
});