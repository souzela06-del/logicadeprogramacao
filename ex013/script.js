function somar(){
    var num1 = document.getElementById('aNum')
    let num2 = document.getElementById('aNum2')
    let soma = num1 + num2
    let resultado = document.getElementById('aResultado')
    resultado.innerHTML = soma
}
function subtrair(){
    let num1 = document.getElementBydId('sNum1')
    let num2 = document.getElementBydId('sNum2')
   let subtrair = num1 - num2
   let resultado = document.getElementById('sResultado')
   resultado.innerHTML = subtrair
}

