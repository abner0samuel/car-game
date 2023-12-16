const player = document.querySelector("#player");
const enemy1 = document.querySelector("#enemy1");
const enemy2 = document.querySelector("#enemy2");
const enemy3 = document.querySelector("#enemy3");
const road_line = document.querySelector(".road_line");
const score = document.querySelector("#score");
const pause1 = document.querySelector("#pause");
const ground = document.querySelector(".ground");
const scoreinner = 0;
pause1.addEventListener("click", () => {
    alert('press ok continue')
})


player.style.display = 'none'
enemy1.style.display = 'none'
enemy2.style.display = 'none'
enemy3.style.display = 'none'
pause1.style.display = 'none'
start.style.display = 'none'
score.style.display = 'none'
let message = document.querySelector("message")
let game_state = 'start'
let scorei = 0

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
};
let enemy ={
    enemy1,
    enemy2,
    enemy3
}

function keyDown(e) {
    e.preventDefault();
    keys[e.key] = true;
}
function keyUp(e) {
    e.preventDefault();
    keys[e.key] = false;
}
document.addEventListener('keydown', (e) => {
    if (e.key == 'Enter' && game_state != 'Play') {
        document.querySelectorAll('.pipe_sprite').forEach((e) => {
            e.remove();
        });
        pause1.style.display = 'block'
        start.style.display = 'b'
        score.style.display = 'block'
        player.style.display = 'block'
        enemy1.style.display = 'block'
        enemy2.style.display = 'block'
        enemy3.style.display = 'block'
        //game_state = 'Play';
        score.innerText = 'Scores : '+   scoreinner
        enemy.style.left = Math.floor(Math.random() * 50) + "px";
        
    }
});
let playerL = 35
let playerHLocation = 30
if(player )

document.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowUp') {
        // alert('U')
        console.log(player)
        playerHLocation -= 0.5
        player.style.top = `${playerHLocation}rem`
    }
    
    if (e.key == 'ArrowDown') {
        playerHLocation += 0.5
        player.style.top = `${playerHLocation}rem`
       

    }
    if (e.key == 'ArrowLeft') {
        
        playerL -= 5
        player.style.left = `${playerL}rem`


        
        
    }
    if (e.key == 'ArrowRight') {
       
        playerL +=5
        player.style.left = `${playerL}rem`
        
        

    }
})
function endGame() {
    player.isStart = false;
    player.speed = 5;
    startScreen.classList.remove('hide');
}
