const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const scoreElement = document.querySelector('.score');
const gameOverElement = document.querySelector('.game-over');

const jump =  () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}


let score = 0;
let canScore = true;
let gameRunning = true;

const loop = setInterval(() => {
    if(!gameRunning) return;
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
  
    if(pipePosition <= 120 &&pipePosition >0 && marioPosition < 80){
        pipe.style.animation ='none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation ='none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src="./images/game-over.png"; 
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        gameRunning = false;
        gameOverElement.classList.remove('hidden');
        gameOverElement        
    } 
    
    if (pipePosition <= 0 && canScore && gameRunning) {
        score++;
        scoreElement.textContent = "Score: " + score;
        canScore = false;
    }

    if (pipePosition > 120) {
        canScore = true;
    
    }
},10)


document.addEventListener('keydown', (event) => {
    if (event.key === "r" || event.key === "R") {
        location.reload();
    } else {
        jump();
    }
});