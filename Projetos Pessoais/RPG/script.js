//Celebro do projeto
const nomePersonagem =
    document.getElementById("nomePersonagem")

const textoDialogo =
    document.getElementById("textoDialogo")

const choices =
    document.getElementById("choices")

const itensDiv =
    document.getElementById("itens")

const cenacenario =
    document.getElementById("background")

const audio = new Audio()

function tocarSom(src){

    const som = new Audio(src)

    som.play()
}

const flags = {}


//Sistema de Itens
const inventario = []

//Função pra ter Itens
function temItem(item) {

    return inventario.includes(item)
}

//Função de pegar itens
function pegarItem(item) {

    inventario.push(item)

    atualizarInventario()
}

//Função para apagar itens
function removerItem(item) {

    const index =
        inventario.indexOf(item)

    if (index !== -1) {

        inventario.splice(index, 1)

        atualizarInventario()
    }
}
//Para atualizar o HUD
function atualizarInventario() {

    itensDiv.innerHTML = ""

    inventario.forEach(item => {

        const p =
            document.createElement("p")

        p.innerText = item

        itensDiv.appendChild(p)
    })
}

//Sistema de dialogo//
function mostrarDialogo(nome, texto) {

    nomePersonagem.innerText = nome

    textoDialogo.innerText = texto
}

//Sistema de Escolhas
function criarEscolha(
    texto,
    acao
) {

    const btn =
        document.createElement("button")

    btn.innerText = texto

    btn.onclick = () => {

        acao(btn)
    }

    choices.appendChild(btn)
}

//Sistema de mudar de Cenas
function mudarCena(idCena) {

    const cena = cenas[idCena]

    choices.innerHTML = ""

    cenacenario.style.backgroundImage =
        `url("${cena.background}")`

    const textoFinal =

        typeof cena.texto === "function"

            ? cena.texto()

            : cena.texto

    mostrarDialogo(
        cena.nome,
        textoFinal
    )

    cena.escolhas.forEach(escolha => {

        if (
            escolha.mostrarSe &&
            !escolha.mostrarSe()
        ) {
            return
        }

        if (
            escolha.id &&
            flags[escolha.id]
        ) {
            return
        }

        criarEscolha(
            escolha.texto,

            () => {

                escolha.acao()
            }
        )
    })
}

mudarCena("intro")