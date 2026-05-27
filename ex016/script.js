
function descobrir(){
    var numero = Numero(window.prompt('Digite um número:'))
    if (numero % 2 == 0){
        resultado.innerHTMl = '<p>0 número $(numero) é par,</p>'
    } else{
        resultado.innerHTMl = '<p>0 número ${numero} é ímpar,</p>'
    }
    
}