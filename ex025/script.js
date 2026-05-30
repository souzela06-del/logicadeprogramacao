function contar(){
  var inicio = Number(document.getElementById ('input_inicio').value)
  var fim = Number(document.getElementById ('input_fim').value)
  var Passo = Number(document.getElementById('input_passo').value)
  resultado.innerHTML = ''

  if(passo === 0){
     resultado.innerHTML = `O valor do passo pode ser 0.`

  }else if(inicio < fim){
    for(inicio < inicio <= fim; inicio +=passo){
        if(inicio + passo >fim){
            resultado.innerHTML += `${inicio}\u{1F3C1}
        }else{
              resultado.innerHTML += `$(inicio)\u{27A1}
            }
    }
  }else{
    for(inicio; inicio>= fim;){
        if(inicio - passo <fim){
            resultado.resultadoHTML +=`${inicio}\u{1F3C1}`
        }else{
            resultado innerHTML 
        }
    }
  }

}