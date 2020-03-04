Game = require('../dist/game')

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    let game = new Game(canvas, ctx);

    let lastTime = 0;
    
    gameLoop = (timeStamp) => {
        let deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        game.board.updateGame(deltaTime);
        game.board.drawGame();
        requestAnimationFrame(gameLoop);
    }
    requestAnimationFrame(gameLoop)
})