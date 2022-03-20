function insert(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clear() {
    document.getElementById('resultado').innerHTML = "";
}