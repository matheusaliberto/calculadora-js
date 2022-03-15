function exibir(x){
    var tela =document.getElementById('resultado')
    tela.innerHTML += x
}
function apagar(){
    var tela = document.getElementById('resultado')
    var telavalor = document.getElementById('resultado').firstChild.nodeValue
    var teladel = telavalor.slice(0,-1)

    tela.innerHTML = teladel
}
function resetar(){
    var tela =document.getElementById('resultado')
    tela.innerHTML = ""
}
function calcular(){
    var tela = document.getElementById('resultado')
    var telavalor =document.getElementById('resultado').firstChild.nodeValue
    var valorarray = telavalor.split('')

    for(let i=0;i<valorarray.length;i++){
        
        switch(valorarray[i]){
            case '+':
                //cond
            case '-':
                //cond
            case '/':
                //cond
            case '*':
                //cond
            default:
                    
        }
    }
}