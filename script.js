function mostrarDisplay (value) {
    document.getElementById("display").value += value;
}

function zerarDisplay () {
    document.getElementById("display").value = "";
}

function calcularResultado() {
    var resultado = eval(document.getElementById("display").value);
    document.getElementById("display").value = resultado
}