let calculado = false;
let numero;
let limite = 9;
let rem = 2.8;
let texto;

//fução para formatar tamanho dos caracteres caso seja maior que o limite

function formatar() {
    texto = document.getElementById('resultado').innerHTML;
    console.log(texto.toString().length);
    console.log(texto);
    if (texto.toString().length > limite) {
        console.log("formatação alterada");
        document.getElementById("resultado").style.fontSize = rem / 2 - 0.1 + "rem";
        rem = rem / 2 - (0.1 * 2);
        limite++
        limite *= 4;
    }
}


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
    document.getElementById("resultado").style.fontSize = 2.8 + "rem";
    limite = 9;
    rem = 2.8;
    console.log(limite);
    calculado = false;
}

//função para apagar ultimo número caracter da tela.

function back() {
    calculado = false;
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1);
    if (texto.toString().length < limite) {
        limite = 9;
        rem = 2.8;
        document.getElementById("resultado").style.fontSize = 2.8 + "rem";
    }
}

//função para calcular resultado da conta na tela.

function calcular() {
    var resultado = document.getElementById("resultado").innerHTML;
    var ultimo_carac = resultado.charAt(resultado.length - 1);
    var eNum = !isNaN(ultimo_carac);

    //se ultimo caracter for um número fazer conta, senão não é um calculo válido.

    if (eNum == true) {
        document.getElementById("resultado").innerHTML = eval(resultado);
        calculado = true;
    } else {
        alert("expressão digitada não é um calculo válido!");
        calculado = false;
    }
}