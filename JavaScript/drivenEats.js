let escolheuPrato
let escolheuBebida
let escolheuSobremesa

function escolherPrato(prato) {
    let selecionado = document.querySelector(".pratos .selecionado")
    if (selecionado !== null) {
        selecionado.classList.toggle("selecionado")
    }
    prato.classList.add("selecionado")
    
    escolheuPrato = "sim"
    ativarBotao()
}
function escolherBebida(bebida) {
    let selecionado = document.querySelector(".bebidas .selecionado")
    if (selecionado !== null) {
        selecionado.classList.toggle("selecionado")
    }
    bebida.classList.add("selecionado")

    escolheuBebida = "sim"
    ativarBotao()
}
function escolherSobremesa(sobremesa) {
    let selecionado = document.querySelector(".sobremesas .selecionado")
    if (selecionado !== null) {
        selecionado.classList.toggle("selecionado")
    }
    sobremesa.classList.add("selecionado")

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
    
}