function replaceVocales() {
    var inputString = document.getElementById("inputString").value;

    // 
    if (typeof inputString === 'string') {
        //  mapea cada vocal a su respectivo n°
        const vowelMap = {
            'a': '1',
            'A': '1',
            'e': '2',
            'E': '2',
            'i': '3',
            'I': '3',
            'o': '4',
            'O': '4',
            'u': '5',
            'U': '5'
        };

        // reempl. vocal con su número correspondiente
        var resultString = inputString.replace(/[aeiouAEIOU]/g, match => vowelMap[match]);
//ok
        document.getElementById("result").innerText = resultString;
    } else {
        // error
        document.getElementById("result").innerText = "Por favor, ingrese una cadena válida.";
    }
}
