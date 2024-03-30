function operacao(produto, acao){
    const qtd = document.getElementById('qtd-' + produto)
    const valor = document.getElementById('valor-' + produto)
    const total = document.getElementById('valortotal-' + produto)

    if(acao == '-' && qtd.innerHTML == 0){
        
    } else{
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
        total.innerHTML = qtd.innerHTML * valor.innerHTML
        subtotal()
}
}

function subtotal(){
    let somatotal = 0

    for(let i =1; i<=4; i++){
        somatotal += Number(document.getElementById('valortotal-' + i).innerHTML)
    }
    document.getElementById('subtotal').innerHTML = " Subtotal: R$ " + somatotal
}

function comprar(){
    if(somatotal = 0){
        alert('Selecione ao menos 1 ítem!')
    }else{
        alert('Obrigado pela sua compra! Seu pedido será processado em breve!')

    }
  }