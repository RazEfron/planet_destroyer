Game = require('../dist/game')

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    const game = new Game(canvas, ctx);
    let lastTime = 0;

    
    gameLoop = (timeStamp) => {
        lastTime = timeStamp;
        game.update();
        game.draw();
        requestAnimationFrame(gameLoop);
    }
    requestAnimationFrame(gameLoop)
})