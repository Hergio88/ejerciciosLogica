document.getElementById('calculateButton').addEventListener('click', function() {
    const temperatura = document.getElementById('temperatura').value;
  
    // Validar
    const resultado = convert(temperatura);
  
    document.getElementById('result').innerText = resultado;
});

function convert(temperatura) {
    // ***** IMPOSTANTE SIN ESTO NO ME FUNCIONABA Convertir el valor a una cadena de texto*****
    var temperaturaString = temperatura.toString();
    
    if (temperaturaString.includes("°C")) {
    
        var celsius = parseFloat(temperaturaString);
        if (isNaN(celsius)) {
            return "Error";
        }
        var fahrenheit = Math.round((celsius * 9/5) + 32);
        return fahrenheit + "°F";
    } else if (temperaturaString.includes("°F")) {
        var fahrenheit = parseFloat(temperaturaString);
        if (isNaN(fahrenheit)) {
            return "Error";
        }
        var celsius = Math.round((fahrenheit - 32) * 5/9);
        return celsius + "°C";
    } else {
    
        return "Error";
    }
}
