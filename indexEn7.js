function calcularDiff() {

    var inputDate = document.getElementById("inputDate").value;
    var currentDate = new Date();
    var targetDate = new Date(inputDate);
    
    // Calc diff en milliseconds
    var difference = targetDate.getTime() - currentDate.getTime();
    
    // Conv de  milliseconds a dias
    var days = Math.ceil(difference / (1000 * 3600 * 24));
    
    var result = document.getElementById("result");
    
    if (days === 0) {
        result.innerText = "¡Es hoy es hoy :P !";
    } else if (days > 0) {
        result.innerText =  "Faltan" + days + "dias";
    } else {
        result.innerText = "La fecha ingresada ya ha pasado hace " + days +"dias";
    }
}
