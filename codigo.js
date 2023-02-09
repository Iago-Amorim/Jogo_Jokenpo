// Este é um Jogo de Pedra, Papel e Tesoura (Jokenpô) com Javascript, HTML e CSS.
// Autor: Iago Assunção Amorim       Data: 09/02/2023

// Variaveis de elementos do DOM
const span_pontos_cpu = document.querySelector("#pontos_cpu")
const span_pontos_jogador = document.querySelector("#pontos_jogador")
const span_jogada_cpu = document.querySelector("#jogada_cpu")
const span_jogada_jogador = document.querySelector("#jogada_jogador")
const resultado = document.querySelector("#resultado")
const div_resultado = document.querySelector(".div_resultado")
const escolha = [...document.querySelector(".div_escolha").children]

// Variaveis
const lista = ["Pedra", "Papel", "Tesoura"]
let pontos_cpu = 0
let pontos_jogador = 0

// Função lambda com a logica do jogo
const jogada = (jogador_jogada) => {
    // Colocar a escolha do jogador no DOM
    span_jogada_jogador.innerHTML = jogador_jogada

    // Sortear a jogada do CPU e colocar no DOM
    const cpu_jogada = lista[Math.floor(Math.random() * 3)]
    span_jogada_cpu.innerHTML = cpu_jogada

    // Verificar quem ganhou, iniciando sempre considerando que o jogador ganhou
    let vitoria = 1
    if(jogador_jogada == cpu_jogada){
        vitoria = 0
    }else if(cpu_jogada == "Pedra" && jogador_jogada == "Tesoura"){
        vitoria = -1
    }else if(cpu_jogada == "Tesoura" && jogador_jogada == "Papel"){
        vitoria = -1
    }else if(cpu_jogada == "Papel" && jogador_jogada == "Pedra"){
        vitoria = -1
    }

    // Informar o DOM quem vençeu ou se teve empate
    switch (vitoria) {
        case 1:
            resultado.classList.remove("derrota")
            resultado.classList.add("vitoria")
            resultado.innerHTML = "Vitoria"
            pontos_jogador++
            break
        case -1:
            resultado.classList.remove("vitoria")
            resultado.classList.add("derrota")
            resultado.innerHTML = "Derrota"
            pontos_cpu++
            break
        case 0:
            resultado.classList.remove("derrota")
            resultado.classList.remove("vitoria")
            resultado.innerHTML = "Empate"
            break
    }

    // Mostra a pontuação do jogo
    span_pontos_cpu.innerHTML = pontos_cpu
    span_pontos_jogador.innerHTML = pontos_jogador
}

// Adicionar evento de click nos botões
escolha.map((el) => {
    el.addEventListener("click", (evt) => {
        div_resultado.style = "display: flex;"
        jogada(evt.target.id)
    })
})


