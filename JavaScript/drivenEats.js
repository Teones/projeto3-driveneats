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
    finalizarPedido()
}
function escolherBebida(bebida) {
    let selecionado = document.querySelector(".bebidas .selecionado")
    if (selecionado !== null) {
        selecionado.classList.toggle("selecionado")
    }
    bebida.classList.add("selecionado")

    escolheuBebida = "sim"
    finalizarPedido()
}
function escolherSobremesa(sobremesa) {
    let selecionado = document.querySelector(".sobremesas .selecionado")
    if (selecionado !== null) {
        selecionado.classList.toggle("selecionado")
    }
    sobremesa.classList.add("selecionado")

    escolheuSobremesa = "sim"
    finalizarPedido()
}

function finalizarPedido() {
    let finalizar = document.querySelector(".botao")
    if (escolheuPrato == "sim" && escolheuBebida == "sim" && escolheuSobremesa == "sim") {
        finalizar.classList.add("ativo")
        finalizar.innerHTML = "Fechar Pedido"
    }
}