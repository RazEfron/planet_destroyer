Game = require('../dist/game')

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    let game = new Game(canvas, ctx);
    requestAnimationFrame(game.gameLoop)
})