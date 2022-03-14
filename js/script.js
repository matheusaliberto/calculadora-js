function exibir(x){
    var ftela =document.getElementById('resultado')
    ftela.innerHTML += x
}
function apagar(){
    window.alert('em construção')
}
function resetar(){
    var tela =document.getElementById('resultado')
    tela.innerHTML = "0"
}
function calcular(){
    var ftela = document.getElementById('resultado')
    var tela = ftela.value
    var tela2 = Array.from(tela);
    window.alert(tela2)
    window.alert(typeof tela2[0])
}