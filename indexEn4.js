// hacer la logica para que se recorra el vector.
document.getElementById('sortButton').addEventListener('click', function() {
    const number = document.getElementById('numberInput').value;

    const sortedNumber = sortDescending(number);
  
    document.getElementById('result').innerText = `El número descendente es: ${sortedNumber}`;
});
  
function sortDescending(number) {

    const numberString = String(number);

    const digitArray = Array.from(numberString);
  
    // Ordenar los dígitos en orden descendente
    digitArray.sort(function(a, b) {
        return b - a;
    });
  
    return parseInt(digitArray.join(''));
}// Funciones para redirigir a otras páginas
function irAPagina1() {
    window.location.href = "indexEn1.html";
}

