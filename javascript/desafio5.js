/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a
escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/

function aplicarDesconto(valor,desconto) {
    descontoAplicado = desconto / 100
    return valor - (valor * descontoAplicado)
}

function aplicarJuros(valor,juros) {
    jurosAplicado = juros / 100
    return valor + (valor * jurosAplicado)
}

const condicaoPagamento = "Credito"
const numeroParcelas = 3

if (condicaoPagamento == "Debito") {
    console.log(aplicarDesconto(10,10))
} else if (condicaoPagamento == "Credito"){
    if (numeroParcelas > 2) {
        console.log(aplicarJuros(10,10))
    } else {
        console.log(precoProduto)
    }
    
} else if (condicaoPagamento == "Dinheiro" || condicaoPagamento == "PIX") {
    precoFinal = precoProduto - (precoProduto * 0.15)
    console.log(precoFinal)
}
