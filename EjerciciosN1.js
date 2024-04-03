// Función para contar instancias de un carácter en una cadena
function charCount(char, str) {
  // Convertir la cadena a minúsculas para comparaciones insensibles a mayúsculas y minúsculas
  const lowerCaseStr = str.toLowerCase();
  
  // Contar instancias del carácter en la cadena
  let count = 0;
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (lowerCaseStr[i] === char.toLowerCase()) {
      count++;
    }
  }
  
  return count;
}

function countOccurrences() {
  const char = document.getElementById('charInput').value;
  const str = document.getElementById('strInput').value;
  const result = charCount(char, str);
  document.getElementById('result').innerText = `El carácter '${char}' se repite ${result} veces en la cadena.`;
}

// Añadir un event listener al botón de contar
document.getElementById('countButton').addEventListener('click', countOccurrences);


