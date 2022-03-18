function exibir(x){
    var tela = document.getElementById('resultado');
    tela.innerHTML += x;
}
function apagar(){
    var tela = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = tela.substring(0,tela.length-1);
}
function resetar(){
    var tela =document.getElementById('resultado');
    tela.innerHTML = "";
}
function calcular(){
    var tela = document.getElementById('resultado').innerHTML;
    if(tela){
        document.getElementById('resultado').innerHTML = eval(tela);
    }
    else{
        window.alert('Digite um valor');
    }
}