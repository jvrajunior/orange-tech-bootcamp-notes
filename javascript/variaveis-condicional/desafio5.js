/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o pre�o normal de etiqueta e a
escolha da condi��o de pagamento. 
Utilize os c�digos da tabela a seguir para ler qual a condi��o de pagamento escolhida e efetuar o c�lculo adequado.

C�digo Condi��o de pagamento:
- � vista D�bito, recebe 10% de desconto;
- � vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, pre�o normal de etiqueta sem juros;
- Acima de duas vezes, pre�o normal de etiqueta mais juros de 10%;*/

function aplicarDesconto(valor,desconto) {
    descontoAplicado = desconto / 100
    return valor - (valor * descontoAplicado)
}

function aplicarJuros(valor,juros) {
    jurosAplicado = juros / 100
    return valor + (valor * jurosAplicado)
}

const condicaoPagamento = "Crédito"
const numeroParcelas = 3

if (condicaoPagamento == "Debito") {
    console.log(aplicarDesconto(10,10))
} else if (condicaoPagamento == "Crédito"){
    if (numeroParcelas > 2) {
        console.log(aplicarJuros(10,10))
    } else {
        console.log(precoProduto)
    }
    
} else if (condicaoPagamento == "Dinheiro" || condicaoPagamento == "PIX") {
    precoFinal = precoProduto - (precoProduto * 0.15)
    console.log(precoFinal)
}
