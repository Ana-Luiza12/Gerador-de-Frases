
const frases = [
    "A vida é feita de escolhas e cada uma delas constrói o seu caminho.",
    "Nunca pare de acreditar naquilo que faz seu coração feliz.",
    "O amanhã começa com as atitudes de hoje.",
    "A coragem é o primeiro passo para grandes conquistas.",
    "Cada dificuldade traz uma oportunidade de aprendizado.",
    "Seja paciente, tudo acontece no seu próprio tempo.",
    "Acredite na força que existe dentro de você.",
    "O conhecimento abre portas para novos caminhos.",
    "Não tenha medo de recomeçar, novas histórias podem surgir.",
    "Faça de cada dia uma oportunidade para crescer."
];

const btnNova = document.getElementById("bnt-nova");
const textoFrase = document.getElementById("texto-frase");

btnNova.addEventListener("click", function() {

    const indiceAleatorio = Math.floor(Math.random() * frases.length);

    textoFrase.textContent = frases[indiceAleatorio];

});
