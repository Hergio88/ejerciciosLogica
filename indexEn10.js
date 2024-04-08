function calculadora(val1, signo, val2) {
    // Verificar  valores numericos
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Error: Los argumentos deben ser números.";
    }

    switch (signo) {
        case "+":
            return val1 + val2;
        case "-":
            return val1 - val2;
        case "*":
            return val1 * val2;
        case "/":
            // evita divicion por cero
            if (val2 === 0) {
                return "Error: No se puede dividir por cero.";
            }
            return val1 / val2;
        default:
            return "Error: Operador inválido.";
    }
}

