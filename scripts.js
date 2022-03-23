let calculado = false;
let numero;


//função para inserir número na calculadora .
//if para confirmar se o valor mostrado na tela é resultado de um calculo, se sim irá zerar tela ao digitar novo número.

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

//função para inserir um operador.

function insert_operator(num) {
    var resultado = document.getElementById('resultado').innerHTML;
    var ultimo_carac = resultado.charAt(resultado.length - 1);
    var cond = !isNaN(ultimo_carac);
    if (cond == true) {
        resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado + num;
        cond = false;
    }
    else {
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1) + num;
    }
    calculado = false;
}

//função para limpar tela.

function clean() {
    document.getElementById('resultado').innerHTML = "";
    calculado = false;
}

//função para apagar ultimo número caracter da tela.

function back() {
    calculado = false;
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1);
}

//função para calcular resultado da conta na tela.

function calcular() {
    var resultado = document.getElementById("resultado").innerHTML;
    var ultimo_carac = resultado.charAt(resultado.length - 1);
    var eNum = !isNaN(ultimo_carac);

//se ultimo caracter for um número fazer conta senão não é um calculo.

    if (eNum == true) {
        document.getElementById("resultado").innerHTML = eval(resultado);
        calculado = true;
    } else {
        alert("expressão digitada não é um calculo válido!");
        calculado = false;
    }
}