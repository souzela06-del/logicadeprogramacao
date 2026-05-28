function verificar(){
    let nascimento = document.getElementBydId('nascimento').value;
    /* menor de idade não pode doar sangue.*/
    let doencaSelecionada = document.querySelector
    ('input [name="sick"]:checked');

    let peso = Number(document.getElementById('peso').value)/* peso minimo 50kg */
    
    let tattooSelecionada = document.querySelector('input[name="tattoo"]:checked').value;

    let medicineSelecionada = document.querySelector('input[name="medicine"]:checked').value;

    console.log(`nascimento: ${nascimento} /
        doença: ${doençaSelecionada} /peso: $ {peso}/
        Tatuagem: ${tattooSelecionada} /
        Doença: ${medicinaSelecionada}`)
        
        console.log( nascimento)
        console.log(typeof nascimento)
        let dataNascimento = new Date(nascimento + "T00:00:00");
        console.log(dataNascimento)
        console.log(typeof dataNascimento)

        let hoje = new Date()
        let idade = hoje.getFullYear() - 
        dataNascimento.getFullYear() - dataNascimento.getFullYear();
       
        let dia = dataNascimento.getDay()
        let mes = dataNascimento.getMonth()
   
        var dia = nascimento()
        if {
            

        }

}