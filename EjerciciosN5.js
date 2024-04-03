document.getElementById('calculateButton').addEventListener('click', function() {

    const codigoPostal = document.getElementById('codigoPostal').value;
  
    // validar
    const mensaje = Valida(codigoPostal);
  
    document.getElementById('result').innerText = mensaje;
});


function Valida(codigoPostal) {
    let codPostal = true;
    let mensaje = "sin procesar";
    
    if (codigoPostal.length !== 4) {
        codPostal = false;
    }
    
    if (codigoPostal.includes(' ')) {
        codPostal = false;
    }

    if (!/^\d+$/.test(codigoPostal)) {
        codPostal = false;
    }
    
    
    if (codPostal) {
        mensaje = "Código postal válido";
    } else {
        mensaje = "Código postal inválido";
    }

    return mensaje;
}
