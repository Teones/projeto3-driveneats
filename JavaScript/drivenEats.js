let escolheuPrato
let valorPrato
let escolheuBebida
let valorBebida 
let escolheuSobremesa
let valorSobremesa

function escolherPrato(prato) {
    let selecionado = document.querySelector(".pratos .selecionado")
    if (selecionado !== null) {
        selecionado.classList.toggle("selecionado")
    }
    prato.classList.add("selecionado")
    
    let valor = document.querySelector(".pratos .selecionado .preco .valor")
    valorPrato = (valor.innerHTML)
    
    escolheuPrato = "sim"
    ativarBotao()
}
function escolherBebida(bebida) {
    let selecionado = document.querySelector(".bebidas .selecionado")
    if (selecionado !== null) {
        selecionado.classList.toggle("selecionado")
    }
    bebida.classList.add("selecionado")
    
    let valor = document.querySelector(".bebidas .selecionado .preco .valor")
    valorBebida = valor.innerHTML
    
    escolheuBebida = "sim"
    ativarBotao()
}
function escolherSobremesa(sobremesa) {
    let selecionado = document.querySelector(".sobremesas .selecionado")
    if (selecionado !== null) {
        selecionado.classList.toggle("selecionado")
    }
    sobremesa.classList.add("selecionado")
    
    let valor = document.querySelector(".sobremesas .selecionado .preco .valor")
    valorSobremesa = valor.innerHTML
    
    escolheuSobremesa = "sim"
    ativarBotao()
}

function ativarBotao() {
    let finalizar = document.querySelector(".botao")
    if (escolheuPrato == "sim" && escolheuBebida == "sim" && escolheuSobremesa == "sim") {
        finalizar.classList.add("ativo")
        finalizar.innerHTML = "Fechar Pedido"
    }
}


function finalizarPedido() {
    let pratoEscolhido = document.querySelector(".pratos .selecionado h1")
    let bebidaEscolhida = document.querySelector(".bebidas .selecionado h1")
    let sobremesaEscolhida = document.querySelector(".sobremesas .selecionado h1")
    
    let nome
    let endereco
    if (escolheuPrato == "sim" && escolheuBebida == "sim" && escolheuSobremesa == "sim") {
        nome = prompt("Qual o seu nome?")
        endereco = prompt("Qual o seu endereço?")
    }
    
    let valorTotal = (parseFloat(valorPrato) + parseFloat(valorBebida) + parseFloat(valorSobremesa)).toFixed(2)

    let mensagem =`Olá, gostaria de fazer um pedido:\n   - Prato: ${pratoEscolhido.innerHTML}\n   - Bebida: ${bebidaEscolhida.innerHTML}\n   - Sobremesa: ${sobremesaEscolhida.innerHTML}\n   Total: R$ ${valorTotal}\n
    Nome: ${nome}\n    Endereço: ${endereco}`

    window.open("https://wa.me/+558399422831?text=" + encodeURIComponent(mensagem))
}