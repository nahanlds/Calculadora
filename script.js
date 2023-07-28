function aparece(num){
    var numero = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = numero + num
}

function limpar(){
    var p = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = p.substring(0, p.length - 1);
}

function limparTudo(){
    var num = document.querySelector('#resultado');
    num.innerHTML = "";
}

function result() {
    var num = document.querySelector('#resultado').innerHTML;
    if(num){
        num = document.querySelector('#resultado').innerHTML = eval(num)
    } else {
        num = document.querySelector('#resultado').innerHTML = 'nada para calcular'
    }
}