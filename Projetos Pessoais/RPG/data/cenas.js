const cenas = {

    intro: {

        nome: "Kal",

        background: "assets/backgrounds/inicio.jpg",

        texto: () => {

            if (flags.pegarChave) {

                return "Eu peguei a chave"

            } else {

                return "Aonde eu estou...?"
            }
        },

        escolhas: [

            {
                id: "pegarChave",

                texto: "Pegar chave",

                acao: (btn) => {

                    pegarItem("Chave")

                    flags.pegarChave = true

                    tocarSom(
                        "assets/sounds/keys.wav"
                    )

                    mostrarDialogo(
                        "Kal",
                        "Eu peguei a chave"
                    )

                    setTimeout(() => {

                        mudarCena("intro")

                    }, 100)
                }
            },


            {
                texto: "Seguir andando",

                acao: (btn) => {

                    tocarSom(
                            "assets/sounds/walking.wav"
                        )

                    setTimeout(() => {

                        mudarCena("porta")

                    }, 4000)
                }
            }

        ]
    },


    //CENA PORTA
    porta: {

        nome: "Kal",

        background: "assets/backgrounds/porta.jpg",

        texto: () => {

            if (flags.abrirPorta) {

                return "O caminho se estende a frente"

            } else {

                return "Uma porta trancada barra a passagem"
            }
        },

        escolhas: [

            {

                id: "abrirPorta",

                texto: "Abrir porta",

                acao: (btn) => {

                    if (temItem("Chave")) {

                        flags.abrirPorta = true

                        removerItem("Chave")

                        tocarSom(
                            "assets/sounds/unlockingDoor.wav"
                        )

                        mostrarDialogo(
                            "Kal",
                            "A chave serviu."
                        )

                        setTimeout(() => {

                            mudarCena("porta")

                        }, 1000)

                    } else {

                        tocarSom(
                            "assets/sounds/lockedDoor.wav"
                        )

                        mostrarDialogo(
                            "Kal",
                            "Talvez precise de uma chave."
                        )
                    }

                }
            },

            {
                texto: "Entrar",

                mostrarSe: () => {
                    return flags.abrirPorta
                },

                acao: () => {

                    tocarSom(
                        "assets/sounds/openingDoor.wav"
                    )

                    setTimeout(() => {

                        mudarCena("corredor")

                    }, 1000)
                }
            },


            {

                texto: "Voltar",

                acao: (btn) => {
                    tocarSom(
                            "assets/sounds/walking.wav"
                        )

                    setTimeout(() => {

                        mudarCena("intro")

                    }, 4000)

                    setTimeout(() => {

                        mostrarDialogo(
                            "Kal",
                            "Hum..."
                        )

                    }, 4000)
                }
            }

        ]
    }

}