const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
let score = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const updateScoreboard = () => {
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.textContent = `Score: ${score}`;
}

updateScoreboard(); // Atualiza o score inicial na tela

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 70 ) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'MarioOver.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', () => {
    jump();
    score++; // Incrementa o score ao pular
    updateScoreboard(); // Atualiza o scoreboard na tela
});