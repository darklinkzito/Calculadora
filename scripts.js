let calculado = false;
let numero;

function insert(num) {
    if (calculado == false) {
        numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
    } else {
        document.getElementById('resultado').innerHTML = "";
        numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
        calculado = false;
    }
}

function insert_operator(num) {
    tecla = num;
    numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    calculado = false;
    if (numero.substring(numero.length-1, numero.length) == num) {
        var resultado = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML = num.replace(num, tecla);
    } else {
        var resultado = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML = numero + num;
    }
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
    calculado = false;
}

function back() {
    calculado = false;
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById("resultado").innerHTML;
    if (resultado) {
        document.getElementById("resultado").innerHTML = eval(resultado);
        calculado = true;
    } else {
        document.getElementById("resultado").innerHTML = "Error";
        calculado = false;
    }
}