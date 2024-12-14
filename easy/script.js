// Seleciona o elemento <audio> e o botão
const musica = document.getElementById("musica-fundo");
const botaoMusica = document.getElementById("botao-musica");

// Variável de controlo
let musicaLigada = true;

// Adiciona o evento de clique
botaoMusica.addEventListener("click", () => {
    if (musicaLigada) {
        musica.pause(); // Pausa a música
        botaoMusica.innerHTML = "🔇"; // Ícone de som desligado
    } else {
        musica.play(); // Retoma a música
        botaoMusica.innerHTML = "🔊"; // Ícone de som ligado
    }
    musicaLigada = !musicaLigada; // Alterna o estado
});
