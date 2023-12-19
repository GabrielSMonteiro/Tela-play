document.addEventListener('DOMContentLoaded', () => {
    const play = document.getElementById('play');
    const canvas = document.getElementById('pacman');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    play.addEventListener('click', () => {
        alert('Vamos jogar!');
        canvas.style.display = 'none'; // Oculta o canvas ao clicar em PLAY
    });

    // Você pode substituir o código dentro da função setInterval pelo lógica real do jogo.
    const gameLoop = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Desenha o pacman
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }, 1000 / 60);
});
